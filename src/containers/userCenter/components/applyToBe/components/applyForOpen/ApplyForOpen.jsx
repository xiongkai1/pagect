import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import styles from './applyForOpen.less';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { Icon, Radio, Input, Button } from 'antd';

import { getToken } from 'Utils/auth';
import { create } from 'Services/orderInfo';
import Cookies from 'Utils/cookie';
import QRCode from 'qrcode.react';
import Websocket from 'react-websocket';

// import QRCode from 'qrcode'

export default function ApplyForOpen() {
 
    const [showContent, setShowContent] = useState(1);
    useEffect(() => {
        let i = 1;
        setCodeValue(i++);
        if (showContent === 3) {

            console.log('partTitle:' + partTitle);
            create({
                anonymityType: 0,
                cartIds: '',
                code: 'clear',
                commodityId: '1',
                orderMoney: 0,
                priceId: '1',
                serviceName: 'shopOrderServiceImpl'
            }).then(res => {
                console.log(res);   
                if (res.data.code === 200) {
                    setZfbCodeValue(res.data.msg);
                }             
            });
        }

        if (showContent === 4) {
            create({
                anonymityType: 0,
                cartIds: '',
                code: 'clear',
                commodityId: '1',
                orderMoney: 0,
                priceId: '1',
                serviceName: 'shopOrderServiceImpl'
            }).then(res => {
                console.log(res);   
                if (res.data.code === 200) {
                    setZfbCodeValue(res.data.msg);
                }             
            });
        }

        if (showContent === 5) {
            console.log(5);
        }
    }, [showContent]);

    // useLayoutEffect(() => {
    //     const ws = new WebSocket('ws://8.134.8.97:8084/shopping-center/paymentCallback');

    // });

    const history = useHistory();
    const shopInfo = [
        {
            key: 1,
            labelName: '字体',
            name: '字主',
            isOpen: false
        },
        {
            key: 2,
            labelName: '图片',
            name: '图片',
            isOpen: false
        },
        {
            key: 3,
            labelName: '视频',
            name: '视频',
            isOpen: false
        },
        {
            key: 4,
            labelName: '设计素材',
            name: '',
            isOpen: false
        },
        {
            key: 5,
            labelName: '办公软件',
            name: '',
            isOpen: false
        },
        {
            key: 6,
            labelName: '音乐',
            name: '',
            isOpen: false
        },
        {
            key: 7,
            labelName: '全通王',
            name: '',
            isOpen: false
        }
    ];
    const state = {
        value: 1
    };
    const [zfbCodeValue, setZfbCodeValue] = useState('');
    const [codeValue, setCodeValue] = useState(0);
    const [radioValue, setRadioValue] = useState(1);

    // 店铺信息
    const [partTitle, setPartTitle] = useState(0);

    const onChange = (e) => {
        setRadioValue(e.target.value);
    };

    const handleOpen = () => {
        console.log('打开连接');
    };
    const handleData = (e) => {
        if (e) {
            setShowContent(6);
        }
    };
    const handleClose = () => {
        console.log('关闭连接');
    };
    const showContent1 = (e, data) => {
        setPartTitle(data);
        setShowContent(3);
    };
    return (
        <>
        { showContent === 1 && <div className={styles.applyForOpen}>
            <div className={styles.partTitle}>代理商信息</div>
            <div className={styles.agentInfo}>
                <div className={styles.labelName}>级别</div>
                <div className={styles.agentName}>
                    <Icon type="sketch" />
                        A级代理商
                </div>
                <div className={styles.btnsPart}>
                    <div className={styles.notOpened} onClick={() => setShowContent(2)}>申请开通代理商</div>
                </div>
            </div>
            <div className={styles.partTitle}>店铺信息</div>
            <div className={styles.shopInfo}>
                {
                    shopInfo.map(item => {
                        return (
                            <div className={styles.agentInfo} key={item.key}>
                                <div className={styles.labelName}>{item.labelName}</div>
                                <div className={styles.agentName}>
                                    <Icon type="sketch" />
                                </div>
                                <div className={styles.btnsPart}>
                                    {item.isOpen ? <div className={styles.opened}>已开通</div> :
                                        <div className={styles.notOpened} onClick={showContent1.bind(this, 3, item.key)}>申请开通</div> }
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div> }
        {
            showContent === 2 && <div className={styles.agentPart}>
                <div className={styles.goBackBtn} onClick={() => setShowContent(1)}>返回</div>
                <div className={styles.title}>选择代理商级别</div>
                <div className={styles.radioTitle}>
                    <Radio.Group  onChange={onChange} value={radioValue}>
                        <Radio className={styles.radioStyle} value={1}>
                            A级别套餐开通<span>(4360)</span>
                            
                            <div onClick={() => setShowContent(4)} className={radioValue === 2 ? styles.apply : styles.apply1}>申请开通代理商</div> 
                         
                        </Radio>
                        {radioValue === 1 ? <div className={styles.content}>
                            <div className={styles.contentTitle}>
                                <span className={styles.title}>货</span> <span className={styles.price}>3360.00</span>
                            </div>
                            <div className={styles.contentTitle}>
                                <span className={styles.title}>保</span> <span className={styles.price}>500.00</span>
                            </div>
                            <div className={styles.contentTitle}>
                                <span className={styles.title}>代</span> <span className={styles.price}>500.00</span>
                            </div>
                        </div> : null}
                        <Radio className={styles.radioStyle} value={2}>
                            B级别套餐开通<span>(9650)</span>
                            <div onClick={() => setShowContent(5)} className={radioValue === 1 ? styles.apply : styles.apply1}>申请开通代理商</div> 
                        </Radio>
                        {radioValue === 2 ? <div className={styles.content}>
                            <div className={styles.contentTitle}>
                                <span className={styles.title}>货</span> <span className={styles.price}>8650.00</span>
                            </div>
                            <div className={styles.contentTitle}>
                                <span className={styles.title}>保</span> <span className={styles.price}>500.00</span>
                            </div>
                            <div className={styles.contentTitle}>
                                <span className={styles.title}>代</span> <span className={styles.price}>500.00</span>
                            </div>
                        </div> : null}
                    </Radio.Group>    
                </div>
            </div>
        }
        {
            showContent === 3 && <div className={styles.shopkeeperPart}>
                成为店主
                <div className={styles.goBackBtn} onClick={() => setShowContent(1)}>返回</div>

                <QRCode
                    id="qrCode"
                    value={zfbCodeValue}
                    size={200} // 二维码的大小
                    fgColor="#000000" // 二维码的颜色
                    style={{ margin: 'auto' }}
                 
                /> 
            </div>
        }
        {
            showContent === 4  && <div className={styles.payment}>
                支付界面  A套餐
                <div className={styles.goBackBtn} onClick={() => setShowContent(2)}>返回</div>
                <div className={styles.code}>
                    <QRCode
                        id="qrCode"
                        value={zfbCodeValue}
                        size={200} // 二维码的大小
                        fgColor="#000000" // 二维码的颜色
                        style={{ margin: 'auto' }}
                 
                    /> 

                    <Websocket url="ws://8.134.8.97:8084/shopping-center/paymentCallback"
                        onOpen={handleOpen}
                        onMessage={handleData}
                        onClose = {handleClose}
                    />

                </div>

            </div>
        }
         {
             showContent === 5  && <div className={styles.payment}>
                支付界面 B套餐
                 <div className={styles.goBackBtn} onClick={() => setShowContent(2)}>返回</div>
             </div>
         }
         {
             showContent === 6 && <div className={styles.paySuccess}>
                 支付成功
                 <div className={styles.goBackBtn} onClick={() => setShowContent(2)}>返回</div>
             </div>
         }
        </>
    );
}
