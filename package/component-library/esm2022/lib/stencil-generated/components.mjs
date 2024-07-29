import { __decorate } from "tslib";
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProxyCmp } from './angular-component-lib/utils';
import * as i0 from "@angular/core";
let MyComponent = class MyComponent {
    z;
    el;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: MyComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: MyComponent, selector: "my-component", inputs: { first: "first", last: "last", middle: "middle", size: "size" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
};
MyComponent = __decorate([
    ProxyCmp({
        inputs: ['first', 'last', 'middle', 'size']
    })
], MyComponent);
export { MyComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: MyComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'my-component',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['first', 'last', 'middle', 'size'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudC1saWJyYXJ5L3NyYy9saWIvc3RlbmNpbC1nZW5lcmF0ZWQvY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsb0JBQW9CO0FBQ3BCLDhDQUE4QztBQUM5QyxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBc0IsTUFBTSxlQUFlLENBQUM7QUFFMUcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQWVsRCxJQUFNLFdBQVcsR0FBakIsTUFBTSxXQUFXO0lBRXFDO0lBRGpELEVBQUUsQ0FBYztJQUMxQixZQUFZLENBQW9CLEVBQUUsQ0FBYSxFQUFZLENBQVM7UUFBVCxNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQ2xFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNYLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO3VHQUxVLFdBQVc7MkZBQVgsV0FBVyw4SEFKWiwyQkFBMkI7O0FBSTFCLFdBQVc7SUFWdkIsUUFBUSxDQUFDO1FBQ1IsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDO0tBQzVDLENBQUM7R0FRVyxXQUFXLENBTXZCOzsyRkFOWSxXQUFXO2tCQVB2QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsdUVBQXVFO29CQUN2RSxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUM7aUJBQzVDIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGF1dG8tZ2VuZXJhdGVkIGFuZ3VsYXIgZGlyZWN0aXZlIHByb3hpZXMgKi9cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUHJveHlDbXAgfSBmcm9tICcuL2FuZ3VsYXItY29tcG9uZW50LWxpYi91dGlscyc7XG5cbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICdzdGVuY2lsLWxpYnJhcnknO1xuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydmaXJzdCcsICdsYXN0JywgJ21pZGRsZScsICdzaXplJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1jb21wb25lbnQnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2ZpcnN0JywgJ2xhc3QnLCAnbWlkZGxlJywgJ3NpemUnXSxcbn0pXG5leHBvcnQgY2xhc3MgTXlDb21wb25lbnQge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBNeUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudHMuTXlDb21wb25lbnQge31cblxuXG4iXX0=