import { APP_INITIALIZER, NgModule } from '@angular/core';
import { defineCustomElements } from 'stencil-library/loader';
import * as i0 from "@angular/core";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWxpYnJhcnkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50LWxpYnJhcnkvc3JjL2xpYi9jb21wb25lbnQtbGlicmFyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBVTlELE1BQU0sT0FBTyw0QkFBNEI7SUFDdkM7UUFDRSxvQkFBb0IsRUFBRSxDQUFDO0lBQ3pCLENBQUM7dUdBSFUsNEJBQTRCO3dHQUE1Qiw0QkFBNEI7d0dBQTVCLDRCQUE0QixhQVI1QjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxlQUFlO2dCQUN4QixVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsb0JBQW9CO2dCQUN0QyxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7OzJGQUVVLDRCQUE0QjtrQkFUeEMsUUFBUTttQkFBQztvQkFDUixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGVBQWU7NEJBQ3hCLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxvQkFBb0I7NEJBQ3RDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudHMgfSBmcm9tICdzdGVuY2lsLWxpYnJhcnkvbG9hZGVyJztcbkBOZ01vZHVsZSh7XG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgIHVzZUZhY3Rvcnk6ICgpID0+IGRlZmluZUN1c3RvbUVsZW1lbnRzLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEZvb2JhckNvbXBvbmVudExpYnJhcnlNb2R1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBkZWZpbmVDdXN0b21FbGVtZW50cygpO1xuICB9XG59XG4iXX0=