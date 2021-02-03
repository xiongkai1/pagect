import React from 'react';
import styles from './loginComponentsStyle.less';
import { useHistory } from 'react-router-dom';
import WechatIcon from '../../../images/wechat_icon.png';
import QQIcon from '../../../images/qq_icon.png';
import WeiboIcon from '../../../images/weibo_icon.png';

const OtherLogin = (props) => {
    const itemInfo = [
        {
            key: 1,
            icon: WechatIcon,
            text: '微信登陆'
        },
        {
            key: 2,
            icon: QQIcon,
            text: 'QQ登陆'
        },
        {
            key: 3,
            icon: WeiboIcon,
            text: '微博登陆'
        }
    ];
    const history  = useHistory(); 
    
    return (
        <div className={styles.otherLogin}>
            {
                itemInfo.map(item => {
                    return (
                        <div className={styles.loginWayBox} key={item.key}>
                            <div className={styles.left}>
                                <img src={item.icon}/>
                            </div>
                            <div className={styles.right}>
                                {item.text}
                            </div>
                        </div>
                    );
                })
            }
            
            <div className={styles.tips}>我还没有账号，我要去<a onClick={() => history.push('/register')}>注册</a></div>
        </div>
    );
};
export default OtherLogin;
