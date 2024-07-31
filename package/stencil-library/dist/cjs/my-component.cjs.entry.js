'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-75857cee.js');
const utils = require('./utils-bcad3386.js');

const myComponentCss = ":host{display:block}";
const MyComponentStyle0 = myComponentCss;

const MyComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.first = undefined;
        this.middle = undefined;
        this.last = undefined;
        this.size = undefined;
        console.log(`Hello from MyComponent; I'm from the stencil component that then gets wrapped in an angular lib so that I can be used in this angular app!`);
    }
    getText() {
        return utils.format(this.first, this.middle, this.last);
    }
    render() {
        return index.h("div", { key: '610a19c7def1623dbf9370efdd26ff07c79ad5be' }, index.h("div", { key: 'bf94eb0ff2fce11fd586fbaef483bfe97e9dd588' }, "Hello, World! I'm ", this.getText()), index.h("input", { key: '8f8fff14ff0ad55f890eb84ec8e6f654e634b85b', size: this.size }));
    }
};
MyComponent.style = MyComponentStyle0;

exports.my_component = MyComponent;

//# sourceMappingURL=my-component.cjs.entry.js.map