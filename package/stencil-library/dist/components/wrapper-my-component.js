import { p as proxyCustomElement, H, h } from './p-af30c06b.js';
import { d as defineCustomElement$2 } from './p-88f89e5b.js';

const wrapperMyComponentCss = ":host{display:block}";
const WrapperMyComponentStyle0 = wrapperMyComponentCss;

const WrapperMyComponent$1 = /*@__PURE__*/ proxyCustomElement(class WrapperMyComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h("div", { key: 'f365e304c08a84fe5cc0283ff7e107b8783e925f' }, h("h1", { key: 'c5bf1ebb78b79931ddec08ce19e66aa07b9619bb' }, "Wrapper My Component"), h("my-component", { key: '2a0bb4893fd304669acf743550e9e82708cab461', first: "hello", last: "world", size: 15 })));
    }
    static get style() { return WrapperMyComponentStyle0; }
}, [1, "wrapper-my-component"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["wrapper-my-component", "my-component"];
    components.forEach(tagName => { switch (tagName) {
        case "wrapper-my-component":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, WrapperMyComponent$1);
            }
            break;
        case "my-component":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}
defineCustomElement$1();

const WrapperMyComponent = WrapperMyComponent$1;
const defineCustomElement = defineCustomElement$1;

export { WrapperMyComponent, defineCustomElement };

//# sourceMappingURL=wrapper-my-component.js.map