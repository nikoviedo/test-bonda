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
                h("button", { class: "close", onClick: handleCancelClick }, "X"),
                h("div", { class: "app-modal-header" },
                    h("span", null, title)),
                h("div", { class: "app-modal-content" }, "Tu opini\u00F3n nos interesa,\u00A1Contanos qu\u00E9 te pareci\u00F3 este benficio!"),
                h("div", { class: "app-modal-buttons" },
                    h("button", { class: "btn", onClick: handleOkClick }, "ENVIAR OPINION")))));
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
    static get style() { return ".app-modal-wrapper {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0,0,0,.5);\n    opacity: 0;\n    visibility: hidden;\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n    -webkit-transition: visibility 0s linear 0.25s, opacity 0.25s 0s, -webkit-transform 0.25s;\n    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, -webkit-transform 0.25s;\n    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\n    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s, -webkit-transform 0.25s;\n    z-index: 3;\n  }\n  .visible {\n    opacity: 1;\n    visibility: visible;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    -webkit-transition: visibility 0s linear 0s, opacity 0.25s 0s, -webkit-transform 0.25s;\n    transition: visibility 0s linear 0s, opacity 0.25s 0s, -webkit-transform 0.25s;\n    transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;\n    transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s, -webkit-transform 0.25s;\n  }\n  .app-modal {\n    font-family: var(--font-family, Helvetica);\n    font-size: var(--font-size, 13px);\n    background-color: #fff;\n    position: absolute;\n    border-radius:0;\n    min-width: 300px;\n    padding:55px 10px 0;\n    height: 100%;\n  }\n  .app-modal-header {\n    font-size: 2.3em;\n    padding: 30px 10px 0;\n    border-top-left-radius: var(--border-radius, 0.2em);\n    border-top-right-radius: var(--border-radius, 0.2em);\n    background-color: var(--header-bg-color, #fff);\n    color: var(--header-color, #4c4b4b);\n  }\n  .app-modal-content {\n    padding: 0px 10px 5px 10px;\n    font-size: 1.2em;\n    color:var(--black-color-03);\n    margin: 30px 0\n  }\n  .app-modal .close{\n    font-size:25px;\n    color:var( --black-color-03);\n  }\n  .app-modal-buttons{\n    position: absolute;\n    width: 96%;\n    bottom: 72px;\n}\n  .hide{\n    display:none;\n  }\n  button.btn{\n    color:#ffffff;\n    background:var(--bg-violet);\n    padding:5px 8px;\n    text-align:center;    \n    border-radius: 5px;\n    border: 0;\n    font-weight: 100;\n    font-size: 14px;\n  }\n\n  \@media(max-width:40rem){\n    button.btn{\n      color:#ffffff;\n      background:var(--bg-violet);\n      padding:10px 8px;\n      width: 95%;\n      margin: 0 auto;\n      display: block;\n    }\n  }"; }
}

export { AppModal };
