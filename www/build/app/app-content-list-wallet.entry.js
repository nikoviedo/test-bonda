const h = window.App.h;

import { a as ActiveRouter } from './chunk-81ce502b.js';
import { a as matchPath } from './chunk-cea77b40.js';

class ListWallet {
    constructor() {
        this.listData = [];
    }
    componentWillLoad() {
        this.listData = [
            {
                wallettitle: '0%',
                walletsubtitle: 'TItulo',
                walletcardtitle: 'Card Title | 2 lineas como maximo',
                walletpartner: 'Nombre Partner',
                walletrubro: 'Gastronomia',
                walletdate: 'Ayer',
                walletvenc: 'Proximo a vencer',
                walletused: false,
                walletdescription: [
                    {
                        title: 'title',
                        website: 'www.sitioweb.com.ar'
                    }
                ]
            }
        ];
    }
    ;
    render() {
        return (h("section", { class: "wallet-content-list-items" },
            h("stencil-router", null,
                h("stencil-route-switch", { scrollTopOffset: 0 }, this.listData.map((list) => h("article", { class: "wallet-item" },
                    h("a", { href: "/" },
                        h("div", { class: "back " },
                            h("i", { class: "material-icons" }, "arrow_back"))),
                    h("div", { class: "mdl-grid px0" },
                        h("div", { class: "wallet-item-data mdl-cell mdl-cell--9-col mdl-cell--3-col-phone left ml0" },
                            list.wallettitle ? h("h3", null, list.wallettitle) : '',
                            list.walletsubtitle ? h("h4", null, list.walletsubtitle) : '',
                            list.walletcardtitle ? h("h6", null, list.walletcardtitle) : '',
                            list.walletpartner
                                ? h("div", { class: "wallet-partner" },
                                    h("div", { class: "img-mkp ico inline-block rounded align-middle mr1" }),
                                    list.walletpartner)
                                : '',
                            list.walletrubro
                                ? h("div", { class: "wallet-rubro inline-block rounded" },
                                    h("i", { class: "material-icons inline-block align-middle mr1" }, "restaurant"),
                                    list.walletrubro)
                                : ''),
                        h("div", { class: "wallet-item-image mdl-cell mdl-cell--3-col mdl-cell--1-col-phone left mr0" },
                            h("div", { class: "img-mkp rounded" },
                                h("i", { class: "material-icons" }, "photo_size_select_actual")))),
                    h("div", { class: "wallet-content-item-list-desciption inline-block rounded" },
                        h("div", { class: "mdl-grid" },
                            h("div", { class: "content wallet-item-data mdl-cell mdl-cell--8-col left" },
                                h("h3", null, list.walletdescription),
                                h("h6", null, "Fecha"),
                                h("p", null, "Descripcion"),
                                h("h4", null, "Informacion"),
                                h("p", null, "Para usarlo present\u00E1 el c\u00F3digo en el punto de venta y disfrut\u00E1 el beneficio."),
                                h("div", { class: "wallet-content-serial inline-block rounded" }, "XXXX XXXX XXXX XXXX"),
                                h("span", { class: "block" }, "Sitio Web"),
                                h("p", null,
                                    h("a", { href: "#" }, "www.sitioweb.com.ar"))),
                            h("div", { class: "wallet-item-data mdl-cell mdl-cell--4-col left" },
                                h("img", { class: "qr", src: "assets/img/qr_img.png", alt: "" }))))))))));
    }
    static get is() { return "app-content-list-wallet"; }
    static get properties() { return {
        "history": {
            "type": "Any",
            "attr": "history"
        },
        "listData": {
            "state": true
        }
    }; }
    static get style() { return "/* wallet list */\n.hidden{display: none}\n.wallet-content-list {\nborder-right: 1px solid #e1e1e3;\n}\n.wallet-content-list .wallet-content-list-header{\n    position: relative\n}\n.wallet-content-list .wallet-content-list-header i{\n    position:absolute;\n    right: 10px;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n    transform: translateY(-50%);\n    opacity: .4;\n}\n\n.wallet-content-list-items{\n    width: 100%;\n    height: 66vh;\n    overflow: hidden;\n    overflow-y: auto\n}\n.wallet-content-list-items article{\n    width: 100%;\n}\n.wallet-content-list-items article .wallet-item-data h3,\n.wallet-content-list-items article .wallet-item-data h4{\n    margin:0 0 1rem;\n} \n.wallet-content-list-items article .wallet-item-data h6{\n    white-space:nowrap;\n    text-overflow:ellipsis;\n    overflow:hidden;\n    margin:0 0 1rem;\n}\n.wallet-content-list-items article .wallet-partner{\n    font-size: 12px;\n    color: var(--black-color-01);\n    margin:0 0 1rem;\n}\n.wallet-content-list-items article .wallet-rubro{\n    font-size:11px;\n    padding:5px 10px;\n    color:var(--black-color-01);\n    display: inline-block;\n    background:#e6e6e6;\n}\n.wallet-content-list-items article .wallet-rubro i{\n    font-size: 14px\n}\n.wallet-content-list-items article .wallet-item-image .img-mkp{\n    width: 100%;\n    height: 112px;\n    position:relative;\n}\n.wallet-content-list-items article .wallet-item-image .img-mkp i{\n    position: absolute;\n    top:50%;\n    left: 50%;\n    -webkit-transform:translate(-50%, -50%);\n    transform:translate(-50%, -50%);\n    opacity: .3;\n}\n.wallet-content-list-items article .wallet-item__footer .right i{\n    color:#979797\n}\n.wallet-content-list-items article .wallet-item__footer .left .wallet-date,\n.wallet-content-list-items article .wallet-item__footer .left .wallet-used {\n    font-weight: 600;\n    color: var(--black-color-01);\n}\n.wallet-content-list-items article .wallet-item__footer .left .wallet-status.ok{\n    color:#8cc03e;\n    font-size:13px;\n}\n.wallet-content-item-list-desciption{\n    background:#f6f6f6;\n    color: var(--black-color-03);\n    width: 98%;\n}\n.wallet-content-item-list-desciption .content .wallet-content-serial{\n    background: #fff;    \n    font-size: 20px;\n    padding: 10px;\n    margin: 0 0 1rem;\n}\n.wallet-content-item-list-desciption img.qr{\n    width:100%;\n    height: auto\n}"; }
}

function uuidv4 () {
    return ([1e7].toString() + -1e3.toString() + -4e3.toString() + -8e3.toString() + -1e11.toString()).replace(/[018]/g, function (c) {
        const random = window.crypto.getRandomValues(new Uint8Array(1));
        return (c ^ random[0] & 15 >> c / 4).toString(16);
    });
}

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getUniqueId() {
    if (window.crypto) {
        return uuidv4();
    }
    return ((Math.random() * 100000000000000000).toString().match(/.{4}/g) || []).join("-");
}
function getMatch(pathname, url, exact) {
    return matchPath(pathname, {
        path: url,
        exact: exact,
        strict: true
    });
}
function isHTMLStencilRouteElement(element) {
    return element.tagName.toLocaleLowerCase() === "stencil-route";
}
class RouteSwitch {
    constructor() {
        this.group = getUniqueId();
        this.subscribers = [];
    }
    componentWillLoad() {
        if (this.location != null) {
            this.regenerateSubscribers(this.location);
        }
    }
    regenerateSubscribers(newLocation) {
        return __awaiter(this, void 0, void 0, function* () {
            if (newLocation == null) {
                return;
            }
            let newActiveIndex = -1;
            this.subscribers = Array.prototype.slice.call(this.el.children)
                .filter(isHTMLStencilRouteElement)
                .map((childElement, index) => {
                const match = getMatch(newLocation.pathname, childElement.url, childElement.exact);
                if (match && newActiveIndex === -1) {
                    newActiveIndex = index;
                }
                return {
                    el: childElement,
                    match: match
                };
            });
            if (newActiveIndex === -1) {
                return;
            }
            if (this.activeIndex === newActiveIndex) {
                this.subscribers[newActiveIndex].el.match = this.subscribers[newActiveIndex].match;
                return;
            }
            this.activeIndex = newActiveIndex;
            const activeChild = this.subscribers[this.activeIndex];
            if (this.scrollTopOffset) {
                activeChild.el.scrollTopOffset = this.scrollTopOffset;
            }
            activeChild.el.group = this.group;
            activeChild.el.match = activeChild.match;
            activeChild.el.componentUpdated = (routeViewUpdatedOptions) => {
                this.queue.write(() => {
                    this.subscribers.forEach((child, index) => {
                        child.el.componentUpdated = undefined;
                        if (index === this.activeIndex) {
                            return child.el.style.display = "";
                        }
                        if (this.scrollTopOffset) {
                            child.el.scrollTopOffset = this.scrollTopOffset;
                        }
                        child.el.group = this.group;
                        child.el.match = null;
                        child.el.style.display = "none";
                    });
                });
                if (this.routeViewsUpdated) {
                    this.routeViewsUpdated(Object.assign({ scrollTopOffset: this.scrollTopOffset }, routeViewUpdatedOptions));
                }
            };
        });
    }
    render() {
        return (h("slot", null));
    }
    static get is() { return "stencil-route-switch"; }
    static get properties() {
        return {
            "el": {
                "elementRef": true
            },
            "group": {
                "type": String,
                "attr": "group",
                "reflectToAttr": true
            },
            "location": {
                "type": "Any",
                "attr": "location",
                "watchCallbacks": ["regenerateSubscribers"]
            },
            "queue": {
                "context": "queue"
            },
            "routeViewsUpdated": {
                "type": "Any",
                "attr": "route-views-updated"
            },
            "scrollTopOffset": {
                "type": Number,
                "attr": "scroll-top-offset"
            }
        };
    }
}
ActiveRouter.injectProps(RouteSwitch, [
    "location",
    "routeViewsUpdated"
]);

export { ListWallet as AppContentListWallet, RouteSwitch as StencilRouteSwitch };
