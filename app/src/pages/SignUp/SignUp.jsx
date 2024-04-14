import React from 'react'
import st from './SignUp.module.css'
import Input from '../SignIn/Input/Input'
import DarkLogo from '../../components/UI/DarkLogo/DarkLogo'
import cancel from '../../../public/Cancel.png'
import { Link } from 'react-router-dom'
import Lock from '../SignIn/SVGicons/Lock'
import User from '../SignIn/SVGicons/User'
import Mail from '../SignIn/SVGicons/Mail'

export default function SignUp() {
    return (
        <div className={st.wrapper}>
            <div className={st.form}>
                <div className={st.cancel_block}>
                    <Link to='/main' ><img src={cancel} /></Link>
                </div>
                <section className={st.section}>
                    <DarkLogo />
                    <Input blocknaming={st.label} naming={st.input} type='text' placehold='    Логин'>
                        <User/>
                    </Input>
                    <Input blocknaming={st.label} naming={st.input} type='password' placehold='    Электронная почта'>
                       <Mail/>
                    </Input>
                    <Input blocknaming={st.label} naming={st.input} type='password' placehold='    Пароль'>
                        <Lock/>
                    </Input>
                    <Input blocknaming={st.label} naming={st.input} type='password' placehold='    Повторить пароль'>
                        <Lock/>
                    </Input>
                    <Link to='/signin' className={st.button}>Регистация</Link>
                </section>
            </div>
        </div>
    )
}