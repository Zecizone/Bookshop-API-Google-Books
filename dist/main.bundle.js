/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \***************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
}

a {
  -webkit-text-decoration: none;
  text-decoration: none;
  color: inherit;
}

ul,
ol,
li {
  list-style: none;
}

img {
  vertical-align: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: inherit;
  font-size: inherit;
}

html,
body {
  height: 100%;
  line-height: 1;
}

html {
  height: 100%;
  box-sizing: border-box;
  width: 100%;
}

body {
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 400;
  height: 100%;
}

.container {
  max-width: 1130px;
  margin: 0 auto;
  padding: 0 10px;
  height: 100%;
}

.header {
  max-width: 1130px;
  height: 116px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
}

.header-fixed {
  background-color: #fff;
  position: -webkit-sticky;
  position: sticky;
  z-index: 401;
  top: 0;
  left: 0;
  -webkit-animation-name: header;
          animation-name: header;
  -webkit-animation-duration: 0.4s;
          animation-duration: 0.4s;
  box-shadow: 0px 4px 6px rgba(178, 176, 188, 0.28);
}

.header__icons {
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__user-icon, .header__search-icon, .header__bag-icon {
  width: 15px;
  height: 15px;
  color: #1C2A39;
}

.header__user-icon:hover, .header__search-icon:hover, .header__bag-icon:hover {
  -webkit-transform: scale(1.2);
          transform: scale(1.2);
  transition: ease-in 0.2s;
  cursor: pointer;
}

.header__logo {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #1C2A39;
}

.header__navigation {
  width: 372px;
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: space-between;
  align-items: center;
}

.navigation-fixed {
  width: 100px;
}

.header__navigation-link {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
  color: #5C6A79;
}

.header__navigation-link:hover {
  font-family: "Montserrat";
  font-weight: 900;
  color: #1C2A39;
  cursor: pointer;
}

.header__bag-count {
  display: none;
  color: white;
  background-color: red;
  border-radius: 50%;
  width: 13px;
  height: 13px;
  position: relative;
  z-index: 401;
  margin-top: -12px;
  margin-left: 5px;
  text-align: center;
  font-size: 12px;
}

.dots {
  display: flex;
  justify-content: center;
  margin: 0 30px;
}

.controller {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 17px;
}

.dot {
  width: 10px;
  height: 10px;
  margin: 0 5px;
  display: inline-block;
  cursor: pointer;
  border-radius: 50%;
  background-color: rgb(239, 238, 246);
}

.dot:hover,
.active-dot {
  background: #9E98DC;
}

.nav-slider {
  overflow: hidden;
  z-index: 10;
  position: relative;
}

.slide-image {
  object-fit: cover;
}

.slider {
  width: 1120px;
  height: 702px;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  box-shadow: 0px 6px 59px rgba(53, 49, 84, 0.08);
  display: flex;
}

.slide1,
.slide2,
.slide3 {
  width: 100%;
  height: 702px;
  position: absolute;
  top: 0;
  left: -1120px;
  display: flex;
}

.slide1.active,
.slide2.active,
.slide3.active {
  left: 0;
  transition: all 2s ease-out;
}

.slider-promo__item1 {
  margin-right: -83px;
  margin-bottom: 76px;
  width: 149px;
  height: 204px;
  background: #9E98DC;
  box-shadow: 0px 24px 36px rgba(53, 49, 84, 0.28);
}

.slider-promo__item2 {
  margin-right: -156px;
  width: 137px;
  height: 273px;
  background: #FF8FE6;
  box-shadow: 0px 24px 36px rgba(53, 49, 84, 0.28);
}

.slider-promo__subtitle {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #1C2A39;
  padding: 102px 20px 36px;
}

.slider-promo__subtitle2 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #1C2A39;
  padding: 149px 47px 36px 21px;
}

.slider-promo {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: -670px;
  z-index: 10;
}

.nav-active {
  color: #1C2A39;
  color: var(--text-black, #1C2A39);
  font-size: 10px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  text-transform: uppercase;
}

.books {
  margin-left: -50px;
  padding-top: 50px;
}

.bookshop {
  height: 100%;
  width: 100%;
  margin-top: 15%;
}

.bookshop-page {
  display: flex;
  width: 1130px;
  height: 100%;
}

.bookshop-catalog {
  background-color: #EFEEF6;
  position: absolute;
  z-index: 200;
  width: 35%;
  left: 0;
}

.bookshop-cat {
  z-index: 201;
}

.bookshop-list {
  height: 710px;
  padding: 45px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

.bookshop-list__item {
  color: #5C6A79;
  color: var(--text-gray, #5C6A79);
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
}

.bookshop-list__item:hover, .active-bookshop-list__item {
  color: #1C2A39;
  color: var(--text-black, #1C2A39);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  -webkit-transform: scale(1.2);
          transform: scale(1.2);
  transition: 0.1s ease-in;
}

.books {
  width: 100%;
  z-index: 301;
  margin-left: 80px;
}

.books-page {
  display: grid;
  grid-column-gap: 75px;
  -webkit-column-gap: 75px;
          column-gap: 75px;
  grid-row-gap: 85px;
  row-gap: 85px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
}

.book-card {
  display: flex;
}

.book-card__img {
  width: 212px;
  height: 327px;
  margin-right: 2vw;
  background: #EEECEC;
  box-shadow: 0px 24px 36px 0px rgba(53, 49, 84, 0.28);
}

.book_info__description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.book-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
}

.book-info p {
  margin: 8px;
}

.book-info__authors {
  color: #5C6A79;
  color: var(--text-gray, #5C6A79);
  font-size: 12px;
  font-family: Open Sans;
  text-transform: capitalize;
}

.book-info__title {
  color: #1C2A39;
  color: var(--text-black, #1C2A39);
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 700;
}

.book-info__ratingsCount {
  color: #5C6A79;
  color: var(--text-gray, #5C6A79);
  font-size: 10px;
  font-family: Open Sans;
}

.book_info__description {
  color: #5C6A79;
  color: var(--text-gray, #5C6A79);
  font-size: 13px;
  font-family: Open Sans;
  text-transform: capitalize;
}

.book-info__retailPrice {
  color: #1C2A39;
  color: var(--text-black, #1C2A39);
  font-size: 13px;
  font-family: Montserrat;
  font-weight: 700;
  text-transform: uppercase;
}

.book-info__button {
  color: #4C3DB2;
  font-size: 8px;
  font-family: Montserrat;
  font-weight: 700;
  text-transform: uppercase;
  padding: 18px 66px;
  background-color: #fff;
  border: 1px solid #4C3DB2;
  margin: 8px;
  cursor: pointer;
}

.book-info__button:hover, .load-button__item:hover {
  -webkit-transform: scale(1.1);
          transform: scale(1.1);
  transition: ease-in 0.2s;
  background-color: #4C3DB2;
  color: #fff;
}

.load-button {
  margin: 80px auto;
  display: flex;
  justify-content: center;
}

.load-button__item {
  padding: 18px 63px;
  color: #4C3DB2;
  border: 1px solid #4C3DB2;
  cursor: pointer;
  background-color: #fff;
  font-size: 8px;
  font-family: Montserrat;
  font-weight: 700;
  text-transform: uppercase;
}

.book-info__button-active {
  color: gray;
  border: 1px solid gainsboro;
}

.book-info__button-active:hover {
  background-color: rgb(199, 13, 13);
}`, "",{"version":3,"sources":["webpack://./src/style/_nullstyle.scss","webpack://./src/index.scss","webpack://./src/style/_style.scss"],"names":[],"mappings":"AAAA;;;EAGC,UAAA;EACA,SAAA;EACA,SAAA;EACA,sBAAA;ACCD;;ADEA;EACC,6BAAA;EAAA,qBAAA;EACA,cAAA;ACCD;;ADEA;;;EAGC,gBAAA;ACCD;;ADEA;EACC,oBAAA;ACCD;;ADEA;;;;;;EAMC,oBAAA;EACA,kBAAA;ACCD;;ADEA;;EAEC,YAAA;EACA,cAAA;ACCD;;ACtCA;EACC,YAAA;EACA,sBAAA;EACA,WAAA;ADyCD;;ACtCA;EACC,qCAAA;EACA,eAAA;EACA,gBAAA;EACA,YAAA;ADyCD;;ACtCA;EACC,iBAAA;EACA,cAAA;EACA,eAAA;EACA,YAAA;ADyCD;;ACtCA;EACI,iBAAA;EACA,aAAA;EACA,aAAA;EACA,cAAA;EACA,8BAAA;EACA,mBAAA;ADyCJ;;ACtCA;EACI,sBAAA;EACA,wBAAA;EAAA,gBAAA;EACA,YAAA;EACA,MAAA;EACA,OAAA;EACA,8BAAA;UAAA,sBAAA;EACA,gCAAA;UAAA,wBAAA;EACA,iDAAA;ADyCJ;;ACtCA;EACI,YAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;ADyCJ;;ACtCA;EACI,WAAA;EACA,YAAA;EACA,cAAA;ADyCJ;;ACtCA;EACI,6BAAA;UAAA,qBAAA;EACA,wBAAA;EACA,eAAA;ADyCJ;;ACtCA;EACI,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;ADyCJ;;ACtCA;EACI,YAAA;EACA,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,8BAAA;EACA,mBAAA;ADyCJ;;ACtCA;EACI,YAAA;ADyCJ;;ACtCA;EACI,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,yBAAA;EACA,cAAA;ADyCJ;;ACtCA;EACI,yBAAA;EACA,gBAAA;EACA,cAAA;EACA,eAAA;ADyCJ;;ACtCA;EACI,aAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;EACA,eAAA;ADyCJ;;ACtCA;EACI,aAAA;EACA,uBAAA;EACA,cAAA;ADyCJ;;ACtCA;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;ADyCJ;;ACtCA;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,qBAAA;EACA,eAAA;EACA,kBAAA;EACA,oCAAA;ADyCJ;;ACtCA;;EAEI,mBAAA;ADyCJ;;ACtCA;EACI,gBAAA;EACA,WAAA;EACA,kBAAA;ADyCJ;;ACtCA;EACI,iBAAA;ADyCJ;;ACtCA;EACI,aAAA;EACA,aAAA;EACA,kBAAA;EACA,gBAAA;EACA,cAAA;EACA,+CAAA;EACA,aAAA;ADyCJ;;ACtCA;;;EAGI,WAAA;EACA,aAAA;EACA,kBAAA;EACA,MAAA;EACA,aAAA;EACA,aAAA;ADyCJ;;ACtCA;;;EAGI,OAAA;EACA,2BAAA;ADyCJ;;ACtCA;EACI,mBAAA;EACA,mBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,gDAAA;ADyCJ;;ACtCA;EACI,oBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,gDAAA;ADyCJ;;ACtCA;EACI,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,yBAAA;EACA,cAAA;EACA,wBAAA;ADyCJ;;ACtCA;EACI,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,yBAAA;EACA,cAAA;EACA,6BAAA;ADyCJ;;ACtCA;EACI,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,qBAAA;EACA,kBAAA;EACA,WAAA;ADyCJ;;ACtCA;EACI,cAAA;EAAA,iCAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,yBAAA;ADyCJ;;ACtCA;EACI,kBAAA;EACA,iBAAA;ADyCJ;;ACtCA;EACI,YAAA;EACA,WAAA;EACA,eAAA;ADyCJ;;ACtCA;EACI,aAAA;EACA,aAAA;EACA,YAAA;ADyCJ;;ACtCA;EACI,yBAAA;EACA,kBAAA;EACA,YAAA;EACA,UAAA;EACA,OAAA;ADyCJ;;ACtCA;EACI,YAAA;ADyCJ;;ACtCA;EACI,aAAA;EACA,eAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,8BAAA;ADyCJ;;ACtCA;EACI,cAAA;EAAA,gCAAA;EACA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,0BAAA;ADyCJ;;ACtCA;EACI,cAAA;EAAA,iCAAA;EACA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,0BAAA;EACA,6BAAA;UAAA,qBAAA;EACA,wBAAA;ADyCJ;;ACtCA;EACI,WAAA;EACA,YAAA;EACA,iBAAA;ADyCJ;;ACtCA;EACI,aAAA;EACA,qBAAA;EAAA,wBAAA;UAAA,gBAAA;EACA,kBAAA;EAAA,aAAA;EACA,qCAAA;EACA,kCAAA;ADyCJ;;ACtCA;EACI,aAAA;ADyCJ;;ACtCA;EACI,YAAA;EACA,aAAA;EACA,iBAAA;EACA,mBAAA;EACA,oDAAA;ADyCJ;;ACtCA;EACI,oBAAA;EACA,qBAAA;EACA,4BAAA;EACA,gBAAA;ADyCJ;;ACtCA;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,UAAA;ADyCJ;;ACtCA;EACI,WAAA;ADyCJ;;ACtCA;EACI,cAAA;EAAA,gCAAA;EACA,eAAA;EACA,sBAAA;EACA,0BAAA;ADyCJ;;ACtCA;EACI,cAAA;EAAA,iCAAA;EACA,eAAA;EACA,uBAAA;EACA,gBAAA;ADyCJ;;ACtCA;EACI,cAAA;EAAA,gCAAA;EACA,eAAA;EACA,sBAAA;ADyCJ;;ACtCA;EACI,cAAA;EAAA,gCAAA;EACA,eAAA;EACA,sBAAA;EACA,0BAAA;ADyCJ;;ACtCA;EACI,cAAA;EAAA,iCAAA;EACA,eAAA;EACA,uBAAA;EACA,gBAAA;EACA,yBAAA;ADyCJ;;ACtCA;EACI,cAAA;EACA,cAAA;EACA,uBAAA;EACA,gBAAA;EACA,yBAAA;EACA,kBAAA;EACA,sBAAA;EACA,yBAAA;EACA,WAAA;EACA,eAAA;ADyCJ;;ACtCA;EACI,6BAAA;UAAA,qBAAA;EACA,wBAAA;EACA,yBAAA;EACA,WAAA;ADyCJ;;ACtCA;EACI,iBAAA;EACA,aAAA;EACA,uBAAA;ADyCJ;;ACtCA;EACI,kBAAA;EACA,cAAA;EACA,yBAAA;EACA,eAAA;EACA,sBAAA;EACA,cAAA;EACA,uBAAA;EACA,gBAAA;EACA,yBAAA;ADyCJ;;ACtCA;EACI,WAAA;EACA,2BAAA;ADyCJ;;ACtCA;EACI,kCAAA;ADyCJ","sourcesContent":["*,\n*::before,\n*::after {\n\tpadding: 0;\n\tmargin: 0;\n\tborder: 0;\n\tbox-sizing: border-box;\n}\n\na {\n\ttext-decoration: none;\n\tcolor: inherit;\n}\n\nul,\nol,\nli {\n\tlist-style: none;\n}\n\nimg {\n\tvertical-align: none;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n\tfont-weight: inherit;\n\tfont-size: inherit;\n}\n\nhtml,\nbody {\n\theight: 100%;\n\tline-height: 1;\n}\n","*,\n*::before,\n*::after {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\nul,\nol,\nli {\n  list-style: none;\n}\n\nimg {\n  vertical-align: none;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: inherit;\n  font-size: inherit;\n}\n\nhtml,\nbody {\n  height: 100%;\n  line-height: 1;\n}\n\nhtml {\n  height: 100%;\n  box-sizing: border-box;\n  width: 100%;\n}\n\nbody {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  height: 100%;\n}\n\n.container {\n  max-width: 1130px;\n  margin: 0 auto;\n  padding: 0 10px;\n  height: 100%;\n}\n\n.header {\n  max-width: 1130px;\n  height: 116px;\n  display: flex;\n  margin: 0 auto;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.header-fixed {\n  background-color: #fff;\n  position: sticky;\n  z-index: 401;\n  top: 0;\n  left: 0;\n  animation-name: header;\n  animation-duration: 0.4s;\n  box-shadow: 0px 4px 6px rgba(178, 176, 188, 0.28);\n}\n\n.header__icons {\n  width: 120px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.header__user-icon, .header__search-icon, .header__bag-icon {\n  width: 15px;\n  height: 15px;\n  color: #1C2A39;\n}\n\n.header__user-icon:hover, .header__search-icon:hover, .header__bag-icon:hover {\n  transform: scale(1.2);\n  transition: ease-in 0.2s;\n  cursor: pointer;\n}\n\n.header__logo {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 29px;\n  color: #1C2A39;\n}\n\n.header__navigation {\n  width: 372px;\n  display: flex;\n  flex-direction: row;\n  list-style: none;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.navigation-fixed {\n  width: 100px;\n}\n\n.header__navigation-link {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 10px;\n  line-height: 12px;\n  text-transform: uppercase;\n  color: #5C6A79;\n}\n\n.header__navigation-link:hover {\n  font-family: \"Montserrat\";\n  font-weight: 900;\n  color: #1C2A39;\n  cursor: pointer;\n}\n\n.header__bag-count {\n  display: none;\n  color: white;\n  background-color: red;\n  border-radius: 50%;\n  width: 13px;\n  height: 13px;\n  position: relative;\n  z-index: 401;\n  margin-top: -12px;\n  margin-left: 5px;\n  text-align: center;\n  font-size: 12px;\n}\n\n.dots {\n  display: flex;\n  justify-content: center;\n  margin: 0 30px;\n}\n\n.controller {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 17px;\n}\n\n.dot {\n  width: 10px;\n  height: 10px;\n  margin: 0 5px;\n  display: inline-block;\n  cursor: pointer;\n  border-radius: 50%;\n  background-color: rgb(239, 238, 246);\n}\n\n.dot:hover,\n.active-dot {\n  background: #9E98DC;\n}\n\n.nav-slider {\n  overflow: hidden;\n  z-index: 10;\n  position: relative;\n}\n\n.slide-image {\n  object-fit: cover;\n}\n\n.slider {\n  width: 1120px;\n  height: 702px;\n  position: relative;\n  overflow: hidden;\n  margin: 0 auto;\n  box-shadow: 0px 6px 59px rgba(53, 49, 84, 0.08);\n  display: flex;\n}\n\n.slide1,\n.slide2,\n.slide3 {\n  width: 100%;\n  height: 702px;\n  position: absolute;\n  top: 0;\n  left: -1120px;\n  display: flex;\n}\n\n.slide1.active,\n.slide2.active,\n.slide3.active {\n  left: 0;\n  transition: all 2s ease-out;\n}\n\n.slider-promo__item1 {\n  margin-right: -83px;\n  margin-bottom: 76px;\n  width: 149px;\n  height: 204px;\n  background: #9E98DC;\n  box-shadow: 0px 24px 36px rgba(53, 49, 84, 0.28);\n}\n\n.slider-promo__item2 {\n  margin-right: -156px;\n  width: 137px;\n  height: 273px;\n  background: #FF8FE6;\n  box-shadow: 0px 24px 36px rgba(53, 49, 84, 0.28);\n}\n\n.slider-promo__subtitle {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 22px;\n  text-transform: uppercase;\n  color: #1C2A39;\n  padding: 102px 20px 36px;\n}\n\n.slider-promo__subtitle2 {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 22px;\n  text-transform: uppercase;\n  color: #1C2A39;\n  padding: 149px 47px 36px 21px;\n}\n\n.slider-promo {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  margin-top: -670px;\n  z-index: 10;\n}\n\n.nav-active {\n  color: var(--text-black, #1C2A39);\n  font-size: 10px;\n  font-style: normal;\n  font-weight: 900;\n  line-height: normal;\n  text-transform: uppercase;\n}\n\n.books {\n  margin-left: -50px;\n  padding-top: 50px;\n}\n\n.bookshop {\n  height: 100%;\n  width: 100%;\n  margin-top: 15%;\n}\n\n.bookshop-page {\n  display: flex;\n  width: 1130px;\n  height: 100%;\n}\n\n.bookshop-catalog {\n  background-color: #EFEEF6;\n  position: absolute;\n  z-index: 200;\n  width: 35%;\n  left: 0;\n}\n\n.bookshop-cat {\n  z-index: 201;\n}\n\n.bookshop-list {\n  height: 710px;\n  padding: 45px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n\n.bookshop-list__item {\n  color: var(--text-gray, #5C6A79);\n  font-family: Montserrat;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  text-transform: capitalize;\n}\n\n.bookshop-list__item:hover, .active-bookshop-list__item {\n  color: var(--text-black, #1C2A39);\n  font-family: Montserrat;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n  text-transform: capitalize;\n  transform: scale(1.2);\n  transition: 0.1s ease-in;\n}\n\n.books {\n  width: 100%;\n  z-index: 301;\n  margin-left: 80px;\n}\n\n.books-page {\n  display: grid;\n  column-gap: 75px;\n  row-gap: 85px;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n}\n\n.book-card {\n  display: flex;\n}\n\n.book-card__img {\n  width: 212px;\n  height: 327px;\n  margin-right: 2vw;\n  background: #EEECEC;\n  box-shadow: 0px 24px 36px 0px rgba(53, 49, 84, 0.28);\n}\n\n.book_info__description {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.book-info {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 40%;\n}\n\n.book-info p {\n  margin: 8px;\n}\n\n.book-info__authors {\n  color: var(--text-gray, #5C6A79);\n  font-size: 12px;\n  font-family: Open Sans;\n  text-transform: capitalize;\n}\n\n.book-info__title {\n  color: var(--text-black, #1C2A39);\n  font-size: 16px;\n  font-family: Montserrat;\n  font-weight: 700;\n}\n\n.book-info__ratingsCount {\n  color: var(--text-gray, #5C6A79);\n  font-size: 10px;\n  font-family: Open Sans;\n}\n\n.book_info__description {\n  color: var(--text-gray, #5C6A79);\n  font-size: 13px;\n  font-family: Open Sans;\n  text-transform: capitalize;\n}\n\n.book-info__retailPrice {\n  color: var(--text-black, #1C2A39);\n  font-size: 13px;\n  font-family: Montserrat;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.book-info__button {\n  color: #4C3DB2;\n  font-size: 8px;\n  font-family: Montserrat;\n  font-weight: 700;\n  text-transform: uppercase;\n  padding: 18px 66px;\n  background-color: #fff;\n  border: 1px solid #4C3DB2;\n  margin: 8px;\n  cursor: pointer;\n}\n\n.book-info__button:hover, .load-button__item:hover {\n  transform: scale(1.1);\n  transition: ease-in 0.2s;\n  background-color: #4C3DB2;\n  color: #fff;\n}\n\n.load-button {\n  margin: 80px auto;\n  display: flex;\n  justify-content: center;\n}\n\n.load-button__item {\n  padding: 18px 63px;\n  color: #4C3DB2;\n  border: 1px solid #4C3DB2;\n  cursor: pointer;\n  background-color: #fff;\n  font-size: 8px;\n  font-family: Montserrat;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.book-info__button-active {\n  color: gray;\n  border: 1px solid gainsboro;\n}\n\n.book-info__button-active:hover {\n  background-color: rgb(199, 13, 13);\n}","html {\r\n\theight: 100%;\r\n\tbox-sizing: border-box;\r\n\twidth: 100%;\r\n}\r\n\r\nbody {\r\n\tfont-family: 'Montserrat', sans-serif;\r\n\tfont-size: 14px;\r\n\tfont-weight: 400;\r\n\theight: 100%;\r\n}\r\n\r\n.container {\r\n\tmax-width: 1130px;\r\n\tmargin: 0 auto;\r\n\tpadding: 0 10px;\r\n\theight: 100%;\r\n}\r\n\r\n.header{\r\n    max-width: 1130px;\r\n    height: 116px;\r\n    display: flex;\r\n    margin: 0 auto;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.header-fixed{\r\n    background-color: #fff;\r\n    position: sticky;\r\n    z-index: 401;\r\n    top: 0;\r\n    left: 0;\r\n    animation-name: header;\r\n    animation-duration: 0.4s;\r\n    box-shadow: 0px 4px 6px rgba(178, 176, 188, 0.28);\r\n}\r\n\r\n.header__icons{\r\n    width: 120px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.header__user-icon, .header__search-icon, .header__bag-icon{\r\n    width: 15px;\r\n    height: 15px;\r\n    color: #1C2A39;\r\n}\r\n\r\n.header__user-icon:hover, .header__search-icon:hover, .header__bag-icon:hover{\r\n    transform: scale(1.2);\r\n    transition: ease-in 0.2s;\r\n    cursor: pointer;\r\n}\r\n\r\n.header__logo{\r\n    font-family: 'Montserrat';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    line-height: 29px;\r\n    color: #1C2A39;\r\n}\r\n\r\n.header__navigation{\r\n    width: 372px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    list-style: none;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.navigation-fixed {\r\n    width: 100px;\r\n}\r\n\r\n.header__navigation-link{\r\n    font-family: 'Montserrat';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 10px;\r\n    line-height: 12px;\r\n    text-transform: uppercase;\r\n    color: #5C6A79;\r\n}\r\n\r\n.header__navigation-link:hover{\r\n    font-family: 'Montserrat';\r\n    font-weight: 900;\r\n    color: #1C2A39;\r\n    cursor: pointer;\r\n}\r\n\r\n.header__bag-count{\r\n    display: none;\r\n    color: white;\r\n    background-color: red;\r\n    border-radius: 50%;\r\n    width: 13px;\r\n    height: 13px;\r\n    position: relative;\r\n    z-index: 401;\r\n    margin-top: -12px;\r\n    margin-left: 5px;\r\n    text-align: center;\r\n    font-size: 12px;\r\n}\r\n\r\n.dots {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin: 0 30px;\r\n}\r\n\r\n.controller {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: 17px;\r\n}\r\n\r\n.dot {\r\n    width: 10px;\r\n    height: 10px;\r\n    margin: 0 5px;\r\n    display: inline-block;\r\n    cursor: pointer;\r\n    border-radius: 50%;\r\n    background-color: rgba(239, 238, 246, 1);\r\n}\r\n\r\n.dot:hover,\r\n.active-dot {\r\n    background: #9E98DC;\r\n}\r\n\r\n.nav-slider {\r\n    overflow: hidden;\r\n    z-index: 10;\r\n    position: relative;\r\n}\r\n\r\n.slide-image {\r\n    object-fit: cover;\r\n}\r\n\r\n.slider {\r\n    width: 1120px;\r\n    height: 702px;\r\n    position: relative;\r\n    overflow: hidden;\r\n    margin: 0 auto;\r\n    box-shadow: 0px 6px 59px rgba(53, 49, 84, 0.08);\r\n    display: flex;\r\n}\r\n\r\n.slide1,\r\n.slide2,\r\n.slide3 {\r\n    width: 100%;\r\n    height: 702px;\r\n    position: absolute;\r\n    top: 0;\r\n    left: -1120px;\r\n    display: flex;\r\n}\r\n     \r\n.slide1.active,\r\n.slide2.active,\r\n.slide3.active {\r\n    left: 0;\r\n    transition: all 2s ease-out;\r\n}\r\n\r\n.slider-promo__item1{\r\n    margin-right: -83px;\r\n    margin-bottom: 76px;\r\n    width: 149px;\r\n    height: 204px;\r\n    background: #9E98DC;\r\n    box-shadow: 0px 24px 36px rgba(53, 49, 84, 0.28);\r\n}\r\n\r\n.slider-promo__item2{\r\n    margin-right: -156px;\r\n    width: 137px;\r\n    height: 273px;\r\n    background: #FF8FE6;\r\n    box-shadow: 0px 24px 36px rgba(53, 49, 84, 0.28);\r\n}\r\n\r\n.slider-promo__subtitle{\r\n    font-family: 'Montserrat';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 18px;\r\n    line-height: 22px;\r\n    text-transform: uppercase;\r\n    color: #1C2A39;\r\n    padding: 102px 20px 36px;\r\n}\r\n\r\n.slider-promo__subtitle2{\r\n    font-family: 'Montserrat';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 18px;\r\n    line-height: 22px;\r\n    text-transform: uppercase;\r\n    color: #1C2A39;\r\n    padding: 149px 47px 36px 21px;\r\n}\r\n\r\n.slider-promo{\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-end;\r\n    margin-top: -670px;\r\n    z-index: 10;\r\n}\r\n\r\n.nav-active {\r\n    color: var(--text-black, #1C2A39);\r\n    font-size: 10px;\r\n    font-style: normal;\r\n    font-weight: 900;\r\n    line-height: normal;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.books{\r\n    margin-left: -50px;\r\n    padding-top: 50px;\r\n}\r\n\r\n.bookshop{\r\n    height: 100%;\r\n    width: 100%;\r\n    margin-top: 15%;\r\n}\r\n\r\n.bookshop-page{\r\n    display: flex;\r\n    width: 1130px;;\r\n    height: 100%;\r\n}\r\n\r\n.bookshop-catalog {\r\n    background-color: #EFEEF6;\r\n    position: absolute;\r\n    z-index: 200;\r\n    width: 35%;\r\n    left: 0;\r\n}\r\n\r\n.bookshop-cat {\r\n    z-index: 201;\r\n}\r\n\r\n.bookshop-list {\r\n    height: 710px;\r\n    padding: 45px 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: space-between;\r\n}\r\n\r\n.bookshop-list__item{\r\n    color: var(--text-gray, #5C6A79);\r\n    font-family: Montserrat;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.bookshop-list__item:hover, .active-bookshop-list__item {\r\n    color: var(--text-black, #1C2A39);\r\n    font-family: Montserrat;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: normal;\r\n    text-transform: capitalize;\r\n    transform: scale(1.2);\r\n    transition: 0.1s ease-in;\r\n}\r\n\r\n.books{\r\n    width:100%;\r\n    z-index: 301;\r\n    margin-left: 80px;\r\n}\r\n\r\n.books-page{\r\n    display: grid;\r\n    column-gap: 75px;\r\n    row-gap: 85px;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    grid-template-rows: repeat(3, 1fr);\r\n}\r\n\r\n.book-card{\r\n    display: flex;\r\n}\r\n\r\n.book-card__img{\r\n    width: 212px;\r\n    height: 327px;\r\n    margin-right: 2vw;\r\n    background: #EEECEC;\r\n    box-shadow: 0px 24px 36px 0px rgba(53, 49, 84, 0.28);\r\n}\r\n\r\n.book_info__description{\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 3;\r\n    -webkit-box-orient: vertical;  \r\n    overflow: hidden;\r\n}\r\n\r\n.book-info{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    width: 40%;\r\n}\r\n\r\n.book-info p{\r\n    margin: 8px;\r\n}\r\n\r\n.book-info__authors{\r\n    color: var(--text-gray, #5C6A79);\r\n    font-size: 12px;\r\n    font-family: Open Sans;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.book-info__title{\r\n    color: var(--text-black, #1C2A39);\r\n    font-size: 16px;\r\n    font-family: Montserrat;\r\n    font-weight: 700;\r\n}\r\n\r\n.book-info__ratingsCount{\r\n    color: var(--text-gray, #5C6A79);\r\n    font-size: 10px;\r\n    font-family: Open Sans;\r\n}\r\n\r\n.book_info__description{\r\n    color: var(--text-gray, #5C6A79);\r\n    font-size: 13px;\r\n    font-family: Open Sans;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.book-info__retailPrice{\r\n    color: var(--text-black, #1C2A39);\r\n    font-size: 13px;\r\n    font-family: Montserrat;\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.book-info__button{\r\n    color: #4C3DB2;\r\n    font-size: 8px;\r\n    font-family: Montserrat;\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n    padding: 18px 66px;\r\n    background-color: #fff;\r\n    border: 1px solid #4C3DB2;\r\n    margin: 8px;\r\n    cursor: pointer;\r\n}\r\n\r\n.book-info__button:hover, .load-button__item:hover{\r\n    transform: scale(1.1);\r\n    transition: ease-in 0.2s;\r\n    background-color: #4C3DB2;\r\n    color: #fff;\r\n}\r\n\r\n.load-button{\r\n    margin: 80px auto;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.load-button__item{\r\n    padding: 18px 63px;\r\n    color: #4C3DB2;\r\n    border: 1px solid #4C3DB2;\r\n    cursor: pointer;\r\n    background-color: #fff;\r\n    font-size: 8px;\r\n    font-family: Montserrat;\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.book-info__button-active{\r\n    color: gray;\r\n    border: 1px solid gainsboro;\r\n}\r\n\r\n.book-info__button-active:hover{\r\n    background-color: rgb(199, 13, 13);\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Bookshop.svg */ "./src/img/Bookshop.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/user.svg */ "./src/img/user.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/search.svg */ "./src/img/search.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/shop_bag.svg */ "./src/img/shop_bag.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/banner.svg */ "./src/img/banner.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/banner-2.svg */ "./src/img/banner-2.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/banner-3.svg */ "./src/img/banner-3.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/arrow.png */ "./src/img/arrow.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var code = "<!DOCTYPE html>\r\n<html lang=\"ru\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>BookShop</title>\r\n</head>\r\n<body>   \r\n    <div class=\"container\">\r\n        <header>\r\n    <div class=\"header\">\r\n        <p class=\"header__logo\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></p>\r\n        <ul class=\"header__navigation\">\r\n            <li class=\"header__navigation-link\">books</li>\r\n            <li class=\"header__navigation-link\">audiobooks</li>\r\n            <li class=\"header__navigation-link\">Stationery & gifts</li>\r\n            <li class=\"header__navigation-link\">blog</li>\r\n        </ul>\r\n        <div class=\"header__icons\">\r\n            <div class=\"header__user-icon\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\">\r\n            </div>\r\n            <div class=\"header__search-icon\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\">\r\n            </div>\r\n            <div class=\"header__bag-icon\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\">\r\n                <div class=\"header__bag-count\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</header>\r\n        <div class=\"app\">\r\n            <div class=\"nav-slider\">\r\n                <div class=\"slider\">\r\n                    <div class=\"slide1 active\">\r\n                        <div class=\"slide-image\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"slide2\">\r\n                        <div class = \"slide-image\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"slide3\">\r\n                        <div class=\"slide-image\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"controller\">              \r\n                    <div class=\"dots\">\r\n                        <span class=\"dot active-dot\"></span>\r\n                        <span class=\"dot\"></span>\r\n                        <span class=\"dot\"></span>\r\n                    </div>          \r\n                </div>  \r\n            </div>\r\n            <div class=\"slider-promo\">\r\n                <div class=\"slider-promo__item1\">\r\n                    <p class=\"slider-promo__subtitle\">\r\n                        Change <br>\r\n                        old book <br>\r\n                        on new <br>\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"arrow-left\">\r\n                    </p>\r\n                </div>\r\n                <div class=\"slider-promo__item2\">\r\n                    <p class=\"slider-promo__subtitle2\">\r\n                        top <br>\r\n                        100 <br>\r\n                        books <br>\r\n                        2022 <br>\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"arrow-left\">\r\n                    </p>\r\n                </div>\r\n            </div>\r\n    </div>\r\n    <section class=\"bookshop\">\r\n        <div class=\"bookshop-page\">\r\n            <div class=\"bookshop-catalog\">\r\n                <ul class=\"bookshop-list\"></div>\r\n            <div class=\"bookshop-cat\">\r\n                <ul class=\"bookshop-list\">\r\n                    <li class=\"bookshop-list__item active-bookshop-list__item\">Architecture</li>\r\n                    <li class=\"bookshop-list__item\">Art&nbsp;&&nbsp;Fashion</li>\r\n                    <li class=\"bookshop-list__item\">Biography</li>\r\n                    <li class=\"bookshop-list__item\">Business</li>\r\n                    <li class=\"bookshop-list__item\">Crafts&nbsp;&&nbsp;Hobbies</li>\r\n                    <li class=\"bookshop-list__item\">Drama</li>\r\n                    <li class=\"bookshop-list__item\">Fiction</li>\r\n                    <li class=\"bookshop-list__item\">Food&nbsp;&&nbsp;Drink</li>\r\n                    <li class=\"bookshop-list__item\">Health&nbsp;&&nbsp;Wellbeing</li>\r\n                    <li class=\"bookshop-list__item\">History&nbsp;&&nbsp;Politics</li>\r\n                    <li class=\"bookshop-list__item\">Humor</li>\r\n                    <li class=\"bookshop-list__item\">Poetry</li>\r\n                    <li class=\"bookshop-list__item\">Psychology</li>\r\n                    <li class=\"bookshop-list__item\">Science</li>\r\n                    <li class=\"bookshop-list__item\">Technology</li>\r\n                    <li class=\"bookshop-list__item\">Travel&nbsp;&&nbsp;Maps</li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"books\">\r\n                <div class=\"books-page\"></div>\r\n                <div class=\"load-button\">\r\n                    <button class=\"load-button__item\">Load more</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    \r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/img/Bookshop.svg":
/*!******************************!*\
  !*** ./src/img/Bookshop.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/e4625b2bab2c1c98d278.svg";

/***/ }),

/***/ "./src/img/arrow.png":
/*!***************************!*\
  !*** ./src/img/arrow.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/9c9669d091d0aee57ff0.png";

/***/ }),

/***/ "./src/img/banner-2.svg":
/*!******************************!*\
  !*** ./src/img/banner-2.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/9e6304912925dc849131.svg";

/***/ }),

/***/ "./src/img/banner-3.svg":
/*!******************************!*\
  !*** ./src/img/banner-3.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/73b96c2e854bc9063a3e.svg";

/***/ }),

/***/ "./src/img/banner.svg":
/*!****************************!*\
  !*** ./src/img/banner.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/27b4ac16552c06be2afd.svg";

/***/ }),

/***/ "./src/img/search.svg":
/*!****************************!*\
  !*** ./src/img/search.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/b334a6402095de5442c0.svg";

/***/ }),

/***/ "./src/img/shop_bag.svg":
/*!******************************!*\
  !*** ./src/img/shop_bag.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/bbb70f91c559239b9290.svg";

/***/ }),

/***/ "./src/img/user.svg":
/*!**************************!*\
  !*** ./src/img/user.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/bbaadccedfd222c8a72f.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '.shop_bag.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '.img/search.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _img_user_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/user.svg */ "./src/img/user.svg");





let slider = document.querySelector('.slider');
let slides = slider.querySelectorAll('.slide1, .slide2, .slide3');
let dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let slideIndex = 0;
function showSlide(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  slides[n].classList.add('active');
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active-dot');
  }
  dots[n].classList.add('active-dot');
}
;
dots.forEach(function (dot, index) {
  dot.addEventListener('click', function () {
    currentSlide = index;
    showSlide(currentSlide);
  });
});
function nextSliders() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}
setInterval(nextSliders, 5000);
showSlide(currentSlide);
const key = "AIzaSyDzuQMPaY6w-ea3dDCUwTQzwu2ud3sU2Nw";
let startIndex = 0;
let subject = "Architecture";
function useRequest(cb1, cb2) {
  fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:${subject}"&${key}
        API>&printType=books&startIndex=${startIndex}&maxResults=6&langRestrict=en`).then(response => response.json()).then(data => {
    if (cb1) {
      cb1(data);
    } else {
      console.log("cb1 error");
    }
    if (cb2) {
      cb2();
    } else {
      console.log("cb2 error");
    }
  }).catch(error => console.log(error));
}
function isUndefined(str) {
  if (str) {
    return str;
  } else {
    return "&nbsp";
  }
}
function displayResult(data) {
  let cards = '';
  data.items.forEach(item => {
    let card = `
            <div class="book-card">
                <div>
                    <img src="${item.volumeInfo.imageLinks.thumbnail}" class = "book-card__img">
                </div>
                <div class="book-info">
                    <p class="book-info__authors"> ${isUndefined(item.volumeInfo.authors)} </p>
                    <p class="book-info__title"> ${isUndefined(item.volumeInfo.title)} </p>
                    <p class="book-info__ratingsCount"> ${isUndefined(item.volumeInfo.ratingsCount)} </p>
                    <p class="book_info__description"> ${isUndefined(item.volumeInfo.description)} </p>
                    <p class="book-info__retailPrice"> ${isUndefined(item.saleInfo.retailPrice)} </p>
                    <button class="book-info__button">buy&nbsp;now</button>
                </div>
            </div>
        `;
    cards += card;
  });
  document.querySelector('.books-page').innerHTML += cards;
}
function loadMoreFn() {
  const btn = document.querySelector('.load-button__item');
  btn.addEventListener('click', () => {
    startIndex += 6;
    useRequest(displayResult, buyFn);
  });
}
;
function chooseCategoryFn() {
  const categories = document.querySelectorAll('.bookshop-list__item');
  categories.forEach(category => {
    category.addEventListener('click', () => {
      subject = category.textContent;
      document.querySelector('.books-page').innerHTML = " ";
      useRequest(displayResult, buyFn);
      categories.forEach(cat => {
        cat.classList.remove('active-bookshop-list__item');
      });
      category.classList.add('active-bookshop-list__item');
    });
  });
}
;
function buyFn() {
  let counter = 0;
  let bagCounter = document.querySelector('.header__bag-count');
  window.addEventListener('scroll', () => {
    bagCounter = document.querySelector('.header__bag-count');
  });
  const buttons = document.querySelectorAll('.book-info__button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (button.textContent === "buy now") {
        button.textContent = "in the cart";
        button.classList.add('book-info__button-active');
        counter++;
        bagCounter.style.display = "block";
        bagCounter.textContent = counter;
      } else {
        button.textContent = "buy now";
        button.classList.remove('book-info__button-active');
        counter--;
        bagCounter.textContent = counter;
        if (counter === 0) {
          bagCounter.style.display = "none";
        }
      }
    });
  });
}
;
useRequest(displayResult, buyFn);
loadMoreFn();
chooseCategoryFn();
const originalHeaderContainer = document.querySelector('.header').innerHTML;
function fixedHeader() {
  const headerContainer = document.querySelector('.header');
  let headerNav = document.querySelector('.header__navigation');
  let header = document.querySelector('header');
  window.onscroll = function showHeader() {
    if (window.scrollY > 150) {
      headerNav.style.width = "100px";
      header.classList.add('header-fixed');
      headerContainer.innerHTML = `
            <ul class="header__navigation navigation-fixed">
                <li class="header__navigation-link">gifts</li>
                <li class="header__navigation-link">blog</li>
            </ul>
            <div class="header__icons">
                <div class="header__user-icon">
                <img src="${_img_user_svg__WEBPACK_IMPORTED_MODULE_3__}" alt="">
            </div>
            <div class="header__search-icon">
                <img src="${Object(function webpackMissingModule() { var e = new Error("Cannot find module '.img/search.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())}" alt="">
            </div>
            <div class="header__bag-icon">
                <img src="${Object(function webpackMissingModule() { var e = new Error("Cannot find module '.shop_bag.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())}" alt="">
                <div class="header__bag-count">
                    </div>
                </div>
            </div>
            `;
    } else {
      header.classList.remove('header-fixed');
      headerContainer.innerHTML = originalHeaderContainer;
    }
  };
}
fixedHeader();
})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map