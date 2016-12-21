import { PositionStrategy } from './position-strategy';
import { ElementRef } from '@angular/core';
import { ViewportRuler } from './viewport-ruler';
import { ConnectionPositionPair, OriginConnectionPosition, OverlayConnectionPosition, ConnectedOverlayPositionChange } from './connected-position';
import { Observable } from 'rxjs/Observable';
/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * implicit position relative some origin element. The relative position is defined in terms of
 * a point on the origin element that is connected to a point on the overlay element. For example,
 * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
 * of the overlay.
 */
export declare class ConnectedPositionStrategy implements PositionStrategy {
    private _connectedTo;
    private _originPos;
    private _overlayPos;
    private _viewportRuler;
    private _dir;
    /** The offset in pixels for the overlay connection point on the x-axis */
    private _offsetX;
    /** The offset in pixels for the overlay connection point on the y-axis */
    private _offsetY;
    /** Whether the we're dealing with an RTL context */
    readonly _isRtl: boolean;
    /** Ordered list of preferred positions, from most to least desirable. */
    _preferredPositions: ConnectionPositionPair[];
    /** The origin element against which the overlay will be positioned. */
    private _origin;
    private _onPositionChange;
    /** Emits an event when the connection point changes. */
    readonly onPositionChange: Observable<ConnectedOverlayPositionChange>;
    constructor(_connectedTo: ElementRef, _originPos: OriginConnectionPosition, _overlayPos: OverlayConnectionPosition, _viewportRuler: ViewportRuler);
    /** Ordered list of preferred positions, from most to least desirable. */
    readonly positions: ConnectionPositionPair[];
    /**
     * To be used to for any cleanup after the element gets destroyed.
     */
    dispose(): void;
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin fits on-screen.
     * @docs-private
     *
     * @param element Element to which to apply the CSS styles.
     * @returns Resolves when the styles have been applied.
     */
    apply(element: HTMLElement): Promise<void>;
    /**
     * Adds a new preferred fallback position.
     * @param originPos
     * @param overlayPos
     */
    withFallbackPosition(originPos: OriginConnectionPosition, overlayPos: OverlayConnectionPosition): this;
    /**
     * Sets the layout direction so the overlay's position can be adjusted to match.
     * @param dir New layout direction.
     */
    withDirection(dir: 'ltr' | 'rtl'): this;
    /**
     * Sets an offset for the overlay's connection point on the x-axis
     * @param offset New offset in the X axis.
     */
    withOffsetX(offset: number): this;
    /**
     * Sets an offset for the overlay's connection point on the y-axis
     * @param  offset New offset in the Y axis.
     */
    withOffsetY(offset: number): this;
    /**
     * Gets the horizontal (x) "start" dimension based on whether the overlay is in an RTL context.
     * @param rect
     */
    private _getStartX(rect);
    /**
     * Gets the horizontal (x) "end" dimension based on whether the overlay is in an RTL context.
     * @param rect
     */
    private _getEndX(rect);
    /**
     * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
     * @param originRect
     * @param pos
     */
    private _getOriginConnectionPoint(originRect, pos);
    /**
     * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
     * origin point to which the overlay should be connected, as well as how much of the element
     * would be inside the viewport at that position.
     */
    private _getOverlayPoint(originPoint, overlayRect, viewportRect, pos);
    /**
     * Physically positions the overlay element to the given coordinate.
     * @param element
     * @param overlayPoint
     */
    private _setElementPosition(element, overlayPoint);
    /**
     * Subtracts the amount that an element is overflowing on an axis from it's length.
     */
    private _subtractOverflows(length, ...overflows);
}
