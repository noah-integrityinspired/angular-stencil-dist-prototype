import { r as registerInstance, h } from './index-b461fe45.js';

const wrapperMyComponentCss = ":host{display:block}";
const WrapperMyComponentStyle0 = wrapperMyComponentCss;

const WrapperMyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.size = undefined;
    }
    render() {
        return (h("div", { key: '94b961a028951a0233e2806243b86350f5c7df32' }, h("h1", { key: 'c30d203c5969c4e44806926ff987c11fcd2175d4' }, "Wrapper My Component"), h("my-component", { key: '3511a8dfc8274d6e7ab9de427ca8dbe8ade063f8', first: "hello", last: "world", size: this.size })));
    }
};
WrapperMyComponent.style = WrapperMyComponentStyle0;

export { WrapperMyComponent as wrapper_my_component };

//# sourceMappingURL=wrapper-my-component.entry.js.map