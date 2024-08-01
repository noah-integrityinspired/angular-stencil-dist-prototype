import type { Components, JSX } from "../types/components";

interface WrapperMyComponent extends Components.WrapperMyComponent, HTMLElement {}
export const WrapperMyComponent: {
    prototype: WrapperMyComponent;
    new (): WrapperMyComponent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
