import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import Loading from 'Components/loading/Loading';
import ErrorBoundary from 'Components/errorBoundary/ErrorBoundary';
import MainLayout from 'Layouts/mainLayout/MainLayout';

import AppContext from './AppContext';
import appHooks from './appHooks';

export default function App() {
    // moment本地化
    moment.locale('zh-cn');

    const {
        user,
        saveUser
    } = appHooks();

    return (
        <ConfigProvider locale={zhCN}>
            <AppContext.Provider value={{
                user,
                saveUser
            }}>
                <ErrorBoundary>
                    <Suspense fallback={<Loading />}>
                        <Switch>
                            {/* 主布局 */}
                            <Route path="/" component={MainLayout} />
                        </Switch>
                    </Suspense>
                </ErrorBoundary>
            </AppContext.Provider>
        </ConfigProvider>
    );
}