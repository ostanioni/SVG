import React, {useState, useEffect} from 'react'

/* Screen size */
/* const screenWidth = window.screen.width
const screenHeight = window.screen.height */

/* Available screen size */
/* const availableScreenWidth = window.screen.availWidth
const availableScreenHeight = window.screen.availHeight */

/* Window outer size */
/* const windowOuterWidth = window.outerWidth
const windowOuterHeight = window.outerHeight */

/* Window inner size */
/*const windowInnerWidth = window.innerWidth
const windowInnerHeight = window.innerHeight*/
/* Без полос прокуртки */
/* const windowInnerWidth = document.documentElement.clientWidth
const windowInnerHeight = document.documentElement.clientHeight */

/* Web page size */
/* Если pageHeight больше, чем внутренняя высота окна, значит, присутствует вертикальная полоса прокрутки. */
/* const pageWidth = document.documentElement.scrollWidth
const pageHeight = document.documentElement.scrollHeight */

/*
Warning: Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.
ScreenSizeList@http://127.0.0.7:3001/093dc4098b3ce2e9ae68.js:30620:100
App
*/

let ScreenSizeList = () => {
  // setWebPageSize([document.documentElement.scrollWidth, document.documentElement.scrollHeight])
  //const [windowScreenSize, setWindowScreenSize] = useState([window.screen.width, window.screen.height])
  // const [availableScreen, setAvailableScreen] = useState([0,0])
  // const [windowOuterSize, setWindowOuterSize] = useState([0, 0])
  // const [windowInnerSize, setWindowInnerSize] = useState([0, 0])
   const [webPageSize, setWebPageSize] = useState([document.documentElement.scrollWidth, document.documentElement.scrollHeight])
   function handleWindowResize() {
    setWebPageSize([
      document.documentElement.scrollWidth,
      document.documentElement.scrollHeight
    ]);
  }
  window.addEventListener("resize", handleWindowResize, false);
  useEffect(() => {
    return () => {
      window.removeEventListener("resize", handleWindowResize, false);
    };
  });/*
useEffect(()=>{
  // setWindowScreenSize([window.screen.width, window.screen.height])
  // setAvailableScreen([window.screen.availWidth, window.screen.availHeight])
  // setWindowOuterSize([window.outerWidth, window.outerHeight])  
  // setWebPageSize([document.documentElement.scrollWidth, document.documentElement.scrollHeight])
  // setWindowInnerSize([document.documentElement.clientWidth, document.documentElement.clientHeight])
  // <h1>{`webPageSize width is ${webPageSize[0]}. webPageSize height is ${webPageSize[1]}`}</h1>
  // <h1>{`windowInnerSize width is ${windowInnerSize[0]}. windowInnerSize height is ${windowInnerSize[1]}`}</h1>
})
*/

  return <h1>{`webPageSize width is ${webPageSize[0]}. webPageSize height is ${webPageSize[1]}`}</h1>
      
     
}

export default ScreenSizeList