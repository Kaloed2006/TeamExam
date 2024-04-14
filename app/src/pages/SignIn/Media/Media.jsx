import React from 'react'
import st from './Media.module.css'
import facebook from '../../../../public/Facebook.png'
import VK from '../../../../public/Vkontakte.png'
import Google from '../../../../public/Google.png'
import Viber from '../../../../public/Viber.png'
import TG from '../../../../public/Telegram.png'

export default function Media({}) {
    return (
        <div>
            <img className={st.media} src={facebook} />
            <img className={st.media} src={VK} />
            <img className={st.media} src={Google} />
            <img className={st.media} src={Viber} />
            <img className={st.media} src={TG} />
        </div>
    )
}