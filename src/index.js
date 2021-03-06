console.log('Svg');
window.addEventListener('resize', ()=>{console.log('resize')})

/* Screen size */
const screenWidth = window.screen.width
const screenHeight = window.screen.height

/* Available screen size */
const availableScreenWidth = window.screen.availWidth
const availableScreenHeight = window.screen.availHeight

/* Window outer size */
const windowOuterWidth = window.outerWidth
const windowOuterHeight = window.outerHeight

/* Window inner size */
const windowInnerWidth = window.innerWidth
const windowInnerHeight = window.innerHeight

/* Без полос прокуртки */
const windowInnerWidth = document.documentElement.clientWidth
const windowInnerHeight = document.documentElement.clientHeight

/* Web page size */
/* Если pageHeight больше, чем внутренняя высота окна, значит, присутствует вертикальная полоса прокрутки. */
const pageWidth = document.documentElement.scrollWidth
const pageHeight = document.documentElement.scrollHeight

let Sizes = {
	'ScreenSize':[screenWidth, screenHeight],
	'availableScreenSize': [window.screen.availWidth, window.screen.availHeight],
	'outerWindowSize': [window.outerWidth, window.outerHeight],
	'innerWindowSize': [window.innerWidth, window.innerHeight],
	'pageSize': [document.documentElement.scrollWidth, document.documentElement.scrollHeight],	
}
ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('root')
      );
