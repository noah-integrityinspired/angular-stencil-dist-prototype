import { ChangeDetectorRef, ElementRef, NgZone } from '@angular/core';
import { Components } from 'stencil-library';
import * as i0 from "@angular/core";
export declare class MyComponent {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "my-component", never, { "first": { "alias": "first"; "required": false; }; "last": { "alias": "last"; "required": false; }; "middle": { "alias": "middle"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface MyComponent extends Components.MyComponent {
}
export declare class WrapperMyComponent {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WrapperMyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WrapperMyComponent, "wrapper-my-component", never, { "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface WrapperMyComponent extends Components.WrapperMyComponent {
}
