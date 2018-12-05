import { Component, State } from '@stencil/core';

interface ContentListWalletData {
    wallettitle: string,
    walletsubtitle: string,
    walletcardtitle: string,
    walletpartner: string,
    walletrubro: string,
    walletdate: string,
    walletvenc: string,
    walletused: boolean,
    walletdescription: [
        {
            title: string,
            website: string
        }
    ]
}

@Component({
    tag: 'app-content-list-wallet',
    styleUrl: 'app-content-list-wallet.css',
    shadow: false
})
export class ListWallet {
    @State() listData: ContentListWalletData[] = [];

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
        ]

    };

    render() {

        return (
            <section class="wallet-content-list-items mdl-cell--hide-phone">
                {this.listData.map((list) =>
                    <article class="wallet-item">
                        <div class="mdl-grid px0">
                            <div class="wallet-item-data mdl-cell mdl-cell--9-col left ml0">
                                {list.wallettitle ? <h3>{list.wallettitle}</h3> : ''}
                                {list.walletsubtitle ? <h4>{list.walletsubtitle}</h4> : ''}
                                {list.walletcardtitle ? <h6>{list.walletcardtitle}</h6> : ''}
                                {list.walletpartner
                                    ? <div class="wallet-partner"><div class="img-mkp ico inline-block rounded align-middle mr1"></div>
                                        {list.walletpartner}</div>
                                    : ''}
                                {list.walletrubro
                                    ? <div class="wallet-rubro inline-block rounded">
                                        <i class="material-icons inline-block align-middle mr1">restaurant</i>{list.walletrubro}
                                    </div>
                                    : ''}
                            </div>
                            <div class="wallet-item-image mdl-cell mdl-cell--3-col left mr0">
                                <div class="img-mkp rounded">
                                    <i class="material-icons">photo_size_select_actual</i>
                                </div>
                            </div>
                        </div>
                        <div class="wallet-content-item-list-desciption inline-block rounded">
                            <div class="mdl-grid">
                                <div class="content wallet-item-data mdl-cell mdl-cell--8-col left">
                                    <h3>{list.walletdescription}</h3>
                                    <h6>Fecha</h6>
                                    <p>Descripcion</p>
                                    <h4>Informacion</h4>
                                    <p>Para usarlo presentá el código en el punto de venta y disfrutá el beneficio.</p>
                                    <div class="wallet-content-serial inline-block rounded">
                                        XXXX XXXX XXXX XXXX
                                    </div>
                                    <span class="block">Sitio Web</span>
                                    <p><a href="#">www.sitioweb.com.ar</a></p>
                                </div>
                                <div class="wallet-item-data mdl-cell mdl-cell--4-col left">
                                    <img class="qr" src="assets/img/qr_img.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </article>
                )
                }
            </section>
        );
    }

}