import React, { Component } from 'react';
import styles from './rank.less';
import Header from 'Components/header/Header';
import Footer from 'Components/footer/Footer';

export default class Rank extends Component {
    render() {
        return (
            <div className={styles.rank}>
                <Header/>
                排行榜页
                <Footer/>
            </div>
        );
    }
}
