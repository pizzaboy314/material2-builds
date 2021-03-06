/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/stepper'), require('rxjs/Subject'), require('@angular/cdk/a11y'), require('@angular/cdk/coercion'), require('@angular/animations'), require('@angular/cdk/bidi'), require('@angular/material/core'), require('rxjs/operators/takeUntil'), require('@angular/cdk/portal'), require('@angular/common'), require('@angular/material/button'), require('@angular/material/icon')) :
	typeof define === 'function' && define.amd ? define('@angular/material/stepper', ['exports', '@angular/core', '@angular/cdk/stepper', 'rxjs/Subject', '@angular/cdk/a11y', '@angular/cdk/coercion', '@angular/animations', '@angular/cdk/bidi', '@angular/material/core', 'rxjs/operators/takeUntil', '@angular/cdk/portal', '@angular/common', '@angular/material/button', '@angular/material/icon'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.material = global.ng.material || {}, global.ng.material.stepper = {}),global.ng.core,global.ng.cdk.stepper,global.Rx,global.ng.cdk.a11y,global.ng.cdk.coercion,global.ng.animations,global.ng.cdk.bidi,global.ng.material.core,global.Rx.operators,global.ng.cdk.portal,global.ng.common,global.ng.material.button,global.ng.material.icon));
}(this, (function (exports,core,stepper,Subject,a11y,coercion,animations,bidi,core$1,takeUntil,portal,common,button,icon) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MatStepLabel = /** @class */ (function (_super) {
    __extends(MatStepLabel, _super);
    function MatStepLabel(template) {
        return _super.call(this, template) || this;
    }
    MatStepLabel.decorators = [
        { type: core.Directive, args: [{
                    selector: '[matStepLabel]',
                },] },
    ];
    /** @nocollapse */
    MatStepLabel.ctorParameters = function () { return [
        { type: core.TemplateRef, },
    ]; };
    return MatStepLabel;
}(stepper.CdkStepLabel));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Stepper data that is required for internationalization.
 */
var MatStepperIntl = /** @class */ (function () {
    function MatStepperIntl() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new Subject.Subject();
        /**
         * Label that is rendered below optional steps.
         */
        this.optionalLabel = 'Optional';
    }
    MatStepperIntl.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    MatStepperIntl.ctorParameters = function () { return []; };
    return MatStepperIntl;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MatStepHeader = /** @class */ (function () {
    function MatStepHeader(_intl, _focusMonitor, _element, changeDetectorRef) {
        this._intl = _intl;
        this._focusMonitor = _focusMonitor;
        this._element = _element;
        _focusMonitor.monitor(_element.nativeElement, true);
        this._intlSubscription = _intl.changes.subscribe(function () { return changeDetectorRef.markForCheck(); });
    }
    Object.defineProperty(MatStepHeader.prototype, "index", {
        get: /**
         * Index of the given step.
         * @return {?}
         */
        function () { return this._index; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._index = coercion.coerceNumberProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatStepHeader.prototype, "selected", {
        get: /**
         * Whether the given step is selected.
         * @return {?}
         */
        function () { return this._selected; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._selected = coercion.coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatStepHeader.prototype, "active", {
        get: /**
         * Whether the given step label is active.
         * @return {?}
         */
        function () { return this._active; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._active = coercion.coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatStepHeader.prototype, "optional", {
        get: /**
         * Whether the given step is optional.
         * @return {?}
         */
        function () { return this._optional; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._optional = coercion.coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatStepHeader.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._intlSubscription.unsubscribe();
        this._focusMonitor.stopMonitoring(this._element.nativeElement);
    };
    /** Returns string label of given step if it is a text label. */
    /**
     * Returns string label of given step if it is a text label.
     * @return {?}
     */
    MatStepHeader.prototype._stringLabel = /**
     * Returns string label of given step if it is a text label.
     * @return {?}
     */
    function () {
        return this.label instanceof MatStepLabel ? null : this.label;
    };
    /** Returns MatStepLabel if the label of given step is a template label. */
    /**
     * Returns MatStepLabel if the label of given step is a template label.
     * @return {?}
     */
    MatStepHeader.prototype._templateLabel = /**
     * Returns MatStepLabel if the label of given step is a template label.
     * @return {?}
     */
    function () {
        return this.label instanceof MatStepLabel ? this.label : null;
    };
    /** Returns the host HTML element. */
    /**
     * Returns the host HTML element.
     * @return {?}
     */
    MatStepHeader.prototype._getHostElement = /**
     * Returns the host HTML element.
     * @return {?}
     */
    function () {
        return this._element.nativeElement;
    };
    /**
     * @return {?}
     */
    MatStepHeader.prototype.focus = /**
     * @return {?}
     */
    function () {
        this._getHostElement().focus();
    };
    MatStepHeader.decorators = [
        { type: core.Component, args: [{selector: 'mat-step-header',
                    template: "<div class=\"mat-step-header-ripple\" mat-ripple [matRippleTrigger]=\"_getHostElement()\"></div><div [class.mat-step-icon]=\"state !== 'number' || selected\" [class.mat-step-icon-not-touched]=\"state == 'number' && !selected\" [ngSwitch]=\"state\"><span *ngSwitchCase=\"'number'\">{{index + 1}}</span><ng-container *ngSwitchCase=\"'edit'\" [ngSwitch]=\"!!(iconOverrides && iconOverrides.edit)\"><ng-container *ngSwitchCase=\"true\" [ngTemplateOutlet]=\"iconOverrides.edit\"></ng-container><mat-icon *ngSwitchDefault>create</mat-icon></ng-container><ng-container *ngSwitchCase=\"'done'\" [ngSwitch]=\"!!(iconOverrides && iconOverrides.done)\"><ng-container *ngSwitchCase=\"true\" [ngTemplateOutlet]=\"iconOverrides.done\"></ng-container><mat-icon *ngSwitchDefault>done</mat-icon></ng-container></div><div class=\"mat-step-label\" [class.mat-step-label-active]=\"active\" [class.mat-step-label-selected]=\"selected\"><ng-container *ngIf=\"_templateLabel()\" [ngTemplateOutlet]=\"_templateLabel()!.template\"></ng-container><div class=\"mat-step-text-label\" *ngIf=\"_stringLabel()\">{{label}}</div><div class=\"mat-step-optional\" *ngIf=\"optional\">{{_intl.optionalLabel}}</div></div>",
                    styles: [".mat-step-header{overflow:hidden;outline:0;cursor:pointer;position:relative;box-sizing:content-box}.mat-step-optional{font-size:12px}.mat-step-icon,.mat-step-icon-not-touched{border-radius:50%;height:24px;width:24px;align-items:center;justify-content:center;display:flex}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}"],
                    host: {
                        'class': 'mat-step-header',
                        'role': 'tab',
                    },
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    MatStepHeader.ctorParameters = function () { return [
        { type: MatStepperIntl, },
        { type: a11y.FocusMonitor, },
        { type: core.ElementRef, },
        { type: core.ChangeDetectorRef, },
    ]; };
    MatStepHeader.propDecorators = {
        "state": [{ type: core.Input },],
        "label": [{ type: core.Input },],
        "iconOverrides": [{ type: core.Input },],
        "index": [{ type: core.Input },],
        "selected": [{ type: core.Input },],
        "active": [{ type: core.Input },],
        "optional": [{ type: core.Input },],
    };
    return MatStepHeader;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Animations used by the Material steppers.
 */
var /** @type {?} */ matStepperAnimations = {
    /** Animation that transitions the step along the X axis in a horizontal stepper. */
    horizontalStepTransition: animations.trigger('stepTransition', [
        animations.state('previous', animations.style({ transform: 'translate3d(-100%, 0, 0)', visibility: 'hidden' })),
        animations.state('current', animations.style({ transform: 'none', visibility: 'visible' })),
        animations.state('next', animations.style({ transform: 'translate3d(100%, 0, 0)', visibility: 'hidden' })),
        animations.transition('* => *', animations.animate('500ms cubic-bezier(0.35, 0, 0.25, 1)'))
    ]),
    /** Animation that transitions the step along the Y axis in a vertical stepper. */
    verticalStepTransition: animations.trigger('stepTransition', [
        animations.state('previous', animations.style({ height: '0px', visibility: 'hidden' })),
        animations.state('next', animations.style({ height: '0px', visibility: 'hidden' })),
        animations.state('current', animations.style({ height: '*', visibility: 'visible' })),
        animations.transition('* <=> current', animations.animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Template to be used to override the icons inside the step header.
 */
var MatStepperIcon = /** @class */ (function () {
    function MatStepperIcon(templateRef) {
        this.templateRef = templateRef;
    }
    MatStepperIcon.decorators = [
        { type: core.Directive, args: [{
                    selector: 'ng-template[matStepperIcon]',
                },] },
    ];
    /** @nocollapse */
    MatStepperIcon.ctorParameters = function () { return [
        { type: core.TemplateRef, },
    ]; };
    MatStepperIcon.propDecorators = {
        "name": [{ type: core.Input, args: ['matStepperIcon',] },],
    };
    return MatStepperIcon;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Workaround for https://github.com/angular/angular/issues/17849
 */
var /** @type {?} */ _MatStep = stepper.CdkStep;
var /** @type {?} */ _MatStepper = stepper.CdkStepper;
var MatStep = /** @class */ (function (_super) {
    __extends(MatStep, _super);
    function MatStep(stepper$$1, _errorStateMatcher) {
        var _this = _super.call(this, stepper$$1) || this;
        _this._errorStateMatcher = _errorStateMatcher;
        return _this;
    }
    /** Custom error state matcher that additionally checks for validity of interacted form. */
    /**
     * Custom error state matcher that additionally checks for validity of interacted form.
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    MatStep.prototype.isErrorState = /**
     * Custom error state matcher that additionally checks for validity of interacted form.
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    function (control, form) {
        var /** @type {?} */ originalErrorState = this._errorStateMatcher.isErrorState(control, form);
        // Custom error state checks for the validity of form that is not submitted or touched
        // since user can trigger a form change by calling for another step without directly
        // interacting with the current form.
        var /** @type {?} */ customErrorState = !!(control && control.invalid && this.interacted);
        return originalErrorState || customErrorState;
    };
    MatStep.decorators = [
        { type: core.Component, args: [{selector: 'mat-step',
                    template: "<ng-template><ng-content></ng-content></ng-template>",
                    providers: [{ provide: core$1.ErrorStateMatcher, useExisting: MatStep }],
                    encapsulation: core.ViewEncapsulation.None,
                    exportAs: 'matStep',
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    MatStep.ctorParameters = function () { return [
        { type: MatStepper, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return MatStepper; }),] },] },
        { type: core$1.ErrorStateMatcher, decorators: [{ type: core.SkipSelf },] },
    ]; };
    MatStep.propDecorators = {
        "stepLabel": [{ type: core.ContentChild, args: [MatStepLabel,] },],
    };
    return MatStep;
}(stepper.CdkStep));
var MatStepper = /** @class */ (function (_super) {
    __extends(MatStepper, _super);
    function MatStepper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Consumer-specified template-refs to be used to override the header icons.
         */
        _this._iconOverrides = {};
        return _this;
    }
    /**
     * @return {?}
     */
    MatStepper.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ icons = this._icons.toArray();
        var /** @type {?} */ editOverride = icons.find(function (icon$$1) { return icon$$1.name === 'edit'; });
        var /** @type {?} */ doneOverride = icons.find(function (icon$$1) { return icon$$1.name === 'done'; });
        if (editOverride) {
            this._iconOverrides["edit"] = editOverride.templateRef;
        }
        if (doneOverride) {
            this._iconOverrides["done"] = doneOverride.templateRef;
        }
        // Mark the component for change detection whenever the content children query changes
        this._steps.changes.pipe(takeUntil.takeUntil(this._destroyed)).subscribe(function () { return _this._stateChanged(); });
    };
    MatStepper.decorators = [
        { type: core.Directive, args: [{
                    selector: '[matStepper]'
                },] },
    ];
    /** @nocollapse */
    MatStepper.ctorParameters = function () { return []; };
    MatStepper.propDecorators = {
        "_stepHeader": [{ type: core.ViewChildren, args: [MatStepHeader,] },],
        "_steps": [{ type: core.ContentChildren, args: [MatStep,] },],
        "_icons": [{ type: core.ContentChildren, args: [MatStepperIcon,] },],
    };
    return MatStepper;
}(stepper.CdkStepper));
var MatHorizontalStepper = /** @class */ (function (_super) {
    __extends(MatHorizontalStepper, _super);
    function MatHorizontalStepper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatHorizontalStepper.decorators = [
        { type: core.Component, args: [{selector: 'mat-horizontal-stepper',
                    exportAs: 'matHorizontalStepper',
                    template: "<div class=\"mat-horizontal-stepper-header-container\"><ng-container *ngFor=\"let step of _steps; let i = index; let isLast = last\"><mat-step-header class=\"mat-horizontal-stepper-header\" (click)=\"step.select()\" (keydown)=\"_onKeydown($event)\" [tabIndex]=\"_getFocusIndex() === i ? 0 : -1\" [id]=\"_getStepLabelId(i)\" [attr.aria-controls]=\"_getStepContentId(i)\" [attr.aria-selected]=\"selectedIndex == i\" [index]=\"i\" [state]=\"_getIndicatorType(i)\" [label]=\"step.stepLabel || step.label\" [selected]=\"selectedIndex === i\" [active]=\"step.completed || selectedIndex === i || !linear\" [optional]=\"step.optional\" [iconOverrides]=\"_iconOverrides\"></mat-step-header><div *ngIf=\"!isLast\" class=\"mat-stepper-horizontal-line\"></div></ng-container></div><div class=\"mat-horizontal-content-container\"><div *ngFor=\"let step of _steps; let i = index\" class=\"mat-horizontal-stepper-content\" role=\"tabpanel\" [@stepTransition]=\"_getAnimationDirection(i)\" [id]=\"_getStepContentId(i)\" [attr.aria-labelledby]=\"_getStepLabelId(i)\" [attr.aria-expanded]=\"selectedIndex === i\"><ng-container [ngTemplateOutlet]=\"step.content\"></ng-container></div></div>",
                    styles: [".mat-stepper-horizontal,.mat-stepper-vertical{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon,.mat-horizontal-stepper-header .mat-step-icon-not-touched{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon,[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon-not-touched{margin-right:0;margin-left:8px}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;max-height:24px}.mat-vertical-stepper-header .mat-step-icon,.mat-vertical-stepper-header .mat-step-icon-not-touched{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon,[dir=rtl] .mat-vertical-stepper-header .mat-step-icon-not-touched{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{overflow:hidden}.mat-horizontal-stepper-content[aria-expanded=false]{height:0}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:'';position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}"],
                    inputs: ['selectedIndex'],
                    host: {
                        'class': 'mat-stepper-horizontal',
                        'aria-orientation': 'horizontal',
                        'role': 'tablist',
                    },
                    animations: [matStepperAnimations.horizontalStepTransition],
                    providers: [{ provide: MatStepper, useExisting: MatHorizontalStepper }],
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    MatHorizontalStepper.ctorParameters = function () { return []; };
    return MatHorizontalStepper;
}(MatStepper));
var MatVerticalStepper = /** @class */ (function (_super) {
    __extends(MatVerticalStepper, _super);
    function MatVerticalStepper(dir, changeDetectorRef) {
        var _this = _super.call(this, dir, changeDetectorRef) || this;
        _this._orientation = 'vertical';
        return _this;
    }
    MatVerticalStepper.decorators = [
        { type: core.Component, args: [{selector: 'mat-vertical-stepper',
                    exportAs: 'matVerticalStepper',
                    template: "<div class=\"mat-step\" *ngFor=\"let step of _steps; let i = index; let isLast = last\"><mat-step-header class=\"mat-vertical-stepper-header\" (click)=\"step.select()\" (keydown)=\"_onKeydown($event)\" [tabIndex]=\"_getFocusIndex() == i ? 0 : -1\" [id]=\"_getStepLabelId(i)\" [attr.aria-controls]=\"_getStepContentId(i)\" [attr.aria-selected]=\"selectedIndex === i\" [index]=\"i\" [state]=\"_getIndicatorType(i)\" [label]=\"step.stepLabel || step.label\" [selected]=\"selectedIndex === i\" [active]=\"step.completed || selectedIndex === i || !linear\" [optional]=\"step.optional\" [iconOverrides]=\"_iconOverrides\"></mat-step-header><div class=\"mat-vertical-content-container\" [class.mat-stepper-vertical-line]=\"!isLast\"><div class=\"mat-vertical-stepper-content\" role=\"tabpanel\" [@stepTransition]=\"_getAnimationDirection(i)\" [id]=\"_getStepContentId(i)\" [attr.aria-labelledby]=\"_getStepLabelId(i)\" [attr.aria-expanded]=\"selectedIndex === i\"><div class=\"mat-vertical-content\"><ng-container [ngTemplateOutlet]=\"step.content\"></ng-container></div></div></div></div>",
                    styles: [".mat-stepper-horizontal,.mat-stepper-vertical{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon,.mat-horizontal-stepper-header .mat-step-icon-not-touched{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon,[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon-not-touched{margin-right:0;margin-left:8px}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;max-height:24px}.mat-vertical-stepper-header .mat-step-icon,.mat-vertical-stepper-header .mat-step-icon-not-touched{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon,[dir=rtl] .mat-vertical-stepper-header .mat-step-icon-not-touched{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{overflow:hidden}.mat-horizontal-stepper-content[aria-expanded=false]{height:0}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:'';position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}"],
                    inputs: ['selectedIndex'],
                    host: {
                        'class': 'mat-stepper-vertical',
                        'aria-orientation': 'vertical',
                        'role': 'tablist',
                    },
                    animations: [matStepperAnimations.verticalStepTransition],
                    providers: [{ provide: MatStepper, useExisting: MatVerticalStepper }],
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    MatVerticalStepper.ctorParameters = function () { return [
        { type: bidi.Directionality, decorators: [{ type: core.Optional },] },
        { type: core.ChangeDetectorRef, },
    ]; };
    return MatVerticalStepper;
}(MatStepper));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Button that moves to the next step in a stepper workflow.
 */
var MatStepperNext = /** @class */ (function (_super) {
    __extends(MatStepperNext, _super);
    function MatStepperNext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatStepperNext.decorators = [
        { type: core.Directive, args: [{
                    selector: 'button[matStepperNext]',
                    host: {
                        '(click)': '_stepper.next()',
                        '[type]': 'type',
                    },
                    inputs: ['type'],
                    providers: [{ provide: stepper.CdkStepper, useExisting: MatStepper }]
                },] },
    ];
    /** @nocollapse */
    MatStepperNext.ctorParameters = function () { return []; };
    return MatStepperNext;
}(stepper.CdkStepperNext));
/**
 * Button that moves to the previous step in a stepper workflow.
 */
var MatStepperPrevious = /** @class */ (function (_super) {
    __extends(MatStepperPrevious, _super);
    function MatStepperPrevious() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatStepperPrevious.decorators = [
        { type: core.Directive, args: [{
                    selector: 'button[matStepperPrevious]',
                    host: {
                        '(click)': '_stepper.previous()',
                        '[type]': 'type',
                    },
                    inputs: ['type'],
                    providers: [{ provide: stepper.CdkStepper, useExisting: MatStepper }]
                },] },
    ];
    /** @nocollapse */
    MatStepperPrevious.ctorParameters = function () { return []; };
    return MatStepperPrevious;
}(stepper.CdkStepperPrevious));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MatStepperModule = /** @class */ (function () {
    function MatStepperModule() {
    }
    MatStepperModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        core$1.MatCommonModule,
                        common.CommonModule,
                        portal.PortalModule,
                        button.MatButtonModule,
                        stepper.CdkStepperModule,
                        icon.MatIconModule,
                        a11y.A11yModule,
                        core$1.MatRippleModule,
                    ],
                    exports: [
                        core$1.MatCommonModule,
                        MatHorizontalStepper,
                        MatVerticalStepper,
                        MatStep,
                        MatStepLabel,
                        MatStepper,
                        MatStepperNext,
                        MatStepperPrevious,
                        MatStepHeader,
                        MatStepperIcon,
                    ],
                    declarations: [
                        MatHorizontalStepper,
                        MatVerticalStepper,
                        MatStep,
                        MatStepLabel,
                        MatStepper,
                        MatStepperNext,
                        MatStepperPrevious,
                        MatStepHeader,
                        MatStepperIcon,
                    ],
                    providers: [MatStepperIntl, core$1.ErrorStateMatcher],
                },] },
    ];
    /** @nocollapse */
    MatStepperModule.ctorParameters = function () { return []; };
    return MatStepperModule;
}());

exports.MatStepperModule = MatStepperModule;
exports.MatStepLabel = MatStepLabel;
exports._MatStep = _MatStep;
exports._MatStepper = _MatStepper;
exports.MatStep = MatStep;
exports.MatStepper = MatStepper;
exports.MatHorizontalStepper = MatHorizontalStepper;
exports.MatVerticalStepper = MatVerticalStepper;
exports.MatStepperNext = MatStepperNext;
exports.MatStepperPrevious = MatStepperPrevious;
exports.MatStepHeader = MatStepHeader;
exports.MatStepperIntl = MatStepperIntl;
exports.matStepperAnimations = matStepperAnimations;
exports.MatStepperIcon = MatStepperIcon;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=material-stepper.umd.js.map
