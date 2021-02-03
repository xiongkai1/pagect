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
            to: '/home',
            width: 'small'
        },
        {
            name: '字体',
            // to: '',
            to: '/home/fonts',
            width: 'small'
        },
        {
            name: '图片',
            // to: '',
            to: '/home/images',
            width: 'small'
        },
        {
            name: '视频',
            // to: '',
            to: '/home/video',
            width: 'small'
        },
        {
            name: '设计素材',
            // to: '',
            to: '/home/designMaterial',
            width: 'large'

        },
        {
            name: '办公文档',
            // to: '',
            to: '/home/officeDocument',
            width: 'large'
        },
        {
            name: '音乐',
            // to: '',
            to: '/home/music',
            width: 'small'
        },
        {
            name: '发现',
            // to: '',
            to: '/home/found',
            width: 'small'
        },
        {
            name: '店主',
            // to: '',
            to: '/home/shopKeeper',
            width: 'small'
        }
    ];

    const rightMenus = [
        {
            name: '我要开店',
            // to: '',
            to: '/userCenter/7',
            width: 'large'
        },
        {
            name: '授权查询',
            // to: '',
            to: '/authorizationQuery',
            width: 'large'
        },
        {
            name: '排行榜单',
            // to: '',
            to: '/rank',
            width: 'large'
        }
    ];
    const options = [
        {
            name: '我的资料',
            // to: ''
            to: '/userCenter/1'
        },
        {
            name: '我的订单',
            
            // to: ''
            to: '/userCenter/2'
        },
        {
            name: '我的购物车',
            // to: ''
            to: '/userCenter/3'
        },
        {
            name: '我的动态',
            // to: ''
            to: '/userCenter/5'
        },
        {
            name: '我的钱包',
            // to: ''
            to: '/userCenter/4'
        },
        {
            name: '我的荣誉',
            // to: ''
            to: '/userCenter/6'
        },
        {
            name: '申请成为',
            // to: ''
            to: '/userCenter/7'
        },
        {
            name: '我的授权',
            // to: ''
            to: '/userCenter/8'
        },
        {
            name: '我要续费',
            // to: ''
            to: '/userCenter/9'
        },
        {
            name: '我的消息',
            // to: ''
            to: '/userCenter/10'
        },
        {
            name: '推广二维码',
            // to: ''
            to: '/userCenter/11'
        },
        {
            name: '客服',
            // to: ''
            to: '/userCenter/myPromotion'
        },
        {
            name: '退出',
            // to: ''
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
                                    let Messages;
                                    if (item.width === 'small') {
                                        Messages = (
                                            <div className={styles.small}>{item.name}</div>
                                        );
                                    } else {
                                        Messages = (
                                            <div className={styles.large}>{item.name}</div>
                                        );
                                    }
                                    return (
                                        <NavLink
                                            to={item.to}
                                            key={item.name}
                                            isActive={() => { return pathname === item.to; }}
                                            activeClassName="current">
                                               
                                            {/* <div className={item.width}>{item.name}</div> */
                                                Messages
                                            }
                                        </NavLink>
                                    );
                                })
                            }
                        </div>
                        <div className={styles.topMenusRight}>
                            {
                                rightMenus.map(item => {
                                    let Messages;
                                    if (item.width === 'small') {
                                        Messages = (
                                            <div className={styles.small}>{item.name}</div>
                                        );
                                    } else {
                                        Messages = (
                                            <div className={styles.large}>{item.name}</div>
                                        );
                                    }

                                    return (
                                        <NavLink
                                            to={item.to}
                                            key={item.name}
                                            isActive={() => { return pathname === item.to; }}
                                            activeClassName="current">
                                            {/* { <div>{item.name}</div>} */
                                                Messages
                                            }
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