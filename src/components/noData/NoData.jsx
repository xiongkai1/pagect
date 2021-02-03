import React from 'react'; import styles from './noData.less';

import { Spin } from 'antd';

class NoData extends React.Component {
    render() {
        const { style, isNoData } = this.props;
        return <div className={styles.noData} style={style}>
            {isNoData
                ? <span>暂无数据</span>
                : <Spin tip="数据载入中"/>
            }
        </div>;
    }
}

export default NoData;
