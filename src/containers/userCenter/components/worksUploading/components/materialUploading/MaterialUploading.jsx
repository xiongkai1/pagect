import React from 'react';
import styles from './materialUploading.less';
import {  Button,  Radio, Form, Input, Upload, Icon, Select, Progress, Tabs, message  } from 'antd';
import Cookies from 'Utils/cookie';
import reqwest from 'reqwest';
import { partUploader, claimUploadId, completeMultipartUpload } from 'Services/oss';
import { commodityClassification } from 'Services/classification';
import { shopDesignMaterialUpload } from 'Services/commodityinfo';
import { selectShopInfoList } from 'Services/mallinfo';

const { TabPane } = Tabs;
const { Option } = Select;
function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

class MaterialUploading extends React.Component {
    constructor(props) {
        super(props);   

        commodityClassification({
            type: 1
        }).then(e => {
            if (e.data.code === 200) {
                let dataList = e.data.data;
                dataList.forEach(data => {
                    if (data.code === 'FONT_STYLE') {
                        console.log(data);
                        this.setState({
                            fontStyle: data.list
                        });
                    }   
                    if (data.code === 'FONT_TYPE') {
                        this.setState({
                            fontType: data.list
                        });
                    }   
                    if (data.code === 'FONT_LANGUAGE_SYSTEM') {
                        this.setState({
                            fontLanguageSystem: data.list
                        });
                    }   
                    if (data.code === 'FONT_CODING') {
                        this.setState({
                            fontCoding: data.list
                        });
                    }
                });        
            }
        });
       
        // 获取店铺id
        selectShopInfoList({
            current: 1,
            size: 5,
            userId: Cookies.get('userId')
        }).then(e => {
            let data = e.data.data;
            if (e.data.code === 200) {
                if (data.records.length === 0) {
                    this.setState({
                        lout: false
                    });
                    message.error('你还没有店铺,请去申请店铺');
                }
                data.records.forEach(data => {
                    // 图片
                    if (data.shopTypeCode === 1) {
                        this.setState({
                            mallId: data.shopTypeId,
                            lout: true
                        });
                    }
                });
                if (this.state.mallId === '') {
                    message.error('你还没有店铺,请去申请店铺');
                }
            }
        });
    }
    state = {
        // 字体格式
        fontStyle: [],
        // 类型
        fontType: [],
        // 语系
        fontLanguageSystem: [],
        // 编码
        fontCoding: [],
        // 店鋪id
        mallId: '',
        fileList: [],
        uploading: false,
        index: 0,
        uploadId: '',
        pause: false, // 暂停
        // 素材设计
        fileType: 'DESIGNMATERIAL',
        percent: 0, // 进度
        previewVisible: false,
        previewImage: '',
        category: '',
        lout: false

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
                this.setState({
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
            // 异步 
            async: true,
            xhr: () => {
                let xhr = new XMLHttpRequest();
                xhr.upload.onprogress = (e) => {
                    var progressWidth = ((e.loaded * (this.state.index + 1) / (totalCount ) / e.total * (this.state.index + 1) / (totalCount )) * 100).toFixed(2);
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
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                values.commTypeId = this.state.fileType;
                const fileFormat =  values.detailDesignVoList.fileFormat;
                const faceVoList = values.detailDesignVoList = [];
               
                const authorizationPrice = values.designPriceInfoVoList.authorizationPrice;// 价格
                const authorizationPriceSell = values.designPriceInfoVoList.authorizationPriceSell;// 价格
                const priceVoList =  values.designPriceInfoVoList = [];

                this.state.fileList.forEach((list, index) => {
                  
                    if (index !== 0) {
                        var data = {};
                        data.fileFormat = fileFormat;
                        data.dataUrl = list;
                        faceVoList.push(data);
    
                        var prictData = {};
                        prictData.authorizationPrice = authorizationPrice;
                        prictData.authorizationPriceSell = authorizationPriceSell;
                        // 授权年现
                        prictData.authorizationTime = '3';
                        // 授权类型
                        prictData.authorizationTypeCode = '1';
                        // 授权范围信息
                        prictData.authorizationInfo = '';
                        priceVoList.push(prictData);
                    }

                });
                values.mallId = this.state.mallId;
                values.commodityStatus = '0';
                values.coverUrl = this.state.fileList[0];
                const commodityTypefaceVo = values;

                const des = {};
                des.duration = '';
                des.fileSize = '';
                des.resolvingPower = '';
                des.size = '';
                des.uploadTime = '';
                values.designWorkInformationVo = {};
                values.designWorkInformationVo = des;

                // 添加商品
                shopDesignMaterialUpload(commodityTypefaceVo).then(e => {
                    if (e.data.code === 200) {
                        message.success(e.data.msg);
                    }

                    if (e.data.code === 604) {
                        message.error(e.data.msg);
                    }
                });

            }
        });
    }
    selectFontStyle =value => {
        console.log(value);
    }
    selectFontType = value => {
        console.log(value);
    }
    selectFontLanguageSystem = value => {
        console.log(value);
    }
    selectfontCoding = value => {
        console.log(value);
    }

    render() {
             
        const { getFieldDecorator } = this.props.form;
        const {  fileList, fontStyle, fontType, fontLanguageSystem, fontCoding, lout } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">上传字体文件</div>
                <div className="ant-upload-text">(不要打包,直接上传)</div>
            </div>
        );
        const uploadButton1 = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">6:4字体封面图</div>
                <div className="ant-upload-text">所上文件不要带水印标签</div>
                <div className="ant-upload-text">大小5MB</div>
            
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
            <div className={styles.materialUploading}>
              
                <div className={styles.clearfix}>
                    <Upload {...props}
                        listType="picture-card"
                        disabled={this.state.percent === 0 && lout ? false : true}>
                        {fileList.length >= 8 || fileList.length === 0 ? null : uploadButton}
                        {fileList.length === 0 ? uploadButton1 : null}
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
                                <Form.Item label="市场价">
                                    {getFieldDecorator('designPriceInfoVoList.authorizationPrice', {
                                        rules: [{ required: true, message: '价格不能为空' }]
                                    })(<Input placeholder="按照授权，设置价格"/>)}
                                </Form.Item>
                                <Form.Item label="售价">
                                    {getFieldDecorator('designPriceInfoVoList.authorizationPriceSell', {
                                        rules: [{ required: true, message: '价格不能为空' }]
                                    })(<Input placeholder="按照授权，设置价格"/>)}
                                </Form.Item>
                                <Form.Item label="分润">
                                    {getFieldDecorator('shareProfit', {
                                        rules: [{ required: true, message: '分润不能为空' }]
                                    })(<Input placeholder="你分给平台的比例，比例越高，产品越靠前"/>)}
                                </Form.Item>
                                <Form.Item label="格式">
                                    {getFieldDecorator('detailDesignVoList.fileFormat', {
                                        rules: [{ required: true, message: '格式不能为空' }]
                                    })(<Input placeholder="视频格式"/>)}
                                </Form.Item>
                                <Form.Item label="风格">
                                    {getFieldDecorator('genreStyle.fontStyle', {
                                        rules: [{ required: true, message: '风格不能为空' }]
                                    })(
                                        <Select
                                            placeholder="字体风格"
                                            onChange={this.selectFontStyle}
                                        >
                                            {
                                                fontStyle.map((item, index) => {
                                                    return (
                                                        <Option key={index} value={item.ITEM_TEXT}>{item.ITEM_TEXT}</Option>
                                                    );
                                                })
                                            }
                                         
                                        </Select>
                                    )}
                                </Form.Item>
                                <Form.Item label="类型">
                                    {getFieldDecorator('genreStyle.fontType', {
                                        rules: [{ required: true, message: '类型不能为空' }]
                                    })(
                                        <Select
                                            placeholder="字体类型"
                                            onChange={this.selectFontType}
                                        >
                                            {
                                                fontType.map((item, index) => {
                                                    return (
                                                        <Option key={index} value={item.ITEM_TEXT}>{item.ITEM_TEXT}</Option>
                                                    );
                                                })
                                            }
                                     
                                        </Select>
                                    )}
                                </Form.Item>
                                <Form.Item label="语系">
                                    {getFieldDecorator('genreStyle.fontLanguageSystem', {
                                        rules: [{ required: true, message: '语系不能为空' }]
                                    })(
                                        <Select
                                            placeholder="字体语系"
                                            onChange={this.selectFontLanguageSystem}
                                        >
                                            {
                                                fontLanguageSystem.map((item, index) => {
                                                    return (
                                                        <Option key={index} value={item.ITEM_TEXT}>{item.ITEM_TEXT}</Option>
                                                    );
                                                })
                                            }
                                 
                                        </Select>
                                    )}
                                </Form.Item>
                                <Form.Item label="编码">
                                    {getFieldDecorator('genreStyle.fontCoding', {
                                        rules: [{ required: true, message: '编码不能为空' }]
                                    })(
                                        <Select
                                            placeholder="字体编码"
                                            onChange={this.selectfontCoding}
                                        >
                                            {
                                                fontCoding.map((item, index) => {
                                                    return (
                                                        <Option key={index} value={item.ITEM_TEXT}>{item.ITEM_TEXT}</Option>
                                                    );
                                                })
                                            }
                             
                                        </Select>
                                    )}
                                </Form.Item>
                               
                                <Form.Item label="关键字,标签">
                                    {getFieldDecorator('keyword', {
                                        rules: [{ required: true, message: '关键字标签不能为空' }]
                                    })(
                                        <div className={styles.keyword}>
                                            <Radio.Group>
                                                {/* <span className={styles.keywordSpan}></span> */}
                                                <Radio value="黑体">黑体</Radio>
                                                <Radio value="宋体">宋体</Radio>
                                                <Radio value="行书">行书</Radio>
                                                <Radio value="楷书">楷书</Radio>
                                                <Radio value="草书">草书</Radio>
                                                <Radio value="好看">好看</Radio>
                                                <Radio value="平易近人">平易近人</Radio>
                                                <Radio value="很多标签">很多标签</Radio>
                                            </Radio.Group>
                                        </div>
                                    )}
                                </Form.Item>
                                <Form.Item >
                                    <Button type="danger" htmlType="submit" disabled={this.state.percent === 0 && lout && fileList.length > 1 ? false : true}>上传</Button>
                                </Form.Item>
                            </Form>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        );
    }
   
}
const BaseInfo = Form.create()(MaterialUploading);

export default BaseInfo;

