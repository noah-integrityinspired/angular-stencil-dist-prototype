import { p as proxyCustomElement, H, h } from './p-af30c06b.js';
import { d as defineCustomElement$2 } from './p-88f89e5b.js';

const wrapperMyComponentCss = ":host{display:block}";
const WrapperMyComponentStyle0 = wrapperMyComponentCss;

const WrapperMyComponent$1 = /*@__PURE__*/ proxyCustomElement(class WrapperMyComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.size = undefined;
    }
    render() {
        return (h("div", { key: '94b961a028951a0233e2806243b86350f5c7df32' }, h("h1", { key: 'c30d203c5969c4e44806926ff987c11fcd2175d4' }, "Wrapper My Component"), h("my-component", { key: '3511a8dfc8274d6e7ab9de427ca8dbe8ade063f8', first: "hello", last: "world", size: this.size })));
    }
    static get style() { return WrapperMyComponentStyle0; }
}, [1, "wrapper-my-component", {
        "size": [2]
    }]);
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