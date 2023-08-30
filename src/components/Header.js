import React from "react";

class Header extends React.Component {
  render() {
    return(
      <header className="header">
        <a href="/" className="header__link">NFT Landing</a>
        <nav className="header__navigation">
          <a href="/" className="header__nav-link selected">Главная</a>
          <a href="/" className="header__nav-link">Начать</a>
        </nav>
        <div className="header__actions">
          <a href="/" className="btn-transparent">СОЗДАТЬ</a>
          <a href="/" className="btn-transparent no-border">ВОЙТИ</a>
        </div>
      </header>
    );
  }
}

export default Header;