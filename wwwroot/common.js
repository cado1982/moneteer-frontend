(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/accounts/models/account.model.ts":
/*!**************************************************!*\
  !*** ./src/app/accounts/models/account.model.ts ***!
  \**************************************************/
/*! exports provided: AccountModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModel", function() { return AccountModel; });
var AccountModel = /** @class */ (function () {
    function AccountModel() {
    }
    return AccountModel;
}());



/***/ }),

/***/ "./src/app/accounts/models/index.ts":
/*!******************************************!*\
  !*** ./src/app/accounts/models/index.ts ***!
  \******************************************/
/*! exports provided: AccountModel, TransactionModel, TransactionAssignmentModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _account_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.model */ "./src/app/accounts/models/account.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountModel", function() { return _account_model__WEBPACK_IMPORTED_MODULE_0__["AccountModel"]; });

/* harmony import */ var _transaction_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transaction.model */ "./src/app/accounts/models/transaction.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionModel", function() { return _transaction_model__WEBPACK_IMPORTED_MODULE_1__["TransactionModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionAssignmentModel", function() { return _transaction_model__WEBPACK_IMPORTED_MODULE_1__["TransactionAssignmentModel"]; });





/***/ }),

/***/ "./src/app/accounts/models/transaction.model.ts":
/*!******************************************************!*\
  !*** ./src/app/accounts/models/transaction.model.ts ***!
  \******************************************************/
/*! exports provided: TransactionModel, TransactionAssignmentModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionModel", function() { return TransactionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionAssignmentModel", function() { return TransactionAssignmentModel; });
var TransactionModel = /** @class */ (function () {
    function TransactionModel() {
        if (!this.id) {
            this.id = "00000000-0000-0000-0000-000000000000";
        }
    }
    return TransactionModel;
}());

var TransactionAssignmentModel = /** @class */ (function () {
    function TransactionAssignmentModel() {
    }
    return TransactionAssignmentModel;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map