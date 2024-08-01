import { h } from "@stencil/core";
export class WrapperMyComponent {
    constructor() {
        this.size = undefined;
    }
    render() {
        return (h("div", { key: '94b961a028951a0233e2806243b86350f5c7df32' }, h("h1", { key: 'c30d203c5969c4e44806926ff987c11fcd2175d4' }, "Wrapper My Component"), h("my-component", { key: '3511a8dfc8274d6e7ab9de427ca8dbe8ade063f8', first: "hello", last: "world", size: this.size })));
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
    static get properties() {
        return {
            "size": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "size",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=wrapper-my-component.js.map
