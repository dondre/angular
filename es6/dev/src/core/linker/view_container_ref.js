import { ListWrapper } from 'angular2/src/facade/collection';
import { unimplemented } from 'angular2/src/facade/exceptions';
import { isPresent } from 'angular2/src/facade/lang';
/**
 * Represents a container where one or more Views can be attached.
 *
 * The container can contain two kinds of Views. Host Views, created by instantiating a
 * {@link Component} via {@link #createHostView}, and Embedded Views, created by instantiating an
 * {@link TemplateRef Embedded Template} via {@link #createEmbeddedView}.
 *
 * The location of the View Container within the containing View is specified by the Anchor
 * `element`. Each View Container can have only one Anchor Element and each Anchor Element can only
 * have a single View Container.
 *
 * Root elements of Views attached to this container become siblings of the Anchor Element in
 * the Rendered View.
 *
 * To access a `ViewContainerRef` of an Element, you can either place a {@link Directive} injected
 * with `ViewContainerRef` on the Element, or you obtain it via
 * {@link AppViewManager#getViewContainer}.
 *
 * <!-- TODO(i): we are also considering ElementRef#viewContainer api -->
 */
export class ViewContainerRef {
    /**
     * Anchor element that specifies the location of this container in the containing View.
     * <!-- TODO: rename to anchorElement -->
     */
    get element() { return unimplemented(); }
    /**
     * Destroys all Views in this container.
     */
    clear() {
        for (var i = this.length - 1; i >= 0; i--) {
            this.remove(i);
        }
    }
    /**
     * Returns the number of Views currently attached to this container.
     */
    get length() { return unimplemented(); }
    ;
}
export class ViewContainerRef_ extends ViewContainerRef {
    constructor(_element) {
        super();
        this._element = _element;
    }
    get(index) { return this._element.nestedViews[index].ref; }
    get length() {
        var views = this._element.nestedViews;
        return isPresent(views) ? views.length : 0;
    }
    get element() { return this._element.ref; }
    // TODO(rado): profile and decide whether bounds checks should be added
    // to the methods below.
    createEmbeddedView(templateRef, index = -1) {
        if (index == -1)
            index = this.length;
        var vm = this._element.parentView.viewManager;
        return vm.createEmbeddedViewInContainer(this._element.ref, index, templateRef);
    }
    createHostView(hostViewFactoryRef, index = -1, dynamicallyCreatedProviders = null, projectableNodes = null) {
        if (index == -1)
            index = this.length;
        var vm = this._element.parentView.viewManager;
        return vm.createHostViewInContainer(this._element.ref, index, hostViewFactoryRef, dynamicallyCreatedProviders, projectableNodes);
    }
    // TODO(i): refactor insert+remove into move
    insert(viewRef, index = -1) {
        if (index == -1)
            index = this.length;
        var vm = this._element.parentView.viewManager;
        return vm.attachViewInContainer(this._element.ref, index, viewRef);
    }
    indexOf(viewRef) {
        return ListWrapper.indexOf(this._element.nestedViews, viewRef.internalView);
    }
    // TODO(i): rename to destroy
    remove(index = -1) {
        if (index == -1)
            index = this.length - 1;
        var vm = this._element.parentView.viewManager;
        return vm.destroyViewInContainer(this._element.ref, index);
        // view is intentionally not returned to the client.
    }
    // TODO(i): refactor insert+remove into move
    detach(index = -1) {
        if (index == -1)
            index = this.length - 1;
        var vm = this._element.parentView.viewManager;
        return vm.detachViewInContainer(this._element.ref, index);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld19jb250YWluZXJfcmVmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL3ZpZXdfY29udGFpbmVyX3JlZi50cyJdLCJuYW1lcyI6WyJWaWV3Q29udGFpbmVyUmVmIiwiVmlld0NvbnRhaW5lclJlZi5lbGVtZW50IiwiVmlld0NvbnRhaW5lclJlZi5jbGVhciIsIlZpZXdDb250YWluZXJSZWYubGVuZ3RoIiwiVmlld0NvbnRhaW5lclJlZl8iLCJWaWV3Q29udGFpbmVyUmVmXy5jb25zdHJ1Y3RvciIsIlZpZXdDb250YWluZXJSZWZfLmdldCIsIlZpZXdDb250YWluZXJSZWZfLmxlbmd0aCIsIlZpZXdDb250YWluZXJSZWZfLmVsZW1lbnQiLCJWaWV3Q29udGFpbmVyUmVmXy5jcmVhdGVFbWJlZGRlZFZpZXciLCJWaWV3Q29udGFpbmVyUmVmXy5jcmVhdGVIb3N0VmlldyIsIlZpZXdDb250YWluZXJSZWZfLmluc2VydCIsIlZpZXdDb250YWluZXJSZWZfLmluZGV4T2YiLCJWaWV3Q29udGFpbmVyUmVmXy5yZW1vdmUiLCJWaWV3Q29udGFpbmVyUmVmXy5kZXRhY2giXSwibWFwcGluZ3MiOiJPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0NBQWdDO09BQ25ELEVBQUMsYUFBYSxFQUFDLE1BQU0sZ0NBQWdDO09BRXJELEVBQUMsU0FBUyxFQUFVLE1BQU0sMEJBQTBCO0FBZTNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHO0FBQ0g7SUFDRUE7OztPQUdHQTtJQUNIQSxJQUFJQSxPQUFPQSxLQUFpQkMsTUFBTUEsQ0FBQ0EsYUFBYUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFFckREOztPQUVHQTtJQUNIQSxLQUFLQTtRQUNIRSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFF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Q0FBQ0EsR0FBR0EsRUFBRUEsS0FBS0EsRUFBRUEsT0FBT0EsQ0FBQ0EsQ0FBQ0E7SUFDckVBLENBQUNBO0lBRURQLE9BQU9BLENBQUNBLE9BQWdCQTtRQUN0QlEsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsV0FBV0EsRUFBYUEsT0FBUUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0E7SUFDMUZBLENBQUNBO0lBRURSLDZCQUE2QkE7SUFDN0JBLE1BQU1BLENBQUNBLEtBQUtBLEdBQVdBLENBQUNBLENBQUNBO1FBQ3ZCUyxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUN6Q0EsSUFBSUEsRUFBRUEsR0FBR0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7UUFDOUNBLE1BQU1BLENBQUNBLEVBQUVBLENBQUNBLHNCQUFzQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsR0FBR0EsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDM0RBLG9EQUFvREE7SUFDdERBLENBQUNBO0lBRURULDRDQUE0Q0E7SUFDNUNBLE1BQU1BLENBQUNBLEtBQUtBLEdBQVdBLENBQUNBLENBQUNBO1FBQ3ZCVSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUN6Q0EsSUFBSUEsRUFBRUEsR0FBR0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7UUFDOUNBLE1BQU1BLENBQUNBLEVBQUVBLENBQUNBLHFCQUFxQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsR0FBR0EsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7SUFDNURBLENBQUNBO0FBQ0hWLENBQUNBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xpc3RXcmFwcGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2NvbGxlY3Rpb24nO1xuaW1wb3J0IHt1bmltcGxlbWVudGVkfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuaW1wb3J0IHtSZXNvbHZlZFByb3ZpZGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9kaSc7XG5pbXBvcnQge2lzUHJlc2VudCwgaXNCbGFua30gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcblxuaW1wb3J0IHtBcHBFbGVtZW50fSBmcm9tICcuL2VsZW1lbnQnO1xuXG5pbXBvcnQge0VsZW1lbnRSZWYsIEVsZW1lbnRSZWZffSBmcm9tICcuL2VsZW1lbnRfcmVmJztcbmltcG9ydCB7VGVtcGxhdGVSZWYsIFRlbXBsYXRlUmVmX30gZnJvbSAnLi90ZW1wbGF0ZV9yZWYnO1xuaW1wb3J0IHtcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBIb3N0Vmlld1JlZixcbiAgSG9zdFZpZXdGYWN0b3J5UmVmLFxuICBIb3N0Vmlld0ZhY3RvcnlSZWZfLFxuICBWaWV3UmVmLFxuICBWaWV3UmVmX1xufSBmcm9tICcuL3ZpZXdfcmVmJztcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgY29udGFpbmVyIHdoZXJlIG9uZSBvciBtb3JlIFZpZXdzIGNhbiBiZSBhdHRhY2hlZC5cbiAqXG4gKiBUaGUgY29udGFpbmVyIGNhbiBjb250YWluIHR3byBraW5kcyBvZiBWaWV3cy4gSG9zdCBWaWV3cywgY3JlYXRlZCBieSBpbnN0YW50aWF0aW5nIGFcbiAqIHtAbGluayBDb21wb25lbnR9IHZpYSB7QGxpbmsgI2NyZWF0ZUhvc3RWaWV3fSwgYW5kIEVtYmVkZGVkIFZpZXdzLCBjcmVhdGVkIGJ5IGluc3RhbnRpYXRpbmcgYW5cbiAqIHtAbGluayBUZW1wbGF0ZVJlZiBFbWJlZGRlZCBUZW1wbGF0ZX0gdmlhIHtAbGluayAjY3JlYXRlRW1iZWRkZWRWaWV3fS5cbiAqXG4gKiBUaGUgbG9jYXRpb24gb2YgdGhlIFZpZXcgQ29udGFpbmVyIHdpdGhpbiB0aGUgY29udGFpbmluZyBWaWV3IGlzIHNwZWNpZmllZCBieSB0aGUgQW5jaG9yXG4gKiBgZWxlbWVudGAuIEVhY2ggVmlldyBDb250YWluZXIgY2FuIGhhdmUgb25seSBvbmUgQW5jaG9yIEVsZW1lbnQgYW5kIGVhY2ggQW5jaG9yIEVsZW1lbnQgY2FuIG9ubHlcbiAqIGhhdmUgYSBzaW5nbGUgVmlldyBDb250YWluZXIuXG4gKlxuICogUm9vdCBlbGVtZW50cyBvZiBWaWV3cyBhdHRhY2hlZCB0byB0aGlzIGNvbnRhaW5lciBiZWNvbWUgc2libGluZ3Mgb2YgdGhlIEFuY2hvciBFbGVtZW50IGluXG4gKiB0aGUgUmVuZGVyZWQgVmlldy5cbiAqXG4gKiBUbyBhY2Nlc3MgYSBgVmlld0NvbnRhaW5lclJlZmAgb2YgYW4gRWxlbWVudCwgeW91IGNhbiBlaXRoZXIgcGxhY2UgYSB7QGxpbmsgRGlyZWN0aXZlfSBpbmplY3RlZFxuICogd2l0aCBgVmlld0NvbnRhaW5lclJlZmAgb24gdGhlIEVsZW1lbnQsIG9yIHlvdSBvYnRhaW4gaXQgdmlhXG4gKiB7QGxpbmsgQXBwVmlld01hbmFnZXIjZ2V0Vmlld0NvbnRhaW5lcn0uXG4gKlxuICogPCEtLSBUT0RPKGkpOiB3ZSBhcmUgYWxzbyBjb25zaWRlcmluZyBFbGVtZW50UmVmI3ZpZXdDb250YWluZXIgYXBpIC0tPlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVmlld0NvbnRhaW5lclJlZiB7XG4gIC8qKlxuICAgKiBBbmNob3IgZWxlbWVudCB0aGF0IHNwZWNpZmllcyB0aGUgbG9jYXRpb24gb2YgdGhpcyBjb250YWluZXIgaW4gdGhlIGNvbnRhaW5pbmcgVmlldy5cbiAgICogPCEtLSBUT0RPOiByZW5hbWUgdG8gYW5jaG9yRWxlbWVudCAtLT5cbiAgICovXG4gIGdldCBlbGVtZW50KCk6IEVsZW1lbnRSZWYgeyByZXR1cm4gdW5pbXBsZW1lbnRlZCgpOyB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIGFsbCBWaWV3cyBpbiB0aGlzIGNvbnRhaW5lci5cbiAgICovXG4gIGNsZWFyKCk6IHZvaWQge1xuICAgIGZvciAodmFyIGkgPSB0aGlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB0aGlzLnJlbW92ZShpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUge0BsaW5rIFZpZXdSZWZ9IGZvciB0aGUgVmlldyBsb2NhdGVkIGluIHRoaXMgY29udGFpbmVyIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXguXG4gICAqL1xuICBhYnN0cmFjdCBnZXQoaW5kZXg6IG51bWJlcik6IFZpZXdSZWY7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBWaWV3cyBjdXJyZW50bHkgYXR0YWNoZWQgdG8gdGhpcyBjb250YWluZXIuXG4gICAqL1xuICBnZXQgbGVuZ3RoKCk6IG51bWJlciB7IHJldHVybiB1bmltcGxlbWVudGVkKCk7IH07XG5cbiAgLyoqXG4gICAqIEluc3RhbnRpYXRlcyBhbiBFbWJlZGRlZCBWaWV3IGJhc2VkIG9uIHRoZSB7QGxpbmsgVGVtcGxhdGVSZWYgYHRlbXBsYXRlUmVmYH0gYW5kIGluc2VydHMgaXRcbiAgICogaW50byB0aGlzIGNvbnRhaW5lciBhdCB0aGUgc3BlY2lmaWVkIGBpbmRleGAuXG4gICAqXG4gICAqIElmIGBpbmRleGAgaXMgbm90IHNwZWNpZmllZCwgdGhlIG5ldyBWaWV3IHdpbGwgYmUgaW5zZXJ0ZWQgYXMgdGhlIGxhc3QgVmlldyBpbiB0aGUgY29udGFpbmVyLlxuICAgKlxuICAgKiBSZXR1cm5zIHRoZSB7QGxpbmsgVmlld1JlZn0gZm9yIHRoZSBuZXdseSBjcmVhdGVkIFZpZXcuXG4gICAqL1xuICBhYnN0cmFjdCBjcmVhdGVFbWJlZGRlZFZpZXcodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmLCBpbmRleD86IG51bWJlcik6IEVtYmVkZGVkVmlld1JlZjtcblxuICAvKipcbiAgICogSW5zdGFudGlhdGVzIGEgc2luZ2xlIHtAbGluayBDb21wb25lbnR9IGFuZCBpbnNlcnRzIGl0cyBIb3N0IFZpZXcgaW50byB0aGlzIGNvbnRhaW5lciBhdCB0aGVcbiAgICogc3BlY2lmaWVkIGBpbmRleGAuXG4gICAqXG4gICAqIFRoZSBjb21wb25lbnQgaXMgaW5zdGFudGlhdGVkIHVzaW5nIGl0cyB7QGxpbmsgUHJvdG9WaWV3UmVmIGBwcm90b1ZpZXdgfSB3aGljaCBjYW4gYmVcbiAgICogb2J0YWluZWQgdmlhIHtAbGluayBDb21waWxlciNjb21waWxlSW5Ib3N0fS5cbiAgICpcbiAgICogSWYgYGluZGV4YCBpcyBub3Qgc3BlY2lmaWVkLCB0aGUgbmV3IFZpZXcgd2lsbCBiZSBpbnNlcnRlZCBhcyB0aGUgbGFzdCBWaWV3IGluIHRoZSBjb250YWluZXIuXG4gICAqXG4gICAqIFlvdSBjYW4gb3B0aW9uYWxseSBzcGVjaWZ5IGBkeW5hbWljYWxseUNyZWF0ZWRQcm92aWRlcnNgLCB3aGljaCBjb25maWd1cmUgdGhlIHtAbGluayBJbmplY3Rvcn1cbiAgICogdGhhdCB3aWxsIGJlIGNyZWF0ZWQgZm9yIHRoZSBIb3N0IFZpZXcuXG4gICAqXG4gICAqIFJldHVybnMgdGhlIHtAbGluayBIb3N0Vmlld1JlZn0gb2YgdGhlIEhvc3QgVmlldyBjcmVhdGVkIGZvciB0aGUgbmV3bHkgaW5zdGFudGlhdGVkIENvbXBvbmVudC5cbiAgICovXG4gIGFic3RyYWN0IGNyZWF0ZUhvc3RWaWV3KGhvc3RWaWV3RmFjdG9yeVJlZjogSG9zdFZpZXdGYWN0b3J5UmVmLCBpbmRleD86IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHluYW1pY2FsbHlDcmVhdGVkUHJvdmlkZXJzPzogUmVzb2x2ZWRQcm92aWRlcltdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0YWJsZU5vZGVzPzogYW55W11bXSk6IEhvc3RWaWV3UmVmO1xuXG4gIC8qKlxuICAgKiBJbnNlcnRzIGEgVmlldyBpZGVudGlmaWVkIGJ5IGEge0BsaW5rIFZpZXdSZWZ9IGludG8gdGhlIGNvbnRhaW5lciBhdCB0aGUgc3BlY2lmaWVkIGBpbmRleGAuXG4gICAqXG4gICAqIElmIGBpbmRleGAgaXMgbm90IHNwZWNpZmllZCwgdGhlIG5ldyBWaWV3IHdpbGwgYmUgaW5zZXJ0ZWQgYXMgdGhlIGxhc3QgVmlldyBpbiB0aGUgY29udGFpbmVyLlxuICAgKlxuICAgKiBSZXR1cm5zIHRoZSBpbnNlcnRlZCB7QGxpbmsgVmlld1JlZn0uXG4gICAqL1xuICBhYnN0cmFjdCBpbnNlcnQodmlld1JlZjogRW1iZWRkZWRWaWV3UmVmLCBpbmRleD86IG51bWJlcik6IEVtYmVkZGVkVmlld1JlZjtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIFZpZXcsIHNwZWNpZmllZCB2aWEge0BsaW5rIFZpZXdSZWZ9LCB3aXRoaW4gdGhlIGN1cnJlbnQgY29udGFpbmVyIG9yXG4gICAqIGAtMWAgaWYgdGhpcyBjb250YWluZXIgZG9lc24ndCBjb250YWluIHRoZSBWaWV3LlxuICAgKi9cbiAgYWJzdHJhY3QgaW5kZXhPZih2aWV3UmVmOiBWaWV3UmVmKTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBEZXN0cm95cyBhIFZpZXcgYXR0YWNoZWQgdG8gdGhpcyBjb250YWluZXIgYXQgdGhlIHNwZWNpZmllZCBgaW5kZXhgLlxuICAgKlxuICAgKiBJZiBgaW5kZXhgIGlzIG5vdCBzcGVjaWZpZWQsIHRoZSBsYXN0IFZpZXcgaW4gdGhlIGNvbnRhaW5lciB3aWxsIGJlIHJlbW92ZWQuXG4gICAqL1xuICBhYnN0cmFjdCByZW1vdmUoaW5kZXg/OiBudW1iZXIpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBVc2UgYWxvbmcgd2l0aCB7QGxpbmsgI2luc2VydH0gdG8gbW92ZSBhIFZpZXcgd2l0aGluIHRoZSBjdXJyZW50IGNvbnRhaW5lci5cbiAgICpcbiAgICogSWYgdGhlIGBpbmRleGAgcGFyYW0gaXMgb21pdHRlZCwgdGhlIGxhc3Qge0BsaW5rIFZpZXdSZWZ9IGlzIGRldGFjaGVkLlxuICAgKi9cbiAgYWJzdHJhY3QgZGV0YWNoKGluZGV4PzogbnVtYmVyKTogRW1iZWRkZWRWaWV3UmVmO1xufVxuXG5leHBvcnQgY2xhc3MgVmlld0NvbnRhaW5lclJlZl8gZXh0ZW5kcyBWaWV3Q29udGFpbmVyUmVmIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudDogQXBwRWxlbWVudCkgeyBzdXBlcigpOyB9XG5cbiAgZ2V0KGluZGV4OiBudW1iZXIpOiBFbWJlZGRlZFZpZXdSZWYgeyByZXR1cm4gdGhpcy5fZWxlbWVudC5uZXN0ZWRWaWV3c1tpbmRleF0ucmVmOyB9XG4gIGdldCBsZW5ndGgoKTogbnVtYmVyIHtcbiAgICB2YXIgdmlld3MgPSB0aGlzLl9lbGVtZW50Lm5lc3RlZFZpZXdzO1xuICAgIHJldHVybiBpc1ByZXNlbnQodmlld3MpID8gdmlld3MubGVuZ3RoIDogMDtcbiAgfVxuXG4gIGdldCBlbGVtZW50KCk6IEVsZW1lbnRSZWZfIHsgcmV0dXJuIHRoaXMuX2VsZW1lbnQucmVmOyB9XG5cbiAgLy8gVE9ETyhyYWRvKTogcHJvZmlsZSBhbmQgZGVjaWRlIHdoZXRoZXIgYm91bmRzIGNoZWNrcyBzaG91bGQgYmUgYWRkZWRcbiAgLy8gdG8gdGhlIG1ldGhvZHMgYmVsb3cuXG4gIGNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWYsIGluZGV4OiBudW1iZXIgPSAtMSk6IEVtYmVkZGVkVmlld1JlZiB7XG4gICAgaWYgKGluZGV4ID09IC0xKSBpbmRleCA9IHRoaXMubGVuZ3RoO1xuICAgIHZhciB2bSA9IHRoaXMuX2VsZW1lbnQucGFyZW50Vmlldy52aWV3TWFuYWdlcjtcbiAgICByZXR1cm4gdm0uY3JlYXRlRW1iZWRkZWRWaWV3SW5Db250YWluZXIodGhpcy5fZWxlbWVudC5yZWYsIGluZGV4LCB0ZW1wbGF0ZVJlZik7XG4gIH1cblxuICBjcmVhdGVIb3N0Vmlldyhob3N0Vmlld0ZhY3RvcnlSZWY6IEhvc3RWaWV3RmFjdG9yeVJlZiwgaW5kZXg6IG51bWJlciA9IC0xLFxuICAgICAgICAgICAgICAgICBkeW5hbWljYWxseUNyZWF0ZWRQcm92aWRlcnM6IFJlc29sdmVkUHJvdmlkZXJbXSA9IG51bGwsXG4gICAgICAgICAgICAgICAgIHByb2plY3RhYmxlTm9kZXM6IGFueVtdW10gPSBudWxsKTogSG9zdFZpZXdSZWYge1xuICAgIGlmIChpbmRleCA9PSAtMSkgaW5kZXggPSB0aGlzLmxlbmd0aDtcbiAgICB2YXIgdm0gPSB0aGlzLl9lbGVtZW50LnBhcmVudFZpZXcudmlld01hbmFnZXI7XG4gICAgcmV0dXJuIHZtLmNyZWF0ZUhvc3RWaWV3SW5Db250YWluZXIodGhpcy5fZWxlbWVudC5yZWYsIGluZGV4LCBob3N0Vmlld0ZhY3RvcnlSZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHluYW1pY2FsbHlDcmVhdGVkUHJvdmlkZXJzLCBwcm9qZWN0YWJsZU5vZGVzKTtcbiAgfVxuXG4gIC8vIFRPRE8oaSk6IHJlZmFjdG9yIGluc2VydCtyZW1vdmUgaW50byBtb3ZlXG4gIGluc2VydCh2aWV3UmVmOiBWaWV3UmVmLCBpbmRleDogbnVtYmVyID0gLTEpOiBFbWJlZGRlZFZpZXdSZWYge1xuICAgIGlmIChpbmRleCA9PSAtMSkgaW5kZXggPSB0aGlzLmxlbmd0aDtcbiAgICB2YXIgdm0gPSB0aGlzLl9lbGVtZW50LnBhcmVudFZpZXcudmlld01hbmFnZXI7XG4gICAgcmV0dXJuIHZtLmF0dGFjaFZpZXdJbkNvbnRhaW5lcih0aGlzLl9lbGVtZW50LnJlZiwgaW5kZXgsIHZpZXdSZWYpO1xuICB9XG5cbiAgaW5kZXhPZih2aWV3UmVmOiBWaWV3UmVmKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTGlzdFdyYXBwZXIuaW5kZXhPZih0aGlzLl9lbGVtZW50Lm5lc3RlZFZpZXdzLCAoPFZpZXdSZWZfPnZpZXdSZWYpLmludGVybmFsVmlldyk7XG4gIH1cblxuICAvLyBUT0RPKGkpOiByZW5hbWUgdG8gZGVzdHJveVxuICByZW1vdmUoaW5kZXg6IG51bWJlciA9IC0xKTogdm9pZCB7XG4gICAgaWYgKGluZGV4ID09IC0xKSBpbmRleCA9IHRoaXMubGVuZ3RoIC0gMTtcbiAgICB2YXIgdm0gPSB0aGlzLl9lbGVtZW50LnBhcmVudFZpZXcudmlld01hbmFnZXI7XG4gICAgcmV0dXJuIHZtLmRlc3Ryb3lWaWV3SW5Db250YWluZXIodGhpcy5fZWxlbWVudC5yZWYsIGluZGV4KTtcbiAgICAvLyB2aWV3IGlzIGludGVudGlvbmFsbHkgbm90IHJldHVybmVkIHRvIHRoZSBjbGllbnQuXG4gIH1cblxuICAvLyBUT0RPKGkpOiByZWZhY3RvciBpbnNlcnQrcmVtb3ZlIGludG8gbW92ZVxuICBkZXRhY2goaW5kZXg6IG51bWJlciA9IC0xKTogRW1iZWRkZWRWaWV3UmVmIHtcbiAgICBpZiAoaW5kZXggPT0gLTEpIGluZGV4ID0gdGhpcy5sZW5ndGggLSAxO1xuICAgIHZhciB2bSA9IHRoaXMuX2VsZW1lbnQucGFyZW50Vmlldy52aWV3TWFuYWdlcjtcbiAgICByZXR1cm4gdm0uZGV0YWNoVmlld0luQ29udGFpbmVyKHRoaXMuX2VsZW1lbnQucmVmLCBpbmRleCk7XG4gIH1cbn1cbiJdfQ==