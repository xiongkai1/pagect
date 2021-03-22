import React from 'react';
import styles from './fontUploading.less';
import {  Button,  Radio, Form, Input, Upload, Icon, Select, Progress, Tabs, message, Modal, Table, InputNumber, Checkbox } from 'antd';
import Cookies from 'Utils/cookie';
import reqwest from 'reqwest';
import { partUploader, claimUploadId, completeMultipartUpload } from 'Services/oss';
import { commodityClassification } from 'Services/classification';
import { shopFontUpload } from 'Services/commodityinfo';
import { selectShopInfoList } from 'Services/mallinfo';
import { authorizedPrice } from 'Services/commoditypriceinfo';
import { listProfit } from 'Services/dictItem';
const { TextArea } = Input;

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

class FontUploading extends React.Component {
    constructor(props) {
        super(props);   

        commodityClassification({
            type: 1
        }).then(e => {
            if (e.data.code === 200) {
                console.log(e.data.data[0]);
                let dataList = e.data.data[0].children;
                console.log(dataList);
                dataList.forEach(data => {
                    if (data.code === 'FONT_STYLE') {
                        console.log(data);
                        this.setState({
                            fontStyle: data.children
                        });
                    }   
                    if (data.code === 'FONT_TYPE') {
                        this.setState({
                            fontType: data.children
                        });
                    }   
                    if (data.code === 'FONT_LANGUAGE_SYSTEM') {
                        this.setState({
                            fontLanguageSystem: data.children
                        });
                    }   
                    if (data.code === 'FONT_CODING') {
                        this.setState({
                            fontCoding: data.children
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

            } else {
                message.error(e.data.data);   
            }
        });

        // 获取商品授权类型价格
        authorizedPrice({
            type: 1
        }).then(e => {
            this.setState({
                dataSource: e.data.data
            });
        });

        // 获取分润比例
        listProfit().then(e => {
            this.setState({
                shareProfit: e.data.data
            });
        });
    }
    state = {
        // 上传时间
        uploadTime: '',
        // 大小
        uploadSize: '',

        // 字体格式
        fontStyle: [],
        // 分润比例
        shareProfit: [],
        // 类型
        fontType: [],
        // 语系
        fontLanguageSystem: [],
        // 编码
        fontCoding: [],
        // 店鋪id
        mallId: '',
        // 标签
        keyword: [],
        fileList: [],
        uploading: false,
        index: 0,
        uploadId: '',
        pause: false, // 暂停
        fileType: 'FONT',
        fileType1: 'FONT',
        percent: 0, // 进度
        previewVisible: false,
        previewImage: '',
        category: '',
        lout: false,
        fileSize: '',
        // uploadTime: '',
        visible: false,
        fontValue: 0,

        // 自定义年
        customYear: '',
       
        columns: [
            {
                title: '授权年限',
                dataIndex: 'authorizationTypeInformation',
                render: (text, row, index) => {
                    if (row.authorizationTypeCode === 'PERSONAL_FONT' || row.authorizationTypeCode === 'PERSONAL_ENTERPRISE') {
                        return row.authorizationTypeInformation;
                    }
                    if (row.authorizationTypeInformation === '自定义') {
                        console.log(index);
                        console.log(text);
                        console.log(row);
                        return  <InputNumber onChange={this.customYearChang.bind(this, row)}  placeholder="自定义"/>;
                        
                    }

                    return row.authorizationTypeInformation + '年';
                }
            }, {
                title: '版本类型',
                dataIndex: 'remarks'
            }, 
            {
                title: '授权范围(可编辑)',
                dataIndex: 'type',
                render: (text, row, index) => {
                    if (row.authorizationTypeCode === 'PERSONAL_FONT' || row.authorizationTypeCode === 'PERSONAL_ENTERPRISE') {
                        return '';
                    }
                    
                    return <Input  onChange={this.typeChang.bind(this, row)}></Input>;
                  
                }
            },
            {
                title: '市场价(元)',
                dataIndex: '',
                render: (text, row, index) => {
                    if (row.authorizationTypeCode === 'PERSONAL_FONT' || row.authorizationTypeCode === 'PERSONAL_ENTERPRISE') {
                        return '';
                    }
                    
                    return <InputNumber onChange={this.priceChange.bind(this, row)} placeholder="价格"/>;
                  
                }
            }, {
                title: '授价(元)',
                dataIndex: '',
                render: (text, row, index) => {
                    if (row.authorizationTypeCode === 'PERSONAL_FONT' || row.authorizationTypeCode === 'PERSONAL_ENTERPRISE') {
                        return '';
                    }
                    
                    return <InputNumber onChange={this.priceSellChange.bind(this, row)} placeholder="价格"/>;
                  
                }
            }
        ],
        dataSource: []

    };

    // 授权信息 
    customYearChang = (value, event) => {
        this.state.dataSource.forEach(dataSource => {
            dataSource.children.forEach(children => {
                if (children.authorizationTypeCode === value.authorizationTypeCode) {
                    children.authorizationTypeInformation = event;
                }
            });
        });
    }
    typeChang =(value, event) => {
        this.state.dataSource.forEach(dataSource => {
            dataSource.children.forEach(children => {
                if (children.authorizationTypeCode === value.authorizationTypeCode) {
                    children.type = event.target.value;
                }
            });
        });
    }
    priceChange =(value, event) => {
        this.state.dataSource.forEach(dataSource => {
            dataSource.children.forEach(children => {
                if (children.authorizationTypeCode === value.authorizationTypeCode) {
                    children.authorizationPrice = event;
                }
            });
        });
    }
    priceSellChange=(value, event) => {
        this.state.dataSource.forEach(dataSource => {
            dataSource.children.forEach(children => {
                if (children.authorizationTypeCode === value.authorizationTypeCode) {
                    children.authorizationPriceSell = event;
                }
            });
        });
    }

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
        let fileListAll = '';
        if (this.state.fileList.length === 0) {
            this.setState({
                fileType: 'COVER'
            });
            fileListAll = 'COVER';
        }
        if (this.state.fileList.length === 1 ) {
            this.setState({
                fileType: 'COPYRIGHT'
            });
            fileListAll = 'COPYRIGHT';
        }
        if (this.state.fileList.length > 1) {
            this.setState({
                fileType: 'FONT'
            });
            fileListAll = 'FONT';
         
        }
        claimUploadId({
            catalog: file.lastModified,
            fileName: file.name,
            type: fileListAll
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
                if (this.state.fileList.length  === 2) {
                    var myDate = new Date();
                    
                    var mytime = myDate.toLocaleTimeString();     // 获取当前时间

                    this.setState({
                        fileSize: size,
                        uploadTime: mytime
                    });
                }
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
                const fileFormat =  values.commoditDetailTypefaceVoList.fileFormat;
                const faceVoList = values.commoditDetailTypefaceVoList = [];
               
                const authorizationPrice = values.commodityTypefacePriceInfoVoList.authorizationPrice;// 价格
                const authorizationPriceSell = values.commodityTypefacePriceInfoVoList.authorizationPriceSell;// 价格
                const priceVoList =  values.commodityTypefacePriceInfoVoList = [];
                let indexI = 0;
                this.state.dataSource.forEach((dataSource) => {
                    dataSource.children.forEach(data => {
                        if (data.authorizationPrice !== '' 
                        && data.authorizationPriceSell !== '' 
                        && typeof (data.authorizationPrice) !== 'undefined' 
                        && typeof (data.authorizationPriceSell) !== 'undefined' ) {
                            priceVoList.push(data);
                            indexI++;
                        }
                    });
                });

                this.state.fileList.forEach((list, index) => {
                    if (index >= 3) {
                        var data = {};
                        data.fileFormat = fileFormat;
                        data.dataUrl = list;
                        faceVoList.push(data);
                    }

                });
                values.mallId = this.state.mallId;
                console.log('this.state.fontValue', this.state.fontValue);
                values.commodityStatus = this.state.fontValue;
                values.coverUrl = this.state.fileList[0];
                const commodityTypefaceVo = values;

                // 其他作品信息
                let mus = {};
                mus.copyrightCertificateUrl =  this.state.fileList[1];
                mus.displayFontUrl = this.state.fileList[2];
                mus.fileSize = this.state.fileSize;
                mus.uploadTime = this.state.uploadTime;
                values.typefaceWorkInformationVo = mus;

                // 获取标签
                const keywordles =  this.state.keyword;
                const keywordles1 =  keywordles.join(' ');
                const keyword1 = values.keyword1;
                values.keyword = keyword1 + ' ' + keywordles1;
                if (indexI === 0) {
                    message.error('请先填写价格和授权');
                    this.setState({
                        visible: true
                    });
                } else {
                    shopFontUpload(commodityTypefaceVo).then(e => {
                        console.log(e);
                        if (e.data.code === 200) {
                            message.success(e.data.msg);
                        }
    
                        if (e.data.code === 604) {
                            message.error(e.data.data);
                        }
                        if (e.data.code === 500) {
                            message.error(e.data.msg);
                        }
                    });
                }

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
    onchangeKeyword= value => {
        this.setState({
            keyword: value
        });
    }
    showModal=value => {
        this.setState({
            visible: true
        });
        console.log(value);
    }
    handleOk = e => {
      
        this.setState({
            visible: false
        });

    };
    handleCancelModel = e => {
        console.log(e);
        this.setState({
            visible: false
        });
    };
    rowKey = e => {
       
        return e.authorizationId;
    }
    fontClick = e => {
        this.setState({
            fontValue: 0
        });
    }
    fontClick1 = e => {
        this.setState({
            fontValue: 1
        });
    }
    
    render() {
        // const components = {
        //     body: {
        //         row: EditableFormRow,
        //         cell: EditableCell
        //     }
        // };
        const { getFieldDecorator } = this.props.form;
        const {  fileList, fontStyle, fontType, fontLanguageSystem, fontCoding, lout, visible, columns, dataSource, shareProfit, uploadTime, fileSize } = this.state;
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
        const uploadButton2 = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">版本证明</div>
                <div className="ant-upload-text">不超过5MB,格式JPG</div>
        
            </div>
        );
        const uploadButton3 = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">显示字体文件url</div>
                <div className="ant-upload-text">不超过5MB,格式JPG</div>
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
                console.log(fileList);
            },
            beforeUpload: file => {
                this.Upload(file);
                
                this.setState(state => ({
                    previewVisible: true
                }));
                return false;
            }
            
        };
        const plainOptions = [
            { label: 'Apple', value: 'Apple' },
            { label: 'Pear', value: 'Pear' },
            { label: 'Orange', value: 'Orange' }
        ];

        return (
            <div className={styles.fontUploading}>
              
                <div className={styles.clearfix}>
                    <Upload {...props}
                        listType="picture-card"
                        disabled={this.state.percent === 0 && lout ? false : true}>
                        {fileList.length >= 8 || fileList.length === 0 || fileList.length === 1 || fileList.length === 2 ? null : uploadButton}
                        {fileList.length === 0 ? uploadButton1 : null}
                        {fileList.length === 1 ? uploadButton2 : null}
                        {fileList.length === 2 ? uploadButton3 : null}
                    </Upload>
                    <Progress  percent={this.state.percent} />

                </div>
                <div className={styles.worksDetails}>
                    <Form onSubmit={this.handleSubmit}>
                        <Tabs>
                            <TabPane tab="作品设置" key="1">
                         
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
                                <Form.Item onClick={this.showModal} className={styles.inputPut} label="授权 | 价格">
                                    {getFieldDecorator('commodityTypefacePriceInfoVoList.authorizationPrice', {
                                        // rules: [{ required: true, message: '价格不能为空' }]
                                    })(<Input  placeholder="按照授权，设置价格"/>)
                                    }
                                    {getFieldDecorator('commodityTypefacePriceInfoVoList.authorizationPriceSell', {
                                        // rules: [{ required: true, message: '价格不能为空' }]
                                    })(<Input placeholder="按照授权，设置价格"/>)}
                                </Form.Item>

                                <Form.Item label="分润">
                                    {getFieldDecorator('shareProfit', {
                                        rules: [{ required: true, message: '分润不能为空' }]
                                    })(
                                        <Select placeholder="你分给平台的比例，比例越高，产品越靠前"
                                        >
                                            {
                                                shareProfit.map((item, index) => {
                                                    return (
                                                        <Option key={index} value={item.item_text}>{item.item_text}</Option>
                                                    );
                                                })
                                            }
                                        </Select>
                                    
                                    )}
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
                                    })(
                                        <Select
                                            placeholder="字体风格"
                                            onChange={this.selectFontStyle}
                                        >
                                            {
                                                fontStyle.map((item, index) => {
                                                    return (
                                                        <Option key={index} value={item.catId}>{item.name}</Option>
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
                                                        <Option key={index} value={item.catId}>{item.name}</Option>
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
                                                        <Option key={index} value={item.catId}>{item.name}</Option>
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
                                                        <Option key={index} value={item.catId}>{item.name}</Option>
                                                    );
                                                })
                                            }
                             
                                        </Select>
                                    )}
                                </Form.Item>
                                <Form.Item label="给此产品打标签">
                                    {getFieldDecorator('keyword', {
                                        rules: [{ required: true, message: '关键字标签不能为空' }]
                                    })(
                                        <div className={styles.keyword}>
                                            <Checkbox.Group options={plainOptions} onChange={this.onchangeKeyword}/>
                                        </div>
                                    )}
                                </Form.Item>
                           
                                <Form.Item label="给作品添加关键字">
                                    {getFieldDecorator('keyword1', {
                                        rules: [{ required: true, message: '关键字标签不能为空' }]
                                    })(
                                        <TextArea
                                            placeholder="可输入10个关键字,用空格隔开"
                                            autoSize={{ minRows: 3, maxRows: 5 }}
                                        />
                                    )}
                                </Form.Item>
                            
                            </TabPane>
                            <TabPane tab="作品信息" key="2">
                                <div className={styles.information}>
                                    <div className={styles.author}>
                                        <span className={styles.float}>
                                            作品ID:
                                        </span>
                                        <span className={styles.right}>
                                            系统自动生成
                                        </span>
                                    </div>

                                    <div className={styles.author}>
                                        <span className={styles.float}>
                                            上传时间:
                                        </span>
                                        <span className={styles.right}>
                                            {uploadTime}
                                        </span>
                                    </div>

                                    <div className={styles.author}>
                                        <span className={styles.float}>
                                            大小:
                                        </span>
                                        <span className={styles.right}>
                                            {fileSize}
                                        </span>
                                    </div>
                                </div>
                            </TabPane>
                        </Tabs>
                        <Form.Item className={styles.button}>
                            <Button type="danger" htmlType="submit" disabled={this.state.percent === 0 && lout && fileList.length > 1 && fileList.length > 3 ? false : true} onClick={this.fontClick}>上传</Button>
                            <Button type="danger" htmlType="submit" disabled={this.state.percent === 0 && lout && fileList.length > 1 && fileList.length > 3 ? false : true} onClick={this.fontClick1}>保存到作品管理中心</Button>
                        </Form.Item>
                    </Form>
                </div>
                
                <div className={styles.modal}>
                    <Modal
                        width="850px"
                        title="设置价格和授权:"
                        content="1"
                        visible={visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancelModal}
                    >
                        <p>设置说明在对应的板块,输入对应的价格信息，没有价格信息的栏目，将不被展示出来</p>

                        <Form >
                            <Table 
                                columns={columns}
                                onSubmit={this.handleOk}
                                dataSource={dataSource}
                                rowKey={this.rowKey}
                            />

                        </Form>
                    </Modal>
                </div>
            </div>
        );
    }
   
}
const BaseInfo = Form.create()(FontUploading);

export default BaseInfo;

