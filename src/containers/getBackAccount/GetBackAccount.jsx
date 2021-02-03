
import React, { useState, useEffect } from 'react';
import styles from './getBackAccount.less';
import Header from 'Components/header/Header';
import StepCircle from '../register/components/stepCircle/StepCircle';
import Footer from 'Components/footer/Footer';
import UserInfo from './components/UserInfo';
import ResetPassword from './components/ResetPassword';
import ResetComplied from './components/ResetComplied';

const GetBackAccount = (props) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isStepActive, setIsStepActive] = useState([
        true, false, false
    ]);
    const steps = [
        {
            index: 1,
            title: '用户信息',
            isStepActive: isStepActive[0]
        },
        {
            index: 2,
            title: '重置密码',
            isStepActive: isStepActive[1]
        },
        {
            index: 3,
            title: '设置完成',
            isStepActive: isStepActive[2]
        }
    ];
    useEffect(() => {
        //
    }, []);

    const changeCurrentStep = (step) => {
        setCurrentStep(step);
        switch (step) {
            case 1 : setIsStepActive([true, false, false]);
                break;
            case 2 : setIsStepActive([true, true, false]);
                break;
            case 3 : setIsStepActive([true, true, true]);
                break;
        }
    };
    return (
        <div className={styles.getBackAccount}>
            <Header/>
            <div className={styles.content}>
                <div className={styles.title}>
                    <div>密码找回</div>
                </div>
                <div className={styles.stepsContent}>
                    <div className={styles.stepContainer}>
                        {steps.map(item => (
                            <StepCircle 
                                key={item.index} 
                                index={item.index} 
                                title={item.title}
                                isStepActive={item.isStepActive}
                            />
                        ))}
                    </div>
                    {currentStep === 1 && <UserInfo  changeCurrentStep={changeCurrentStep}/>}
                    {currentStep === 2 && <ResetPassword  changeCurrentStep={changeCurrentStep}/>}
                    {currentStep === 3 && <ResetComplied  changeCurrentStep={changeCurrentStep}/>}
                </div>
            </div>
            <Footer/>
        </div>
    );
    
};
export default GetBackAccount;