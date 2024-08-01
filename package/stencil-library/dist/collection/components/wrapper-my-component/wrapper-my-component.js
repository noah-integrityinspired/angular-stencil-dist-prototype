import { h } from "@stencil/core";
export class WrapperMyComponent {
    render() {
        return (h("div", { key: 'f365e304c08a84fe5cc0283ff7e107b8783e925f' }, h("h1", { key: 'c5bf1ebb78b79931ddec08ce19e66aa07b9619bb' }, "Wrapper My Component"), h("my-component", { key: '2a0bb4893fd304669acf743550e9e82708cab461', first: "hello", last: "world", size: 15 })));
    }
    static get is() { return "wrapper-my-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["wrapper-my-component.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["wrapper-my-component.css"]
        };
    }
}
//# sourceMappingURL=wrapper-my-component.js.map
