/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AnimationCurves, AnimationDurations, MatCommonModule } from '@angular/material/core';
import { __extends, __assign } from 'tslib';
import { Component, ViewChild, ElementRef, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, EventEmitter, Inject, Optional, InjectionToken, TemplateRef, Injectable, Injector, SkipSelf, NgModule } from '@angular/core';
import { BasePortalOutlet, CdkPortalOutlet, ComponentPortal, TemplatePortal, PortalInjector, PortalModule } from '@angular/cdk/portal';
import { BreakpointObserver, Breakpoints, LayoutModule } from '@angular/cdk/layout';
import { DOCUMENT, CommonModule } from '@angular/common';
import { FocusTrapFactory, A11yModule } from '@angular/cdk/a11y';
import { ESCAPE } from '@angular/cdk/keycodes';
import { Subject } from 'rxjs/Subject';
import { merge } from 'rxjs/observable/merge';
import { filter } from 'rxjs/operators/filter';
import { take } from 'rxjs/operators/take';
import { Overlay, OverlayConfig, OverlayModule } from '@angular/cdk/overlay';
import { of } from 'rxjs/observable/of';
import { Directionality } from '@angular/cdk/bidi';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Animations used by the Material bottom sheet.
 */
var /** @type {?} */ matBottomSheetAnimations = {
    /** Animation that shows and hides a bottom sheet. */
    bottomSheetState: trigger('state', [
        state('void, hidden', style({ transform: 'translateY(100%)' })),
        state('visible', style({ transform: 'translateY(0%)' })),
        transition('visible => void, visible => hidden', animate(AnimationDurations.COMPLEX + " " + AnimationCurves.ACCELERATION_CURVE)),
        transition('void => visible', animate(AnimationDurations.EXITING + " " + AnimationCurves.DECELERATION_CURVE)),
    ])
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Internal component that wraps user-provided bottom sheet content.
 * \@docs-private
 */
var MatBottomSheetContainer = /** @class */ (function (_super) {
    __extends(MatBottomSheetContainer, _super);
    function MatBottomSheetContainer(_elementRef, _changeDetectorRef, _focusTrapFactory, breakpointObserver, document) {
        var _this = _super.call(this) || this;
        _this._elementRef = _elementRef;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._focusTrapFactory = _focusTrapFactory;
        /**
         * The state of the bottom sheet animations.
         */
        _this._animationState = 'void';
        /**
         * Emits whenever the state of the animation changes.
         */
        _this._animationStateChanged = new EventEmitter();
        /**
         * Element that was focused before the bottom sheet was opened.
         */
        _this._elementFocusedBeforeOpened = null;
        _this._document = document;
        _this._breakpointSubscription = breakpointObserver
            .observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
            .subscribe(function () {
            _this._toggleClass('mat-bottom-sheet-container-medium', breakpointObserver.isMatched(Breakpoints.Medium));
            _this._toggleClass('mat-bottom-sheet-container-large', breakpointObserver.isMatched(Breakpoints.Large));
            _this._toggleClass('mat-bottom-sheet-container-xlarge', breakpointObserver.isMatched(Breakpoints.XLarge));
        });
        return _this;
    }
    /** Attach a component portal as content to this bottom sheet container. */
    /**
     * Attach a component portal as content to this bottom sheet container.
     * @template T
     * @param {?} portal
     * @return {?}
     */
    MatBottomSheetContainer.prototype.attachComponentPortal = /**
     * Attach a component portal as content to this bottom sheet container.
     * @template T
     * @param {?} portal
     * @return {?}
     */
    function (portal) {
        this._validatePortalAttached();
        this._setPanelClass();
        this._savePreviouslyFocusedElement();
        return this._portalOutlet.attachComponentPortal(portal);
    };
    /** Attach a template portal as content to this bottom sheet container. */
    /**
     * Attach a template portal as content to this bottom sheet container.
     * @template C
     * @param {?} portal
     * @return {?}
     */
    MatBottomSheetContainer.prototype.attachTemplatePortal = /**
     * Attach a template portal as content to this bottom sheet container.
     * @template C
     * @param {?} portal
     * @return {?}
     */
    function (portal) {
        this._validatePortalAttached();
        this._setPanelClass();
        this._savePreviouslyFocusedElement();
        return this._portalOutlet.attachTemplatePortal(portal);
    };
    /** Begin animation of bottom sheet entrance into view. */
    /**
     * Begin animation of bottom sheet entrance into view.
     * @return {?}
     */
    MatBottomSheetContainer.prototype.enter = /**
     * Begin animation of bottom sheet entrance into view.
     * @return {?}
     */
    function () {
        this._animationState = 'visible';
        this._changeDetectorRef.detectChanges();
    };
    /** Begin animation of the bottom sheet exiting from view. */
    /**
     * Begin animation of the bottom sheet exiting from view.
     * @return {?}
     */
    MatBottomSheetContainer.prototype.exit = /**
     * Begin animation of the bottom sheet exiting from view.
     * @return {?}
     */
    function () {
        this._animationState = 'hidden';
        this._changeDetectorRef.markForCheck();
    };
    /**
     * @return {?}
     */
    MatBottomSheetContainer.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._breakpointSubscription.unsubscribe();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatBottomSheetContainer.prototype._onAnimationDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.toState === 'visible') {
            this._trapFocus();
        }
        else if (event.toState === 'hidden') {
            this._restoreFocus();
        }
        this._animationStateChanged.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatBottomSheetContainer.prototype._onAnimationStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._animationStateChanged.emit(event);
    };
    /**
     * @param {?} cssClass
     * @param {?} add
     * @return {?}
     */
    MatBottomSheetContainer.prototype._toggleClass = /**
     * @param {?} cssClass
     * @param {?} add
     * @return {?}
     */
    function (cssClass, add) {
        var /** @type {?} */ classList = this._elementRef.nativeElement.classList;
        add ? classList.add(cssClass) : classList.remove(cssClass);
    };
    /**
     * @return {?}
     */
    MatBottomSheetContainer.prototype._validatePortalAttached = /**
     * @return {?}
     */
    function () {
        if (this._portalOutlet.hasAttached()) {
            throw Error('Attempting to attach bottom sheet content after content is already attached');
        }
    };
    /**
     * @return {?}
     */
    MatBottomSheetContainer.prototype._setPanelClass = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ element = this._elementRef.nativeElement;
        var /** @type {?} */ panelClass = this.bottomSheetConfig.panelClass;
        if (Array.isArray(panelClass)) {
            // Note that we can't use a spread here, because IE doesn't support multiple arguments.
            panelClass.forEach(function (cssClass) { return element.classList.add(cssClass); });
        }
        else if (panelClass) {
            element.classList.add(panelClass);
        }
    };
    /**
     * Moves the focus inside the focus trap.
     * @return {?}
     */
    MatBottomSheetContainer.prototype._trapFocus = /**
     * Moves the focus inside the focus trap.
     * @return {?}
     */
    function () {
        if (!this._focusTrap) {
            this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
        }
        this._focusTrap.focusInitialElementWhenReady();
    };
    /**
     * Restores focus to the element that was focused before the bottom sheet opened.
     * @return {?}
     */
    MatBottomSheetContainer.prototype._restoreFocus = /**
     * Restores focus to the element that was focused before the bottom sheet opened.
     * @return {?}
     */
    function () {
        var /** @type {?} */ toFocus = this._elementFocusedBeforeOpened;
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (toFocus && typeof toFocus.focus === 'function') {
            toFocus.focus();
        }
        if (this._focusTrap) {
            this._focusTrap.destroy();
        }
    };
    /**
     * Saves a reference to the element that was focused before the bottom sheet was opened.
     * @return {?}
     */
    MatBottomSheetContainer.prototype._savePreviouslyFocusedElement = /**
     * Saves a reference to the element that was focused before the bottom sheet was opened.
     * @return {?}
     */
    function () {
        var _this = this;
        this._elementFocusedBeforeOpened = /** @type {?} */ (this._document.activeElement);
        Promise.resolve().then(function () { return _this._elementRef.nativeElement.focus(); });
    };
    MatBottomSheetContainer.decorators = [
        { type: Component, args: [{selector: 'mat-bottom-sheet-container',
                    template: "<ng-template cdkPortalOutlet></ng-template>",
                    styles: [".mat-bottom-sheet-container{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);padding:8px 16px;min-width:100vw;box-sizing:border-box;display:block;outline:0}@media screen and (-ms-high-contrast:active){.mat-bottom-sheet-container{outline:1px solid}}.mat-bottom-sheet-container-medium{min-width:384px}.mat-bottom-sheet-container-large{min-width:512px}.mat-bottom-sheet-container-xlarge{min-width:576px}"],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    animations: [matBottomSheetAnimations.bottomSheetState],
                    host: {
                        'class': 'mat-bottom-sheet-container',
                        'tabindex': '-1',
                        'role': 'dialog',
                        '[attr.aria-label]': 'bottomSheetConfig?.ariaLabel',
                        '[@state]': '_animationState',
                        '(@state.start)': '_onAnimationStart($event)',
                        '(@state.done)': '_onAnimationDone($event)'
                    },
                },] },
    ];
    /** @nocollapse */
    MatBottomSheetContainer.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: ChangeDetectorRef, },
        { type: FocusTrapFactory, },
        { type: BreakpointObserver, },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] },] },
    ]; };
    MatBottomSheetContainer.propDecorators = {
        "_portalOutlet": [{ type: ViewChild, args: [CdkPortalOutlet,] },],
    };
    return MatBottomSheetContainer;
}(BasePortalOutlet));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Injection token that can be used to access the data that was passed in to a bottom sheet.
 */
var /** @type {?} */ MAT_BOTTOM_SHEET_DATA = new InjectionToken('MatBottomSheetData');
/**
 * Configuration used when opening a bottom sheet.
 * @template D
 */
var  /**
 * Configuration used when opening a bottom sheet.
 * @template D
 */
MatBottomSheetConfig = /** @class */ (function () {
    function MatBottomSheetConfig() {
        /**
         * Data being injected into the child component.
         */
        this.data = null;
        /**
         * Whether the bottom sheet has a backdrop.
         */
        this.hasBackdrop = true;
        /**
         * Whether the user can use escape or clicking outside to close the bottom sheet.
         */
        this.disableClose = false;
        /**
         * Aria label to assign to the bottom sheet element.
         */
        this.ariaLabel = null;
    }
    return MatBottomSheetConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Reference to a bottom sheet dispatched from the bottom sheet service.
 * @template T, R
 */
var  /**
 * Reference to a bottom sheet dispatched from the bottom sheet service.
 * @template T, R
 */
MatBottomSheetRef = /** @class */ (function () {
    function MatBottomSheetRef(containerInstance, _overlayRef) {
        var _this = this;
        this._overlayRef = _overlayRef;
        /**
         * Subject for notifying the user that the bottom sheet has been dismissed.
         */
        this._afterDismissed = new Subject();
        /**
         * Subject for notifying the user that the bottom sheet has opened and appeared.
         */
        this._afterOpened = new Subject();
        this.containerInstance = containerInstance;
        // Emit when opening animation completes
        containerInstance._animationStateChanged.pipe(filter(function (event) { return event.phaseName === 'done' && event.toState === 'visible'; }), take(1))
            .subscribe(function () {
            _this._afterOpened.next();
            _this._afterOpened.complete();
        });
        // Dispose overlay when closing animation is complete
        containerInstance._animationStateChanged.pipe(filter(function (event) { return event.phaseName === 'done' && event.toState === 'hidden'; }), take(1))
            .subscribe(function () {
            _this._overlayRef.dispose();
            _this._afterDismissed.next(_this._result);
            _this._afterDismissed.complete();
        });
        if (!containerInstance.bottomSheetConfig.disableClose) {
            merge(_overlayRef.backdropClick(), _overlayRef._keydownEvents.pipe(filter(function (event) { return event.keyCode === ESCAPE; }))).subscribe(function () { return _this.dismiss(); });
        }
    }
    /**
     * Dismisses the bottom sheet.
     * @param result Data to be passed back to the bottom sheet opener.
     */
    /**
     * Dismisses the bottom sheet.
     * @param {?=} result Data to be passed back to the bottom sheet opener.
     * @return {?}
     */
    MatBottomSheetRef.prototype.dismiss = /**
     * Dismisses the bottom sheet.
     * @param {?=} result Data to be passed back to the bottom sheet opener.
     * @return {?}
     */
    function (result) {
        var _this = this;
        if (!this._afterDismissed.closed) {
            // Transition the backdrop in parallel to the bottom sheet.
            this.containerInstance._animationStateChanged.pipe(filter(function (event) { return event.phaseName === 'start'; }), take(1)).subscribe(function () { return _this._overlayRef.detachBackdrop(); });
            this._result = result;
            this.containerInstance.exit();
        }
    };
    /** Gets an observable that is notified when the bottom sheet is finished closing. */
    /**
     * Gets an observable that is notified when the bottom sheet is finished closing.
     * @return {?}
     */
    MatBottomSheetRef.prototype.afterDismissed = /**
     * Gets an observable that is notified when the bottom sheet is finished closing.
     * @return {?}
     */
    function () {
        return this._afterDismissed.asObservable();
    };
    /** Gets an observable that is notified when the bottom sheet has opened and appeared. */
    /**
     * Gets an observable that is notified when the bottom sheet has opened and appeared.
     * @return {?}
     */
    MatBottomSheetRef.prototype.afterOpened = /**
     * Gets an observable that is notified when the bottom sheet has opened and appeared.
     * @return {?}
     */
    function () {
        return this._afterOpened.asObservable();
    };
    /**
     * Gets an observable that emits when the overlay's backdrop has been clicked.
     */
    /**
     * Gets an observable that emits when the overlay's backdrop has been clicked.
     * @return {?}
     */
    MatBottomSheetRef.prototype.backdropClick = /**
     * Gets an observable that emits when the overlay's backdrop has been clicked.
     * @return {?}
     */
    function () {
        return this._overlayRef.backdropClick();
    };
    /**
     * Gets an observable that emits when keydown events are targeted on the overlay.
     */
    /**
     * Gets an observable that emits when keydown events are targeted on the overlay.
     * @return {?}
     */
    MatBottomSheetRef.prototype.keydownEvents = /**
     * Gets an observable that emits when keydown events are targeted on the overlay.
     * @return {?}
     */
    function () {
        return this._overlayRef.keydownEvents();
    };
    return MatBottomSheetRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Service to trigger Material Design bottom sheets.
 */
var MatBottomSheet = /** @class */ (function () {
    function MatBottomSheet(_overlay, _injector, _parentBottomSheet) {
        this._overlay = _overlay;
        this._injector = _injector;
        this._parentBottomSheet = _parentBottomSheet;
        this._bottomSheetRefAtThisLevel = null;
    }
    Object.defineProperty(MatBottomSheet.prototype, "_openedBottomSheetRef", {
        /** Reference to the currently opened bottom sheet. */
        get: /**
         * Reference to the currently opened bottom sheet.
         * @return {?}
         */
        function () {
            var /** @type {?} */ parent = this._parentBottomSheet;
            return parent ? parent._openedBottomSheetRef : this._bottomSheetRefAtThisLevel;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._parentBottomSheet) {
                this._parentBottomSheet._openedBottomSheetRef = value;
            }
            else {
                this._bottomSheetRefAtThisLevel = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @template T, D, R
     * @param {?} componentOrTemplateRef
     * @param {?=} config
     * @return {?}
     */
    MatBottomSheet.prototype.open = /**
     * @template T, D, R
     * @param {?} componentOrTemplateRef
     * @param {?=} config
     * @return {?}
     */
    function (componentOrTemplateRef, config) {
        var _this = this;
        var /** @type {?} */ _config = _applyConfigDefaults(config);
        var /** @type {?} */ overlayRef = this._createOverlay(_config);
        var /** @type {?} */ container = this._attachContainer(overlayRef, _config);
        var /** @type {?} */ ref = new MatBottomSheetRef(container, overlayRef);
        if (componentOrTemplateRef instanceof TemplateRef) {
            container.attachTemplatePortal(new TemplatePortal(componentOrTemplateRef, /** @type {?} */ ((null)), /** @type {?} */ ({
                $implicit: _config.data,
                bottomSheetRef: ref
            })));
        }
        else {
            var /** @type {?} */ portal = new ComponentPortal(componentOrTemplateRef, undefined, this._createInjector(_config, ref));
            var /** @type {?} */ contentRef = container.attachComponentPortal(portal);
            ref.instance = contentRef.instance;
        }
        // When the bottom sheet is dismissed, clear the reference to it.
        ref.afterDismissed().subscribe(function () {
            // Clear the bottom sheet ref if it hasn't already been replaced by a newer one.
            if (_this._openedBottomSheetRef == ref) {
                _this._openedBottomSheetRef = null;
            }
        });
        if (this._openedBottomSheetRef) {
            // If a bottom sheet is already in view, dismiss it and enter the
            // new bottom sheet after exit animation is complete.
            this._openedBottomSheetRef.afterDismissed().subscribe(function () { return ref.containerInstance.enter(); });
            this._openedBottomSheetRef.dismiss();
        }
        else {
            // If no bottom sheet is in view, enter the new bottom sheet.
            ref.containerInstance.enter();
        }
        this._openedBottomSheetRef = ref;
        return ref;
    };
    /**
     * Dismisses the currently-visible bottom sheet.
     */
    /**
     * Dismisses the currently-visible bottom sheet.
     * @return {?}
     */
    MatBottomSheet.prototype.dismiss = /**
     * Dismisses the currently-visible bottom sheet.
     * @return {?}
     */
    function () {
        if (this._openedBottomSheetRef) {
            this._openedBottomSheetRef.dismiss();
        }
    };
    /**
     * Attaches the bottom sheet container component to the overlay.
     * @param {?} overlayRef
     * @param {?} config
     * @return {?}
     */
    MatBottomSheet.prototype._attachContainer = /**
     * Attaches the bottom sheet container component to the overlay.
     * @param {?} overlayRef
     * @param {?} config
     * @return {?}
     */
    function (overlayRef, config) {
        var /** @type {?} */ containerPortal = new ComponentPortal(MatBottomSheetContainer, config.viewContainerRef);
        var /** @type {?} */ containerRef = overlayRef.attach(containerPortal);
        containerRef.instance.bottomSheetConfig = config;
        return containerRef.instance;
    };
    /**
     * Creates a new overlay and places it in the correct location.
     * @param {?} config The user-specified bottom sheet config.
     * @return {?}
     */
    MatBottomSheet.prototype._createOverlay = /**
     * Creates a new overlay and places it in the correct location.
     * @param {?} config The user-specified bottom sheet config.
     * @return {?}
     */
    function (config) {
        var /** @type {?} */ overlayConfig = new OverlayConfig({
            direction: config.direction,
            hasBackdrop: config.hasBackdrop,
            maxWidth: '100%',
            scrollStrategy: this._overlay.scrollStrategies.block(),
            positionStrategy: this._overlay.position()
                .global()
                .centerHorizontally()
                .bottom('0')
        });
        if (config.backdropClass) {
            overlayConfig.backdropClass = config.backdropClass;
        }
        return this._overlay.create(overlayConfig);
    };
    /**
     * Creates an injector to be used inside of a bottom sheet component.
     * @template T
     * @param {?} config Config that was used to create the bottom sheet.
     * @param {?} bottomSheetRef Reference to the bottom sheet.
     * @return {?}
     */
    MatBottomSheet.prototype._createInjector = /**
     * Creates an injector to be used inside of a bottom sheet component.
     * @template T
     * @param {?} config Config that was used to create the bottom sheet.
     * @param {?} bottomSheetRef Reference to the bottom sheet.
     * @return {?}
     */
    function (config, bottomSheetRef) {
        var /** @type {?} */ userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        var /** @type {?} */ injectionTokens = new WeakMap();
        injectionTokens.set(MatBottomSheetRef, bottomSheetRef);
        injectionTokens.set(MAT_BOTTOM_SHEET_DATA, config.data);
        if (!userInjector || !userInjector.get(Directionality, null)) {
            injectionTokens.set(Directionality, {
                value: config.direction,
                change: of()
            });
        }
        return new PortalInjector(userInjector || this._injector, injectionTokens);
    };
    MatBottomSheet.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    MatBottomSheet.ctorParameters = function () { return [
        { type: Overlay, },
        { type: Injector, },
        { type: MatBottomSheet, decorators: [{ type: Optional }, { type: SkipSelf },] },
    ]; };
    return MatBottomSheet;
}());
/**
 * Applies default options to the bottom sheet config.
 * @param {?=} config The configuration to which the defaults will be applied.
 * @return {?} The new configuration object with defaults applied.
 */
function _applyConfigDefaults(config) {
    return __assign({}, new MatBottomSheetConfig(), config);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MatBottomSheetModule = /** @class */ (function () {
    function MatBottomSheetModule() {
    }
    MatBottomSheetModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        A11yModule,
                        CommonModule,
                        OverlayModule,
                        MatCommonModule,
                        PortalModule,
                        LayoutModule,
                    ],
                    exports: [MatBottomSheetContainer, MatCommonModule],
                    declarations: [MatBottomSheetContainer],
                    entryComponents: [MatBottomSheetContainer],
                    providers: [MatBottomSheet],
                },] },
    ];
    /** @nocollapse */
    MatBottomSheetModule.ctorParameters = function () { return []; };
    return MatBottomSheetModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { MatBottomSheetModule, MatBottomSheet, MAT_BOTTOM_SHEET_DATA, MatBottomSheetConfig, MatBottomSheetContainer, matBottomSheetAnimations, MatBottomSheetRef };
//# sourceMappingURL=bottom-sheet.es5.js.map
