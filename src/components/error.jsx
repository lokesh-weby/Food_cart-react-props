import React from 'react'
import errormodule from'../css/error.module.css'

const error = () => {
  return (
    <>
    <div className={errormodule.wrapper}>
    <h1 className=''>Page Not Found: 404</h1>
    <img className={errormodule.img} src="https://cdn-images-1.medium.com/max/800/1*qdFdhbR00beEaIKDI_WDCw.gif" alt="Error"  />
    </div>
    </>
  )
}

export default error
