import React from 'react'

export default function Title({titleProp, titleNaming}) {
  return (
    <h1 className={titleNaming} >{titleProp}</h1>
  )
}