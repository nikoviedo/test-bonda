const h = window.App.h;

class AppModal {
    constructor() {
        this.handleCancelClick = () => {
            this.visible = false;
            this.cancel.emit();
        };
        this.handleOkClick = () => {
            this.visible = false;
            this.ok.emit();
        };
    }
    render() {
        const { visible, title, handleCancelClick, handleOkClick } = this;
        return (h("div", { class: visible ? "app-modal-wrapper visible" : "app-modal-wrapper" },
            h("div", { class: "app-modal" },
                h("div", { class: "app-modal-header" },
                    h("span", null, title)),
                h("div", { class: "app-modal-content" },
                    h("slot", null)),
                h("div", { class: "app-modal-buttons" },
                    h("button", { class: "app-modal-cancel", onClick: handleCancelClick }, "Cancel"),
                    h("button", { class: "app-modal-ok", onClick: handleOkClick }, "Okay")))));
    }
    static get is() { return "app-modal"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "title": {
            "type": String,
            "attr": "title"
        },
        "visible": {
            "type": Boolean,
            "attr": "visible",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "ok",
            "method": "ok",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "cancel",
            "method": "cancel",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ".app-modal-wrapper {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0,0,0,.5);\n    opacity: 0;\n    visibility: hidden;\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n    -webkit-transition: visibility 0s linear 0.25s, opacity 0.25s 0s, -webkit-transform 0.25s;\n    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, -webkit-transform 0.25s;\n    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\n    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s, -webkit-transform 0.25s;\n    z-index: 3;\n  }\n  .visible {\n    opacity: 1;\n    visibility: visible;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    -webkit-transition: visibility 0s linear 0s, opacity 0.25s 0s, -webkit-transform 0.25s;\n    transition: visibility 0s linear 0s, opacity 0.25s 0s, -webkit-transform 0.25s;\n    transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;\n    transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s, -webkit-transform 0.25s;\n  }\n  .app-modal {\n    font-family: var(--font-family, Helvetica);\n    font-size: var(--font-size, 13px);\n    background-color: #fff;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    border-radius: var(--border-radius, 0.2em);\n    min-width: 300px;\n  }\n  .app-modal-header {\n    font-size: 1.3em;\n    padding: 5px 10px 5px 10px;\n    border-top-left-radius: var(--border-radius, 0.2em);\n    border-top-right-radius: var(--border-radius, 0.2em);\n    background-color: var(--header-bg-color, #fff);\n    color: var(--header-color, #4c4b4b);\n  }\n  .app-modal-content {\n    padding: 0px 10px 5px 10px;\n  }\n  .app-modal-buttons {\n    padding: 5px 10px 10px 10px;\n    text-align: right;\n  }\n  .app-modal-buttons button {\n    font-size: inherit;\n    margin-left: 10px;\n    min-width: 80px;\n    line-height: 20px;\n    border-style: solid;\n    border-radius: var(--border-radius, 0.2em);\n    padding: 3px;\n    color: var(--button-color, white);\n    cursor: pointer;\n  }\n  .app-modal-cancel {\n    background-color: var(--cancel-bg-color, #848e97);\n    border-color: var(--cancel-bg-color, #848e97);\n  }\n  .app-modal-cancel:hover {\n    background-color: var(--cancel-hover-bg-color, #6c757d);\n    border-color: var(--cancel-hover-bg-color, #6c757d);\n  }\n  .app-modal-ok {\n    background-color: var(--ok-bg-color, #848e97);\n    border-color: var(--ok-bg-color, #848e97);\n  }\n  .app-modal-ok:hover {\n    background-color: var(--ok-hover-bg-color, #6c757d);\n    border-color: var(--ok-hover-bg-color, #6c757d);\n  }"; }
}

export { AppModal };
