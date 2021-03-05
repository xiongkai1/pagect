import styles from './detailsHeader.less';
import React from 'react';
import { Menu, Dropdown } from 'antd';
import { NavLink, useHistory, useLocation } from 'react-router-dom';

export default function DetailsHeader(props) {
    const history = useHistory();
    const leftMenus = [
        {
            id: 0,
            name: '首页',
            to: '/home'
        },
        {
            id: 1,
            name: '字体',
            to: '/home/fonts'
        },
        {
            id: 2,
            name: '图片',
            to: '/home/images'
        },
        {
            id: 3,
            name: '视频',
            to: '/home/video'
        },
        {
            id: 4,
            name: '设计素材',
            to: '/home/designMaterial'
        },
        {
            id: 5,
            name: '办公文档',
            to: '/home/officeDocument'
        },
        {
            id: 6,
            name: '音乐',
            to: '/home/music'
        },
        {
            id: 7,
            name: '发现',
            to: '/home/found'
        },
        {
            id: 8,
            name: '店主',
            to: '/home/shopKeeper'
        }
    ];

    const rightMenus = [
        // {
        //     name: '我要开店',
        //     to: '/userCenter/7'
        // },
        {
            name: '授权查询',
            to: '/authorizationQuery'
        },
        {
            name: '排行榜单',
            to: '/rank'
        }
    ];
    const options = [
        {
            name: '我的资料',
            to: '/userCenter/1'
        },
        {
            name: '我的订单',
            to: '/userCenter/2'
        },
        {
            name: '我的购物车',
            to: '/userCenter/3'
        },
        {
            name: '我的动态',
            to: '/userCenter/4'
        },
        {
            name: '我的钱包',
            to: '/userCenter/5'
        },
        {
            name: '我的荣誉',
            to: '/userCenter/6'
        },
        {
            name: '申请成为',
            to: '/userCenter/7'
        },
        {
            name: '我的授权',
            to: '/userCenter/8'
        },
        {
            name: '我要续费',
            to: '/userCenter/9'
        },
        {
            name: '我的消息',
            to: '/userCenter/10'
        },
        {
            name: '推广二维码',
            to: '/userCenter/11'
        },
        {
            name: '客服',
            to: '/userCenter/myPromotion'
        },
        {
            name: '退出',
            to: '/userCenter/logout'
        }
    ];

    const renderMenu =  (
        <Menu>
            {
                options.map(item => {
                    return (
                        <Menu.Item key={item.name} onClick={() => history.push(item.to)}>
                            {item.name}
                        </Menu.Item>
                    );
                })
            }
        </Menu>
    );
    React.useEffect(() => {
    });
    const { pathname } = useLocation();
    return (
        <div className={styles.homeHeader} id="header">
            <div className={styles.topBox}>
                <div className={styles.topMenusBox}>
                    <img className={styles.topLogo} width="205px" height="55px" src={require('../headerHome/images/home_logo.png')}/>

                    <div className={styles.menusTitleBox}>

                        <div className={styles.topMenusLeft}>
                            {
                                leftMenus.map(item => {
                                    return (
                                        <NavLink
                                            to={item.to}
                                            key={item.name}
                                            isActive={() => { return pathname === item.to; }}
                                            className={props.typeActiveKey === item.id ? styles.current : ''}>
                                            <div className="">{item.name}</div>
                                        </NavLink>
                                    );
                                })
                            }
                        </div>
                        <div className={styles.topMenusRight}>
                            {
                                rightMenus.map(item => {
                                    return (
                                        <NavLink
                                            to={item.to}
                                            key={item.name}
                                            isActive={() => { return pathname === item.to; }}
                                            activeClassName="current">
                                            <div>{item.name}</div>
                                        </NavLink>
                                    );
                                })}
                            <Dropdown overlay={renderMenu} getPopupContainer={() => document.getElementById('header')}>
                                <div className={styles.avatar}>
                                    <img className={styles.topAvatar} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                </div>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}