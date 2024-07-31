import { p as proxyCustomElement, H, f as format, h } from './p-af30c06b.js';

const myComponentCss = ":host{display:block}";
const MyComponentStyle0 = myComponentCss;

const MyComponent$1 = /*@__PURE__*/ proxyCustomElement(class MyComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.first = undefined;
        this.middle = undefined;
        this.last = undefined;
        this.size = undefined;
        console.log(`Hello from MyComponent; I'm from the stencil component that then gets wrapped in an angular lib so that I can be used in this angular app!`);
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return h("div", { key: '610a19c7def1623dbf9370efdd26ff07c79ad5be' }, h("div", { key: 'bf94eb0ff2fce11fd586fbaef483bfe97e9dd588' }, "Hello, World! I'm ", this.getText()), h("input", { key: '8f8fff14ff0ad55f890eb84ec8e6f654e634b85b', size: this.size }));
    }
    static get style() { return MyComponentStyle0; }
}, [1, "my-component", {
        "first": [1],
        "middle": [1],
        "last": [1],
        "size": [2]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["my-component"];
    components.forEach(tagName => { switch (tagName) {
        case "my-component":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MyComponent$1);
            }
            break;
    } });
}
defineCustomElement$1();

const MyComponent = MyComponent$1;
const defineCustomElement = defineCustomElement$1;

export { MyComponent, defineCustomElement };

//# sourceMappingURL=my-component.js.map