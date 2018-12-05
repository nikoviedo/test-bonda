import { Component, State, Listen, Element } from '@stencil/core';

interface ListWalletData {
    wallettitle: string,
    walletsubtitle: string,
    walletcardtitle: string,
    walletpartner: string,
    walletrubro: string,
    walletdate: string,
    walletvenc: string,
    walletused: boolean
}

@Component({
    tag: 'app-list-wallet',
    styleUrl: 'app-list-wallet.css'
})


export class ListWallet {
    @Element() isScroll: HTMLElement;

    @Listen('window:scroll') 
    handleScroll() {

    }

    componentDidLoad() {
        var d = document.querySelector("body");
        var topPos = d.offsetTop;
        if(topPos>50){
            this.isScroll.classList.add('do-scroll');
        }
    }


    @State() listData: ListWalletData[] = [];

    componentWillLoad() {

        this.listData = [
            {
                wallettitle: '0%',
                walletsubtitle: '',
                walletcardtitle: 'Card Title | 2 lineas como maximo',
                walletpartner: 'Nombre Partner',
                walletrubro: '',
                walletdate: 'Ayer',
                walletvenc: 'Proximo a vencer',
                walletused: false
            },{
                wallettitle: '',
                walletsubtitle: 'Licencia extendida por paternidad',
                walletcardtitle: '',
                walletpartner: 'Nombre Partner',
                walletrubro: '',
                walletdate: '[Fecha de Solicitud]',
                walletvenc: '',
                walletused: false
            },{
                wallettitle: '2x1',
                walletsubtitle: 'Card Title | Nombre del cupón',
                walletcardtitle: '',
                walletpartner: 'Nombre Partner',
                walletrubro: 'Gastronomia',
                walletdate: '',
                walletvenc: '',
                walletused: true
            }
        ]

    };


    render() {

        return (
            <section class="wallet-list-items">
              <div class="wallet-list-header animate" id="wallet-list-header">
                <h2 class="inline-block">Mi billetera</h2>
                <i class="material-icons right">tune</i>
              </div>
                <div class="container">
                    {this.listData.map((list) =>
                        <article class="wallet-item p1 mdl-grid rounded inline-block">
                            <div class="wallet-item-data mdl-cell mdl-cell--9-col mdl-cell--3-col-phone left">
                                {list.wallettitle?<h3>{list.wallettitle}</h3>: ''}
                                {list.walletsubtitle?<h4>{list.walletsubtitle}</h4>:''}
                                {list.walletcardtitle?<h6>{list.walletcardtitle}</h6>:''}
                                {list.walletpartner
                                ?<div class="wallet-partner inline-block"><div class="img-mkp ico inline-block rounded align-middle mr1"></div>
                                    {list.walletpartner}</div>
                                : '' }
                                {list.walletrubro
                                ?<div class="wallet-rubro" >
                                    <i class="material-icons inline-block align-middle mr1">restaurant</i>{list.walletrubro}
                                </div>
                                : '' }
                            </div>
                            <div class="wallet-item-image mdl-cell mdl-cell--3-col  mdl-cell--1-col-phone left">
                                <div class="img-mkp rounded">
                                    <i class="material-icons">photo_size_select_actual</i>
                                </div>
                            </div>
                            <div class="wallet-item__footer mdl-cell mdl-cell--12-col inline-block">
                                <div class="left">
                                    {list.walletdate
                                    ?<div class="wallet-date inline-block mr2">{list.walletdate}</div>
                                    : ''}
                                    {list.walletvenc
                                    ?<div class="wallet-status inline-block ok mr1"><i class="material-icons inline-block align-middle mr1">timer</i>
                                        {list.walletvenc}
                                    </div>
                                    : '' }
                                    {list.walletused
                                    ? <div class="wallet-used inline-block">
                                        <i class="material-icons inline-block align-middle">tag_faces</i> Usado
                                        </div>
                                    : '' }
                                </div>
                                <div class="wallet-menu-footer right">
                                    <i class="material-icons mr1">reply</i>
                                    <i class="material-icons mr1">send</i>
                                    <i class="material-icons mr1">more_horiz</i>
                                </div>
                            </div>
                        </article>
                        )
                    }
                </div>
            </section>
        );
    }

}