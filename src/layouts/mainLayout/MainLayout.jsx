import styles from './mainLayout.less';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import lazyload from '../../components/lazyload/Lazyload';
// import Header from '../../components/header/Header';

const Home = lazyload(() => import(/* webpackPrefetch: true */ 'Containers/home/Home'));
const Login = lazyload(() => import(/* webpackPrefetch: true */ 'Containers/login/Login'));
const Register = lazyload(() => import(/* webpackPrefetch: true */ 'Containers/register/Register'));
const GetBackAccount = lazyload(() => import(/* webpackPrefetch: true */ 'Containers/getBackAccount/GetBackAccount'));
const UserCenter = lazyload(() => import(/* webpackPrefetch: true */ 'Containers/userCenter/UserCenter'));
const AuthorizationQuery = lazyload(() => import(/* webpackPrefetch: true */ 'Containers/authorizationQuery/AuthorizationQuery'));
const Rank = lazyload(() => import(/* webpackPrefetch: true */ 'Containers/rank/Rank'));
const Search = lazyload(() => import(/* webpackPrefetch: true */ 'Containers/search/Search'));
const Details = lazyload(() => import(/* webpackPrefetch: true */ 'Containers/details/Details'));
const NotFound = lazyload(() => import(/* webpackPrefetch: true */ 'Containers/notFound/NotFound'));
/**
 * @desc 页面主框架组件
 */
export default function MainLayout() {

    return (
        <div className={styles.mainLayout}>
            {/* <Header/> */}
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/getBackAccount" component={GetBackAccount} />
                    <Route exact path="/userCenter/:key" component={UserCenter} />
                    <Route exact path="/authorizationQuery" component={AuthorizationQuery} />
                    <Route exact path="/rank" component={Rank} />
                    <Route exact path="/search" component={Search} />
                    <Route exact path="/details" component={Details} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </div>
        </div>
    );
}