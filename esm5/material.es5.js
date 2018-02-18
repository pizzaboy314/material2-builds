/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Version } from '@angular/core';
import { AUTOCOMPLETE_OPTION_HEIGHT, AUTOCOMPLETE_PANEL_HEIGHT, MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, MAT_AUTOCOMPLETE_SCROLL_STRATEGY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_PROVIDER, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_PROVIDER_FACTORY, MAT_AUTOCOMPLETE_VALUE_ACCESSOR, MatAutocomplete, MatAutocompleteBase, MatAutocompleteModule, MatAutocompleteSelectedEvent, MatAutocompleteTrigger, _MatAutocompleteMixinBase, getMatAutocompleteMissingPanelError } from '@angular/material/autocomplete';
import { MatBadge, MatBadgeModule } from '@angular/material/badge';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheet, MatBottomSheetConfig, MatBottomSheetContainer, MatBottomSheetModule, MatBottomSheetRef, matBottomSheetAnimations } from '@angular/material/bottom-sheet';
import { MatAnchor, MatButton, MatButtonBase, MatButtonModule, _MatButtonMixinBase } from '@angular/material/button';
import { MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, MatButtonToggle, MatButtonToggleBase, MatButtonToggleChange, MatButtonToggleGroup, MatButtonToggleGroupBase, MatButtonToggleGroupMultiple, MatButtonToggleModule, _MatButtonToggleGroupMixinBase, _MatButtonToggleMixinBase } from '@angular/material/button-toggle';
import { MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardFooter, MatCardHeader, MatCardImage, MatCardLgImage, MatCardMdImage, MatCardModule, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatCardXlImage } from '@angular/material/card';
import { MAT_CHECKBOX_CLICK_ACTION, MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR, MAT_CHECKBOX_REQUIRED_VALIDATOR, MatCheckbox, MatCheckboxBase, MatCheckboxChange, MatCheckboxModule, MatCheckboxRequiredValidator, TransitionCheckState, _MatCheckboxMixinBase } from '@angular/material/checkbox';
import { MatChip, MatChipAvatar, MatChipBase, MatChipInput, MatChipList, MatChipListBase, MatChipListChange, MatChipRemove, MatChipSelectionChange, MatChipTrailingIcon, MatChipsModule, _MatChipListMixinBase, _MatChipMixinBase } from '@angular/material/chips';
import { APR, AUG, AnimationCurves, AnimationDurations, DEC, DateAdapter, ErrorStateMatcher, FEB, GestureConfig, JAN, JUL, JUN, MAR, MATERIAL_SANITY_CHECKS, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MAT_DATE_LOCALE_PROVIDER, MAT_HAMMER_OPTIONS, MAT_LABEL_GLOBAL_OPTIONS, MAT_NATIVE_DATE_FORMATS, MAT_OPTION_PARENT_COMPONENT, MAT_PLACEHOLDER_GLOBAL_OPTIONS, MAT_RIPPLE_GLOBAL_OPTIONS, MAY, MatCommonModule, MatLine, MatLineModule, MatLineSetter, MatNativeDateModule, MatOptgroup, MatOptgroupBase, MatOption, MatOptionModule, MatOptionSelectionChange, MatPseudoCheckbox, MatPseudoCheckboxModule, MatRipple, MatRippleModule, NOV, NativeDateAdapter, NativeDateModule, OCT, RippleRef, RippleRenderer, RippleState, SEP, ShowOnDirtyErrorStateMatcher, _MatOptgroupMixinBase, _countGroupLabelsBeforeOption, _getOptionScrollPosition, defaultRippleAnimationConfig, mixinColor, mixinDisableRipple, mixinDisabled, mixinErrorState, mixinInitialized, mixinTabIndex } from '@angular/material/core';
import { MAT_DATEPICKER_SCROLL_STRATEGY, MAT_DATEPICKER_SCROLL_STRATEGY_PROVIDER, MAT_DATEPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY, MAT_DATEPICKER_VALIDATORS, MAT_DATEPICKER_VALUE_ACCESSOR, MatCalendar, MatCalendarBody, MatCalendarCell, MatDatepicker, MatDatepickerContent, MatDatepickerContentBase, MatDatepickerInput, MatDatepickerInputEvent, MatDatepickerIntl, MatDatepickerModule, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, _MatDatepickerContentMixinBase, ɵa33 } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_SCROLL_STRATEGY, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY, MatDialog, MatDialogActions, MatDialogClose, MatDialogConfig, MatDialogContainer, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle, matDialogAnimations, throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { EXPANSION_PANEL_ANIMATION_TIMING, MatAccordion, MatExpansionModule, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelContent, MatExpansionPanelDescription, MatExpansionPanelHeader, MatExpansionPanelTitle, matExpansionAnimations } from '@angular/material/expansion';
import { MatError, MatFormField, MatFormFieldBase, MatFormFieldControl, MatFormFieldModule, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix, _MatFormFieldMixinBase, getMatFormFieldDuplicatedHintError, getMatFormFieldMissingControlError, getMatFormFieldPlaceholderConflictError, matFormFieldAnimations } from '@angular/material/form-field';
import { MatGridAvatarCssMatStyler, MatGridList, MatGridListModule, MatGridTile, MatGridTileFooterCssMatStyler, MatGridTileHeaderCssMatStyler, MatGridTileText } from '@angular/material/grid-list';
import { ICON_REGISTRY_PROVIDER, ICON_REGISTRY_PROVIDER_FACTORY, MatIcon, MatIconBase, MatIconModule, MatIconRegistry, _MatIconMixinBase, getMatIconFailedToSanitizeError, getMatIconNameNotFoundError, getMatIconNoHttpProviderError } from '@angular/material/icon';
import { AutofillMonitor, MAT_INPUT_VALUE_ACCESSOR, MatAutofill, MatInput, MatInputBase, MatInputModule, MatTextareaAutosize, _MatInputMixinBase, getMatInputUnsupportedTypeError } from '@angular/material/input';
import { MAT_SELECTION_LIST_VALUE_ACCESSOR, MatList, MatListAvatarCssMatStyler, MatListBase, MatListIconCssMatStyler, MatListItem, MatListItemBase, MatListModule, MatListOption, MatListOptionBase, MatListOptionChange, MatListSubheaderCssMatStyler, MatNavList, MatSelectionList, MatSelectionListBase, MatSelectionListChange, _MatListItemMixinBase, _MatListMixinBase, _MatListOptionMixinBase, _MatSelectionListMixinBase } from '@angular/material/list';
import { MAT_MENU_DEFAULT_OPTIONS, MAT_MENU_SCROLL_STRATEGY, MatMenu, MatMenuContent, MatMenuItem, MatMenuModule, MatMenuTrigger, fadeInItems, matMenuAnimations, transformMenu, ɵa23, ɵb23, ɵc23, ɵd23 } from '@angular/material/menu';
import { MAT_PAGINATOR_INTL_PROVIDER, MAT_PAGINATOR_INTL_PROVIDER_FACTORY, MatPaginator, MatPaginatorIntl, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressBar, MatProgressBarBase, MatProgressBarModule, _MatProgressBarMixinBase } from '@angular/material/progress-bar';
import { MatProgressSpinner, MatProgressSpinnerBase, MatProgressSpinnerModule, MatSpinner, _MatProgressSpinnerMixinBase } from '@angular/material/progress-spinner';
import { MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, MatRadioButton, MatRadioButtonBase, MatRadioChange, MatRadioGroup, MatRadioGroupBase, MatRadioModule, _MatRadioButtonMixinBase, _MatRadioGroupMixinBase } from '@angular/material/radio';
import { MAT_SELECT_SCROLL_STRATEGY, MAT_SELECT_SCROLL_STRATEGY_PROVIDER, MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY, MatSelect, MatSelectBase, MatSelectChange, MatSelectModule, MatSelectTrigger, SELECT_ITEM_HEIGHT_EM, SELECT_MULTIPLE_PANEL_PADDING_X, SELECT_PANEL_INDENT_PADDING_X, SELECT_PANEL_MAX_HEIGHT, SELECT_PANEL_PADDING_X, SELECT_PANEL_VIEWPORT_PADDING, _MatSelectMixinBase, fadeInContent, matSelectAnimations, transformPanel } from '@angular/material/select';
import { MAT_DRAWER_DEFAULT_AUTOSIZE, MatDrawer, MatDrawerContainer, MatDrawerContent, MatDrawerToggleResult, MatSidenav, MatSidenavContainer, MatSidenavContent, MatSidenavModule, matDrawerAnimations, throwMatDuplicatedDrawerError } from '@angular/material/sidenav';
import { MAT_SLIDE_TOGGLE_VALUE_ACCESSOR, MatSlideToggle, MatSlideToggleBase, MatSlideToggleChange, MatSlideToggleModule, _MatSlideToggleMixinBase } from '@angular/material/slide-toggle';
import { MAT_SLIDER_VALUE_ACCESSOR, MatSlider, MatSliderBase, MatSliderChange, MatSliderModule, _MatSliderMixinBase } from '@angular/material/slider';
import { HIDE_ANIMATION, MAT_SNACK_BAR_DATA, MatSnackBar, MatSnackBarConfig, MatSnackBarContainer, MatSnackBarModule, MatSnackBarRef, SHOW_ANIMATION, SimpleSnackBar, matSnackBarAnimations } from '@angular/material/snack-bar';
import { MAT_SORT_HEADER_INTL_PROVIDER, MAT_SORT_HEADER_INTL_PROVIDER_FACTORY, MatSort, MatSortBase, MatSortHeader, MatSortHeaderBase, MatSortHeaderIntl, MatSortModule, _MatSortHeaderMixinBase, _MatSortMixinBase, matSortAnimations } from '@angular/material/sort';
import { MatHorizontalStepper, MatStep, MatStepHeader, MatStepLabel, MatStepper, MatStepperIcon, MatStepperIntl, MatStepperModule, MatStepperNext, MatStepperPrevious, MatVerticalStepper, _MatStep, _MatStepper, matStepperAnimations } from '@angular/material/stepper';
import { MatCell, MatCellDef, MatColumnDef, MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef, MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInkBar, MatTab, MatTabBody, MatTabBodyPortal, MatTabChangeEvent, MatTabContent, MatTabGroup, MatTabGroupBase, MatTabHeader, MatTabLabel, MatTabLabelWrapper, MatTabLink, MatTabNav, MatTabsModule, _MatTabGroupMixinBase, matTabsAnimations, ɵa24, ɵb24, ɵc24, ɵd24, ɵe24, ɵf24, ɵg24, ɵh24, ɵi24, ɵj24 } from '@angular/material/tabs';
import { MatToolbar, MatToolbarBase, MatToolbarModule, MatToolbarRow, _MatToolbarMixinBase, throwToolbarMixedModesError } from '@angular/material/toolbar';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MAT_TOOLTIP_SCROLL_STRATEGY, MAT_TOOLTIP_SCROLL_STRATEGY_PROVIDER, MAT_TOOLTIP_SCROLL_STRATEGY_PROVIDER_FACTORY, MatTooltip, MatTooltipModule, SCROLL_THROTTLE_MS, TOOLTIP_PANEL_CLASS, TooltipComponent, getMatTooltipInvalidPositionError, matTooltipAnimations } from '@angular/material/tooltip';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Current version of Angular Material.
 */
var VERSION = new Version('6.0.0-beta-0-949a69b');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { VERSION, MatAutocompleteSelectedEvent, MatAutocompleteBase, _MatAutocompleteMixinBase, MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, MatAutocomplete, MatAutocompleteModule, AUTOCOMPLETE_OPTION_HEIGHT, AUTOCOMPLETE_PANEL_HEIGHT, MAT_AUTOCOMPLETE_SCROLL_STRATEGY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_PROVIDER_FACTORY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_PROVIDER, MAT_AUTOCOMPLETE_VALUE_ACCESSOR, getMatAutocompleteMissingPanelError, MatAutocompleteTrigger, MatBadgeModule, MatBadge, MatBottomSheetModule, MatBottomSheet, MAT_BOTTOM_SHEET_DATA, MatBottomSheetConfig, MatBottomSheetContainer, matBottomSheetAnimations, MatBottomSheetRef, MatButtonModule, MatButtonBase, _MatButtonMixinBase, MatButton, MatAnchor, MatButtonToggleGroupBase, _MatButtonToggleGroupMixinBase, MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, MatButtonToggleChange, MatButtonToggleGroup, MatButtonToggleGroupMultiple, MatButtonToggleBase, _MatButtonToggleMixinBase, MatButtonToggle, MatButtonToggleModule, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardImage, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardXlImage, MatCardAvatar, MatCard, MatCardHeader, MatCardTitleGroup, MatCardModule, MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR, TransitionCheckState, MatCheckboxChange, MatCheckboxBase, _MatCheckboxMixinBase, MatCheckbox, MAT_CHECKBOX_CLICK_ACTION, MatCheckboxModule, MAT_CHECKBOX_REQUIRED_VALIDATOR, MatCheckboxRequiredValidator, MatChipsModule, MatChipListBase, _MatChipListMixinBase, MatChipListChange, MatChipList, MatChipSelectionChange, MatChipBase, _MatChipMixinBase, MatChipAvatar, MatChipTrailingIcon, MatChip, MatChipRemove, MatChipInput, MAT_PLACEHOLDER_GLOBAL_OPTIONS, AnimationCurves, AnimationDurations, MatCommonModule, MATERIAL_SANITY_CHECKS, mixinDisabled, mixinColor, mixinDisableRipple, mixinTabIndex, mixinErrorState, mixinInitialized, NativeDateModule, MatNativeDateModule, MAT_DATE_LOCALE, MAT_DATE_LOCALE_PROVIDER, DateAdapter, MAT_DATE_FORMATS, NativeDateAdapter, MAT_NATIVE_DATE_FORMATS, ShowOnDirtyErrorStateMatcher, ErrorStateMatcher, MAT_HAMMER_OPTIONS, GestureConfig, MatLine, MatLineSetter, MatLineModule, MatOptionModule, MatOptionSelectionChange, MAT_OPTION_PARENT_COMPONENT, MatOption, _countGroupLabelsBeforeOption, _getOptionScrollPosition, MatOptgroupBase, _MatOptgroupMixinBase, MatOptgroup, MAT_LABEL_GLOBAL_OPTIONS, MatRippleModule, MAT_RIPPLE_GLOBAL_OPTIONS, MatRipple, RippleState, RippleRef, defaultRippleAnimationConfig, RippleRenderer, MatPseudoCheckboxModule, MatPseudoCheckbox, JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC, ɵa33, MatDatepickerModule, MatCalendar, MatCalendarCell, MatCalendarBody, MAT_DATEPICKER_SCROLL_STRATEGY, MAT_DATEPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY, MAT_DATEPICKER_SCROLL_STRATEGY_PROVIDER, MatDatepickerContentBase, _MatDatepickerContentMixinBase, MatDatepickerContent, MatDatepicker, MAT_DATEPICKER_VALUE_ACCESSOR, MAT_DATEPICKER_VALIDATORS, MatDatepickerInputEvent, MatDatepickerInput, MatDatepickerIntl, MatDatepickerToggleIcon, MatDatepickerToggle, MatMonthView, MatYearView, MatDialogModule, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_SCROLL_STRATEGY, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER, MatDialog, throwMatDialogContentAlreadyAttachedError, MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogConfig, MatDialogRef, matDialogAnimations, MatDivider, MatDividerModule, MatExpansionModule, MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelDescription, MatExpansionPanelTitle, MatExpansionPanelContent, EXPANSION_PANEL_ANIMATION_TIMING, matExpansionAnimations, MatFormFieldModule, MatError, MatFormFieldBase, _MatFormFieldMixinBase, MatFormField, MatFormFieldControl, getMatFormFieldPlaceholderConflictError, getMatFormFieldDuplicatedHintError, getMatFormFieldMissingControlError, MatHint, MatPlaceholder, MatPrefix, MatSuffix, MatLabel, matFormFieldAnimations, MatGridListModule, MatGridList, MatGridTile, MatGridTileText, MatGridAvatarCssMatStyler, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatIconModule, MatIconBase, _MatIconMixinBase, MatIcon, getMatIconNameNotFoundError, getMatIconNoHttpProviderError, getMatIconFailedToSanitizeError, MatIconRegistry, ICON_REGISTRY_PROVIDER_FACTORY, ICON_REGISTRY_PROVIDER, AutofillMonitor, MatAutofill, MatTextareaAutosize, MatInputBase, _MatInputMixinBase, MatInput, getMatInputUnsupportedTypeError, MatInputModule, MAT_INPUT_VALUE_ACCESSOR, MatListModule, MatListBase, _MatListMixinBase, MatListItemBase, _MatListItemMixinBase, MatNavList, MatList, MatListAvatarCssMatStyler, MatListIconCssMatStyler, MatListSubheaderCssMatStyler, MatListItem, MatSelectionListBase, _MatSelectionListMixinBase, MatListOptionBase, _MatListOptionMixinBase, MAT_SELECTION_LIST_VALUE_ACCESSOR, MatListOptionChange, MatSelectionListChange, MatListOption, MatSelectionList, ɵa23, ɵb23, ɵd23, ɵc23, MAT_MENU_SCROLL_STRATEGY, MatMenuModule, MatMenu, MAT_MENU_DEFAULT_OPTIONS, MatMenuItem, MatMenuTrigger, matMenuAnimations, fadeInItems, transformMenu, MatMenuContent, MatPaginatorModule, PageEvent, MatPaginator, MatPaginatorIntl, MAT_PAGINATOR_INTL_PROVIDER_FACTORY, MAT_PAGINATOR_INTL_PROVIDER, MatProgressBarModule, MatProgressBarBase, _MatProgressBarMixinBase, MatProgressBar, MatProgressSpinnerModule, MatProgressSpinnerBase, _MatProgressSpinnerMixinBase, MatProgressSpinner, MatSpinner, MatRadioModule, MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, MatRadioChange, MatRadioGroupBase, _MatRadioGroupMixinBase, MatRadioGroup, MatRadioButtonBase, _MatRadioButtonMixinBase, MatRadioButton, MatSelectModule, SELECT_PANEL_MAX_HEIGHT, SELECT_PANEL_PADDING_X, SELECT_PANEL_INDENT_PADDING_X, SELECT_ITEM_HEIGHT_EM, SELECT_MULTIPLE_PANEL_PADDING_X, SELECT_PANEL_VIEWPORT_PADDING, MAT_SELECT_SCROLL_STRATEGY, MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY, MAT_SELECT_SCROLL_STRATEGY_PROVIDER, MatSelectChange, MatSelectBase, _MatSelectMixinBase, MatSelectTrigger, MatSelect, matSelectAnimations, transformPanel, fadeInContent, MatSidenavModule, throwMatDuplicatedDrawerError, MatDrawerToggleResult, MAT_DRAWER_DEFAULT_AUTOSIZE, MatDrawerContent, MatDrawer, MatDrawerContainer, MatSidenavContent, MatSidenav, MatSidenavContainer, matDrawerAnimations, MatSlideToggleModule, MAT_SLIDE_TOGGLE_VALUE_ACCESSOR, MatSlideToggleChange, MatSlideToggleBase, _MatSlideToggleMixinBase, MatSlideToggle, MatSliderModule, MAT_SLIDER_VALUE_ACCESSOR, MatSliderChange, MatSliderBase, _MatSliderMixinBase, MatSlider, MatSnackBarModule, MatSnackBar, MatSnackBarContainer, MAT_SNACK_BAR_DATA, MatSnackBarConfig, MatSnackBarRef, SimpleSnackBar, SHOW_ANIMATION, HIDE_ANIMATION, matSnackBarAnimations, MatSortModule, MatSortHeaderBase, _MatSortHeaderMixinBase, MatSortHeader, MatSortHeaderIntl, MAT_SORT_HEADER_INTL_PROVIDER_FACTORY, MAT_SORT_HEADER_INTL_PROVIDER, MatSortBase, _MatSortMixinBase, MatSort, matSortAnimations, MatStepperModule, MatStepLabel, _MatStep, _MatStepper, MatStep, MatStepper, MatHorizontalStepper, MatVerticalStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIntl, matStepperAnimations, MatStepperIcon, MatTableModule, MatCellDef, MatHeaderCellDef, MatColumnDef, MatHeaderCell, MatCell, MatTable, MatHeaderRowDef, MatRowDef, MatHeaderRow, MatRow, MatTableDataSource, ɵe24, ɵf24, ɵa24, ɵb24, ɵc24, ɵd24, ɵi24, ɵg24, ɵj24, ɵh24, MatInkBar, MatTabBody, MatTabBodyPortal, MatTabHeader, MatTabLabelWrapper, MatTab, MatTabLabel, MatTabNav, MatTabLink, MatTabContent, MatTabsModule, MatTabChangeEvent, MatTabGroupBase, _MatTabGroupMixinBase, MatTabGroup, matTabsAnimations, MatToolbarModule, MatToolbarBase, _MatToolbarMixinBase, MatToolbarRow, MatToolbar, throwToolbarMixedModesError, MatTooltipModule, SCROLL_THROTTLE_MS, TOOLTIP_PANEL_CLASS, getMatTooltipInvalidPositionError, MAT_TOOLTIP_SCROLL_STRATEGY, MAT_TOOLTIP_SCROLL_STRATEGY_PROVIDER_FACTORY, MAT_TOOLTIP_SCROLL_STRATEGY_PROVIDER, MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltip, TooltipComponent, matTooltipAnimations };
//# sourceMappingURL=material.es5.js.map
