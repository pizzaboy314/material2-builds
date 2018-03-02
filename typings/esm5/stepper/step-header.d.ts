/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import { ChangeDetectorRef, ElementRef, OnDestroy, TemplateRef } from '@angular/core';
import { MatStepLabel } from './step-label';
import { MatStepperIntl } from './stepper-intl';
export declare class MatStepHeader implements OnDestroy {
    _intl: MatStepperIntl;
    private _focusMonitor;
    private _element;
    private _intlSubscription;
    /** State of the given step. */
    state: string;
    /** Label of the given step. */
    label: MatStepLabel | string;
    /** Overrides for the header icons, passed in via the stepper. */
    iconOverrides: {
        [key: string]: TemplateRef<any>;
    };
    /** Index of the given step. */
    index: number;
    private _index;
    /** Whether the given step is selected. */
    selected: boolean;
    private _selected;
    /** Whether the given step label is active. */
    active: boolean;
    private _active;
    /** Whether the given step is optional. */
    optional: boolean;
    private _optional;
    constructor(_intl: MatStepperIntl, _focusMonitor: FocusMonitor, _element: ElementRef, changeDetectorRef: ChangeDetectorRef);
    ngOnDestroy(): void;
    /** Returns string label of given step if it is a text label. */
    _stringLabel(): string | null;
    /** Returns MatStepLabel if the label of given step is a template label. */
    _templateLabel(): MatStepLabel | null;
    /** Returns the host HTML element. */
    _getHostElement(): any;
    focus(): void;
}
