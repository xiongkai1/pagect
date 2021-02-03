
import React, { useState, useCallback, useReducer, createContext, useEffect } from 'react';
import styles from './register.less';
import Header from 'Components/header/Header';
import StepCircle from './components/stepCircle/StepCircle';
import Footer from 'Components/footer/Footer';
import PhoneVerification from './components/phoneVerification/PhoneVerification';
import BaseVerification from './components/baseVerification/BaseVerification';
import VerificationSuccessful from './components/verificationSuccessful/VerificationSuccessful';
import hooks from './registerHooks';

// export const RegisterContext = createContext({});
const Register = (props) => {
    
    const {
        getPhoneInfo,
        setPhoneInfo
    } = hooks();

    const [currentStep, setCurrentStep] = useState(1);
    const [isStepActive, setIsStepActive] = useState([
        true, false, false
    ]);
    const steps = [
        {
            index: 1,
            title: '手机验证',
            isStepActive: isStepActive[0]
        },
        {
            index: 2,
            title: '基本验证',
            isStepActive: isStepActive[1]
        },
        {
            index: 3,
            title: '注册成功',
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
        // <RegisterContext.Provider value={{ setPhoneInfo, getPhoneInfo }}>
        <div className={styles.register}>
            <Header/>
            <div className={styles.content}>
                <div className={styles.title}>
                    <div>心安元素注册中心</div>
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
                    {currentStep === 1 && <PhoneVerification  changeCurrentStep={changeCurrentStep} setPhoneInfo={setPhoneInfo}/>}
                    {currentStep === 2 && <BaseVerification  changeCurrentStep={changeCurrentStep} getPhoneInfo={getPhoneInfo}/>}
                    {currentStep === 3 && <VerificationSuccessful  changeCurrentStep={changeCurrentStep}/>}
                </div>
            </div>
            <Footer/>
        </div>
        // </RegisterContext.Provider>
    );
    
};
export default Register;