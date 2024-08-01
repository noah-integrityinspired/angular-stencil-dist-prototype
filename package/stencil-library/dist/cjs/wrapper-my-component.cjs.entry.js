'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-75857cee.js');

const wrapperMyComponentCss = ":host{display:block}";
const WrapperMyComponentStyle0 = wrapperMyComponentCss;

const WrapperMyComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.size = undefined;
    }
    render() {
        return (index.h("div", { key: '94b961a028951a0233e2806243b86350f5c7df32' }, index.h("h1", { key: 'c30d203c5969c4e44806926ff987c11fcd2175d4' }, "Wrapper My Component"), index.h("my-component", { key: '3511a8dfc8274d6e7ab9de427ca8dbe8ade063f8', first: "hello", last: "world", size: this.size })));
    }
};
WrapperMyComponent.style = WrapperMyComponentStyle0;

exports.wrapper_my_component = WrapperMyComponent;

//# sourceMappingURL=wrapper-my-component.cjs.entry.js.map