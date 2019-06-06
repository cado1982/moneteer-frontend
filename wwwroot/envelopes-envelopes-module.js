(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["envelopes-envelopes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/envelopes/components/envelope-details/envelope-details.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/envelopes/components/envelope-details/envelope-details.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  envelope-details works!\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/envelopes/components/envelope/envelope.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/envelopes/components/envelope/envelope.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"first-column\">\r\n    {{envelope?.name}}\r\n</div>\r\n\r\n<div class=\"stat-column\">\r\n    <span [ngClass]=\"{'label-success': envelope.balance > 0, 'label-danger': envelope.balance < 0, 'label': envelope.balance != 0}\">{{envelope.balance | budgetCurrency:false}}</span>\r\n</div> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/envelopes/components/envelopes-categories/envelopes.categories.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/envelopes/components/envelopes-categories/envelopes.categories.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<moneteer-envelopes-column-header></moneteer-envelopes-column-header>\r\n<div style=\"overflow-y: auto;\">\r\n    <div *ngFor=\"let grouped of envelopes | groupBy: 'envelopeCategory.name' | pairs\">\r\n        <moneteer-envelopes-category [envelopeCategory]=\"grouped[0]\" [envelopes]=\"grouped[1]\" (assignedChanged)=\"onMasterCategoryAssignedChanged($event)\"></moneteer-envelopes-category>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/envelopes/components/envelopes-category-create/envelopes.category.create.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/envelopes/components/envelopes-category-create/envelopes.category.create.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<moneteer-dropdown [anchor]=\"anchor\" (opened)=\"onDropdownOpened()\">\r\n    <form>\r\n        <input #nameInput type=\"text\" autofocus name=\"name\" placeholder=\"Name\" [(ngModel)]=\"name\" />\r\n        <button class=\"btn btn-primary\" [clrLoading]=\"isCreating\" [disabled]=\"!canCreate()\" (click)=\"create()\">Create</button>\r\n    </form>\r\n</moneteer-dropdown>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/envelopes/components/envelopes-category-header/envelopes.category.header.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/envelopes/components/envelopes-category-header/envelopes.category.header.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"first-column\">\r\n    <div (click)=\"onToggled()\" class=\"category-name\">\r\n        <clr-icon class=\"is-inverse\" shape=\"caret down\" [@toggled]=\"isToggled\"></clr-icon>\r\n        <h5 [title]=\"envelopeCategory\">{{envelopeCategory}}</h5>\r\n    </div>\r\n    \r\n    \r\n    <button class=\"create-button\" type=\"button\" [hidden]=\"!showCreateCategoryButton\" class=\"btn btn-sm btn-icon btn-inverse\" #addButton>\r\n            <clr-icon shape=\"plus\"></clr-icon>\r\n    </button>\r\n    <moneteer-envelopes-category-create [anchor]=\"addButton\" [envelopeCategory]=\"envelopeCategory\"></moneteer-envelopes-category-create>\r\n</span>\r\n\r\n<span class=\"stat-column\">{{ balance | budgetCurrency:true }}</span>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/envelopes/components/envelopes-category/envelopes.category.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/envelopes/components/envelopes-category/envelopes.category.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<moneteer-envelopes-category-header (toggled)=\"isToggled = $event\" [envelopeCategory]=\"envelopeCategory\" [assigned]=\"assigned\" [activity]=\"activity\" [balance]=\"balance\">\r\n    \r\n</moneteer-envelopes-category-header>\r\n\r\n<section id=\"child-categories\" [@categoryVisible]=\"isToggled\">\r\n    <moneteer-envelope *ngFor=\"let envelope of envelopes\" (assignedChanged)=\"onChildCategoryAssignedChanged($event)\" [envelope]=\"envelope\"></moneteer-envelope>\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/envelopes/components/envelopes-column-header/envelopes.column.header.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/envelopes/components/envelopes-column-header/envelopes.column.header.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"first-column\">\r\n    <button class=\"btn btn-sm btn-primary\" #addButton>Create category</button>\r\n    <moneteer-envelopes-category-create [anchor]=\"addButton\"></moneteer-envelopes-category-create>\r\n</span>\r\n\r\n<h5 class=\"stat-column\">Balance</h5>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/envelopes/components/envelopes-header-stats-available/envelopes.header.stats.available.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/envelopes/components/envelopes-header-stats-available/envelopes.header.stats.available.component.html ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span>{{available < 0 ? 'Overassigned' : 'Available to assign'}}</span>\r\n<h2 [ngClass]=\"{'good': available > 0, 'bad': available < 0}\">{{available | budgetCurrency:true}}</h2>\r\n<button class=\"btn btn-sm btn-primary\" [hidden]=\"available < 0\" (click)=\"assign()\">Assign</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/envelopes/components/envelopes-header-stats/envelopes.header.stats.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/envelopes/components/envelopes-header-stats/envelopes.header.stats.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <moneteer-envelopes-header-stats-available [available]=\"available\"></moneteer-envelopes-header-stats-available>\r\n</section>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/envelopes/components/envelopes-header/envelopes.header.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/envelopes/components/envelopes-header/envelopes.header.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<moneteer-envelopes-header-stats [available]=\"available\"></moneteer-envelopes-header-stats>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/envelopes/components/envelopes-month-category-create/envelopes.month.category.create.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/envelopes/components/envelopes-month-category-create/envelopes.month.category.create.component.html ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<moneteer-dropdown [anchor]=\"anchor\" (opened)=\"onDropdownOpened()\">\r\n    <form>\r\n        <input #nameInput type=\"text\" autofocus name=\"name\" placeholder=\"Name\" [(ngModel)]=\"name\" />\r\n        <button class=\"btn btn-primary\" [clrLoading]=\"isCreating\" [disabled]=\"!canCreate()\" (click)=\"create()\">Create</button>\r\n    </form>\r\n</moneteer-dropdown>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/envelopes/components/home/envelopes.home.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/envelopes/components/home/envelopes.home.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<moneteer-envelopes-header [available]=\"available\"></moneteer-envelopes-header>\r\n\r\n<div id=\"workspace\">\r\n    <moneteer-envelopes-categories [envelopes]=\"envelopes\"></moneteer-envelopes-categories>\r\n\r\n    <moneteer-envelope-details></moneteer-envelope-details>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/envelopes/components/month-selector/month.selector.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/envelopes/components/month-selector/month.selector.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navigate\" (click)=\"back()\">\r\n    <i class=\"fa fa-angle-left\"></i>\r\n</div>\r\n\r\n<div class=\"year-and-month\">\r\n    <span id=\"year\">{{(selectedMonth | async)?.format(\"YYYY\")}}</span>\r\n    <span id=\"month\">{{(selectedMonth | async)?.format(\"MMM\")}}</span>\r\n</div>\r\n\r\n<div class=\"navigate\" (click)=\"forward()\">\r\n    <i class=\"fa fa-angle-right\"></i>\r\n</div>"

/***/ }),

/***/ "./src/app/envelopes/components/envelope-details/envelope-details.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/envelopes/components/envelope-details/envelope-details.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n  overflow: hidden;\n  height: 100%;\n}\n\nbody {\n  height: 100%;\n}\n\n.is-good {\n  color: #318700;\n}\n\n.is-bad {\n  color: #c92100;\n}\n\n.badge.badge-success {\n  color: #fff;\n}\n\n.container {\n  margin: 40px;\n}\n\n/* TRANSACTION TABLE */\n\n.transaction-row {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  flex-shrink: 0;\n  height: 1.15rem;\n  padding-top: 1px;\n}\n\n.selected, .editing {\n  background-color: #CFD8DC;\n  cursor: text;\n}\n\n.transaction-cell--date {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--account {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--category {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--flow {\n  flex: 0 1 100px;\n  text-align: right;\n}\n\n.transaction-cell--cleared {\n  flex: 0 1 60px;\n}\n\n.transaction-cell--description {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--payee {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--selected {\n  flex: 0 1 30px;\n  padding-left: 8px;\n}\n\n:host {\n  border-top: 1px solid #BDBDBD;\n  flex: 1 1 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW52ZWxvcGVzL2NvbXBvbmVudHMvZW52ZWxvcGUtZGV0YWlscy9EOlxcZ2l0XFxtb25ldGVlclxcbW9uZXRlZXItZnJvbnRlbmQvc3JjXFxhcHBcXGVudmVsb3Blc1xcY29tcG9uZW50c1xcZW52ZWxvcGUtZGV0YWlsc1xcZW52ZWxvcGUtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZW52ZWxvcGVzL2NvbXBvbmVudHMvZW52ZWxvcGUtZGV0YWlscy9lbnZlbG9wZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lbnZlbG9wZXMvY29tcG9uZW50cy9lbnZlbG9wZS1kZXRhaWxzL0Q6XFxnaXRcXG1vbmV0ZWVyXFxtb25ldGVlci1mcm9udGVuZC9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNsQko7O0FEcUJBO0VBQ0UsWUFBQTtBQ2xCRjs7QURxQkE7RUFDRSxjQXBCcUI7QUNFdkI7O0FEcUJBO0VBQ0UsY0F2QnFCO0FDS3ZCOztBRHFCQTtFQUNFLFdBQUE7QUNsQkY7O0FEcUJBO0VBQ0UsWUFBQTtBQ2xCRjs7QURxQkEsc0JBQUE7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNsQko7O0FEcUJBO0VBQ0kseUJBckRtQjtFQXNEbkIsWUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0FDbEJKOztBRHFCQTtFQUNJLGVBQUE7QUNsQko7O0FEcUJBO0VBQ0ksZUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNsQko7O0FEcUJBO0VBQ0ksY0FBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0FDbEJKOztBRHFCQTtFQUNJLGVBQUE7QUNsQko7O0FEcUJBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDbEJKOztBQ3RFQTtFQUNJLDZCQUFBO0VBQ0EsYUFBQTtBRHlFSiIsImZpbGUiOiJzcmMvYXBwL2VudmVsb3Blcy9jb21wb25lbnRzL2VudmVsb3BlLWRldGFpbHMvZW52ZWxvcGUtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5LWNvbG9yLWRhcms6ICAgIzQ1NUE2NDtcclxuJHByaW1hcnktY29sb3I6ICAgICAgICAjNjA3RDhCO1xyXG4kcHJpbWFyeS1jb2xvci1saWdodDogICNDRkQ4REM7XHJcbiRwcmltYXJ5LWNvbG9yLXRleHQ6ICAgI0ZGRkZGRjtcclxuJGFjY2VudC1jb2xvcjogICAgICAgICAjRkZDMTA3O1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAgICMyMTIxMjE7XHJcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogIzc1NzU3NTtcclxuJGRpdmlkZXItY29sb3I6ICAgICAgICAjQkRCREJEO1xyXG5cclxuJG1vbmV5LWdvb2Q6ICAgICAgICAgICAjMzE4NzAwO1xyXG4kbW9uZXktYmFkOiAgICAgICAgICAgICNjOTIxMDA7XHJcblxyXG4kbW9uZXktZ29vZC1zYXR1cmF0ZWQ6ICMwMEZGQzg7XHJcbiRtb25leS1iYWQtc2F0dXJhdGVkOiAgI0ZGNTU0MDtcclxuXHJcbiRlcnJvcjogICAgICAgICAgICAgICAgI2NjMDAwMDtcclxuXHJcbiRwcmltYXJ5OiAkcHJpbWFyeS1jb2xvcjtcclxuXHJcbmh0bWwge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uaXMtZ29vZCB7XHJcbiAgY29sb3I6ICRtb25leS1nb29kO1xyXG59XHJcblxyXG4uaXMtYmFkIHtcclxuICBjb2xvcjogJG1vbmV5LWJhZDtcclxufVxyXG5cclxuLmJhZGdlLmJhZGdlLXN1Y2Nlc3Mge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW46IDQwcHg7XHJcbn1cclxuXHJcbi8qIFRSQU5TQUNUSU9OIFRBQkxFICovXHJcbi50cmFuc2FjdGlvbi1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgaGVpZ2h0OiAxLjE1cmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxufVxyXG5cclxuLnNlbGVjdGVkLCAuZWRpdGluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvci1saWdodDtcclxuICAgIGN1cnNvcjogdGV4dDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLWRhdGUge1xyXG4gICAgZmxleDogMSAxIDEyMHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tYWNjb3VudCB7XHJcbiAgICBmbGV4OiAxIDEgMTIwcHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1jYXRlZ29yeSB7XHJcbiAgICBmbGV4OiAxIDEgMTIwcHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1mbG93IHtcclxuICAgIGZsZXg6IDAgMSAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tY2xlYXJlZCB7XHJcbiAgICBmbGV4OiAwIDEgNjBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLWRlc2NyaXB0aW9uIHtcclxuICAgIGZsZXg6IDEgMSAxMjBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLXBheWVlIHtcclxuICAgIGZsZXg6IDEgMSAxMjBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLXNlbGVjdGVkIHtcclxuICAgIGZsZXg6IDAgMSAzMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbn0iLCJodG1sIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaXMtZ29vZCB7XG4gIGNvbG9yOiAjMzE4NzAwO1xufVxuXG4uaXMtYmFkIHtcbiAgY29sb3I6ICNjOTIxMDA7XG59XG5cbi5iYWRnZS5iYWRnZS1zdWNjZXNzIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW46IDQwcHg7XG59XG5cbi8qIFRSQU5TQUNUSU9OIFRBQkxFICovXG4udHJhbnNhY3Rpb24tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBoZWlnaHQ6IDEuMTVyZW07XG4gIHBhZGRpbmctdG9wOiAxcHg7XG59XG5cbi5zZWxlY3RlZCwgLmVkaXRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDO1xuICBjdXJzb3I6IHRleHQ7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1kYXRlIHtcbiAgZmxleDogMSAxIDEyMHB4O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tYWNjb3VudCB7XG4gIGZsZXg6IDEgMSAxMjBweDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLWNhdGVnb3J5IHtcbiAgZmxleDogMSAxIDEyMHB4O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tZmxvdyB7XG4gIGZsZXg6IDAgMSAxMDBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1jbGVhcmVkIHtcbiAgZmxleDogMCAxIDYwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1kZXNjcmlwdGlvbiB7XG4gIGZsZXg6IDEgMSAxMjBweDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLXBheWVlIHtcbiAgZmxleDogMSAxIDEyMHB4O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tc2VsZWN0ZWQge1xuICBmbGV4OiAwIDEgMzBweDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5cbjpob3N0IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNCREJEQkQ7XG4gIGZsZXg6IDEgMSA1MCU7XG59IiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuXHJcbjpob3N0IHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkZGl2aWRlci1jb2xvcjtcclxuICAgIGZsZXg6IDEgMSA1MCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/envelopes/components/envelope-details/envelope-details.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/envelopes/components/envelope-details/envelope-details.component.ts ***!
  \*************************************************************************************/
/*! exports provided: EnvelopeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvelopeDetailsComponent", function() { return EnvelopeDetailsComponent; });
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

var EnvelopeDetailsComponent = /** @class */ (function () {
    function EnvelopeDetailsComponent() {
    }
    EnvelopeDetailsComponent.prototype.ngOnInit = function () {
    };
    EnvelopeDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'moneteer-envelope-details',
            template: __webpack_require__(/*! raw-loader!./envelope-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/envelopes/components/envelope-details/envelope-details.component.html"),
            styles: [__webpack_require__(/*! ./envelope-details.component.scss */ "./src/app/envelopes/components/envelope-details/envelope-details.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EnvelopeDetailsComponent);
    return EnvelopeDetailsComponent;
}());



/***/ }),

/***/ "./src/app/envelopes/components/envelope/envelope.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/envelopes/components/envelope/envelope.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n  overflow: hidden;\n  height: 100%;\n}\n\nbody {\n  height: 100%;\n}\n\n.is-good {\n  color: #318700;\n}\n\n.is-bad {\n  color: #c92100;\n}\n\n.badge.badge-success {\n  color: #fff;\n}\n\n.container {\n  margin: 40px;\n}\n\n/* TRANSACTION TABLE */\n\n.transaction-row {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  flex-shrink: 0;\n  height: 1.15rem;\n  padding-top: 1px;\n}\n\n.selected, .editing {\n  background-color: #CFD8DC;\n  cursor: text;\n}\n\n.transaction-cell--date {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--account {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--category {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--flow {\n  flex: 0 1 100px;\n  text-align: right;\n}\n\n.transaction-cell--cleared {\n  flex: 0 1 60px;\n}\n\n.transaction-cell--description {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--payee {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--selected {\n  flex: 0 1 30px;\n  padding-left: 8px;\n}\n\n:host {\n  display: flex;\n  padding: 5px;\n  border-bottom: 1px solid #BDBDBD;\n  flex: 0 0 auto;\n}\n\n.good {\n  background-color: #318700;\n  color: #ffffff;\n  border-radius: 10px;\n}\n\n.bad {\n  background-color: #c92100;\n  color: #ffffff;\n  border-radius: 10px;\n}\n\n.stat-balance {\n  padding: 3px 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW52ZWxvcGVzL2NvbXBvbmVudHMvZW52ZWxvcGUvRDpcXGdpdFxcbW9uZXRlZXJcXG1vbmV0ZWVyLWZyb250ZW5kL3NyY1xcYXBwXFxlbnZlbG9wZXNcXGNvbXBvbmVudHNcXGVudmVsb3BlXFxlbnZlbG9wZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZW52ZWxvcGVzL2NvbXBvbmVudHMvZW52ZWxvcGUvZW52ZWxvcGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VudmVsb3Blcy9jb21wb25lbnRzL2VudmVsb3BlL0Q6XFxnaXRcXG1vbmV0ZWVyXFxtb25ldGVlci1mcm9udGVuZC9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNsQko7O0FEcUJBO0VBQ0UsWUFBQTtBQ2xCRjs7QURxQkE7RUFDRSxjQXBCcUI7QUNFdkI7O0FEcUJBO0VBQ0UsY0F2QnFCO0FDS3ZCOztBRHFCQTtFQUNFLFdBQUE7QUNsQkY7O0FEcUJBO0VBQ0UsWUFBQTtBQ2xCRjs7QURxQkEsc0JBQUE7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNsQko7O0FEcUJBO0VBQ0kseUJBckRtQjtFQXNEbkIsWUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0FDbEJKOztBRHFCQTtFQUNJLGVBQUE7QUNsQko7O0FEcUJBO0VBQ0ksZUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNsQko7O0FEcUJBO0VBQ0ksY0FBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0FDbEJKOztBRHFCQTtFQUNJLGVBQUE7QUNsQko7O0FEcUJBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDbEJKOztBQ3RFQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0FEeUVKOztBQ3RFQTtFQUNJLHlCRkRtQjtFRUVuQixjQUFBO0VBQ0EsbUJBQUE7QUR5RUo7O0FDdEVBO0VBQ0kseUJGTm1CO0VFT25CLGNBQUE7RUFDQSxtQkFBQTtBRHlFSjs7QUN0RUE7RUFDSSxnQkFBQTtBRHlFSiIsImZpbGUiOiJzcmMvYXBwL2VudmVsb3Blcy9jb21wb25lbnRzL2VudmVsb3BlL2VudmVsb3BlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnktY29sb3ItZGFyazogICAjNDU1QTY0O1xyXG4kcHJpbWFyeS1jb2xvcjogICAgICAgICM2MDdEOEI7XHJcbiRwcmltYXJ5LWNvbG9yLWxpZ2h0OiAgI0NGRDhEQztcclxuJHByaW1hcnktY29sb3ItdGV4dDogICAjRkZGRkZGO1xyXG4kYWNjZW50LWNvbG9yOiAgICAgICAgICNGRkMxMDc7XHJcbiRwcmltYXJ5LXRleHQtY29sb3I6ICAgIzIxMjEyMTtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjNzU3NTc1O1xyXG4kZGl2aWRlci1jb2xvcjogICAgICAgICNCREJEQkQ7XHJcblxyXG4kbW9uZXktZ29vZDogICAgICAgICAgICMzMTg3MDA7XHJcbiRtb25leS1iYWQ6ICAgICAgICAgICAgI2M5MjEwMDtcclxuXHJcbiRtb25leS1nb29kLXNhdHVyYXRlZDogIzAwRkZDODtcclxuJG1vbmV5LWJhZC1zYXR1cmF0ZWQ6ICAjRkY1NTQwO1xyXG5cclxuJGVycm9yOiAgICAgICAgICAgICAgICAjY2MwMDAwO1xyXG5cclxuJHByaW1hcnk6ICRwcmltYXJ5LWNvbG9yO1xyXG5cclxuaHRtbCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5pcy1nb29kIHtcclxuICBjb2xvcjogJG1vbmV5LWdvb2Q7XHJcbn1cclxuXHJcbi5pcy1iYWQge1xyXG4gIGNvbG9yOiAkbW9uZXktYmFkO1xyXG59XHJcblxyXG4uYmFkZ2UuYmFkZ2Utc3VjY2VzcyB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1hcmdpbjogNDBweDtcclxufVxyXG5cclxuLyogVFJBTlNBQ1RJT04gVEFCTEUgKi9cclxuLnRyYW5zYWN0aW9uLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBoZWlnaHQ6IDEuMTVyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG59XHJcblxyXG4uc2VsZWN0ZWQsIC5lZGl0aW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yLWxpZ2h0O1xyXG4gICAgY3Vyc29yOiB0ZXh0O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tZGF0ZSB7XHJcbiAgICBmbGV4OiAxIDEgMTIwcHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1hY2NvdW50IHtcclxuICAgIGZsZXg6IDEgMSAxMjBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLWNhdGVnb3J5IHtcclxuICAgIGZsZXg6IDEgMSAxMjBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLWZsb3cge1xyXG4gICAgZmxleDogMCAxIDEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1jbGVhcmVkIHtcclxuICAgIGZsZXg6IDAgMSA2MHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tZGVzY3JpcHRpb24ge1xyXG4gICAgZmxleDogMSAxIDEyMHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tcGF5ZWUge1xyXG4gICAgZmxleDogMSAxIDEyMHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tc2VsZWN0ZWQge1xyXG4gICAgZmxleDogMCAxIDMwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxufSIsImh0bWwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pcy1nb29kIHtcbiAgY29sb3I6ICMzMTg3MDA7XG59XG5cbi5pcy1iYWQge1xuICBjb2xvcjogI2M5MjEwMDtcbn1cblxuLmJhZGdlLmJhZGdlLXN1Y2Nlc3Mge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogNDBweDtcbn1cblxuLyogVFJBTlNBQ1RJT04gVEFCTEUgKi9cbi50cmFuc2FjdGlvbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGhlaWdodDogMS4xNXJlbTtcbiAgcGFkZGluZy10b3A6IDFweDtcbn1cblxuLnNlbGVjdGVkLCAuZWRpdGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REM7XG4gIGN1cnNvcjogdGV4dDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLWRhdGUge1xuICBmbGV4OiAxIDEgMTIwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1hY2NvdW50IHtcbiAgZmxleDogMSAxIDEyMHB4O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tY2F0ZWdvcnkge1xuICBmbGV4OiAxIDEgMTIwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1mbG93IHtcbiAgZmxleDogMCAxIDEwMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLWNsZWFyZWQge1xuICBmbGV4OiAwIDEgNjBweDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLWRlc2NyaXB0aW9uIHtcbiAgZmxleDogMSAxIDEyMHB4O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tcGF5ZWUge1xuICBmbGV4OiAxIDEgMTIwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1zZWxlY3RlZCB7XG4gIGZsZXg6IDAgMSAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQkRCREJEO1xuICBmbGV4OiAwIDAgYXV0bztcbn1cblxuLmdvb2Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzE4NzAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmJhZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOTIxMDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uc3RhdC1iYWxhbmNlIHtcbiAgcGFkZGluZzogM3B4IDdweDtcbn0iLCJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi9zdHlsZXMuc2Nzc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZGl2aWRlci1jb2xvcjtcclxuICAgIGZsZXg6IDAgMCBhdXRvO1xyXG59XHJcblxyXG4uZ29vZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbW9uZXktZ29vZDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmJhZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbW9uZXktYmFkO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uc3RhdC1iYWxhbmNlIHtcclxuICAgIHBhZGRpbmc6IDNweCA3cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/envelopes/components/envelope/envelope.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/envelopes/components/envelope/envelope.component.ts ***!
  \*********************************************************************/
/*! exports provided: EnvelopeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvelopeComponent", function() { return EnvelopeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/index */ "./src/app/core/services/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/models */ "./src/app/core/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EnvelopeComponent = /** @class */ (function () {
    function EnvelopeComponent(activatedRoute, notificationsService, ngZone, store, actions$, changeDetector) {
        this.activatedRoute = activatedRoute;
        this.notificationsService = notificationsService;
        this.ngZone = ngZone;
        this.store = store;
        this.actions$ = actions$;
        this.changeDetector = changeDetector;
        this.assignedChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EnvelopeComponent.prototype.ngOnChanges = function (changes) {
        if (changes.monthCategory) {
            this.assignedValue = changes.monthCategory.currentValue.assigned;
        }
        if (changes.assignedValue) {
            console.log(changes);
        }
    };
    EnvelopeComponent.prototype.ngOnInit = function () {
    };
    EnvelopeComponent.prototype.showTransactions = function () {
        //console.log(this.monthCategory.activityTransactions);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _core_models__WEBPACK_IMPORTED_MODULE_5__["EnvelopeModel"])
    ], EnvelopeComponent.prototype, "envelope", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EnvelopeComponent.prototype, "assignedChanged", void 0);
    EnvelopeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "moneteer-envelope",
            template: __webpack_require__(/*! raw-loader!./envelope.component.html */ "./node_modules/raw-loader/index.js!./src/app/envelopes/components/envelope/envelope.component.html"),
            styles: [__webpack_require__(/*! ./envelope.component.scss */ "./src/app/envelopes/components/envelope/envelope.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _core_services_index__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], EnvelopeComponent);
    return EnvelopeComponent;
}());



/***/ }),

/***/ "./src/app/envelopes/components/envelopes-categories/envelopes.categories.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/envelopes/components/envelopes-categories/envelopes.categories.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n  overflow: hidden;\n  height: 100%;\n}\n\nbody {\n  height: 100%;\n}\n\n.is-good {\n  color: #318700;\n}\n\n.is-bad {\n  color: #c92100;\n}\n\n.badge.badge-success {\n  color: #fff;\n}\n\n.container {\n  margin: 40px;\n}\n\n/* TRANSACTION TABLE */\n\n.transaction-row {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  flex-shrink: 0;\n  height: 1.15rem;\n  padding-top: 1px;\n}\n\n.selected, .editing {\n  background-color: #CFD8DC;\n  cursor: text;\n}\n\n.transaction-cell--date {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--account {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--category {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--flow {\n  flex: 0 1 100px;\n  text-align: right;\n}\n\n.transaction-cell--cleared {\n  flex: 0 1 60px;\n}\n\n.transaction-cell--description {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--payee {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--selected {\n  flex: 0 1 30px;\n  padding-left: 8px;\n}\n\n:host {\n  border-top: 1px solid #BDBDBD;\n  flex: 1 1 50%;\n  display: flex;\n  flex-direction: column;\n  padding: 0.5rem;\n}\n\n::ng-deep .first-column {\n  flex: 0 0 200px;\n}\n\n::ng-deep .stat-column {\n  flex: 0 1 33.3%;\n  text-align: center;\n}\n\n::ng-deep h5 {\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW52ZWxvcGVzL2NvbXBvbmVudHMvZW52ZWxvcGVzLWNhdGVnb3JpZXMvRDpcXGdpdFxcbW9uZXRlZXJcXG1vbmV0ZWVyLWZyb250ZW5kL3NyY1xcYXBwXFxlbnZlbG9wZXNcXGNvbXBvbmVudHNcXGVudmVsb3Blcy1jYXRlZ29yaWVzXFxlbnZlbG9wZXMuY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZW52ZWxvcGVzL2NvbXBvbmVudHMvZW52ZWxvcGVzLWNhdGVnb3JpZXMvZW52ZWxvcGVzLmNhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VudmVsb3Blcy9jb21wb25lbnRzL2VudmVsb3Blcy1jYXRlZ29yaWVzL0Q6XFxnaXRcXG1vbmV0ZWVyXFxtb25ldGVlci1mcm9udGVuZC9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNsQko7O0FEcUJBO0VBQ0UsWUFBQTtBQ2xCRjs7QURxQkE7RUFDRSxjQXBCcUI7QUNFdkI7O0FEcUJBO0VBQ0UsY0F2QnFCO0FDS3ZCOztBRHFCQTtFQUNFLFdBQUE7QUNsQkY7O0FEcUJBO0VBQ0UsWUFBQTtBQ2xCRjs7QURxQkEsc0JBQUE7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNsQko7O0FEcUJBO0VBQ0kseUJBckRtQjtFQXNEbkIsWUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0FDbEJKOztBRHFCQTtFQUNJLGVBQUE7QUNsQko7O0FEcUJBO0VBQ0ksZUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNsQko7O0FEcUJBO0VBQ0ksY0FBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0FDbEJKOztBRHFCQTtFQUNJLGVBQUE7QUNsQko7O0FEcUJBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDbEJKOztBQ3RFQTtFQUNJLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUR5RUo7O0FDdEVBO0VBQ0ksZUFBQTtBRHlFSjs7QUN0RUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUR5RUo7O0FDdEVBO0VBQ0ksYUFBQTtBRHlFSiIsImZpbGUiOiJzcmMvYXBwL2VudmVsb3Blcy9jb21wb25lbnRzL2VudmVsb3Blcy1jYXRlZ29yaWVzL2VudmVsb3Blcy5jYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnktY29sb3ItZGFyazogICAjNDU1QTY0O1xyXG4kcHJpbWFyeS1jb2xvcjogICAgICAgICM2MDdEOEI7XHJcbiRwcmltYXJ5LWNvbG9yLWxpZ2h0OiAgI0NGRDhEQztcclxuJHByaW1hcnktY29sb3ItdGV4dDogICAjRkZGRkZGO1xyXG4kYWNjZW50LWNvbG9yOiAgICAgICAgICNGRkMxMDc7XHJcbiRwcmltYXJ5LXRleHQtY29sb3I6ICAgIzIxMjEyMTtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjNzU3NTc1O1xyXG4kZGl2aWRlci1jb2xvcjogICAgICAgICNCREJEQkQ7XHJcblxyXG4kbW9uZXktZ29vZDogICAgICAgICAgICMzMTg3MDA7XHJcbiRtb25leS1iYWQ6ICAgICAgICAgICAgI2M5MjEwMDtcclxuXHJcbiRtb25leS1nb29kLXNhdHVyYXRlZDogIzAwRkZDODtcclxuJG1vbmV5LWJhZC1zYXR1cmF0ZWQ6ICAjRkY1NTQwO1xyXG5cclxuJGVycm9yOiAgICAgICAgICAgICAgICAjY2MwMDAwO1xyXG5cclxuJHByaW1hcnk6ICRwcmltYXJ5LWNvbG9yO1xyXG5cclxuaHRtbCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5pcy1nb29kIHtcclxuICBjb2xvcjogJG1vbmV5LWdvb2Q7XHJcbn1cclxuXHJcbi5pcy1iYWQge1xyXG4gIGNvbG9yOiAkbW9uZXktYmFkO1xyXG59XHJcblxyXG4uYmFkZ2UuYmFkZ2Utc3VjY2VzcyB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1hcmdpbjogNDBweDtcclxufVxyXG5cclxuLyogVFJBTlNBQ1RJT04gVEFCTEUgKi9cclxuLnRyYW5zYWN0aW9uLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBoZWlnaHQ6IDEuMTVyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG59XHJcblxyXG4uc2VsZWN0ZWQsIC5lZGl0aW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yLWxpZ2h0O1xyXG4gICAgY3Vyc29yOiB0ZXh0O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tZGF0ZSB7XHJcbiAgICBmbGV4OiAxIDEgMTIwcHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1hY2NvdW50IHtcclxuICAgIGZsZXg6IDEgMSAxMjBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLWNhdGVnb3J5IHtcclxuICAgIGZsZXg6IDEgMSAxMjBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLWZsb3cge1xyXG4gICAgZmxleDogMCAxIDEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1jbGVhcmVkIHtcclxuICAgIGZsZXg6IDAgMSA2MHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tZGVzY3JpcHRpb24ge1xyXG4gICAgZmxleDogMSAxIDEyMHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tcGF5ZWUge1xyXG4gICAgZmxleDogMSAxIDEyMHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tc2VsZWN0ZWQge1xyXG4gICAgZmxleDogMCAxIDMwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxufSIsImh0bWwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pcy1nb29kIHtcbiAgY29sb3I6ICMzMTg3MDA7XG59XG5cbi5pcy1iYWQge1xuICBjb2xvcjogI2M5MjEwMDtcbn1cblxuLmJhZGdlLmJhZGdlLXN1Y2Nlc3Mge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogNDBweDtcbn1cblxuLyogVFJBTlNBQ1RJT04gVEFCTEUgKi9cbi50cmFuc2FjdGlvbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGhlaWdodDogMS4xNXJlbTtcbiAgcGFkZGluZy10b3A6IDFweDtcbn1cblxuLnNlbGVjdGVkLCAuZWRpdGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REM7XG4gIGN1cnNvcjogdGV4dDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLWRhdGUge1xuICBmbGV4OiAxIDEgMTIwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1hY2NvdW50IHtcbiAgZmxleDogMSAxIDEyMHB4O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tY2F0ZWdvcnkge1xuICBmbGV4OiAxIDEgMTIwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1mbG93IHtcbiAgZmxleDogMCAxIDEwMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLWNsZWFyZWQge1xuICBmbGV4OiAwIDEgNjBweDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLWRlc2NyaXB0aW9uIHtcbiAgZmxleDogMSAxIDEyMHB4O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tcGF5ZWUge1xuICBmbGV4OiAxIDEgMTIwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1zZWxlY3RlZCB7XG4gIGZsZXg6IDAgMSAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cblxuOmhvc3Qge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0JEQkRCRDtcbiAgZmxleDogMSAxIDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG46Om5nLWRlZXAgLmZpcnN0LWNvbHVtbiB7XG4gIGZsZXg6IDAgMCAyMDBweDtcbn1cblxuOjpuZy1kZWVwIC5zdGF0LWNvbHVtbiB7XG4gIGZsZXg6IDAgMSAzMy4zJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46Om5nLWRlZXAgaDUge1xuICBtYXJnaW4tdG9wOiAwO1xufSIsIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGRpdmlkZXItY29sb3I7XHJcbiAgICBmbGV4OiAxIDEgNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZmlyc3QtY29sdW1uIHtcclxuICAgIGZsZXg6IDAgMCAyMDBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5zdGF0LWNvbHVtbiB7XHJcbiAgICBmbGV4OiAwIDEgMzMuMyU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbjo6bmctZGVlcCBoNSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/envelopes/components/envelopes-categories/envelopes.categories.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/envelopes/components/envelopes-categories/envelopes.categories.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: EnvelopesCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvelopesCategoriesComponent", function() { return EnvelopesCategoriesComponent; });
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

var EnvelopesCategoriesComponent = /** @class */ (function () {
    function EnvelopesCategoriesComponent() {
        this.assignedChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EnvelopesCategoriesComponent.prototype.onMasterCategoryAssignedChanged = function (changes) {
        this.assignedChanged.emit(changes);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EnvelopesCategoriesComponent.prototype, "envelopes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EnvelopesCategoriesComponent.prototype, "assignedChanged", void 0);
    EnvelopesCategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "moneteer-envelopes-categories",
            template: __webpack_require__(/*! raw-loader!./envelopes.categories.component.html */ "./node_modules/raw-loader/index.js!./src/app/envelopes/components/envelopes-categories/envelopes.categories.component.html"),
            styles: [__webpack_require__(/*! ./envelopes.categories.component.scss */ "./src/app/envelopes/components/envelopes-categories/envelopes.categories.component.scss")]
        })
    ], EnvelopesCategoriesComponent);
    return EnvelopesCategoriesComponent;
}());



/***/ }),

/***/ "./src/app/envelopes/components/envelopes-category-create/envelopes.category.create.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/envelopes/components/envelopes-category-create/envelopes.category.create.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n  overflow: hidden;\n  height: 100%;\n}\n\nbody {\n  height: 100%;\n}\n\n.is-good {\n  color: #318700;\n}\n\n.is-bad {\n  color: #c92100;\n}\n\n.badge.badge-success {\n  color: #fff;\n}\n\n.container {\n  margin: 40px;\n}\n\n/* TRANSACTION TABLE */\n\n.transaction-row {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  flex-shrink: 0;\n  height: 1.15rem;\n  padding-top: 1px;\n}\n\n.selected, .editing {\n  background-color: #CFD8DC;\n  cursor: text;\n}\n\n.transaction-cell--date {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--account {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--category {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--flow {\n  flex: 0 1 100px;\n  text-align: right;\n}\n\n.transaction-cell--cleared {\n  flex: 0 1 60px;\n}\n\n.transaction-cell--description {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--payee {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--selected {\n  flex: 0 1 30px;\n  padding-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW52ZWxvcGVzL2NvbXBvbmVudHMvZW52ZWxvcGVzLWNhdGVnb3J5LWNyZWF0ZS9EOlxcZ2l0XFxtb25ldGVlclxcbW9uZXRlZXItZnJvbnRlbmQvc3JjXFxhcHBcXGVudmVsb3Blc1xcY29tcG9uZW50c1xcZW52ZWxvcGVzLWNhdGVnb3J5LWNyZWF0ZVxcZW52ZWxvcGVzLmNhdGVnb3J5LmNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZW52ZWxvcGVzL2NvbXBvbmVudHMvZW52ZWxvcGVzLWNhdGVnb3J5LWNyZWF0ZS9lbnZlbG9wZXMuY2F0ZWdvcnkuY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ2xCSjs7QURxQkE7RUFDRSxZQUFBO0FDbEJGOztBRHFCQTtFQUNFLGNBcEJxQjtBQ0V2Qjs7QURxQkE7RUFDRSxjQXZCcUI7QUNLdkI7O0FEcUJBO0VBQ0UsV0FBQTtBQ2xCRjs7QURxQkE7RUFDRSxZQUFBO0FDbEJGOztBRHFCQSxzQkFBQTs7QUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ2xCSjs7QURxQkE7RUFDSSx5QkFyRG1CO0VBc0RuQixZQUFBO0FDbEJKOztBRHFCQTtFQUNJLGVBQUE7QUNsQko7O0FEcUJBO0VBQ0ksZUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0FDbEJKOztBRHFCQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ2xCSjs7QURxQkE7RUFDSSxjQUFBO0FDbEJKOztBRHFCQTtFQUNJLGVBQUE7QUNsQko7O0FEcUJBO0VBQ0ksZUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNsQkoiLCJmaWxlIjoic3JjL2FwcC9lbnZlbG9wZXMvY29tcG9uZW50cy9lbnZlbG9wZXMtY2F0ZWdvcnktY3JlYXRlL2VudmVsb3Blcy5jYXRlZ29yeS5jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS1jb2xvci1kYXJrOiAgICM0NTVBNjQ7XHJcbiRwcmltYXJ5LWNvbG9yOiAgICAgICAgIzYwN0Q4QjtcclxuJHByaW1hcnktY29sb3ItbGlnaHQ6ICAjQ0ZEOERDO1xyXG4kcHJpbWFyeS1jb2xvci10ZXh0OiAgICNGRkZGRkY7XHJcbiRhY2NlbnQtY29sb3I6ICAgICAgICAgI0ZGQzEwNztcclxuJHByaW1hcnktdGV4dC1jb2xvcjogICAjMjEyMTIxO1xyXG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6ICM3NTc1NzU7XHJcbiRkaXZpZGVyLWNvbG9yOiAgICAgICAgI0JEQkRCRDtcclxuXHJcbiRtb25leS1nb29kOiAgICAgICAgICAgIzMxODcwMDtcclxuJG1vbmV5LWJhZDogICAgICAgICAgICAjYzkyMTAwO1xyXG5cclxuJG1vbmV5LWdvb2Qtc2F0dXJhdGVkOiAjMDBGRkM4O1xyXG4kbW9uZXktYmFkLXNhdHVyYXRlZDogICNGRjU1NDA7XHJcblxyXG4kZXJyb3I6ICAgICAgICAgICAgICAgICNjYzAwMDA7XHJcblxyXG4kcHJpbWFyeTogJHByaW1hcnktY29sb3I7XHJcblxyXG5odG1sIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmlzLWdvb2Qge1xyXG4gIGNvbG9yOiAkbW9uZXktZ29vZDtcclxufVxyXG5cclxuLmlzLWJhZCB7XHJcbiAgY29sb3I6ICRtb25leS1iYWQ7XHJcbn1cclxuXHJcbi5iYWRnZS5iYWRnZS1zdWNjZXNzIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiA0MHB4O1xyXG59XHJcblxyXG4vKiBUUkFOU0FDVElPTiBUQUJMRSAqL1xyXG4udHJhbnNhY3Rpb24tcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIGhlaWdodDogMS4xNXJlbTtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbn1cclxuXHJcbi5zZWxlY3RlZCwgLmVkaXRpbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3ItbGlnaHQ7XHJcbiAgICBjdXJzb3I6IHRleHQ7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1kYXRlIHtcclxuICAgIGZsZXg6IDEgMSAxMjBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLWFjY291bnQge1xyXG4gICAgZmxleDogMSAxIDEyMHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tY2F0ZWdvcnkge1xyXG4gICAgZmxleDogMSAxIDEyMHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tZmxvdyB7XHJcbiAgICBmbGV4OiAwIDEgMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLWNsZWFyZWQge1xyXG4gICAgZmxleDogMCAxIDYwcHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1kZXNjcmlwdGlvbiB7XHJcbiAgICBmbGV4OiAxIDEgMTIwcHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1wYXllZSB7XHJcbiAgICBmbGV4OiAxIDEgMTIwcHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1zZWxlY3RlZCB7XHJcbiAgICBmbGV4OiAwIDEgMzBweDtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG59IiwiaHRtbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmlzLWdvb2Qge1xuICBjb2xvcjogIzMxODcwMDtcbn1cblxuLmlzLWJhZCB7XG4gIGNvbG9yOiAjYzkyMTAwO1xufVxuXG4uYmFkZ2UuYmFkZ2Utc3VjY2VzcyB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luOiA0MHB4O1xufVxuXG4vKiBUUkFOU0FDVElPTiBUQUJMRSAqL1xuLnRyYW5zYWN0aW9uLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBmbGV4LXNocmluazogMDtcbiAgaGVpZ2h0OiAxLjE1cmVtO1xuICBwYWRkaW5nLXRvcDogMXB4O1xufVxuXG4uc2VsZWN0ZWQsIC5lZGl0aW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NGRDhEQztcbiAgY3Vyc29yOiB0ZXh0O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tZGF0ZSB7XG4gIGZsZXg6IDEgMSAxMjBweDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLWFjY291bnQge1xuICBmbGV4OiAxIDEgMTIwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1jYXRlZ29yeSB7XG4gIGZsZXg6IDEgMSAxMjBweDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLWZsb3cge1xuICBmbGV4OiAwIDEgMTAwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tY2xlYXJlZCB7XG4gIGZsZXg6IDAgMSA2MHB4O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tZGVzY3JpcHRpb24ge1xuICBmbGV4OiAxIDEgMTIwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1wYXllZSB7XG4gIGZsZXg6IDEgMSAxMjBweDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLXNlbGVjdGVkIHtcbiAgZmxleDogMCAxIDMwcHg7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/envelopes/components/envelopes-category-create/envelopes.category.create.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/envelopes/components/envelopes-category-create/envelopes.category.create.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: EnvelopesCategoryCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvelopesCategoryCreateComponent", function() { return EnvelopesCategoryCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/index */ "./src/app/core/services/index.ts");
/* harmony import */ var _shared_components_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/index */ "./src/app/shared/components/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/models */ "./src/app/core/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EnvelopesCategoryCreateComponent = /** @class */ (function () {
    function EnvelopesCategoryCreateComponent(notificationsService, store, route) {
        this.notificationsService = notificationsService;
        this.store = store;
        this.route = route;
        this.isCreating = false;
    }
    EnvelopesCategoryCreateComponent.prototype.create = function () {
        if (!this.canCreate()) {
            return;
        }
        this.isCreating = true;
        if (!this.route.snapshot.parent || !this.route.snapshot.parent.parent || !this.route.snapshot.parent.params || !this.route.snapshot.parent.params.budgetId) {
            throw new Error("Unable to find budgetId from route");
        }
        var budgetId = this.route.snapshot.parent.parent.params.budgetId;
        // this.store.dispatch(new CreateMasterCategoryAction({budgetId, category: new MasterCategoryModel(this.name)}));
        /*this.categoryActions.createMasterCategory(this.name).retry(2).finally(() => {
            this.isCreating = false;
        }).subscribe(c => {
            this.notificationsService.success("Catetory created");
            this.dropDown.close();
        }, err => {
            this.notificationsService.error("Something went wrong. Please try again later");
        });*/
    };
    EnvelopesCategoryCreateComponent.prototype.canCreate = function () {
        return !!this.name;
    };
    EnvelopesCategoryCreateComponent.prototype.onDropdownOpened = function () {
        var _this = this;
        setTimeout(function () { return _this.nameInput.nativeElement.focus(); }, 1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], EnvelopesCategoryCreateComponent.prototype, "anchor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _core_models__WEBPACK_IMPORTED_MODULE_5__["EnvelopeCategoryModel"])
    ], EnvelopesCategoryCreateComponent.prototype, "envelopeCategory", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_components_index__WEBPACK_IMPORTED_MODULE_2__["DropdownComponent"], { static: false }),
        __metadata("design:type", _shared_components_index__WEBPACK_IMPORTED_MODULE_2__["DropdownComponent"])
    ], EnvelopesCategoryCreateComponent.prototype, "dropDown", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("nameInput", { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], EnvelopesCategoryCreateComponent.prototype, "nameInput", void 0);
    EnvelopesCategoryCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "moneteer-envelopes-category-create",
            template: __webpack_require__(/*! raw-loader!./envelopes.category.create.component.html */ "./node_modules/raw-loader/index.js!./src/app/envelopes/components/envelopes-category-create/envelopes.category.create.component.html"),
            styles: [__webpack_require__(/*! ./envelopes.category.create.component.scss */ "./src/app/envelopes/components/envelopes-category-create/envelopes.category.create.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_index__WEBPACK_IMPORTED_MODULE_1__["NotificationsService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], EnvelopesCategoryCreateComponent);
    return EnvelopesCategoryCreateComponent;
}());



/***/ }),

/***/ "./src/app/envelopes/components/envelopes-category-header/envelopes.category.header.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/envelopes/components/envelopes-category-header/envelopes.category.header.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n  overflow: hidden;\n  height: 100%;\n}\n\nbody {\n  height: 100%;\n}\n\n.is-good {\n  color: #318700;\n}\n\n.is-bad {\n  color: #c92100;\n}\n\n.badge.badge-success {\n  color: #fff;\n}\n\n.container {\n  margin: 40px;\n}\n\n/* TRANSACTION TABLE */\n\n.transaction-row {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  flex-shrink: 0;\n  height: 1.15rem;\n  padding-top: 1px;\n}\n\n.selected, .editing {\n  background-color: #CFD8DC;\n  cursor: text;\n}\n\n.transaction-cell--date {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--account {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--category {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--flow {\n  flex: 0 1 100px;\n  text-align: right;\n}\n\n.transaction-cell--cleared {\n  flex: 0 1 60px;\n}\n\n.transaction-cell--description {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--payee {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--selected {\n  flex: 0 1 30px;\n  padding-left: 8px;\n}\n\n:host {\n  display: flex;\n  background-color: #607D8B;\n  color: #FFFFFF;\n  padding: 5px;\n  font-weight: bold;\n}\n\nh5 {\n  color: #FFFFFF;\n  margin-left: 0.3em;\n}\n\n.category-name {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  cursor: pointer;\n  margin: -5px;\n  padding-left: 5px;\n  white-space: nowrap;\n  text-overflow: clip;\n  flex: 1 0 auto;\n}\n\n.first-column {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.btn {\n  margin: 0 0 0 5px;\n  padding: 0 0.25rem;\n}\n\n.create-button {\n  flex: 0 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW52ZWxvcGVzL2NvbXBvbmVudHMvZW52ZWxvcGVzLWNhdGVnb3J5LWhlYWRlci9EOlxcZ2l0XFxtb25ldGVlclxcbW9uZXRlZXItZnJvbnRlbmQvc3JjXFxhcHBcXGVudmVsb3Blc1xcY29tcG9uZW50c1xcZW52ZWxvcGVzLWNhdGVnb3J5LWhlYWRlclxcZW52ZWxvcGVzLmNhdGVnb3J5LmhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZW52ZWxvcGVzL2NvbXBvbmVudHMvZW52ZWxvcGVzLWNhdGVnb3J5LWhlYWRlci9lbnZlbG9wZXMuY2F0ZWdvcnkuaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lbnZlbG9wZXMvY29tcG9uZW50cy9lbnZlbG9wZXMtY2F0ZWdvcnktaGVhZGVyL0Q6XFxnaXRcXG1vbmV0ZWVyXFxtb25ldGVlci1mcm9udGVuZC9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNsQko7O0FEcUJBO0VBQ0UsWUFBQTtBQ2xCRjs7QURxQkE7RUFDRSxjQXBCcUI7QUNFdkI7O0FEcUJBO0VBQ0UsY0F2QnFCO0FDS3ZCOztBRHFCQTtFQUNFLFdBQUE7QUNsQkY7O0FEcUJBO0VBQ0UsWUFBQTtBQ2xCRjs7QURxQkEsc0JBQUE7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNsQko7O0FEcUJBO0VBQ0kseUJBckRtQjtFQXNEbkIsWUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0FDbEJKOztBRHFCQTtFQUNJLGVBQUE7QUNsQko7O0FEcUJBO0VBQ0ksZUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNsQko7O0FEcUJBO0VBQ0ksY0FBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0FDbEJKOztBRHFCQTtFQUNJLGVBQUE7QUNsQko7O0FEcUJBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDbEJKOztBQ3RFQTtFQUNJLGFBQUE7RUFDQSx5QkZIbUI7RUVJbkIsY0ZGbUI7RUVHbkIsWUFBQTtFQUNBLGlCQUFBO0FEeUVKOztBQ3RFQTtFQUNJLGNGUm1CO0VFU25CLGtCQUFBO0FEeUVKOztBQ3RFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FEeUVKOztBQ3RFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FEeUVKOztBQ3RFQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUR5RUo7O0FDdEVBO0VBQ0ksY0FBQTtBRHlFSiIsImZpbGUiOiJzcmMvYXBwL2VudmVsb3Blcy9jb21wb25lbnRzL2VudmVsb3Blcy1jYXRlZ29yeS1oZWFkZXIvZW52ZWxvcGVzLmNhdGVnb3J5LmhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5LWNvbG9yLWRhcms6ICAgIzQ1NUE2NDtcclxuJHByaW1hcnktY29sb3I6ICAgICAgICAjNjA3RDhCO1xyXG4kcHJpbWFyeS1jb2xvci1saWdodDogICNDRkQ4REM7XHJcbiRwcmltYXJ5LWNvbG9yLXRleHQ6ICAgI0ZGRkZGRjtcclxuJGFjY2VudC1jb2xvcjogICAgICAgICAjRkZDMTA3O1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAgICMyMTIxMjE7XHJcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogIzc1NzU3NTtcclxuJGRpdmlkZXItY29sb3I6ICAgICAgICAjQkRCREJEO1xyXG5cclxuJG1vbmV5LWdvb2Q6ICAgICAgICAgICAjMzE4NzAwO1xyXG4kbW9uZXktYmFkOiAgICAgICAgICAgICNjOTIxMDA7XHJcblxyXG4kbW9uZXktZ29vZC1zYXR1cmF0ZWQ6ICMwMEZGQzg7XHJcbiRtb25leS1iYWQtc2F0dXJhdGVkOiAgI0ZGNTU0MDtcclxuXHJcbiRlcnJvcjogICAgICAgICAgICAgICAgI2NjMDAwMDtcclxuXHJcbiRwcmltYXJ5OiAkcHJpbWFyeS1jb2xvcjtcclxuXHJcbmh0bWwge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uaXMtZ29vZCB7XHJcbiAgY29sb3I6ICRtb25leS1nb29kO1xyXG59XHJcblxyXG4uaXMtYmFkIHtcclxuICBjb2xvcjogJG1vbmV5LWJhZDtcclxufVxyXG5cclxuLmJhZGdlLmJhZGdlLXN1Y2Nlc3Mge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW46IDQwcHg7XHJcbn1cclxuXHJcbi8qIFRSQU5TQUNUSU9OIFRBQkxFICovXHJcbi50cmFuc2FjdGlvbi1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgaGVpZ2h0OiAxLjE1cmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxufVxyXG5cclxuLnNlbGVjdGVkLCAuZWRpdGluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvci1saWdodDtcclxuICAgIGN1cnNvcjogdGV4dDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLWRhdGUge1xyXG4gICAgZmxleDogMSAxIDEyMHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tYWNjb3VudCB7XHJcbiAgICBmbGV4OiAxIDEgMTIwcHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1jYXRlZ29yeSB7XHJcbiAgICBmbGV4OiAxIDEgMTIwcHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1mbG93IHtcclxuICAgIGZsZXg6IDAgMSAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tY2xlYXJlZCB7XHJcbiAgICBmbGV4OiAwIDEgNjBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLWRlc2NyaXB0aW9uIHtcclxuICAgIGZsZXg6IDEgMSAxMjBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLXBheWVlIHtcclxuICAgIGZsZXg6IDEgMSAxMjBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLXNlbGVjdGVkIHtcclxuICAgIGZsZXg6IDAgMSAzMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbn0iLCJodG1sIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaXMtZ29vZCB7XG4gIGNvbG9yOiAjMzE4NzAwO1xufVxuXG4uaXMtYmFkIHtcbiAgY29sb3I6ICNjOTIxMDA7XG59XG5cbi5iYWRnZS5iYWRnZS1zdWNjZXNzIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW46IDQwcHg7XG59XG5cbi8qIFRSQU5TQUNUSU9OIFRBQkxFICovXG4udHJhbnNhY3Rpb24tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBoZWlnaHQ6IDEuMTVyZW07XG4gIHBhZGRpbmctdG9wOiAxcHg7XG59XG5cbi5zZWxlY3RlZCwgLmVkaXRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDO1xuICBjdXJzb3I6IHRleHQ7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1kYXRlIHtcbiAgZmxleDogMSAxIDEyMHB4O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tYWNjb3VudCB7XG4gIGZsZXg6IDEgMSAxMjBweDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLWNhdGVnb3J5IHtcbiAgZmxleDogMSAxIDEyMHB4O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tZmxvdyB7XG4gIGZsZXg6IDAgMSAxMDBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1jbGVhcmVkIHtcbiAgZmxleDogMCAxIDYwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1kZXNjcmlwdGlvbiB7XG4gIGZsZXg6IDEgMSAxMjBweDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLXBheWVlIHtcbiAgZmxleDogMSAxIDEyMHB4O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tc2VsZWN0ZWQge1xuICBmbGV4OiAwIDEgMzBweDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwN0Q4QjtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmg1IHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIG1hcmdpbi1sZWZ0OiAwLjNlbTtcbn1cblxuLmNhdGVnb3J5LW5hbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogLTVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGNsaXA7XG4gIGZsZXg6IDEgMCBhdXRvO1xufVxuXG4uZmlyc3QtY29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJ0biB7XG4gIG1hcmdpbjogMCAwIDAgNXB4O1xuICBwYWRkaW5nOiAwIDAuMjVyZW07XG59XG5cbi5jcmVhdGUtYnV0dG9uIHtcbiAgZmxleDogMCAxIGF1dG87XG59IiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuXHJcbjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvci10ZXh0O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmg1IHtcclxuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvci10ZXh0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuM2VtO1xyXG59XHJcblxyXG4uY2F0ZWdvcnktbmFtZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IC01cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBjbGlwO1xyXG4gICAgZmxleDogMSAwIGF1dG87XHJcbn1cclxuXHJcbi5maXJzdC1jb2x1bW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIG1hcmdpbjogMCAwIDAgNXB4O1xyXG4gICAgcGFkZGluZzogMCAwLjI1cmVtO1xyXG59XHJcblxyXG4uY3JlYXRlLWJ1dHRvbiB7XHJcbiAgICBmbGV4OiAwIDEgYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/envelopes/components/envelopes-category-header/envelopes.category.header.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/envelopes/components/envelopes-category-header/envelopes.category.header.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: EnvelopesCategoryHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvelopesCategoryHeaderComponent", function() { return EnvelopesCategoryHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EnvelopesCategoryHeaderComponent = /** @class */ (function () {
    function EnvelopesCategoryHeaderComponent() {
        this.isToggled = true;
        this.showCreateCategoryButton = false;
        this.toggled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EnvelopesCategoryHeaderComponent.prototype.onToggled = function () {
        this.isToggled = !this.isToggled;
        this.toggled.emit(this.isToggled);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EnvelopesCategoryHeaderComponent.prototype, "envelopeCategory", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], EnvelopesCategoryHeaderComponent.prototype, "assigned", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], EnvelopesCategoryHeaderComponent.prototype, "activity", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], EnvelopesCategoryHeaderComponent.prototype, "balance", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EnvelopesCategoryHeaderComponent.prototype, "toggled", void 0);
    EnvelopesCategoryHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "moneteer-envelopes-category-header",
            template: __webpack_require__(/*! raw-loader!./envelopes.category.header.component.html */ "./node_modules/raw-loader/index.js!./src/app/envelopes/components/envelopes-category-header/envelopes.category.header.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("toggled", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("0", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: "rotate(-90deg)"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("* <=> 0", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("200ms ease-out"))
                ])
            ],
            host: {
                "(mouseenter)": "showCreateCategoryButton = true",
                "(mouseleave)": "showCreateCategoryButton = false"
            },
            styles: [__webpack_require__(/*! ./envelopes.category.header.component.scss */ "./src/app/envelopes/components/envelopes-category-header/envelopes.category.header.component.scss")]
        })
    ], EnvelopesCategoryHeaderComponent);
    return EnvelopesCategoryHeaderComponent;
}());



/***/ }),

/***/ "./src/app/envelopes/components/envelopes-category/envelopes.category.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/envelopes/components/envelopes-category/envelopes.category.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n  overflow: hidden;\n  height: 100%;\n}\n\nbody {\n  height: 100%;\n}\n\n.is-good {\n  color: #318700;\n}\n\n.is-bad {\n  color: #c92100;\n}\n\n.badge.badge-success {\n  color: #fff;\n}\n\n.container {\n  margin: 40px;\n}\n\n/* TRANSACTION TABLE */\n\n.transaction-row {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  flex-shrink: 0;\n  height: 1.15rem;\n  padding-top: 1px;\n}\n\n.selected, .editing {\n  background-color: #CFD8DC;\n  cursor: text;\n}\n\n.transaction-cell--date {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--account {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--category {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--flow {\n  flex: 0 1 100px;\n  text-align: right;\n}\n\n.transaction-cell--cleared {\n  flex: 0 1 60px;\n}\n\n.transaction-cell--description {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--payee {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--selected {\n  flex: 0 1 30px;\n  padding-left: 8px;\n}\n\n:host {\n  display: flex;\n  flex-direction: column;\n}\n\n#child-categories {\n  display: flex;\n  flex-direction: column;\n}\n\n#header {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW52ZWxvcGVzL2NvbXBvbmVudHMvZW52ZWxvcGVzLWNhdGVnb3J5L0Q6XFxnaXRcXG1vbmV0ZWVyXFxtb25ldGVlci1mcm9udGVuZC9zcmNcXGFwcFxcZW52ZWxvcGVzXFxjb21wb25lbnRzXFxlbnZlbG9wZXMtY2F0ZWdvcnlcXGVudmVsb3Blcy5jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZW52ZWxvcGVzL2NvbXBvbmVudHMvZW52ZWxvcGVzLWNhdGVnb3J5L2VudmVsb3Blcy5jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZW52ZWxvcGVzL2NvbXBvbmVudHMvZW52ZWxvcGVzLWNhdGVnb3J5L0Q6XFxnaXRcXG1vbmV0ZWVyXFxtb25ldGVlci1mcm9udGVuZC9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNsQko7O0FEcUJBO0VBQ0UsWUFBQTtBQ2xCRjs7QURxQkE7RUFDRSxjQXBCcUI7QUNFdkI7O0FEcUJBO0VBQ0UsY0F2QnFCO0FDS3ZCOztBRHFCQTtFQUNFLFdBQUE7QUNsQkY7O0FEcUJBO0VBQ0UsWUFBQTtBQ2xCRjs7QURxQkEsc0JBQUE7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNsQko7O0FEcUJBO0VBQ0kseUJBckRtQjtFQXNEbkIsWUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0FDbEJKOztBRHFCQTtFQUNJLGVBQUE7QUNsQko7O0FEcUJBO0VBQ0ksZUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNsQko7O0FEcUJBO0VBQ0ksY0FBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0FDbEJKOztBRHFCQTtFQUNJLGVBQUE7QUNsQko7O0FEcUJBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDbEJKOztBQ3RFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBRHlFSjs7QUN0RUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUR5RUo7O0FDdEVBO0VBQ0ksYUFBQTtBRHlFSiIsImZpbGUiOiJzcmMvYXBwL2VudmVsb3Blcy9jb21wb25lbnRzL2VudmVsb3Blcy1jYXRlZ29yeS9lbnZlbG9wZXMuY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS1jb2xvci1kYXJrOiAgICM0NTVBNjQ7XHJcbiRwcmltYXJ5LWNvbG9yOiAgICAgICAgIzYwN0Q4QjtcclxuJHByaW1hcnktY29sb3ItbGlnaHQ6ICAjQ0ZEOERDO1xyXG4kcHJpbWFyeS1jb2xvci10ZXh0OiAgICNGRkZGRkY7XHJcbiRhY2NlbnQtY29sb3I6ICAgICAgICAgI0ZGQzEwNztcclxuJHByaW1hcnktdGV4dC1jb2xvcjogICAjMjEyMTIxO1xyXG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6ICM3NTc1NzU7XHJcbiRkaXZpZGVyLWNvbG9yOiAgICAgICAgI0JEQkRCRDtcclxuXHJcbiRtb25leS1nb29kOiAgICAgICAgICAgIzMxODcwMDtcclxuJG1vbmV5LWJhZDogICAgICAgICAgICAjYzkyMTAwO1xyXG5cclxuJG1vbmV5LWdvb2Qtc2F0dXJhdGVkOiAjMDBGRkM4O1xyXG4kbW9uZXktYmFkLXNhdHVyYXRlZDogICNGRjU1NDA7XHJcblxyXG4kZXJyb3I6ICAgICAgICAgICAgICAgICNjYzAwMDA7XHJcblxyXG4kcHJpbWFyeTogJHByaW1hcnktY29sb3I7XHJcblxyXG5odG1sIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmlzLWdvb2Qge1xyXG4gIGNvbG9yOiAkbW9uZXktZ29vZDtcclxufVxyXG5cclxuLmlzLWJhZCB7XHJcbiAgY29sb3I6ICRtb25leS1iYWQ7XHJcbn1cclxuXHJcbi5iYWRnZS5iYWRnZS1zdWNjZXNzIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiA0MHB4O1xyXG59XHJcblxyXG4vKiBUUkFOU0FDVElPTiBUQUJMRSAqL1xyXG4udHJhbnNhY3Rpb24tcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIGhlaWdodDogMS4xNXJlbTtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbn1cclxuXHJcbi5zZWxlY3RlZCwgLmVkaXRpbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3ItbGlnaHQ7XHJcbiAgICBjdXJzb3I6IHRleHQ7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1kYXRlIHtcclxuICAgIGZsZXg6IDEgMSAxMjBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLWFjY291bnQge1xyXG4gICAgZmxleDogMSAxIDEyMHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tY2F0ZWdvcnkge1xyXG4gICAgZmxleDogMSAxIDEyMHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tZmxvdyB7XHJcbiAgICBmbGV4OiAwIDEgMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLWNsZWFyZWQge1xyXG4gICAgZmxleDogMCAxIDYwcHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1kZXNjcmlwdGlvbiB7XHJcbiAgICBmbGV4OiAxIDEgMTIwcHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1wYXllZSB7XHJcbiAgICBmbGV4OiAxIDEgMTIwcHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1zZWxlY3RlZCB7XHJcbiAgICBmbGV4OiAwIDEgMzBweDtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG59IiwiaHRtbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmlzLWdvb2Qge1xuICBjb2xvcjogIzMxODcwMDtcbn1cblxuLmlzLWJhZCB7XG4gIGNvbG9yOiAjYzkyMTAwO1xufVxuXG4uYmFkZ2UuYmFkZ2Utc3VjY2VzcyB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luOiA0MHB4O1xufVxuXG4vKiBUUkFOU0FDVElPTiBUQUJMRSAqL1xuLnRyYW5zYWN0aW9uLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBmbGV4LXNocmluazogMDtcbiAgaGVpZ2h0OiAxLjE1cmVtO1xuICBwYWRkaW5nLXRvcDogMXB4O1xufVxuXG4uc2VsZWN0ZWQsIC5lZGl0aW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NGRDhEQztcbiAgY3Vyc29yOiB0ZXh0O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tZGF0ZSB7XG4gIGZsZXg6IDEgMSAxMjBweDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLWFjY291bnQge1xuICBmbGV4OiAxIDEgMTIwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1jYXRlZ29yeSB7XG4gIGZsZXg6IDEgMSAxMjBweDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLWZsb3cge1xuICBmbGV4OiAwIDEgMTAwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tY2xlYXJlZCB7XG4gIGZsZXg6IDAgMSA2MHB4O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tZGVzY3JpcHRpb24ge1xuICBmbGV4OiAxIDEgMTIwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1wYXllZSB7XG4gIGZsZXg6IDEgMSAxMjBweDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLXNlbGVjdGVkIHtcbiAgZmxleDogMCAxIDMwcHg7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiNjaGlsZC1jYXRlZ29yaWVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI2hlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59IiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuXHJcbjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4jY2hpbGQtY2F0ZWdvcmllcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuI2hlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/envelopes/components/envelopes-category/envelopes.category.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/envelopes/components/envelopes-category/envelopes.category.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: EnvelopesCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvelopesCategoryComponent", function() { return EnvelopesCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/models */ "./src/app/core/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EnvelopesCategoryComponent = /** @class */ (function () {
    function EnvelopesCategoryComponent() {
        this.assignedChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isToggled = true;
        // private onChildCategoryAssignedChanged(event: {oldValue: number, newValue: number}): void {
        //     const oldValue = this.assigned;
        //     this.updateAssigned();
        //     this.updateBalance();
        //     const newValue = this.assigned;
        //     this.assignedChanged.emit({oldValue, newValue});
        // }
        // private updateAssigned(): void {
        //     this.assigned = _(this.masterCategoryMonth.categories).map(c => c.assigned).sum();
        // }
        // private updateActivity(): void {
        //     this.activity = _(this.masterCategoryMonth.categories).map(c => c.activity).sum();
        // }
        // private updateBalance(): void {
        //     this.balance = _(this.masterCategoryMonth.categories).map(c => c.balance).sum();
        // }
    }
    EnvelopesCategoryComponent.prototype.ngOnChanges = function (changes) {
        // if (changes.masterCategoryMonth) {
        //     this.updateAssigned();
        //     this.updateActivity();
        //     this.updateBalance();
        // }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _core_models__WEBPACK_IMPORTED_MODULE_2__["EnvelopeCategoryModel"])
    ], EnvelopesCategoryComponent.prototype, "envelopeCategory", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EnvelopesCategoryComponent.prototype, "envelopes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EnvelopesCategoryComponent.prototype, "assignedChanged", void 0);
    EnvelopesCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "moneteer-envelopes-category",
            template: __webpack_require__(/*! raw-loader!./envelopes.category.component.html */ "./node_modules/raw-loader/index.js!./src/app/envelopes/components/envelopes-category/envelopes.category.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("categoryVisible", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("1", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: "*",
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("0", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: "0",
                        opacity: 0,
                        display: "none"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("1 <=> 0", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("200ms ease-out"))
                ])
            ],
            styles: [__webpack_require__(/*! ./envelopes.category.component.scss */ "./src/app/envelopes/components/envelopes-category/envelopes.category.component.scss")]
        })
    ], EnvelopesCategoryComponent);
    return EnvelopesCategoryComponent;
}());



/***/ }),

/***/ "./src/app/envelopes/components/envelopes-column-header/envelopes.column.header.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/envelopes/components/envelopes-column-header/envelopes.column.header.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n  overflow: hidden;\n  height: 100%;\n}\n\nbody {\n  height: 100%;\n}\n\n.is-good {\n  color: #318700;\n}\n\n.is-bad {\n  color: #c92100;\n}\n\n.badge.badge-success {\n  color: #fff;\n}\n\n.container {\n  margin: 40px;\n}\n\n/* TRANSACTION TABLE */\n\n.transaction-row {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  flex-shrink: 0;\n  height: 1.15rem;\n  padding-top: 1px;\n}\n\n.selected, .editing {\n  background-color: #CFD8DC;\n  cursor: text;\n}\n\n.transaction-cell--date {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--account {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--category {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--flow {\n  flex: 0 1 100px;\n  text-align: right;\n}\n\n.transaction-cell--cleared {\n  flex: 0 1 60px;\n}\n\n.transaction-cell--description {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--payee {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--selected {\n  flex: 0 1 30px;\n  padding-left: 8px;\n}\n\n:host {\n  display: flex;\n  flex-direction: row;\n  flex: 1 0 auto;\n  margin-bottom: 0.3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW52ZWxvcGVzL2NvbXBvbmVudHMvZW52ZWxvcGVzLWNvbHVtbi1oZWFkZXIvRDpcXGdpdFxcbW9uZXRlZXJcXG1vbmV0ZWVyLWZyb250ZW5kL3NyY1xcYXBwXFxlbnZlbG9wZXNcXGNvbXBvbmVudHNcXGVudmVsb3Blcy1jb2x1bW4taGVhZGVyXFxlbnZlbG9wZXMuY29sdW1uLmhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZW52ZWxvcGVzL2NvbXBvbmVudHMvZW52ZWxvcGVzLWNvbHVtbi1oZWFkZXIvZW52ZWxvcGVzLmNvbHVtbi5oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VudmVsb3Blcy9jb21wb25lbnRzL2VudmVsb3Blcy1jb2x1bW4taGVhZGVyL0Q6XFxnaXRcXG1vbmV0ZWVyXFxtb25ldGVlci1mcm9udGVuZC9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNsQko7O0FEcUJBO0VBQ0UsWUFBQTtBQ2xCRjs7QURxQkE7RUFDRSxjQXBCcUI7QUNFdkI7O0FEcUJBO0VBQ0UsY0F2QnFCO0FDS3ZCOztBRHFCQTtFQUNFLFdBQUE7QUNsQkY7O0FEcUJBO0VBQ0UsWUFBQTtBQ2xCRjs7QURxQkEsc0JBQUE7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNsQko7O0FEcUJBO0VBQ0kseUJBckRtQjtFQXNEbkIsWUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0FDbEJKOztBRHFCQTtFQUNJLGVBQUE7QUNsQko7O0FEcUJBO0VBQ0ksZUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNsQko7O0FEcUJBO0VBQ0ksY0FBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0FDbEJKOztBRHFCQTtFQUNJLGVBQUE7QUNsQko7O0FEcUJBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDbEJKOztBQ3RFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBRHlFSiIsImZpbGUiOiJzcmMvYXBwL2VudmVsb3Blcy9jb21wb25lbnRzL2VudmVsb3Blcy1jb2x1bW4taGVhZGVyL2VudmVsb3Blcy5jb2x1bW4uaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnktY29sb3ItZGFyazogICAjNDU1QTY0O1xyXG4kcHJpbWFyeS1jb2xvcjogICAgICAgICM2MDdEOEI7XHJcbiRwcmltYXJ5LWNvbG9yLWxpZ2h0OiAgI0NGRDhEQztcclxuJHByaW1hcnktY29sb3ItdGV4dDogICAjRkZGRkZGO1xyXG4kYWNjZW50LWNvbG9yOiAgICAgICAgICNGRkMxMDc7XHJcbiRwcmltYXJ5LXRleHQtY29sb3I6ICAgIzIxMjEyMTtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjNzU3NTc1O1xyXG4kZGl2aWRlci1jb2xvcjogICAgICAgICNCREJEQkQ7XHJcblxyXG4kbW9uZXktZ29vZDogICAgICAgICAgICMzMTg3MDA7XHJcbiRtb25leS1iYWQ6ICAgICAgICAgICAgI2M5MjEwMDtcclxuXHJcbiRtb25leS1nb29kLXNhdHVyYXRlZDogIzAwRkZDODtcclxuJG1vbmV5LWJhZC1zYXR1cmF0ZWQ6ICAjRkY1NTQwO1xyXG5cclxuJGVycm9yOiAgICAgICAgICAgICAgICAjY2MwMDAwO1xyXG5cclxuJHByaW1hcnk6ICRwcmltYXJ5LWNvbG9yO1xyXG5cclxuaHRtbCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5pcy1nb29kIHtcclxuICBjb2xvcjogJG1vbmV5LWdvb2Q7XHJcbn1cclxuXHJcbi5pcy1iYWQge1xyXG4gIGNvbG9yOiAkbW9uZXktYmFkO1xyXG59XHJcblxyXG4uYmFkZ2UuYmFkZ2Utc3VjY2VzcyB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1hcmdpbjogNDBweDtcclxufVxyXG5cclxuLyogVFJBTlNBQ1RJT04gVEFCTEUgKi9cclxuLnRyYW5zYWN0aW9uLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBoZWlnaHQ6IDEuMTVyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG59XHJcblxyXG4uc2VsZWN0ZWQsIC5lZGl0aW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yLWxpZ2h0O1xyXG4gICAgY3Vyc29yOiB0ZXh0O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tZGF0ZSB7XHJcbiAgICBmbGV4OiAxIDEgMTIwcHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1hY2NvdW50IHtcclxuICAgIGZsZXg6IDEgMSAxMjBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLWNhdGVnb3J5IHtcclxuICAgIGZsZXg6IDEgMSAxMjBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLWZsb3cge1xyXG4gICAgZmxleDogMCAxIDEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1jbGVhcmVkIHtcclxuICAgIGZsZXg6IDAgMSA2MHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tZGVzY3JpcHRpb24ge1xyXG4gICAgZmxleDogMSAxIDEyMHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tcGF5ZWUge1xyXG4gICAgZmxleDogMSAxIDEyMHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tc2VsZWN0ZWQge1xyXG4gICAgZmxleDogMCAxIDMwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxufSIsImh0bWwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pcy1nb29kIHtcbiAgY29sb3I6ICMzMTg3MDA7XG59XG5cbi5pcy1iYWQge1xuICBjb2xvcjogI2M5MjEwMDtcbn1cblxuLmJhZGdlLmJhZGdlLXN1Y2Nlc3Mge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogNDBweDtcbn1cblxuLyogVFJBTlNBQ1RJT04gVEFCTEUgKi9cbi50cmFuc2FjdGlvbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGhlaWdodDogMS4xNXJlbTtcbiAgcGFkZGluZy10b3A6IDFweDtcbn1cblxuLnNlbGVjdGVkLCAuZWRpdGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REM7XG4gIGN1cnNvcjogdGV4dDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLWRhdGUge1xuICBmbGV4OiAxIDEgMTIwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1hY2NvdW50IHtcbiAgZmxleDogMSAxIDEyMHB4O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tY2F0ZWdvcnkge1xuICBmbGV4OiAxIDEgMTIwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1mbG93IHtcbiAgZmxleDogMCAxIDEwMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLWNsZWFyZWQge1xuICBmbGV4OiAwIDEgNjBweDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLWRlc2NyaXB0aW9uIHtcbiAgZmxleDogMSAxIDEyMHB4O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tcGF5ZWUge1xuICBmbGV4OiAxIDEgMTIwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1zZWxlY3RlZCB7XG4gIGZsZXg6IDAgMSAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4OiAxIDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMC4zZW07XG59IiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuXHJcbjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleDogMSAwIGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjNlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/envelopes/components/envelopes-column-header/envelopes.column.header.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/envelopes/components/envelopes-column-header/envelopes.column.header.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: EnvelopesColumnHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvelopesColumnHeaderComponent", function() { return EnvelopesColumnHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EnvelopesColumnHeaderComponent = /** @class */ (function () {
    function EnvelopesColumnHeaderComponent() {
    }
    EnvelopesColumnHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "moneteer-envelopes-column-header",
            template: __webpack_require__(/*! raw-loader!./envelopes.column.header.component.html */ "./node_modules/raw-loader/index.js!./src/app/envelopes/components/envelopes-column-header/envelopes.column.header.component.html"),
            styles: [__webpack_require__(/*! ./envelopes.column.header.component.scss */ "./src/app/envelopes/components/envelopes-column-header/envelopes.column.header.component.scss")]
        })
    ], EnvelopesColumnHeaderComponent);
    return EnvelopesColumnHeaderComponent;
}());



/***/ }),

/***/ "./src/app/envelopes/components/envelopes-header-stats-available/envelopes.header.stats.available.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/envelopes/components/envelopes-header-stats-available/envelopes.header.stats.available.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n  overflow: hidden;\n  height: 100%;\n}\n\nbody {\n  height: 100%;\n}\n\n.is-good {\n  color: #318700;\n}\n\n.is-bad {\n  color: #c92100;\n}\n\n.badge.badge-success {\n  color: #fff;\n}\n\n.container {\n  margin: 40px;\n}\n\n/* TRANSACTION TABLE */\n\n.transaction-row {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  flex-shrink: 0;\n  height: 1.15rem;\n  padding-top: 1px;\n}\n\n.selected, .editing {\n  background-color: #CFD8DC;\n  cursor: text;\n}\n\n.transaction-cell--date {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--account {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--category {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--flow {\n  flex: 0 1 100px;\n  text-align: right;\n}\n\n.transaction-cell--cleared {\n  flex: 0 1 60px;\n}\n\n.transaction-cell--description {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--payee {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--selected {\n  flex: 0 1 30px;\n  padding-left: 8px;\n}\n\n:host {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 10px;\n  justify-content: center;\n  flex: 1 1 auto;\n}\n\nh2 {\n  margin: 0;\n  color: #FFFFFF;\n  font-weight: 500;\n  font-size: x-large;\n}\n\nh2.good {\n  color: #00FFC8;\n}\n\nh2.bad {\n  color: #FF5540;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW52ZWxvcGVzL2NvbXBvbmVudHMvZW52ZWxvcGVzLWhlYWRlci1zdGF0cy1hdmFpbGFibGUvRDpcXGdpdFxcbW9uZXRlZXJcXG1vbmV0ZWVyLWZyb250ZW5kL3NyY1xcYXBwXFxlbnZlbG9wZXNcXGNvbXBvbmVudHNcXGVudmVsb3Blcy1oZWFkZXItc3RhdHMtYXZhaWxhYmxlXFxlbnZlbG9wZXMuaGVhZGVyLnN0YXRzLmF2YWlsYWJsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZW52ZWxvcGVzL2NvbXBvbmVudHMvZW52ZWxvcGVzLWhlYWRlci1zdGF0cy1hdmFpbGFibGUvZW52ZWxvcGVzLmhlYWRlci5zdGF0cy5hdmFpbGFibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VudmVsb3Blcy9jb21wb25lbnRzL2VudmVsb3Blcy1oZWFkZXItc3RhdHMtYXZhaWxhYmxlL0Q6XFxnaXRcXG1vbmV0ZWVyXFxtb25ldGVlci1mcm9udGVuZC9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNsQko7O0FEcUJBO0VBQ0UsWUFBQTtBQ2xCRjs7QURxQkE7RUFDRSxjQXBCcUI7QUNFdkI7O0FEcUJBO0VBQ0UsY0F2QnFCO0FDS3ZCOztBRHFCQTtFQUNFLFdBQUE7QUNsQkY7O0FEcUJBO0VBQ0UsWUFBQTtBQ2xCRjs7QURxQkEsc0JBQUE7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNsQko7O0FEcUJBO0VBQ0kseUJBckRtQjtFQXNEbkIsWUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0FDbEJKOztBRHFCQTtFQUNJLGVBQUE7QUNsQko7O0FEcUJBO0VBQ0ksZUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNsQko7O0FEcUJBO0VBQ0ksY0FBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0FDbEJKOztBRHFCQTtFQUNJLGVBQUE7QUNsQko7O0FEcUJBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDbEJKOztBQ3RFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBRHlFSjs7QUN0RUE7RUFDSSxTQUFBO0VBQ0EsY0ZWbUI7RUVXbkIsZ0JBQUE7RUFDQSxrQkFBQTtBRHlFSjs7QUN0RUE7RUFDSSxjRlBtQjtBQ2dGdkI7O0FDdEVBO0VBQ0ksY0ZWbUI7QUNtRnZCIiwiZmlsZSI6InNyYy9hcHAvZW52ZWxvcGVzL2NvbXBvbmVudHMvZW52ZWxvcGVzLWhlYWRlci1zdGF0cy1hdmFpbGFibGUvZW52ZWxvcGVzLmhlYWRlci5zdGF0cy5hdmFpbGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS1jb2xvci1kYXJrOiAgICM0NTVBNjQ7XHJcbiRwcmltYXJ5LWNvbG9yOiAgICAgICAgIzYwN0Q4QjtcclxuJHByaW1hcnktY29sb3ItbGlnaHQ6ICAjQ0ZEOERDO1xyXG4kcHJpbWFyeS1jb2xvci10ZXh0OiAgICNGRkZGRkY7XHJcbiRhY2NlbnQtY29sb3I6ICAgICAgICAgI0ZGQzEwNztcclxuJHByaW1hcnktdGV4dC1jb2xvcjogICAjMjEyMTIxO1xyXG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6ICM3NTc1NzU7XHJcbiRkaXZpZGVyLWNvbG9yOiAgICAgICAgI0JEQkRCRDtcclxuXHJcbiRtb25leS1nb29kOiAgICAgICAgICAgIzMxODcwMDtcclxuJG1vbmV5LWJhZDogICAgICAgICAgICAjYzkyMTAwO1xyXG5cclxuJG1vbmV5LWdvb2Qtc2F0dXJhdGVkOiAjMDBGRkM4O1xyXG4kbW9uZXktYmFkLXNhdHVyYXRlZDogICNGRjU1NDA7XHJcblxyXG4kZXJyb3I6ICAgICAgICAgICAgICAgICNjYzAwMDA7XHJcblxyXG4kcHJpbWFyeTogJHByaW1hcnktY29sb3I7XHJcblxyXG5odG1sIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmlzLWdvb2Qge1xyXG4gIGNvbG9yOiAkbW9uZXktZ29vZDtcclxufVxyXG5cclxuLmlzLWJhZCB7XHJcbiAgY29sb3I6ICRtb25leS1iYWQ7XHJcbn1cclxuXHJcbi5iYWRnZS5iYWRnZS1zdWNjZXNzIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiA0MHB4O1xyXG59XHJcblxyXG4vKiBUUkFOU0FDVElPTiBUQUJMRSAqL1xyXG4udHJhbnNhY3Rpb24tcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIGhlaWdodDogMS4xNXJlbTtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbn1cclxuXHJcbi5zZWxlY3RlZCwgLmVkaXRpbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3ItbGlnaHQ7XHJcbiAgICBjdXJzb3I6IHRleHQ7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1kYXRlIHtcclxuICAgIGZsZXg6IDEgMSAxMjBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLWFjY291bnQge1xyXG4gICAgZmxleDogMSAxIDEyMHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tY2F0ZWdvcnkge1xyXG4gICAgZmxleDogMSAxIDEyMHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tZmxvdyB7XHJcbiAgICBmbGV4OiAwIDEgMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLWNsZWFyZWQge1xyXG4gICAgZmxleDogMCAxIDYwcHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1kZXNjcmlwdGlvbiB7XHJcbiAgICBmbGV4OiAxIDEgMTIwcHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1wYXllZSB7XHJcbiAgICBmbGV4OiAxIDEgMTIwcHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1zZWxlY3RlZCB7XHJcbiAgICBmbGV4OiAwIDEgMzBweDtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG59IiwiaHRtbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmlzLWdvb2Qge1xuICBjb2xvcjogIzMxODcwMDtcbn1cblxuLmlzLWJhZCB7XG4gIGNvbG9yOiAjYzkyMTAwO1xufVxuXG4uYmFkZ2UuYmFkZ2Utc3VjY2VzcyB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luOiA0MHB4O1xufVxuXG4vKiBUUkFOU0FDVElPTiBUQUJMRSAqL1xuLnRyYW5zYWN0aW9uLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBmbGV4LXNocmluazogMDtcbiAgaGVpZ2h0OiAxLjE1cmVtO1xuICBwYWRkaW5nLXRvcDogMXB4O1xufVxuXG4uc2VsZWN0ZWQsIC5lZGl0aW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NGRDhEQztcbiAgY3Vyc29yOiB0ZXh0O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tZGF0ZSB7XG4gIGZsZXg6IDEgMSAxMjBweDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLWFjY291bnQge1xuICBmbGV4OiAxIDEgMTIwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1jYXRlZ29yeSB7XG4gIGZsZXg6IDEgMSAxMjBweDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLWZsb3cge1xuICBmbGV4OiAwIDEgMTAwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tY2xlYXJlZCB7XG4gIGZsZXg6IDAgMSA2MHB4O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tZGVzY3JpcHRpb24ge1xuICBmbGV4OiAxIDEgMTIwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1wYXllZSB7XG4gIGZsZXg6IDEgMSAxMjBweDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLXNlbGVjdGVkIHtcbiAgZmxleDogMCAxIDMwcHg7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG5oMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbn1cblxuaDIuZ29vZCB7XG4gIGNvbG9yOiAjMDBGRkM4O1xufVxuXG5oMi5iYWQge1xuICBjb2xvcjogI0ZGNTU0MDtcbn0iLCJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi9zdHlsZXMuc2Nzc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuaDIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yLXRleHQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcblxyXG5oMi5nb29kIHtcclxuICAgIGNvbG9yOiAkbW9uZXktZ29vZC1zYXR1cmF0ZWQ7XHJcbn1cclxuXHJcbmgyLmJhZCB7XHJcbiAgICBjb2xvcjogJG1vbmV5LWJhZC1zYXR1cmF0ZWQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/envelopes/components/envelopes-header-stats-available/envelopes.header.stats.available.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/envelopes/components/envelopes-header-stats-available/envelopes.header.stats.available.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: EnvelopesHeaderStatsAvailableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvelopesHeaderStatsAvailableComponent", function() { return EnvelopesHeaderStatsAvailableComponent; });
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

var EnvelopesHeaderStatsAvailableComponent = /** @class */ (function () {
    function EnvelopesHeaderStatsAvailableComponent() {
    }
    EnvelopesHeaderStatsAvailableComponent.prototype.assign = function () {
        console.log("assign");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], EnvelopesHeaderStatsAvailableComponent.prototype, "available", void 0);
    EnvelopesHeaderStatsAvailableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "moneteer-envelopes-header-stats-available",
            template: __webpack_require__(/*! raw-loader!./envelopes.header.stats.available.component.html */ "./node_modules/raw-loader/index.js!./src/app/envelopes/components/envelopes-header-stats-available/envelopes.header.stats.available.component.html"),
            styles: [__webpack_require__(/*! ./envelopes.header.stats.available.component.scss */ "./src/app/envelopes/components/envelopes-header-stats-available/envelopes.header.stats.available.component.scss")]
        })
    ], EnvelopesHeaderStatsAvailableComponent);
    return EnvelopesHeaderStatsAvailableComponent;
}());



/***/ }),

/***/ "./src/app/envelopes/components/envelopes-header-stats/envelopes.header.stats.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/envelopes/components/envelopes-header-stats/envelopes.header.stats.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n  overflow: hidden;\n  height: 100%;\n}\n\nbody {\n  height: 100%;\n}\n\n.is-good {\n  color: #318700;\n}\n\n.is-bad {\n  color: #c92100;\n}\n\n.badge.badge-success {\n  color: #fff;\n}\n\n.container {\n  margin: 40px;\n}\n\n/* TRANSACTION TABLE */\n\n.transaction-row {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  flex-shrink: 0;\n  height: 1.15rem;\n  padding-top: 1px;\n}\n\n.selected, .editing {\n  background-color: #CFD8DC;\n  cursor: text;\n}\n\n.transaction-cell--date {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--account {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--category {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--flow {\n  flex: 0 1 100px;\n  text-align: right;\n}\n\n.transaction-cell--cleared {\n  flex: 0 1 60px;\n}\n\n.transaction-cell--description {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--payee {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--selected {\n  flex: 0 1 30px;\n  padding-left: 8px;\n}\n\n:host {\n  display: flex;\n  flex-direction: row;\n  flex: 1 0 auto;\n  justify-content: center;\n}\n\nsection {\n  background-color: #607D8B;\n  color: #FFFFFF;\n  flex: 0 1 30em;\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  margin: 5px;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW52ZWxvcGVzL2NvbXBvbmVudHMvZW52ZWxvcGVzLWhlYWRlci1zdGF0cy9EOlxcZ2l0XFxtb25ldGVlclxcbW9uZXRlZXItZnJvbnRlbmQvc3JjXFxhcHBcXGVudmVsb3Blc1xcY29tcG9uZW50c1xcZW52ZWxvcGVzLWhlYWRlci1zdGF0c1xcZW52ZWxvcGVzLmhlYWRlci5zdGF0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZW52ZWxvcGVzL2NvbXBvbmVudHMvZW52ZWxvcGVzLWhlYWRlci1zdGF0cy9lbnZlbG9wZXMuaGVhZGVyLnN0YXRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lbnZlbG9wZXMvY29tcG9uZW50cy9lbnZlbG9wZXMtaGVhZGVyLXN0YXRzL0Q6XFxnaXRcXG1vbmV0ZWVyXFxtb25ldGVlci1mcm9udGVuZC9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNsQko7O0FEcUJBO0VBQ0UsWUFBQTtBQ2xCRjs7QURxQkE7RUFDRSxjQXBCcUI7QUNFdkI7O0FEcUJBO0VBQ0UsY0F2QnFCO0FDS3ZCOztBRHFCQTtFQUNFLFdBQUE7QUNsQkY7O0FEcUJBO0VBQ0UsWUFBQTtBQ2xCRjs7QURxQkEsc0JBQUE7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNsQko7O0FEcUJBO0VBQ0kseUJBckRtQjtFQXNEbkIsWUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0FDbEJKOztBRHFCQTtFQUNJLGVBQUE7QUNsQko7O0FEcUJBO0VBQ0ksZUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNsQko7O0FEcUJBO0VBQ0ksY0FBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0FDbEJKOztBRHFCQTtFQUNJLGVBQUE7QUNsQko7O0FEcUJBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDbEJKOztBQ3RFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBRHlFSjs7QUN0RUE7RUFDSSx5QkZUbUI7RUVVbkIsY0ZSbUI7RUVTbkIsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FEeUVKIiwiZmlsZSI6InNyYy9hcHAvZW52ZWxvcGVzL2NvbXBvbmVudHMvZW52ZWxvcGVzLWhlYWRlci1zdGF0cy9lbnZlbG9wZXMuaGVhZGVyLnN0YXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnktY29sb3ItZGFyazogICAjNDU1QTY0O1xyXG4kcHJpbWFyeS1jb2xvcjogICAgICAgICM2MDdEOEI7XHJcbiRwcmltYXJ5LWNvbG9yLWxpZ2h0OiAgI0NGRDhEQztcclxuJHByaW1hcnktY29sb3ItdGV4dDogICAjRkZGRkZGO1xyXG4kYWNjZW50LWNvbG9yOiAgICAgICAgICNGRkMxMDc7XHJcbiRwcmltYXJ5LXRleHQtY29sb3I6ICAgIzIxMjEyMTtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjNzU3NTc1O1xyXG4kZGl2aWRlci1jb2xvcjogICAgICAgICNCREJEQkQ7XHJcblxyXG4kbW9uZXktZ29vZDogICAgICAgICAgICMzMTg3MDA7XHJcbiRtb25leS1iYWQ6ICAgICAgICAgICAgI2M5MjEwMDtcclxuXHJcbiRtb25leS1nb29kLXNhdHVyYXRlZDogIzAwRkZDODtcclxuJG1vbmV5LWJhZC1zYXR1cmF0ZWQ6ICAjRkY1NTQwO1xyXG5cclxuJGVycm9yOiAgICAgICAgICAgICAgICAjY2MwMDAwO1xyXG5cclxuJHByaW1hcnk6ICRwcmltYXJ5LWNvbG9yO1xyXG5cclxuaHRtbCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5pcy1nb29kIHtcclxuICBjb2xvcjogJG1vbmV5LWdvb2Q7XHJcbn1cclxuXHJcbi5pcy1iYWQge1xyXG4gIGNvbG9yOiAkbW9uZXktYmFkO1xyXG59XHJcblxyXG4uYmFkZ2UuYmFkZ2Utc3VjY2VzcyB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1hcmdpbjogNDBweDtcclxufVxyXG5cclxuLyogVFJBTlNBQ1RJT04gVEFCTEUgKi9cclxuLnRyYW5zYWN0aW9uLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBoZWlnaHQ6IDEuMTVyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG59XHJcblxyXG4uc2VsZWN0ZWQsIC5lZGl0aW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yLWxpZ2h0O1xyXG4gICAgY3Vyc29yOiB0ZXh0O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tZGF0ZSB7XHJcbiAgICBmbGV4OiAxIDEgMTIwcHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1hY2NvdW50IHtcclxuICAgIGZsZXg6IDEgMSAxMjBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLWNhdGVnb3J5IHtcclxuICAgIGZsZXg6IDEgMSAxMjBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLWZsb3cge1xyXG4gICAgZmxleDogMCAxIDEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1jbGVhcmVkIHtcclxuICAgIGZsZXg6IDAgMSA2MHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tZGVzY3JpcHRpb24ge1xyXG4gICAgZmxleDogMSAxIDEyMHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tcGF5ZWUge1xyXG4gICAgZmxleDogMSAxIDEyMHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tc2VsZWN0ZWQge1xyXG4gICAgZmxleDogMCAxIDMwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxufSIsImh0bWwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pcy1nb29kIHtcbiAgY29sb3I6ICMzMTg3MDA7XG59XG5cbi5pcy1iYWQge1xuICBjb2xvcjogI2M5MjEwMDtcbn1cblxuLmJhZGdlLmJhZGdlLXN1Y2Nlc3Mge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogNDBweDtcbn1cblxuLyogVFJBTlNBQ1RJT04gVEFCTEUgKi9cbi50cmFuc2FjdGlvbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGhlaWdodDogMS4xNXJlbTtcbiAgcGFkZGluZy10b3A6IDFweDtcbn1cblxuLnNlbGVjdGVkLCAuZWRpdGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REM7XG4gIGN1cnNvcjogdGV4dDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLWRhdGUge1xuICBmbGV4OiAxIDEgMTIwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1hY2NvdW50IHtcbiAgZmxleDogMSAxIDEyMHB4O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tY2F0ZWdvcnkge1xuICBmbGV4OiAxIDEgMTIwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1mbG93IHtcbiAgZmxleDogMCAxIDEwMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLWNsZWFyZWQge1xuICBmbGV4OiAwIDEgNjBweDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLWRlc2NyaXB0aW9uIHtcbiAgZmxleDogMSAxIDEyMHB4O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tcGF5ZWUge1xuICBmbGV4OiAxIDEgMTIwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1zZWxlY3RlZCB7XG4gIGZsZXg6IDAgMSAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4OiAxIDAgYXV0bztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbnNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZmxleDogMCAxIDMwZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBtYXJnaW46IDVweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufSIsIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXg6IDEgMCBhdXRvO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3ItdGV4dDtcclxuICAgIGZsZXg6IDAgMSAzMGVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/envelopes/components/envelopes-header-stats/envelopes.header.stats.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/envelopes/components/envelopes-header-stats/envelopes.header.stats.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: EnvelopesHeaderStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvelopesHeaderStatsComponent", function() { return EnvelopesHeaderStatsComponent; });
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

var EnvelopesHeaderStatsComponent = /** @class */ (function () {
    function EnvelopesHeaderStatsComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], EnvelopesHeaderStatsComponent.prototype, "available", void 0);
    EnvelopesHeaderStatsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "moneteer-envelopes-header-stats",
            template: __webpack_require__(/*! raw-loader!./envelopes.header.stats.component.html */ "./node_modules/raw-loader/index.js!./src/app/envelopes/components/envelopes-header-stats/envelopes.header.stats.component.html"),
            styles: [__webpack_require__(/*! ./envelopes.header.stats.component.scss */ "./src/app/envelopes/components/envelopes-header-stats/envelopes.header.stats.component.scss")]
        })
    ], EnvelopesHeaderStatsComponent);
    return EnvelopesHeaderStatsComponent;
}());



/***/ }),

/***/ "./src/app/envelopes/components/envelopes-header/envelopes.header.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/envelopes/components/envelopes-header/envelopes.header.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n  overflow: hidden;\n  height: 100%;\n}\n\nbody {\n  height: 100%;\n}\n\n.is-good {\n  color: #318700;\n}\n\n.is-bad {\n  color: #c92100;\n}\n\n.badge.badge-success {\n  color: #fff;\n}\n\n.container {\n  margin: 40px;\n}\n\n/* TRANSACTION TABLE */\n\n.transaction-row {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  flex-shrink: 0;\n  height: 1.15rem;\n  padding-top: 1px;\n}\n\n.selected, .editing {\n  background-color: #CFD8DC;\n  cursor: text;\n}\n\n.transaction-cell--date {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--account {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--category {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--flow {\n  flex: 0 1 100px;\n  text-align: right;\n}\n\n.transaction-cell--cleared {\n  flex: 0 1 60px;\n}\n\n.transaction-cell--description {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--payee {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--selected {\n  flex: 0 1 30px;\n  padding-left: 8px;\n}\n\n:host {\n  display: flex;\n  flex-direction: row;\n  padding: 5px;\n  flex: 0 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW52ZWxvcGVzL2NvbXBvbmVudHMvZW52ZWxvcGVzLWhlYWRlci9EOlxcZ2l0XFxtb25ldGVlclxcbW9uZXRlZXItZnJvbnRlbmQvc3JjXFxhcHBcXGVudmVsb3Blc1xcY29tcG9uZW50c1xcZW52ZWxvcGVzLWhlYWRlclxcZW52ZWxvcGVzLmhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZW52ZWxvcGVzL2NvbXBvbmVudHMvZW52ZWxvcGVzLWhlYWRlci9lbnZlbG9wZXMuaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lbnZlbG9wZXMvY29tcG9uZW50cy9lbnZlbG9wZXMtaGVhZGVyL0Q6XFxnaXRcXG1vbmV0ZWVyXFxtb25ldGVlci1mcm9udGVuZC9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNsQko7O0FEcUJBO0VBQ0UsWUFBQTtBQ2xCRjs7QURxQkE7RUFDRSxjQXBCcUI7QUNFdkI7O0FEcUJBO0VBQ0UsY0F2QnFCO0FDS3ZCOztBRHFCQTtFQUNFLFdBQUE7QUNsQkY7O0FEcUJBO0VBQ0UsWUFBQTtBQ2xCRjs7QURxQkEsc0JBQUE7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNsQko7O0FEcUJBO0VBQ0kseUJBckRtQjtFQXNEbkIsWUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0FDbEJKOztBRHFCQTtFQUNJLGVBQUE7QUNsQko7O0FEcUJBO0VBQ0ksZUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNsQko7O0FEcUJBO0VBQ0ksY0FBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0FDbEJKOztBRHFCQTtFQUNJLGVBQUE7QUNsQko7O0FEcUJBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDbEJKOztBQ3RFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FEeUVKIiwiZmlsZSI6InNyYy9hcHAvZW52ZWxvcGVzL2NvbXBvbmVudHMvZW52ZWxvcGVzLWhlYWRlci9lbnZlbG9wZXMuaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnktY29sb3ItZGFyazogICAjNDU1QTY0O1xyXG4kcHJpbWFyeS1jb2xvcjogICAgICAgICM2MDdEOEI7XHJcbiRwcmltYXJ5LWNvbG9yLWxpZ2h0OiAgI0NGRDhEQztcclxuJHByaW1hcnktY29sb3ItdGV4dDogICAjRkZGRkZGO1xyXG4kYWNjZW50LWNvbG9yOiAgICAgICAgICNGRkMxMDc7XHJcbiRwcmltYXJ5LXRleHQtY29sb3I6ICAgIzIxMjEyMTtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjNzU3NTc1O1xyXG4kZGl2aWRlci1jb2xvcjogICAgICAgICNCREJEQkQ7XHJcblxyXG4kbW9uZXktZ29vZDogICAgICAgICAgICMzMTg3MDA7XHJcbiRtb25leS1iYWQ6ICAgICAgICAgICAgI2M5MjEwMDtcclxuXHJcbiRtb25leS1nb29kLXNhdHVyYXRlZDogIzAwRkZDODtcclxuJG1vbmV5LWJhZC1zYXR1cmF0ZWQ6ICAjRkY1NTQwO1xyXG5cclxuJGVycm9yOiAgICAgICAgICAgICAgICAjY2MwMDAwO1xyXG5cclxuJHByaW1hcnk6ICRwcmltYXJ5LWNvbG9yO1xyXG5cclxuaHRtbCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5pcy1nb29kIHtcclxuICBjb2xvcjogJG1vbmV5LWdvb2Q7XHJcbn1cclxuXHJcbi5pcy1iYWQge1xyXG4gIGNvbG9yOiAkbW9uZXktYmFkO1xyXG59XHJcblxyXG4uYmFkZ2UuYmFkZ2Utc3VjY2VzcyB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1hcmdpbjogNDBweDtcclxufVxyXG5cclxuLyogVFJBTlNBQ1RJT04gVEFCTEUgKi9cclxuLnRyYW5zYWN0aW9uLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBoZWlnaHQ6IDEuMTVyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG59XHJcblxyXG4uc2VsZWN0ZWQsIC5lZGl0aW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yLWxpZ2h0O1xyXG4gICAgY3Vyc29yOiB0ZXh0O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tZGF0ZSB7XHJcbiAgICBmbGV4OiAxIDEgMTIwcHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1hY2NvdW50IHtcclxuICAgIGZsZXg6IDEgMSAxMjBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLWNhdGVnb3J5IHtcclxuICAgIGZsZXg6IDEgMSAxMjBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLWZsb3cge1xyXG4gICAgZmxleDogMCAxIDEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1jbGVhcmVkIHtcclxuICAgIGZsZXg6IDAgMSA2MHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tZGVzY3JpcHRpb24ge1xyXG4gICAgZmxleDogMSAxIDEyMHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tcGF5ZWUge1xyXG4gICAgZmxleDogMSAxIDEyMHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tc2VsZWN0ZWQge1xyXG4gICAgZmxleDogMCAxIDMwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxufSIsImh0bWwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pcy1nb29kIHtcbiAgY29sb3I6ICMzMTg3MDA7XG59XG5cbi5pcy1iYWQge1xuICBjb2xvcjogI2M5MjEwMDtcbn1cblxuLmJhZGdlLmJhZGdlLXN1Y2Nlc3Mge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogNDBweDtcbn1cblxuLyogVFJBTlNBQ1RJT04gVEFCTEUgKi9cbi50cmFuc2FjdGlvbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGhlaWdodDogMS4xNXJlbTtcbiAgcGFkZGluZy10b3A6IDFweDtcbn1cblxuLnNlbGVjdGVkLCAuZWRpdGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REM7XG4gIGN1cnNvcjogdGV4dDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLWRhdGUge1xuICBmbGV4OiAxIDEgMTIwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1hY2NvdW50IHtcbiAgZmxleDogMSAxIDEyMHB4O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tY2F0ZWdvcnkge1xuICBmbGV4OiAxIDEgMTIwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1mbG93IHtcbiAgZmxleDogMCAxIDEwMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLWNsZWFyZWQge1xuICBmbGV4OiAwIDEgNjBweDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLWRlc2NyaXB0aW9uIHtcbiAgZmxleDogMSAxIDEyMHB4O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tcGF5ZWUge1xuICBmbGV4OiAxIDEgMTIwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1zZWxlY3RlZCB7XG4gIGZsZXg6IDAgMSAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nOiA1cHg7XG4gIGZsZXg6IDAgMCBhdXRvO1xufSIsIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZsZXg6IDAgMCBhdXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/envelopes/components/envelopes-header/envelopes.header.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/envelopes/components/envelopes-header/envelopes.header.component.ts ***!
  \*************************************************************************************/
/*! exports provided: EnvelopesHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvelopesHeaderComponent", function() { return EnvelopesHeaderComponent; });
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

var EnvelopesHeaderComponent = /** @class */ (function () {
    function EnvelopesHeaderComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], EnvelopesHeaderComponent.prototype, "available", void 0);
    EnvelopesHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "moneteer-envelopes-header",
            template: __webpack_require__(/*! raw-loader!./envelopes.header.component.html */ "./node_modules/raw-loader/index.js!./src/app/envelopes/components/envelopes-header/envelopes.header.component.html"),
            styles: [__webpack_require__(/*! ./envelopes.header.component.scss */ "./src/app/envelopes/components/envelopes-header/envelopes.header.component.scss")]
        })
    ], EnvelopesHeaderComponent);
    return EnvelopesHeaderComponent;
}());



/***/ }),

/***/ "./src/app/envelopes/components/envelopes-month-category-create/envelopes.month.category.create.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/envelopes/components/envelopes-month-category-create/envelopes.month.category.create.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n  overflow: hidden;\n  height: 100%;\n}\n\nbody {\n  height: 100%;\n}\n\n.is-good {\n  color: #318700;\n}\n\n.is-bad {\n  color: #c92100;\n}\n\n.badge.badge-success {\n  color: #fff;\n}\n\n.container {\n  margin: 40px;\n}\n\n/* TRANSACTION TABLE */\n\n.transaction-row {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  flex-shrink: 0;\n  height: 1.15rem;\n  padding-top: 1px;\n}\n\n.selected, .editing {\n  background-color: #CFD8DC;\n  cursor: text;\n}\n\n.transaction-cell--date {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--account {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--category {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--flow {\n  flex: 0 1 100px;\n  text-align: right;\n}\n\n.transaction-cell--cleared {\n  flex: 0 1 60px;\n}\n\n.transaction-cell--description {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--payee {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--selected {\n  flex: 0 1 30px;\n  padding-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW52ZWxvcGVzL2NvbXBvbmVudHMvZW52ZWxvcGVzLW1vbnRoLWNhdGVnb3J5LWNyZWF0ZS9EOlxcZ2l0XFxtb25ldGVlclxcbW9uZXRlZXItZnJvbnRlbmQvc3JjXFxhcHBcXGVudmVsb3Blc1xcY29tcG9uZW50c1xcZW52ZWxvcGVzLW1vbnRoLWNhdGVnb3J5LWNyZWF0ZVxcZW52ZWxvcGVzLm1vbnRoLmNhdGVnb3J5LmNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZW52ZWxvcGVzL2NvbXBvbmVudHMvZW52ZWxvcGVzLW1vbnRoLWNhdGVnb3J5LWNyZWF0ZS9lbnZlbG9wZXMubW9udGguY2F0ZWdvcnkuY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ2xCSjs7QURxQkE7RUFDRSxZQUFBO0FDbEJGOztBRHFCQTtFQUNFLGNBcEJxQjtBQ0V2Qjs7QURxQkE7RUFDRSxjQXZCcUI7QUNLdkI7O0FEcUJBO0VBQ0UsV0FBQTtBQ2xCRjs7QURxQkE7RUFDRSxZQUFBO0FDbEJGOztBRHFCQSxzQkFBQTs7QUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ2xCSjs7QURxQkE7RUFDSSx5QkFyRG1CO0VBc0RuQixZQUFBO0FDbEJKOztBRHFCQTtFQUNJLGVBQUE7QUNsQko7O0FEcUJBO0VBQ0ksZUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0FDbEJKOztBRHFCQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ2xCSjs7QURxQkE7RUFDSSxjQUFBO0FDbEJKOztBRHFCQTtFQUNJLGVBQUE7QUNsQko7O0FEcUJBO0VBQ0ksZUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNsQkoiLCJmaWxlIjoic3JjL2FwcC9lbnZlbG9wZXMvY29tcG9uZW50cy9lbnZlbG9wZXMtbW9udGgtY2F0ZWdvcnktY3JlYXRlL2VudmVsb3Blcy5tb250aC5jYXRlZ29yeS5jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS1jb2xvci1kYXJrOiAgICM0NTVBNjQ7XHJcbiRwcmltYXJ5LWNvbG9yOiAgICAgICAgIzYwN0Q4QjtcclxuJHByaW1hcnktY29sb3ItbGlnaHQ6ICAjQ0ZEOERDO1xyXG4kcHJpbWFyeS1jb2xvci10ZXh0OiAgICNGRkZGRkY7XHJcbiRhY2NlbnQtY29sb3I6ICAgICAgICAgI0ZGQzEwNztcclxuJHByaW1hcnktdGV4dC1jb2xvcjogICAjMjEyMTIxO1xyXG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6ICM3NTc1NzU7XHJcbiRkaXZpZGVyLWNvbG9yOiAgICAgICAgI0JEQkRCRDtcclxuXHJcbiRtb25leS1nb29kOiAgICAgICAgICAgIzMxODcwMDtcclxuJG1vbmV5LWJhZDogICAgICAgICAgICAjYzkyMTAwO1xyXG5cclxuJG1vbmV5LWdvb2Qtc2F0dXJhdGVkOiAjMDBGRkM4O1xyXG4kbW9uZXktYmFkLXNhdHVyYXRlZDogICNGRjU1NDA7XHJcblxyXG4kZXJyb3I6ICAgICAgICAgICAgICAgICNjYzAwMDA7XHJcblxyXG4kcHJpbWFyeTogJHByaW1hcnktY29sb3I7XHJcblxyXG5odG1sIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmlzLWdvb2Qge1xyXG4gIGNvbG9yOiAkbW9uZXktZ29vZDtcclxufVxyXG5cclxuLmlzLWJhZCB7XHJcbiAgY29sb3I6ICRtb25leS1iYWQ7XHJcbn1cclxuXHJcbi5iYWRnZS5iYWRnZS1zdWNjZXNzIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiA0MHB4O1xyXG59XHJcblxyXG4vKiBUUkFOU0FDVElPTiBUQUJMRSAqL1xyXG4udHJhbnNhY3Rpb24tcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIGhlaWdodDogMS4xNXJlbTtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbn1cclxuXHJcbi5zZWxlY3RlZCwgLmVkaXRpbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3ItbGlnaHQ7XHJcbiAgICBjdXJzb3I6IHRleHQ7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1kYXRlIHtcclxuICAgIGZsZXg6IDEgMSAxMjBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLWFjY291bnQge1xyXG4gICAgZmxleDogMSAxIDEyMHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tY2F0ZWdvcnkge1xyXG4gICAgZmxleDogMSAxIDEyMHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tZmxvdyB7XHJcbiAgICBmbGV4OiAwIDEgMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLWNsZWFyZWQge1xyXG4gICAgZmxleDogMCAxIDYwcHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1kZXNjcmlwdGlvbiB7XHJcbiAgICBmbGV4OiAxIDEgMTIwcHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1wYXllZSB7XHJcbiAgICBmbGV4OiAxIDEgMTIwcHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1zZWxlY3RlZCB7XHJcbiAgICBmbGV4OiAwIDEgMzBweDtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG59IiwiaHRtbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmlzLWdvb2Qge1xuICBjb2xvcjogIzMxODcwMDtcbn1cblxuLmlzLWJhZCB7XG4gIGNvbG9yOiAjYzkyMTAwO1xufVxuXG4uYmFkZ2UuYmFkZ2Utc3VjY2VzcyB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luOiA0MHB4O1xufVxuXG4vKiBUUkFOU0FDVElPTiBUQUJMRSAqL1xuLnRyYW5zYWN0aW9uLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBmbGV4LXNocmluazogMDtcbiAgaGVpZ2h0OiAxLjE1cmVtO1xuICBwYWRkaW5nLXRvcDogMXB4O1xufVxuXG4uc2VsZWN0ZWQsIC5lZGl0aW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NGRDhEQztcbiAgY3Vyc29yOiB0ZXh0O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tZGF0ZSB7XG4gIGZsZXg6IDEgMSAxMjBweDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLWFjY291bnQge1xuICBmbGV4OiAxIDEgMTIwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1jYXRlZ29yeSB7XG4gIGZsZXg6IDEgMSAxMjBweDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLWZsb3cge1xuICBmbGV4OiAwIDEgMTAwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tY2xlYXJlZCB7XG4gIGZsZXg6IDAgMSA2MHB4O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tZGVzY3JpcHRpb24ge1xuICBmbGV4OiAxIDEgMTIwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1wYXllZSB7XG4gIGZsZXg6IDEgMSAxMjBweDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLXNlbGVjdGVkIHtcbiAgZmxleDogMCAxIDMwcHg7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/envelopes/components/envelopes-month-category-create/envelopes.month.category.create.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/envelopes/components/envelopes-month-category-create/envelopes.month.category.create.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: EnvelopesMonthCategoryCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvelopesMonthCategoryCreateComponent", function() { return EnvelopesMonthCategoryCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/index */ "./src/app/core/services/index.ts");
/* harmony import */ var _core_models_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/models/index */ "./src/app/core/models/index.ts");
/* harmony import */ var _core_models_guid_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/models/guid.model */ "./src/app/core/models/guid.model.ts");
/* harmony import */ var _shared_components_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/index */ "./src/app/shared/components/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EnvelopesMonthCategoryCreateComponent = /** @class */ (function () {
    function EnvelopesMonthCategoryCreateComponent(notificationsService) {
        this.notificationsService = notificationsService;
        this.isCreating = false;
    }
    EnvelopesMonthCategoryCreateComponent.prototype.create = function () {
        if (!this.canCreate()) {
            return;
        }
        this.isCreating = true;
        /*this.categoryActions.createCategory(this.name, this.masterCategory).retry(2).finally(() => {
            this.isCreating = false;
        }).subscribe(c => {
            this.notificationsService.success("Catetory created");
            this.dropDown.close();
        }, err => {
            this.notificationsService.error("Something went wrong. Please try again later");
        });*/
    };
    EnvelopesMonthCategoryCreateComponent.prototype.canCreate = function () {
        return !!this.name && !!this.envelopeCategory && this.envelopeCategory.id !== _core_models_guid_model__WEBPACK_IMPORTED_MODULE_3__["GuidModel"].empty;
    };
    EnvelopesMonthCategoryCreateComponent.prototype.onDropdownOpened = function () {
        var _this = this;
        setTimeout(function () { return _this.nameInput.nativeElement.focus(); }, 1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], EnvelopesMonthCategoryCreateComponent.prototype, "anchor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _core_models_index__WEBPACK_IMPORTED_MODULE_2__["EnvelopeCategoryModel"])
    ], EnvelopesMonthCategoryCreateComponent.prototype, "envelopeCategory", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_components_index__WEBPACK_IMPORTED_MODULE_4__["DropdownComponent"], { static: false }),
        __metadata("design:type", _shared_components_index__WEBPACK_IMPORTED_MODULE_4__["DropdownComponent"])
    ], EnvelopesMonthCategoryCreateComponent.prototype, "dropDown", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("nameInput", { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], EnvelopesMonthCategoryCreateComponent.prototype, "nameInput", void 0);
    EnvelopesMonthCategoryCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "moneteer-envelopes-month-category-create",
            template: __webpack_require__(/*! raw-loader!./envelopes.month.category.create.component.html */ "./node_modules/raw-loader/index.js!./src/app/envelopes/components/envelopes-month-category-create/envelopes.month.category.create.component.html"),
            styles: [__webpack_require__(/*! ./envelopes.month.category.create.component.scss */ "./src/app/envelopes/components/envelopes-month-category-create/envelopes.month.category.create.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_index__WEBPACK_IMPORTED_MODULE_1__["NotificationsService"]])
    ], EnvelopesMonthCategoryCreateComponent);
    return EnvelopesMonthCategoryCreateComponent;
}());



/***/ }),

/***/ "./src/app/envelopes/components/home/envelopes.home.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/envelopes/components/home/envelopes.home.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n  overflow: hidden;\n  height: 100%;\n}\n\nbody {\n  height: 100%;\n}\n\n.is-good {\n  color: #318700;\n}\n\n.is-bad {\n  color: #c92100;\n}\n\n.badge.badge-success {\n  color: #fff;\n}\n\n.container {\n  margin: 40px;\n}\n\n/* TRANSACTION TABLE */\n\n.transaction-row {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  flex-shrink: 0;\n  height: 1.15rem;\n  padding-top: 1px;\n}\n\n.selected, .editing {\n  background-color: #CFD8DC;\n  cursor: text;\n}\n\n.transaction-cell--date {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--account {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--category {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--flow {\n  flex: 0 1 100px;\n  text-align: right;\n}\n\n.transaction-cell--cleared {\n  flex: 0 1 60px;\n}\n\n.transaction-cell--description {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--payee {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--selected {\n  flex: 0 1 30px;\n  padding-left: 8px;\n}\n\n:host {\n  width: 100%;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n:host ::ng-deep .budget--column-header {\n  flex-basis: 180px;\n  flex-grow: 0;\n  min-width: 30px;\n  max-width: 250px;\n  width: 180px;\n  padding-right: 10px;\n  background-color: #fff;\n  color: #757575;\n  box-sizing: border-box;\n}\n\n.budget--category-header {\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n\n.budget--add-category {\n  cursor: pointer;\n}\n\n.month-headers {\n  display: flex;\n}\n\n.budget--header {\n  overflow-y: scroll;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n.budget--body {\n  overflow-y: scroll;\n  flex-grow: 1;\n  flex-shrink: 1;\n  position: relative;\n}\n\n.budget--row {\n  display: flex;\n  flex-shrink: 0;\n}\n\n.budget--add-category {\n  cursor: pointer;\n}\n\n#workspace {\n  display: flex;\n  flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW52ZWxvcGVzL2NvbXBvbmVudHMvaG9tZS9EOlxcZ2l0XFxtb25ldGVlclxcbW9uZXRlZXItZnJvbnRlbmQvc3JjXFxhcHBcXGVudmVsb3Blc1xcY29tcG9uZW50c1xcaG9tZVxcZW52ZWxvcGVzLmhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VudmVsb3Blcy9jb21wb25lbnRzL2hvbWUvZW52ZWxvcGVzLmhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VudmVsb3Blcy9jb21wb25lbnRzL2hvbWUvRDpcXGdpdFxcbW9uZXRlZXJcXG1vbmV0ZWVyLWZyb250ZW5kL3N0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ2xCSjs7QURxQkE7RUFDRSxZQUFBO0FDbEJGOztBRHFCQTtFQUNFLGNBcEJxQjtBQ0V2Qjs7QURxQkE7RUFDRSxjQXZCcUI7QUNLdkI7O0FEcUJBO0VBQ0UsV0FBQTtBQ2xCRjs7QURxQkE7RUFDRSxZQUFBO0FDbEJGOztBRHFCQSxzQkFBQTs7QUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ2xCSjs7QURxQkE7RUFDSSx5QkFyRG1CO0VBc0RuQixZQUFBO0FDbEJKOztBRHFCQTtFQUNJLGVBQUE7QUNsQko7O0FEcUJBO0VBQ0ksZUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0FDbEJKOztBRHFCQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ2xCSjs7QURxQkE7RUFDSSxjQUFBO0FDbEJKOztBRHFCQTtFQUNJLGVBQUE7QUNsQko7O0FEcUJBO0VBQ0ksZUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNsQko7O0FDdEVBO0VBQ0ksV0FBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUR5RUo7O0FDdEVBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjRlhtQjtFRVluQixzQkFBQTtBRHlFSjs7QUN0RUE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBRHlFSjs7QUN0RUE7RUFDSSxlQUFBO0FEeUVKOztBQ3JFQTtFQUNJLGFBQUE7QUR3RUo7O0FDcEVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBRHVFSjs7QUNwRUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUR1RUo7O0FDcEVBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUR1RUo7O0FDcEVBO0VBQ0ksZUFBQTtBRHVFSjs7QUNwRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUR1RUoiLCJmaWxlIjoic3JjL2FwcC9lbnZlbG9wZXMvY29tcG9uZW50cy9ob21lL2VudmVsb3Blcy5ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnktY29sb3ItZGFyazogICAjNDU1QTY0O1xyXG4kcHJpbWFyeS1jb2xvcjogICAgICAgICM2MDdEOEI7XHJcbiRwcmltYXJ5LWNvbG9yLWxpZ2h0OiAgI0NGRDhEQztcclxuJHByaW1hcnktY29sb3ItdGV4dDogICAjRkZGRkZGO1xyXG4kYWNjZW50LWNvbG9yOiAgICAgICAgICNGRkMxMDc7XHJcbiRwcmltYXJ5LXRleHQtY29sb3I6ICAgIzIxMjEyMTtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjNzU3NTc1O1xyXG4kZGl2aWRlci1jb2xvcjogICAgICAgICNCREJEQkQ7XHJcblxyXG4kbW9uZXktZ29vZDogICAgICAgICAgICMzMTg3MDA7XHJcbiRtb25leS1iYWQ6ICAgICAgICAgICAgI2M5MjEwMDtcclxuXHJcbiRtb25leS1nb29kLXNhdHVyYXRlZDogIzAwRkZDODtcclxuJG1vbmV5LWJhZC1zYXR1cmF0ZWQ6ICAjRkY1NTQwO1xyXG5cclxuJGVycm9yOiAgICAgICAgICAgICAgICAjY2MwMDAwO1xyXG5cclxuJHByaW1hcnk6ICRwcmltYXJ5LWNvbG9yO1xyXG5cclxuaHRtbCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5pcy1nb29kIHtcclxuICBjb2xvcjogJG1vbmV5LWdvb2Q7XHJcbn1cclxuXHJcbi5pcy1iYWQge1xyXG4gIGNvbG9yOiAkbW9uZXktYmFkO1xyXG59XHJcblxyXG4uYmFkZ2UuYmFkZ2Utc3VjY2VzcyB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1hcmdpbjogNDBweDtcclxufVxyXG5cclxuLyogVFJBTlNBQ1RJT04gVEFCTEUgKi9cclxuLnRyYW5zYWN0aW9uLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBoZWlnaHQ6IDEuMTVyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG59XHJcblxyXG4uc2VsZWN0ZWQsIC5lZGl0aW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yLWxpZ2h0O1xyXG4gICAgY3Vyc29yOiB0ZXh0O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tZGF0ZSB7XHJcbiAgICBmbGV4OiAxIDEgMTIwcHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1hY2NvdW50IHtcclxuICAgIGZsZXg6IDEgMSAxMjBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLWNhdGVnb3J5IHtcclxuICAgIGZsZXg6IDEgMSAxMjBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLWZsb3cge1xyXG4gICAgZmxleDogMCAxIDEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1jbGVhcmVkIHtcclxuICAgIGZsZXg6IDAgMSA2MHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tZGVzY3JpcHRpb24ge1xyXG4gICAgZmxleDogMSAxIDEyMHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tcGF5ZWUge1xyXG4gICAgZmxleDogMSAxIDEyMHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tc2VsZWN0ZWQge1xyXG4gICAgZmxleDogMCAxIDMwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxufSIsImh0bWwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pcy1nb29kIHtcbiAgY29sb3I6ICMzMTg3MDA7XG59XG5cbi5pcy1iYWQge1xuICBjb2xvcjogI2M5MjEwMDtcbn1cblxuLmJhZGdlLmJhZGdlLXN1Y2Nlc3Mge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogNDBweDtcbn1cblxuLyogVFJBTlNBQ1RJT04gVEFCTEUgKi9cbi50cmFuc2FjdGlvbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGhlaWdodDogMS4xNXJlbTtcbiAgcGFkZGluZy10b3A6IDFweDtcbn1cblxuLnNlbGVjdGVkLCAuZWRpdGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REM7XG4gIGN1cnNvcjogdGV4dDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLWRhdGUge1xuICBmbGV4OiAxIDEgMTIwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1hY2NvdW50IHtcbiAgZmxleDogMSAxIDEyMHB4O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tY2F0ZWdvcnkge1xuICBmbGV4OiAxIDEgMTIwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1mbG93IHtcbiAgZmxleDogMCAxIDEwMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLWNsZWFyZWQge1xuICBmbGV4OiAwIDEgNjBweDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLWRlc2NyaXB0aW9uIHtcbiAgZmxleDogMSAxIDEyMHB4O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tcGF5ZWUge1xuICBmbGV4OiAxIDEgMTIwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1zZWxlY3RlZCB7XG4gIGZsZXg6IDAgMSAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cblxuOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5idWRnZXQtLWNvbHVtbi1oZWFkZXIge1xuICBmbGV4LWJhc2lzOiAxODBweDtcbiAgZmxleC1ncm93OiAwO1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIG1heC13aWR0aDogMjUwcHg7XG4gIHdpZHRoOiAxODBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICM3NTc1NzU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5idWRnZXQtLWNhdGVnb3J5LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmJ1ZGdldC0tYWRkLWNhdGVnb3J5IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubW9udGgtaGVhZGVycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5idWRnZXQtLWhlYWRlciB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmJ1ZGdldC0tYm9keSB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgZmxleC1ncm93OiAxO1xuICBmbGV4LXNocmluazogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYnVkZ2V0LS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmJ1ZGdldC0tYWRkLWNhdGVnb3J5IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jd29ya3NwYWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn0iLCJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi9zdHlsZXMuc2Nzc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuYnVkZ2V0LS1jb2x1bW4taGVhZGVyIHtcclxuICAgIGZsZXgtYmFzaXM6IDE4MHB4O1xyXG4gICAgZmxleC1ncm93OiAwO1xyXG4gICAgbWluLXdpZHRoOiAzMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5idWRnZXQtLWNhdGVnb3J5LWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmJ1ZGdldC0tYWRkLWNhdGVnb3J5IHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi5tb250aC1oZWFkZXJzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcblxyXG4uYnVkZ2V0LS1oZWFkZXIge1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgZmxleC1ncm93OiAwO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi5idWRnZXQtLWJvZHkge1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZmxleC1zaHJpbms6IDE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5idWRnZXQtLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi5idWRnZXQtLWFkZC1jYXRlZ29yeSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiN3b3Jrc3BhY2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3dcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/envelopes/components/home/envelopes.home.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/envelopes/components/home/envelopes.home.component.ts ***!
  \***********************************************************************/
/*! exports provided: EnvelopesHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvelopesHomeComponent", function() { return EnvelopesHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_reducers_envelopes_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/reducers/envelopes.reducer */ "./src/app/core/reducers/envelopes.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EnvelopesHomeComponent = /** @class */ (function () {
    function EnvelopesHomeComponent(store) {
        this.store = store;
    }
    EnvelopesHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(_core_reducers_envelopes_reducer__WEBPACK_IMPORTED_MODULE_1__["getEnvelopes"]).subscribe(function (e) { return _this.envelopes = e; });
        this.store.select(_core_reducers_envelopes_reducer__WEBPACK_IMPORTED_MODULE_1__["getAvailable"]).subscribe(function (a) { return _this.available = a; });
    };
    EnvelopesHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "moneteer-envelopes-home",
            template: __webpack_require__(/*! raw-loader!./envelopes.home.component.html */ "./node_modules/raw-loader/index.js!./src/app/envelopes/components/home/envelopes.home.component.html"),
            styles: [__webpack_require__(/*! ./envelopes.home.component.scss */ "./src/app/envelopes/components/home/envelopes.home.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], EnvelopesHomeComponent);
    return EnvelopesHomeComponent;
}());



/***/ }),

/***/ "./src/app/envelopes/components/index.ts":
/*!***********************************************!*\
  !*** ./src/app/envelopes/components/index.ts ***!
  \***********************************************/
/*! exports provided: EnvelopesHomeComponent, MonthSelectorComponent, EnvelopesCategoriesComponent, EnvelopeComponent, EnvelopesMonthCategoryCreateComponent, EnvelopesHeaderComponent, EnvelopesCategoryCreateComponent, EnvelopesHeaderStatsComponent, EnvelopesHeaderStatsAvailableComponent, EnvelopesCategoryComponent, EnvelopesCategoryHeaderComponent, EnvelopesColumnHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_envelopes_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/envelopes.home.component */ "./src/app/envelopes/components/home/envelopes.home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnvelopesHomeComponent", function() { return _home_envelopes_home_component__WEBPACK_IMPORTED_MODULE_0__["EnvelopesHomeComponent"]; });

/* harmony import */ var _month_selector_month_selector_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./month-selector/month.selector.component */ "./src/app/envelopes/components/month-selector/month.selector.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MonthSelectorComponent", function() { return _month_selector_month_selector_component__WEBPACK_IMPORTED_MODULE_1__["MonthSelectorComponent"]; });

/* harmony import */ var _envelopes_categories_envelopes_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./envelopes-categories/envelopes.categories.component */ "./src/app/envelopes/components/envelopes-categories/envelopes.categories.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnvelopesCategoriesComponent", function() { return _envelopes_categories_envelopes_categories_component__WEBPACK_IMPORTED_MODULE_2__["EnvelopesCategoriesComponent"]; });

/* harmony import */ var _envelope_envelope_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./envelope/envelope.component */ "./src/app/envelopes/components/envelope/envelope.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnvelopeComponent", function() { return _envelope_envelope_component__WEBPACK_IMPORTED_MODULE_3__["EnvelopeComponent"]; });

/* harmony import */ var _envelopes_month_category_create_envelopes_month_category_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./envelopes-month-category-create/envelopes.month.category.create.component */ "./src/app/envelopes/components/envelopes-month-category-create/envelopes.month.category.create.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnvelopesMonthCategoryCreateComponent", function() { return _envelopes_month_category_create_envelopes_month_category_create_component__WEBPACK_IMPORTED_MODULE_4__["EnvelopesMonthCategoryCreateComponent"]; });

/* harmony import */ var _envelopes_header_envelopes_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./envelopes-header/envelopes.header.component */ "./src/app/envelopes/components/envelopes-header/envelopes.header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnvelopesHeaderComponent", function() { return _envelopes_header_envelopes_header_component__WEBPACK_IMPORTED_MODULE_5__["EnvelopesHeaderComponent"]; });

/* harmony import */ var _envelopes_category_create_envelopes_category_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./envelopes-category-create/envelopes.category.create.component */ "./src/app/envelopes/components/envelopes-category-create/envelopes.category.create.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnvelopesCategoryCreateComponent", function() { return _envelopes_category_create_envelopes_category_create_component__WEBPACK_IMPORTED_MODULE_6__["EnvelopesCategoryCreateComponent"]; });

/* harmony import */ var _envelopes_header_stats_envelopes_header_stats_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./envelopes-header-stats/envelopes.header.stats.component */ "./src/app/envelopes/components/envelopes-header-stats/envelopes.header.stats.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnvelopesHeaderStatsComponent", function() { return _envelopes_header_stats_envelopes_header_stats_component__WEBPACK_IMPORTED_MODULE_7__["EnvelopesHeaderStatsComponent"]; });

/* harmony import */ var _envelopes_header_stats_available_envelopes_header_stats_available_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./envelopes-header-stats-available/envelopes.header.stats.available.component */ "./src/app/envelopes/components/envelopes-header-stats-available/envelopes.header.stats.available.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnvelopesHeaderStatsAvailableComponent", function() { return _envelopes_header_stats_available_envelopes_header_stats_available_component__WEBPACK_IMPORTED_MODULE_8__["EnvelopesHeaderStatsAvailableComponent"]; });

/* harmony import */ var _envelopes_category_envelopes_category_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./envelopes-category/envelopes.category.component */ "./src/app/envelopes/components/envelopes-category/envelopes.category.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnvelopesCategoryComponent", function() { return _envelopes_category_envelopes_category_component__WEBPACK_IMPORTED_MODULE_9__["EnvelopesCategoryComponent"]; });

/* harmony import */ var _envelopes_category_header_envelopes_category_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./envelopes-category-header/envelopes.category.header.component */ "./src/app/envelopes/components/envelopes-category-header/envelopes.category.header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnvelopesCategoryHeaderComponent", function() { return _envelopes_category_header_envelopes_category_header_component__WEBPACK_IMPORTED_MODULE_10__["EnvelopesCategoryHeaderComponent"]; });

/* harmony import */ var _envelopes_column_header_envelopes_column_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./envelopes-column-header/envelopes.column.header.component */ "./src/app/envelopes/components/envelopes-column-header/envelopes.column.header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnvelopesColumnHeaderComponent", function() { return _envelopes_column_header_envelopes_column_header_component__WEBPACK_IMPORTED_MODULE_11__["EnvelopesColumnHeaderComponent"]; });















/***/ }),

/***/ "./src/app/envelopes/components/month-selector/month.selector.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/envelopes/components/month-selector/month.selector.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n  overflow: hidden;\n  height: 100%;\n}\n\nbody {\n  height: 100%;\n}\n\n.is-good {\n  color: #318700;\n}\n\n.is-bad {\n  color: #c92100;\n}\n\n.badge.badge-success {\n  color: #fff;\n}\n\n.container {\n  margin: 40px;\n}\n\n/* TRANSACTION TABLE */\n\n.transaction-row {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  flex-shrink: 0;\n  height: 1.15rem;\n  padding-top: 1px;\n}\n\n.selected, .editing {\n  background-color: #CFD8DC;\n  cursor: text;\n}\n\n.transaction-cell--date {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--account {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--category {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--flow {\n  flex: 0 1 100px;\n  text-align: right;\n}\n\n.transaction-cell--cleared {\n  flex: 0 1 60px;\n}\n\n.transaction-cell--description {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--payee {\n  flex: 1 1 120px;\n}\n\n.transaction-cell--selected {\n  flex: 0 1 30px;\n  padding-left: 8px;\n}\n\n:host {\n  background-color: #607D8B;\n  color: #FFFFFF;\n  display: flex;\n  align-items: center;\n  flex: 0 1 auto;\n  margin: 5px;\n  border-radius: 3px;\n}\n\n.navigate {\n  padding: 10px;\n  cursor: pointer;\n}\n\n#month {\n  text-align: center;\n  padding: 10px 10px;\n  cursor: pointer;\n  flex: 1;\n}\n\n#year {\n  background-color: #FFC107;\n  padding: 10px;\n}\n\n#year-and-month {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW52ZWxvcGVzL2NvbXBvbmVudHMvbW9udGgtc2VsZWN0b3IvRDpcXGdpdFxcbW9uZXRlZXJcXG1vbmV0ZWVyLWZyb250ZW5kL3NyY1xcYXBwXFxlbnZlbG9wZXNcXGNvbXBvbmVudHNcXG1vbnRoLXNlbGVjdG9yXFxtb250aC5zZWxlY3Rvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZW52ZWxvcGVzL2NvbXBvbmVudHMvbW9udGgtc2VsZWN0b3IvbW9udGguc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VudmVsb3Blcy9jb21wb25lbnRzL21vbnRoLXNlbGVjdG9yL0Q6XFxnaXRcXG1vbmV0ZWVyXFxtb25ldGVlci1mcm9udGVuZC9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNsQko7O0FEcUJBO0VBQ0UsWUFBQTtBQ2xCRjs7QURxQkE7RUFDRSxjQXBCcUI7QUNFdkI7O0FEcUJBO0VBQ0UsY0F2QnFCO0FDS3ZCOztBRHFCQTtFQUNFLFdBQUE7QUNsQkY7O0FEcUJBO0VBQ0UsWUFBQTtBQ2xCRjs7QURxQkEsc0JBQUE7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNsQko7O0FEcUJBO0VBQ0kseUJBckRtQjtFQXNEbkIsWUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0FDbEJKOztBRHFCQTtFQUNJLGVBQUE7QUNsQko7O0FEcUJBO0VBQ0ksZUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNsQko7O0FEcUJBO0VBQ0ksY0FBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0FDbEJKOztBRHFCQTtFQUNJLGVBQUE7QUNsQko7O0FEcUJBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDbEJKOztBQ3RFQTtFQUNFLHlCRkZxQjtFRUdyQixjRkRxQjtFRUVyQixhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FEeUVGOztBQ3RFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FEeUVGOztBQ3RFQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtBRHlFSjs7QUN0RUE7RUFDRSx5QkZyQnFCO0VFc0JyQixhQUFBO0FEeUVGOztBQ3RFQTtFQUNJLGFBQUE7QUR5RUoiLCJmaWxlIjoic3JjL2FwcC9lbnZlbG9wZXMvY29tcG9uZW50cy9tb250aC1zZWxlY3Rvci9tb250aC5zZWxlY3Rvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5LWNvbG9yLWRhcms6ICAgIzQ1NUE2NDtcclxuJHByaW1hcnktY29sb3I6ICAgICAgICAjNjA3RDhCO1xyXG4kcHJpbWFyeS1jb2xvci1saWdodDogICNDRkQ4REM7XHJcbiRwcmltYXJ5LWNvbG9yLXRleHQ6ICAgI0ZGRkZGRjtcclxuJGFjY2VudC1jb2xvcjogICAgICAgICAjRkZDMTA3O1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAgICMyMTIxMjE7XHJcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogIzc1NzU3NTtcclxuJGRpdmlkZXItY29sb3I6ICAgICAgICAjQkRCREJEO1xyXG5cclxuJG1vbmV5LWdvb2Q6ICAgICAgICAgICAjMzE4NzAwO1xyXG4kbW9uZXktYmFkOiAgICAgICAgICAgICNjOTIxMDA7XHJcblxyXG4kbW9uZXktZ29vZC1zYXR1cmF0ZWQ6ICMwMEZGQzg7XHJcbiRtb25leS1iYWQtc2F0dXJhdGVkOiAgI0ZGNTU0MDtcclxuXHJcbiRlcnJvcjogICAgICAgICAgICAgICAgI2NjMDAwMDtcclxuXHJcbiRwcmltYXJ5OiAkcHJpbWFyeS1jb2xvcjtcclxuXHJcbmh0bWwge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uaXMtZ29vZCB7XHJcbiAgY29sb3I6ICRtb25leS1nb29kO1xyXG59XHJcblxyXG4uaXMtYmFkIHtcclxuICBjb2xvcjogJG1vbmV5LWJhZDtcclxufVxyXG5cclxuLmJhZGdlLmJhZGdlLXN1Y2Nlc3Mge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW46IDQwcHg7XHJcbn1cclxuXHJcbi8qIFRSQU5TQUNUSU9OIFRBQkxFICovXHJcbi50cmFuc2FjdGlvbi1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgaGVpZ2h0OiAxLjE1cmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxufVxyXG5cclxuLnNlbGVjdGVkLCAuZWRpdGluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvci1saWdodDtcclxuICAgIGN1cnNvcjogdGV4dDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLWRhdGUge1xyXG4gICAgZmxleDogMSAxIDEyMHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tYWNjb3VudCB7XHJcbiAgICBmbGV4OiAxIDEgMTIwcHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1jYXRlZ29yeSB7XHJcbiAgICBmbGV4OiAxIDEgMTIwcHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jZWxsLS1mbG93IHtcclxuICAgIGZsZXg6IDAgMSAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2VsbC0tY2xlYXJlZCB7XHJcbiAgICBmbGV4OiAwIDEgNjBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLWRlc2NyaXB0aW9uIHtcclxuICAgIGZsZXg6IDEgMSAxMjBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLXBheWVlIHtcclxuICAgIGZsZXg6IDEgMSAxMjBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNlbGwtLXNlbGVjdGVkIHtcclxuICAgIGZsZXg6IDAgMSAzMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbn0iLCJodG1sIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaXMtZ29vZCB7XG4gIGNvbG9yOiAjMzE4NzAwO1xufVxuXG4uaXMtYmFkIHtcbiAgY29sb3I6ICNjOTIxMDA7XG59XG5cbi5iYWRnZS5iYWRnZS1zdWNjZXNzIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW46IDQwcHg7XG59XG5cbi8qIFRSQU5TQUNUSU9OIFRBQkxFICovXG4udHJhbnNhY3Rpb24tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBoZWlnaHQ6IDEuMTVyZW07XG4gIHBhZGRpbmctdG9wOiAxcHg7XG59XG5cbi5zZWxlY3RlZCwgLmVkaXRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDO1xuICBjdXJzb3I6IHRleHQ7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1kYXRlIHtcbiAgZmxleDogMSAxIDEyMHB4O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tYWNjb3VudCB7XG4gIGZsZXg6IDEgMSAxMjBweDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLWNhdGVnb3J5IHtcbiAgZmxleDogMSAxIDEyMHB4O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tZmxvdyB7XG4gIGZsZXg6IDAgMSAxMDBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1jbGVhcmVkIHtcbiAgZmxleDogMCAxIDYwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1jZWxsLS1kZXNjcmlwdGlvbiB7XG4gIGZsZXg6IDEgMSAxMjBweDtcbn1cblxuLnRyYW5zYWN0aW9uLWNlbGwtLXBheWVlIHtcbiAgZmxleDogMSAxIDEyMHB4O1xufVxuXG4udHJhbnNhY3Rpb24tY2VsbC0tc2VsZWN0ZWQge1xuICBmbGV4OiAwIDEgMzBweDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5cbjpob3N0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwN0Q4QjtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXg6IDAgMSBhdXRvO1xuICBtYXJnaW46IDVweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4ubmF2aWdhdGUge1xuICBwYWRkaW5nOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNtb250aCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsZXg6IDE7XG59XG5cbiN5ZWFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzEwNztcbiAgcGFkZGluZzogMTBweDtcbn1cblxuI3llYXItYW5kLW1vbnRoIHtcbiAgZGlzcGxheTogZmxleDtcbn0iLCJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi9zdHlsZXMuc2Nzc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gIGNvbG9yOiAkcHJpbWFyeS1jb2xvci10ZXh0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4OiAwIDEgYXV0bztcclxuICBtYXJnaW46IDVweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi5uYXZpZ2F0ZSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNtb250aCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG4jeWVhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4jeWVhci1hbmQtbW9udGgge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/envelopes/components/month-selector/month.selector.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/envelopes/components/month-selector/month.selector.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MonthSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthSelectorComponent", function() { return MonthSelectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/index */ "./src/app/core/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MonthSelectorComponent = /** @class */ (function () {
    function MonthSelectorComponent(mediaQueryService, route, router, changeDetector) {
        this.mediaQueryService = mediaQueryService;
        this.route = route;
        this.router = router;
        this.changeDetector = changeDetector;
        this.selectedMonth = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](moment__WEBPACK_IMPORTED_MODULE_2__());
    }
    MonthSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            var year = p.year;
            var month = p.month;
            _this.selectedMonth.next(moment__WEBPACK_IMPORTED_MODULE_2__["utc"]({ year: year, month: month - 1 }));
        });
        this.monthFormat = 'M';
        //this.mediaQueryService.mediaSize.subscribe(this.onResize.bind(this));
    };
    //private onResize(size: ScreenSize) {
    //    switch (size) {
    //        case ScreenSize.xs: {
    //            this.monthFormat = 'M';
    //            break;
    //        }
    //        case ScreenSize.s: {
    //            this.monthFormat = 'M';
    //            break;
    //        }
    //        case ScreenSize.m:
    //        case ScreenSize.l: {
    //            this.monthFormat = 'MMM';
    //            break;
    //        }
    //        case ScreenSize.xl: {
    //            this.monthFormat = 'MMMM';
    //            break;
    //        }
    //        default: {
    //            throw new Error('Unexpected screensize');
    //        }
    //    }
    //}
    MonthSelectorComponent.prototype.forward = function () {
        var year = this.route.snapshot.params.year;
        var month = this.route.snapshot.params.month;
        var newMonth = moment__WEBPACK_IMPORTED_MODULE_2__["utc"]({ year: year, month: month - 1 }).add(1, 'month');
        this.router.navigate([newMonth.year(), newMonth.month() + 1], { relativeTo: this.route.parent });
    };
    MonthSelectorComponent.prototype.back = function () {
        var year = this.route.snapshot.params.year;
        var month = this.route.snapshot.params.month;
        var newMonth = moment__WEBPACK_IMPORTED_MODULE_2__["utc"]({ year: year, month: month - 1 }).add(-1, 'month');
        this.router.navigate([newMonth.year(), newMonth.month() + 1], { relativeTo: this.route.parent });
    };
    MonthSelectorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'moneteer-month-selector',
            template: __webpack_require__(/*! raw-loader!./month.selector.component.html */ "./node_modules/raw-loader/index.js!./src/app/envelopes/components/month-selector/month.selector.component.html"),
            styles: [__webpack_require__(/*! ./month.selector.component.scss */ "./src/app/envelopes/components/month-selector/month.selector.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_index__WEBPACK_IMPORTED_MODULE_4__["MediaQueryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], MonthSelectorComponent);
    return MonthSelectorComponent;
}());



/***/ }),

/***/ "./src/app/envelopes/envelopes.module.ts":
/*!***********************************************!*\
  !*** ./src/app/envelopes/envelopes.module.ts ***!
  \***********************************************/
/*! exports provided: EnvelopesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvelopesModule", function() { return EnvelopesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/app/envelopes/components/index.ts");
/* harmony import */ var _envelopes_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./envelopes.routing.module */ "./src/app/envelopes/envelopes.routing.module.ts");
/* harmony import */ var _components_envelope_details_envelope_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/envelope-details/envelope-details.component */ "./src/app/envelopes/components/envelope-details/envelope-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var EnvelopesModule = /** @class */ (function () {
    function EnvelopesModule() {
    }
    EnvelopesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components__WEBPACK_IMPORTED_MODULE_2__["EnvelopesHomeComponent"],
                _components__WEBPACK_IMPORTED_MODULE_2__["MonthSelectorComponent"],
                _components__WEBPACK_IMPORTED_MODULE_2__["EnvelopesHeaderComponent"],
                _components__WEBPACK_IMPORTED_MODULE_2__["EnvelopesHeaderStatsComponent"],
                _components__WEBPACK_IMPORTED_MODULE_2__["EnvelopesColumnHeaderComponent"],
                _components__WEBPACK_IMPORTED_MODULE_2__["EnvelopeComponent"],
                _components__WEBPACK_IMPORTED_MODULE_2__["EnvelopesMonthCategoryCreateComponent"],
                _components__WEBPACK_IMPORTED_MODULE_2__["EnvelopesCategoryCreateComponent"],
                _components__WEBPACK_IMPORTED_MODULE_2__["EnvelopesCategoriesComponent"],
                _components__WEBPACK_IMPORTED_MODULE_2__["EnvelopesHeaderStatsAvailableComponent"],
                _components__WEBPACK_IMPORTED_MODULE_2__["EnvelopesCategoryComponent"],
                _components__WEBPACK_IMPORTED_MODULE_2__["EnvelopesCategoryHeaderComponent"],
                _components_envelope_details_envelope_details_component__WEBPACK_IMPORTED_MODULE_4__["EnvelopeDetailsComponent"]
            ],
            imports: [
                _envelopes_routing_module__WEBPACK_IMPORTED_MODULE_3__["EnvelopesRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
            ],
        })
    ], EnvelopesModule);
    return EnvelopesModule;
}());



/***/ }),

/***/ "./src/app/envelopes/envelopes.routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/envelopes/envelopes.routing.module.ts ***!
  \*******************************************************/
/*! exports provided: EnvelopesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvelopesRoutingModule", function() { return EnvelopesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index */ "./src/app/envelopes/components/index.ts");
/* harmony import */ var _routing_resolvers_envelopes_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routing/resolvers/envelopes.resolver */ "./src/app/routing/resolvers/envelopes.resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: "", component: _components_index__WEBPACK_IMPORTED_MODULE_2__["EnvelopesHomeComponent"], resolve: [_routing_resolvers_envelopes_resolver__WEBPACK_IMPORTED_MODULE_3__["EnvelopesResolver"]] }
];
var EnvelopesRoutingModule = /** @class */ (function () {
    function EnvelopesRoutingModule() {
    }
    EnvelopesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EnvelopesRoutingModule);
    return EnvelopesRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=envelopes-envelopes-module.js.map