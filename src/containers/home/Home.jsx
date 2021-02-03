import styles from './home.less';
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HeaderHome from 'Components/headerHome/HeaderHome';
import HomeFooter from 'Components/homeFooter/HomeFooter';

import lazyload from 'Components/lazyload/Lazyload';
const HomePage = lazyload(() => import(/* webpackPrefetch: true */ 'Containers/home/homePage/HomePage'));
const FontsPage = lazyload(() => import(/* webpackPrefetch: true */ 'Containers/home/fontsPage/FontsPage'));
const ImagesPage = lazyload(() => import(/* webpackPrefetch: true */ 'Containers/home/imagesPage/ImagesPage'));
const VideoPage = lazyload(() => import(/* webpackPrefetch: true */ 'Containers/home/videoPage/VideoPage'));
const DesignMaterialPage = lazyload(() => import(/* webpackPrefetch: true */ 'Containers/home/designMaterialPage/DesignMaterialPage'));
const OfficeDocumentPage = lazyload(() => import(/* webpackPrefetch: true */ 'Containers/home/officeDocumentPage/OfficeDocumentPage'));
const MusicPage = lazyload(() => import(/* webpackPrefetch: true */ 'Containers/home/musicPage/MusicPage'));
const FoundPage = lazyload(() => import(/* webpackPrefetch: true */ 'Containers/home/foundPage/FoundPage'));
const ShopKeeperPage = lazyload(() => import(/* webpackPrefetch: true */ 'Containers/home/shopKeeperPage/ShopKeeperPage'));

export default class Home extends Component {

    render() {
        return (
            <div className={styles.home}>
                <HeaderHome/>
                <div className={styles.container}>
                    <Switch>
                        <Route exact path="/home" component={HomePage} />
                        <Route exact path="/home/fonts" component={FontsPage} />
                        <Route exact path="/home/images" component={ImagesPage} />
                        <Route exact path="/home/video" component={VideoPage} />
                        <Route exact path="/home/designMaterial" component={DesignMaterialPage} />
                        <Route exact path="/home/officeDocument" component={OfficeDocumentPage} />
                        <Route exact path="/home/music" component={MusicPage} />
                        <Route exact path="/home/found" component={FoundPage} />
                        <Route exact path="/home/shopKeeper" component={ShopKeeperPage} />
                        <Redirect to="/home"/>
                    </Switch>
                </div>
                <HomeFooter/>
            </div>
        );
    }
}