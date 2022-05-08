(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = 'tesis';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _vistas_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vistas/inicio/inicio.component */ "./src/app/vistas/inicio/inicio.component.ts");
/* harmony import */ var _vistas_novedades_novedades_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vistas/novedades/novedades.component */ "./src/app/vistas/novedades/novedades.component.ts");
/* harmony import */ var _vistas_historia_historia_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vistas/historia/historia.component */ "./src/app/vistas/historia/historia.component.ts");
/* harmony import */ var _vistas_mision_vision_mision_vision_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vistas/mision-vision/mision-vision.component */ "./src/app/vistas/mision-vision/mision-vision.component.ts");
/* harmony import */ var _vistas_docente_docente_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vistas/docente/docente.component */ "./src/app/vistas/docente/docente.component.ts");
/* harmony import */ var _vistas_Padres_entrevista_entrevista_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vistas/Padres/entrevista/entrevista.component */ "./src/app/vistas/Padres/entrevista/entrevista.component.ts");
/* harmony import */ var _vistas_Padres_citacion_citacion_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vistas/Padres/citacion/citacion.component */ "./src/app/vistas/Padres/citacion/citacion.component.ts");
/* harmony import */ var _vistas_Padres_circular_circular_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vistas/Padres/circular/circular.component */ "./src/app/vistas/Padres/circular/circular.component.ts");
/* harmony import */ var _vistas_Comunicado_nuevo_nuevo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vistas/Comunicado/nuevo/nuevo.component */ "./src/app/vistas/Comunicado/nuevo/nuevo.component.ts");
/* harmony import */ var _vistas_Comunicado_pendiente_pendiente_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./vistas/Comunicado/pendiente/pendiente.component */ "./src/app/vistas/Comunicado/pendiente/pendiente.component.ts");
/* harmony import */ var _vistas_Comunicado_lista_lista_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./vistas/Comunicado/lista/lista.component */ "./src/app/vistas/Comunicado/lista/lista.component.ts");
/* harmony import */ var _vistas_Comunicado_detalle_detalle_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./vistas/Comunicado/detalle/detalle.component */ "./src/app/vistas/Comunicado/detalle/detalle.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_15__["routing"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _vistas_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__["InicioComponent"],
        _vistas_Padres_entrevista_entrevista_component__WEBPACK_IMPORTED_MODULE_8__["EntrevistaComponent"],
        _vistas_docente_docente_component__WEBPACK_IMPORTED_MODULE_7__["DocenteComponent"],
        _vistas_Padres_citacion_citacion_component__WEBPACK_IMPORTED_MODULE_9__["CitacionComponent"],
        _vistas_Padres_circular_circular_component__WEBPACK_IMPORTED_MODULE_10__["CircularComponent"],
        _vistas_Comunicado_lista_lista_component__WEBPACK_IMPORTED_MODULE_13__["ListaComponent"],
        _vistas_mision_vision_mision_vision_component__WEBPACK_IMPORTED_MODULE_6__["MisionVisionComponent"],
        _vistas_novedades_novedades_component__WEBPACK_IMPORTED_MODULE_4__["NovedadesComponent"],
        _vistas_historia_historia_component__WEBPACK_IMPORTED_MODULE_5__["HistoriaComponent"],
        _vistas_Comunicado_nuevo_nuevo_component__WEBPACK_IMPORTED_MODULE_11__["NuevoComponent"],
        _vistas_Comunicado_pendiente_pendiente_component__WEBPACK_IMPORTED_MODULE_12__["PendienteComponent"],
        _vistas_Comunicado_detalle_detalle_component__WEBPACK_IMPORTED_MODULE_14__["DetalleComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _vistas_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__["InicioComponent"],
                    _vistas_Padres_entrevista_entrevista_component__WEBPACK_IMPORTED_MODULE_8__["EntrevistaComponent"],
                    _vistas_docente_docente_component__WEBPACK_IMPORTED_MODULE_7__["DocenteComponent"],
                    _vistas_Padres_citacion_citacion_component__WEBPACK_IMPORTED_MODULE_9__["CitacionComponent"],
                    _vistas_Padres_circular_circular_component__WEBPACK_IMPORTED_MODULE_10__["CircularComponent"],
                    _vistas_Comunicado_lista_lista_component__WEBPACK_IMPORTED_MODULE_13__["ListaComponent"],
                    _vistas_mision_vision_mision_vision_component__WEBPACK_IMPORTED_MODULE_6__["MisionVisionComponent"],
                    _vistas_novedades_novedades_component__WEBPACK_IMPORTED_MODULE_4__["NovedadesComponent"],
                    _vistas_historia_historia_component__WEBPACK_IMPORTED_MODULE_5__["HistoriaComponent"],
                    _vistas_Comunicado_nuevo_nuevo_component__WEBPACK_IMPORTED_MODULE_11__["NuevoComponent"],
                    _vistas_Comunicado_pendiente_pendiente_component__WEBPACK_IMPORTED_MODULE_12__["PendienteComponent"],
                    _vistas_Comunicado_detalle_detalle_component__WEBPACK_IMPORTED_MODULE_14__["DetalleComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing__WEBPACK_IMPORTED_MODULE_15__["routing"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _vistas_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vistas/inicio/inicio.component */ "./src/app/vistas/inicio/inicio.component.ts");
/* harmony import */ var _vistas_Padres_circular_circular_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vistas/Padres/circular/circular.component */ "./src/app/vistas/Padres/circular/circular.component.ts");
/* harmony import */ var _vistas_Padres_citacion_citacion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vistas/Padres/citacion/citacion.component */ "./src/app/vistas/Padres/citacion/citacion.component.ts");
/* harmony import */ var _vistas_Padres_entrevista_entrevista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vistas/Padres/entrevista/entrevista.component */ "./src/app/vistas/Padres/entrevista/entrevista.component.ts");
/* harmony import */ var _vistas_Comunicado_nuevo_nuevo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vistas/Comunicado/nuevo/nuevo.component */ "./src/app/vistas/Comunicado/nuevo/nuevo.component.ts");
/* harmony import */ var _vistas_Comunicado_detalle_detalle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vistas/Comunicado/detalle/detalle.component */ "./src/app/vistas/Comunicado/detalle/detalle.component.ts");
/* harmony import */ var _vistas_Comunicado_lista_lista_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vistas/Comunicado/lista/lista.component */ "./src/app/vistas/Comunicado/lista/lista.component.ts");
/* harmony import */ var _vistas_Comunicado_pendiente_pendiente_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vistas/Comunicado/pendiente/pendiente.component */ "./src/app/vistas/Comunicado/pendiente/pendiente.component.ts");
/* harmony import */ var _vistas_mision_vision_mision_vision_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vistas/mision-vision/mision-vision.component */ "./src/app/vistas/mision-vision/mision-vision.component.ts");
/* harmony import */ var _vistas_novedades_novedades_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vistas/novedades/novedades.component */ "./src/app/vistas/novedades/novedades.component.ts");
/* harmony import */ var _vistas_docente_docente_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vistas/docente/docente.component */ "./src/app/vistas/docente/docente.component.ts");












//import { HistoriaComponent } from './Vistas/historia/historia.component';
const appRoutes = [
    { path: '', component: _vistas_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_1__["InicioComponent"] },
    { path: 'inicio', component: _vistas_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_1__["InicioComponent"] },
    { path: 'comunicado', component: _vistas_Comunicado_nuevo_nuevo_component__WEBPACK_IMPORTED_MODULE_5__["NuevoComponent"] },
    { path: 'lista', component: _vistas_Comunicado_lista_lista_component__WEBPACK_IMPORTED_MODULE_7__["ListaComponent"] },
    { path: 'circulares', component: _vistas_Padres_circular_circular_component__WEBPACK_IMPORTED_MODULE_2__["CircularComponent"] },
    { path: 'citaciones', component: _vistas_Padres_citacion_citacion_component__WEBPACK_IMPORTED_MODULE_3__["CitacionComponent"] },
    { path: 'detalles', component: _vistas_Comunicado_detalle_detalle_component__WEBPACK_IMPORTED_MODULE_6__["DetalleComponent"] },
    { path: 'entrevista', component: _vistas_Padres_entrevista_entrevista_component__WEBPACK_IMPORTED_MODULE_4__["EntrevistaComponent"] },
    { path: 'mision', component: _vistas_mision_vision_mision_vision_component__WEBPACK_IMPORTED_MODULE_9__["MisionVisionComponent"] },
    { path: 'novedades', component: _vistas_novedades_novedades_component__WEBPACK_IMPORTED_MODULE_10__["NovedadesComponent"] },
    { path: 'pendientes', component: _vistas_Comunicado_pendiente_pendiente_component__WEBPACK_IMPORTED_MODULE_8__["PendienteComponent"] },
    { path: 'docentes', component: _vistas_docente_docente_component__WEBPACK_IMPORTED_MODULE_11__["DocenteComponent"] },
];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 6, vars: 0, consts: [[1, "footer", "bg-inverse", "text-center"], [1, "container"], [1, "titulo", "text-white"], [1, "direccion", "text-white"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00A9Colegio Cardenal Cushing 2021 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Direcci\u00F3n: Calle LEMOINE Santa Cruz de la Sierra, Bolivia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%]{\r\n   background:  rgb(8, 144, 235);;\r\n    bottom: 0;\r\n    height: 95px;\r\n    width: 100%;\r\n}\r\n.titulo[_ngcontent-%COMP%]{\r\n    padding-top: 1.5%;\r\n}\r\n.direccion[_ngcontent-%COMP%]{\r\n    padding-bottom: 1.5%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csNkJBQTZCO0lBQzVCLFNBQVM7SUFDVCxZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJ7XHJcbiAgIGJhY2tncm91bmQ6ICByZ2IoOCwgMTQ0LCAyMzUpOztcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGhlaWdodDogOTVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi50aXR1bG97XHJcbiAgICBwYWRkaW5nLXRvcDogMS41JTtcclxufVxyXG4uZGlyZWNjaW9ue1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEuNSU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 74, vars: 0, consts: [["lang", "es"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["type", "checkbox", "id", "btn-menu"], ["for", "btn-menu"], ["src", "https://c0.klipartz.com/pngpicture/171/464/gratis-png-boton-de-iconos-de-computadora-menu-de-inicio-de-windows-7-boton.png", 1, "img-responsive"], [1, "menu-responsive"], ["href", "inicio"], ["href", "novedades"], ["id", "nosotros"], ["size", "1"], ["id", "sub-menu1"], ["href", "historia"], ["href", "mision"], ["href", "docentes"], ["id", "padres"], ["id", "sub-menu2"], ["href", "circulares"], ["href", "citaciones"], ["href", "entrevista"], ["id", "comunicado"], ["id", "sub-menu3"], ["href", "comunicado"], ["href", "lista"], ["href", "pendientes"], ["id", "usuario"], ["id", "sub-menu4"], ["href", "#"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nav", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Novedades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Nosotros ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "font", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u25BC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Historia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Mision Vision");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Plantel Docente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Informacion de Padres ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "font", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u25BC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Circulares");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Citaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Entrevistas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Comunicados ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "font", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u25BC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Crear Comunicado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Lista Comunicado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Pendientes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Usuarios ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "font", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\u25BC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Crear Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Adminstrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n}\r\n#btn-menu[_ngcontent-%COMP%]{\r\n    display: none;\r\n}\r\nheader[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    background:rgb(8, 144, 235);\r\n}\r\nheader[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n    display: none;\r\n    width: 48px;\r\n    height: 48px;\r\n    padding: 5px;\r\n}\r\nheader[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover{\r\n    background: rgb(4, 101, 165);\r\n}\r\nheader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n}\r\n.menu-responsive[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    background: rgb(8, 144, 235);\r\n    width: 100%;\r\n    height: 56px;\r\n    z-index: 100;\r\n    top: 0;\r\n}\r\n.menu-responsive[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    display: flex;\r\n    height: 100%;\r\n}\r\n.menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    display: block;\r\n    padding: 14px 20px;\r\n    color: rgb(255,255,255);\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n.menu-responsive[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    margin: 0;\r\n    transition: top .3s;\r\n    border-top: solid 3px cyan;\r\n    flex-direction: column;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    transition: top .3s;\r\n    z-index: 30;\r\n}\r\n.menu-responsive[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n        position: relative;\r\n        margin: 0;\r\n        background: rgb(8, 144, 235);\r\n        z-index: 30;\r\n    }\r\n.menu-responsive[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%]{\r\n        top: 55px;\r\n        opacity: 1;\r\n        visibility: visible;\r\n    }\r\n.menu-responsive[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n        color: cyan;\r\n       border-bottom: solid 3px cyan;\r\n    }\r\n.menu-responsive[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n        border-bottom: none;\r\n        border-left: solid 4px cyan;\r\n    }\r\n#btn-menu[_ngcontent-%COMP%]:checked    ~ .menu-responsive[_ngcontent-%COMP%]{\r\n    margin-left: 0;\r\n }\r\n@media all and (max-width:700px){\r\n    header[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n        display: block;\r\n    }\r\n    .menu-responsive[_ngcontent-%COMP%]{\r\n        position: absolute;\r\n        \r\n        width: 70%;\r\n        height: calc(100vh - 48px);\r\n        top: 48px;\r\n        margin-left: -70%;\r\n        transition: all 0.5s;\r\n        z-index: 50;\r\n    }\r\n    .menu-responsive[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n    }\r\n    .menu-responsive[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n        border: none;\r\n        position: static;\r\n        display: none;\r\n        padding-left: 50px;\r\n        opacity: 1;\r\n        visibility: visible;\r\n        height: auto;\r\n    }\r\n    .menu-responsive[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n        border-left: solid 3px cyan;\r\n    }\r\n    #nosotros[_ngcontent-%COMP%]:hover   #sub-menu1[_ngcontent-%COMP%]{\r\n        display: block;\r\n     }\r\n     #padres[_ngcontent-%COMP%]:hover   #sub-menu2[_ngcontent-%COMP%]{\r\n         display: block;\r\n      }\r\n      #comunicado[_ngcontent-%COMP%]:hover   #sub-menu3[_ngcontent-%COMP%]{\r\n         display: block;\r\n      }\r\n      #usuario[_ngcontent-%COMP%]:hover   #sub-menu4[_ngcontent-%COMP%]{\r\n         display: block;\r\n      }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLE1BQU07QUFDVjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsYUFBYTtJQUNiLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjtBQUNHO1FBQ0ssa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCw0QkFBNEI7UUFDNUIsV0FBVztJQUNmO0FBQ0E7UUFDSSxTQUFTO1FBQ1QsVUFBVTtRQUNWLG1CQUFtQjtJQUN2QjtBQUNBO1FBQ0ksV0FBVztPQUNaLDZCQUE2QjtJQUNoQztBQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLDJCQUEyQjtJQUMvQjtBQUNKO0lBQ0ksY0FBYztDQUNqQjtBQUNEO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsa0NBQWtDO1FBQ2xDLFVBQVU7UUFDViwwQkFBMEI7UUFDMUIsU0FBUztRQUNULGlCQUFpQjtRQUNqQixvQkFBb0I7UUFDcEIsV0FBVztJQUNmO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsbUJBQW1CO1FBQ25CLFlBQVk7SUFDaEI7SUFDQTtRQUNJLDJCQUEyQjtJQUMvQjtJQUNBO1FBQ0ksY0FBYztLQUNqQjtLQUNBO1NBQ0ksY0FBYztNQUNqQjtNQUNBO1NBQ0csY0FBYztNQUNqQjtNQUNBO1NBQ0csY0FBYztNQUNqQjtBQUNOIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4jYnRuLW1lbnV7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbmhlYWRlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDpyZ2IoOCwgMTQ0LCAyMzUpO1xyXG59XHJcbmhlYWRlciBsYWJlbHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5oZWFkZXIgbGFiZWw6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNCwgMTAxLCAxNjUpO1xyXG59XHJcbmhlYWRlciBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5tZW51LXJlc3BvbnNpdmV7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoOCwgMTQ0LCAyMzUpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuLm1lbnUtcmVzcG9uc2l2ZSB1bHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4ubWVudS1yZXNwb25zaXZlIGxpIGF7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICAgIGNvbG9yOiByZ2IoMjU1LDI1NSwyNTUpO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5tZW51LXJlc3BvbnNpdmUgdWwgdWx7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB0cmFuc2l0aW9uOiB0b3AgLjNzO1xyXG4gICAgYm9yZGVyLXRvcDogc29saWQgM3B4IGN5YW47XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IHRvcCAuM3M7XHJcbiAgICB6LWluZGV4OiAzMDtcclxufVxyXG4gICAubWVudS1yZXNwb25zaXZlIHVsIHVsIGxpe1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDgsIDE0NCwgMjM1KTtcclxuICAgICAgICB6LWluZGV4OiAzMDtcclxuICAgIH1cclxuICAgIC5tZW51LXJlc3BvbnNpdmUgdWwgbGk6aG92ZXIgPiB1bHtcclxuICAgICAgICB0b3A6IDU1cHg7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgfVxyXG4gICAgLm1lbnUtcmVzcG9uc2l2ZSB1bCBsaSBhOmhvdmVye1xyXG4gICAgICAgIGNvbG9yOiBjeWFuO1xyXG4gICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IGN5YW47XHJcbiAgICB9XHJcbiAgICAubWVudS1yZXNwb25zaXZlIHVsIHVsIGxpIGE6aG92ZXJ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICBib3JkZXItbGVmdDogc29saWQgNHB4IGN5YW47XHJcbiAgICB9XHJcbiNidG4tbWVudTpjaGVja2VkIH4gLm1lbnUtcmVzcG9uc2l2ZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gfVxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOjcwMHB4KXtcclxuICAgIGhlYWRlciBsYWJlbHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5tZW51LXJlc3BvbnNpdmV7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIC8qIGJhY2tncm91bmQ6IHJnYig4LCAxNDQsIDIzNSk7ICovXHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTtcclxuICAgICAgICB0b3A6IDQ4cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC03MCU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAgICAgei1pbmRleDogNTA7XHJcbiAgICB9XHJcbiAgICAubWVudS1yZXNwb25zaXZlIHVse1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICAubWVudS1yZXNwb25zaXZlIHVsIHVse1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICAubWVudS1yZXNwb25zaXZlIHVsIHVsIGxpIGE6aG92ZXJ7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDNweCBjeWFuO1xyXG4gICAgfVxyXG4gICAgI25vc290cm9zOmhvdmVyICNzdWItbWVudTF7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgfVxyXG4gICAgICNwYWRyZXM6aG92ZXIgI3N1Yi1tZW51MntcclxuICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgICAgI2NvbXVuaWNhZG86aG92ZXIgI3N1Yi1tZW51M3tcclxuICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgICAgI3VzdWFyaW86aG92ZXIgI3N1Yi1tZW51NHtcclxuICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/vistas/Comunicado/detalle/detalle.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/vistas/Comunicado/detalle/detalle.component.ts ***!
  \****************************************************************/
/*! exports provided: DetalleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleComponent", function() { return DetalleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DetalleComponent {
    constructor() { }
    ngOnInit() {
    }
}
DetalleComponent.ɵfac = function DetalleComponent_Factory(t) { return new (t || DetalleComponent)(); };
DetalleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetalleComponent, selectors: [["app-detalle"]], decls: 42, vars: 0, consts: [["id", "btnE", 1, "btn-group"], ["type", "button", "id", "btnEditar", 1, "btn", "btn-outline-success"], ["id", "detalle", 1, "container"], ["id", "cont1", 1, "form-row"], [1, "form-group", "col-md-7"], ["type", "text", "id", "campo", "disabled", "", "placeholder", "Invitaci\u00F3n"], ["id", "estado", 1, "form-group", "col-md-4"], ["type", "text", "id", "campo", "disabled", "", "placeholder", "Pendiente"], ["id", "cont2", 1, "form-row"], [1, "form-group", "col-md-6"], ["type", "text", "id", "campo", "disabled", "", "placeholder", "Direcci\u00F3n"], ["id", "campo2", 1, "form-group", "col-md-6"], ["type", "text", "id", "campo", "disabled", "", "placeholder", "1-A, Secundaria"], ["id", "cont3", 1, "form-row"], [1, "form-group", "col-md-5"], ["type", "text", "id", "campof", "disabled", "", "placeholder", "7/10/2017"], ["id", "campo2", 1, "form-group", "col-md-5"], ["type", "text", "id", "campoh", "disabled", "", "placeholder", "10:00"], ["id", "cont4", 1, "form-row"], [1, "form-group"], ["type", "text", "id", "campo3", "value", "aqui va la descripcion del comunicado", "disabled", ""], ["id", "btn", 1, "btn-group"], ["type", "button", "onclick", "location.href ='lista'", 1, "btn", "btn-outline-primary"]], template: function DetalleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Detalles de Comunicado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Habilitar Editici\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Tipo de Comunicado:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Estado:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Emisor:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Destinatario:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Fecha del Evento:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Hora:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Descripci\u00F3n:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Publicar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#detalle[_ngcontent-%COMP%]{\r\n    position:absolute;\r\n    margin-top: 10px;\r\n    width:710px;\r\n    height:570px;\r\n    border-style:solid;\r\n    border-color:dodgerblue;\r\n   }\r\n#cont1[_ngcontent-%COMP%]{\r\n    position:absolute;\r\n    padding-left:10px;\r\n    padding-top:13px;\r\n    height:65px;\r\n    width:890px;\r\n    left:3px;\r\n}\r\n#cont2[_ngcontent-%COMP%]{\r\n     top:61px;\r\n     padding-left:10px;\r\n     padding-top:16px;\r\n     position:absolute;\r\n     height:65px;\r\n     width:705px;\r\n     border-top-style:solid;\r\n     border-bottom-style:solid;\r\n     border-top-color:dodgerblue;\r\n     border-bottom-color:dodgerblue;\r\n     left:3px;\r\n   }\r\n#cont3[_ngcontent-%COMP%]{\r\n      padding-left:8px;\r\n      padding-top:13px;\r\n      top:124px;\r\n      position:absolute;\r\n      height:65px;\r\n      width:890px;\r\n      left:3px;\r\n   }\r\n#cont4[_ngcontent-%COMP%]{\r\n     top:186px;\r\n     position:absolute;\r\n     width:705px;\r\n     border-top-style:solid;\r\n     border-color:dodgerblue;\r\n     left:3px;\r\n   }\r\n#campo[_ngcontent-%COMP%], #campoh[_ngcontent-%COMP%], #campof[_ngcontent-%COMP%]{\r\n   border-style:none;\r\n   width:120px;\r\n    }\r\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n       color: black;\r\n       width:auto;\r\n   }\r\n#campo2[_ngcontent-%COMP%]{\r\n       padding-right:40px;\r\n       text-align:right;\r\n       width:auto;\r\n   }\r\n#campo3[_ngcontent-%COMP%]{\r\n       position:relative;\r\n       left: 15px;\r\n      border-style:none;\r\n      width:100%;\r\n    }\r\n#campo3[_ngcontent-%COMP%]:focus{\r\n       border-style:solid;\r\n       border-color:red;\r\n   }\r\nb[_ngcontent-%COMP%]{\r\n       font-style:italic;\r\n       color:black;\r\n       padding-left:10px;\r\n   }\r\nh2[_ngcontent-%COMP%]{\r\n       padding-top:10px;\r\n   }\r\n#btn[_ngcontent-%COMP%]{\r\n       top:520px;\r\n      left:250px;\r\n   }\r\n#btnE[_ngcontent-%COMP%]{\r\n      position:absolute;\r\n      right:604px;\r\n      top:73px;\r\n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzdGFzL0NvbXVuaWNhZG8vZGV0YWxsZS9kZXRhbGxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtDQUNDO0lBQ0csaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7R0FDeEI7QUFDSDtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsUUFBUTtBQUNaO0FBQ0c7S0FDRSxRQUFRO0tBQ1IsaUJBQWlCO0tBQ2pCLGdCQUFnQjtLQUNoQixpQkFBaUI7S0FDakIsV0FBVztLQUNYLFdBQVc7S0FDWCxzQkFBc0I7S0FDdEIseUJBQXlCO0tBQ3pCLDJCQUEyQjtLQUMzQiw4QkFBOEI7S0FDOUIsUUFBUTtHQUNWO0FBQ0M7TUFDRSxnQkFBZ0I7TUFDaEIsZ0JBQWdCO01BQ2hCLFNBQVM7TUFDVCxpQkFBaUI7TUFDakIsV0FBVztNQUNYLFdBQVc7TUFDWCxRQUFRO0dBQ1g7QUFDQztLQUNDLFNBQVM7S0FDVCxpQkFBaUI7S0FDakIsV0FBVztLQUNYLHNCQUFzQjtLQUN0Qix1QkFBdUI7S0FDdkIsUUFBUTtHQUNWO0FBQ0M7R0FDRCxpQkFBaUI7R0FDakIsV0FBVztJQUNWO0FBQ0Q7T0FDSSxZQUFZO09BQ1osVUFBVTtHQUNkO0FBQ0E7T0FDSSxrQkFBa0I7T0FDbEIsZ0JBQWdCO09BQ2hCLFVBQVU7R0FDZDtBQUNBO09BQ0ksaUJBQWlCO09BQ2pCLFVBQVU7TUFDWCxpQkFBaUI7TUFDakIsVUFBVTtJQUNaO0FBQ0Q7T0FDSSxrQkFBa0I7T0FDbEIsZ0JBQWdCO0dBQ3BCO0FBQ0E7T0FDSSxpQkFBaUI7T0FDakIsV0FBVztPQUNYLGlCQUFpQjtHQUNyQjtBQUNBO09BQ0ksZ0JBQWdCO0dBQ3BCO0FBQ0E7T0FDSSxTQUFTO01BQ1YsVUFBVTtHQUNiO0FBQ0E7TUFDRyxpQkFBaUI7TUFDakIsV0FBVztNQUNYLFFBQVE7R0FDWCIsImZpbGUiOiJzcmMvYXBwL3Zpc3Rhcy9Db211bmljYWRvL2RldGFsbGUvZGV0YWxsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAjZGV0YWxsZXtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHdpZHRoOjcxMHB4O1xyXG4gICAgaGVpZ2h0OjU3MHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOnNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOmRvZGdlcmJsdWU7XHJcbiAgIH1cclxuI2NvbnQxe1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxuICAgIHBhZGRpbmctdG9wOjEzcHg7XHJcbiAgICBoZWlnaHQ6NjVweDtcclxuICAgIHdpZHRoOjg5MHB4O1xyXG4gICAgbGVmdDozcHg7XHJcbn1cclxuICAgI2NvbnQye1xyXG4gICAgIHRvcDo2MXB4O1xyXG4gICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gICAgIHBhZGRpbmctdG9wOjE2cHg7XHJcbiAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgaGVpZ2h0OjY1cHg7XHJcbiAgICAgd2lkdGg6NzA1cHg7XHJcbiAgICAgYm9yZGVyLXRvcC1zdHlsZTpzb2xpZDtcclxuICAgICBib3JkZXItYm90dG9tLXN0eWxlOnNvbGlkO1xyXG4gICAgIGJvcmRlci10b3AtY29sb3I6ZG9kZ2VyYmx1ZTtcclxuICAgICBib3JkZXItYm90dG9tLWNvbG9yOmRvZGdlcmJsdWU7XHJcbiAgICAgbGVmdDozcHg7XHJcbiAgIH1cclxuICAgICNjb250M3tcclxuICAgICAgcGFkZGluZy1sZWZ0OjhweDtcclxuICAgICAgcGFkZGluZy10b3A6MTNweDtcclxuICAgICAgdG9wOjEyNHB4O1xyXG4gICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgaGVpZ2h0OjY1cHg7XHJcbiAgICAgIHdpZHRoOjg5MHB4O1xyXG4gICAgICBsZWZ0OjNweDtcclxuICAgfVxyXG4gICAgI2NvbnQ0e1xyXG4gICAgIHRvcDoxODZweDtcclxuICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICB3aWR0aDo3MDVweDtcclxuICAgICBib3JkZXItdG9wLXN0eWxlOnNvbGlkO1xyXG4gICAgIGJvcmRlci1jb2xvcjpkb2RnZXJibHVlO1xyXG4gICAgIGxlZnQ6M3B4O1xyXG4gICB9XHJcbiAgICAjY2FtcG8sICNjYW1wb2gsICNjYW1wb2Z7XHJcbiAgIGJvcmRlci1zdHlsZTpub25lO1xyXG4gICB3aWR0aDoxMjBweDtcclxuICAgIH1cclxuICAgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgIHdpZHRoOmF1dG87XHJcbiAgIH1cclxuICAgI2NhbXBvMntcclxuICAgICAgIHBhZGRpbmctcmlnaHQ6NDBweDtcclxuICAgICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbiAgICAgICB3aWR0aDphdXRvO1xyXG4gICB9XHJcbiAgICNjYW1wbzN7XHJcbiAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgICAgIGJvcmRlci1zdHlsZTpub25lO1xyXG4gICAgICB3aWR0aDoxMDAlO1xyXG4gICAgfVxyXG4gICAjY2FtcG8zOmZvY3Vze1xyXG4gICAgICAgYm9yZGVyLXN0eWxlOnNvbGlkO1xyXG4gICAgICAgYm9yZGVyLWNvbG9yOnJlZDtcclxuICAgfVxyXG4gICBie1xyXG4gICAgICAgZm9udC1zdHlsZTppdGFsaWM7XHJcbiAgICAgICBjb2xvcjpibGFjaztcclxuICAgICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gICB9XHJcbiAgIGgye1xyXG4gICAgICAgcGFkZGluZy10b3A6MTBweDtcclxuICAgfVxyXG4gICAjYnRue1xyXG4gICAgICAgdG9wOjUyMHB4O1xyXG4gICAgICBsZWZ0OjI1MHB4O1xyXG4gICB9XHJcbiAgICNidG5Fe1xyXG4gICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6NjA0cHg7XHJcbiAgICAgIHRvcDo3M3B4O1xyXG4gICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetalleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detalle',
                templateUrl: './detalle.component.html',
                styleUrls: ['./detalle.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/vistas/Comunicado/lista/lista.component.ts":
/*!************************************************************!*\
  !*** ./src/app/vistas/Comunicado/lista/lista.component.ts ***!
  \************************************************************/
/*! exports provided: ListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaComponent", function() { return ListaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ListaComponent {
    constructor() { }
    ngOnInit() {
    }
}
ListaComponent.ɵfac = function ListaComponent_Factory(t) { return new (t || ListaComponent)(); };
ListaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListaComponent, selectors: [["app-lista"]], decls: 101, vars: 0, consts: [[1, "container"], ["id", "cont1", 1, "form-row"], [1, "form-group", "col-md-2"], ["type", "text", "list", "items", "id", "selec", "placeholder", "T. Comunicado", "onkeyup", "BuscarTc()"], ["id", "items"], ["type", "text", "list", "items2", "id", "selec", "placeholder", "Emisor", "onkeyup", "BuscarEm()"], ["id", "items2"], ["type", "text", "id", "selec", "placeholder", "Destinatario"], ["type", "text", "id", "selec", "placeholder", "Fecha de Evento"], ["id", "tblComunicado", 1, "table", "table-responsive", "table-hover", "table-striped", "table-bordered"], [1, "btn-group"], ["type", "button", "onclick", "location.href ='detalles'", 1, "btn", "btn-outline-success"]], template: function ListaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "LISTA DE COMUNICADOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Buscar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "datalist", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Convocatoria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Citaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Invitacion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Circular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "datalist", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Direcion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Finanza");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Consejero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Docente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Tipo de Comunicado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Emisor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Destinatario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Fecha de Publicacion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Fecha de Evento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Operaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Invitacion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Finanza");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "1-B, Primaria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "14/7/2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "20/7/2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Publicado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Detalles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Citaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Direccion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "3-A, Secundaria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "24/8/2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "7/8/2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Publicado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Detalles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Circular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Docente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "2-A, Primaria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "2/9/2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "10/9/2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Publicado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Detalles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%]{\r\n    margin-top: 6%;\r\n    min-height: calc(100vh - 180px);\r\n    position:relative;\r\n}\r\n.table[_ngcontent-%COMP%]{\r\n    border-style: none;  \r\n}\r\nthead[_ngcontent-%COMP%] {\r\n     background-color:deepskyblue;\r\n}\r\nlabel[_ngcontent-%COMP%]{\r\n    padding-bottom:10px;\r\n    font-style:italic;\r\n}\r\n#cont1[_ngcontent-%COMP%]{\r\n    position:relative;\r\n    padding-top:10px;\r\n    width:100%;\r\n    padding-left:45px;\r\n}\r\n#selec[_ngcontent-%COMP%]{\r\n padding-left:10px;\r\n width:160px;\r\n}\r\n#estado[_ngcontent-%COMP%]{\r\n padding-left:10px;\r\n width:100px;\r\n height:30px;\r\n}\r\n#btn[_ngcontent-%COMP%]{\r\n right:60px;\r\n}\r\n#btnCrear[_ngcontent-%COMP%]{\r\n left:20px;\r\n top:20px;\r\n}\r\np[_ngcontent-%COMP%] {\r\n    position:relative;\r\n    left:-20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzdGFzL0NvbXVuaWNhZG8vbGlzdGEvbGlzdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCwrQkFBK0I7SUFDL0IsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtLQUNLLDRCQUE0QjtBQUNqQztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCO0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsV0FBVztBQUNaO0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsV0FBVztDQUNYLFdBQVc7QUFDWjtBQUNBO0NBQ0MsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxTQUFTO0NBQ1QsUUFBUTtBQUNUO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvdmlzdGFzL0NvbXVuaWNhZG8vbGlzdGEvbGlzdGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiA2JTtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxODBweCk7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxufVxyXG4udGFibGV7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7ICBcclxufVxyXG50aGVhZCB7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjpkZWVwc2t5Ymx1ZTtcclxufVxyXG5sYWJlbHtcclxuICAgIHBhZGRpbmctYm90dG9tOjEwcHg7XHJcbiAgICBmb250LXN0eWxlOml0YWxpYztcclxufVxyXG4jY29udDF7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OjQ1cHg7XHJcbn1cclxuI3NlbGVje1xyXG4gcGFkZGluZy1sZWZ0OjEwcHg7XHJcbiB3aWR0aDoxNjBweDtcclxufVxyXG4jZXN0YWRve1xyXG4gcGFkZGluZy1sZWZ0OjEwcHg7XHJcbiB3aWR0aDoxMDBweDtcclxuIGhlaWdodDozMHB4O1xyXG59XHJcbiNidG57XHJcbiByaWdodDo2MHB4O1xyXG59XHJcbiNidG5DcmVhcntcclxuIGxlZnQ6MjBweDtcclxuIHRvcDoyMHB4O1xyXG59XHJcbnAge1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBsZWZ0Oi0yMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lista',
                templateUrl: './lista.component.html',
                styleUrls: ['./lista.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/vistas/Comunicado/nuevo/nuevo.component.ts":
/*!************************************************************!*\
  !*** ./src/app/vistas/Comunicado/nuevo/nuevo.component.ts ***!
  \************************************************************/
/*! exports provided: NuevoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoComponent", function() { return NuevoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NuevoComponent {
    constructor() { }
    ngOnInit() {
    }
}
NuevoComponent.ɵfac = function NuevoComponent_Factory(t) { return new (t || NuevoComponent)(); };
NuevoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NuevoComponent, selectors: [["app-nuevo"]], decls: 138, vars: 0, consts: [["id", "formulario", 1, "container"], ["id", "cont1", 1, "form-row"], ["id", "stcomunicado", "onchange", "mostrartc(this.value)"], ["value", "", "selected", "", 2, "display", "none"], ["value", "citacion"], ["value", "comunicado"], ["id", "comunicado1", 1, "form-row", 2, "display", "none"], ["id", "lemisor"], ["id", "semisor", "onchange", "mostrar2(this.value);"], ["value", "otro"], ["value", "docente"], ["id", "citacion1", 1, "form-row", 2, "display", "none"], ["id", "ldocente"], ["type", "text", "list", "doc", "id", "sdocente"], ["id", "doc"], ["id", "comunicado2", 1, "container", 2, "display", "none"], [1, "form-row"], ["id", "lnivel"], ["id", "snivel"], ["selected", ""], ["id", "scurso", 1, "form-row"], ["id", "lcurso"], [1, "multiselect"], ["onclick", "showCheckboxes()", 1, "selectBox"], ["onchange", "mostar(this.value);"], ["value", "1"], [1, "overSelect"], ["id", "contenedorCursos", 1, "container"], ["id", "turnoMa\u00F1ana"], ["type", "checkbox", "id", "selectall", "onclick", "selectall(document.forms[0])"], ["type", "checkbox", "id", "sell", 1, "case"], ["id", "turnoTarde"], ["type", "checkbox", "id", "selectall"], ["type", "checkbox", "id", "sell"], ["id", "citacion2", 1, "container", 2, "display", "none"], ["id", "lalumno"], ["id", "alumno", "onchange", "agTutor()"], ["value", "tutor 1"], ["value", "tutor 2"], ["value", "tutor 3"], ["id", "ltutor"], ["type", "text", "id", "tutor", "disabled", ""], ["id", "comunicado3", 1, "form-row", 2, "display", "none"], ["id", "lfecha"], ["type", "date", "id", "fecha"], ["id", "lhora"], ["type", "time", "id", "hora"], ["id", "citacion3", 1, "form-row", 2, "display", "none"], ["type", "date", "id", "fecha1"], ["id", "lhora1"], ["type", "time", "id", "hora1"], ["id", "cont4", 1, "container", 2, "display", "none"], ["id", "campoDescripcion"], ["id", "boton", 1, "btn-group", 2, "display", "none"], ["type", "button", "onclick", "location.href ='ComunicadoPendiente'", "id", "btnEnviar", 1, "btn", "btn-success"], [1, "btn-group"], ["type", "button", "onclick", "location.href ='lista'", "id", "btnVolver", 1, "btn", "btn-primary"]], template: function NuevoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Crear Nuevo Comunicado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Tipo de Comunicado:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Seleccione ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Citaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Circular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Convotoria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Invitaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Emitido por : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Direcci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Cobranza");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Consejero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Docente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Nombre : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "datalist", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Docente 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Docente 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Docente 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "A continuaci\u00F3n Seleccione el/los destinatario(s):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Nivel :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Todos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Inicial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Primaria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Secundaria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Curso:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Seleccione el curso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Tarde");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Ma\u00F1ana ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Primero ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Segundo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Tercero ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Tarde ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Primero ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Segundo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Tercero ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "La citaci\u00F3n se enviar\u00E1 al Tutor del...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Alumno :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "select", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Alumno 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Alumno 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Alumno 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Tutor :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Fecha del Evento : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Hora : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Fecha de Citaci\u00F3n : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Hora : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Descripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "textarea", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Volver");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%]{\r\n  margin-top: 4%;\r\n  min-height: calc(100vh - 152px);\r\n}\r\nh2[_ngcontent-%COMP%]{\r\n    text-align:center;\r\n    padding-top:10px;\r\n}\r\n#formulario[_ngcontent-%COMP%] {\r\nbackground-color:skyblue;\r\nmargin-top: 10px;\r\ntransition: .5s ease; \r\nborder-radius: 5px;\r\nborder-color: black;\r\nborder-style: solid;\r\nheight: 495px;\r\nwidth: 800px;\r\nposition: absolute;\r\nleft: 50%;\r\ntransform: translate(-50%)\r\n}\r\n#cont1[_ngcontent-%COMP%]{\r\nheight: 68px;\r\nwidth: 795px;\r\nposition:absolute;\r\ntop:5px;\r\nleft:3px;\r\npadding-top:15px;\r\npadding-left:20px;\r\nborder-bottom-color: black;\r\nborder-bottom-style:solid;\r\n}\r\n#comunicado1[_ngcontent-%COMP%]{\r\nheight: 68px;\r\nwidth: 795px;\r\nposition:absolute;\r\ntop:68px;\r\nleft:4px;\r\npadding-top:15px;\r\npadding-left:20px; \r\nborder-bottom-color: black;\r\nborder-bottom-style:solid;\r\n}\r\n#citacion1[_ngcontent-%COMP%]{\r\nheight: 68px;\r\nwidth: 795px;\r\nposition:absolute;\r\ntop:68px;\r\nleft:274px;\r\npadding-top:15px;\r\npadding-left:20px;\r\n\r\n}\r\n#comunicado2[_ngcontent-%COMP%]{\r\nheight: 90px;\r\nwidth: 795px;\r\nposition:absolute;\r\ntop:132px;\r\nleft:0px;\r\npadding-top:6px;\r\nborder-bottom-color: black;\r\nborder-bottom-style:solid;\r\n}\r\n#citacion2[_ngcontent-%COMP%]{\r\nheight: 90px;\r\nwidth: 795px;\r\nposition:absolute;\r\ntop:132px;\r\nleft:0px;\r\npadding-top:6px;\r\nborder-bottom-color: black;\r\nborder-bottom-style:solid;\r\n}\r\n#comunicado3[_ngcontent-%COMP%]{\r\nheight: 73px;\r\nwidth: 795px;\r\ntop:222px;\r\nleft:3px;\r\nposition:absolute;\r\npadding-top:20px;\r\npadding-left:15px;\r\npadding-bottom:10px;\r\nborder-bottom-color: black;\r\nborder-bottom-style:solid;\r\n}\r\n#citacion3[_ngcontent-%COMP%]{\r\nheight: 73px;\r\nwidth: 795px;\r\ntop:222px;\r\nleft:3px;\r\nposition:absolute;\r\npadding-top:20px;\r\npadding-left:15px;\r\npadding-bottom:10px;\r\nborder-bottom-color: black;\r\nborder-bottom-style:solid;\r\n}\r\n#cont3[_ngcontent-%COMP%]{\r\nheight: 68px;\r\nwidth: 795px;\r\nposition:absolute;\r\ntop:222px;\r\nleft:3px;\r\npadding-top:15px;\r\npadding-left:15px;\r\npadding-bottom:10px;\r\nborder-bottom-color: black;\r\nborder-bottom-style:solid;\r\n}\r\n#cont4[_ngcontent-%COMP%]{\r\nposition:absolute;\r\ntop:299px;\r\nheight:200px;\r\nwidth:600px;\r\nleft:5px;\r\npadding-left:20px;\r\n}\r\nselect[_ngcontent-%COMP%]{\r\nbackground-color:white;\r\nborder-radius:10px;\r\nheight:35px;\r\nwidth:130px;\r\n}\r\n#fecha[_ngcontent-%COMP%]{\r\nposition:absolute;\r\nbackground-color:white;\r\nborder-radius:10px;\r\npadding-left:5px;\r\npadding-right:0px;\r\nleft:175px;\r\nheight:35px;\r\nwidth:134px;\r\n}\r\n#fecha1[_ngcontent-%COMP%]{\r\nposition:absolute;\r\nbackground-color:white;\r\nborder-radius:10px;\r\nleft:175px;\r\nheight:35px;\r\nwidth:134px;\r\n}\r\n#hora[_ngcontent-%COMP%]{\r\n position:absolute;\r\nbackground-color:white;\r\ntext-align:center;\r\nborder-radius:10px;\r\nleft:450px;\r\nheight:35px;\r\n}\r\n#hora1[_ngcontent-%COMP%]{\r\nposition:absolute;\r\nbackground-color:white;\r\ntext-align:center;\r\nborder-radius:10px;\r\nleft:450px;\r\nheight:35px;\r\n}\r\n#lhora[_ngcontent-%COMP%]{\r\nleft:400px;\r\nposition:absolute;\r\n}\r\n#lhora1[_ngcontent-%COMP%]{\r\nleft:400px;\r\nposition:absolute;\r\n}\r\n#lemisor[_ngcontent-%COMP%]{\r\ntop:18px;\r\nleft:80px;\r\nposition:absolute;\r\n}\r\n#ldocente[_ngcontent-%COMP%]{\r\n top:18px;\r\nleft:100px;\r\nposition:absolute;\r\n}\r\n#lfecha[_ngcontent-%COMP%]{\r\nleft:40px;\r\nposition:absolute;\r\n}\r\n#tutor[_ngcontent-%COMP%]{\r\nposition:absolute;\r\nleft:510px;\r\ntop:40px;\r\n}\r\n#stcomunicado[_ngcontent-%COMP%]{\r\n left:175px;\r\ntop:15px;\r\nposition:absolute;\r\n}\r\n#semisor[_ngcontent-%COMP%]{\r\n left:175px;\r\ntop:15px;\r\nposition:absolute;\r\n}\r\n#snivel[_ngcontent-%COMP%]{\r\nleft:175px;\r\ntop:37px;\r\nposition:absolute;\r\n}\r\n#alumno[_ngcontent-%COMP%]{\r\n  height:35px;\r\n  border-radius:10px;\r\n  left:175px;\r\n  position:absolute;\r\n  width:240px;\r\n  top:35px;\r\n}\r\n#lnivel[_ngcontent-%COMP%]{\r\nposition:absolute;\r\nleft:125px;\r\ntop:38px;\r\n}\r\n#lcurso[_ngcontent-%COMP%]{\r\nposition:absolute;\r\nleft:6px;\r\ntop:5px;\r\n}\r\n#ltutor[_ngcontent-%COMP%]{\r\nposition:absolute;\r\nleft:462px;\r\ntop:40px;\r\n}\r\n#sdocente[_ngcontent-%COMP%]{\r\nheight:35px;\r\nborder-radius:10px;\r\nposition:absolute;\r\nleft:175px;\r\n\r\nwidth:240px;\r\n}\r\n#lalumno[_ngcontent-%COMP%]{\r\nposition:absolute;\r\nleft:105px;\r\ntop:40px;\r\n}\r\n#scurso[_ngcontent-%COMP%]{\r\nposition:absolute;\r\nleft:390px;\r\n}\r\n#campoDescripcion[_ngcontent-%COMP%]{\r\nposition:relative;\r\nbackground-color:white;\r\nresize:both;\r\nheight:100px;\r\nwidth:100%;\r\nborder-color:black;\r\nborder-width:3px;\r\n}\r\n#btnEnviar[_ngcontent-%COMP%] {\r\ntop:430px;\r\nbottom:10px;\r\nleft:700px;\r\n}\r\n#btnVolver[_ngcontent-%COMP%] {\r\ntop:17px;\r\nleft:60px;\r\n}\r\n.multiselect[_ngcontent-%COMP%] {\r\n position:absolute;\r\n top:5px;\r\n width: 240px;\r\n left:62px;\r\n}\r\n.selectBox[_ngcontent-%COMP%] {\r\nposition: relative;\r\n}\r\n.selectBox[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\nwidth: 100%;\r\nfont-weight: bold;\r\n}\r\n.overSelect[_ngcontent-%COMP%] {\r\nposition: absolute;\r\nleft: 0;\r\nright: 0px;\r\ntop: 0;\r\nbottom: 0;\r\n}\r\n#turnoMa\u00F1ana[_ngcontent-%COMP%] {\r\nbackground:white;\r\nposition:absolute;\r\ndisplay: none;\r\nborder: 1px #dadada solid;\r\nwidth:120px;\r\nleft:2px;\r\npadding-left:10px;\r\n}\r\n#turnoMa\u00F1ana[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\ndisplay: block;\r\n}\r\n#turnoMa\u00F1ana[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\r\nbackground-color: #1e90ff;\r\n}\r\n#turnoTarde[_ngcontent-%COMP%] {\r\nbackground:white;\r\nposition:absolute;\r\ndisplay: none;\r\nborder: 1px #dadada solid;\r\nwidth:120px;\r\nleft:120px;\r\npadding-left:10px;\r\n}\r\n.selectBox[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\nwidth: 100%;\r\nfont-weight: bold;\r\n}\r\n#turnoTarde[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\ndisplay: block;\r\n}\r\n#turnoTarde[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\r\nbackground-color: #1e90ff;\r\n}\r\n#contenedorCursos[_ngcontent-%COMP%]{\r\nposition:fixed;\r\nz-index:20;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzdGFzL0NvbXVuaWNhZG8vbnVldm8vbnVldm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCwrQkFBK0I7QUFDakM7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixnQkFBZ0I7QUFDaEIsb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNsQixtQkFBbUI7QUFDbkIsbUJBQW1CO0FBQ25CLGFBQWE7QUFDYixZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osWUFBWTtBQUNaLGlCQUFpQjtBQUNqQixPQUFPO0FBQ1AsUUFBUTtBQUNSLGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakIsMEJBQTBCO0FBQzFCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsWUFBWTtBQUNaLFlBQVk7QUFDWixpQkFBaUI7QUFDakIsUUFBUTtBQUNSLFFBQVE7QUFDUixnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBQ2pCLDBCQUEwQjtBQUMxQix5QkFBeUI7QUFDekI7QUFDQTtBQUNBLFlBQVk7QUFDWixZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCLFFBQVE7QUFDUixVQUFVO0FBQ1YsZ0JBQWdCO0FBQ2hCLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBLFlBQVk7QUFDWixZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCLFNBQVM7QUFDVCxRQUFRO0FBQ1IsZUFBZTtBQUNmLDBCQUEwQjtBQUMxQix5QkFBeUI7QUFDekI7QUFDQTtBQUNBLFlBQVk7QUFDWixZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCLFNBQVM7QUFDVCxRQUFRO0FBQ1IsZUFBZTtBQUNmLDBCQUEwQjtBQUMxQix5QkFBeUI7QUFDekI7QUFDQTtBQUNBLFlBQVk7QUFDWixZQUFZO0FBQ1osU0FBUztBQUNULFFBQVE7QUFDUixpQkFBaUI7QUFDakIsZ0JBQWdCO0FBQ2hCLGlCQUFpQjtBQUNqQixtQkFBbUI7QUFDbkIsMEJBQTBCO0FBQzFCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsWUFBWTtBQUNaLFlBQVk7QUFDWixTQUFTO0FBQ1QsUUFBUTtBQUNSLGlCQUFpQjtBQUNqQixnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBQ2pCLG1CQUFtQjtBQUNuQiwwQkFBMEI7QUFDMUIseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxZQUFZO0FBQ1osWUFBWTtBQUNaLGlCQUFpQjtBQUNqQixTQUFTO0FBQ1QsUUFBUTtBQUNSLGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakIsbUJBQW1CO0FBQ25CLDBCQUEwQjtBQUMxQix5QkFBeUI7QUFDekI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixTQUFTO0FBQ1QsWUFBWTtBQUNaLFdBQVc7QUFDWCxRQUFRO0FBQ1IsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsa0JBQWtCO0FBQ2xCLFdBQVc7QUFDWCxXQUFXO0FBQ1g7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixzQkFBc0I7QUFDdEIsa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakIsVUFBVTtBQUNWLFdBQVc7QUFDWCxXQUFXO0FBQ1g7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixzQkFBc0I7QUFDdEIsa0JBQWtCO0FBQ2xCLFVBQVU7QUFDVixXQUFXO0FBQ1gsV0FBVztBQUNYO0FBQ0E7Q0FDQyxpQkFBaUI7QUFDbEIsc0JBQXNCO0FBQ3RCLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEIsVUFBVTtBQUNWLFdBQVc7QUFDWDtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLHNCQUFzQjtBQUN0QixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLFVBQVU7QUFDVixXQUFXO0FBQ1g7QUFDQTtBQUNBLFVBQVU7QUFDVixpQkFBaUI7QUFDakI7QUFDQTtBQUNBLFVBQVU7QUFDVixpQkFBaUI7QUFDakI7QUFDQTtBQUNBLFFBQVE7QUFDUixTQUFTO0FBQ1QsaUJBQWlCO0FBQ2pCO0FBQ0E7Q0FDQyxRQUFRO0FBQ1QsVUFBVTtBQUNWLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsU0FBUztBQUNULGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLFVBQVU7QUFDVixRQUFRO0FBQ1I7QUFDQTtDQUNDLFVBQVU7QUFDWCxRQUFRO0FBQ1IsaUJBQWlCO0FBQ2pCO0FBQ0E7Q0FDQyxVQUFVO0FBQ1gsUUFBUTtBQUNSLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsVUFBVTtBQUNWLFFBQVE7QUFDUixpQkFBaUI7QUFDakI7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsUUFBUTtBQUNWO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsVUFBVTtBQUNWLFFBQVE7QUFDUjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLFFBQVE7QUFDUixPQUFPO0FBQ1A7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixVQUFVO0FBQ1YsUUFBUTtBQUNSO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQixVQUFVOztBQUVWLFdBQVc7QUFDWDtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLFVBQVU7QUFDVixRQUFRO0FBQ1I7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixVQUFVO0FBQ1Y7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixzQkFBc0I7QUFDdEIsV0FBVztBQUNYLFlBQVk7QUFDWixVQUFVO0FBQ1Ysa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsU0FBUztBQUNULFdBQVc7QUFDWCxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFFBQVE7QUFDUixTQUFTO0FBQ1Q7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixPQUFPO0NBQ1AsWUFBWTtDQUNaLFNBQVM7QUFDVjtBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBRUE7QUFDQSxXQUFXO0FBQ1gsaUJBQWlCO0FBQ2pCO0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsT0FBTztBQUNQLFVBQVU7QUFDVixNQUFNO0FBQ04sU0FBUztBQUNUO0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYix5QkFBeUI7QUFDekIsV0FBVztBQUNYLFFBQVE7QUFDUixpQkFBaUI7QUFDakI7QUFFQTtBQUNBLGNBQWM7QUFDZDtBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYix5QkFBeUI7QUFDekIsV0FBVztBQUNYLFVBQVU7QUFDVixpQkFBaUI7QUFDakI7QUFDQTtBQUNBLFdBQVc7QUFDWCxpQkFBaUI7QUFDakI7QUFFQTtBQUNBLGNBQWM7QUFDZDtBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsVUFBVTtBQUNWIiwiZmlsZSI6InNyYy9hcHAvdmlzdGFzL0NvbXVuaWNhZG8vbnVldm8vbnVldm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgbWFyZ2luLXRvcDogNCU7XHJcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDE1MnB4KTtcclxufVxyXG5oMntcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6MTBweDtcclxufVxyXG4jZm9ybXVsYXJpbyB7XHJcbmJhY2tncm91bmQtY29sb3I6c2t5Ymx1ZTtcclxubWFyZ2luLXRvcDogMTBweDtcclxudHJhbnNpdGlvbjogLjVzIGVhc2U7IFxyXG5ib3JkZXItcmFkaXVzOiA1cHg7XHJcbmJvcmRlci1jb2xvcjogYmxhY2s7XHJcbmJvcmRlci1zdHlsZTogc29saWQ7XHJcbmhlaWdodDogNDk1cHg7XHJcbndpZHRoOiA4MDBweDtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG5sZWZ0OiA1MCU7XHJcbnRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpXHJcbn1cclxuI2NvbnQxe1xyXG5oZWlnaHQ6IDY4cHg7XHJcbndpZHRoOiA3OTVweDtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDo1cHg7XHJcbmxlZnQ6M3B4O1xyXG5wYWRkaW5nLXRvcDoxNXB4O1xyXG5wYWRkaW5nLWxlZnQ6MjBweDtcclxuYm9yZGVyLWJvdHRvbS1jb2xvcjogYmxhY2s7XHJcbmJvcmRlci1ib3R0b20tc3R5bGU6c29saWQ7XHJcbn1cclxuI2NvbXVuaWNhZG8xe1xyXG5oZWlnaHQ6IDY4cHg7XHJcbndpZHRoOiA3OTVweDtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDo2OHB4O1xyXG5sZWZ0OjRweDtcclxucGFkZGluZy10b3A6MTVweDtcclxucGFkZGluZy1sZWZ0OjIwcHg7IFxyXG5ib3JkZXItYm90dG9tLWNvbG9yOiBibGFjaztcclxuYm9yZGVyLWJvdHRvbS1zdHlsZTpzb2xpZDtcclxufVxyXG4jY2l0YWNpb24xe1xyXG5oZWlnaHQ6IDY4cHg7XHJcbndpZHRoOiA3OTVweDtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDo2OHB4O1xyXG5sZWZ0OjI3NHB4O1xyXG5wYWRkaW5nLXRvcDoxNXB4O1xyXG5wYWRkaW5nLWxlZnQ6MjBweDtcclxuXHJcbn1cclxuI2NvbXVuaWNhZG8ye1xyXG5oZWlnaHQ6IDkwcHg7XHJcbndpZHRoOiA3OTVweDtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDoxMzJweDtcclxubGVmdDowcHg7XHJcbnBhZGRpbmctdG9wOjZweDtcclxuYm9yZGVyLWJvdHRvbS1jb2xvcjogYmxhY2s7XHJcbmJvcmRlci1ib3R0b20tc3R5bGU6c29saWQ7XHJcbn1cclxuI2NpdGFjaW9uMntcclxuaGVpZ2h0OiA5MHB4O1xyXG53aWR0aDogNzk1cHg7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6MTMycHg7XHJcbmxlZnQ6MHB4O1xyXG5wYWRkaW5nLXRvcDo2cHg7XHJcbmJvcmRlci1ib3R0b20tY29sb3I6IGJsYWNrO1xyXG5ib3JkZXItYm90dG9tLXN0eWxlOnNvbGlkO1xyXG59XHJcbiNjb211bmljYWRvM3tcclxuaGVpZ2h0OiA3M3B4O1xyXG53aWR0aDogNzk1cHg7XHJcbnRvcDoyMjJweDtcclxubGVmdDozcHg7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG5wYWRkaW5nLXRvcDoyMHB4O1xyXG5wYWRkaW5nLWxlZnQ6MTVweDtcclxucGFkZGluZy1ib3R0b206MTBweDtcclxuYm9yZGVyLWJvdHRvbS1jb2xvcjogYmxhY2s7XHJcbmJvcmRlci1ib3R0b20tc3R5bGU6c29saWQ7XHJcbn1cclxuI2NpdGFjaW9uM3tcclxuaGVpZ2h0OiA3M3B4O1xyXG53aWR0aDogNzk1cHg7XHJcbnRvcDoyMjJweDtcclxubGVmdDozcHg7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG5wYWRkaW5nLXRvcDoyMHB4O1xyXG5wYWRkaW5nLWxlZnQ6MTVweDtcclxucGFkZGluZy1ib3R0b206MTBweDtcclxuYm9yZGVyLWJvdHRvbS1jb2xvcjogYmxhY2s7XHJcbmJvcmRlci1ib3R0b20tc3R5bGU6c29saWQ7XHJcbn1cclxuI2NvbnQze1xyXG5oZWlnaHQ6IDY4cHg7XHJcbndpZHRoOiA3OTVweDtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDoyMjJweDtcclxubGVmdDozcHg7XHJcbnBhZGRpbmctdG9wOjE1cHg7XHJcbnBhZGRpbmctbGVmdDoxNXB4O1xyXG5wYWRkaW5nLWJvdHRvbToxMHB4O1xyXG5ib3JkZXItYm90dG9tLWNvbG9yOiBibGFjaztcclxuYm9yZGVyLWJvdHRvbS1zdHlsZTpzb2xpZDtcclxufVxyXG4jY29udDR7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6Mjk5cHg7XHJcbmhlaWdodDoyMDBweDtcclxud2lkdGg6NjAwcHg7XHJcbmxlZnQ6NXB4O1xyXG5wYWRkaW5nLWxlZnQ6MjBweDtcclxufVxyXG5zZWxlY3R7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmJvcmRlci1yYWRpdXM6MTBweDtcclxuaGVpZ2h0OjM1cHg7XHJcbndpZHRoOjEzMHB4O1xyXG59XHJcbiNmZWNoYXtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmJvcmRlci1yYWRpdXM6MTBweDtcclxucGFkZGluZy1sZWZ0OjVweDtcclxucGFkZGluZy1yaWdodDowcHg7XHJcbmxlZnQ6MTc1cHg7XHJcbmhlaWdodDozNXB4O1xyXG53aWR0aDoxMzRweDtcclxufVxyXG4jZmVjaGExe1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuYm9yZGVyLXJhZGl1czoxMHB4O1xyXG5sZWZ0OjE3NXB4O1xyXG5oZWlnaHQ6MzVweDtcclxud2lkdGg6MTM0cHg7XHJcbn1cclxuI2hvcmF7XHJcbiBwb3NpdGlvbjphYnNvbHV0ZTtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbmJvcmRlci1yYWRpdXM6MTBweDtcclxubGVmdDo0NTBweDtcclxuaGVpZ2h0OjM1cHg7XHJcbn1cclxuI2hvcmExe1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbmJvcmRlci1yYWRpdXM6MTBweDtcclxubGVmdDo0NTBweDtcclxuaGVpZ2h0OjM1cHg7XHJcbn1cclxuI2xob3Jhe1xyXG5sZWZ0OjQwMHB4O1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxufVxyXG4jbGhvcmExe1xyXG5sZWZ0OjQwMHB4O1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxufVxyXG4jbGVtaXNvcntcclxudG9wOjE4cHg7XHJcbmxlZnQ6ODBweDtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbn1cclxuI2xkb2NlbnRle1xyXG4gdG9wOjE4cHg7XHJcbmxlZnQ6MTAwcHg7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG59XHJcbiNsZmVjaGF7XHJcbmxlZnQ6NDBweDtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbn1cclxuI3R1dG9ye1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxubGVmdDo1MTBweDtcclxudG9wOjQwcHg7XHJcbn1cclxuI3N0Y29tdW5pY2Fkb3tcclxuIGxlZnQ6MTc1cHg7XHJcbnRvcDoxNXB4O1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxufVxyXG4jc2VtaXNvcntcclxuIGxlZnQ6MTc1cHg7XHJcbnRvcDoxNXB4O1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxufVxyXG4jc25pdmVse1xyXG5sZWZ0OjE3NXB4O1xyXG50b3A6MzdweDtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbn1cclxuI2FsdW1ub3tcclxuICBoZWlnaHQ6MzVweDtcclxuICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgbGVmdDoxNzVweDtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB3aWR0aDoyNDBweDtcclxuICB0b3A6MzVweDtcclxufVxyXG4jbG5pdmVse1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxubGVmdDoxMjVweDtcclxudG9wOjM4cHg7XHJcbn1cclxuI2xjdXJzb3tcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbmxlZnQ6NnB4O1xyXG50b3A6NXB4O1xyXG59XHJcbiNsdHV0b3J7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG5sZWZ0OjQ2MnB4O1xyXG50b3A6NDBweDtcclxufVxyXG4jc2RvY2VudGV7XHJcbmhlaWdodDozNXB4O1xyXG5ib3JkZXItcmFkaXVzOjEwcHg7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG5sZWZ0OjE3NXB4O1xyXG5cclxud2lkdGg6MjQwcHg7XHJcbn1cclxuI2xhbHVtbm97XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG5sZWZ0OjEwNXB4O1xyXG50b3A6NDBweDtcclxufVxyXG4jc2N1cnNve1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxubGVmdDozOTBweDtcclxufVxyXG4jY2FtcG9EZXNjcmlwY2lvbntcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbnJlc2l6ZTpib3RoO1xyXG5oZWlnaHQ6MTAwcHg7XHJcbndpZHRoOjEwMCU7XHJcbmJvcmRlci1jb2xvcjpibGFjaztcclxuYm9yZGVyLXdpZHRoOjNweDtcclxufVxyXG4jYnRuRW52aWFyIHtcclxudG9wOjQzMHB4O1xyXG5ib3R0b206MTBweDtcclxubGVmdDo3MDBweDtcclxufVxyXG4jYnRuVm9sdmVyIHtcclxudG9wOjE3cHg7XHJcbmxlZnQ6NjBweDtcclxufVxyXG5cclxuLm11bHRpc2VsZWN0IHtcclxuIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gdG9wOjVweDtcclxuIHdpZHRoOiAyNDBweDtcclxuIGxlZnQ6NjJweDtcclxufVxyXG5cclxuLnNlbGVjdEJveCB7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNlbGVjdEJveCBzZWxlY3Qge1xyXG53aWR0aDogMTAwJTtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5vdmVyU2VsZWN0IHtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG5sZWZ0OiAwO1xyXG5yaWdodDogMHB4O1xyXG50b3A6IDA7XHJcbmJvdHRvbTogMDtcclxufVxyXG5cclxuI3R1cm5vTWHDsWFuYSB7XHJcbmJhY2tncm91bmQ6d2hpdGU7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG5kaXNwbGF5OiBub25lO1xyXG5ib3JkZXI6IDFweCAjZGFkYWRhIHNvbGlkO1xyXG53aWR0aDoxMjBweDtcclxubGVmdDoycHg7XHJcbnBhZGRpbmctbGVmdDoxMHB4O1xyXG59XHJcblxyXG4jdHVybm9NYcOxYW5hIGxhYmVsIHtcclxuZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiN0dXJub01hw7FhbmEgbGFiZWw6aG92ZXIge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMWU5MGZmO1xyXG59XHJcblxyXG4jdHVybm9UYXJkZSB7XHJcbmJhY2tncm91bmQ6d2hpdGU7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG5kaXNwbGF5OiBub25lO1xyXG5ib3JkZXI6IDFweCAjZGFkYWRhIHNvbGlkO1xyXG53aWR0aDoxMjBweDtcclxubGVmdDoxMjBweDtcclxucGFkZGluZy1sZWZ0OjEwcHg7XHJcbn1cclxuLnNlbGVjdEJveCBzZWxlY3Qge1xyXG53aWR0aDogMTAwJTtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiN0dXJub1RhcmRlIGxhYmVsIHtcclxuZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiN0dXJub1RhcmRlIGxhYmVsOmhvdmVyIHtcclxuYmFja2dyb3VuZC1jb2xvcjogIzFlOTBmZjtcclxufVxyXG4jY29udGVuZWRvckN1cnNvc3tcclxucG9zaXRpb246Zml4ZWQ7XHJcbnotaW5kZXg6MjA7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NuevoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nuevo',
                templateUrl: './nuevo.component.html',
                styleUrls: ['./nuevo.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/vistas/Comunicado/pendiente/pendiente.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/vistas/Comunicado/pendiente/pendiente.component.ts ***!
  \********************************************************************/
/*! exports provided: PendienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendienteComponent", function() { return PendienteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PendienteComponent {
    constructor() { }
    ngOnInit() {
    }
}
PendienteComponent.ɵfac = function PendienteComponent_Factory(t) { return new (t || PendienteComponent)(); };
PendienteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PendienteComponent, selectors: [["app-pendiente"]], decls: 65, vars: 0, consts: [[1, "container"], [1, "table", "table-responsive", "table-hover", "table-striped", "table-bordered"], [1, "btn-group"], ["type", "button", "onclick", "location.href ='detalles'", 1, "btn", "btn-outline-success"], ["type", "button", "onchange", "Eliminar(this.value)", 1, "btn", "btn-outline-danger"], ["type", "button", "onclick", "", 1, "btn", "btn-outline-danger"]], template: function PendienteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "LISTA DE COMUNICADOS PENDIENTES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Emisor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Destinatario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Tipo de comunicado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Operaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "17/07/2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Finanza");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "1-B, Ma\u00F1ana");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Invitacion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Detalles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Eliminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "17/07/2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Direccion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "2-A tarde");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Circular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Detalles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Eliminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "17/07/2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Docente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "3-A tarde");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Circular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Detalles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Eliminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%]{\r\n    margin:auto;\r\n    margin-top: 6%;\r\n    min-height: calc(100vh - 180px);\r\n}\r\n.table[_ngcontent-%COMP%]{\r\n    border-style: none;\r\n   \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzdGFzL0NvbXVuaWNhZG8vcGVuZGllbnRlL3BlbmRpZW50ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGtCQUFrQjs7QUFFdEIiLCJmaWxlIjoic3JjL2FwcC92aXN0YXMvQ29tdW5pY2Fkby9wZW5kaWVudGUvcGVuZGllbnRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA2JTtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxODBweCk7XHJcbn1cclxuLnRhYmxle1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICBcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PendienteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pendiente',
                templateUrl: './pendiente.component.html',
                styleUrls: ['./pendiente.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/vistas/Padres/circular/circular.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/vistas/Padres/circular/circular.component.ts ***!
  \**************************************************************/
/*! exports provided: CircularComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircularComponent", function() { return CircularComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CircularComponent {
    constructor() { }
    ngOnInit() {
    }
}
CircularComponent.ɵfac = function CircularComponent_Factory(t) { return new (t || CircularComponent)(); };
CircularComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CircularComponent, selectors: [["app-circular"]], decls: 63, vars: 0, consts: [[1, "card", "text-capitalize", "mt-4"], [1, "card-header", "d-flex", "justify-content-center"], [1, "card-body"], [1, "list-unstyled"], [1, "media"], ["src", "https://www.cobituc.org.ar/wp-content/uploads/2015/04/circulares_icono_destaque.png", "width", "150", "height", "150", "alt", "...", 1, "mr-3"], [1, "media-body"], [1, "mt-0", "mb-1"], ["href", "#", 1, "btn", "btn-primary"], [1, "card-footer", "d-flex", "justify-content-center"], [1, "card", "text-capitalize"], ["aria-label", "Page navigation", 1, "navegacion"], [1, "pagination"], [1, "page-item"], ["href", "#", 1, "page-link"]], template: function CircularComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " NUEVO COMUNICADO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "List-based media object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Leer Mas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Hace 2 Dias ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " NUEVO COMUNICADO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "List-based media object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Leer Mas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Hace 3 Dias ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " NUEVO COMUNICADO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "List-based media object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Leer Mas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Hace 4 Dias ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "nav", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Anterior");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Siguiente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%]{\r\n    margin-top: 4%;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    width: 96%;\r\n    left: 2%;\r\n    right: 2%;\r\n    margin-top: 2%;\r\n}\r\n.card-header[_ngcontent-%COMP%], .card-footer[_ngcontent-%COMP%]{\r\n    background: rgb(76, 160, 230);\r\n}\r\n.navegacion[_ngcontent-%COMP%]{\r\n     position: relative;\r\n     margin-top: 1%;\r\n     display: flex;\r\n     flex-wrap: wrap;\r\n     justify-content: center;\r\n   \r\n    \r\n}\r\n.pagination[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n@media only screen and (max-width:700px){\r\n\r\n    body[_ngcontent-%COMP%]{\r\n        margin-top: 0;\r\n    }\r\n    .card-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzdGFzL1BhZHJlcy9jaXJjdWxhci9jaXJjdWxhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztJQUNULGNBQWM7QUFDbEI7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQztBQUNDO0tBQ0ksa0JBQWtCO0tBQ2xCLGNBQWM7S0FDZCxhQUFhO0tBQ2IsZUFBZTtLQUNmLHVCQUF1QjtHQUN6Qix3QkFBd0I7SUFDdkIsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTs7SUFFSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3Zpc3Rhcy9QYWRyZXMvY2lyY3VsYXIvY2lyY3VsYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBtYXJnaW4tdG9wOiA0JTtcclxufVxyXG4uY2FyZHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA5NiU7XHJcbiAgICBsZWZ0OiAyJTtcclxuICAgIHJpZ2h0OiAyJTtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcbi5jYXJkLWhlYWRlciwgLmNhcmQtZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDc2LCAxNjAsIDIzMCk7XHJcbn1cclxuIC5uYXZlZ2FjaW9ue1xyXG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG4gICAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7ICovXHJcbn1cclxuLnBhZ2luYXRpb257XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjcwMHB4KXtcclxuXHJcbiAgICBib2R5e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcbiAgICAuY2FyZC1ib2R5IGltZ3tcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CircularComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-circular',
                templateUrl: './circular.component.html',
                styleUrls: ['./circular.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/vistas/Padres/citacion/citacion.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/vistas/Padres/citacion/citacion.component.ts ***!
  \**************************************************************/
/*! exports provided: CitacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitacionComponent", function() { return CitacionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CitacionComponent {
    constructor() { }
    ngOnInit() {
    }
}
CitacionComponent.ɵfac = function CitacionComponent_Factory(t) { return new (t || CitacionComponent)(); };
CitacionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CitacionComponent, selectors: [["app-citacion"]], decls: 14, vars: 0, consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [1, "blockquote", "mb-0"], [1, "blockquote-footer"], ["title", "Source Title"], ["href", "#", 1, "btn", "btn-primary"]], template: function CitacionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Citacion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "blockquote", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Juzgado civil del estado de M\u00E9xico. Investigaci\u00F3n 77/895/2013 -5 Juicio testamentario 1123/2013-5 El Juez 5\u00BA de lo Civil en el estado de M\u00E9xico, solicita la presencia en las instalaciones de este juzgado del Sr. Vicente Alcocer Sallas, para que rinda testimonio en el juicio sucesorio en calidad de apoderado de las propiedades del Sr. Osvaldo contreras Vilchis. Apreciable Sr Vicente Alcocer Sallas, se le requiere para que en fecha 09 de Mayo pr\u00F3ximo se apersone en las instalaciones de este H Juzgado, con la relaci\u00F3n de las propiedades agr\u00EDcolas del finado Osvaldo Contreras Vilchis. Esto con la finalidad de tener la contabilidad de todos los bienes antes de la realizaci\u00F3n de las diligencias previas a la resoluci\u00F3n definitiva. As\u00ED lo firma y da fe el Juez. Lic. Olegario Orleans Bravo acompa\u00F1ado del secretario de cuenta Lic. Gustavo Padilla Elizalde. Juez Secretario Firma Firma ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "footer", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Arentamende la direccion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "cite", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cardenal Cushing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Descargar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%]{\r\n    margin-top: 4%;\r\n    min-height: calc(100vh - 152px);\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n    margin: 2%;\r\n}\r\n.card-header[_ngcontent-%COMP%]{\r\n    background: skyblue;\r\n}\r\n@media only screen and (max-width:700px){\r\n\r\n    body[_ngcontent-%COMP%]{\r\n        margin-top: 0;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzdGFzL1BhZHJlcy9jaXRhY2lvbi9jaXRhY2lvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTs7SUFFSTtRQUNJLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3Zpc3Rhcy9QYWRyZXMvY2l0YWNpb24vY2l0YWNpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBtYXJnaW4tdG9wOiA0JTtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTJweCk7XHJcbn1cclxuLmNhcmR7XHJcbiAgICBtYXJnaW46IDIlO1xyXG59XHJcbi5jYXJkLWhlYWRlcntcclxuICAgIGJhY2tncm91bmQ6IHNreWJsdWU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3MDBweCl7XHJcblxyXG4gICAgYm9keXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CitacionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-citacion',
                templateUrl: './citacion.component.html',
                styleUrls: ['./citacion.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/vistas/Padres/entrevista/entrevista.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/vistas/Padres/entrevista/entrevista.component.ts ***!
  \******************************************************************/
/*! exports provided: EntrevistaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntrevistaComponent", function() { return EntrevistaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class EntrevistaComponent {
    constructor() { }
    ngOnInit() {
    }
}
EntrevistaComponent.ɵfac = function EntrevistaComponent_Factory(t) { return new (t || EntrevistaComponent)(); };
EntrevistaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EntrevistaComponent, selectors: [["app-entrevista"]], decls: 118, vars: 0, consts: [[1, "container"], ["id", "titulo"], ["id", "formulario"], [1, "form-group"], ["type", "text", "id", "alumno", "placeholder", "nombre completo", 1, "form-control"], ["id", "area", "onchange", "mostrar(this.value)", 1, "form-control"], ["selected", "", 2, "display", "none"], ["value", "2"], ["value", "1"], ["id", "materia", 1, "form-group", 2, "display", "none"], ["id", "horario", "onchange", "mhorario(this.value)", 1, "form-control"], ["value", "", "selected", "", 2, "display", "none"], ["value", "3"], ["value", "4"], ["value", "5"], ["id", "horario1", 1, "form-group", 2, "display", "none"], ["id", "h1", 1, "form-control"], ["id", "horario2", 1, "form-group", 2, "display", "none"], ["id", "horario3", 1, "form-group", 2, "display", "none"], ["id", "dia", 1, "form-group", 2, "display", "none"], ["id", "horadia", 1, "form-group", 2, "display", "none"], ["rows", "3", "id", "tarea", 1, "form-control"], [1, "col-md-offset-2", "col-md-10"], ["type", "button", "id", "Reservar", 1, "btn", "btn-primary", "reservar"], [1, "text-info"]], template: function EntrevistaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "RESERVE SU ENTREVISTA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Alumno:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Seleccione con quien desea su entrevista");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Seleccione");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "DOCENTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "DIRECCION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "COBRANZA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "CONSEJEROS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Docente de la materia:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Seleccione ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Materia 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Materia 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Materia 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Materia 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Materia 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Horarios Disponibles:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Lunes 8:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Lunes 8:20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Lunes 8:40");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Lunes 9:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Lunes 9:20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Horarios Disponibles:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Martes 9:00 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Martes 9:20 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Martes 9:40 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Martes 10:00 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Martes 10:20 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Horarios Disponibles:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Miercoles 8:00 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Miercoles 8:20 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Miercoles 8:40 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Miercoles 9:00 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Miercoles 9:20 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Dias Disponibles:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Lunes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Martes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Miercoles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Jueves");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Viernes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Horarios Disponibles:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "9:00 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "9:30 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "10:00 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "10:30 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "11:00 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Motivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "textarea", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Reservar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%]{\r\n    margin-top: 4%;\r\n    min-height: calc(100vh - 152px);\r\n}\r\n.container[_ngcontent-%COMP%]{\r\n    padding: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzdGFzL1BhZHJlcy9lbnRyZXZpc3RhL2VudHJldmlzdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC92aXN0YXMvUGFkcmVzL2VudHJldmlzdGEvZW50cmV2aXN0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIG1hcmdpbi10b3A6IDQlO1xyXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDE1MnB4KTtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntrevistaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-entrevista',
                templateUrl: './entrevista.component.html',
                styleUrls: ['./entrevista.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/vistas/docente/docente.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/vistas/docente/docente.component.ts ***!
  \*****************************************************/
/*! exports provided: DocenteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocenteComponent", function() { return DocenteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DocenteComponent {
    constructor() { }
    ngOnInit() {
    }
}
DocenteComponent.ɵfac = function DocenteComponent_Factory(t) { return new (t || DocenteComponent)(); };
DocenteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DocenteComponent, selectors: [["app-docente"]], decls: 50, vars: 0, consts: [[1, "row"], [1, "col", "mb-4"], [1, "card"], ["src", "https://i0.pngocean.com/files/688/151/727/computer-icons-teacher-icon-design-education-applause.jpg", "alt", "...", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "card-text"]], template: function DocenteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Materia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Materia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Materia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Materia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Materia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Materia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".row[_ngcontent-%COMP%]{\r\n   min-height: calc(100vh - 152px);\r\n    width: 100%;\r\n    padding: 10px;\r\n    margin-top: 4%;\r\n    display: flex;\r\n    \r\n    text-align:center;\r\n    background: red;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n    background: chartreuse;\r\n    max-width: 100px;\r\n    min-width: 180px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzdGFzL2RvY2VudGUvZG9jZW50ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtHQUNHLCtCQUErQjtJQUM5QixXQUFXO0lBQ1gsYUFBYTtJQUNiLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Zpc3Rhcy9kb2NlbnRlL2RvY2VudGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ucm93e1xyXG4gICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUycHgpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyogZmxleC13cmFwOiB3cmFwOyAgKi9cclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogcmVkO1xyXG59XHJcbi5jYXJke1xyXG4gICAgYmFja2dyb3VuZDogY2hhcnRyZXVzZTtcclxuICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICBtaW4td2lkdGg6IDE4MHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocenteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-docente',
                templateUrl: './docente.component.html',
                styleUrls: ['./docente.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/vistas/historia/historia.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/vistas/historia/historia.component.ts ***!
  \*******************************************************/
/*! exports provided: HistoriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoriaComponent", function() { return HistoriaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HistoriaComponent {
    constructor() { }
    ngOnInit() {
    }
}
HistoriaComponent.ɵfac = function HistoriaComponent_Factory(t) { return new (t || HistoriaComponent)(); };
HistoriaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HistoriaComponent, selectors: [["app-historia"]], decls: 2, vars: 0, template: function HistoriaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "esto es una prueba de historia\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Zpc3Rhcy9oaXN0b3JpYS9oaXN0b3JpYS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistoriaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-historia',
                templateUrl: './historia.component.html',
                styleUrls: ['./historia.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/vistas/inicio/inicio.component.ts":
/*!***************************************************!*\
  !*** ./src/app/vistas/inicio/inicio.component.ts ***!
  \***************************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class InicioComponent {
    constructor() { }
    ngOnInit() {
    }
}
InicioComponent.ɵfac = function InicioComponent_Factory(t) { return new (t || InicioComponent)(); };
InicioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InicioComponent, selectors: [["app-inicio"]], decls: 68, vars: 0, consts: [[1, "list-group"], ["id", "ico-notificacion", "src", "https://lh3.googleusercontent.com/ttddO56u2ISI0hdeC-jWi-y3VNTeytT9eDSZq_JB7W51ZtOzkImywh1vhzZP0Loftw=s180-rw"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center"], ["href", "citaciones"], [1, "badge", "badge-primary", "badge-pill"], ["href", "entrevista"], [1, "container"], ["id", "cont-imagen"], ["src", "https://userscontent2.emaze.com/images/cf4f8e9f-39f2-4d7f-a271-27c6c28b5044/1cb5632e93fb95395c7ddd89233e9860.png"], [1, "container2"], ["id", "logo"], ["src", "https://www.tulistaencasa.com/uploads/logo-cardenalcushing-100x100.jpg"], [1, "texto"], [1, "contenedor-carrusel"], [1, "navbar2"], ["src", "https://www.tulistaencasa.com/uploads/logo-cardenalcushing-100x100.jpg", "width", "30", "height", "30"], ["id", "carrusel", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carrusel", "data-slide-to", "0", 1, "active"], ["data-target", "#carrusel", "data-slide-to", "1"], ["data-target", "#carrusel", "data-slide-to", "2"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "https://4.bp.blogspot.com/-YCJiBgJebsA/WdVFUVI13EI/AAAAAAAAAdU/ecsOsC0jKzAGPdU0OoreHX612Zp-dUlZQCLcBGAs/s1600/KIK_8683.JPG", 1, "d-block", "w-100"], [1, "carousel-caption", "d-none", "d-md-block"], [1, "carousel-item"], ["src", "https://campanas.iglesiasantacruz.org/wp-content/uploads/2019/07/88.jpg", 1, "d-block", "w-100"], ["data-interval", "3000", 1, "carousel-item"], ["src", "https://campanas.iglesiasantacruz.org/wp-content/uploads/2019/07/%C3%ADndice-3.jpg", 1, "d-block", "w-100"], ["href", "#carrusel", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carrusel", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"]], template: function InicioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Comunicados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "14");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Citaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Entrevistas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "COLEGIO CARDENAL CUSHING");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nav", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " NOSOTROS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ol", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "CREATIVIDAD DE NUESTROS ALUMNOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "nuestros alumnos son los mejores, para que lo sepa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "NUESTROS DOCENTES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Nuestros docentes son los mejores aunque usted no lo crea");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "ORIENTADORAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "nuestras orientadoras son las mejores y no me contradiga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Anterior");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Siguiente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%]{\r\n    margin-top: 60px;\r\n    min-height: calc(100vh -56px -95px);\r\n}\r\n.list-group[_ngcontent-%COMP%]{\r\n    flex-direction: row;\r\n    position: relative;\r\n    transform:translate(-50%);\r\n    left:89%;\r\n    width:180px;\r\n}\r\n#ico-notificacion[_ngcontent-%COMP%]{\r\n    display: none;\r\n    position: absolute;\r\n    right: 98%;\r\n    top: 38%;\r\n    width: 35px;\r\n    height: 35px;\r\n    }\r\n#btn-ntf[_ngcontent-%COMP%]{\r\n    display: none;\r\n}\r\n.ico-notificacion[_ngcontent-%COMP%]{\r\n    display: none;\r\n    position: relative;\r\n    width: 40px;\r\n    height: 40px;\r\n    top: -10px;\r\n    left: 92%;\r\n}\r\n.ico-notificacion[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 40px;\r\n    height: 40px;\r\n}\r\n.ico-notificacion[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n}\r\n.container[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    left: -8%;\r\n    top: -110px;\r\n    width: 83%;\r\n    height: 33%;\r\n    display: flex;\r\n}\r\n#cont-imagen[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    width:30%;\r\n    height:100%;\r\n    left: 2%;\r\n}\r\n#cont-imagen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\nwidth: 100%;\r\nheight: 100%;\r\nobject-fit: scale-down;\r\n}\r\n.container2[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    width: 68%;\r\n    height: 100%;\r\n    left: 2%;\r\n    display: block;\r\n    margin: auto;\r\n}\r\n#logo[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    margin: auto;\r\n    width:25%;\r\n    height:25%;\r\n}\r\n#logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n}\r\n.texto[_ngcontent-%COMP%]{\r\n    padding-top: 15px;\r\n    font-style:oblique;\r\n    text-align: center;\r\n}\r\np[_ngcontent-%COMP%]{\r\n    font-size: 26px; \r\n}\r\n.navbar2[_ngcontent-%COMP%]{\r\n  background:rgb(15, 85, 214);  \r\n}\r\n.navbar2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    -webkit-text-decoration-style: none;\r\n            text-decoration-style: none;\r\n}\r\n.contenedor-carrusel[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    width: 90%;\r\n    height: 600px;\r\n    top: -107px;\r\n    left: 0;\r\n    margin: auto;\r\n}\r\n.carousel[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    width: 100%;\r\n    height: 95%;\r\n}\r\n.carousel-inner[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.carousel-item[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover; \r\n}\r\n@media only screen and (max-width:700px){\r\n    body[_ngcontent-%COMP%]{\r\n        margin-top: 0;\r\n    }\r\n    p[_ngcontent-%COMP%]{\r\n        font-size: 12px;\r\n    }\r\n    #ico-notificacion[_ngcontent-%COMP%]{\r\n        display: block;\r\n    }\r\n    .list-group[_ngcontent-%COMP%]:hover{\r\n        margin-left: -5%;\r\n    }\r\n      .list-group[_ngcontent-%COMP%]{      \r\n        position: relative;;\r\n        width: 33%;\r\n        margin-left: 27%;\r\n        transition: all 0.5s;\r\n        z-index: 48;\r\n       }\r\n      .ico-notificacion[_ngcontent-%COMP%]{\r\n          display: block;\r\n      }\r\n      .container[_ngcontent-%COMP%]{\r\n        left: -8%;\r\n        top: -130px;\r\n        margin: auto;\r\n    }\r\n      .contenedor-carrusel[_ngcontent-%COMP%]{\r\n          top: -140px;\r\n          width: 90%;\r\n          height: 300px;\r\n    }\r\n    .carousel[_ngcontent-%COMP%]{\r\n        height: 90%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzdGFzL2luaWNpby9pbmljaW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFFBQVE7SUFDUixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7SUFDUixXQUFXO0lBQ1gsWUFBWTtJQUNaO0FBQ0o7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLFNBQVM7QUFDYjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsUUFBUTtBQUNaO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsWUFBWTtBQUNaLHNCQUFzQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osUUFBUTtJQUNSLGNBQWM7SUFDZCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsbUNBQTJCO1lBQTNCLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0lBQ2IsV0FBVztJQUNYLE9BQU87SUFDUCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7TUFDRTtRQUNFLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQixXQUFXO09BQ1o7TUFDRDtVQUNJLGNBQWM7TUFDbEI7TUFDQTtRQUNFLFNBQVM7UUFDVCxXQUFXO1FBQ1gsWUFBWTtJQUNoQjtNQUNFO1VBQ0ksV0FBVztVQUNYLFVBQVU7VUFDVixhQUFhO0lBQ25CO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3Zpc3Rhcy9pbmljaW8vaW5pY2lvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLTU2cHggLTk1cHgpO1xyXG59XHJcbi5saXN0LWdyb3Vwe1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSk7XHJcbiAgICBsZWZ0Ojg5JTtcclxuICAgIHdpZHRoOjE4MHB4O1xyXG59XHJcbiNpY28tbm90aWZpY2FjaW9ue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA5OCU7XHJcbiAgICB0b3A6IDM4JTtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgfVxyXG4jYnRuLW50ZntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmljby1ub3RpZmljYWNpb257XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB0b3A6IC0xMHB4O1xyXG4gICAgbGVmdDogOTIlO1xyXG59XHJcbi5pY28tbm90aWZpY2FjaW9uIGltZ3tcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbi5pY28tbm90aWZpY2FjaW9uIGxhYmVsOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAtOCU7XHJcbiAgICB0b3A6IC0xMTBweDtcclxuICAgIHdpZHRoOiA4MyU7XHJcbiAgICBoZWlnaHQ6IDMzJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuI2NvbnQtaW1hZ2Vue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6MzAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBsZWZ0OiAyJTtcclxufVxyXG4jY29udC1pbWFnZW4gaW1ne1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiAxMDAlO1xyXG5vYmplY3QtZml0OiBzY2FsZS1kb3duO1xyXG59XHJcbi5jb250YWluZXIye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDY4JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDIlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuI2xvZ297XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDoyNSU7XHJcbiAgICBoZWlnaHQ6MjUlO1xyXG59XHJcbiNsb2dvIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuLnRleHRve1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBmb250LXN0eWxlOm9ibGlxdWU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxucHtcclxuICAgIGZvbnQtc2l6ZTogMjZweDsgXHJcbn1cclxuLm5hdmJhcjJ7XHJcbiAgYmFja2dyb3VuZDpyZ2IoMTUsIDg1LCAyMTQpOyAgXHJcbn1cclxuLm5hdmJhcjIgYXtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiBub25lO1xyXG59XHJcbi5jb250ZW5lZG9yLWNhcnJ1c2Vse1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICB0b3A6IC0xMDdweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmNhcm91c2Vse1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxufVxyXG4uY2Fyb3VzZWwtaW5uZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4uY2Fyb3VzZWwtaXRlbXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5jYXJvdXNlbC1pdGVtIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7IFxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzAwcHgpe1xyXG4gICAgYm9keXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICAjaWNvLW5vdGlmaWNhY2lvbntcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5saXN0LWdyb3VwOmhvdmVye1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNSU7XHJcbiAgICB9XHJcbiAgICAgIC5saXN0LWdyb3VweyAgICAgIFxyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTs7XHJcbiAgICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjclO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAgIHotaW5kZXg6IDQ4O1xyXG4gICAgICAgfVxyXG4gICAgICAuaWNvLW5vdGlmaWNhY2lvbntcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgbGVmdDogLTglO1xyXG4gICAgICAgIHRvcDogLTEzMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICAgICAgLmNvbnRlbmVkb3ItY2FycnVzZWx7XHJcbiAgICAgICAgICB0b3A6IC0xNDBweDtcclxuICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgfVxyXG4gICAgLmNhcm91c2Vse1xyXG4gICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InicioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-inicio',
                templateUrl: './inicio.component.html',
                styleUrls: ['./inicio.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/vistas/mision-vision/mision-vision.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/vistas/mision-vision/mision-vision.component.ts ***!
  \*****************************************************************/
/*! exports provided: MisionVisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisionVisionComponent", function() { return MisionVisionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MisionVisionComponent {
    constructor() { }
    ngOnInit() {
    }
}
MisionVisionComponent.ɵfac = function MisionVisionComponent_Factory(t) { return new (t || MisionVisionComponent)(); };
MisionVisionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MisionVisionComponent, selectors: [["app-mision-vision"]], decls: 38, vars: 0, consts: [[1, "container"], [1, "item"], ["id", "list-tab", "role", "tablist", 1, "list-group"], ["id", "list-mision-list", "data-toggle", "list", "href", "#list-mision", "role", "tab", "aria-controls", "mision", 1, "list-group-item", "list-group-item-action", "active"], ["id", "list-vision-list", "data-toggle", "list", "href", "#list-vision", "role", "tab", "aria-controls", "vision", 1, "list-group-item", "list-group-item-action"], ["id", "list-objetivos-list", "data-toggle", "list", "href", "#list-objetivos", "role", "tab", "aria-controls", "objetivos", 1, "list-group-item", "list-group-item-action"], [1, "logo"], ["src", "https://static.wixstatic.com/media/9c808c_1a66967b033147dfb0f29b4c48b0c980~mv2.png/v1/fill/w_440,h_280,al_c,q_85,usm_0.66_1.00_0.01/mision-vision.webp"], [1, "descripcion"], [1, "tab-content"], ["id", "list-mision", "role", "tabpanel", "aria-labelledby", "list-mision-list", 1, "tab-pane", "fade", "show", "active"], ["id", "list-vision", "role", "tabpanel", "aria-labelledby", "list-vision-list", 1, "tab-pane", "fade"], ["id", "list-objetivos", "role", "tabpanel", "aria-labelledby", "list-objetivos-list", 1, "tab-pane", "fade"]], template: function MisionVisionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "MISION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "VISION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "OBJETIVOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u201CEl CBDS Instituci\u00F3n Educativa confiable, con un sistema de doble escolaridad bajo est\u00E1ndares de calidad internacional, formando integralmente a los estudiantes con una base s\u00F3lida para la educaci\u00F3n superior, llevado a cabo por talento humano comprometido con nuestro modelo educativo\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u201CSer reconocidos a nivel nacional como una instituci\u00F3n educativa biling\u00FCe, con est\u00E1ndares internacionales de calidad en la formaci\u00F3n integral de estudiantes para una educaci\u00F3n superior\u201D.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " * Formar la personalidad y la capacidad de asumir con responsabilidad y autonom\u00EDa sus derechos y deberes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " * Proporcionar una s\u00F3lida formaci\u00F3n \u00E9tica, moral, y fomentar la pr\u00E1ctica del respeto a los derechos humanos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " * Fomentar en la instituci\u00F3n educativa, pr\u00E1cticas democr\u00E1ticas para el aprendizaje de los principios, valores de la participaci\u00F3n y organizaci\u00F3n ciudadana, estimular la autonom\u00EDa y la responsabilidad social. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " * Desarrollar una sana sexualidad que promueva el conocimiento de s\u00ED mismo y la autoestima, la construcci\u00F3n de la identidad sexual dentro del respeto por la equidad de los sexos, la afectividad, el respeto mutuo y prepararse para una vida familiar arm\u00F3nica y responsable. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " * Crear y fomentar una conciencia de solidaridad internacional ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " * Fundamentar cimientos en los futuros universitarios y/o profesionales, capaces de ejercer a cabalidad dentro y fuera del pa\u00EDs. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " * Desarrollar acciones de orientaci\u00F3n escolar, profesional y ocupacional. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " * Formar una conciencia educativa para el esfuerzo y el trabajo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " * Fomentar el inter\u00E9s y el respeto por la identidad cultural de los grupos \u00E9tnicos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " * Incrementar las nuevas tecnolog\u00EDas como recursos de apoyo para el aprendizaje de nuestros estudiantes desde nivel inicial hasta finalizaci\u00F3n del bachillerato. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%]{\r\n    min-height: calc(100vh - 152px);\r\n    min-width: 100%;\r\n    margin-top: 4%;\r\n    padding : 40px;\r\n    display:flex;\r\n}\r\n.item[_ngcontent-%COMP%]{\r\n    min-width: 30%;\r\n    padding-right: 40px;\r\n}\r\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width:100%;\r\n}\r\n@media only screen and (max-width:700px){\r\n\r\n    .container[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n        margin-top: 0;\r\n        padding : 10px;\r\n    }\r\n    .item[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        display:flex;\r\n      justify-content: center;\r\n    }\r\n    .list-group[_ngcontent-%COMP%]{\r\n        width: 49%;\r\n    }\r\n    .logo[_ngcontent-%COMP%]{\r\n        width: 50%;\r\n        left: 50%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzdGFzL21pc2lvbi12aXNpb24vbWlzaW9uLXZpc2lvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7SUFDZCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFFQTs7SUFFSTtRQUNJLHNCQUFzQjtRQUN0QixhQUFhO1FBQ2IsY0FBYztJQUNsQjtJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7TUFDZCx1QkFBdUI7SUFDekI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtRQUNWLFNBQVM7SUFDYjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdmlzdGFzL21pc2lvbi12aXNpb24vbWlzaW9uLXZpc2lvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jb250YWluZXJ7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUycHgpO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogNCU7XHJcbiAgICBwYWRkaW5nIDogNDBweDtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxufVxyXG4uaXRlbXtcclxuICAgIG1pbi13aWR0aDogMzAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcclxufVxyXG4ubG9nbyBpbWd7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzAwcHgpe1xyXG5cclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIHBhZGRpbmcgOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLml0ZW17XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5saXN0LWdyb3Vwe1xyXG4gICAgICAgIHdpZHRoOiA0OSU7XHJcbiAgICB9XHJcbiAgICAubG9nb3tcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MisionVisionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mision-vision',
                templateUrl: './mision-vision.component.html',
                styleUrls: ['./mision-vision.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/vistas/novedades/novedades.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/vistas/novedades/novedades.component.ts ***!
  \*********************************************************/
/*! exports provided: NovedadesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovedadesComponent", function() { return NovedadesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NovedadesComponent {
    constructor() { }
    ngOnInit() {
    }
}
NovedadesComponent.ɵfac = function NovedadesComponent_Factory(t) { return new (t || NovedadesComponent)(); };
NovedadesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NovedadesComponent, selectors: [["app-novedades"]], decls: 31, vars: 0, consts: [[1, "card", "mb-3"], ["src", "https://1.bp.blogspot.com/-VGah7InqCLU/VlcRT4uGvtI/AAAAAAAAAY4/4HwWmnpIivk/s1600/IMG-20151125-WA0030.jpg", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "text-muted"], ["src", "https://c1.staticflickr.com/8/7608/16387484843_cddbc2048a_c.jpg", 1, "card-img-top"], ["src", "https://4.bp.blogspot.com/-HL4yksjn78E/U3pxJJNMjVI/AAAAAAAAAPY/fCX7qqrf9Ks/s1600/140514+ced+SC.jpg", 1, "card-img-top"]], template: function NovedadesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "PROMO 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Last updated 3 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "NUESTAS ACTIVIDADES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Last updated 3 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Last updated 3 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%]{\r\n    margin-top: 60px;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n    background:skyblue;\r\n    width: 60%;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    position: relative;\r\n    transform:translate(-50%);\r\n    left: 50%;\r\n    margin-top: 1%;\r\n}\r\n.card-img-top[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    max-height: 480px;\r\n\r\n}\r\n@media only screen and (max-width:700px){\r\n\r\n    body[_ngcontent-%COMP%]{\r\n        margin-top: 0;\r\n    }\r\n    .card-img-top[_ngcontent-%COMP%]{\r\n        max-height: 200px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzdGFzL25vdmVkYWRlcy9ub3ZlZGFkZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDViwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCOztBQUVyQjtBQUNBOztJQUVJO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC92aXN0YXMvbm92ZWRhZGVzL25vdmVkYWRlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbn1cclxuLmNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kOnNreWJsdWU7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSk7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxufVxyXG4uY2FyZC1pbWctdG9we1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA0ODBweDtcclxuXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjcwMHB4KXtcclxuXHJcbiAgICBib2R5e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcbiAgICAuY2FyZC1pbWctdG9we1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NovedadesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-novedades',
                templateUrl: './novedades.component.html',
                styleUrls: ['./novedades.component.css']
            }]
    }], function () { return []; }, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
    // firebaseConfig: {
    //   apiKey: "AIzaSyAQoN-DsMCIRDIz-dwm1UcEZ_3kdIaGBsU",
    //   authDomain: "cardenal-cushing.firebaseapp.com",
    //   projectId: "cardenal-cushing",
    //   storageBucket: "cardenal-cushing.appspot.com",
    //   messagingSenderId: "96674615258",
    //   appId: "1:96674615258:web:2d5b239761e93c56bcbae3"
    // }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! B:\UNIBETH\taller de grado\tesis\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map