(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/auth-callback/auth-callback.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/auth-callback/auth-callback.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"spinner\">\r\n  Loading...\r\n</span>\r\n<h3>\r\n  Loading Moneteer\r\n</h3>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/error-modal/error.modal.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/error-modal/error.modal.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<clr-modal [(clrModalOpen)]=\"modalService.open\" [clrModalClosable]=\"true\">\r\n    <div class=\"modal-title\">\r\n        <h3>{{modalService.title}}</h3>\r\n        <h4>Something went wrong</h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <p>{{modalService.message}}</p>\r\n    </div>\r\n</clr-modal>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/currency-edit-component/currency.edit.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/currency-edit-component/currency.edit.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input #inputBox class=\"input is-small\" autocomplete=\"off\" type=\"text\" (focus)=\"$event.target.select()\" [ngModel]=\"inputValue\" (ngModelChange)=\"onChange($event)\" [ngModelOptions]=\"{updateOn: 'blur'}\" name=\"currencyEdit\">"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/loading-component/loading.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/loading-component/loading.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\r\n<div [hidden]=\"!isLoading\" class=\"overlay\">\r\n    <span>Loading...</span>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/nav/nav.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/nav/nav.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n    <div class=\"logo\">\r\n        <clr-icon shape=\"dollar-bill\" size=\"36\" class=\"is-inverse\"></clr-icon>\r\n    </div>\r\n    <h1 class=\"flex: 1 1 auto;\">Moneteer</h1>\r\n    <clr-dropdown [clrCloseMenuOnItemClick]=\"false\">\r\n        <button type=\"button\" clrDropdownTrigger>\r\n            <clr-icon class=\"is-inverse\" size=\"24\" shape=\"cog\"></clr-icon>\r\n            <clr-icon class=\"is-inverse\" shape=\"caret down\"></clr-icon>\r\n        </button>\r\n        \r\n        <clr-dropdown-menu clrPosition=\"bottom-left\" *clrIfOpen>\r\n            \r\n        </clr-dropdown-menu>\r\n    </clr-dropdown>\r\n</div>\r\n\r\n<ng-content></ng-content>\r\n\r\n<div style=\"flex: 1 0 auto;\"></div>\r\n\r\n<clr-dropdown [hidden]=\"!user\">\r\n    <button type=\"button\" id=\"profile-dropdown-toggle\" clrDropdownTrigger>\r\n        <clr-icon shape=\"user\"></clr-icon>\r\n        {{user?.profile.email}}        \r\n    </button>\r\n    <clr-dropdown-menu clrPosition=\"top-left\" *clrIfOpen>\r\n        <button (click)=\"switchBudget()\" type=\"button\" clrDropdownItem>Switch Budget</button>\r\n        <div class=\"dropdown-divider\"></div>\r\n        <button type=\"button\" clrDropdownItem (click)=\"logOut()\">Log Out</button>\r\n    </clr-dropdown-menu>\r\n</clr-dropdown>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/type-ahead-component/type.ahead.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/type-ahead-component/type.ahead.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input [attr.disabled]=\"disabled ? '' : null\" style=\"width: 100%;\" #searchInput class=\"input is-small\" (focus)=\"onSearchInputFocus($event)\" (blur)=\"onSearchInputBlur($event)\" type=\"text\"\r\n       [(ngModel)]=\"searchFilter\" name=\"search-input\" (ngModelChange)=\"searchFilterTerm$.next(searchFilter)\">\r\n\r\n<div class=\"moneteer-dropdown\" #dropDownContent>\r\n    <div *ngIf=\"!groupByProperty\">\r\n        <div class=\"item\" *ngFor=\"let item of filteredValues | async\" (mousedown)=\"itemClicked(item)\">{{item[displayProperty]}}</div>\r\n    </div>\r\n    \r\n    <div *ngIf=\"groupByProperty\">\r\n        <div *ngFor=\"let item of filteredValues | async | groupBy: groupByProperty | pairs\">\r\n            <div class=\"subheader\">{{item[0]}}</div>\r\n            <div class=\"item subitem\" (mousedown)=\"itemClicked(childItem)\" *ngFor=\"let childItem of item[1]\">{{childItem[displayProperty]}}</div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./../accounts/accounts.module": [
		"./src/app/accounts/accounts.module.ts",
		"default~accounts-accounts-module~envelopes-envelopes-module",
		"common",
		"accounts-accounts-module"
	],
	"./../budget/budget.module": [
		"./src/app/budget/budget.module.ts",
		"common",
		"budget-budget-module"
	],
	"./../envelopes/envelopes.module": [
		"./src/app/envelopes/envelopes.module.ts",
		"default~accounts-accounts-module~envelopes-envelopes-module",
		"envelopes-envelopes-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _core_components_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/components/app.component */ "./src/app/core/components/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_6__["reducers"], { metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_6__["metaReducers"] }),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument({
                    name: "Moneteer",
                    logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production
                }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([])
            ],
            providers: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], useValue: "en-GB" }
            ],
            bootstrap: [
                _core_components_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/actions/accounts.actions.ts":
/*!**************************************************!*\
  !*** ./src/app/core/actions/accounts.actions.ts ***!
  \**************************************************/
/*! exports provided: AccountsActionTypes, LoadAccountsAction, LoadAccountsSuccessAction, LoadAccountsFailureAction, ShowCreateAccountAction, HideCreateAccountAction, CreateAccountAction, CreateAccountSuccessAction, CreateAccountFailureAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsActionTypes", function() { return AccountsActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadAccountsAction", function() { return LoadAccountsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadAccountsSuccessAction", function() { return LoadAccountsSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadAccountsFailureAction", function() { return LoadAccountsFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowCreateAccountAction", function() { return ShowCreateAccountAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HideCreateAccountAction", function() { return HideCreateAccountAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountAction", function() { return CreateAccountAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountSuccessAction", function() { return CreateAccountSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountFailureAction", function() { return CreateAccountFailureAction; });
var AccountsActionTypes;
(function (AccountsActionTypes) {
    AccountsActionTypes["Load"] = "[Accounts] Load";
    AccountsActionTypes["LoadSuccess"] = "[Accounts] Load Success";
    AccountsActionTypes["LoadFailure"] = "[Accounts] Load Failure";
    AccountsActionTypes["ShowCreate"] = "[Accounts] Show Create";
    AccountsActionTypes["HideCreate"] = "[Accounts] Hide Create";
    AccountsActionTypes["Create"] = "[Accounts] Create";
    AccountsActionTypes["CreateSuccess"] = "[Accounts] Create Success";
    AccountsActionTypes["CreateFailure"] = "[Accounts] Create Failure";
})(AccountsActionTypes || (AccountsActionTypes = {}));
var LoadAccountsAction = /** @class */ (function () {
    function LoadAccountsAction(payload) {
        this.payload = payload;
        this.type = AccountsActionTypes.Load;
    }
    return LoadAccountsAction;
}());

var LoadAccountsSuccessAction = /** @class */ (function () {
    function LoadAccountsSuccessAction(payload) {
        this.payload = payload;
        this.type = AccountsActionTypes.LoadSuccess;
    }
    return LoadAccountsSuccessAction;
}());

var LoadAccountsFailureAction = /** @class */ (function () {
    function LoadAccountsFailureAction(payload) {
        this.payload = payload;
        this.type = AccountsActionTypes.LoadFailure;
    }
    return LoadAccountsFailureAction;
}());

var ShowCreateAccountAction = /** @class */ (function () {
    function ShowCreateAccountAction() {
        this.type = AccountsActionTypes.ShowCreate;
    }
    return ShowCreateAccountAction;
}());

var HideCreateAccountAction = /** @class */ (function () {
    function HideCreateAccountAction() {
        this.type = AccountsActionTypes.HideCreate;
    }
    return HideCreateAccountAction;
}());

var CreateAccountAction = /** @class */ (function () {
    function CreateAccountAction(payload) {
        this.payload = payload;
        this.type = AccountsActionTypes.Create;
    }
    return CreateAccountAction;
}());

var CreateAccountSuccessAction = /** @class */ (function () {
    function CreateAccountSuccessAction(payload) {
        this.payload = payload;
        this.type = AccountsActionTypes.CreateSuccess;
    }
    return CreateAccountSuccessAction;
}());

var CreateAccountFailureAction = /** @class */ (function () {
    function CreateAccountFailureAction(payload) {
        this.payload = payload;
        this.type = AccountsActionTypes.CreateFailure;
    }
    return CreateAccountFailureAction;
}());



/***/ }),

/***/ "./src/app/core/actions/budget.actions.ts":
/*!************************************************!*\
  !*** ./src/app/core/actions/budget.actions.ts ***!
  \************************************************/
/*! exports provided: BudgetActionTypes, LoadBudgetsAction, LoadBudgetsSuccessAction, LoadBudgetsFailureAction, ShowDeleteBudgetAction, HideDeleteBudgetAction, DeleteBudgetAction, DeleteBudgetSuccessAction, DeleteBudgetFailureAction, ShowCreateBudgetAction, HideCreateBudgetAction, CreateBudgetAction, CreateBudgetSuccessAction, CreateBudgetFailureAction, LoadBudgetAction, LoadBudgetSuccessAction, LoadBudgetFailureAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetActionTypes", function() { return BudgetActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadBudgetsAction", function() { return LoadBudgetsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadBudgetsSuccessAction", function() { return LoadBudgetsSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadBudgetsFailureAction", function() { return LoadBudgetsFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowDeleteBudgetAction", function() { return ShowDeleteBudgetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HideDeleteBudgetAction", function() { return HideDeleteBudgetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteBudgetAction", function() { return DeleteBudgetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteBudgetSuccessAction", function() { return DeleteBudgetSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteBudgetFailureAction", function() { return DeleteBudgetFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowCreateBudgetAction", function() { return ShowCreateBudgetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HideCreateBudgetAction", function() { return HideCreateBudgetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBudgetAction", function() { return CreateBudgetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBudgetSuccessAction", function() { return CreateBudgetSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBudgetFailureAction", function() { return CreateBudgetFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadBudgetAction", function() { return LoadBudgetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadBudgetSuccessAction", function() { return LoadBudgetSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadBudgetFailureAction", function() { return LoadBudgetFailureAction; });
var BudgetActionTypes;
(function (BudgetActionTypes) {
    BudgetActionTypes["Load"] = "[Budgets] Load";
    BudgetActionTypes["LoadSuccess"] = "[Budgets] Load Success";
    BudgetActionTypes["LoadFailure"] = "[Budgets] Load Failure";
    BudgetActionTypes["ShowDelete"] = "[Budgets] Show Delete";
    BudgetActionTypes["HideDelete"] = "[Budgets] Hide Delete";
    BudgetActionTypes["Delete"] = "[Budgets] Delete";
    BudgetActionTypes["DeleteSuccess"] = "[Budgets] Delete Success";
    BudgetActionTypes["DeleteFailure"] = "[Budgets] Delete Failure";
    BudgetActionTypes["ShowCreate"] = "[Budgets] Show Create";
    BudgetActionTypes["HideCreate"] = "[Budgets] Hide Create";
    BudgetActionTypes["Create"] = "[Budgets] Create";
    BudgetActionTypes["CreateSuccess"] = "[Budgets] Create Success";
    BudgetActionTypes["CreateFailure"] = "[Budgets] Create Failure";
    BudgetActionTypes["LoadBudget"] = "[Budget] Load";
    BudgetActionTypes["LoadBudgetSuccess"] = "[Budget] Load Success";
    BudgetActionTypes["LoadBudgetFailure"] = "[Budget] Load Failure";
})(BudgetActionTypes || (BudgetActionTypes = {}));
var LoadBudgetsAction = /** @class */ (function () {
    function LoadBudgetsAction() {
        this.type = BudgetActionTypes.Load;
    }
    return LoadBudgetsAction;
}());

var LoadBudgetsSuccessAction = /** @class */ (function () {
    function LoadBudgetsSuccessAction(payload) {
        this.payload = payload;
        this.type = BudgetActionTypes.LoadSuccess;
    }
    return LoadBudgetsSuccessAction;
}());

var LoadBudgetsFailureAction = /** @class */ (function () {
    function LoadBudgetsFailureAction(payload) {
        this.payload = payload;
        this.type = BudgetActionTypes.LoadFailure;
    }
    return LoadBudgetsFailureAction;
}());

var ShowDeleteBudgetAction = /** @class */ (function () {
    function ShowDeleteBudgetAction(payload) {
        this.payload = payload;
        this.type = BudgetActionTypes.ShowDelete;
    }
    return ShowDeleteBudgetAction;
}());

var HideDeleteBudgetAction = /** @class */ (function () {
    function HideDeleteBudgetAction() {
        this.type = BudgetActionTypes.HideDelete;
    }
    return HideDeleteBudgetAction;
}());

var DeleteBudgetAction = /** @class */ (function () {
    function DeleteBudgetAction(payload) {
        this.payload = payload;
        this.type = BudgetActionTypes.Delete;
    }
    return DeleteBudgetAction;
}());

var DeleteBudgetSuccessAction = /** @class */ (function () {
    function DeleteBudgetSuccessAction(payload) {
        this.payload = payload;
        this.type = BudgetActionTypes.DeleteSuccess;
    }
    return DeleteBudgetSuccessAction;
}());

var DeleteBudgetFailureAction = /** @class */ (function () {
    function DeleteBudgetFailureAction(payload) {
        this.payload = payload;
        this.type = BudgetActionTypes.DeleteFailure;
    }
    return DeleteBudgetFailureAction;
}());

var ShowCreateBudgetAction = /** @class */ (function () {
    function ShowCreateBudgetAction() {
        this.type = BudgetActionTypes.ShowCreate;
    }
    return ShowCreateBudgetAction;
}());

var HideCreateBudgetAction = /** @class */ (function () {
    function HideCreateBudgetAction() {
        this.type = BudgetActionTypes.HideCreate;
    }
    return HideCreateBudgetAction;
}());

var CreateBudgetAction = /** @class */ (function () {
    function CreateBudgetAction(payload) {
        this.payload = payload;
        this.type = BudgetActionTypes.Create;
    }
    return CreateBudgetAction;
}());

var CreateBudgetSuccessAction = /** @class */ (function () {
    function CreateBudgetSuccessAction(payload) {
        this.payload = payload;
        this.type = BudgetActionTypes.CreateSuccess;
    }
    return CreateBudgetSuccessAction;
}());

var CreateBudgetFailureAction = /** @class */ (function () {
    function CreateBudgetFailureAction(payload) {
        this.payload = payload;
        this.type = BudgetActionTypes.CreateFailure;
    }
    return CreateBudgetFailureAction;
}());

var LoadBudgetAction = /** @class */ (function () {
    function LoadBudgetAction(payload) {
        this.payload = payload;
        this.type = BudgetActionTypes.LoadBudget;
    }
    return LoadBudgetAction;
}());

var LoadBudgetSuccessAction = /** @class */ (function () {
    function LoadBudgetSuccessAction(payload) {
        this.payload = payload;
        this.type = BudgetActionTypes.LoadBudgetSuccess;
    }
    return LoadBudgetSuccessAction;
}());

var LoadBudgetFailureAction = /** @class */ (function () {
    function LoadBudgetFailureAction(payload) {
        this.payload = payload;
        this.type = BudgetActionTypes.LoadBudgetFailure;
    }
    return LoadBudgetFailureAction;
}());



/***/ }),

/***/ "./src/app/core/actions/envelopes.actions.ts":
/*!***************************************************!*\
  !*** ./src/app/core/actions/envelopes.actions.ts ***!
  \***************************************************/
/*! exports provided: EnvelopesActionTypes, LoadEnvelopesAction, LoadEnvelopesSuccessAction, LoadEnvelopesFailureAction, CreateEnvelopeCategoryAction, CreateEnvelopeCategorySuccessAction, CreateEnvelopeCategoryFailureAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvelopesActionTypes", function() { return EnvelopesActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadEnvelopesAction", function() { return LoadEnvelopesAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadEnvelopesSuccessAction", function() { return LoadEnvelopesSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadEnvelopesFailureAction", function() { return LoadEnvelopesFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEnvelopeCategoryAction", function() { return CreateEnvelopeCategoryAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEnvelopeCategorySuccessAction", function() { return CreateEnvelopeCategorySuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEnvelopeCategoryFailureAction", function() { return CreateEnvelopeCategoryFailureAction; });
var EnvelopesActionTypes;
(function (EnvelopesActionTypes) {
    EnvelopesActionTypes["Load"] = "[Envelopes] Load";
    EnvelopesActionTypes["LoadSuccess"] = "[Envelopes] Load Success";
    EnvelopesActionTypes["LoadFailure"] = "[Envelopes] Load Failure";
    EnvelopesActionTypes["CreateEnvelopeCategory"] = "[Envelopes] Create Envelope Category";
    EnvelopesActionTypes["CreateEnvelopeCategorySuccess"] = "[Envelopes] Create Envelope Category Success";
    EnvelopesActionTypes["CreateEnvelopeCategoryFailure"] = "[Envelopes] Create Envelope Category Failure";
})(EnvelopesActionTypes || (EnvelopesActionTypes = {}));
var LoadEnvelopesAction = /** @class */ (function () {
    function LoadEnvelopesAction(payload) {
        this.payload = payload;
        this.type = EnvelopesActionTypes.Load;
    }
    return LoadEnvelopesAction;
}());

var LoadEnvelopesSuccessAction = /** @class */ (function () {
    function LoadEnvelopesSuccessAction(payload) {
        this.payload = payload;
        this.type = EnvelopesActionTypes.LoadSuccess;
    }
    return LoadEnvelopesSuccessAction;
}());

var LoadEnvelopesFailureAction = /** @class */ (function () {
    function LoadEnvelopesFailureAction(payload) {
        this.payload = payload;
        this.type = EnvelopesActionTypes.LoadFailure;
    }
    return LoadEnvelopesFailureAction;
}());

var CreateEnvelopeCategoryAction = /** @class */ (function () {
    function CreateEnvelopeCategoryAction(payload) {
        this.payload = payload;
        this.type = EnvelopesActionTypes.CreateEnvelopeCategory;
    }
    return CreateEnvelopeCategoryAction;
}());

var CreateEnvelopeCategorySuccessAction = /** @class */ (function () {
    function CreateEnvelopeCategorySuccessAction(payload) {
        this.payload = payload;
        this.type = EnvelopesActionTypes.CreateEnvelopeCategorySuccess;
    }
    return CreateEnvelopeCategorySuccessAction;
}());

var CreateEnvelopeCategoryFailureAction = /** @class */ (function () {
    function CreateEnvelopeCategoryFailureAction(payload) {
        this.payload = payload;
        this.type = EnvelopesActionTypes.CreateEnvelopeCategoryFailure;
    }
    return CreateEnvelopeCategoryFailureAction;
}());



/***/ }),

/***/ "./src/app/core/actions/transactions.actions.ts":
/*!******************************************************!*\
  !*** ./src/app/core/actions/transactions.actions.ts ***!
  \******************************************************/
/*! exports provided: TransactionsActionTypes, LoadTransactionsAction, LoadTransactionsSuccessAction, LoadTransactionsFailureAction, LoadPayeesAction, LoadPayeesSuccessAction, LoadPayeesFailureAction, ShowCreateTransactionAction, HideCreateTransactionAction, CreateTransactionAction, CreateTransactionSuccessAction, CreateTransactionFailureAction, UpdateTransactionAction, UpdateTransactionSuccessAction, UpdateTransactionFailureAction, DeleteTransactionsAction, DeleteTransactionsSuccessAction, DeleteTransactionsFailureAction, ConfirmDeleteTransactions, CancelDeleteTransactions, SetTransactionClearedAction, SetTransactionClearedSuccessAction, SetTransactionClearedFailureAction, SelectTransactionAction, DeselectTransactionAction, SelectAllTransactionsAction, DeselectAllTransactionsAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsActionTypes", function() { return TransactionsActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadTransactionsAction", function() { return LoadTransactionsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadTransactionsSuccessAction", function() { return LoadTransactionsSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadTransactionsFailureAction", function() { return LoadTransactionsFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadPayeesAction", function() { return LoadPayeesAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadPayeesSuccessAction", function() { return LoadPayeesSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadPayeesFailureAction", function() { return LoadPayeesFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowCreateTransactionAction", function() { return ShowCreateTransactionAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HideCreateTransactionAction", function() { return HideCreateTransactionAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTransactionAction", function() { return CreateTransactionAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTransactionSuccessAction", function() { return CreateTransactionSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTransactionFailureAction", function() { return CreateTransactionFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTransactionAction", function() { return UpdateTransactionAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTransactionSuccessAction", function() { return UpdateTransactionSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTransactionFailureAction", function() { return UpdateTransactionFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTransactionsAction", function() { return DeleteTransactionsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTransactionsSuccessAction", function() { return DeleteTransactionsSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTransactionsFailureAction", function() { return DeleteTransactionsFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDeleteTransactions", function() { return ConfirmDeleteTransactions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelDeleteTransactions", function() { return CancelDeleteTransactions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTransactionClearedAction", function() { return SetTransactionClearedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTransactionClearedSuccessAction", function() { return SetTransactionClearedSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTransactionClearedFailureAction", function() { return SetTransactionClearedFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectTransactionAction", function() { return SelectTransactionAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeselectTransactionAction", function() { return DeselectTransactionAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectAllTransactionsAction", function() { return SelectAllTransactionsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeselectAllTransactionsAction", function() { return DeselectAllTransactionsAction; });
var TransactionsActionTypes;
(function (TransactionsActionTypes) {
    TransactionsActionTypes["LoadTransactions"] = "[Transactions] Load";
    TransactionsActionTypes["LoadTransactionsSuccess"] = "[Transactions] Load Success";
    TransactionsActionTypes["LoadTransactionsFailure"] = "[Transactions] Load Failure";
    TransactionsActionTypes["LoadPayees"] = "[Payees] Load";
    TransactionsActionTypes["LoadPayeesSuccess"] = "[Payees] Load Success";
    TransactionsActionTypes["LoadPayeesFailure"] = "[Payees] Load Failure";
    TransactionsActionTypes["ShowCreateTransaction"] = "[Transactions] Show Create";
    TransactionsActionTypes["HideCreateTransaction"] = "[Transactions] Hide Create";
    TransactionsActionTypes["CreateTransaction"] = "[Transactions] Create";
    TransactionsActionTypes["CreateTransactionSuccess"] = "[Transactions] Create Success";
    TransactionsActionTypes["CreateTransactionFailure"] = "[Transactions] Create Failure";
    TransactionsActionTypes["UpdateTransaction"] = "[Transactions] Update";
    TransactionsActionTypes["UpdateTransactionSuccess"] = "[Transactions] Update Success";
    TransactionsActionTypes["UpdateTransactionFailure"] = "[Transactions] Update Failure";
    TransactionsActionTypes["DeleteTransactions"] = "[Transactions] Delete";
    TransactionsActionTypes["DeleteTransactionsSuccess"] = "[Transactions] Delete Success";
    TransactionsActionTypes["DeleteTransactionsFailure"] = "[Transactions] Delete Failure";
    TransactionsActionTypes["SetTransactionCleared"] = "[Transactions] Set Cleared";
    TransactionsActionTypes["SetTransactionClearedSuccess"] = "[Transactions] Set Cleared Success";
    TransactionsActionTypes["SetTransactionClearedFailure"] = "[Transactions] Set Cleared Failure";
    TransactionsActionTypes["ConfirmTransactionsDelete"] = "[Transactions] Confirm Delete";
    TransactionsActionTypes["CancelTransactionsDelete"] = "[Transactions] Cancel Delete";
    TransactionsActionTypes["SelectTransaction"] = "[Transactions] Select";
    TransactionsActionTypes["DeselectTransaction"] = "[Transactions] Deselect";
    TransactionsActionTypes["SelectAllTransactions"] = "[Transactions] Select All";
    TransactionsActionTypes["DeselectAllTransactions"] = "[Transactions] Deselect All";
})(TransactionsActionTypes || (TransactionsActionTypes = {}));
// Load
var LoadTransactionsAction = /** @class */ (function () {
    function LoadTransactionsAction(payload) {
        this.payload = payload;
        this.type = TransactionsActionTypes.LoadTransactions;
    }
    return LoadTransactionsAction;
}());

var LoadTransactionsSuccessAction = /** @class */ (function () {
    function LoadTransactionsSuccessAction(payload) {
        this.payload = payload;
        this.type = TransactionsActionTypes.LoadTransactionsSuccess;
    }
    return LoadTransactionsSuccessAction;
}());

var LoadTransactionsFailureAction = /** @class */ (function () {
    function LoadTransactionsFailureAction(payload) {
        this.payload = payload;
        this.type = TransactionsActionTypes.LoadTransactionsFailure;
    }
    return LoadTransactionsFailureAction;
}());

// Payees
var LoadPayeesAction = /** @class */ (function () {
    function LoadPayeesAction(payload) {
        this.payload = payload;
        this.type = TransactionsActionTypes.LoadPayees;
    }
    return LoadPayeesAction;
}());

var LoadPayeesSuccessAction = /** @class */ (function () {
    function LoadPayeesSuccessAction(payload) {
        this.payload = payload;
        this.type = TransactionsActionTypes.LoadPayeesSuccess;
    }
    return LoadPayeesSuccessAction;
}());

var LoadPayeesFailureAction = /** @class */ (function () {
    function LoadPayeesFailureAction(payload) {
        this.payload = payload;
        this.type = TransactionsActionTypes.LoadPayeesFailure;
    }
    return LoadPayeesFailureAction;
}());

// Create
var ShowCreateTransactionAction = /** @class */ (function () {
    function ShowCreateTransactionAction(payload) {
        this.payload = payload;
        this.type = TransactionsActionTypes.ShowCreateTransaction;
    }
    return ShowCreateTransactionAction;
}());

var HideCreateTransactionAction = /** @class */ (function () {
    function HideCreateTransactionAction() {
        this.type = TransactionsActionTypes.HideCreateTransaction;
    }
    return HideCreateTransactionAction;
}());

var CreateTransactionAction = /** @class */ (function () {
    function CreateTransactionAction(payload) {
        this.payload = payload;
        this.type = TransactionsActionTypes.CreateTransaction;
    }
    return CreateTransactionAction;
}());

var CreateTransactionSuccessAction = /** @class */ (function () {
    function CreateTransactionSuccessAction(payload) {
        this.payload = payload;
        this.type = TransactionsActionTypes.CreateTransactionSuccess;
    }
    return CreateTransactionSuccessAction;
}());

var CreateTransactionFailureAction = /** @class */ (function () {
    function CreateTransactionFailureAction(payload) {
        this.payload = payload;
        this.type = TransactionsActionTypes.CreateTransactionFailure;
    }
    return CreateTransactionFailureAction;
}());

// Edit
var UpdateTransactionAction = /** @class */ (function () {
    function UpdateTransactionAction(payload) {
        this.payload = payload;
        this.type = TransactionsActionTypes.UpdateTransaction;
    }
    return UpdateTransactionAction;
}());

var UpdateTransactionSuccessAction = /** @class */ (function () {
    function UpdateTransactionSuccessAction(payload) {
        this.payload = payload;
        this.type = TransactionsActionTypes.UpdateTransactionSuccess;
    }
    return UpdateTransactionSuccessAction;
}());

var UpdateTransactionFailureAction = /** @class */ (function () {
    function UpdateTransactionFailureAction(payload) {
        this.payload = payload;
        this.type = TransactionsActionTypes.UpdateTransactionFailure;
    }
    return UpdateTransactionFailureAction;
}());

// Delete
var DeleteTransactionsAction = /** @class */ (function () {
    function DeleteTransactionsAction(payload) {
        this.payload = payload;
        this.type = TransactionsActionTypes.DeleteTransactions;
    }
    return DeleteTransactionsAction;
}());

var DeleteTransactionsSuccessAction = /** @class */ (function () {
    function DeleteTransactionsSuccessAction(payload) {
        this.payload = payload;
        this.type = TransactionsActionTypes.DeleteTransactionsSuccess;
    }
    return DeleteTransactionsSuccessAction;
}());

var DeleteTransactionsFailureAction = /** @class */ (function () {
    function DeleteTransactionsFailureAction(payload) {
        this.payload = payload;
        this.type = TransactionsActionTypes.DeleteTransactionsFailure;
    }
    return DeleteTransactionsFailureAction;
}());

var ConfirmDeleteTransactions = /** @class */ (function () {
    function ConfirmDeleteTransactions() {
        this.type = TransactionsActionTypes.ConfirmTransactionsDelete;
    }
    return ConfirmDeleteTransactions;
}());

var CancelDeleteTransactions = /** @class */ (function () {
    function CancelDeleteTransactions() {
        this.type = TransactionsActionTypes.CancelTransactionsDelete;
    }
    return CancelDeleteTransactions;
}());

// Clear
var SetTransactionClearedAction = /** @class */ (function () {
    function SetTransactionClearedAction(payload) {
        this.payload = payload;
        this.type = TransactionsActionTypes.SetTransactionCleared;
    }
    return SetTransactionClearedAction;
}());

var SetTransactionClearedSuccessAction = /** @class */ (function () {
    function SetTransactionClearedSuccessAction(payload) {
        this.payload = payload;
        this.type = TransactionsActionTypes.SetTransactionClearedSuccess;
    }
    return SetTransactionClearedSuccessAction;
}());

var SetTransactionClearedFailureAction = /** @class */ (function () {
    function SetTransactionClearedFailureAction(payload) {
        this.payload = payload;
        this.type = TransactionsActionTypes.SetTransactionClearedFailure;
    }
    return SetTransactionClearedFailureAction;
}());

// Selection
var SelectTransactionAction = /** @class */ (function () {
    function SelectTransactionAction(payload) {
        this.payload = payload;
        this.type = TransactionsActionTypes.SelectTransaction;
    }
    return SelectTransactionAction;
}());

var DeselectTransactionAction = /** @class */ (function () {
    function DeselectTransactionAction(payload) {
        this.payload = payload;
        this.type = TransactionsActionTypes.DeselectTransaction;
    }
    return DeselectTransactionAction;
}());

var SelectAllTransactionsAction = /** @class */ (function () {
    function SelectAllTransactionsAction() {
        this.type = TransactionsActionTypes.SelectAllTransactions;
    }
    return SelectAllTransactionsAction;
}());

var DeselectAllTransactionsAction = /** @class */ (function () {
    function DeselectAllTransactionsAction() {
        this.type = TransactionsActionTypes.DeselectAllTransactions;
    }
    return DeselectAllTransactionsAction;
}());



/***/ }),

/***/ "./src/app/core/components/app.component.ts":
/*!**************************************************!*\
  !*** ./src/app/core/components/app.component.ts ***!
  \**************************************************/
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "moneteer-root",
            template: "<router-outlet></router-outlet>\n    <moneteer-error-modal></moneteer-error-modal>"
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/core/components/auth-callback/auth-callback.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/core/components/auth-callback/auth-callback.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\nh3 {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2F1dGgtY2FsbGJhY2svRDpcXGdpdFxcbW9uZXRlZXJcXG1vbmV0ZWVyLWZyb250ZW5kL3NyY1xcYXBwXFxjb3JlXFxjb21wb25lbnRzXFxhdXRoLWNhbGxiYWNrXFxhdXRoLWNhbGxiYWNrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvYXV0aC1jYWxsYmFjay9hdXRoLWNhbGxiYWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvYXV0aC1jYWxsYmFjay9hdXRoLWNhbGxiYWNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmgzIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/core/components/auth-callback/auth-callback.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/core/components/auth-callback/auth-callback.component.ts ***!
  \**************************************************************************/
/*! exports provided: AuthCallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthCallbackComponent", function() { return AuthCallbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/index */ "./src/app/core/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthCallbackComponent = /** @class */ (function () {
    function AuthCallbackComponent(authService) {
        this.authService = authService;
    }
    AuthCallbackComponent.prototype.ngOnInit = function () {
        this.authService.handleCallback();
    };
    AuthCallbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "moneteer-auth-callback",
            template: __webpack_require__(/*! raw-loader!./auth-callback.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/auth-callback/auth-callback.component.html"),
            styles: [__webpack_require__(/*! ./auth-callback.component.scss */ "./src/app/core/components/auth-callback/auth-callback.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_index__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AuthCallbackComponent);
    return AuthCallbackComponent;
}());



/***/ }),

/***/ "./src/app/core/components/error-modal/error.modal.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/core/components/error-modal/error.modal.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n  overflow: hidden;\n  height: 100%;\n}\n\nbody {\n  height: 100%;\n}\n\n.is-good {\n  color: #318700;\n}\n\n.is-bad {\n  color: #c92100;\n}\n\n.badge.badge-success {\n  color: #fff;\n}\n\n.container {\n  margin: 40px;\n}\n\n/* TRANSACTION TABLE */\n\n.transaction-row {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  flex-shrink: 0;\n  height: 1.15rem;\n  padding-top: 1px;\n}\n\n.selected, .editing {\n  background-color: #CFD8DC;\n  cursor: text;\n}\n\n.transaction-cell--date {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--account {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--category {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--flow {\n  flex: 0 1 100px;\n  text-align: right;\n}\n\n.transaction-cell--cleared {\n  flex: 0 1 60px;\n}\n\n.transaction-cell--description {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--payee {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--selected {\n  flex: 0 1 30px;\n  padding-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2Vycm9yLW1vZGFsL0Q6XFxnaXRcXG1vbmV0ZWVyXFxtb25ldGVlci1mcm9udGVuZC9zcmNcXGFwcFxcY29yZVxcY29tcG9uZW50c1xcZXJyb3ItbW9kYWxcXGVycm9yLm1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvZXJyb3ItbW9kYWwvZXJyb3IubW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FDbEJKOztBRHFCQTtFQUNFLFlBQUE7QUNsQkY7O0FEcUJBO0VBQ0UsY0FwQnFCO0FDRXZCOztBRHFCQTtFQUNFLGNBdkJxQjtBQ0t2Qjs7QURxQkE7RUFDRSxXQUFBO0FDbEJGOztBRHFCQTtFQUNFLFlBQUE7QUNsQkY7O0FEcUJBLHNCQUFBOztBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDbEJKOztBRHFCQTtFQUNJLHlCQXJEbUI7RUFzRG5CLFlBQUE7QUNsQko7O0FEcUJBO0VBQ0ksZUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0FDbEJKOztBRHFCQTtFQUNJLGVBQUE7QUNsQko7O0FEcUJBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDbEJKOztBRHFCQTtFQUNJLGNBQUE7QUNsQko7O0FEcUJBO0VBQ0ksZUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0FDbEJKOztBRHFCQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ2xCSiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9lcnJvci1tb2RhbC9lcnJvci5tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5LWNvbG9yLWRhcms6ICAgIzQ1NUE2NDtcclxuJHByaW1hcnktY29sb3I6ICAgICAgICAjNjA3RDhCO1xyXG4kcHJpbWFyeS1jb2xvci1saWdodDogICNDRkQ4REM7XHJcbiRwcmltYXJ5LWNvbG9yLXRleHQ6ICAgI0ZGRkZGRjtcclxuJGFjY2VudC1jb2xvcjogICAgICAgICAjRkZDMTA3O1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAgICMyMTIxMjE7XHJcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogIzc1NzU3NTtcclxuJGRpdmlkZXItY29sb3I6ICAgICAgICAjQkRCREJEO1xyXG5cclxuJG1vbmV5LWdvb2Q6ICAgICAgICAgICAjMzE4NzAwO1xyXG4kbW9uZXktYmFkOiAgICAgICAgICAgICNjOTIxMDA7XHJcblxyXG4kbW9uZXktZ29vZC1zYXR1cmF0ZWQ6ICMwMEZGQzg7XHJcbiRtb25leS1iYWQtc2F0dXJhdGVkOiAgI0ZGNTU0MDtcclxuXHJcbiRlcnJvcjogICAgICAgICAgICAgICAgI2NjMDAwMDtcclxuXHJcbiRwcmltYXJ5OiAkcHJpbWFyeS1jb2xvcjtcclxuXHJcbmh0bWwge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uaXMtZ29vZCB7XHJcbiAgY29sb3I6ICRtb25leS1nb29kO1xyXG59XHJcblxyXG4uaXMtYmFkIHtcclxuICBjb2xvcjogJG1vbmV5LWJhZDtcclxufVxyXG5cclxuLmJhZGdlLmJhZGdlLXN1Y2Nlc3Mge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW46IDQwcHg7XHJcbn1cclxuXHJcbi8qIFRSQU5TQUNUSU9OIFRBQkxFICovXHJcbi50cmFuc2FjdGlvbi1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgaGVpZ2h0OiAxLjE1cmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxufVxyXG5cclxuLnNlbGVjdGVkLCAuZWRpdGluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvci1saWdodDtcclxuICAgIGN1cnNvcjogdGV4dDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLWRhdGUge1xyXG4gICAgZmxleDogMSAxIDEyMHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tYWNjb3VudCB7XHJcbiAgICBmbGV4OiAxIDEgMTIwcHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1jYXRlZ29yeSB7XHJcbiAgICBmbGV4OiAxIDEgMTIwcHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1mbG93IHtcclxuICAgIGZsZXg6IDAgMSAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tY2xlYXJlZCB7XHJcbiAgICBmbGV4OiAwIDEgNjBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLWRlc2NyaXB0aW9uIHtcclxuICAgIGZsZXg6IDEgMSAxMjBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLXBheWVlIHtcclxuICAgIGZsZXg6IDEgMSAxMjBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLXNlbGVjdGVkIHtcclxuICAgIGZsZXg6IDAgMSAzMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbn0iLCJodG1sIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaXMtZ29vZCB7XG4gIGNvbG9yOiAjMzE4NzAwO1xufVxuXG4uaXMtYmFkIHtcbiAgY29sb3I6ICNjOTIxMDA7XG59XG5cbi5iYWRnZS5iYWRnZS1zdWNjZXNzIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW46IDQwcHg7XG59XG5cbi8qIFRSQU5TQUNUSU9OIFRBQkxFICovXG4udHJhbnNhY3Rpb24tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBoZWlnaHQ6IDEuMTVyZW07XG4gIHBhZGRpbmctdG9wOiAxcHg7XG59XG5cbi5zZWxlY3RlZCwgLmVkaXRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDO1xuICBjdXJzb3I6IHRleHQ7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1kYXRlIHtcbiAgZmxleDogMSAxIDEyMHB4O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tYWNjb3VudCB7XG4gIGZsZXg6IDEgMSAxMjBweDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLWNhdGVnb3J5IHtcbiAgZmxleDogMSAxIDEyMHB4O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tZmxvdyB7XG4gIGZsZXg6IDAgMSAxMDBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1jbGVhcmVkIHtcbiAgZmxleDogMCAxIDYwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1kZXNjcmlwdGlvbiB7XG4gIGZsZXg6IDEgMSAxMjBweDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLXBheWVlIHtcbiAgZmxleDogMSAxIDEyMHB4O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tc2VsZWN0ZWQge1xuICBmbGV4OiAwIDEgMzBweDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/core/components/error-modal/error.modal.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/core/components/error-modal/error.modal.component.ts ***!
  \**********************************************************************/
/*! exports provided: ErrorModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorModalComponent", function() { return ErrorModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/modal.service */ "./src/app/core/services/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorModalComponent = /** @class */ (function () {
    function ErrorModalComponent(modalService) {
        this.modalService = modalService;
    }
    ErrorModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "moneteer-error-modal",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: __webpack_require__(/*! raw-loader!./error.modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/error-modal/error.modal.component.html"),
            styles: [__webpack_require__(/*! ./error.modal.component.scss */ "./src/app/core/components/error-modal/error.modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]])
    ], ErrorModalComponent);
    return ErrorModalComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module.import.guard */ "./src/app/core/module.import.guard.ts");
/* harmony import */ var _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interceptors/token.interceptor */ "./src/app/core/interceptors/token.interceptor.ts");
/* harmony import */ var _interceptors_unauthorized_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptors/unauthorized.interceptor */ "./src/app/core/interceptors/unauthorized.interceptor.ts");
/* harmony import */ var _components_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/app.component */ "./src/app/core/components/app.component.ts");
/* harmony import */ var _components_error_modal_error_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/error-modal/error.modal.component */ "./src/app/core/components/error-modal/error.modal.component.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services */ "./src/app/core/services/index.ts");
/* harmony import */ var _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../routing/app-routing.module */ "./src/app/routing/app-routing.module.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/core/guards/auth.guard.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_auth_callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/auth-callback/auth-callback.component */ "./src/app/core/components/auth-callback/auth-callback.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./reducers */ "./src/app/core/reducers/index.ts");
/* harmony import */ var _effects_accounts_effects__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./effects/accounts.effects */ "./src/app/core/effects/accounts.effects.ts");
/* harmony import */ var _effects_budgets_effects__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./effects/budgets.effects */ "./src/app/core/effects/budgets.effects.ts");
/* harmony import */ var _effects_transactions_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./effects/transactions.effects */ "./src/app/core/effects/transactions.effects.ts");
/* harmony import */ var _effects_envelopes_effects__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./effects/envelopes.effects */ "./src/app/core/effects/envelopes.effects.ts");
/* harmony import */ var _errors_handler__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./errors.handler */ "./src/app/core/errors.handler.ts");
/* harmony import */ var _interceptors_retry_interceptor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./interceptors/retry.interceptor */ "./src/app/core/interceptors/retry.interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

























var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        Object(_module_import_guard__WEBPACK_IMPORTED_MODULE_2__["throwIfAlreadyLoaded"])(parentModule, "CoreModule");
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_15__["StoreModule"].forFeature("core", _reducers__WEBPACK_IMPORTED_MODULE_17__["reducers"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__["EffectsModule"].forFeature([_effects_accounts_effects__WEBPACK_IMPORTED_MODULE_18__["AccountsEffects"], _effects_budgets_effects__WEBPACK_IMPORTED_MODULE_19__["BudgetsEffects"], _effects_transactions_effects__WEBPACK_IMPORTED_MODULE_20__["TransactionsEffects"], _effects_envelopes_effects__WEBPACK_IMPORTED_MODULE_21__["EnvelopesEffects"]]),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot({
                    positionClass: "toast-bottom-right",
                    preventDuplicates: true
                })
            ],
            exports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_3__["TokenInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _interceptors_retry_interceptor__WEBPACK_IMPORTED_MODULE_23__["RetryInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _interceptors_unauthorized_interceptor__WEBPACK_IMPORTED_MODULE_4__["UnauthorizedInterceptor"], multi: true },
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], useClass: _errors_handler__WEBPACK_IMPORTED_MODULE_22__["ErrorsHandler"] },
                _services__WEBPACK_IMPORTED_MODULE_7__["LoadingSpinnerService"],
                _services__WEBPACK_IMPORTED_MODULE_7__["MediaQueryService"],
                _services__WEBPACK_IMPORTED_MODULE_7__["NotificationsService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"],
                _services__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
                _services__WEBPACK_IMPORTED_MODULE_7__["AccountService"],
                _services__WEBPACK_IMPORTED_MODULE_7__["BudgetService"],
                _services__WEBPACK_IMPORTED_MODULE_7__["EnvelopesService"],
                _services__WEBPACK_IMPORTED_MODULE_7__["PayeeService"],
                _services__WEBPACK_IMPORTED_MODULE_7__["TransactionService"],
                _services__WEBPACK_IMPORTED_MODULE_7__["ModalService"]
            ],
            declarations: [
                _components_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_error_modal_error_modal_component__WEBPACK_IMPORTED_MODULE_6__["ErrorModalComponent"],
                _components_auth_callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_14__["AuthCallbackComponent"]
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/effects/accounts.effects.ts":
/*!**************************************************!*\
  !*** ./src/app/core/effects/accounts.effects.ts ***!
  \**************************************************/
/*! exports provided: AccountsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsEffects", function() { return AccountsEffects; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions_accounts_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/accounts.actions */ "./src/app/core/actions/accounts.actions.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators/catchError */ "./node_modules/rxjs/internal/operators/catchError.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AccountsEffects = /** @class */ (function () {
    function AccountsEffects(accountService, actions$) {
        var _this = this;
        this.accountService = accountService;
        this.actions$ = actions$;
        this.loadAccounts$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_accounts_actions__WEBPACK_IMPORTED_MODULE_3__["AccountsActionTypes"].Load), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (action) { return _this.accountService.getAccounts(action.payload.budgetId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (accounts) { return new _actions_accounts_actions__WEBPACK_IMPORTED_MODULE_3__["LoadAccountsSuccessAction"]({ accounts: accounts }); })); }));
        this.createAccount$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_accounts_actions__WEBPACK_IMPORTED_MODULE_3__["AccountsActionTypes"].Create), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (action) { return _this.accountService.createAccount(action.payload.account).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (account) { return new _actions_accounts_actions__WEBPACK_IMPORTED_MODULE_3__["CreateAccountSuccessAction"]({ account: account }); }), Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _actions_accounts_actions__WEBPACK_IMPORTED_MODULE_3__["CreateAccountFailureAction"](err)); })); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], AccountsEffects.prototype, "loadAccounts$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], AccountsEffects.prototype, "createAccount$", void 0);
    AccountsEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_4__["AccountService"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]])
    ], AccountsEffects);
    return AccountsEffects;
}());



/***/ }),

/***/ "./src/app/core/effects/budgets.effects.ts":
/*!*************************************************!*\
  !*** ./src/app/core/effects/budgets.effects.ts ***!
  \*************************************************/
/*! exports provided: BudgetsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetsEffects", function() { return BudgetsEffects; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions_budget_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../actions/budget.actions */ "./src/app/core/actions/budget.actions.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators/catchError */ "./node_modules/rxjs/internal/operators/catchError.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BudgetsEffects = /** @class */ (function () {
    function BudgetsEffects(budgetService, actions$) {
        var _this = this;
        this.budgetService = budgetService;
        this.actions$ = actions$;
        this.loadBudgets$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_budget_actions__WEBPACK_IMPORTED_MODULE_3__["BudgetActionTypes"].Load), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function () { return _this.budgetService.getAllBudgets().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (budgets) { return new _actions_budget_actions__WEBPACK_IMPORTED_MODULE_3__["LoadBudgetsSuccessAction"]({ budgets: budgets }); })); }));
        this.deleteBudget$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_budget_actions__WEBPACK_IMPORTED_MODULE_3__["BudgetActionTypes"].Delete), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (action) { return _this.budgetService.deleteBudget(action.payload.budget.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (budgetId) { return new _actions_budget_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteBudgetSuccessAction"]({ budget: action.payload.budget }); }), Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _actions_budget_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteBudgetFailureAction"](err)); })); }));
        this.createBudget$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_budget_actions__WEBPACK_IMPORTED_MODULE_3__["BudgetActionTypes"].Create), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (action) { return _this.budgetService.createBudget(action.payload.budget).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (budget) { return new _actions_budget_actions__WEBPACK_IMPORTED_MODULE_3__["CreateBudgetSuccessAction"]({ budget: budget }); }), Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _actions_budget_actions__WEBPACK_IMPORTED_MODULE_3__["CreateBudgetFailureAction"](err)); })); }));
        this.loadBudget$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_budget_actions__WEBPACK_IMPORTED_MODULE_3__["BudgetActionTypes"].LoadBudget), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (payload) { return _this.budgetService.getBudget(payload.budgetId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (budget) { return new _actions_budget_actions__WEBPACK_IMPORTED_MODULE_3__["LoadBudgetSuccessAction"]({ budget: budget }); })); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], BudgetsEffects.prototype, "loadBudgets$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], BudgetsEffects.prototype, "deleteBudget$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], BudgetsEffects.prototype, "createBudget$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], BudgetsEffects.prototype, "loadBudget$", void 0);
    BudgetsEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_4__["BudgetService"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]])
    ], BudgetsEffects);
    return BudgetsEffects;
}());



/***/ }),

/***/ "./src/app/core/effects/envelopes.effects.ts":
/*!***************************************************!*\
  !*** ./src/app/core/effects/envelopes.effects.ts ***!
  \***************************************************/
/*! exports provided: EnvelopesEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvelopesEffects", function() { return EnvelopesEffects; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _services_envelopes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/envelopes.service */ "./src/app/core/services/envelopes.service.ts");
/* harmony import */ var _actions_envelopes_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/envelopes.actions */ "./src/app/core/actions/envelopes.actions.ts");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators/catchError */ "./node_modules/rxjs/internal/operators/catchError.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EnvelopesEffects = /** @class */ (function () {
    function EnvelopesEffects(envelopesService, actions$) {
        var _this = this;
        this.envelopesService = envelopesService;
        this.actions$ = actions$;
        this.load$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_envelopes_actions__WEBPACK_IMPORTED_MODULE_4__["EnvelopesActionTypes"].Load), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (action) { return _this.envelopesService.getEnvelopesForBudget(action.payload.budgetId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (response) { return new _actions_envelopes_actions__WEBPACK_IMPORTED_MODULE_4__["LoadEnvelopesSuccessAction"]({ envelopes: response.envelopes, available: response.available }); })); }));
        this.createEnvelopeCategory$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_envelopes_actions__WEBPACK_IMPORTED_MODULE_4__["EnvelopesActionTypes"].CreateEnvelopeCategory), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function (action) { return _this.envelopesService.createEnvelopeCategory(action.payload.budgetId, action.payload.envelopeCategory).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (envelopeCategory) { return new _actions_envelopes_actions__WEBPACK_IMPORTED_MODULE_4__["CreateEnvelopeCategorySuccessAction"]({ envelopeCategory: envelopeCategory }); }), Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _actions_envelopes_actions__WEBPACK_IMPORTED_MODULE_4__["CreateEnvelopeCategoryFailureAction"](error)); })); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], EnvelopesEffects.prototype, "load$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], EnvelopesEffects.prototype, "createEnvelopeCategory$", void 0);
    EnvelopesEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_services_envelopes_service__WEBPACK_IMPORTED_MODULE_3__["EnvelopesService"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]])
    ], EnvelopesEffects);
    return EnvelopesEffects;
}());



/***/ }),

/***/ "./src/app/core/effects/transactions.effects.ts":
/*!******************************************************!*\
  !*** ./src/app/core/effects/transactions.effects.ts ***!
  \******************************************************/
/*! exports provided: TransactionsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsEffects", function() { return TransactionsEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/transactions.actions */ "./src/app/core/actions/transactions.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/operators/catchError */ "./node_modules/rxjs/internal/operators/catchError.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _reducers_budget_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/budget.reducer */ "./src/app/core/reducers/budget.reducer.ts");
/* harmony import */ var _services_payee_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/payee.service */ "./src/app/core/services/payee.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var TransactionsEffects = /** @class */ (function () {
    function TransactionsEffects(transactionService, envelopesService, payeeService, budgetStore, actions$) {
        var _this = this;
        this.transactionService = transactionService;
        this.envelopesService = envelopesService;
        this.payeeService = payeeService;
        this.budgetStore = budgetStore;
        this.actions$ = actions$;
        this.loadTransactions$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_transactions_actions__WEBPACK_IMPORTED_MODULE_4__["TransactionsActionTypes"].LoadTransactions), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (payload) { return _this.transactionService.getTransactionsForBudget(payload.budgetId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (transactions) { return new _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_4__["LoadTransactionsSuccessAction"]({ transactions: transactions }); }), Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_4__["LoadTransactionsFailureAction"]({ error: error.message })); })); }));
        this.createTransaction$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_transactions_actions__WEBPACK_IMPORTED_MODULE_4__["TransactionsActionTypes"].CreateTransaction), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (payload) { return _this.transactionService.createTransaction(payload.transaction).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (transaction) { return new _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_4__["CreateTransactionSuccessAction"]({ transaction: transaction }); }), Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_4__["CreateTransactionFailureAction"](error)); })); }));
        /*@Effect() createTransactionSuccess$: Observable<Action> = this.actions$.pipe(
            ofType(TransactionsActionTypes.CreateTransactionSuccess),
            switchMap((action: CreateTransactionSuccessAction) => this.budgetStore.select(getActiveBudget)),
            filter(activeBudget => activeBudget !== undefined),
            switchMap(activeBudget => [
                new LoadEnvelopesAction({budgetId: activeBudget!.id}),
                new LoadBudgetAction({budgetId: activeBudget!.id})
            ])
        );*/
        this.updateTransaction$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_transactions_actions__WEBPACK_IMPORTED_MODULE_4__["TransactionsActionTypes"].UpdateTransaction), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (payload) { return _this.transactionService.editTransaction(payload.transaction).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (transaction) { return new _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_4__["UpdateTransactionSuccessAction"]({ transaction: transaction }); }), Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_4__["UpdateTransactionFailureAction"]({ error: error, transaction: payload.transaction })); })); }));
        /*@Effect() updateTransactionSuccess$: Observable<Action> = this.actions$.pipe(
            ofType(TransactionsActionTypes.UpdateTransactionSuccess),
            switchMap((action: UpdateTransactionSuccessAction) => this.budgetStore.select(getActiveBudget)),
            filter(activeBudget => activeBudget !== undefined),
            flatMap(activeBudget => [
                new LoadEnvelopesAction({budgetId: activeBudget!.id}),
                new LoadBudgetAction({budgetId: activeBudget!.id})
            ])
        );*/
        this.deleteTransactions$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_transactions_actions__WEBPACK_IMPORTED_MODULE_4__["TransactionsActionTypes"].DeleteTransactions), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (payload) { return _this.transactionService.deleteTransactions(payload.transactions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (transactions) { return new _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_4__["DeleteTransactionsSuccessAction"]({ transactions: transactions }); }), Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_4__["DeleteTransactionsFailureAction"](error)); })); }));
        this.deleteTransactionsSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_transactions_actions__WEBPACK_IMPORTED_MODULE_4__["TransactionsActionTypes"].DeleteTransactionsSuccess), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (action) { return _this.budgetStore.select(_reducers_budget_reducer__WEBPACK_IMPORTED_MODULE_8__["getActiveBudget"]); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (activeBudget) { return activeBudget !== undefined; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (activeBudget) { return new _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_4__["DeselectAllTransactionsAction"](); }));
        this.setTransactionCleared$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_transactions_actions__WEBPACK_IMPORTED_MODULE_4__["TransactionsActionTypes"].SetTransactionCleared), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (payload) { return _this.transactionService.setTransactionIsCleared(payload.transactionId, payload.isCleared).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) { return new _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_4__["SetTransactionClearedSuccessAction"]({ transactionId: response.transactionId, isCleared: response.isCleared }); }), Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_4__["SetTransactionClearedFailureAction"]({ error: error, transactionId: payload.transactionId, originalState: !payload.isCleared })); })); }));
        this.loadPayees$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_transactions_actions__WEBPACK_IMPORTED_MODULE_4__["TransactionsActionTypes"].LoadPayees), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (payload) { return _this.payeeService.getAllPayeesByBudget(payload.budgetId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (payees) { return new _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_4__["LoadPayeesSuccessAction"]({ payees: payees }); }), Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_4__["LoadPayeesFailureAction"](err)); })); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], TransactionsEffects.prototype, "loadTransactions$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], TransactionsEffects.prototype, "createTransaction$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], TransactionsEffects.prototype, "updateTransaction$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], TransactionsEffects.prototype, "deleteTransactions$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"])
    ], TransactionsEffects.prototype, "deleteTransactionsSuccess$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], TransactionsEffects.prototype, "setTransactionCleared$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], TransactionsEffects.prototype, "loadPayees$", void 0);
    TransactionsEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_1__["TransactionService"],
            _core_services__WEBPACK_IMPORTED_MODULE_1__["EnvelopesService"],
            _services_payee_service__WEBPACK_IMPORTED_MODULE_9__["PayeeService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]])
    ], TransactionsEffects);
    return TransactionsEffects;
}());



/***/ }),

/***/ "./src/app/core/errors.handler.ts":
/*!****************************************!*\
  !*** ./src/app/core/errors.handler.ts ***!
  \****************************************/
/*! exports provided: ErrorsHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorsHandler", function() { return ErrorsHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./src/app/core/services/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ErrorsHandler = /** @class */ (function () {
    function ErrorsHandler(injector) {
        this.injector = injector;
    }
    ErrorsHandler.prototype.handleError = function (error) {
        var notificationService = this.injector.get(_services__WEBPACK_IMPORTED_MODULE_1__["NotificationsService"]);
        if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
            if (!navigator.onLine) {
                return notificationService.error("No internet connection");
            }
            else {
                return notificationService.error(error.status + " - " + error.message);
            }
        }
        else {
            console.error(error);
            return notificationService.errorModal(error.name + "\r\n" + error.message + "\r\n" + error.stack);
        }
    };
    ErrorsHandler = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], ErrorsHandler);
    return ErrorsHandler;
}());



/***/ }),

/***/ "./src/app/core/guards/auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/index */ "./src/app/core/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, notificationsService) {
        this.authService = authService;
        this.notificationsService = notificationsService;
    }
    AuthGuard.prototype.canActivate = function (childRoute, state) {
        return this._canActivate(state.url);
    };
    AuthGuard.prototype.canActivateChild = function (childRoute, state) {
        return this._canActivate(state.url);
    };
    AuthGuard.prototype._canActivate = function (targetUrl) {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        else {
            this.authService.startAuthentication(targetUrl);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_core_services_index__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _core_services_index__WEBPACK_IMPORTED_MODULE_1__["NotificationsService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/interceptors/retry.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/core/interceptors/retry.interceptor.ts ***!
  \********************************************************/
/*! exports provided: RetryInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetryInterceptor", function() { return RetryInterceptor; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RetryInterceptor = /** @class */ (function () {
    function RetryInterceptor() {
    }
    RetryInterceptor.prototype.intercept = function (request, next) {
        // If the call fails, retry until 5 times before throwing an error
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["retry"])(5));
    };
    RetryInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], RetryInterceptor);
    return RetryInterceptor;
}());



/***/ }),

/***/ "./src/app/core/interceptors/token.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/core/interceptors/token.interceptor.ts ***!
  \********************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/index */ "./src/app/core/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(authService) {
        this.authService = authService;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        return this.handleAccess(request, next);
    };
    TokenInterceptor.prototype.handleAccess = function (request, next) {
        request = request.clone({
            setHeaders: { Authorization: this.authService.getAuthorizationHeaderValue() }
        });
        return next.handle(request);
    };
    TokenInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_index__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/core/interceptors/unauthorized.interceptor.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/interceptors/unauthorized.interceptor.ts ***!
  \***************************************************************/
/*! exports provided: UnauthorizedInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthorizedInterceptor", function() { return UnauthorizedInterceptor; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/index */ "./src/app/core/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UnauthorizedInterceptor = /** @class */ (function () {
    function UnauthorizedInterceptor(authService) {
        this.authService = authService;
    }
    UnauthorizedInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (err) {
            if (err.status === 401) {
                _this.authService.startAuthentication("");
            }
            if (err.error instanceof ErrorEvent) {
                // a client side or network error occurred.
                console.error("An error occurred:", err.err.message);
            }
            else if (typeof err.err === "string") {
                // server side error
                console.error("Backend returned code " + err.status + ", " +
                    ("body was: " + err.error));
                throw new Error(err.error);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    UnauthorizedInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_services_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], UnauthorizedInterceptor);
    return UnauthorizedInterceptor;
}());



/***/ }),

/***/ "./src/app/core/models/budget.model.ts":
/*!*********************************************!*\
  !*** ./src/app/core/models/budget.model.ts ***!
  \*********************************************/
/*! exports provided: BudgetModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetModel", function() { return BudgetModel; });
var BudgetModel = /** @class */ (function () {
    function BudgetModel(name, currency, dateFormat, currencyFormat, currencySymbolLocation) {
        this.name = name;
        this.currency = currency;
        this.dateFormat = dateFormat;
        this.currencyFormat = currencyFormat;
        this.currencySymbolLocation = currencySymbolLocation;
    }
    return BudgetModel;
}());



/***/ }),

/***/ "./src/app/core/models/envelope.category.model.ts":
/*!********************************************************!*\
  !*** ./src/app/core/models/envelope.category.model.ts ***!
  \********************************************************/
/*! exports provided: EnvelopeCategoryModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvelopeCategoryModel", function() { return EnvelopeCategoryModel; });
var EnvelopeCategoryModel = /** @class */ (function () {
    function EnvelopeCategoryModel(name) {
        this.name = name;
    }
    return EnvelopeCategoryModel;
}());



/***/ }),

/***/ "./src/app/core/models/envelope.category.structured.model.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/models/envelope.category.structured.model.ts ***!
  \*******************************************************************/
/*! exports provided: EnvelopeCategoryStructuredModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvelopeCategoryStructuredModel", function() { return EnvelopeCategoryStructuredModel; });
var EnvelopeCategoryStructuredModel = /** @class */ (function () {
    function EnvelopeCategoryStructuredModel(envelopeCategory, envelopes) {
        this.envelopeCategory = envelopeCategory;
        this.envelopes = envelopes;
    }
    return EnvelopeCategoryStructuredModel;
}());



/***/ }),

/***/ "./src/app/core/models/envelope.model.ts":
/*!***********************************************!*\
  !*** ./src/app/core/models/envelope.model.ts ***!
  \***********************************************/
/*! exports provided: EnvelopeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvelopeModel", function() { return EnvelopeModel; });
var EnvelopeModel = /** @class */ (function () {
    function EnvelopeModel(name) {
        if (name === void 0) { name = ""; }
        this.name = name;
    }
    return EnvelopeModel;
}());



/***/ }),

/***/ "./src/app/core/models/guid.model.ts":
/*!*******************************************!*\
  !*** ./src/app/core/models/guid.model.ts ***!
  \*******************************************/
/*! exports provided: GuidModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidModel", function() { return GuidModel; });
var GuidModel = /** @class */ (function () {
    function GuidModel(id) {
        this.id = id;
        if (!id) {
            this.id = "00000000-0000-0000-0000-000000000000";
        }
    }
    GuidModel.empty = "00000000-0000-0000-0000-000000000000";
    return GuidModel;
}());



/***/ }),

/***/ "./src/app/core/models/index.ts":
/*!**************************************!*\
  !*** ./src/app/core/models/index.ts ***!
  \**************************************/
/*! exports provided: BudgetModel, EnvelopeCategoryModel, EnvelopeCategoryStructuredModel, EnvelopeModel, PayeeModel, SymbolLocation, GuidModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _budget_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./budget.model */ "./src/app/core/models/budget.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BudgetModel", function() { return _budget_model__WEBPACK_IMPORTED_MODULE_0__["BudgetModel"]; });

/* harmony import */ var _envelope_category_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./envelope.category.model */ "./src/app/core/models/envelope.category.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnvelopeCategoryModel", function() { return _envelope_category_model__WEBPACK_IMPORTED_MODULE_1__["EnvelopeCategoryModel"]; });

/* harmony import */ var _envelope_category_structured_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./envelope.category.structured.model */ "./src/app/core/models/envelope.category.structured.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnvelopeCategoryStructuredModel", function() { return _envelope_category_structured_model__WEBPACK_IMPORTED_MODULE_2__["EnvelopeCategoryStructuredModel"]; });

/* harmony import */ var _envelope_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./envelope.model */ "./src/app/core/models/envelope.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnvelopeModel", function() { return _envelope_model__WEBPACK_IMPORTED_MODULE_3__["EnvelopeModel"]; });

/* harmony import */ var _payee_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payee.model */ "./src/app/core/models/payee.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PayeeModel", function() { return _payee_model__WEBPACK_IMPORTED_MODULE_4__["PayeeModel"]; });

/* harmony import */ var _symbol_location_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./symbol.location.model */ "./src/app/core/models/symbol.location.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SymbolLocation", function() { return _symbol_location_model__WEBPACK_IMPORTED_MODULE_5__["SymbolLocation"]; });

/* harmony import */ var _guid_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guid.model */ "./src/app/core/models/guid.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GuidModel", function() { return _guid_model__WEBPACK_IMPORTED_MODULE_6__["GuidModel"]; });










/***/ }),

/***/ "./src/app/core/models/payee.model.ts":
/*!********************************************!*\
  !*** ./src/app/core/models/payee.model.ts ***!
  \********************************************/
/*! exports provided: PayeeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayeeModel", function() { return PayeeModel; });
var PayeeModel = /** @class */ (function () {
    function PayeeModel(name) {
        if (name === void 0) { name = ""; }
        this.name = name;
    }
    return PayeeModel;
}());



/***/ }),

/***/ "./src/app/core/models/symbol.location.model.ts":
/*!******************************************************!*\
  !*** ./src/app/core/models/symbol.location.model.ts ***!
  \******************************************************/
/*! exports provided: SymbolLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolLocation", function() { return SymbolLocation; });
var SymbolLocation;
(function (SymbolLocation) {
    SymbolLocation[SymbolLocation["Before"] = 0] = "Before";
    SymbolLocation[SymbolLocation["After"] = 1] = "After";
    SymbolLocation[SymbolLocation["Hidden"] = 2] = "Hidden";
})(SymbolLocation || (SymbolLocation = {}));


/***/ }),

/***/ "./src/app/core/module.import.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/core/module.import.guard.ts ***!
  \*********************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core module in the AppModule only.");
    }
}


/***/ }),

/***/ "./src/app/core/reducers/accounts.reducer.ts":
/*!***************************************************!*\
  !*** ./src/app/core/reducers/accounts.reducer.ts ***!
  \***************************************************/
/*! exports provided: accountsReducer, getShowCreate, getIsCreating, getAccounts, getOffBudgetAccounts, getBudgetAccounts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountsReducer", function() { return accountsReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShowCreate", function() { return getShowCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsCreating", function() { return getIsCreating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccounts", function() { return getAccounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffBudgetAccounts", function() { return getOffBudgetAccounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBudgetAccounts", function() { return getBudgetAccounts; });
/* harmony import */ var _actions_accounts_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/accounts.actions */ "./src/app/core/actions/accounts.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _feature_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feature.selector */ "./src/app/core/reducers/feature.selector.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var initialState = {
    loading: false,
    creating: false,
    deleting: false,
    showCreate: false,
    accounts: [],
    activeAccountId: ""
};
function accountsReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_accounts_actions__WEBPACK_IMPORTED_MODULE_0__["AccountsActionTypes"].Load: {
            return __assign({}, state, { loading: true });
        }
        case _actions_accounts_actions__WEBPACK_IMPORTED_MODULE_0__["AccountsActionTypes"].LoadSuccess: {
            return __assign({}, state, { accounts: action.payload.accounts, loading: false });
        }
        case _actions_accounts_actions__WEBPACK_IMPORTED_MODULE_0__["AccountsActionTypes"].LoadFailure: {
            return __assign({}, state, { loading: false });
        }
        case _actions_accounts_actions__WEBPACK_IMPORTED_MODULE_0__["AccountsActionTypes"].ShowCreate: {
            return __assign({}, state, { showCreate: true });
        }
        case _actions_accounts_actions__WEBPACK_IMPORTED_MODULE_0__["AccountsActionTypes"].HideCreate: {
            return __assign({}, state, { showCreate: false });
        }
        case _actions_accounts_actions__WEBPACK_IMPORTED_MODULE_0__["AccountsActionTypes"].Create: {
            return __assign({}, state, { creating: true });
        }
        case _actions_accounts_actions__WEBPACK_IMPORTED_MODULE_0__["AccountsActionTypes"].CreateSuccess: {
            return __assign({}, state, { accounts: state.accounts.concat([action.payload.account]), creating: false, showCreate: false });
        }
        case _actions_accounts_actions__WEBPACK_IMPORTED_MODULE_0__["AccountsActionTypes"].CreateFailure: {
            return __assign({}, state, { creating: false });
        }
        default: {
            return state;
        }
    }
}
var accountsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(_feature_selector__WEBPACK_IMPORTED_MODULE_2__["coreFeatureSelector"], function (state) { return state.accounts; });
var getShowCreate = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(accountsState, function (state) { return state.showCreate; });
var getIsCreating = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(accountsState, function (state) { return state.creating; });
var getAccounts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(accountsState, function (state) { return state.accounts; });
var getOffBudgetAccounts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getAccounts, function (state) { return state.filter(function (s) { return !s.isBudget; }); });
var getBudgetAccounts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getAccounts, function (state) { return state.filter(function (s) { return s.isBudget; }); });


/***/ }),

/***/ "./src/app/core/reducers/budget.reducer.ts":
/*!*************************************************!*\
  !*** ./src/app/core/reducers/budget.reducer.ts ***!
  \*************************************************/
/*! exports provided: initialState, budgetsReducer, getShowCreate, getIsCreating, getDeletingBudget, getShowDelete, getIsDeleting, getBudgets, getActiveBudget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "budgetsReducer", function() { return budgetsReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShowCreate", function() { return getShowCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsCreating", function() { return getIsCreating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDeletingBudget", function() { return getDeletingBudget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShowDelete", function() { return getShowDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsDeleting", function() { return getIsDeleting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBudgets", function() { return getBudgets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveBudget", function() { return getActiveBudget; });
/* harmony import */ var _actions_budget_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/budget.actions */ "./src/app/core/actions/budget.actions.ts");
/* harmony import */ var _feature_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feature.selector */ "./src/app/core/reducers/feature.selector.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var initialState = {
    budgets: [],
    activeBudget: undefined,
    showCreateBudget: false,
    deletingBudget: undefined,
    deleting: false,
    creating: false
};
function budgetsReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_budget_actions__WEBPACK_IMPORTED_MODULE_0__["BudgetActionTypes"].LoadSuccess: {
            return __assign({}, state, { budgets: action.payload.budgets });
        }
        case _actions_budget_actions__WEBPACK_IMPORTED_MODULE_0__["BudgetActionTypes"].ShowDelete: {
            return __assign({}, state, { deletingBudget: action.payload.budget });
        }
        case _actions_budget_actions__WEBPACK_IMPORTED_MODULE_0__["BudgetActionTypes"].HideDelete: {
            return __assign({}, state, { deletingBudget: undefined });
        }
        case _actions_budget_actions__WEBPACK_IMPORTED_MODULE_0__["BudgetActionTypes"].Delete: {
            return __assign({}, state, { deleting: true });
        }
        case _actions_budget_actions__WEBPACK_IMPORTED_MODULE_0__["BudgetActionTypes"].DeleteSuccess: {
            return __assign({}, state, { budgets: state.budgets.filter(function (b) { return b.id !== action.payload.budget.id; }), deleting: false, deletingBudget: undefined });
        }
        case _actions_budget_actions__WEBPACK_IMPORTED_MODULE_0__["BudgetActionTypes"].DeleteFailure: {
            return __assign({}, state, { deleting: false });
        }
        case _actions_budget_actions__WEBPACK_IMPORTED_MODULE_0__["BudgetActionTypes"].ShowCreate: {
            return __assign({}, state, { showCreateBudget: true });
        }
        case _actions_budget_actions__WEBPACK_IMPORTED_MODULE_0__["BudgetActionTypes"].HideCreate: {
            return __assign({}, state, { showCreateBudget: false });
        }
        case _actions_budget_actions__WEBPACK_IMPORTED_MODULE_0__["BudgetActionTypes"].Create: {
            return __assign({}, state, { creating: true });
        }
        case _actions_budget_actions__WEBPACK_IMPORTED_MODULE_0__["BudgetActionTypes"].CreateSuccess: {
            return __assign({}, state, { budgets: state.budgets.concat([action.payload.budget]), creating: false, showCreateBudget: false });
        }
        case _actions_budget_actions__WEBPACK_IMPORTED_MODULE_0__["BudgetActionTypes"].CreateFailure: {
            return __assign({}, state, { creating: false });
        }
        case _actions_budget_actions__WEBPACK_IMPORTED_MODULE_0__["BudgetActionTypes"].LoadBudgetSuccess: {
            return __assign({}, state, { activeBudget: action.payload.budget });
        }
        default: {
            return state;
        }
    }
}
var budgetsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(_feature_selector__WEBPACK_IMPORTED_MODULE_1__["coreFeatureSelector"], function (state) { return state.budget; });
var getShowCreate = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(budgetsState, function (state) { return state.showCreateBudget; });
var getIsCreating = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(budgetsState, function (state) { return state.creating; });
var getDeletingBudget = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(budgetsState, function (state) { return state.deletingBudget; });
var getShowDelete = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(budgetsState, function (state) { return !!state.deletingBudget; });
var getIsDeleting = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(budgetsState, function (state) { return state.deleting; });
var getBudgets = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(budgetsState, function (state) { return state.budgets; });
var getActiveBudget = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(budgetsState, function (state) { return state.activeBudget; });


/***/ }),

/***/ "./src/app/core/reducers/envelopes.reducer.ts":
/*!****************************************************!*\
  !*** ./src/app/core/reducers/envelopes.reducer.ts ***!
  \****************************************************/
/*! exports provided: envelopesReducer, getEnvelopes, getAvailable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "envelopesReducer", function() { return envelopesReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnvelopes", function() { return getEnvelopes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAvailable", function() { return getAvailable; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _feature_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feature.selector */ "./src/app/core/reducers/feature.selector.ts");
/* harmony import */ var _actions_envelopes_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/envelopes.actions */ "./src/app/core/actions/envelopes.actions.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var initialState = {
    envelopes: [],
    available: 0
};
function envelopesReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_envelopes_actions__WEBPACK_IMPORTED_MODULE_2__["EnvelopesActionTypes"].LoadSuccess:
            return __assign({}, state, { envelopes: action.payload.envelopes, available: action.payload.available });
        default: {
            return state;
        }
    }
}
var envelopesState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_feature_selector__WEBPACK_IMPORTED_MODULE_1__["coreFeatureSelector"], function (state) { return state.envelopes; });
var getEnvelopes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(envelopesState, function (state) { return state.envelopes; });
var getAvailable = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(envelopesState, function (state) { return state.available; });


/***/ }),

/***/ "./src/app/core/reducers/feature.selector.ts":
/*!***************************************************!*\
  !*** ./src/app/core/reducers/feature.selector.ts ***!
  \***************************************************/
/*! exports provided: coreFeatureSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreFeatureSelector", function() { return coreFeatureSelector; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var coreFeatureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])("core");


/***/ }),

/***/ "./src/app/core/reducers/index.ts":
/*!****************************************!*\
  !*** ./src/app/core/reducers/index.ts ***!
  \****************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _budget_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./budget.reducer */ "./src/app/core/reducers/budget.reducer.ts");
/* harmony import */ var _accounts_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accounts.reducer */ "./src/app/core/reducers/accounts.reducer.ts");
/* harmony import */ var _transactions_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transactions.reducer */ "./src/app/core/reducers/transactions.reducer.ts");
/* harmony import */ var _envelopes_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./envelopes.reducer */ "./src/app/core/reducers/envelopes.reducer.ts");




var reducers = {
    budget: _budget_reducer__WEBPACK_IMPORTED_MODULE_0__["budgetsReducer"],
    accounts: _accounts_reducer__WEBPACK_IMPORTED_MODULE_1__["accountsReducer"],
    transactions: _transactions_reducer__WEBPACK_IMPORTED_MODULE_2__["transactionsReducer"],
    envelopes: _envelopes_reducer__WEBPACK_IMPORTED_MODULE_3__["envelopesReducer"]
};


/***/ }),

/***/ "./src/app/core/reducers/transactions.reducer.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/reducers/transactions.reducer.ts ***!
  \*******************************************************/
/*! exports provided: CreateTransactionMode, initialState, transactionsReducer, getTransactions, getIsCreateInflowTransactionOpen, getIsCreateOutflowTransactionOpen, getIsDeleting, getIsConfirmingDelete, getIsCreating, getSelectedTransactions, getPayees */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTransactionMode", function() { return CreateTransactionMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transactionsReducer", function() { return transactionsReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransactions", function() { return getTransactions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsCreateInflowTransactionOpen", function() { return getIsCreateInflowTransactionOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsCreateOutflowTransactionOpen", function() { return getIsCreateOutflowTransactionOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsDeleting", function() { return getIsDeleting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsConfirmingDelete", function() { return getIsConfirmingDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsCreating", function() { return getIsCreating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedTransactions", function() { return getSelectedTransactions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPayees", function() { return getPayees; });
/* harmony import */ var _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/transactions.actions */ "./src/app/core/actions/transactions.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _feature_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feature.selector */ "./src/app/core/reducers/feature.selector.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var CreateTransactionMode;
(function (CreateTransactionMode) {
    CreateTransactionMode["Inflow"] = "INFLOW";
    CreateTransactionMode["Outflow"] = "OUTFLOW";
})(CreateTransactionMode || (CreateTransactionMode = {}));
var initialState = {
    loading: false,
    creating: false,
    deleting: false,
    confirmingDelete: false,
    createTransactionInflowOpen: false,
    createTransactionOutflowOpen: false,
    transactions: [],
    payees: [],
    selectedTransactionIds: []
};
function transactionsReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_0__["TransactionsActionTypes"].LoadTransactions: {
            return __assign({}, state, { loading: true });
        }
        case _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_0__["TransactionsActionTypes"].LoadTransactionsSuccess: {
            return __assign({}, state, { transactions: action.payload.transactions, loading: false });
        }
        case _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_0__["TransactionsActionTypes"].LoadTransactionsFailure: {
            return __assign({}, state, { loading: false });
        }
        // Payees
        case _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_0__["TransactionsActionTypes"].LoadPayeesSuccess: {
            return __assign({}, state, { payees: action.payload.payees });
        }
        case _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_0__["TransactionsActionTypes"].ShowCreateTransaction: {
            return __assign({}, state, { createTransactionInflowOpen: action.payload.mode === CreateTransactionMode.Inflow, createTransactionOutflowOpen: action.payload.mode === CreateTransactionMode.Outflow });
        }
        case _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_0__["TransactionsActionTypes"].HideCreateTransaction: {
            return __assign({}, state, { createTransactionInflowOpen: false, createTransactionOutflowOpen: false });
        }
        case _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_0__["TransactionsActionTypes"].CreateTransaction: {
            return __assign({}, state, { creating: true });
        }
        case _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_0__["TransactionsActionTypes"].CreateTransactionSuccess: {
            var payees = void 0;
            // If there's a payee on the new transaction and we don't have it yet, save it.
            if (!!action.payload.transaction.payee && !state.payees.find(function (p) { return p.id === action.payload.transaction.payee.id; })) {
                payees = state.payees.concat([action.payload.transaction.payee]);
            }
            else {
                payees = state.payees;
            }
            return __assign({}, state, { transactions: state.transactions.concat([
                    action.payload.transaction
                ]), payees: payees, creating: false, createTransactionInflowOpen: false, createTransactionOutflowOpen: false });
        }
        case _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_0__["TransactionsActionTypes"].CreateTransactionFailure: {
            return __assign({}, state, { creating: false });
        }
        case _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_0__["TransactionsActionTypes"].UpdateTransaction: {
            return __assign({}, state, { creating: true });
        }
        case _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_0__["TransactionsActionTypes"].UpdateTransactionSuccess: {
            return __assign({}, state, { transactions: state.transactions.filter(function (t) { return t.id !== action.payload.transaction.id; }).concat([action.payload.transaction]), creating: false, createTransactionInflowOpen: false, createTransactionOutflowOpen: false });
        }
        case _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_0__["TransactionsActionTypes"].UpdateTransactionFailure: {
            return __assign({}, state, { creating: false });
        }
        case _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_0__["TransactionsActionTypes"].DeleteTransactions: {
            return __assign({}, state, { deleting: true });
        }
        case _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_0__["TransactionsActionTypes"].DeleteTransactionsSuccess: {
            return __assign({}, state, { transactions: state.transactions.filter(function (t) { return !action.payload.transactions.some(function (ts) { return ts.id === t.id; }); }), deleting: false, confirmingDelete: false });
        }
        case _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_0__["TransactionsActionTypes"].DeleteTransactionsFailure: {
            return __assign({}, state, { deleting: false });
        }
        case _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_0__["TransactionsActionTypes"].ConfirmTransactionsDelete: {
            return __assign({}, state, { confirmingDelete: true });
        }
        case _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_0__["TransactionsActionTypes"].CancelTransactionsDelete: {
            return __assign({}, state, { confirmingDelete: false });
        }
        case _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_0__["TransactionsActionTypes"].SetTransactionClearedSuccess: {
            var matchingTransaction = state.transactions.find(function (t) { return t.id === action.payload.transactionId; });
            if (!matchingTransaction)
                return state;
            return __assign({}, state, { transactions: state.transactions.filter(function (t) { return t.id !== action.payload.transactionId; }).concat([__assign({}, matchingTransaction, { isCleared: action.payload.isCleared })]) });
        }
        case _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_0__["TransactionsActionTypes"].SetTransactionClearedFailure: {
            var matchingTransaction = state.transactions.find(function (t) { return t.id === action.payload.transactionId; });
            if (!matchingTransaction)
                return state;
            return __assign({}, state, { transactions: state.transactions.filter(function (t) { return t.id !== action.payload.transactionId; }).concat([__assign({}, matchingTransaction, { isCleared: action.payload.originalState })]) });
        }
        case _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_0__["TransactionsActionTypes"].SelectTransaction: {
            if (state.selectedTransactionIds.indexOf(action.payload.transactionId) > -1)
                return state;
            return __assign({}, state, { selectedTransactionIds: state.selectedTransactionIds.concat([action.payload.transactionId]) });
        }
        case _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_0__["TransactionsActionTypes"].DeselectTransaction: {
            if (state.selectedTransactionIds.indexOf(action.payload.transactionId) === -1)
                return state;
            return __assign({}, state, { selectedTransactionIds: state.selectedTransactionIds.filter(function (t) { return t !== action.payload.transactionId; }) });
        }
        case _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_0__["TransactionsActionTypes"].SelectAllTransactions: {
            return __assign({}, state, { selectedTransactionIds: state.transactions.map(function (t) { return t.id; }) });
        }
        case _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_0__["TransactionsActionTypes"].DeselectAllTransactions: {
            return __assign({}, state, { selectedTransactionIds: [] });
        }
        default: {
            return state;
        }
    }
}
var transactionsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(_feature_selector__WEBPACK_IMPORTED_MODULE_2__["coreFeatureSelector"], function (state) { return state.transactions; });
var getTransactions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(transactionsState, function (state) { return state.transactions.slice().sort(function (a, b) {
    if (a.date < b.date)
        return -1;
    if (a.date > b.date)
        return 1;
    if (a.date === b.date && a.id < b.id)
        return -1;
    if (a.date === b.date && a.id > b.id)
        return 1;
    return 0;
}); });
var getIsCreateInflowTransactionOpen = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(transactionsState, function (state) { return state.createTransactionInflowOpen; });
var getIsCreateOutflowTransactionOpen = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(transactionsState, function (state) { return state.createTransactionOutflowOpen; });
var getIsDeleting = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(transactionsState, function (state) { return state.deleting; });
var getIsConfirmingDelete = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(transactionsState, function (state) { return state.confirmingDelete; });
var getIsCreating = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(transactionsState, function (state) { return state.creating; });
var getSelectedTransactions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(transactionsState, function (state) { return state.transactions.filter(function (t) { return state.selectedTransactionIds.indexOf(t.id) > -1; }); });
var getPayees = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(transactionsState, function (state) { return state.payees; });


/***/ }),

/***/ "./src/app/core/services/account.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/account.service.ts ***!
  \**************************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.base.service */ "./src/app/core/services/api.base.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/services/auth.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountService = /** @class */ (function (_super) {
    __extends(AccountService, _super);
    function AccountService(http, authService) {
        return _super.call(this, http, authService) || this;
    }
    AccountService.prototype.getAccounts = function (budgetId) {
        return this.get("account?budgetId=" + budgetId);
    };
    AccountService.prototype.createAccount = function (account) {
        return this.post("account?budgetId=" + account.budgetId, account);
    };
    AccountService.prototype.deleteAccount = function (account) {
        return this.delete("account/" + account.id);
    };
    AccountService.prototype.updateAccount = function (account) {
        return this.put("account", account);
    };
    AccountService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AccountService);
    return AccountService;
}(_api_base_service__WEBPACK_IMPORTED_MODULE_2__["ApiBaseService"]));



/***/ }),

/***/ "./src/app/core/services/api.base.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/api.base.service.ts ***!
  \***************************************************/
/*! exports provided: ApiBaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiBaseService", function() { return ApiBaseService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");

var ApiBaseService = /** @class */ (function () {
    function ApiBaseService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.baseApiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api_url;
    }
    ApiBaseService.prototype.get = function (url) {
        return this.http.get(this.baseApiUrl + url);
    };
    ApiBaseService.prototype.put = function (url, value) {
        return this.http.put(this.baseApiUrl + url, value);
    };
    ApiBaseService.prototype.post = function (url, value) {
        return this.http.post(this.baseApiUrl + url, value);
    };
    ApiBaseService.prototype.delete = function (url) {
        return this.http.delete(this.baseApiUrl + url);
    };
    ApiBaseService.prototype.deleteWithBody = function (url, value) {
        return this.http.request("delete", this.baseApiUrl + url, { body: value });
    };
    return ApiBaseService;
}());



/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications.service */ "./src/app/core/services/notifications.service.ts");
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! oidc-client */ "./node_modules/oidc-client/lib/oidc-client.min.js");
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(oidc_client__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http, router, notificationService) {
        this.router = router;
        this.notificationService = notificationService;
        this.config = {
            authority: "https://localhost:4400",
            client_id: "moneteer-spa",
            redirect_uri: "https://localhost:4200/auth-callback",
            response_type: "id_token token",
            scope: "openid profile email moneteer-api"
        };
        this.manager = new oidc_client__WEBPACK_IMPORTED_MODULE_4__["UserManager"](this.config);
        this.user = undefined;
    }
    AuthService.prototype.isAuthenticated = function () {
        return this.user !== undefined && !this.user.expired;
    };
    AuthService.prototype.getCookie = function (cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };
    AuthService.prototype.addAuthHeader = function (request) {
        var authHeader = this.getAuthorizationHeaderValue();
        if (!authHeader) {
            return request;
        }
        var changedRequest = request;
        var headerSettings = {};
        for (var _i = 0, _a = request.headers.keys(); _i < _a.length; _i++) {
            var key = _a[_i];
            var headers = request.headers.getAll(key);
            if (!!headers) {
                headerSettings[key] = headers;
            }
        }
        headerSettings.Authorization = authHeader;
        headerSettings["Content-Type"] = "application/json";
        var newHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headerSettings);
        changedRequest = request.clone({
            headers: newHeader
        });
        return changedRequest;
    };
    AuthService.prototype.getAuthorizationHeaderValue = function () {
        return this.user === undefined ? "" : "Bearer " + this.user.access_token;
    };
    AuthService.prototype.startAuthentication = function (targetUrl) {
        var _this = this;
        document.cookie = "redirectUrl=" + targetUrl + "; path=/;";
        this.manager.signinRedirect().catch(function (err) {
            _this.notificationService.errorModal("We were unable to log you in, sorry. Please try again and contact support if this problem persists.");
        });
    };
    AuthService.prototype.getUser = function () {
        return this.user;
    };
    AuthService.prototype.handleCallback = function () {
        var _this = this;
        this.manager.signinRedirectCallback().then(function (user) {
            _this.user = user;
            var redirectUrl = _this.getCookie("redirectUrl");
            if (redirectUrl) {
                _this.router.navigateByUrl(redirectUrl);
            }
            else {
                _this.router.navigate(["/"]);
            }
        }).catch(function (err) {
            _this.user = undefined;
            if (err.message === "No matching state found in storage") {
                // User might have refreshed the auth-callback page so send them back to the home page to re-auth
                _this.router.navigate(["/"]);
            }
            else {
                _this.notificationService.error("Something went wrong while trying to log you in.");
            }
        });
    };
    AuthService.prototype.logout = function () {
        this.manager.signoutRedirect();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _notifications_service__WEBPACK_IMPORTED_MODULE_3__["NotificationsService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/services/budget.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/budget.service.ts ***!
  \*************************************************/
/*! exports provided: BudgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetService", function() { return BudgetService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.base.service */ "./src/app/core/services/api.base.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/services/auth.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BudgetService = /** @class */ (function (_super) {
    __extends(BudgetService, _super);
    function BudgetService(http, authService) {
        return _super.call(this, http, authService) || this;
    }
    BudgetService.prototype.getBudget = function (budgetId) {
        return this.get("budget/" + budgetId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
    };
    BudgetService.prototype.getAllBudgets = function () {
        return this.get("budget").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
    };
    BudgetService.prototype.createBudget = function (budget) {
        return this.post("budget", budget).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
    };
    BudgetService.prototype.deleteBudget = function (budgetId) {
        return this.delete("budget/" + budgetId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function () { return budgetId; }));
    };
    BudgetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], BudgetService);
    return BudgetService;
}(_api_base_service__WEBPACK_IMPORTED_MODULE_3__["ApiBaseService"]));



/***/ }),

/***/ "./src/app/core/services/envelopes.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/envelopes.service.ts ***!
  \****************************************************/
/*! exports provided: EnvelopesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvelopesService", function() { return EnvelopesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.base.service */ "./src/app/core/services/api.base.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/services/auth.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EnvelopesService = /** @class */ (function (_super) {
    __extends(EnvelopesService, _super);
    function EnvelopesService(http, authService) {
        return _super.call(this, http, authService) || this;
    }
    EnvelopesService.prototype.getEnvelopesForBudget = function (budgetId) {
        return this.get("budget/" + budgetId + "/envelopes");
    };
    EnvelopesService.prototype.createEnvelope = function (budgetId, envelope) {
        return this.post("budget/" + budgetId + "/envelopes", envelope);
    };
    EnvelopesService.prototype.createEnvelopeCategory = function (budgetId, envelopeCategory) {
        return this.post("budget/" + budgetId + "/envelopes/category", envelopeCategory);
    };
    EnvelopesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], EnvelopesService);
    return EnvelopesService;
}(_api_base_service__WEBPACK_IMPORTED_MODULE_2__["ApiBaseService"]));



/***/ }),

/***/ "./src/app/core/services/index.ts":
/*!****************************************!*\
  !*** ./src/app/core/services/index.ts ***!
  \****************************************/
/*! exports provided: MediaQueryService, LoadingSpinnerService, NotificationsService, ApiBaseService, BudgetService, AccountService, EnvelopesService, PayeeService, TransactionService, AuthService, ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _media_query_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media.query.service */ "./src/app/core/services/media.query.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaQueryService", function() { return _media_query_service__WEBPACK_IMPORTED_MODULE_0__["MediaQueryService"]; });

/* harmony import */ var _loading_spinner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.spinner.service */ "./src/app/core/services/loading.spinner.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerService", function() { return _loading_spinner_service__WEBPACK_IMPORTED_MODULE_1__["LoadingSpinnerService"]; });

/* harmony import */ var _notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifications.service */ "./src/app/core/services/notifications.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return _notifications_service__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"]; });

/* harmony import */ var _api_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.base.service */ "./src/app/core/services/api.base.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiBaseService", function() { return _api_base_service__WEBPACK_IMPORTED_MODULE_3__["ApiBaseService"]; });

/* harmony import */ var _budget_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./budget.service */ "./src/app/core/services/budget.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BudgetService", function() { return _budget_service__WEBPACK_IMPORTED_MODULE_4__["BudgetService"]; });

/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account.service */ "./src/app/core/services/account.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return _account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"]; });

/* harmony import */ var _envelopes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./envelopes.service */ "./src/app/core/services/envelopes.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnvelopesService", function() { return _envelopes_service__WEBPACK_IMPORTED_MODULE_6__["EnvelopesService"]; });

/* harmony import */ var _payee_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./payee.service */ "./src/app/core/services/payee.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PayeeService", function() { return _payee_service__WEBPACK_IMPORTED_MODULE_7__["PayeeService"]; });

/* harmony import */ var _transaction_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./transaction.service */ "./src/app/core/services/transaction.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionService", function() { return _transaction_service__WEBPACK_IMPORTED_MODULE_8__["TransactionService"]; });

/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modal.service */ "./src/app/core/services/modal.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return _modal_service__WEBPACK_IMPORTED_MODULE_10__["ModalService"]; });















/***/ }),

/***/ "./src/app/core/services/loading.spinner.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/services/loading.spinner.service.ts ***!
  \**********************************************************/
/*! exports provided: LoadingSpinnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerService", function() { return LoadingSpinnerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LoadingSpinnerService = /** @class */ (function () {
    function LoadingSpinnerService() {
        this.loading = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    LoadingSpinnerService.prototype.startSpinning = function () {
        this.loading.next(true);
    };
    LoadingSpinnerService.prototype.stopSpinning = function () {
        this.loading.next(false);
    };
    LoadingSpinnerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], LoadingSpinnerService);
    return LoadingSpinnerService;
}());



/***/ }),

/***/ "./src/app/core/services/media.query.service.ts":
/*!******************************************************!*\
  !*** ./src/app/core/services/media.query.service.ts ***!
  \******************************************************/
/*! exports provided: MediaQueryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaQueryService", function() { return MediaQueryService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/index */ "./src/app/shared/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MediaQueryService = /** @class */ (function () {
    function MediaQueryService() {
        this.mediaSize = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]();
        /*fromEvent(window, "resize").
            startWith()
            .subscribe((event: any) => {
                const screenSize: ScreenSize = this.getScreenSizeFromWidth(event.target.innerWidth);
                this.mediaSize.next(screenSize);
            });*/
    }
    MediaQueryService.prototype.getScreenSizeFromWidth = function (width) {
        if (width >= 0 && width < 935) {
            return _shared_models_index__WEBPACK_IMPORTED_MODULE_2__["ScreenSize"].xs;
        }
        else if (width >= 935 && width < 1195) {
            return _shared_models_index__WEBPACK_IMPORTED_MODULE_2__["ScreenSize"].s;
        }
        else if (width >= 1195 && width < 1455) {
            return _shared_models_index__WEBPACK_IMPORTED_MODULE_2__["ScreenSize"].m;
        }
        else if (width >= 1455 && width < 1720) {
            return _shared_models_index__WEBPACK_IMPORTED_MODULE_2__["ScreenSize"].l;
        }
        else if (width >= 1720) {
            return _shared_models_index__WEBPACK_IMPORTED_MODULE_2__["ScreenSize"].xl;
        }
        else {
            return _shared_models_index__WEBPACK_IMPORTED_MODULE_2__["ScreenSize"].xl;
        }
    };
    MediaQueryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MediaQueryService);
    return MediaQueryService;
}());



/***/ }),

/***/ "./src/app/core/services/modal.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/modal.service.ts ***!
  \************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
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

var ModalService = /** @class */ (function () {
    function ModalService() {
    }
    ModalService.prototype.showError = function (error, title) {
        this.open = true;
        this.message = error;
        this.title = title;
    };
    ModalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./src/app/core/services/notifications.service.ts":
/*!********************************************************!*\
  !*** ./src/app/core/services/notifications.service.ts ***!
  \********************************************************/
/*! exports provided: NotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return NotificationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.service */ "./src/app/core/services/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationsService = /** @class */ (function () {
    function NotificationsService(toastsManager, modalService) {
        this.toastsManager = toastsManager;
        this.modalService = modalService;
    }
    NotificationsService.prototype.success = function (message, title) {
        if (title === void 0) { title = ""; }
        this.toastsManager.success(message, title);
    };
    NotificationsService.prototype.error = function (message, title) {
        if (title === void 0) { title = ""; }
        this.toastsManager.error(message, title);
    };
    NotificationsService.prototype.errorModal = function (message, title) {
        if (title === void 0) { title = ""; }
        this.modalService.showError(message, "Oh snap!");
    };
    NotificationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], _modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]])
    ], NotificationsService);
    return NotificationsService;
}());



/***/ }),

/***/ "./src/app/core/services/payee.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/payee.service.ts ***!
  \************************************************/
/*! exports provided: PayeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayeeService", function() { return PayeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.base.service */ "./src/app/core/services/api.base.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/services/auth.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PayeeService = /** @class */ (function (_super) {
    __extends(PayeeService, _super);
    function PayeeService(http, authService) {
        return _super.call(this, http, authService) || this;
    }
    PayeeService.prototype.deletePayee = function (payeeId) {
        return this.delete("payee/" + payeeId);
    };
    PayeeService.prototype.updatePayee = function (payee) {
        return this.put("payee", payee);
    };
    PayeeService.prototype.getAllPayeesByBudget = function (budgetId) {
        return this.get("budget/" + budgetId + "/payees");
    };
    PayeeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], PayeeService);
    return PayeeService;
}(_api_base_service__WEBPACK_IMPORTED_MODULE_2__["ApiBaseService"]));



/***/ }),

/***/ "./src/app/core/services/transaction.service.ts":
/*!******************************************************!*\
  !*** ./src/app/core/services/transaction.service.ts ***!
  \******************************************************/
/*! exports provided: TransactionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionService", function() { return TransactionService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../core/models */ "./src/app/core/models/index.ts");
/* harmony import */ var _api_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api.base.service */ "./src/app/core/services/api.base.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TransactionService = /** @class */ (function (_super) {
    __extends(TransactionService, _super);
    function TransactionService(http, authService, store) {
        var _this = _super.call(this, http, authService) || this;
        _this.store = store;
        return _this;
    }
    TransactionService.prototype.getTransactionsForBudget = function (budgetId) {
        var _this = this;
        return this.get("budget/" + budgetId + "/transactions").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (t) { return _this.processTransactions(t); }));
    };
    TransactionService.prototype.getTransactionsForAccount = function (accountId) {
        var _this = this;
        return this.get("account/" + accountId + "/transactions").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (t) { return _this.processTransactions(t); }));
    };
    TransactionService.prototype.deleteTransactions = function (transactions) {
        if (!transactions || transactions.length === 0) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["empty"])();
        }
        var transactionIds = transactions.map(function (t) { return t.id; });
        return this.deleteWithBody("transaction", transactionIds).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () { return transactions; }));
    };
    TransactionService.prototype.createTransaction = function (transactionModel) {
        var _this = this;
        this.validateTransaction(transactionModel);
        return this.post("transaction", transactionModel).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (t) { return _this.processTransaction(t); }));
    };
    TransactionService.prototype.editTransaction = function (transactionModel) {
        var _this = this;
        this.validateTransaction(transactionModel);
        return this.put("transaction", transactionModel).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (t) {
            return _this.processTransaction(t);
        }));
    };
    TransactionService.prototype.setTransactionIsCleared = function (transactionId, isCleared) {
        if (!transactionId) {
            throw new Error("transactionId must be set");
        }
        return this.put("transaction/" + transactionId, { isCleared: isCleared, transactionId: transactionId });
    };
    TransactionService.prototype.editPayee = function (payeeModel) {
        if (!payeeModel) {
            throw new Error("payeeModel must be set");
        }
        if (!payeeModel.name) {
            throw new Error("payeeModel.name must be set");
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(payeeModel);
    };
    TransactionService.prototype.getPayees = function (budgetId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(new Array());
    };
    TransactionService.prototype.processTransactions = function (transactions) {
        var _this = this;
        transactions.map(function (t) { return _this.processTransaction(t); });
        return transactions;
    };
    TransactionService.prototype.processTransaction = function (transaction) {
        if (!transaction) {
            throw new Error("transaction must be provided");
        }
        transaction.date = new Date(transaction.date);
        if (!transaction.assignments || transaction.assignments.length === 0) {
            transaction.envelope = undefined;
        }
        else if (transaction.assignments.length === 1) {
            transaction.envelope = transaction.assignments[0].envelope;
        }
        else if (transaction.assignments.length > 1) {
            transaction.envelope = new _core_models__WEBPACK_IMPORTED_MODULE_4__["EnvelopeModel"]("Multiple Categories");
            transaction.envelope.id = "SplitCategory";
        }
        return transaction;
    };
    TransactionService.prototype.validateTransaction = function (model) {
        if (!model) {
            throw new Error("transactionModel must be set");
        }
        if (!model.account) {
            throw new Error("transaction.account must be set");
        }
        if (!model.account.id) {
            throw new Error("transaction.account.uuid must be set");
        }
        if (model.inflow && model.outflow) {
            throw new Error("Cannot have a transaction as both inflow and outflow");
        }
        if (!model.inflow && !model.outflow) {
            throw new Error("Must specify either inflow or outflow");
        }
        if (model.account && model.targetAccount && model.account.id === model.targetAccount.id) {
            throw new Error("Cannot transfer to the same account");
        }
    };
    TransactionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]])
    ], TransactionService);
    return TransactionService;
}(_api_base_service__WEBPACK_IMPORTED_MODULE_5__["ApiBaseService"]));



/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngrx-store-freeze */ "./node_modules/ngrx-store-freeze/index.js");
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");



var reducers = {
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_2__["routerReducer"]
};
var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production
    ? [ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_0__["storeFreeze"]]
    : [];


/***/ }),

/***/ "./src/app/routing/app-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/routing/app-routing.module.ts ***!
  \***********************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_components_auth_callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/components/auth-callback/auth-callback.component */ "./src/app/core/components/auth-callback/auth-callback.component.ts");
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/guards/auth.guard */ "./src/app/core/guards/auth.guard.ts");
/* harmony import */ var _resolvers_budgets_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolvers/budgets.resolver */ "./src/app/routing/resolvers/budgets.resolver.ts");
/* harmony import */ var _resolvers_budget_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resolvers/budget.resolver */ "./src/app/routing/resolvers/budget.resolver.ts");
/* harmony import */ var _resolvers_accounts_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resolvers/accounts.resolver */ "./src/app/routing/resolvers/accounts.resolver.ts");
/* harmony import */ var _resolvers_transactions_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resolvers/transactions.resolver */ "./src/app/routing/resolvers/transactions.resolver.ts");
/* harmony import */ var _resolvers_payees_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resolvers/payees.resolver */ "./src/app/routing/resolvers/payees.resolver.ts");
/* harmony import */ var _resolvers_envelopes_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resolvers/envelopes.resolver */ "./src/app/routing/resolvers/envelopes.resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: "auth-callback", component: _core_components_auth_callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_2__["AuthCallbackComponent"] },
    { path: "budget", loadChildren: "./../budget/budget.module#BudgetModule", canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: "**", redirectTo: "budget" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { enableTracing: true }),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [
                _resolvers_budgets_resolver__WEBPACK_IMPORTED_MODULE_4__["BudgetsResolver"],
                _resolvers_budget_resolver__WEBPACK_IMPORTED_MODULE_5__["BudgetResolver"],
                _resolvers_accounts_resolver__WEBPACK_IMPORTED_MODULE_6__["AccountsResolver"],
                _resolvers_transactions_resolver__WEBPACK_IMPORTED_MODULE_7__["TransactionsResolver"],
                _resolvers_payees_resolver__WEBPACK_IMPORTED_MODULE_8__["PayeesResolver"],
                _resolvers_envelopes_resolver__WEBPACK_IMPORTED_MODULE_9__["EnvelopesResolver"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/routing/resolvers/accounts.resolver.ts":
/*!********************************************************!*\
  !*** ./src/app/routing/resolvers/accounts.resolver.ts ***!
  \********************************************************/
/*! exports provided: AccountsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsResolver", function() { return AccountsResolver; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _core_actions_accounts_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/actions/accounts.actions */ "./src/app/core/actions/accounts.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccountsResolver = /** @class */ (function () {
    function AccountsResolver(store, actions$) {
        this.store = store;
        this.actions$ = actions$;
    }
    AccountsResolver.prototype.resolve = function (route, state) {
        if (!route.params || !route.params.budgetId) {
            throw new Error("Unable to find budgetId from route");
        }
        var budgetId = route.params.budgetId;
        this.store.dispatch(new _core_actions_accounts_actions__WEBPACK_IMPORTED_MODULE_5__["LoadAccountsAction"]({ budgetId: budgetId }));
        var success = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_core_actions_accounts_actions__WEBPACK_IMPORTED_MODULE_5__["AccountsActionTypes"].LoadSuccess), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (action) { return action.payload.accounts; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
        var failure = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_core_actions_accounts_actions__WEBPACK_IMPORTED_MODULE_5__["AccountsActionTypes"].LoadFailure), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function (action) { throw new Error(action.payload.error); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["race"])(success, failure);
    };
    AccountsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]])
    ], AccountsResolver);
    return AccountsResolver;
}());



/***/ }),

/***/ "./src/app/routing/resolvers/budget.resolver.ts":
/*!******************************************************!*\
  !*** ./src/app/routing/resolvers/budget.resolver.ts ***!
  \******************************************************/
/*! exports provided: BudgetResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetResolver", function() { return BudgetResolver; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _core_actions_budget_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/actions/budget.actions */ "./src/app/core/actions/budget.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BudgetResolver = /** @class */ (function () {
    function BudgetResolver(store, actions$) {
        this.store = store;
        this.actions$ = actions$;
    }
    BudgetResolver.prototype.resolve = function (route, state) {
        if (!route.params || !route.params.budgetId) {
            throw new Error("Unable to find budgetId from route");
        }
        var budgetId = route.params.budgetId;
        this.store.dispatch(new _core_actions_budget_actions__WEBPACK_IMPORTED_MODULE_5__["LoadBudgetAction"]({ budgetId: budgetId }));
        var success = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_core_actions_budget_actions__WEBPACK_IMPORTED_MODULE_5__["BudgetActionTypes"].LoadBudgetSuccess), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (action) { return action.payload.budget; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])());
        var failure = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_core_actions_budget_actions__WEBPACK_IMPORTED_MODULE_5__["BudgetActionTypes"].LoadBudgetFailure), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (action) { throw new Error(action.payload.error); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])());
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["race"])(success, failure);
    };
    BudgetResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]])
    ], BudgetResolver);
    return BudgetResolver;
}());



/***/ }),

/***/ "./src/app/routing/resolvers/budgets.resolver.ts":
/*!*******************************************************!*\
  !*** ./src/app/routing/resolvers/budgets.resolver.ts ***!
  \*******************************************************/
/*! exports provided: BudgetsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetsResolver", function() { return BudgetsResolver; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _core_actions_budget_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/actions/budget.actions */ "./src/app/core/actions/budget.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BudgetsResolver = /** @class */ (function () {
    function BudgetsResolver(store, actions$) {
        this.store = store;
        this.actions$ = actions$;
    }
    BudgetsResolver.prototype.resolve = function (route, state) {
        this.store.dispatch(new _core_actions_budget_actions__WEBPACK_IMPORTED_MODULE_5__["LoadBudgetsAction"]());
        var success = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_core_actions_budget_actions__WEBPACK_IMPORTED_MODULE_5__["BudgetActionTypes"].LoadSuccess), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (action) { return action.payload.budgets; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
        var failure = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_core_actions_budget_actions__WEBPACK_IMPORTED_MODULE_5__["BudgetActionTypes"].LoadFailure), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function (action) { throw new Error(action.payload.error); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["race"])(success, failure);
    };
    BudgetsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]])
    ], BudgetsResolver);
    return BudgetsResolver;
}());



/***/ }),

/***/ "./src/app/routing/resolvers/envelopes.resolver.ts":
/*!*********************************************************!*\
  !*** ./src/app/routing/resolvers/envelopes.resolver.ts ***!
  \*********************************************************/
/*! exports provided: EnvelopesResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvelopesResolver", function() { return EnvelopesResolver; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _core_actions_envelopes_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/actions/envelopes.actions */ "./src/app/core/actions/envelopes.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EnvelopesResolver = /** @class */ (function () {
    function EnvelopesResolver(store, actions$) {
        this.store = store;
        this.actions$ = actions$;
    }
    EnvelopesResolver.prototype.resolve = function (route, state) {
        if (!route.parent || !route.parent.parent || !route.parent.parent.params || !route.parent.parent.params.budgetId) {
            throw new Error("Unable to find budgetId from route");
        }
        var budgetId = route.parent.parent.params.budgetId;
        this.store.dispatch(new _core_actions_envelopes_actions__WEBPACK_IMPORTED_MODULE_4__["LoadEnvelopesAction"]({ budgetId: budgetId }));
        var success = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_core_actions_envelopes_actions__WEBPACK_IMPORTED_MODULE_4__["EnvelopesActionTypes"].LoadSuccess), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (action) { return action.payload.envelopes; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
        var failure = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_core_actions_envelopes_actions__WEBPACK_IMPORTED_MODULE_4__["EnvelopesActionTypes"].LoadFailure), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (action) { throw new Error(action.payload.error); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
        return success;
    };
    EnvelopesResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]])
    ], EnvelopesResolver);
    return EnvelopesResolver;
}());



/***/ }),

/***/ "./src/app/routing/resolvers/payees.resolver.ts":
/*!******************************************************!*\
  !*** ./src/app/routing/resolvers/payees.resolver.ts ***!
  \******************************************************/
/*! exports provided: PayeesResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayeesResolver", function() { return PayeesResolver; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _core_actions_transactions_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/actions/transactions.actions */ "./src/app/core/actions/transactions.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators/switchMap */ "./node_modules/rxjs/internal/operators/switchMap.js");
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PayeesResolver = /** @class */ (function () {
    function PayeesResolver(store, actions$) {
        this.store = store;
        this.actions$ = actions$;
    }
    PayeesResolver.prototype.resolve = function (route, state) {
        if (!route.params || !route.params.budgetId) {
            throw new Error("Unable to find budgetId from route");
        }
        var budgetId = route.params.budgetId;
        this.store.dispatch(new _core_actions_transactions_actions__WEBPACK_IMPORTED_MODULE_4__["LoadPayeesAction"]({ budgetId: budgetId }));
        var success = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_core_actions_transactions_actions__WEBPACK_IMPORTED_MODULE_4__["TransactionsActionTypes"].LoadPayeesSuccess), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload.payees; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])());
        var failure = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_core_actions_transactions_actions__WEBPACK_IMPORTED_MODULE_4__["TransactionsActionTypes"].LoadPayeesFailure), Object(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (action) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(action.payload.error); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])());
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["race"])(success, failure);
    };
    PayeesResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]])
    ], PayeesResolver);
    return PayeesResolver;
}());



/***/ }),

/***/ "./src/app/routing/resolvers/transactions.resolver.ts":
/*!************************************************************!*\
  !*** ./src/app/routing/resolvers/transactions.resolver.ts ***!
  \************************************************************/
/*! exports provided: TransactionsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsResolver", function() { return TransactionsResolver; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_actions_transactions_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/actions/transactions.actions */ "./src/app/core/actions/transactions.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TransactionsResolver = /** @class */ (function () {
    function TransactionsResolver(store, actions$) {
        this.store = store;
        this.actions$ = actions$;
    }
    TransactionsResolver.prototype.resolve = function (route, state) {
        if (!route.parent || !route.parent.parent || !route.parent.parent.params || !route.parent.parent.params.budgetId) {
            throw new Error("Unable to find budgetId from route");
        }
        var budgetId = route.parent.parent.params.budgetId;
        this.store.dispatch(new _core_actions_transactions_actions__WEBPACK_IMPORTED_MODULE_5__["LoadTransactionsAction"]({ budgetId: budgetId }));
        var success = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_core_actions_transactions_actions__WEBPACK_IMPORTED_MODULE_5__["TransactionsActionTypes"].LoadTransactionsSuccess), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload.transactions; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])());
        var failure = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_core_actions_transactions_actions__WEBPACK_IMPORTED_MODULE_5__["TransactionsActionTypes"].LoadTransactionsFailure), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) { throw new Error(action.payload.error); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])());
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["race"])(success, failure);
    };
    TransactionsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]])
    ], TransactionsResolver);
    return TransactionsResolver;
}());



/***/ }),

/***/ "./src/app/shared/components/currency-edit-component/currency.edit.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/currency-edit-component/currency.edit.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n  overflow: hidden;\n  height: 100%;\n}\n\nbody {\n  height: 100%;\n}\n\n.is-good {\n  color: #318700;\n}\n\n.is-bad {\n  color: #c92100;\n}\n\n.badge.badge-success {\n  color: #fff;\n}\n\n.container {\n  margin: 40px;\n}\n\n/* TRANSACTION TABLE */\n\n.transaction-row {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  flex-shrink: 0;\n  height: 1.15rem;\n  padding-top: 1px;\n}\n\n.selected, .editing {\n  background-color: #CFD8DC;\n  cursor: text;\n}\n\n.transaction-cell--date {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--account {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--category {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--flow {\n  flex: 0 1 100px;\n  text-align: right;\n}\n\n.transaction-cell--cleared {\n  flex: 0 1 60px;\n}\n\n.transaction-cell--description {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--payee {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--selected {\n  flex: 0 1 30px;\n  padding-left: 8px;\n}\n\ninput {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY3VycmVuY3ktZWRpdC1jb21wb25lbnQvRDpcXGdpdFxcbW9uZXRlZXJcXG1vbmV0ZWVyLWZyb250ZW5kL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGN1cnJlbmN5LWVkaXQtY29tcG9uZW50XFxjdXJyZW5jeS5lZGl0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9jdXJyZW5jeS1lZGl0LWNvbXBvbmVudC9jdXJyZW5jeS5lZGl0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9jdXJyZW5jeS1lZGl0LWNvbXBvbmVudC9EOlxcZ2l0XFxtb25ldGVlclxcbW9uZXRlZXItZnJvbnRlbmQvc3RkaW4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FDbEJKOztBRHFCQTtFQUNFLFlBQUE7QUNsQkY7O0FEcUJBO0VBQ0UsY0FwQnFCO0FDRXZCOztBRHFCQTtFQUNFLGNBdkJxQjtBQ0t2Qjs7QURxQkE7RUFDRSxXQUFBO0FDbEJGOztBRHFCQTtFQUNFLFlBQUE7QUNsQkY7O0FEcUJBLHNCQUFBOztBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDbEJKOztBRHFCQTtFQUNJLHlCQXJEbUI7RUFzRG5CLFlBQUE7QUNsQko7O0FEcUJBO0VBQ0ksZUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0FDbEJKOztBRHFCQTtFQUNJLGVBQUE7QUNsQko7O0FEcUJBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDbEJKOztBRHFCQTtFQUNJLGNBQUE7QUNsQko7O0FEcUJBO0VBQ0ksZUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0FDbEJKOztBRHFCQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ2xCSjs7QUN0RUE7RUFDSSxXQUFBO0FEeUVKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY3VycmVuY3ktZWRpdC1jb21wb25lbnQvY3VycmVuY3kuZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5LWNvbG9yLWRhcms6ICAgIzQ1NUE2NDtcclxuJHByaW1hcnktY29sb3I6ICAgICAgICAjNjA3RDhCO1xyXG4kcHJpbWFyeS1jb2xvci1saWdodDogICNDRkQ4REM7XHJcbiRwcmltYXJ5LWNvbG9yLXRleHQ6ICAgI0ZGRkZGRjtcclxuJGFjY2VudC1jb2xvcjogICAgICAgICAjRkZDMTA3O1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAgICMyMTIxMjE7XHJcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogIzc1NzU3NTtcclxuJGRpdmlkZXItY29sb3I6ICAgICAgICAjQkRCREJEO1xyXG5cclxuJG1vbmV5LWdvb2Q6ICAgICAgICAgICAjMzE4NzAwO1xyXG4kbW9uZXktYmFkOiAgICAgICAgICAgICNjOTIxMDA7XHJcblxyXG4kbW9uZXktZ29vZC1zYXR1cmF0ZWQ6ICMwMEZGQzg7XHJcbiRtb25leS1iYWQtc2F0dXJhdGVkOiAgI0ZGNTU0MDtcclxuXHJcbiRlcnJvcjogICAgICAgICAgICAgICAgI2NjMDAwMDtcclxuXHJcbiRwcmltYXJ5OiAkcHJpbWFyeS1jb2xvcjtcclxuXHJcbmh0bWwge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uaXMtZ29vZCB7XHJcbiAgY29sb3I6ICRtb25leS1nb29kO1xyXG59XHJcblxyXG4uaXMtYmFkIHtcclxuICBjb2xvcjogJG1vbmV5LWJhZDtcclxufVxyXG5cclxuLmJhZGdlLmJhZGdlLXN1Y2Nlc3Mge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW46IDQwcHg7XHJcbn1cclxuXHJcbi8qIFRSQU5TQUNUSU9OIFRBQkxFICovXHJcbi50cmFuc2FjdGlvbi1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgaGVpZ2h0OiAxLjE1cmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxufVxyXG5cclxuLnNlbGVjdGVkLCAuZWRpdGluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvci1saWdodDtcclxuICAgIGN1cnNvcjogdGV4dDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLWRhdGUge1xyXG4gICAgZmxleDogMSAxIDEyMHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tYWNjb3VudCB7XHJcbiAgICBmbGV4OiAxIDEgMTIwcHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1jYXRlZ29yeSB7XHJcbiAgICBmbGV4OiAxIDEgMTIwcHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1mbG93IHtcclxuICAgIGZsZXg6IDAgMSAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tY2xlYXJlZCB7XHJcbiAgICBmbGV4OiAwIDEgNjBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLWRlc2NyaXB0aW9uIHtcclxuICAgIGZsZXg6IDEgMSAxMjBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLXBheWVlIHtcclxuICAgIGZsZXg6IDEgMSAxMjBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLXNlbGVjdGVkIHtcclxuICAgIGZsZXg6IDAgMSAzMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbn0iLCJodG1sIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaXMtZ29vZCB7XG4gIGNvbG9yOiAjMzE4NzAwO1xufVxuXG4uaXMtYmFkIHtcbiAgY29sb3I6ICNjOTIxMDA7XG59XG5cbi5iYWRnZS5iYWRnZS1zdWNjZXNzIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW46IDQwcHg7XG59XG5cbi8qIFRSQU5TQUNUSU9OIFRBQkxFICovXG4udHJhbnNhY3Rpb24tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBoZWlnaHQ6IDEuMTVyZW07XG4gIHBhZGRpbmctdG9wOiAxcHg7XG59XG5cbi5zZWxlY3RlZCwgLmVkaXRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDO1xuICBjdXJzb3I6IHRleHQ7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1kYXRlIHtcbiAgZmxleDogMSAxIDEyMHB4O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tYWNjb3VudCB7XG4gIGZsZXg6IDEgMSAxMjBweDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLWNhdGVnb3J5IHtcbiAgZmxleDogMSAxIDEyMHB4O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tZmxvdyB7XG4gIGZsZXg6IDAgMSAxMDBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1jbGVhcmVkIHtcbiAgZmxleDogMCAxIDYwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1kZXNjcmlwdGlvbiB7XG4gIGZsZXg6IDEgMSAxMjBweDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLXBheWVlIHtcbiAgZmxleDogMSAxIDEyMHB4O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tc2VsZWN0ZWQge1xuICBmbGV4OiAwIDEgMzBweDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5cbmlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG59IiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuXHJcbmlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/currency-edit-component/currency.edit.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/currency-edit-component/currency.edit.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CURRENCY_EDIT_CONTROL_VALUE_ACCESSOR, CurrencyEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENCY_EDIT_CONTROL_VALUE_ACCESSOR", function() { return CURRENCY_EDIT_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyEditComponent", function() { return CurrencyEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CURRENCY_EDIT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return CurrencyEditComponent; }),
    multi: true
};
var CurrencyEditComponent = /** @class */ (function () {
    function CurrencyEditComponent(changeDetector, zone, element) {
        this.changeDetector = changeDetector;
        this.zone = zone;
        this.element = element;
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
        this.allowZeros = false;
        this.allowNegative = false;
    }
    CurrencyEditComponent.prototype.getSanitizedFromEvent = function (value) {
        var newValue = value.replace(/[^0-9-.]/g, "");
        var toNumber = this.toNumber(newValue);
        var sanitizedNewValue = this.sanitizeInput(toNumber);
        if (!this.allowNegative) {
            sanitizedNewValue = Math.abs(sanitizedNewValue);
        }
        return sanitizedNewValue;
    };
    CurrencyEditComponent.prototype.onChange = function (newValue) {
        var sanitizedNewValue = this.getSanitizedFromEvent(newValue);
        this.value = sanitizedNewValue;
    };
    CurrencyEditComponent.prototype.toNumber = function (input) {
        return Number(input);
    };
    CurrencyEditComponent.prototype.sanitizeInput = function (input) {
        if (!input) {
            return 0;
        }
        var toFloat = Number(input.toFixed(2));
        return !toFloat ? 0 : toFloat;
    };
    CurrencyEditComponent.prototype.toStringSafe = function (input) {
        if (!input || input === 0 || typeof input !== "number") {
            if (this.allowZeros) {
                return "0";
            }
            else {
                return "";
            }
        }
        return input.toFixed(2);
    };
    Object.defineProperty(CurrencyEditComponent.prototype, "value", {
        // get accessor
        get: function () {
            return this.currencyValue;
        },
        // set accessor including call the onchange callback
        set: function (value) {
            var stringSafeValue = this.toStringSafe(value);
            if (value !== this.currencyValue) {
                this.currencyValue = value;
                this.inputValue = stringSafeValue;
                this.onChangeCallback(value);
            }
            else {
                // we must set the value manually on the DOM
                // because it hasn't changed, angular won't update it.
                this.inputElement.nativeElement.value = stringSafeValue;
            }
        },
        enumerable: true,
        configurable: true
    });
    // from ControlValueAccessor interface
    CurrencyEditComponent.prototype.writeValue = function (value) {
        if (value !== this.currencyValue) {
            this.currencyValue = value;
            this.inputValue = this.toStringSafe(value);
        }
    };
    // from ControlValueAccessor interface
    CurrencyEditComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    // from ControlValueAccessor interface
    CurrencyEditComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CurrencyEditComponent.prototype, "allowZeros", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CurrencyEditComponent.prototype, "allowNegative", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("inputBox", { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CurrencyEditComponent.prototype, "inputElement", void 0);
    CurrencyEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "moneteer-currency-input",
            template: __webpack_require__(/*! raw-loader!./currency.edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/currency-edit-component/currency.edit.component.html"),
            providers: [CURRENCY_EDIT_CONTROL_VALUE_ACCESSOR],
            styles: [__webpack_require__(/*! ./currency.edit.component.scss */ "./src/app/shared/components/currency-edit-component/currency.edit.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], CurrencyEditComponent);
    return CurrencyEditComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/dropdown-component/dropdown.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/dropdown-component/dropdown.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n  overflow: hidden;\n  height: 100%;\n}\n\nbody {\n  height: 100%;\n}\n\n.is-good {\n  color: #318700;\n}\n\n.is-bad {\n  color: #c92100;\n}\n\n.badge.badge-success {\n  color: #fff;\n}\n\n.container {\n  margin: 40px;\n}\n\n/* TRANSACTION TABLE */\n\n.transaction-row {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  flex-shrink: 0;\n  height: 1.15rem;\n  padding-top: 1px;\n}\n\n.selected, .editing {\n  background-color: #CFD8DC;\n  cursor: text;\n}\n\n.transaction-cell--date {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--account {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--category {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--flow {\n  flex: 0 1 100px;\n  text-align: right;\n}\n\n.transaction-cell--cleared {\n  flex: 0 1 60px;\n}\n\n.transaction-cell--description {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--payee {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--selected {\n  flex: 0 1 30px;\n  padding-left: 8px;\n}\n\ndiv {\n  min-width: 250px;\n  max-height: 250px;\n  min-height: 100px;\n  overflow-y: auto;\n  font-size: 0.8rem;\n  position: relative;\n}\n\n#dropDownContent {\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZHJvcGRvd24tY29tcG9uZW50L0Q6XFxnaXRcXG1vbmV0ZWVyXFxtb25ldGVlci1mcm9udGVuZC9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxkcm9wZG93bi1jb21wb25lbnRcXGRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9kcm9wZG93bi1jb21wb25lbnQvZHJvcGRvd24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Ryb3Bkb3duLWNvbXBvbmVudC9EOlxcZ2l0XFxtb25ldGVlclxcbW9uZXRlZXItZnJvbnRlbmQvc3RkaW4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FDbEJKOztBRHFCQTtFQUNFLFlBQUE7QUNsQkY7O0FEcUJBO0VBQ0UsY0FwQnFCO0FDRXZCOztBRHFCQTtFQUNFLGNBdkJxQjtBQ0t2Qjs7QURxQkE7RUFDRSxXQUFBO0FDbEJGOztBRHFCQTtFQUNFLFlBQUE7QUNsQkY7O0FEcUJBLHNCQUFBOztBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDbEJKOztBRHFCQTtFQUNJLHlCQXJEbUI7RUFzRG5CLFlBQUE7QUNsQko7O0FEcUJBO0VBQ0ksZUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0FDbEJKOztBRHFCQTtFQUNJLGVBQUE7QUNsQko7O0FEcUJBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDbEJKOztBRHFCQTtFQUNJLGNBQUE7QUNsQko7O0FEcUJBO0VBQ0ksZUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0FDbEJKOztBRHFCQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ2xCSjs7QUN0RUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUR5RUo7O0FDdEVBO0VBQ0ksa0JBQUE7QUR5RUoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9kcm9wZG93bi1jb21wb25lbnQvZHJvcGRvd24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS1jb2xvci1kYXJrOiAgICM0NTVBNjQ7XHJcbiRwcmltYXJ5LWNvbG9yOiAgICAgICAgIzYwN0Q4QjtcclxuJHByaW1hcnktY29sb3ItbGlnaHQ6ICAjQ0ZEOERDO1xyXG4kcHJpbWFyeS1jb2xvci10ZXh0OiAgICNGRkZGRkY7XHJcbiRhY2NlbnQtY29sb3I6ICAgICAgICAgI0ZGQzEwNztcclxuJHByaW1hcnktdGV4dC1jb2xvcjogICAjMjEyMTIxO1xyXG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6ICM3NTc1NzU7XHJcbiRkaXZpZGVyLWNvbG9yOiAgICAgICAgI0JEQkRCRDtcclxuXHJcbiRtb25leS1nb29kOiAgICAgICAgICAgIzMxODcwMDtcclxuJG1vbmV5LWJhZDogICAgICAgICAgICAjYzkyMTAwO1xyXG5cclxuJG1vbmV5LWdvb2Qtc2F0dXJhdGVkOiAjMDBGRkM4O1xyXG4kbW9uZXktYmFkLXNhdHVyYXRlZDogICNGRjU1NDA7XHJcblxyXG4kZXJyb3I6ICAgICAgICAgICAgICAgICNjYzAwMDA7XHJcblxyXG4kcHJpbWFyeTogJHByaW1hcnktY29sb3I7XHJcblxyXG5odG1sIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmlzLWdvb2Qge1xyXG4gIGNvbG9yOiAkbW9uZXktZ29vZDtcclxufVxyXG5cclxuLmlzLWJhZCB7XHJcbiAgY29sb3I6ICRtb25leS1iYWQ7XHJcbn1cclxuXHJcbi5iYWRnZS5iYWRnZS1zdWNjZXNzIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiA0MHB4O1xyXG59XHJcblxyXG4vKiBUUkFOU0FDVElPTiBUQUJMRSAqL1xyXG4udHJhbnNhY3Rpb24tcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIGhlaWdodDogMS4xNXJlbTtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbn1cclxuXHJcbi5zZWxlY3RlZCwgLmVkaXRpbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3ItbGlnaHQ7XHJcbiAgICBjdXJzb3I6IHRleHQ7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1kYXRlIHtcclxuICAgIGZsZXg6IDEgMSAxMjBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLWFjY291bnQge1xyXG4gICAgZmxleDogMSAxIDEyMHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tY2F0ZWdvcnkge1xyXG4gICAgZmxleDogMSAxIDEyMHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tZmxvdyB7XHJcbiAgICBmbGV4OiAwIDEgMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLWNsZWFyZWQge1xyXG4gICAgZmxleDogMCAxIDYwcHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1kZXNjcmlwdGlvbiB7XHJcbiAgICBmbGV4OiAxIDEgMTIwcHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1wYXllZSB7XHJcbiAgICBmbGV4OiAxIDEgMTIwcHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1zZWxlY3RlZCB7XHJcbiAgICBmbGV4OiAwIDEgMzBweDtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG59IiwiaHRtbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmlzLWdvb2Qge1xuICBjb2xvcjogIzMxODcwMDtcbn1cblxuLmlzLWJhZCB7XG4gIGNvbG9yOiAjYzkyMTAwO1xufVxuXG4uYmFkZ2UuYmFkZ2Utc3VjY2VzcyB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luOiA0MHB4O1xufVxuXG4vKiBUUkFOU0FDVElPTiBUQUJMRSAqL1xuLnRyYW5zYWN0aW9uLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBmbGV4LXNocmluazogMDtcbiAgaGVpZ2h0OiAxLjE1cmVtO1xuICBwYWRkaW5nLXRvcDogMXB4O1xufVxuXG4uc2VsZWN0ZWQsIC5lZGl0aW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NGRDhEQztcbiAgY3Vyc29yOiB0ZXh0O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tZGF0ZSB7XG4gIGZsZXg6IDEgMSAxMjBweDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLWFjY291bnQge1xuICBmbGV4OiAxIDEgMTIwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1jYXRlZ29yeSB7XG4gIGZsZXg6IDEgMSAxMjBweDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLWZsb3cge1xuICBmbGV4OiAwIDEgMTAwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tY2xlYXJlZCB7XG4gIGZsZXg6IDAgMSA2MHB4O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tZGVzY3JpcHRpb24ge1xuICBmbGV4OiAxIDEgMTIwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1wYXllZSB7XG4gIGZsZXg6IDEgMSAxMjBweDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLXNlbGVjdGVkIHtcbiAgZmxleDogMCAxIDMwcHg7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuXG5kaXYge1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICBtYXgtaGVpZ2h0OiAyNTBweDtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNkcm9wRG93bkNvbnRlbnQge1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59IiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuXHJcbmRpdiB7XHJcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gICAgbWF4LWhlaWdodDogMjUwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuI2Ryb3BEb3duQ29udGVudCB7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/dropdown-component/dropdown.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/dropdown-component/dropdown.component.ts ***!
  \****************************************************************************/
/*! exports provided: DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tether_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tether-drop */ "./node_modules/tether-drop/dist/js/drop.js");
/* harmony import */ var tether_drop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tether_drop__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DropdownComponent = /** @class */ (function () {
    function DropdownComponent(element) {
        this.element = element;
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.attachment = "bottom center";
        this.targetAttachment = "top center";
        this.openOn = "click";
        this.classes = "drop-theme-arrows-bounce";
        this.offset = "0 0"; // first up/down, second left/right
    }
    DropdownComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.dropDown = new tether_drop__WEBPACK_IMPORTED_MODULE_1__({
            target: !this.anchor ? this.element.nativeElement : this.anchor,
            content: this.dropDownContent.nativeElement,
            openOn: this.openOn,
            classes: this.classes,
            tetherOptions: {
                attachment: this.attachment,
                targetAttachment: this.targetAttachment,
                offset: this.offset
            },
            constrainToScrollParent: true,
            constrainToWindow: true
        });
        this.dropDown.on("open", function () { return _this.onDropdownOpen(); });
    };
    DropdownComponent.prototype.ngOnDestroy = function () {
        this.dropDown.off("open");
    };
    DropdownComponent.prototype.onDropdownOpen = function () {
        this.opened.emit();
    };
    DropdownComponent.prototype.open = function () {
        this.dropDown.open();
    };
    DropdownComponent.prototype.close = function () {
        this.dropDown.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("dropDownContent", { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DropdownComponent.prototype, "dropDownContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DropdownComponent.prototype, "opened", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Element)
    ], DropdownComponent.prototype, "anchor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DropdownComponent.prototype, "attachment", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DropdownComponent.prototype, "targetAttachment", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DropdownComponent.prototype, "openOn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DropdownComponent.prototype, "classes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DropdownComponent.prototype, "offset", void 0);
    DropdownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "moneteer-dropdown",
            template: "<div #dropDownContent>\n    <ng-content></ng-content>\n</div>",
            styles: [__webpack_require__(/*! ./dropdown.component.scss */ "./src/app/shared/components/dropdown-component/dropdown.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DropdownComponent);
    return DropdownComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/index.ts":
/*!********************************************!*\
  !*** ./src/app/shared/components/index.ts ***!
  \********************************************/
/*! exports provided: LoadingComponent, TYPE_AHEAD_CONTROL_VALUE_ACCESSOR, TypeAheadComponent, DropdownComponent, CURRENCY_EDIT_CONTROL_VALUE_ACCESSOR, CurrencyEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loading_component_loading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading-component/loading.component */ "./src/app/shared/components/loading-component/loading.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return _loading_component_loading_component__WEBPACK_IMPORTED_MODULE_0__["LoadingComponent"]; });

/* harmony import */ var _type_ahead_component_type_ahead_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type-ahead-component/type.ahead.component */ "./src/app/shared/components/type-ahead-component/type.ahead.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TYPE_AHEAD_CONTROL_VALUE_ACCESSOR", function() { return _type_ahead_component_type_ahead_component__WEBPACK_IMPORTED_MODULE_1__["TYPE_AHEAD_CONTROL_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeAheadComponent", function() { return _type_ahead_component_type_ahead_component__WEBPACK_IMPORTED_MODULE_1__["TypeAheadComponent"]; });

/* harmony import */ var _dropdown_component_dropdown_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown-component/dropdown.component */ "./src/app/shared/components/dropdown-component/dropdown.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return _dropdown_component_dropdown_component__WEBPACK_IMPORTED_MODULE_2__["DropdownComponent"]; });

/* harmony import */ var _currency_edit_component_currency_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./currency-edit-component/currency.edit.component */ "./src/app/shared/components/currency-edit-component/currency.edit.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CURRENCY_EDIT_CONTROL_VALUE_ACCESSOR", function() { return _currency_edit_component_currency_edit_component__WEBPACK_IMPORTED_MODULE_3__["CURRENCY_EDIT_CONTROL_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrencyEditComponent", function() { return _currency_edit_component_currency_edit_component__WEBPACK_IMPORTED_MODULE_3__["CurrencyEditComponent"]; });







/***/ }),

/***/ "./src/app/shared/components/loading-component/loading.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/loading-component/loading.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative;\n}\n\nspan {\n  position: absolute;\n  top: 100px;\n  background-color: white;\n  padding: 25px;\n}\n\n.overlay {\n  background-color: rgba(10, 10, 10, 0.6);\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGluZy1jb21wb25lbnQvRDpcXGdpdFxcbW9uZXRlZXJcXG1vbmV0ZWVyLWZyb250ZW5kL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGxvYWRpbmctY29tcG9uZW50XFxsb2FkaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sb2FkaW5nLWNvbXBvbmVudC9sb2FkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQ0FKOztBREdBO0VBQ0ksdUNBQUE7RUFDQSxXQUFBO0VBQWEsc0NBQUE7RUFDYixZQUFBO0VBQWMsdUNBQUE7RUFDZCxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGluZy1jb21wb25lbnQvbG9hZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbn1cclxuXHJcbi5vdmVybGF5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAsIDEwLCAxMCwgMC42KTtcclxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cclxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xyXG4gICAgdG9wOiAwOyBcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuIiwiOmhvc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbnNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAyNXB4O1xufVxuXG4ub3ZlcmxheSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAsIDEwLCAxMCwgMC42KTtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/loading-component/loading.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/loading-component/loading.component.ts ***!
  \**************************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
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

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
        this.isLoading = false;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LoadingComponent.prototype, "isLoading", void 0);
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'moneteer-loading',
            template: __webpack_require__(/*! raw-loader!./loading.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/loading-component/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.scss */ "./src/app/shared/components/loading-component/loading.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/nav/nav.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/nav/nav.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n  overflow: hidden;\n  height: 100%;\n}\n\nbody {\n  height: 100%;\n}\n\n.is-good {\n  color: #318700;\n}\n\n.is-bad {\n  color: #c92100;\n}\n\n.badge.badge-success {\n  color: #fff;\n}\n\n.container {\n  margin: 40px;\n}\n\n/* TRANSACTION TABLE */\n\n.transaction-row {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  flex-shrink: 0;\n  height: 1.15rem;\n  padding-top: 1px;\n}\n\n.selected, .editing {\n  background-color: #CFD8DC;\n  cursor: text;\n}\n\n.transaction-cell--date {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--account {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--category {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--flow {\n  flex: 0 1 100px;\n  text-align: right;\n}\n\n.transaction-cell--cleared {\n  flex: 0 1 60px;\n}\n\n.transaction-cell--description {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--payee {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--selected {\n  flex: 0 1 30px;\n  padding-left: 8px;\n}\n\n:host {\n  flex: 0 0 auto;\n  display: flex;\n  flex-direction: column;\n  width: 230px;\n  height: 100%;\n  background-color: #CFD8DC;\n  border-right: 1px solid #BDBDBD;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n#profile-dropdown-toggle {\n  width: 100%;\n  padding: 10px;\n  background-color: #607D8B;\n  color: #FFFFFF;\n  font-weight: 600;\n}\n\n.header {\n  background-color: #607D8B;\n  color: #757575;\n  min-height: 4em;\n  display: flex;\n  align-items: center;\n}\n\n.header h1 {\n  font-size: 0.8rem;\n  flex: 1 1 auto;\n  margin: 0;\n  color: #607D8B;\n  color: #fff;\n}\n\n.header clr-dropdown {\n  margin-right: 10px;\n}\n\n.link {\n  padding: 0.3rem 0.4rem;\n  color: #607D8B;\n}\n\n.link-child {\n  padding-left: 1.8em;\n}\n\na:hover {\n  text-decoration: none;\n}\n\n.top-link-bottom {\n  align-items: flex-end;\n}\n\nh6 {\n  margin-left: 1.3em;\n  margin-top: 0;\n  color: #607D8B;\n  font-size: 13px;\n  font-weight: bold;\n}\n\n.logo {\n  padding: 7px;\n}\n\n.logo span {\n  font-size: 24px;\n}\n\n.link-container {\n  display: flex;\n}\n\n.link-container button {\n  margin: 0;\n  flex: 0 1 auto;\n  align-self: center;\n  border-color: #607D8B;\n  color: #607D8B;\n  margin-right: 0.8em;\n  padding: 0 0.25rem;\n}\n\n.link-container a {\n  flex: 1 0 auto;\n  padding: 0.3rem 0.4rem;\n  color: #607D8B;\n}\n\n.link:hover, .link.active, .link-container:hover, .link-container:hover a, .link-container:hover button, .link-container.active {\n  background-color: #607D8B;\n  color: #FFFFFF;\n  border-color: #FFFFFF;\n}\n\n.link-container button:hover {\n  background-color: #e1f1f6;\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2L0Q6XFxnaXRcXG1vbmV0ZWVyXFxtb25ldGVlci1mcm9udGVuZC9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxuYXZcXG5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2L0Q6XFxnaXRcXG1vbmV0ZWVyXFxtb25ldGVlci1mcm9udGVuZC9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNsQko7O0FEcUJBO0VBQ0UsWUFBQTtBQ2xCRjs7QURxQkE7RUFDRSxjQXBCcUI7QUNFdkI7O0FEcUJBO0VBQ0UsY0F2QnFCO0FDS3ZCOztBRHFCQTtFQUNFLFdBQUE7QUNsQkY7O0FEcUJBO0VBQ0UsWUFBQTtBQ2xCRjs7QURxQkEsc0JBQUE7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNsQko7O0FEcUJBO0VBQ0kseUJBckRtQjtFQXNEbkIsWUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0FDbEJKOztBRHFCQTtFQUNJLGVBQUE7QUNsQko7O0FEcUJBO0VBQ0ksZUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNsQko7O0FEcUJBO0VBQ0ksY0FBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0FDbEJKOztBRHFCQTtFQUNJLGVBQUE7QUNsQko7O0FEcUJBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDbEJKOztBQ3RFQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCRk5tQjtFRU9uQiwrQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FEeUVKOztBQ3RFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJGZm1CO0VFZ0JuQixjRmRtQjtFRWVuQixnQkFBQTtBRHlFSjs7QUN0RUE7RUFDSSx5QkZyQm1CO0VFc0JuQixjRmpCbUI7RUVrQm5CLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUR5RUo7O0FDdEVBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGNGaENtQjtFRWlDbkIsV0FBQTtBRHlFSjs7QUN0RUE7RUFDSSxrQkFBQTtBRHlFSjs7QUN0RUE7RUFDSSxzQkFBQTtFQUNBLGNGMUNtQjtBQ21IdkI7O0FDdEVBO0VBQ0ksbUJBQUE7QUR5RUo7O0FDdEVBO0VBQ0kscUJBQUE7QUR5RUo7O0FDdEVBO0VBQ0kscUJBQUE7QUR5RUo7O0FDdEVBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0Y1RG1CO0VFNkRuQixlQUFBO0VBQ0EsaUJBQUE7QUR5RUo7O0FDdEVBO0VBQ0ksWUFBQTtBRHlFSjs7QUN0RUE7RUFDSSxlQUFBO0FEeUVKOztBQ3RFQTtFQUNJLGFBQUE7QUR5RUo7O0FDdEVBO0VBQ0ksU0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCRmpGbUI7RUVrRm5CLGNGbEZtQjtFRW1GbkIsbUJBQUE7RUFDQSxrQkFBQTtBRHlFSjs7QUN0RUE7RUFDSSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxjRjFGbUI7QUNtS3ZCOztBQ3RFQTtFQUNJLHlCRjlGbUI7RUUrRm5CLGNGN0ZtQjtFRThGbkIscUJGOUZtQjtBQ3VLdkI7O0FDdEVBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FEeUVKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5LWNvbG9yLWRhcms6ICAgIzQ1NUE2NDtcclxuJHByaW1hcnktY29sb3I6ICAgICAgICAjNjA3RDhCO1xyXG4kcHJpbWFyeS1jb2xvci1saWdodDogICNDRkQ4REM7XHJcbiRwcmltYXJ5LWNvbG9yLXRleHQ6ICAgI0ZGRkZGRjtcclxuJGFjY2VudC1jb2xvcjogICAgICAgICAjRkZDMTA3O1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAgICMyMTIxMjE7XHJcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogIzc1NzU3NTtcclxuJGRpdmlkZXItY29sb3I6ICAgICAgICAjQkRCREJEO1xyXG5cclxuJG1vbmV5LWdvb2Q6ICAgICAgICAgICAjMzE4NzAwO1xyXG4kbW9uZXktYmFkOiAgICAgICAgICAgICNjOTIxMDA7XHJcblxyXG4kbW9uZXktZ29vZC1zYXR1cmF0ZWQ6ICMwMEZGQzg7XHJcbiRtb25leS1iYWQtc2F0dXJhdGVkOiAgI0ZGNTU0MDtcclxuXHJcbiRlcnJvcjogICAgICAgICAgICAgICAgI2NjMDAwMDtcclxuXHJcbiRwcmltYXJ5OiAkcHJpbWFyeS1jb2xvcjtcclxuXHJcbmh0bWwge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uaXMtZ29vZCB7XHJcbiAgY29sb3I6ICRtb25leS1nb29kO1xyXG59XHJcblxyXG4uaXMtYmFkIHtcclxuICBjb2xvcjogJG1vbmV5LWJhZDtcclxufVxyXG5cclxuLmJhZGdlLmJhZGdlLXN1Y2Nlc3Mge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW46IDQwcHg7XHJcbn1cclxuXHJcbi8qIFRSQU5TQUNUSU9OIFRBQkxFICovXHJcbi50cmFuc2FjdGlvbi1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgaGVpZ2h0OiAxLjE1cmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxufVxyXG5cclxuLnNlbGVjdGVkLCAuZWRpdGluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvci1saWdodDtcclxuICAgIGN1cnNvcjogdGV4dDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLWRhdGUge1xyXG4gICAgZmxleDogMSAxIDEyMHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tYWNjb3VudCB7XHJcbiAgICBmbGV4OiAxIDEgMTIwcHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1jYXRlZ29yeSB7XHJcbiAgICBmbGV4OiAxIDEgMTIwcHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1mbG93IHtcclxuICAgIGZsZXg6IDAgMSAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tY2xlYXJlZCB7XHJcbiAgICBmbGV4OiAwIDEgNjBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLWRlc2NyaXB0aW9uIHtcclxuICAgIGZsZXg6IDEgMSAxMjBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLXBheWVlIHtcclxuICAgIGZsZXg6IDEgMSAxMjBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLXNlbGVjdGVkIHtcclxuICAgIGZsZXg6IDAgMSAzMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbn0iLCJodG1sIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaXMtZ29vZCB7XG4gIGNvbG9yOiAjMzE4NzAwO1xufVxuXG4uaXMtYmFkIHtcbiAgY29sb3I6ICNjOTIxMDA7XG59XG5cbi5iYWRnZS5iYWRnZS1zdWNjZXNzIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW46IDQwcHg7XG59XG5cbi8qIFRSQU5TQUNUSU9OIFRBQkxFICovXG4udHJhbnNhY3Rpb24tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBoZWlnaHQ6IDEuMTVyZW07XG4gIHBhZGRpbmctdG9wOiAxcHg7XG59XG5cbi5zZWxlY3RlZCwgLmVkaXRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDO1xuICBjdXJzb3I6IHRleHQ7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1kYXRlIHtcbiAgZmxleDogMSAxIDEyMHB4O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tYWNjb3VudCB7XG4gIGZsZXg6IDEgMSAxMjBweDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLWNhdGVnb3J5IHtcbiAgZmxleDogMSAxIDEyMHB4O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tZmxvdyB7XG4gIGZsZXg6IDAgMSAxMDBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1jbGVhcmVkIHtcbiAgZmxleDogMCAxIDYwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1kZXNjcmlwdGlvbiB7XG4gIGZsZXg6IDEgMSAxMjBweDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLXBheWVlIHtcbiAgZmxleDogMSAxIDEyMHB4O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tc2VsZWN0ZWQge1xuICBmbGV4OiAwIDEgMzBweDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5cbjpob3N0IHtcbiAgZmxleDogMCAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAyMzBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQkRCREJEO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuI3Byb2ZpbGUtZHJvcGRvd24tdG9nZ2xlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwN0Q4QjtcbiAgY29sb3I6ICM3NTc1NzU7XG4gIG1pbi1oZWlnaHQ6IDRlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlYWRlciBoMSB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmbGV4OiAxIDEgYXV0bztcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzYwN0Q4QjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5oZWFkZXIgY2xyLWRyb3Bkb3duIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ubGluayB7XG4gIHBhZGRpbmc6IDAuM3JlbSAwLjRyZW07XG4gIGNvbG9yOiAjNjA3RDhCO1xufVxuXG4ubGluay1jaGlsZCB7XG4gIHBhZGRpbmctbGVmdDogMS44ZW07XG59XG5cbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi50b3AtbGluay1ib3R0b20ge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbmg2IHtcbiAgbWFyZ2luLWxlZnQ6IDEuM2VtO1xuICBtYXJnaW4tdG9wOiAwO1xuICBjb2xvcjogIzYwN0Q4QjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxvZ28ge1xuICBwYWRkaW5nOiA3cHg7XG59XG5cbi5sb2dvIHNwYW4ge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5saW5rLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5saW5rLWNvbnRhaW5lciBidXR0b24ge1xuICBtYXJnaW46IDA7XG4gIGZsZXg6IDAgMSBhdXRvO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGJvcmRlci1jb2xvcjogIzYwN0Q4QjtcbiAgY29sb3I6ICM2MDdEOEI7XG4gIG1hcmdpbi1yaWdodDogMC44ZW07XG4gIHBhZGRpbmc6IDAgMC4yNXJlbTtcbn1cblxuLmxpbmstY29udGFpbmVyIGEge1xuICBmbGV4OiAxIDAgYXV0bztcbiAgcGFkZGluZzogMC4zcmVtIDAuNHJlbTtcbiAgY29sb3I6ICM2MDdEOEI7XG59XG5cbi5saW5rOmhvdmVyLCAubGluay5hY3RpdmUsIC5saW5rLWNvbnRhaW5lcjpob3ZlciwgLmxpbmstY29udGFpbmVyOmhvdmVyIGEsIC5saW5rLWNvbnRhaW5lcjpob3ZlciBidXR0b24sIC5saW5rLWNvbnRhaW5lci5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgYm9yZGVyLWNvbG9yOiAjRkZGRkZGO1xufVxuXG4ubGluay1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZjFmNjtcbiAgY29sb3I6ICMwMDA7XG59IiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuXHJcbjpob3N0IHtcclxuICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMjMwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvci1saWdodDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRkaXZpZGVyLWNvbG9yO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbiNwcm9maWxlLWRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvci10ZXh0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICBtaW4taGVpZ2h0OiA0ZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlciBoMSB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5oZWFkZXIgY2xyLWRyb3Bkb3duIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmxpbmsge1xyXG4gICAgcGFkZGluZzogMC4zcmVtIDAuNHJlbTtcclxuICAgIGNvbG9yOiAkcHJpbWFyeTtcclxufVxyXG5cclxuLmxpbmstY2hpbGQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxLjhlbTtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi50b3AtbGluay1ib3R0b20ge1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcblxyXG5oNiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMS4zZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIHBhZGRpbmc6IDdweDtcclxufVxyXG5cclxuLmxvZ28gc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5saW5rLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubGluay1jb250YWluZXIgYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMDsgXHJcbiAgICBmbGV4OiAwIDEgYXV0bzsgXHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjhlbTtcclxuICAgIHBhZGRpbmc6IDAgMC4yNXJlbTtcclxufVxyXG5cclxuLmxpbmstY29udGFpbmVyIGEge1xyXG4gICAgZmxleDogMSAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAwLjNyZW0gMC40cmVtO1xyXG4gICAgY29sb3I6ICRwcmltYXJ5XHJcbn1cclxuXHJcbi5saW5rOmhvdmVyLCAubGluay5hY3RpdmUsIC5saW5rLWNvbnRhaW5lcjpob3ZlciwgLmxpbmstY29udGFpbmVyOmhvdmVyIGEsIC5saW5rLWNvbnRhaW5lcjpob3ZlciBidXR0b24sIC5saW5rLWNvbnRhaW5lci5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3ItdGV4dDtcclxuICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3ItdGV4dDtcclxufVxyXG5cclxuLmxpbmstY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFmMWY2O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/nav/nav.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/components/nav/nav.component.ts ***!
  \********************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/index */ "./src/app/core/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavComponent = /** @class */ (function () {
    function NavComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavComponent.prototype.ngOnInit = function () {
        this.user = this.authService.getUser();
    };
    NavComponent.prototype.logOut = function () {
        this.authService.logout();
    };
    NavComponent.prototype.switchBudget = function () {
        this.router.navigateByUrl("/budget");
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "moneteer-nav",
            template: __webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/shared/components/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_index__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/type-ahead-component/type.ahead.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/type-ahead-component/type.ahead.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n  overflow: hidden;\n  height: 100%;\n}\n\nbody {\n  height: 100%;\n}\n\n.is-good {\n  color: #318700;\n}\n\n.is-bad {\n  color: #c92100;\n}\n\n.badge.badge-success {\n  color: #fff;\n}\n\n.container {\n  margin: 40px;\n}\n\n/* TRANSACTION TABLE */\n\n.transaction-row {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  flex-shrink: 0;\n  height: 1.15rem;\n  padding-top: 1px;\n}\n\n.selected, .editing {\n  background-color: #CFD8DC;\n  cursor: text;\n}\n\n.transaction-cell--date {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--account {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--category {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--flow {\n  flex: 0 1 100px;\n  text-align: right;\n}\n\n.transaction-cell--cleared {\n  flex: 0 1 60px;\n}\n\n.transaction-cell--description {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--payee {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--selected {\n  flex: 0 1 30px;\n  padding-left: 8px;\n}\n\n:host {\n  position: relative;\n}\n\n.subheader {\n  font-size: 0.9em;\n  font-weight: bold;\n}\n\n.item {\n  font-size: 0.7em;\n  padding: 3px;\n  cursor: pointer;\n}\n\n.item:hover {\n  background-color: #CFD8DC;\n}\n\n.subitem {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdHlwZS1haGVhZC1jb21wb25lbnQvRDpcXGdpdFxcbW9uZXRlZXJcXG1vbmV0ZWVyLWZyb250ZW5kL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHR5cGUtYWhlYWQtY29tcG9uZW50XFx0eXBlLmFoZWFkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90eXBlLWFoZWFkLWNvbXBvbmVudC90eXBlLmFoZWFkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90eXBlLWFoZWFkLWNvbXBvbmVudC9EOlxcZ2l0XFxtb25ldGVlclxcbW9uZXRlZXItZnJvbnRlbmQvc3RkaW4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FDbEJKOztBRHFCQTtFQUNFLFlBQUE7QUNsQkY7O0FEcUJBO0VBQ0UsY0FwQnFCO0FDRXZCOztBRHFCQTtFQUNFLGNBdkJxQjtBQ0t2Qjs7QURxQkE7RUFDRSxXQUFBO0FDbEJGOztBRHFCQTtFQUNFLFlBQUE7QUNsQkY7O0FEcUJBLHNCQUFBOztBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDbEJKOztBRHFCQTtFQUNJLHlCQXJEbUI7RUFzRG5CLFlBQUE7QUNsQko7O0FEcUJBO0VBQ0ksZUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0FDbEJKOztBRHFCQTtFQUNJLGVBQUE7QUNsQko7O0FEcUJBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDbEJKOztBRHFCQTtFQUNJLGNBQUE7QUNsQko7O0FEcUJBO0VBQ0ksZUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0FDbEJKOztBRHFCQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ2xCSjs7QUN0RUE7RUFFSSxrQkFBQTtBRHdFSjs7QUNyRUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FEd0VKOztBQ3JFQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUR3RUo7O0FDckVBO0VBQ0kseUJGakJtQjtBQ3lGdkI7O0FDckVBO0VBQ0ksZ0JBQUE7QUR3RUoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90eXBlLWFoZWFkLWNvbXBvbmVudC90eXBlLmFoZWFkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnktY29sb3ItZGFyazogICAjNDU1QTY0O1xyXG4kcHJpbWFyeS1jb2xvcjogICAgICAgICM2MDdEOEI7XHJcbiRwcmltYXJ5LWNvbG9yLWxpZ2h0OiAgI0NGRDhEQztcclxuJHByaW1hcnktY29sb3ItdGV4dDogICAjRkZGRkZGO1xyXG4kYWNjZW50LWNvbG9yOiAgICAgICAgICNGRkMxMDc7XHJcbiRwcmltYXJ5LXRleHQtY29sb3I6ICAgIzIxMjEyMTtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjNzU3NTc1O1xyXG4kZGl2aWRlci1jb2xvcjogICAgICAgICNCREJEQkQ7XHJcblxyXG4kbW9uZXktZ29vZDogICAgICAgICAgICMzMTg3MDA7XHJcbiRtb25leS1iYWQ6ICAgICAgICAgICAgI2M5MjEwMDtcclxuXHJcbiRtb25leS1nb29kLXNhdHVyYXRlZDogIzAwRkZDODtcclxuJG1vbmV5LWJhZC1zYXR1cmF0ZWQ6ICAjRkY1NTQwO1xyXG5cclxuJGVycm9yOiAgICAgICAgICAgICAgICAjY2MwMDAwO1xyXG5cclxuJHByaW1hcnk6ICRwcmltYXJ5LWNvbG9yO1xyXG5cclxuaHRtbCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5pcy1nb29kIHtcclxuICBjb2xvcjogJG1vbmV5LWdvb2Q7XHJcbn1cclxuXHJcbi5pcy1iYWQge1xyXG4gIGNvbG9yOiAkbW9uZXktYmFkO1xyXG59XHJcblxyXG4uYmFkZ2UuYmFkZ2Utc3VjY2VzcyB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1hcmdpbjogNDBweDtcclxufVxyXG5cclxuLyogVFJBTlNBQ1RJT04gVEFCTEUgKi9cclxuLnRyYW5zYWN0aW9uLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBoZWlnaHQ6IDEuMTVyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG59XHJcblxyXG4uc2VsZWN0ZWQsIC5lZGl0aW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yLWxpZ2h0O1xyXG4gICAgY3Vyc29yOiB0ZXh0O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tZGF0ZSB7XHJcbiAgICBmbGV4OiAxIDEgMTIwcHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1hY2NvdW50IHtcclxuICAgIGZsZXg6IDEgMSAxMjBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLWNhdGVnb3J5IHtcclxuICAgIGZsZXg6IDEgMSAxMjBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLWZsb3cge1xyXG4gICAgZmxleDogMCAxIDEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1jbGVhcmVkIHtcclxuICAgIGZsZXg6IDAgMSA2MHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tZGVzY3JpcHRpb24ge1xyXG4gICAgZmxleDogMSAxIDEyMHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tcGF5ZWUge1xyXG4gICAgZmxleDogMSAxIDEyMHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tc2VsZWN0ZWQge1xyXG4gICAgZmxleDogMCAxIDMwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxufSIsImh0bWwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pcy1nb29kIHtcbiAgY29sb3I6ICMzMTg3MDA7XG59XG5cbi5pcy1iYWQge1xuICBjb2xvcjogI2M5MjEwMDtcbn1cblxuLmJhZGdlLmJhZGdlLXN1Y2Nlc3Mge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogNDBweDtcbn1cblxuLyogVFJBTlNBQ1RJT04gVEFCTEUgKi9cbi50cmFuc2FjdGlvbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGhlaWdodDogMS4xNXJlbTtcbiAgcGFkZGluZy10b3A6IDFweDtcbn1cblxuLnNlbGVjdGVkLCAuZWRpdGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REM7XG4gIGN1cnNvcjogdGV4dDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLWRhdGUge1xuICBmbGV4OiAxIDEgMTIwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1hY2NvdW50IHtcbiAgZmxleDogMSAxIDEyMHB4O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tY2F0ZWdvcnkge1xuICBmbGV4OiAxIDEgMTIwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1mbG93IHtcbiAgZmxleDogMCAxIDEwMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLWNsZWFyZWQge1xuICBmbGV4OiAwIDEgNjBweDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLWRlc2NyaXB0aW9uIHtcbiAgZmxleDogMSAxIDEyMHB4O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tcGF5ZWUge1xuICBmbGV4OiAxIDEgMTIwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1zZWxlY3RlZCB7XG4gIGZsZXg6IDAgMSAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cblxuOmhvc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zdWJoZWFkZXIge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLml0ZW0ge1xuICBmb250LXNpemU6IDAuN2VtO1xuICBwYWRkaW5nOiAzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLml0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDO1xufVxuXG4uc3ViaXRlbSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59IiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuXHJcbjpob3N0IHtcclxuICAgIFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc3ViaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLml0ZW06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3ItbGlnaHQ7XHJcbn1cclxuXHJcbi5zdWJpdGVtIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/type-ahead-component/type.ahead.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/type-ahead-component/type.ahead.component.ts ***!
  \********************************************************************************/
/*! exports provided: TYPE_AHEAD_CONTROL_VALUE_ACCESSOR, TypeAheadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_AHEAD_CONTROL_VALUE_ACCESSOR", function() { return TYPE_AHEAD_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeAheadComponent", function() { return TypeAheadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tether_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tether-drop */ "./node_modules/tether-drop/dist/js/drop.js");
/* harmony import */ var tether_drop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tether_drop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TYPE_AHEAD_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return TypeAheadComponent; }),
    multi: true
};
var TypeAheadComponent = /** @class */ (function () {
    function TypeAheadComponent() {
        this.searchFilterTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.filteredValues = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
    }
    Object.defineProperty(TypeAheadComponent.prototype, "values", {
        get: function () {
            return this._values;
        },
        set: function (value) {
            var _this = this;
            this._values = value;
            if (value) {
                var filteredValues = value.filter(function (v) { return !_this.searchFilter ||
                    v[_this.displayProperty].toLowerCase().indexOf(_this.searchFilter.toLowerCase()) > -1; });
                this.filteredValues.next(filteredValues);
            }
        },
        enumerable: true,
        configurable: true
    });
    TypeAheadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchFilterTerm$.subscribe(function (f) {
            if (_this.values) {
                var filteredValues = _this.values.filter(function (v) { return !f || v[_this.displayProperty].toLowerCase().indexOf(f.toLowerCase()) > -1; });
                _this.filteredValues.next(filteredValues);
            }
        });
    };
    TypeAheadComponent.prototype.ngAfterViewInit = function () {
        this.dropDown = new tether_drop__WEBPACK_IMPORTED_MODULE_1__({
            target: this.searchInput.nativeElement,
            content: this.dropDownContent.nativeElement,
            position: "bottom center",
            openOn: undefined,
            classes: "drop-theme-arrows-bounce",
            constrainToScrollParent: false,
            constrainToWindow: false
        });
    };
    TypeAheadComponent.prototype.onSearchInputBlur = function ($event) {
        var _this = this;
        var _a;
        this.dropDown.close();
        var newValue = $event.target.value;
        var item = !this.values ? null : this.values.find(function (v) { return v[_this.displayProperty].toLowerCase().indexOf(newValue.toLowerCase()) > -1; });
        if (item) {
            this.searchFilter = item[this.displayProperty];
            this.value = item;
        }
        else {
            if (this.allowNewItems) {
                this.value = (_a = {}, _a[this.displayProperty] = this.searchFilter, _a);
            }
            else {
                this.searchFilter = !this.value ? "" : this.value[this.displayProperty];
            }
        }
    };
    TypeAheadComponent.prototype.onSearchInputFocus = function ($event) {
        this.dropDown.open();
        $event.target.select();
        this.searchFilterTerm$.next("");
    };
    TypeAheadComponent.prototype.itemClicked = function (item) {
        this.value = item;
        this.dropDown.close();
    };
    Object.defineProperty(TypeAheadComponent.prototype, "value", {
        // get accessor
        get: function () {
            return this.selectedItem;
        },
        // set accessor including call the onchange callback
        set: function (v) {
            if (v !== this.selectedItem) {
                this.selectedItem = v;
                this.searchFilter = v[this.displayProperty];
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    // from ControlValueAccessor interface
    TypeAheadComponent.prototype.writeValue = function (value) {
        if (value !== this.selectedItem) {
            this.selectedItem = value;
            if (value) {
                this.searchFilter = value[this.displayProperty];
            }
        }
    };
    // from ControlValueAccessor interface
    TypeAheadComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    // from ControlValueAccessor interface
    TypeAheadComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], TypeAheadComponent.prototype, "values", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("group-by"),
        __metadata("design:type", String)
    ], TypeAheadComponent.prototype, "groupByProperty", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("display-property"),
        __metadata("design:type", String)
    ], TypeAheadComponent.prototype, "displayProperty", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TypeAheadComponent.prototype, "allowNewItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.selected"),
        __metadata("design:type", Boolean)
    ], TypeAheadComponent.prototype, "isSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TypeAheadComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("searchInput", { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TypeAheadComponent.prototype, "searchInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("dropDownContent", { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TypeAheadComponent.prototype, "dropDownContent", void 0);
    TypeAheadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "moneteer-type-ahead",
            template: __webpack_require__(/*! raw-loader!./type.ahead.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/type-ahead-component/type.ahead.component.html"),
            providers: [TYPE_AHEAD_CONTROL_VALUE_ACCESSOR],
            styles: [__webpack_require__(/*! ./type.ahead.component.scss */ "./src/app/shared/components/type-ahead-component/type.ahead.component.scss")]
        })
    ], TypeAheadComponent);
    return TypeAheadComponent;
}());



/***/ }),

/***/ "./src/app/shared/models/index.ts":
/*!****************************************!*\
  !*** ./src/app/shared/models/index.ts ***!
  \****************************************/
/*! exports provided: ScreenSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _screen_size__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen.size */ "./src/app/shared/models/screen.size.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenSize", function() { return _screen_size__WEBPACK_IMPORTED_MODULE_0__["ScreenSize"]; });




/***/ }),

/***/ "./src/app/shared/models/screen.size.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/models/screen.size.ts ***!
  \**********************************************/
/*! exports provided: ScreenSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenSize", function() { return ScreenSize; });
var ScreenSize;
(function (ScreenSize) {
    ScreenSize[ScreenSize["xs"] = 0] = "xs";
    ScreenSize[ScreenSize["s"] = 1] = "s";
    ScreenSize[ScreenSize["m"] = 2] = "m";
    ScreenSize[ScreenSize["l"] = 3] = "l";
    ScreenSize[ScreenSize["xl"] = 4] = "xl";
})(ScreenSize || (ScreenSize = {}));


/***/ }),

/***/ "./src/app/shared/pipes/budget.currency.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/pipes/budget.currency.pipe.ts ***!
  \******************************************************/
/*! exports provided: BudgetCurrencyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetCurrencyPipe", function() { return BudgetCurrencyPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_number_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../lib/number.format */ "./src/lib/number.format.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BudgetCurrencyPipe = /** @class */ (function () {
    function BudgetCurrencyPipe() {
    }
    BudgetCurrencyPipe.prototype.transform = function (value, allowZeros, currencyFormat, currencySymbolLocation, currency) {
        if (allowZeros === void 0) { allowZeros = false; }
        if (!allowZeros && value === 0) {
            return "";
        }
        /*const activeBudget: BudgetModel = this.ngRedux.getState().activeBudget;

        if (activeBudget) {
            if (!currencyFormat) {
                currencyFormat = activeBudget.currencyFormat;
            }
            if (!currencySymbolLocation) {
                currencySymbolLocation = activeBudget.currencySymbolLocation;
            }
            if (!currency) {
                currency = activeBudget.currency;
            }
        }*/
        /*if (currencyFormat) {
            const formattedNumber: string = number_format(value, currencyFormat.decimalPlaces, currencyFormat.decimalSeparator,
                                                  currencyFormat.thousandsSeparator);

            if (currency) {
                if (currencySymbolLocation === SymbolLocation.Before) {
                    return currency.symbol + formattedNumber;
                } else if (currencySymbolLocation === SymbolLocation.After) {
                    return formattedNumber + currency.symbol;
                } else {
                    return formattedNumber;
                }
            }
        } else {*/
        return Object(_lib_number_format__WEBPACK_IMPORTED_MODULE_1__["number_format"])(value, 2, ".", ",");
        /*}*/
    };
    BudgetCurrencyPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: "budgetCurrency" })
    ], BudgetCurrencyPipe);
    return BudgetCurrencyPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/date.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/date.pipe.ts ***!
  \*******************************************/
/*! exports provided: CustomDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDatePipe", function() { return CustomDatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomDatePipe = /** @class */ (function () {
    function CustomDatePipe(datePipe) {
        this.datePipe = datePipe;
    }
    CustomDatePipe.prototype.transform = function (value, format) {
        if (format === "M") {
            return value.format("MMM").charAt(0);
        }
        else {
            return this.datePipe.transform(value, format) || "";
        }
    };
    CustomDatePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: "customDate" }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]])
    ], CustomDatePipe);
    return CustomDatePipe;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/app/shared/components/index.ts");
/* harmony import */ var _pipes_date_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/date.pipe */ "./src/app/shared/pipes/date.pipe.ts");
/* harmony import */ var _pipes_budget_currency_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/budget.currency.pipe */ "./src/app/shared/pipes/budget.currency.pipe.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm5/clr-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-currency-mask */ "./node_modules/ng2-currency-mask/index.js");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/shared/components/nav/nav.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            exports: [
                _pipes_date_pipe__WEBPACK_IMPORTED_MODULE_3__["CustomDatePipe"],
                _pipes_budget_currency_pipe__WEBPACK_IMPORTED_MODULE_4__["BudgetCurrencyPipe"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrFormsModule"],
                _components__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"],
                _components__WEBPACK_IMPORTED_MODULE_2__["TypeAheadComponent"],
                _components__WEBPACK_IMPORTED_MODULE_2__["CurrencyEditComponent"],
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                _components__WEBPACK_IMPORTED_MODULE_2__["DropdownComponent"],
                ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7__["CurrencyMaskModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]
            ],
            declarations: [
                _pipes_date_pipe__WEBPACK_IMPORTED_MODULE_3__["CustomDatePipe"],
                _pipes_budget_currency_pipe__WEBPACK_IMPORTED_MODULE_4__["BudgetCurrencyPipe"],
                _components__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"],
                _components__WEBPACK_IMPORTED_MODULE_2__["TypeAheadComponent"],
                _components__WEBPACK_IMPORTED_MODULE_2__["CurrencyEditComponent"],
                _components__WEBPACK_IMPORTED_MODULE_2__["DropdownComponent"],
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
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
// the file contents for the current environment will overwrite these during build.
// the build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// the list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    api_url: "https://localhost:4300/api/"
};


/***/ }),

/***/ "./src/lib/number.format.ts":
/*!**********************************!*\
  !*** ./src/lib/number.format.ts ***!
  \**********************************/
/*! exports provided: number_format */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "number_format", function() { return number_format; });
function number_format(number, decimals, dec_point, thousands_sep) {
    // http://kevin.vanzonneveld.net
    // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +     bugfix by: Michael White (http://getsprink.com)
    // +     bugfix by: Benjamin Lupton
    // +     bugfix by: Allan Jensen (http://www.winternet.no)
    // +    revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +     bugfix by: Howard Yeend
    // +    revised by: Luke Smith (http://lucassmith.name)
    // +     bugfix by: Diogo Resende
    // +     bugfix by: Rival
    // +      input by: Kheang Hok Chin (http://www.distantia.ca/)
    // +   improved by: davook
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Jay Klehr
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Amir Habibi (http://www.residence-mixte.com/)
    // +     bugfix by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Theriault
    // +   improved by: Drew Noakes
    // *     example 1: number_format(1234.56);
    // *     returns 1: '1,235'
    // *     example 2: number_format(1234.56, 2, ',', ' ');
    // *     returns 2: '1 234,56'
    // *     example 3: number_format(1234.5678, 2, '.', '');
    // *     returns 3: '1234.57'
    // *     example 4: number_format(67, 2, ',', '.');
    // *     returns 4: '67,00'
    // *     example 5: number_format(1000);
    // *     returns 5: '1,000'
    // *     example 6: number_format(67.311, 2);
    // *     returns 6: '67.31'
    // *     example 7: number_format(1000.55, 1);
    // *     returns 7: '1,000.6'
    // *     example 8: number_format(67000, 5, ',', '.');
    // *     returns 8: '67.000,00000'
    // *     example 9: number_format(0.9, 0);
    // *     returns 9: '1'
    // *    example 10: number_format('1.20', 2);
    // *    returns 10: '1.20'
    // *    example 11: number_format('1.20', 4);
    // *    returns 11: '1.2000'
    // *    example 12: number_format('1.2000', 3);
    // *    returns 12: '1.200'
    var n = !isFinite(+number) ? 0 : +number, prec = !isFinite(+decimals) ? 0 : Math.abs(decimals), sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep, dec = (typeof dec_point === 'undefined') ? '.' : dec_point, toFixedFix = function (n, prec) {
        // Fix for IE parseFloat(0.55).toFixed(0) = 0;
        var k = Math.pow(10, prec);
        return Math.round(n * k) / k;
    }, s = (prec ? toFixedFix(n, prec) : Math.round(n)).toString().split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\git\moneteer\moneteer-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map