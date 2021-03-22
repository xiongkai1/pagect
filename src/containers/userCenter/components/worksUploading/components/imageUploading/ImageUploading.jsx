import React from 'react';
import styles from './imageUploading.less';
import {  Button,  Radio, Form, Input, Upload, Icon, Select, Progress, Tabs, message, Modal, Table, InputNumber, Checkbox } from 'antd';
import Cookies from 'Utils/cookie';
import reqwest from 'reqwest';
import { partUploader, claimUploadId, completeMultipartUpload } from 'Services/oss';
import { commodityClassification } from 'Services/classification';
import { shopPictureUpload } from 'Services/commodityinfo';
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

class ImageUploading extends React.Component {
    constructor(props) {
        super(props);   

        commodityClassification({
            type: 1
        }).then(e => {
                            
            if (e.data.code === 200) {
                let dataList = e.data.data[0].children;
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

        // 获取商品授权类型价格
        authorizedPrice({
            type: 2
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
        // 字体格式
        fontStyle: [],
        // 类型
        fontType: [],
        // 语系
        fontLanguageSystem: [],
        // 编码
        fontCoding: [],
        shareProfit: [],
        // 店鋪id
        mallId: '',
        fileList: [],
        uploading: false,
        index: 0,
        uploadId: '',
        pause: false, // 暂停
        fileType: 'PICTURE',
        fileType1: 'PICTURE',
        percent: 0, // 进度
        previewVisible: false,
        uploadTime: '',
        previewImage: '',
        // 标签
        keyword: [],
        category: '',
        lout: false,
        // 获取三种图片的信息
        imagesText: [],
        visible: false,
        columns: [
            {
                title: '授权类型',
                dataIndex: 'remarks'
            }, {
                title: '图片类型',
                dataIndex: 'authorizationTypeInformation'
            }, {
                title: '产品详细信息',
                dataIndex: 'type',
                render: (text, row, index) => {
                    if (row.authorizationTypeCode === 'CHART_RF' || row.authorizationTypeCode === 'CHART_RM') {
                        return '';
                    }
                    if (row.authorizationTypeCode === 'CHART_RM_OP' || row.authorizationTypeCode === 'CHART_RF_OP') {
                        if (this.state.imagesText.length >= 1 ) {
                            return (
                                <div className={styles.type}>
                                    <span>
                                        {this.state.imagesText[0].width} *{this.state.imagesText[0].height} 
                                    </span>
                                    <span>
                                        {this.state.imagesText[0].type}   {this.state.imagesText[0].size}  
                                    </span>
                                </div>
                            );
                        }
                    }

                    if (row.authorizationTypeCode === 'CHART_RM_CL') {
                        if (this.state.imagesText.length >= 2 ) {
                            return (
                                <div className={styles.type}>
                                    <span>
                                        {this.state.imagesText[1].width} *{this.state.imagesText[1].height} 
                                    </span>
                                    <span>
                                        {this.state.imagesText[1].type}   {this.state.imagesText[1].size}  
                                    </span>
                                </div>
                            );
                        }
                    }
                  
                    if (row.authorizationTypeCode === 'CHART_RM_SP' ) {
                        if (this.state.imagesText.length >= 3) {

                            return (
                                <div className={styles.type}>
                                    <span>
                                        {this.state.imagesText[2].width} *{this.state.imagesText[2].height} 
                                    </span>
                                    <span>
                                        {this.state.imagesText[2].type}   {this.state.imagesText[2].size}  
                                    </span>
                                </div>
                            );
                        }

                        return (
                            <div className={styles.type}>
                                    +
                            </div>
                        );
                        
                    }

                }

            }, {
                title: '市场价(元)',
                dataIndex: '',
                render: (text, row, index) => {
                    if (row.authorizationTypeCode === 'CHART_RF' || row.authorizationTypeCode === 'CHART_RM') {
                        return '';
                    }

                    if (row.authorizationTypeCode === 'CHART_RM_OP' || row.authorizationTypeCode === 'CHART_RF_OP') {
                        if (this.state.imagesText.length >= 1 ) {
                          
                            return <InputNumber onChange={this.priceChange.bind(this, row)} placeholder="价格"/>;
               
                        }
                    }

                    if (row.authorizationTypeCode === 'CHART_RM_CL') {
                        if (this.state.imagesText.length >= 2 ) {
                            
                            return <InputNumber onChange={this.priceChange.bind(this, row)} placeholder="价格"/>;
               
                        }
                    }
                  
                    if (row.authorizationTypeCode === 'CHART_RM_SP' ) {
                        if (this.state.imagesText.length >= 3) {

                            return <InputNumber onChange={this.priceChange.bind(this, row)} placeholder="价格"/>;
               
                        }
                    }
                  
                }
                
            }, {
                title: '售价(元)',
                dataIndex: '',
                render: (text, row, index) => {
                    if (row.authorizationTypeCode === 'PERSONAL_FONT' || row.authorizationTypeCode === 'PERSONAL_ENTERPRISE') {
                        return '';
                    }
                    if (row.authorizationTypeCode === 'CHART_RM_OP' || row.authorizationTypeCode === 'CHART_RF_OP') {
                        if (this.state.imagesText.length >= 1 ) {
                          
                            return <InputNumber onChange={this.priceSellChange.bind(this, row)} placeholder="价格"/>;
                  
                        }
                    }

                    if (row.authorizationTypeCode === 'CHART_RM_CL') {
                        if (this.state.imagesText.length >= 2 ) {
                            
                            return <InputNumber onChange={this.priceSellChange.bind(this, row)} placeholder="价格"/>;
                  
                        }
                    }
                  
                    if (row.authorizationTypeCode === 'CHART_RM_SP' ) {
                        if (this.state.imagesText.length >= 3) {

                            return <InputNumber onChange={this.priceSellChange.bind(this, row)} placeholder="价格"/>;
                  
                        }
                    }
                    
                }
            }
            
        ],
        dataSource: []

    };

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

    typeChang =(value, event) => {
        this.state.dataSource.forEach(dataSource => {
            dataSource.children.forEach(children => {
                if (children.authorizationTypeCode === value.authorizationTypeCode) {
                    children.type = event.target.value;
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
        let fileTypelen = 'COVER';
        if (this.state.fileList.length === 0) {
            this.setState({
                fileType: 'COVER'
            });
            fileTypelen = 'COVER';
        }
      
        if (this.state.fileList.length >= 1) {
            this.setState({
                fileType: 'PICTURE'
            });
            fileTypelen = 'PICTURE';
        }
        claimUploadId({
            catalog: file.lastModified,
            fileName: file.name,
            type: fileTypelen
        }).then(res => {
            if (res.data.code === 200) {
                this.UploadPost(file, res);
            }
        });

    }

    UploadPost =(file, res) => {
        console.log('file', file);

        let size = file.size;

        let totalSize = 1 * 1024 * 1024;
        let totalCount = Math.ceil(size / totalSize);
        if (this.state.index >= totalCount) {
            // 获取地址
            completeMultipartUpload({
                type: this.state.fileType,
                uploadId: res.data.data
            }).then(res => {
                if (this.state.fileList.length >= 1) {
                    var reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = (e) => {
                        // 加载图片获取图片真实宽度和高度
                        var image = new Image();
                        image.src = reader.result;
                        console.log(image);
                        image.onload = () => {
                            var myDate = new Date();
                    
                            var mytime = myDate.toLocaleTimeString(); 
                            this.state.imagesText.push({
                                type: file.type,
                                size: file.size,
                                width: image.width,
                                height: image.height,
                                uploadTime: mytime

                            });
                            console.log('this.state.imagesText', this.state.imagesText);
                        };
                    };
    
                }
                 
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
    handleOk = e => {
        this.setState({
            visible: false
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                values.commTypeId = this.state.fileType;
                // image
                const authorizationPrice = values.commodityPicturPriceInfoVo.authorizationPrice;// 价格
                const authorizationPriceSell = values.commodityPicturPriceInfoVo.authorizationPriceSell;// 价格
                const priceVoList =  values.commodityPicturPriceInfoVo = [];

                const fileFormat = values.commoditDetailDownloadVoList.fileFormat;
                const picturesType = values.commoditDetailDownloadVoList.picturesType;
                const faceVoList = values.commoditDetailDownloadVoList = [];
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
                    if (index !== 0) {
                        var data = {};
                        data.fileFormat = fileFormat;
                        data.dataUrl = list;
                        data.picturesType = picturesType;
                        faceVoList.push(data);
                    }

                });
                values.mallId = this.state.mallId;
                values.commodityStatus = '0';
                values.coverUrl = this.state.fileList[0];
                const commodityTypefaceVo = values;

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
                } else if (indexI === 1) {
                    message.error('请先填写价格和授权');
                    this.setState({
                        visible: true
                    });
                } else if (indexI === 2) {
                    message.error('请填写中图和小图的价格和授权');
                    this.setState({
                        visible: true
                    });

                } else if (indexI === 3) {
                    message.error('请填写小图的价格和授权');
                    this.setState({
                        visible: true
                    });
                } else {

                    // 添加商品
                    shopPictureUpload(commodityTypefaceVo).then(e => {
                        if (e.data.code === 200) {
                            message.success(e.data.msg);
                        }

                        if (e.data.code === 604) {
                            message.error(e.data.data);
                        }
                    });

                }

            }
        });
    }
    rowKey = e => {
       
        return e.authorizationId;
    }
    showModal=value => {
        this.setState({
            visible: true
        });
        console.log(value);
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
             
        const { getFieldDecorator } = this.props.form;
        const {  fileList, lout, imagesText, shareProfit, visible, columns, dataSource  } = this.state;
        const plainOptions = [
            { label: 'Apple', value: 'Apple' },
            { label: 'Pear', value: 'Pear' },
            { label: 'Orange', value: 'Orange' }
        ];
        let uploadButton;
        if (fileList.length === 0) {
            uploadButton = (
                <div>
                    <Icon type="plus" />
                    <div className="ant-upload-text">6:4字体封面图</div>
                    <div className="ant-upload-text">所上文件不要带水印标签</div>
                    <div className="ant-upload-text">大小5MB</div>
            
                </div>
            );
        }
        if (fileList.length === 1) {
            uploadButton = (
                <div>
                    <Icon type="plus" />
                    <div className="ant-upload-text">上传原图</div>
                    <div className="ant-upload-text">(不要打包,直接上传)</div>
                </div>
            );
        }

        if (fileList.length === 2) {
            uploadButton = (
                <div>
                    <Icon type="plus" />
                    <div className="ant-upload-text">上传中图</div>
                    <div className="ant-upload-text">(不要打包,直接上传)</div>
                </div>
            );
        }

        if (fileList.length === 3) {
            uploadButton = (
                <div>
                    <Icon type="plus" />
                    <div className="ant-upload-text">上传小图</div>
                    <div className="ant-upload-text">(不要打包,直接上传)</div>
                </div>
            );
        }
       
        const props = {
            showUploadList: {
                showRemoveIcon: false,
                showPreviewIcon: false
            },
            onRemove: (file) => {
               
                this.setState(state => {
                    
                    const index = state.fileList.indexOf(file);
                    if (index === state.fileList.length) {
                        const newFileList = state.fileList.slice();
                        const newImageList = state.imagesText.slice();
                        const index1 = index - 1;
                    
                        newFileList.splice(index, 1); 
                        newImageList.splice(index1, 1);
                        return {
                            fileList: newFileList,
                            imagesText: newImageList
                        };
                    }
                
                    return resolve(false);
                });
            },
            beforeUpload: file => {
                if (fileList.length >= 4) {
                    this.setState({
                        lout: true
                    });
                } else {
                    this.Upload(file);
                }
                
                this.setState(state => ({
                    previewVisible: true
                }));
                return false;
            }
            
        };

        return (
            <div className={styles.imageUploading}>
              
                <div className={styles.clearfix}>
                    <Upload {...props}
                        listType="picture-card"
                        disabled={this.state.percent === 0  ? false : true}
                    >
                        {fileList.length >= 4 ?   null : uploadButton}
                    </Upload>
                    <Progress  percent={this.state.percent} />

                </div>
                <div className={styles.worksDetails}>
                    <Tabs size="small"
                        tabBarGutter="1">
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
                                <Form.Item label="区块地址">
                                    {getFieldDecorator('blockchainAddress', {
                                        rules: [{ required: true, message: '区块地址不能为空' }]
                                    })(<Input placeholder="区块地址"/>)}
                                </Form.Item>

                                <Form.Item label="是否为矢量图">
                                    {getFieldDecorator('base', {
                                        rules: [{ required: true, message: '矢量图不能为空' }]
                                    })(
                                        <Select placeholder="矢量图" >
                                           
                                            <Option  value="1">是</Option>
                                            <Option  value="2">否</Option>
                                        </Select>
                                    )}
                                </Form.Item>

                                <Form.Item label="是否合并图层">
                                    {getFieldDecorator('base1', {
                                        rules: [{ required: true, message: '不能为空' }]
                                    })(
                                        <Select placeholder="图层" >
                                            <Option  value="1">是</Option>
                                            <Option  value="2">否</Option>
                                        </Select>
                                    )}
                                </Form.Item>

                                <Form.Item onClick={this.showModal} className={styles.inputPut} label="授权 | 价格">
                                    {getFieldDecorator('commodityPicturPriceInfoVo.authorizationPrice', {
                                    })(<Input  placeholder="按照授权，设置价格"/>)
                                    }
                                    {getFieldDecorator('commodityPicturPriceInfoVo.authorizationPriceSell', {
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
                                        </Select>)
                                    }
                                </Form.Item>
                                <Form.Item label="格式">
                                    {getFieldDecorator('commoditDetailDownloadVoList.fileFormat', {
                                        rules: [{ required: true, message: '格式不能为空' }]
                                    })(<Input placeholder="文件格式"/>)}
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

                                <Form.Item >
                                    <Button type="danger" htmlType="submit" disabled={this.state.percent === 0 && lout && fileList.length > 3 ? false : true} onClick={this.fontClick}>上传</Button>
                                    <Button type="danger" htmlType="submit" disabled={this.state.percent === 0 && lout && fileList.length > 3 ? false : true} onClick={this.fontClick1}>保存到作品管理中心</Button>

                                </Form.Item>
                            </Form>
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

                                {
                                    imagesText.map((date, index) => {
                                        return (
                                            <div>
                                                <div className={styles.type}>
                                                    <span className={styles.float}>图片类型:</span>
                                                    <span className={styles.right}>
                                                        {index === 0 ? '原图' : null}
                                                        {index === 1 ? '中图' : null}
                                                        {index === 2 ? '小图' : null}
                                                    </span>
                                                </div>

                                                <div className={styles.author}>
                                                    <span className={styles.float}>
                                        上传时间:
                                                    </span>
                                                    <span className={styles.right}>
                                          
                                                        {date.uploadTime}
                                                    </span>
                                                </div>
                                                <div className={styles.author}>
                                                    <span className={styles.float}>
                                                 宽高:
                                                    </span>
                                                    <span className={styles.right}>
                                                        {date.width} * {date.height}
                                                    </span>
                                                </div>
                                                <div className={styles.author}>
                                                    <span className={styles.float}>
                                                 大小:
                                                    </span>
                                                    <span className={styles.right}>
                                                        {date.size}
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                       
                                    })
                                }
                            
                            </div>
                        </TabPane>
                    
                        <TabPane tab="区块链存取" key="3">
                            区块链存取
                        </TabPane>
                    </Tabs>
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
const BaseInfo = Form.create()(ImageUploading);

export default BaseInfo;

