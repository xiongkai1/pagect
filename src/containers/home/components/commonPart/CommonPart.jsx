import React, { Component } from 'react';
import styles from './commonPart.less';

export default class CommonPart extends Component {
    render() {
        let { datas } = this.props;
        return (
            <div className={styles.commonPart}>
                {
                    datas.map(item => {
                        return (
                            <div key={item.key} className={styles.populationItem}>
                                <img src={item.imgurl}/>
                                <span className={styles.populationName}>{item.title}</span>
                                {
                                    item.introduceList.map(inItem => {
                                        return (
                                            <span key={inItem.id}>{inItem.introduce}</span>
                                        );
                                    })
                                }
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}