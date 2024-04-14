import React from 'react'
import st from './SignIn.module.css'
import Darklogo from '../../components/UI/DarkLogo/DarkLogo'
import cancel from '../../../public/Cancel.png'
import Media from './Media/Media'
import Input from './Input/Input'
import { Link } from 'react-router-dom'
import Lock from './SVGicons/Lock'
import User from './SVGicons/User'
import Title from '../../components/UI/Title/Title'

export default function SignIn() {
  return (
    <div className={st.wrapper}>
      <div className={st.form}>
        <div className={st.cancel_block}>
          <Link className={st.cancel} to="/main"><img src={cancel} alt="cancel" /></Link>
        </div>
        <section className={st.section}>
          <Darklogo />
          <Input blocknaming={st.label} naming={st.input} type='text' placehold='    Логин'>
            <User />
          </Input>
          <Input blocknaming={st.label} naming={st.input} type='password' placehold='    Пароль'>
            <Lock />
          </Input>
          <div className={st.buttons}>
            <Link to='/searchorder' className={st.button}>Войти</Link>
            <Link to='/signup' className={st.button}>Регистация</Link>
          </div>
          <div className={st.signin_block}>
            <hr />
            <Title titleNaming={st.h3} titleProp='Или войти через'/>
            <hr />
          </div>
          <Media />
        </section>
      </div>
    </div>
  )
}