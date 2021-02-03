import React, { Component } from 'react';
import styles from './userCenter.less';
import Header from 'Components/header/Header';
import Footer from 'Components/footer/Footer';
import SideBar from 'Components/sideBar/SideBar';

// 个人中心系统
import MyProfile from './components/myProfile/MyProfile';
import MyOrder from './components/myOrder/MyOrder';
import ShoppingCart from './components/shoppingCart/ShoppingCart';
import MyWallet from './components/myWallet/MyWallet';
import MyDynamic from './components/myDynamic/MyDynamic';
import MyHonor from './components/myHonor/MyHonor';
import ApplyToBe from './components/applyToBe/ApplyToBe';
import MyAuthorization from './components/myAuthorization/MyAuthorization';
import MyRenewal from './components/myRenewal/MyRenewal';
import MyMessage from './components/myMessage/MyMessage';
import MyPromotion from './components/myPromotion/MyPromotion';

// 代理系统
import AgentStock from './components/agentStock/AgentStock';
import MyWarehouse from './components/myWarehouse/MyWarehouse';
import AgentTeam from './components/agentTeam/AgentTeam';
import AgentPromotion from './components/agentPromotion/AgentPromotion';

// 店铺系统
import MyShop from './components/myShop/MyShop';
import WorksUploading from './components/worksUploading/WorksUploading';
import WorksManagement from './components/worksManagement/WorksManagement';
import ShopRank from './components/shopRank/ShopRank';
import ShopTeam from './components/shopTeam/ShopTeam';
import OnAdvertising from './components/onAdvertising/OnAdvertising';

import USER_TIT_ICON from './images/userTitleIcon.png';
import AGENT_TIT_ICON from './images/agentTitleIcon.png';
import SHOP_TIT_ICON from './images/shopTitleIcon.png';

export default class UserCenter extends Component {
    constructor(props) {
        super(props); 
        let defaultKey = this.props.match.params.key;
        this.state = {
            activeKey: Number(defaultKey) || 1,
            menuInfo: [
                {
                    system: {
                        key: 'userCenter',
                        title: '个人中心系统',
                        show: true,
                        icon: USER_TIT_ICON
                    },
                    children: [
                        {
                            key: 1,
                            text: '我的资料',
                            component: MyProfile
                        },
                        {
                            key: 2,
                            text: '我的订单',
                            component: MyOrder
                        },
                        {
                            key: 3,
                            text: '我的购物车',
                            component: ShoppingCart
                        },
                        {
                            key: 4,
                            text: '我的钱包',
                            component: MyWallet
                        },
                        {
                            key: 5,
                            text: '我的动态',
                            component: MyDynamic
                        },
                        {
                            key: 6,
                            text: '我的荣誉',
                            component: MyHonor
                        },
                        {
                            key: 7,
                            text: '申请成为',
                            component: ApplyToBe
                        },
                        {
                            key: 8,
                            text: '我的授权',
                            component: MyAuthorization
                        },
                        {
                            key: 9,
                            text: '我要续费',
                            component: MyRenewal
                        },
                        {
                            key: 10,
                            text: '我的消息',
                            component: MyMessage
                        },
                        {
                            key: 11,
                            text: '推广二维码',
                            component: MyPromotion
                        }
                    ]
                },
                {
                    system: {
                        key: 'agentCenter',
                        title: '代理系统',
                        show: true,
                        icon: AGENT_TIT_ICON
                    },
                    children: [
                        {
                            key: 12,
                            text: '进货',
                            component: AgentStock
                        },
                        {
                            key: 13,
                            text: '我的仓库',
                            component: MyWarehouse
                        },
                        {
                            key: 14,
                            text: '代理团队',
                            component: AgentTeam
                        },
                        {
                            key: 15,
                            text: '我要晋升',
                            component: AgentPromotion
                        }
                    ]
                },
                {
                    system: {
                        key: 'shopCenter',
                        title: '店铺系统',
                        show: true,
                        icon: SHOP_TIT_ICON
                    },
                    children: [
                        {
                            key: 16,
                            text: '我的店铺',
                            component: MyShop
                        },
                        {
                            key: 17,
                            text: '上传作品',
                            component: WorksUploading
                        },
                        {
                            key: 18,
                            text: '作品管理',
                            component: WorksManagement
                        },
                        {
                            key: 19,
                            text: '店铺排行榜',
                            component: ShopRank
                        },
                        {
                            key: 20,
                            text: '店铺团队',
                            component: ShopTeam
                        },
                        {
                            key: 21,
                            text: '我要上广告',
                            component: OnAdvertising
                        }
                    ]
                }
            ]
        };
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        let currentKey = Number(this.props.match.params.key);
        let nextKey = Number(nextProps.match.params.key);
        if (nextKey !== currentKey) {
            this.setState({
                activeKey: nextKey
            });
        }
    }
    changeActiveKey=(key) => {
        this.setState({
            activeKey: key
        });
    }
    render() {
        let { menuInfo, activeKey } = this.state;
        return (
            <div className={styles.userCenter}>
                <Header/>
                <div className={styles.setShopContainer}>
                    <SideBar
                        title={'个人中心系统'}
                        activeKey={activeKey}
                        menuInfo={menuInfo}
                        changeActiveKey={this.changeActiveKey}
                    />
                    <div className={styles.setShopContent}>
                        {
                            menuInfo.map(item => {
                                return (
                                    <>
                                    {
                                        item.children.map(item => {
                                            return (
                                                <>
                                                {activeKey === item.key && <item.component key={item.key} props={{ ...this.props }}/>}
                                                </>
                                            );
                                        })
                                    }
                                    
                                    </>
                                );
                            })
                        }
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
