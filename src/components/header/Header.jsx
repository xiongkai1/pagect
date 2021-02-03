import styles from './header.less';
import React from 'react';
import { Select, Input, Menu, Dropdown } from 'antd';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { SEARCH_OPTION } from '../../constants/common';
import appHooks from '../../appHooks';

const Option = Select.Option;
const Search = Input.Search;
/**
 * @desc 页面顶部组件
 */
export default function Header() {

    const {
        logout
    } = appHooks();

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
        },
        {
            name: '登录',
            to: '/login'
        },
        {
            name: '注册',
            to: '/register'
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

    const { pathname } = useLocation();
    return (
        <div className={styles.header} id="header">
            <div className={styles.logo}></div>
            <div className={styles.leftMenu}>
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
                    })}
            </div>
            <div className={styles.searchInput}>
                <Select
                    defaultValue={'字体'}
                >
                    {
                        SEARCH_OPTION.map(item => {
                            return <Option key={item.key} value={item.value}>{item.value}</Option>;
                        })
                    }
                </Select>
                <Search
                    placeholder={'(请输入关键字)'}
                />
            </div>
            <div className={styles.rightMenu}>
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
            </div>
            <Dropdown overlay={renderMenu} getPopupContainer={() => document.getElementById('header')}>
                <div className={styles.avatar}></div>
            </Dropdown>
        </div>
    );
}
