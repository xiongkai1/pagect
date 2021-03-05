import React from 'react';
import styles from './fontUploading.less';
import { Table, Button, Modal, Form, Input, Upload, Icon, notification, Progress, Tabs  } from 'antd';
import { partUploader, claimUploadId, completeMultipartUpload } from 'Services/oss';
import { getToken } from 'Utils/auth';
import WorksDetails from './components/worksDetails/WorksDetails';
import axios from 'axios';
import reqwest from 'reqwest';
const { TabPane } = Tabs;

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
class FontUploading extends React.Component {

    state = {
        fileList: [],
        uploading: false,
        index: 0,
        uploadId: '',
        pause: false, // 暂停
        fileType: 'PICTURE',
        percent: 0, // 进度
        // picture: [],
        previewVisible: false,
        previewImage: ''

    };
    handleCancel = () => this.setState({ previewVisible: false });

    handleUpload = () => {
        const { fileList } = this.state;
        fileList.forEach((file) => {
            
            this.Upload(file);
        });
    
        this.setState({
            uploading: true
        });
        // You can use any AJAX library you like
       
    };

    Upload =(file) => {
        if (this.state.pause) {
            return;
        }
        claimUploadId({
            catalog: file.lastModified,
            fileName: file.name,
            type: this.state.fileType
        }).then(res => {
            if (res.data.code === 200) {
                this.UploadPost(file, res);
            }
        });

    }

    UploadPost =(file, res) => {

        let size = file.size;

        let totalSize = 1 * 1024 * 1024;
        let totalCount = Math.ceil(size / totalSize);
        if (this.state.index >= totalCount) {
            // 获取地址
            completeMultipartUpload({
                type: this.state.fileType,
                uploadId: res.data.data
            }).then(res => {
                this.state.fileList.push(res.data.data);
                // console.log(this.state.fileList);
                // 上传完成
                this.setState({
                    // fileList: res.data,
                    index: 0
                });

                setTimeout(this.setState({
                    percent: 0
                }), 300);
            });
          
            return;
        }
        let start = this.state.index * totalSize;
        let end = start + totalSize;
        let block = file.slice(start, end);
        let formData = new FormData();
        let dataRes = res;
        formData.set('file', block);
        formData.set('uploadId', res.data.data); 
        formData.set('type', this.state.fileType);
        formData.set('partNumber', this.state.index + 1);
        reqwest({
            url: 'http://8.134.8.97:8084/shopping-center/oss/partUploader',
            method: 'post',
            processData: false,
            data: formData,   
            async: true,
            xhr: () => {
                let xhr = new XMLHttpRequest();
                xhr.upload.onprogress = (e) => {
                    console.log('totleCount:' + totalCount);
                    console.log('index:' + this.state.index);
                    console.log('contenet:' + Math.ceil((e.loaded / e.total) * 100 ));
                    var progressWidth = Math.ceil((e.loaded / e.total) * 100 / totalCount * (this.state.index + 1));
                    console.log(progressWidth);
                    this.setState({
                        percent: progressWidth
                    });
                };
                return xhr;
            },
            success: (res) => {
                if (res.code === 200) {
                    this.setState({
                        index: this.state.index + 1
                    });
                    this.UploadPost(file, dataRes);
                }
            },
            error: () => {
                this.setState({
                    uploading: false
                });
                message.error('upload failed.');
            }

        });

    }
    handleSubmit = (e) => {
        console.log('1');
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                values.commTypeId = this.state.fileType;
                const fileFormat =  values.commoditDetailTypefaceVoList.fileFormat;
                const faceVoList = values.commoditDetailTypefaceVoList = [];
               
                this.state.fileList.forEach((list) => {
                    var data = {};
                    data.fileFormat = fileFormat;
                    data.dataUrl = list;
                    console.log(data.dataUrl);
                    console.log(data);
                    faceVoList.push(data);
                });
                values.commodityStatus = '0';

                console.log('Received values of form: ', values);
                
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const {  fileList, tabInfo } = this.state;

        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">上传字体文件</div>
                <div className="ant-upload-text">(不要打包,直接上传)</div>
            </div>
        );
        const props = {
            onRemove: file => {
                this.setState(state => {
                    const index = state.fileList.indexOf(file);
                    const newFileList = state.fileList.slice();
                    newFileList.splice(index, 1); 
                    return {
                        fileList: newFileList
                    };
                });
            },
            beforeUpload: file => {
                this.Upload(file);
                
                this.setState(state => ({
                    previewVisible: true
                }));
                return false;
            }
            
        };

        return (
            <div className={styles.fontUploading}>
                <div className={styles.clearfix}>
                    <Upload {...props}
                        listType="picture-card"
                        disabled={this.state.percent === 0 ? false : true}>
                        {fileList.length >= 8 ? null : uploadButton}
                    </Upload>
                    <Progress  percent={this.state.percent} />

                </div>
                <div className={styles.worksDetails}>
                    <Tabs>
                        <TabPane tab="作品设置" key="1">
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Item label="标题">
                                    {getFieldDecorator('commName', {
                                        rules: [{ required: true, message: '标题不能为空' }]
                                    })(<Input placeholder="产品标题" />)}
                                </Form.Item>
                                <Form.Item label="描述">
                                    {getFieldDecorator('specsInfo', {
                                        rules: [{ required: true, message: '描述不能为空' }]
                                    })(<Input placeholder="产品描述"/>)}
                                </Form.Item>
                                <Form.Item label="价格">
                                    {getFieldDecorator('commodityTypefacePriceInfoVoList.authorizationPrice', {
                                        rules: [{ required: true, message: '价格不能为空' }]
                                    })(<Input placeholder="按照授权，设置价格"/>)}
                                </Form.Item>
                                <Form.Item label="分润">
                                    {getFieldDecorator('shareProfit', {
                                        rules: [{ required: true, message: '分润不能为空' }]
                                    })(<Input placeholder="你分给平台的比例，比例越高，产品越靠前"/>)}
                                </Form.Item>
                                {/* <Form.Item label="保存到字体文件夹">
                                    {getFieldDecorator('shareProfit', {
                                        rules: [{ required: true, message: '标题不能为空' }]
                                    })(<Input />)}
                                </Form.Item> */}

                                <Form.Item label="格式">
                                    {getFieldDecorator('commoditDetailTypefaceVoList.fileFormat', {
                                        rules: [{ required: true, message: '格式不能为空' }]
                                    })(<Input placeholder="文件格式"/>)}
                                </Form.Item>
                                <Form.Item label="风格">
                                    {getFieldDecorator('genreStyle.fontStyle', {
                                        rules: [{ required: true, message: '风格不能为空' }]
                                    })(<Input placeholder="文件风格"/>)}
                                </Form.Item>
                                <Form.Item label="类型">
                                    {getFieldDecorator('genreStyle.fontType', {
                                        rules: [{ required: true, message: '类型不能为空' }]
                                    })(<Input placeholder="文件类型"/>)}
                                </Form.Item>
                                <Form.Item label="语系">
                                    {getFieldDecorator('genreStyle.fontType', {
                                        rules: [{ required: true, message: '语系不能为空' }]
                                    })(<Input placeholder="文件语系"/>)}
                                </Form.Item>
                                <Form.Item label="编码">
                                    {getFieldDecorator('genreStyle.fontType', {
                                        rules: [{ required: true, message: '语系不能为空' }]
                                    })(<Input placeholder="文件语系"/>)}
                                </Form.Item>
                                <Form.Item >
                                    <Button type="danger" htmlType="submit" disabled={this.state.percent === 0 ? false : true}>上传</Button>
                                </Form.Item>
                            </Form>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        );
    }
   
}
const BaseInfo = Form.create()(FontUploading);

export default BaseInfo;

