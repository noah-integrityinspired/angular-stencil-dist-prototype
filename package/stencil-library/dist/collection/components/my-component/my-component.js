import { h } from "@stencil/core";
import { format } from "../../utils/utils";
export class MyComponent {
    constructor() {
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
    static get is() { return "my-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["my-component.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["my-component.css"]
        };
    }
    static get properties() {
        return {
            "first": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The first name"
                },
                "attribute": "first",
                "reflect": false
            },
            "middle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The middle name"
                },
                "attribute": "middle",
                "reflect": false
            },
            "last": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The last name"
                },
                "attribute": "last",
                "reflect": false
            },
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
                    "text": "Size of input"
                },
                "attribute": "size",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=my-component.js.map
