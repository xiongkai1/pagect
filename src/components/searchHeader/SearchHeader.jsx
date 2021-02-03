import styles from './searchHeader.less';
import React from 'react';
import { Select, Input, Menu, Dropdown } from 'antd';
import { NavLink, useHistory, useLocation } from 'react-router-dom';

const Option = Select.Option;
const Search = Input.Search;

export default function SearchHeader() {
    const history = useHistory();
    const rightMenus = [
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
    // const mineMenus = [
    //     {
    //         name: '字体',
    //         to: '/search/fonts'
    //     }
    // ];

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
    const { pathname } = useLocation();
    return (
        <div className={styles.searchHeader} id="header">
            <div className={styles.topBox}>
                <img src={require('../../images/logo.png')}/>
                <div className={styles.rightBox}>
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
            </div>
            {/* <div className={styles.searchBox}>
                <div className={styles.inputBox}>
                    <div className={styles.searchInput}>
                        <Search
                            placeholder={'(请输入关键字)'}
                        />
                    </div>
                    <button className={styles.wantOpenShop}>我要开店</button>
                </div>
                <div className={styles.typeBox}>
                    {
                        mineMenus.map(item => {
                            return (
                                <NavLink
                                    to={item.to}
                                    key={item.name}
                                    isActive={() => { return pathname === item.to; }}
                                    activeClassName="current">
                                    <div className={styles.stypeItem}>{item.name}</div>
                                </NavLink>
                            );
                        })
                    }
                </div>
            </div> */}
        </div>
    );
}