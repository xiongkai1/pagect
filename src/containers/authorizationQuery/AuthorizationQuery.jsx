import React, { Component } from 'react';
import styles from './authorizationQuery.less';
import Header from 'Components/header/Header';
import Footer from 'Components/footer/Footer';

export default class AuthorizationQuery extends Component {
    render() {
        return (
            <div className={styles.authorizationQuery}>
                <Header/>
                授权查询页
                <Footer/>
            </div>
        );
    }
}
