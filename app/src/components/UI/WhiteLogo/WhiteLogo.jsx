import React from 'react'
import image from '../../../../public/WLogo.png'

export default function WhiteLogo({mypd}) {
  return (
      <img style={{padding: mypd, }} src={image} />
  )
}