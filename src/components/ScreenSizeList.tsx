import React, {useState, useEffect} from 'react'

let ScreenSizeList = () => {
/* Screen size */
/* const screenWidth = window.screen.width
const screenHeight = window.screen.height */
const [windowScreenSize, setWindowScreenSize] = useState([window.screen.width, window.screen.height])
/* Available screen size */
/* const availableScreenWidth = window.screen.availWidth
const availableScreenHeight = window.screen.availHeight */
const [availableScreen, setAvailableScreen] = useState([window.screen.availWidth, window.screen.availHeight])

/* Window outer size */
/* const windowOuterWidth = window.outerWidth
const windowOuterHeight = window.outerHeight */
const [windowOuterSize, setWindowOuterSize] = useState([window.outerWidth, window.outerHeight])
/* Window inner size */
/*const windowInnerWidth = window.innerWidth
const windowInnerHeight = window.innerHeight*/
/* Без полос прокуртки */
/* const windowInnerWidth = document.documentElement.clientWidth
const windowInnerHeight = document.documentElement.clientHeight */
const [windowInnerSize, setWindowInnerSize] = useState([document.documentElement.clientWidth, document.documentElement.clientHeight])
/* Web page size */
/* Если pageHeight больше, чем внутренняя высота окна, значит, присутствует вертикальная полоса прокрутки. */
/* const pageWidth = document.documentElement.scrollWidth
const pageHeight = document.documentElement.scrollHeight */
const [webPageSize, setWebPageSize] = useState([0, 0])

useEffect(()=>{
    setWindowScreenSize([window.screen.width, window.screen.height]);
    setWebPageSize([document.documentElement.scrollWidth, document.documentElement.scrollHeight])
})

  return (
    <>
      <h1>{windowScreenSize}</h1>
      <h1>{webPageSize}</h1>
    </>
  )  
}

export default ScreenSizeList