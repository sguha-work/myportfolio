(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"colorlib-page\">\n  <div class=\"container-wrap\">\n    <a href=\"#\" class=\"js-colorlib-nav-toggle colorlib-nav-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\n      aria-controls=\"navbar\"><i></i></a>\n    <aside id=\"colorlib-aside\" role=\"complementary\" class=\"border js-fullheight\">\n      <component-user-info></component-user-info>\n      <nav id=\"colorlib-main-menu\" role=\"navigation\" class=\"navbar\">\n        <component-menu></component-menu>\n      </nav>\n\n      <div class=\"colorlib-footer\">\n        <p><small>&copy;\n            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\n            Copyright &copy;\n            <script>document.write(new Date().getFullYear());</script><span> All rights reserved | This template is made\n              with <i class=\"icon-heart\" aria-hidden=\"true\"></i> by <a href=\"https://colorlib.com\" target=\"_blank\">Colorlib</a>\n              <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></span> <span>Demo Images: <a href=\"https://unsplash.com/\" target=\"_blank\">Unsplash.com</a></span></small></p>\n        <component-social-links></component-social-links>\n      </div>\n\n    </aside>\n\n    <div id=\"colorlib-main\">\n      \n      <component-home></component-home>\n      <component-about></component-about>\n      <component-services></component-services>\n      <!-- <div id=\"colorlib-counter\" class=\"colorlib-counters\" style=\"background-image: url(assets/images/cover_bg_1.jpg);\" data-stellar-background-ratio=\"0.5\">\n        <div class=\"overlay\"></div>\n        <div class=\"colorlib-narrow-content\">\n          <div class=\"row\">\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-3 text-center animate-box\">\n              <span class=\"colorlib-counter js-counter\" data-from=\"0\" data-to=\"309\" data-speed=\"5000\" data-refresh-interval=\"50\"></span>\n              <span class=\"colorlib-counter-label\">Cups of coffee</span>\n            </div>\n            <div class=\"col-md-3 text-center animate-box\">\n              <span class=\"colorlib-counter js-counter\" data-from=\"0\" data-to=\"356\" data-speed=\"5000\" data-refresh-interval=\"50\"></span>\n              <span class=\"colorlib-counter-label\">Projects</span>\n            </div>\n            <div class=\"col-md-3 text-center animate-box\">\n              <span class=\"colorlib-counter js-counter\" data-from=\"0\" data-to=\"30\" data-speed=\"5000\" data-refresh-interval=\"50\"></span>\n              <span class=\"colorlib-counter-label\">Clients</span>\n            </div>\n            <div class=\"col-md-3 text-center animate-box\">\n              <span class=\"colorlib-counter js-counter\" data-from=\"0\" data-to=\"10\" data-speed=\"5000\" data-refresh-interval=\"50\"></span>\n              <span class=\"colorlib-counter-label\">Partners</span>\n            </div>\n          </div>\n        </div>\n      </div> -->\n      <component-skills></component-skills>\n      <component-education></component-education>\n      <component-experience></component-experience>\n      <component-work></component-work>\n      <component-blog></component-blog>\n      <component_contact></component_contact>\n\n    </div><!-- end:colorlib-main -->\n  </div><!-- end:container-wrap -->\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'MyPortFolio';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user-info/user-info.component */ "./src/app/components/user-info/user-info.component.ts");
/* harmony import */ var _components_social_links_social_links_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/social-links/social-links.component */ "./src/app/components/social-links/social-links.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_work_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/work/work.component */ "./src/app/components/work/work.component.ts");
/* harmony import */ var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/experience/experience.component */ "./src/app/components/experience/experience.component.ts");
/* harmony import */ var _components_education_education_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/education/education.component */ "./src/app/components/education/education.component.ts");
/* harmony import */ var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/skills/skills.component */ "./src/app/components/skills/skills.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/services/services.component */ "./src/app/components/services/services.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"],
                _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_5__["UserInfoComponent"],
                _components_social_links_social_links_component__WEBPACK_IMPORTED_MODULE_6__["SocialLinksComponent"],
                _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_7__["BlogComponent"],
                _components_work_work_component__WEBPACK_IMPORTED_MODULE_8__["WorkComponent"],
                _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_9__["ExperienceComponent"],
                _components_education_education_component__WEBPACK_IMPORTED_MODULE_10__["EducationComponent"],
                _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_11__["SkillsComponent"],
                _components_services_services_component__WEBPACK_IMPORTED_MODULE_12__["ServicesComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"colorlib-about\" data-section=\"about\">\n  <div class=\"colorlib-narrow-content\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"row row-bottom-padded-sm animate-box\" data-animate-effect=\"fadeInLeft\">\n          <div class=\"col-md-12\">\n            <div class=\"about-desc\">\n              <span class=\"heading-meta\">About Us</span>\n              <h2 class=\"colorlib-heading\">Who Am I?</h2>\n              <p><strong>Hi I'm Jackson Ford</strong> On her way she met a copy. The copy warned the Little Blind Text, that\n                where it came from it would have been rewritten a thousand times and everything that was left from its origin\n                would be the word \"and\" and the Little Blind Text should turn around and return to its own, safe country.</p>\n              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life\n                One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World\n                of Grammar.</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3 animate-box\" data-animate-effect=\"fadeInLeft\">\n            <div class=\"services color-1\">\n              <span class=\"icon2\"><i class=\"icon-bulb\"></i></span>\n              <h3>Graphic Design</h3>\n            </div>\n          </div>\n          <div class=\"col-md-3 animate-box\" data-animate-effect=\"fadeInRight\">\n            <div class=\"services color-2\">\n              <span class=\"icon2\"><i class=\"icon-globe-outline\"></i></span>\n              <h3>Web Design</h3>\n            </div>\n          </div>\n          <div class=\"col-md-3 animate-box\" data-animate-effect=\"fadeInTop\">\n            <div class=\"services color-3\">\n              <span class=\"icon2\"><i class=\"icon-data\"></i></span>\n              <h3>Software</h3>\n            </div>\n          </div>\n          <div class=\"col-md-3 animate-box\" data-animate-effect=\"fadeInBottom\">\n            <div class=\"services color-4\">\n              <span class=\"icon2\"><i class=\"icon-phone3\"></i></span>\n              <h3>Application</h3>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12 animate-box\" data-animate-effect=\"fadeInLeft\">\n            <div class=\"hire\">\n              <h2>I am happy to know you <br>that 300+ projects done sucessfully!</h2>\n              <a href=\"#\" class=\"btn-hire\">Hire me</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'component-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/blog/blog.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/blog/blog.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/blog/blog.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/blog/blog.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"colorlib-blog\" data-section=\"blog\">\n  <div class=\"colorlib-narrow-content\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-md-offset-3 col-md-pull-3 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <span class=\"heading-meta\">Read</span>\n        <h2 class=\"colorlib-heading\">Recent Blog</h2>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <div class=\"blog-entry\">\n          <a href=\"blog.html\" class=\"blog-img\"><img src=\"assets/images/blog-1.jpg\" class=\"img-responsive\" alt=\"HTML5 Bootstrap Template by colorlib.com\"></a>\n          <div class=\"desc\">\n            <span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i class=\"icon-bubble3\"></i>\n                4</small></span>\n            <h3><a href=\"blog.html\">Renovating National Gallery</a></h3>\n            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInRight\">\n        <div class=\"blog-entry\">\n          <a href=\"blog.html\" class=\"blog-img\"><img src=\"assets/images/blog-2.jpg\" class=\"img-responsive\" alt=\"HTML5 Bootstrap Template by colorlib.com\"></a>\n          <div class=\"desc\">\n            <span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i class=\"icon-bubble3\"></i>\n                4</small></span>\n            <h3><a href=\"blog.html\">Wordpress for a Beginner</a></h3>\n            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <div class=\"blog-entry\">\n          <a href=\"blog.html\" class=\"blog-img\"><img src=\"assets/images/blog-3.jpg\" class=\"img-responsive\" alt=\"HTML5 Bootstrap Template by colorlib.com\"></a>\n          <div class=\"desc\">\n            <span><small>April 14, 2018 </small> | <small> Inspiration </small> | <small> <i class=\"icon-bubble3\"></i>\n                4</small></span>\n            <h3><a href=\"blog.html\">Make website from scratch</a></h3>\n            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12 animate-box\">\n        <p><a href=\"#\" class=\"btn btn-primary btn-lg btn-load-more\">Load more <i class=\"icon-reload\"></i></a></p>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/blog/blog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/blog/blog.component.ts ***!
  \***************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'component-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/components/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/components/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"component_contact\" class=\"colorlib-contact\" data-section=\"contact\">\n  <div class=\"colorlib-narrow-content\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-md-offset-3 col-md-pull-3 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <span class=\"heading-meta\">Get in Touch</span>\n        <h2 class=\"colorlib-heading\">Contact</h2>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-5\">\n        <div class=\"colorlib-feature colorlib-feature-sm animate-box\" data-animate-effect=\"fadeInLeft\">\n          <div class=\"colorlib-icon\">\n            <i class=\"icon-globe-outline\"></i>\n          </div>\n          <div class=\"colorlib-text\">\n            <p><a href=\"#\">sguha1988.life@gmail.com</a></p>\n          </div>\n        </div>\n\n        <div class=\"colorlib-feature colorlib-feature-sm animate-box\" data-animate-effect=\"fadeInLeft\">\n          <div class=\"colorlib-icon\">\n            <i class=\"icon-map\"></i>\n          </div>\n          <div class=\"colorlib-text\">\n            <p>C/O Tridib Kr. Guha Krishnapur Road Mahendranagar PO- Natagarh Sodepur Kolkata - 700113 WestBengal India</p>\n          </div>\n        </div>\n\n        <div class=\"colorlib-feature colorlib-feature-sm animate-box\" data-animate-effect=\"fadeInLeft\">\n          <div class=\"colorlib-icon\">\n            <i class=\"icon-phone\"></i>\n          </div>\n          <div class=\"colorlib-text\">\n            <p><a href=\"tel://\">+91 9830612244</a></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-7 col-md-push-1\">\n        <div class=\"row\">\n          <div class=\"col-md-10 col-md-offset-1 col-md-pull-1 animate-box\" data-animate-effect=\"fadeInRight\">\n            <form action=\"\">\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Name\">\n              </div>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\n              </div>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Subject\">\n              </div>\n              <div class=\"form-group\">\n                <textarea name=\"\" id=\"message\" cols=\"30\" rows=\"7\" class=\"form-control\" placeholder=\"Message\"></textarea>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"submit\" class=\"btn btn-primary btn-send-message\" value=\"Send Message\">\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'component_contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/education/education.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/education/education.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/education/education.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/education/education.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"colorlib-education\" data-section=\"education\">\n  <div class=\"colorlib-narrow-content\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-md-offset-3 col-md-pull-3 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <span class=\"heading-meta\">Education</span>\n        <h2 class=\"colorlib-heading animate-box\">Education</h2>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <div class=\"fancy-collapse-panel\">\n          <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\n                <h4 class=\"panel-title\">\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">Master\n                    Degree Graphic Design\n                  </a>\n                </h4>\n              </div>\n              <div id=\"collapseOne\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n                <div class=\"panel-body\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live\n                        the blind texts. </p>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.\n                      </p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\n                <h4 class=\"panel-title\">\n                  <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">Bachelor\n                    Degree of Computer Science\n                  </a>\n                </h4>\n              </div>\n              <div id=\"collapseTwo\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n                <div class=\"panel-body\">\n                  <p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and Consonantia,\n                    there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics,\n                    a large language ocean.</p>\n                  <ul>\n                    <li>Separated they live in Bookmarksgrove right</li>\n                    <li>Separated they live in Bookmarksgrove right</li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\" role=\"tab\" id=\"headingThree\">\n                <h4 class=\"panel-title\">\n                  <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">Diploma\n                    in Information Technology\n                  </a>\n                </h4>\n              </div>\n              <div id=\"collapseThree\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\n                <div class=\"panel-body\">\n                  <p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and Consonantia,\n                    there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics,\n                    a large language ocean.</p>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\" role=\"tab\" id=\"headingFour\">\n                <h4 class=\"panel-title\">\n                  <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\" aria-expanded=\"false\" aria-controls=\"collapseFour\">Diploma\n                    in Information Technology\n                  </a>\n                </h4>\n              </div>\n              <div id=\"collapseFour\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingFour\">\n                <div class=\"panel-body\">\n                  <p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and Consonantia,\n                    there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics,\n                    a large language ocean.</p>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\" role=\"tab\" id=\"headingFive\">\n                <h4 class=\"panel-title\">\n                  <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFive\" aria-expanded=\"false\" aria-controls=\"collapseFive\">High\n                    School Secondary Education\n                  </a>\n                </h4>\n              </div>\n              <div id=\"collapseFive\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingFive\">\n                <div class=\"panel-body\">\n                  <p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and Consonantia,\n                    there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics,\n                    a large language ocean.</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/education/education.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/education/education.component.ts ***!
  \*************************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'component-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/components/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.css */ "./src/app/components/education/education.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/components/experience/experience.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/experience/experience.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/experience/experience.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/experience/experience.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"colorlib-experience\" data-section=\"experience\">\n  <div class=\"colorlib-narrow-content\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-md-offset-3 col-md-pull-3 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <span class=\"heading-meta\">Experience</span>\n        <h2 class=\"colorlib-heading animate-box\">Work Experience</h2>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"timeline-centered\">\n          <article class=\"timeline-entry animate-box\" data-animate-effect=\"fadeInLeft\">\n            <div class=\"timeline-entry-inner\">\n\n              <div class=\"timeline-icon color-1\">\n                <i class=\"icon-pen2\"></i>\n              </div>\n\n              <div class=\"timeline-label\">\n                <h2><a href=\"#\">Full Stack Developer</a> <span>2017-2018</span></h2>\n                <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial\n                  two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but\n                  rooms think may.</p>\n              </div>\n            </div>\n          </article>\n\n\n          <article class=\"timeline-entry animate-box\" data-animate-effect=\"fadeInRight\">\n            <div class=\"timeline-entry-inner\">\n              <div class=\"timeline-icon color-2\">\n                <i class=\"icon-pen2\"></i>\n              </div>\n              <div class=\"timeline-label\">\n                <h2><a href=\"#\">Front End Developer at Google Company</a> <span>2017-2018</span></h2>\n                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life\n                  One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World\n                  of Grammar.</p>\n              </div>\n            </div>\n          </article>\n\n          <article class=\"timeline-entry animate-box\" data-animate-effect=\"fadeInLeft\">\n            <div class=\"timeline-entry-inner\">\n              <div class=\"timeline-icon color-3\">\n                <i class=\"icon-pen2\"></i>\n              </div>\n              <div class=\"timeline-label\">\n                <h2><a href=\"#\">System Analyst</a> <span>2017-2018</span></h2>\n                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life\n                  One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World\n                  of Grammar.</p>\n              </div>\n            </div>\n          </article>\n\n          <article class=\"timeline-entry animate-box\" data-animate-effect=\"fadeInTop\">\n            <div class=\"timeline-entry-inner\">\n              <div class=\"timeline-icon color-4\">\n                <i class=\"icon-pen2\"></i>\n              </div>\n              <div class=\"timeline-label\">\n                <h2><a href=\"#\">Creative Designer</a> <span>2017-2018</span></h2>\n                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life\n                  One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World\n                  of Grammar.</p>\n              </div>\n            </div>\n          </article>\n\n          <article class=\"timeline-entry animate-box\" data-animate-effect=\"fadeInLeft\">\n            <div class=\"timeline-entry-inner\">\n              <div class=\"timeline-icon color-5\">\n                <i class=\"icon-pen2\"></i>\n              </div>\n              <div class=\"timeline-label\">\n                <h2><a href=\"#\">UI/UX Designer at Envato</a> <span>2017-2018</span></h2>\n                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life\n                  One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World\n                  of Grammar.</p>\n              </div>\n            </div>\n          </article>\n\n          <article class=\"timeline-entry begin animate-box\" data-animate-effect=\"fadeInBottom\">\n            <div class=\"timeline-entry-inner\">\n              <div class=\"timeline-icon color-none\">\n              </div>\n            </div>\n          </article>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/experience/experience.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/experience/experience.component.ts ***!
  \***************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'component-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/components/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.css */ "./src/app/components/experience/experience.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"colorlib-hero\" class=\"js-fullheight\" data-section=\"home\">\n  <div class=\"flexslider js-fullheight\">\n    <ul class=\"slides\">\n      <li style=\"background-image: url(assets/images/img_bg_1.jpg);\">\n        <div class=\"overlay\"></div>\n        <div class=\"container-fluid\">\n          <div class=\"row\">\n            <div class=\"col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text\">\n              <div class=\"slider-text-inner js-fullheight\">\n                <div class=\"desc\">\n                  <h1>Hi! <br>I'm Sahasrangshu</h1>\n                  <h2>MEAN stack developer for last 6 years </h2>\n                  <p><a class=\"btn btn-primary btn-learn\" href=\"https://docs.google.com/document/d/e/2PACX-1vQT9cPUe3JTftWX0SNHyFLy44AgZLQR8sFhe-9jpkfOsFl_cuPlEqTudLZbNALWL3eTGvTVpFQnh_DV/pub\">Download\n                      CV <i class=\"icon-download4\"></i></a></p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'component-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/menu/menu.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"navbar\" class=\"collapse\">\n  <ul>\n    <li class=\"active\"><a href=\"#\" data-nav-section=\"home\">Home</a></li>\n    <li><a href=\"#\" data-nav-section=\"about\">About</a></li>\n    <li><a href=\"#\" data-nav-section=\"services\">Services</a></li>\n    <li><a href=\"#\" data-nav-section=\"skills\">Skills</a></li>\n    <li><a href=\"#\" data-nav-section=\"education\">Education</a></li>\n    <li><a href=\"#\" data-nav-section=\"experience\">Experience</a></li>\n    <li><a href=\"#\" data-nav-section=\"work\">Work</a></li>\n    <li><a href=\"#\" data-nav-section=\"blog\">Blog</a></li>\n    <li><a href=\"#\" data-nav-section=\"contact\">Contact</a></li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'component-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/components/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/services/services.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/services/services.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/services/services.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/services/services.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"colorlib-services\" data-section=\"services\">\n  <div class=\"colorlib-narrow-content\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-md-offset-3 col-md-pull-3 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <span class=\"heading-meta\">What I do?</span>\n        <h2 class=\"colorlib-heading\">Here are some of my expertise</h2>\n      </div>\n    </div>\n    <div class=\"row row-pt-md\">\n      <div class=\"col-md-4 text-center animate-box\">\n        <div class=\"services color-1\">\n          <span class=\"icon\">\n            <i class=\"icon-bulb\"></i>\n          </span>\n          <div class=\"desc\">\n            <h3>Innovative Ideas</h3>\n            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 text-center animate-box\">\n        <div class=\"services color-2\">\n          <span class=\"icon\">\n            <i class=\"icon-data\"></i>\n          </span>\n          <div class=\"desc\">\n            <h3>Software</h3>\n            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 text-center animate-box\">\n        <div class=\"services color-3\">\n          <span class=\"icon\">\n            <i class=\"icon-phone3\"></i>\n          </span>\n          <div class=\"desc\">\n            <h3>Application</h3>\n            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 text-center animate-box\">\n        <div class=\"services color-4\">\n          <span class=\"icon\">\n            <i class=\"icon-layers2\"></i>\n          </span>\n          <div class=\"desc\">\n            <h3>Graphic Design</h3>\n            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 text-center animate-box\">\n        <div class=\"services color-5\">\n          <span class=\"icon\">\n            <i class=\"icon-data\"></i>\n          </span>\n          <div class=\"desc\">\n            <h3>Software</h3>\n            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 text-center animate-box\">\n        <div class=\"services color-6\">\n          <span class=\"icon\">\n            <i class=\"icon-phone3\"></i>\n          </span>\n          <div class=\"desc\">\n            <h3>Application</h3>\n            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/services/services.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/services/services.component.ts ***!
  \***********************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'component-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/components/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/components/services/services.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/components/skills/skills.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/skills/skills.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/skills/skills.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/skills/skills.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"colorlib-skills\" data-section=\"skills\">\n  <div class=\"colorlib-narrow-content\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-md-offset-3 col-md-pull-3 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <span class=\"heading-meta\">My Specialty</span>\n        <h2 class=\"colorlib-heading animate-box\">My Skills</h2>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious\n          Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt\n          and made herself on the way.</p>\n      </div>\n      <div class=\"col-md-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <div class=\"progress-wrap\">\n          <h3>Photoshop</h3>\n          <div class=\"progress\">\n            <div class=\"progress-bar color-1\" role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:75%\">\n              <span>75%</span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6 animate-box\" data-animate-effect=\"fadeInRight\">\n        <div class=\"progress-wrap\">\n          <h3>jQuery</h3>\n          <div class=\"progress\">\n            <div class=\"progress-bar color-2\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:60%\">\n              <span>60%</span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <div class=\"progress-wrap\">\n          <h3>HTML5</h3>\n          <div class=\"progress\">\n            <div class=\"progress-bar color-3\" role=\"progressbar\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:85%\">\n              <span>85%</span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6 animate-box\" data-animate-effect=\"fadeInRight\">\n        <div class=\"progress-wrap\">\n          <h3>CSS3</h3>\n          <div class=\"progress\">\n            <div class=\"progress-bar color-4\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:90%\">\n              <span>90%</span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <div class=\"progress-wrap\">\n          <h3>WordPress</h3>\n          <div class=\"progress\">\n            <div class=\"progress-bar color-5\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:70%\">\n              <span>70%</span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6 animate-box\" data-animate-effect=\"fadeInRight\">\n        <div class=\"progress-wrap\">\n          <h3>SEO</h3>\n          <div class=\"progress\">\n            <div class=\"progress-bar color-6\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:80%\">\n              <span>80%</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/skills/skills.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/skills/skills.component.ts ***!
  \*******************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'component-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/components/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.css */ "./src/app/components/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/components/social-links/social-links.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/social-links/social-links.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/social-links/social-links.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/social-links/social-links.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li><a href=\"https://www.facebook.com/people/Sahasrangshu-Guha/100014825580936\"><i class=\"icon-facebook2\"></i></a></li>\n  <li><a href=\"https://twitter.com/SahasrangshuGu2\"><i class=\"icon-twitter2\"></i></a></li>\n  <li><a href=\"https://www.instagram.com/sguha1988/\"><i class=\"icon-instagram\"></i></a></li>\n  <li><a href=\"https://www.linkedin.com/in/sahasrangshu-guha-598a3a61/\"><i class=\"icon-linkedin2\"></i></a></li>\n</ul>"

/***/ }),

/***/ "./src/app/components/social-links/social-links.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/social-links/social-links.component.ts ***!
  \*******************************************************************/
/*! exports provided: SocialLinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLinksComponent", function() { return SocialLinksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialLinksComponent = /** @class */ (function () {
    function SocialLinksComponent() {
    }
    SocialLinksComponent.prototype.ngOnInit = function () {
    };
    SocialLinksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'component-social-links',
            template: __webpack_require__(/*! ./social-links.component.html */ "./src/app/components/social-links/social-links.component.html"),
            styles: [__webpack_require__(/*! ./social-links.component.css */ "./src/app/components/social-links/social-links.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialLinksComponent);
    return SocialLinksComponent;
}());



/***/ }),

/***/ "./src/app/components/user-info/user-info.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/user-info/user-info.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-info/user-info.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/user-info/user-info.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n  <div class=\"author-img\" style=\"background-image: url(assets/images/about.jpg);\"></div>\n  <h1 id=\"colorlib-logo\"><a href=\"index.html\">Sahasrangshu Guha</a></h1>\n  <span class=\"position\"><a href=\"#\">MEANstack developer</a> in Kolkata, India</span>\n</div>"

/***/ }),

/***/ "./src/app/components/user-info/user-info.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/user-info/user-info.component.ts ***!
  \*************************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent() {
    }
    UserInfoComponent.prototype.ngOnInit = function () {
    };
    UserInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'component-user-info',
            template: __webpack_require__(/*! ./user-info.component.html */ "./src/app/components/user-info/user-info.component.html"),
            styles: [__webpack_require__(/*! ./user-info.component.css */ "./src/app/components/user-info/user-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/work/work.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/work/work.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/work/work.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/work/work.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"colorlib-work\" data-section=\"work\">\n  <div class=\"colorlib-narrow-content\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-md-offset-3 col-md-pull-3 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <span class=\"heading-meta\">My Work</span>\n        <h2 class=\"colorlib-heading animate-box\">Recent Work</h2>\n      </div>\n    </div>\n    <div class=\"row row-bottom-padded-sm animate-box\" data-animate-effect=\"fadeInLeft\">\n      <div class=\"col-md-12\">\n        <p class=\"work-menu\"><span><a href=\"#\" class=\"active\">Graphic Design</a></span> <span><a href=\"#\">Web Design</a></span>\n          <span><a href=\"#\">Software</a></span> <span><a href=\"#\">Apps</a></span></p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <div class=\"project\" style=\"background-image: url(assets/images/img-1.jpg);\">\n          <div class=\"desc\">\n            <div class=\"con\">\n              <h3><a href=\"work.html\">Work 01</a></h3>\n              <span>Website</span>\n              <p class=\"icon\">\n                <span><a href=\"#\"><i class=\"icon-share3\"></i></a></span>\n                <span><a href=\"#\"><i class=\"icon-eye\"></i> 100</a></span>\n                <span><a href=\"#\"><i class=\"icon-heart\"></i> 49</a></span>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6 animate-box\" data-animate-effect=\"fadeInRight\">\n        <div class=\"project\" style=\"background-image: url(assets/images/img-2.jpg);\">\n          <div class=\"desc\">\n            <div class=\"con\">\n              <h3><a href=\"work.html\">Work 02</a></h3>\n              <span>Animation</span>\n              <p class=\"icon\">\n                <span><a href=\"#\"><i class=\"icon-share3\"></i></a></span>\n                <span><a href=\"#\"><i class=\"icon-eye\"></i> 100</a></span>\n                <span><a href=\"#\"><i class=\"icon-heart\"></i> 49</a></span>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6 animate-box\" data-animate-effect=\"fadeInTop\">\n        <div class=\"project\" style=\"background-image: url(assets/images/img-3.jpg);\">\n          <div class=\"desc\">\n            <div class=\"con\">\n              <h3><a href=\"work.html\">Work 03</a></h3>\n              <span>Illustration</span>\n              <p class=\"icon\">\n                <span><a href=\"#\"><i class=\"icon-share3\"></i></a></span>\n                <span><a href=\"#\"><i class=\"icon-eye\"></i> 100</a></span>\n                <span><a href=\"#\"><i class=\"icon-heart\"></i> 49</a></span>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6 animate-box\" data-animate-effect=\"fadeInBottom\">\n        <div class=\"project\" style=\"background-image: url(assets/images/img-4.jpg);\">\n          <div class=\"desc\">\n            <div class=\"con\">\n              <h3><a href=\"work.html\">Work 04</a></h3>\n              <span>Application</span>\n              <p class=\"icon\">\n                <span><a href=\"#\"><i class=\"icon-share3\"></i></a></span>\n                <span><a href=\"#\"><i class=\"icon-eye\"></i> 100</a></span>\n                <span><a href=\"#\"><i class=\"icon-heart\"></i> 49</a></span>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <div class=\"project\" style=\"background-image: url(assets/images/img-5.jpg);\">\n          <div class=\"desc\">\n            <div class=\"con\">\n              <h3><a href=\"work.html\">Work 05</a></h3>\n              <span>Graphic, Logo</span>\n              <p class=\"icon\">\n                <span><a href=\"#\"><i class=\"icon-share3\"></i></a></span>\n                <span><a href=\"#\"><i class=\"icon-eye\"></i> 100</a></span>\n                <span><a href=\"#\"><i class=\"icon-heart\"></i> 49</a></span>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6 animate-box\" data-animate-effect=\"fadeInRight\">\n        <div class=\"project\" style=\"background-image: url(assets/images/img-6.jpg);\">\n          <div class=\"desc\">\n            <div class=\"con\">\n              <h3><a href=\"work.html\">Work 06</a></h3>\n              <span>Web Design</span>\n              <p class=\"icon\">\n                <span><a href=\"#\"><i class=\"icon-share3\"></i></a></span>\n                <span><a href=\"#\"><i class=\"icon-eye\"></i> 100</a></span>\n                <span><a href=\"#\"><i class=\"icon-heart\"></i> 49</a></span>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12 animate-box\">\n        <p><a href=\"#\" class=\"btn btn-primary btn-lg btn-load-more\">Load more <i class=\"icon-reload\"></i></a></p>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/work/work.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/work/work.component.ts ***!
  \***************************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkComponent = /** @class */ (function () {
    function WorkComponent() {
    }
    WorkComponent.prototype.ngOnInit = function () {
    };
    WorkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'component-work',
            template: __webpack_require__(/*! ./work.component.html */ "./src/app/components/work/work.component.html"),
            styles: [__webpack_require__(/*! ./work.component.css */ "./src/app/components/work/work.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /opt/lampp/htdocs/SAHASRANGSHU/MyPortFolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map