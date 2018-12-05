import { Component } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})

export class AppRoot {

  render() {
    return (
      <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header"> 
        <div class="mdl-layout__header-row header__logo">
          <h1><a href=""><img src="assets/img/logo_bondacom-02.svg" height="30" alt="" /></a></h1>
        </div>
        <header class="mdl-layout__header mdl-layout--no-desktop-drawer-button mdl-layout__header--scroll">
          <div class="mdl-layout__header-row mdl-container">
            <nav class="mdl-navigation mdl-layout--large-screen-only">
              <a class="mdl-navigation__link" href="">BENEFICIOS</a>
              <a class="mdl-navigation__link" href="">CUSTOM</a>
              <a class="mdl-navigation__link" href="">CUSTOM</a>
              <a class="mdl-navigation__link" href="">CUSTOM</a>
              <a class="mdl-navigation__link" href="">CUSTOM</a>
              <a class="mdl-navigation__link" href="">+ MORE</a>
            </nav>
            <nav class="mdl-navigation mdl-layout--large-screen-only wallet--button">
              <a class="mdl-navigation__link" href="">MI BILLETERA</a>
            </nav>
          </div>
        </header>
        <main class="mdl-layout__content mdl-container">
          <div class="mdl-grid p0">
            <div class="wallet-list mdl-cell mdl-cell--5-col mt0 pl0">
              <app-list-wallet/>
            </div>
            <div class="wallet-content-list mdl-cell mdl-cell--7-col mt0 p0">
              <app-content-list-wallet />
            </div>
          </div>
        </main>
        <footer class="footer-desk">
          <div class="mdl-container">
            <div class="left">
              <h1><a href=""><img src="assets/img/logo_bondacom-02.svg" height="30" alt="" /></a></h1>
            </div>
            <div class="right mdl-layout__header-row">
              <nav class="mdl-navigation">
                <a class="mdl-navigation__link" href="">LINK</a>
                <a class="mdl-navigation__link" href="">LINK</a>
                <a class="mdl-navigation__link" href="">LINK</a>
              </nav>
            </div>
          </div>
        </footer>
        <footer class="footer-app">
          <ul class="flex">
            <li class=""><i class="material-icons">home</i><span>Inicio</span></li>
            <li class="active"><i class="material-icons">account_balance_wallet</i><span>Mi Billetera</span></li>
            <li class=""><i class="material-icons">account_circle</i><span>Cuenta</span></li>
            <li class=""><i class="material-icons">more_horiz</i><span>Mas</span></li>
          </ul>
        </footer>
      </div>
    );
  }
}
