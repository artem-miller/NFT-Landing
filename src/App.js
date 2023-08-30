import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import GetSrarted from './components/GetStart';
import Footer from './components/Footer';
import { widgets, rows } from './variables';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <Body title="Открывайте, собирайте и занимайтесь благотворительностью на необычном NFT маркетплейсе" text="ознакомьтесь с лучшими коллекциями от тщательно отобранных цифровых художников и найдите свою жемчужину здесь, в NFT" />
        <GetSrarted title="Начать" text="покупайте и продавайте NFT от ведущих мировых художников" widgets={ widgets }/>
        <Footer text="если вы хотите, чтобы что-то принадлежало вам по-настоящему и от всего сердца, превратите это в NFT" rows={ rows } />
      </div>
    );
  }
}

export default App;