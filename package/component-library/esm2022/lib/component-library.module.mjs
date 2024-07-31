import { APP_INITIALIZER, NgModule } from '@angular/core';
import { defineCustomElements } from 'stencil-library/loader';
import * as i0 from "@angular/core";
console.log('imported component-library.module.ts');
export class FoobarComponentLibraryModule {
    constructor() {
        defineCustomElements();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: FoobarComponentLibraryModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: FoobarComponentLibraryModule });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: FoobarComponentLibraryModule, providers: [
            {
                provide: APP_INITIALIZER,
                useFactory: () => defineCustomElements,
                multi: true
            },
        ] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: FoobarComponentLibraryModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [
                        {
                            provide: APP_INITIALIZER,
                            useFactory: () => defineCustomElements,
                            multi: true
                        },
                    ]
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWxpYnJhcnkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50LWxpYnJhcnkvc3JjL2xpYi9jb21wb25lbnQtbGlicmFyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztBQVVwRCxNQUFNLE9BQU8sNEJBQTRCO0lBQ3ZDO1FBQ0Usb0JBQW9CLEVBQUUsQ0FBQztJQUN6QixDQUFDO3VHQUhVLDRCQUE0Qjt3R0FBNUIsNEJBQTRCO3dHQUE1Qiw0QkFBNEIsYUFSNUI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsZUFBZTtnQkFDeEIsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLG9CQUFvQjtnQkFDdEMsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGOzsyRkFFVSw0QkFBNEI7a0JBVHhDLFFBQVE7bUJBQUM7b0JBQ1IsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxlQUFlOzRCQUN4QixVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsb0JBQW9COzRCQUN0QyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnRzIH0gZnJvbSAnc3RlbmNpbC1saWJyYXJ5L2xvYWRlcic7XG5jb25zb2xlLmxvZygnaW1wb3J0ZWQgY29tcG9uZW50LWxpYnJhcnkubW9kdWxlLnRzJyk7XG5ATmdNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICB1c2VGYWN0b3J5OiAoKSA9PiBkZWZpbmVDdXN0b21FbGVtZW50cyxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBGb29iYXJDb21wb25lbnRMaWJyYXJ5TW9kdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgZGVmaW5lQ3VzdG9tRWxlbWVudHMoKTtcbiAgfVxufVxuIl19