import React from 'react';
import Header from './components/Header';
import Body from './components/Body';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <Body title="Открывайте, собирайте и занимайтесь благотвротительностью на необычном NFT маркетплейсе" text="ознакомьтесь с лучшими коллекциями от тщательно отобранных цифровых художников и найдите свою жемчужину здесь, в NFT" />
      </div>
    );
  }
}

export default App;