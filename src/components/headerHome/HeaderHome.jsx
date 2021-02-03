import styles from './headerHome.less';
import React from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import appHooks from '../../appHooks';

export default function HeaderHome() {
    const history = useHistory();
    const leftMenus = [
        {
            name: '首页',
            to: '/home'
        },
        {
            name: '字体',
            to: '/home/fonts'
        },
        {
            name: '图片',
            to: '/home/images'
        },
        {
            name: '视频',
            to: '/home/video'
        },
        {
            name: '设计素材',
            to: '/home/designMaterial'
        },
        {
            name: '办公文档',
            to: '/home/officeDocument'
        },
        {
            name: '音乐',
            to: '/home/music'
        },
        {
            name: '发现',
            to: '/home/found'
        },
        {
            name: '店主',
            to: '/home/shopKeeper'
        }
    ];

    const rightMenus = [
        {
            name: '我要开店',
            to: '/userCenter/7'
        },
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
            to: '/userCenter/5'
        },
        {
            name: '我的钱包',
            to: '/userCenter/4'
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
                        <Menu.Item key={item.name} onClick={ item.name === '退出' ? logout : () => history.push(item.to)}>
                            {item.name}
                        </Menu.Item>
                    );
                })
            }
        </Menu>
    );
    const {
        logout
    } = appHooks();
    const { pathname } = useLocation();
    return (
        <div className={styles.homeHeader} id="header">
            <div className={styles.topBox}>
                <div className={styles.topMenusBox}>
                    <img className={styles.topLogo} width="205px" height="55px" src={require('./images/home_logo.png')}/>
                    <div className={styles.menusTitleBox}>
                        <div className={styles.topMenusLeft}>
                            {
                                leftMenus.map(item => {
                                    return (
                                        <NavLink
                                            to={item.to}
                                            key={item.name}
                                            isActive={() => { return pathname === item.to; }}
                                            activeClassName="current">
                                            <div>{item.name}</div>
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
                                <img className={styles.topAvatar} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}