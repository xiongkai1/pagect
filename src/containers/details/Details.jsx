import React, { Component } from 'react';
import { message, Tabs, Radio, Button } from 'antd';
import styles from './details.less';
import DetailsHeader from 'Components/detailsHeader/DetailsHeader';
import copy from 'copy-to-clipboard';

const { TabPane } = Tabs;
const ButtonGroup = Button.Group;
export default class Details extends Component {
    state = {
        value: 1,
        tabList: [{ key: 1, title: '基本信息' }, { key: 2, title: '其他信息' }, { key: 3, title: '版权信息' }]
    }
    copyNumber = () => {
        message.success('复制成功');
    }
    onChange = e => {
        this.setState({
            value: e.target.value
        });
    };
    render() {
        const radioStyle = {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            height: '30px',
            lineHeight: '30px'
        };
        let { tabList } = this.state;
        return (
            <div className={styles.detailsBox}>
                <DetailsHeader typeActiveKey={this.props.location.state.id}></DetailsHeader>
                <div className={styles.containerBox}>
                    {
                        this.props.location.state.id === 1 ? (
                            <div className={styles.typeContainerBox}>
                                <div className={styles.containerTopBox}>
                                    <div className={styles.showGoodsBox}>
                                        <div className={styles.footsGoodsBox}>
                                            <div className={styles.leftGoodsBox}>
                                                <div className={styles.logoBox}>
                                                    <img src="" alt=""></img>
                                                    <span>微软雅黑</span>
                                                </div>
                                                <div className={styles.contentBox}>李白乘舟将欲行，忽闻岸上踏歌声。桃花潭水深千尺，不及汪伦送我情。</div>
                                                <div className={styles.goodsStyleBox}>
                                                    <span>风格:常规字体</span>
                                                    <span>语系:中文</span>
                                                    <span>字数:6763字</span>
                                                    <span>类型:黑体</span>
                                                </div>
                                                <div className={styles.changeBox}>
                                                    <input type="text" placeholder="输入替换内容(30字以内)"/>
                                                    <button>替换效果</button>
                                                </div>
                                            </div>
                                            <div className={styles.rightGoodsBox}>
                                                <div className={styles.topContentBox}>
                                                    <div className={styles.logoBox}>微软雅黑</div>
                                                    <div className={styles.contentBox}>李白乘舟将欲行，忽闻岸上踏歌声。<br/> 桃花潭水深千尺，不及汪伦送我情。</div>
                                                </div>
                                                <div className={styles.controlBox}>
                                                    <span>小</span>
                                                    <div className={styles.controlLine}>
                                                        <div className={styles.redLine}></div>
                                                    </div>
                                                    <span>大</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.goodsKeywordBox}>
                                            <span className={styles.keywordTitle}>关键词：</span>
                                            <div className={styles.keywordBox}>
                                                <span className={styles.workItemBox}>字体</span>
                                                <span className={styles.workItemBox}>字体字体</span>
                                                <span className={styles.workItemBox}>字体字体</span>
                                                <span className={styles.workItemBox}>字体</span>
                                                <span className={styles.workItemBox}>字体字体</span>
                                                <span className={styles.workItemBox}>字体</span>
                                                <span className={styles.workItemBox}>字体字体</span>
                                                <span className={styles.workItemBox}>字体</span>
                                                <span className={styles.workItemBox}>字体字体</span>
                                                <span className={styles.workItemBox}>字体字体</span>
                                                <span className={styles.workItemBox}>字体字体</span>
                                                <span className={styles.workItemBox}>字体</span>
                                                <span className={styles.workItemBox}>字体字体</span>
                                                <span className={styles.workItemBox}>字体</span>
                                                <span className={styles.workItemBox}>字体字体</span>
                                                <span className={styles.workItemBox}>字体字体</span>
                                                <span className={styles.workItemBox}>字体</span>
                                                <span className={styles.workItemBox}>字体字体</span>
                                                <span className={styles.workItemBox}>字体</span>
                                                <span className={styles.workItemBox}>字体字体</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.showStoreBox}>
                                        <div className={styles.storeInfoBox}>
                                            <div className={styles.storeAvatar}>
                                                <img width="100%" height="100%" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                                            </div>
                                            <div className={styles.storeInfo}>
                                                <span className={styles.follow}>+关注</span>
                                                <span className={styles.storeName}>店小二的名字-到这里</span>
                                                <span className={styles.otherInfo}>点号：D07310000088<span className={styles.goStore}>进入店铺》</span></span>
                                                <span className={styles.otherInfo}>入驻时间：2020-03-20</span>
                                                <span className={styles.otherInfo}><img className={styles.locationIcon} src={require('../../images/redLocation.png')}/>湖南长沙</span>
                                            </div>
                                        </div>
                                        <div className={styles.honorBox}>
                                            <span>荣誉</span>
                                            <div className={styles.honorIconBox}>
                                                <img src={require('../../images/honor.jpg')}/>
                                                <img src={require('../../images/honor.jpg')}/>
                                                <img src={require('../../images/honor.jpg')}/>
                                                <img src={require('../../images/honor.jpg')}/>
                                                <img src={require('../../images/honor.jpg')}/>
                                                <img src={require('../../images/honor.jpg')}/>
                                                <img src={require('../../images/honor.jpg')}/>
                                            </div>
                                        </div>
                                        <button className={styles.wantOpenStore}>我也要开店</button>
                                        <div className={styles.storeGoodsBox}>
                                            <div className={styles.goodsInfoBox}>
                                                <h3>《字体名字------------标题》</h3>
                                                <span className={styles.otherInfo}>描述：这是字体的描述描述淡黄色的裙子这是字体的描述描述这是字体的描述描述</span>
                                                <div className={styles.operationBox}>
                                                    <img src={require('../../../src/images/forward.png')}/>
                                                    <img src={require('../../../src/images/letter.png')}/>
                                                    <img src={require('../../../src/images/good.png')}/>
                                                    <img src={require('../../../src/images/collection.png')}/>
                                                    <img src={require('../../../src/images/horn.png')}/>
                                                </div>
                                            </div>
                                            <div className={styles.informationBox}>
                                                <Tabs defaultActiveKey="1">
                                                    {
                                                        tabList.map(item => {
                                                            return (
                                                                <TabPane tab={item.title} key={item.key}>
                                                                    <div className={styles.tabBox}>
                                                                        <span>编号：Z05044180958<span className={styles.copy} onClick={ () => this.copyNumber()}>复制</span></span>
                                                                        <span>喜欢数：<span className={styles.goStore}>267733</span>(浏览量)</span>
                                                                        <span>收藏数：<span className={styles.goStore}>78956</span></span>
                                                                        <span>点赞数：<span className={styles.goStore}>96773</span></span>
                                                                        <img width="60px" height="18px" src={require('../../images/reward.png')}/>
                                                                    </div>
                                                                </TabPane>
                                                            );
                                                        })
                                                    }
                                                </Tabs>
                                            </div>
                                            <div className={styles.downloadBox}>
                                                <Radio.Group onChange={this.onChange} value={this.state.value}>
                                                    <Radio style={radioStyle} value={1}>
                                                        <div className={styles.radioBox}>
                                                            <span className={styles.specs}>标准</span>
                                                            <span className={styles.specsContent}>GB-2312</span>
                                                            <span className={styles.specsContent}>TIF</span>
                                                            <span className={styles.specsContent}>18.88MB</span>
                                                        </div>
                                                    </Radio>
                                                    <Radio style={radioStyle} value={2}>
                                                        <div className={styles.radioBox}>
                                                            <span className={styles.specs}>增强</span>
                                                            <span className={styles.specsContent}>GB-2312</span>
                                                            <span className={styles.specsContent}>TIF</span>
                                                            <span className={styles.specsContent}>28.88MB</span>
                                                        </div>
                                                    </Radio>
                                                </Radio.Group>
                                                <div className={styles.buttonGroupBox}>
                                                    <ButtonGroup>
                                                        <Button type="danger">下载</Button>
                                                        <Button type="danger" ghost>加入购物车</Button>
                                                    </ButtonGroup>
                                                </div>
                                            </div>
                                            <span className={styles.explain}>授权说明<span className={styles.goStore}>链接到授权说明的地方》</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div>这是图片</div>
                        )
                    }
                    {/* {
                        this.props.location.state.id === 2 && 
                    } */}
                </div>
            </div>
        );
    }
}