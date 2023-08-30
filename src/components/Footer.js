import React from "react";
import FooterRow from "./FooterRow";

class Footer extends React.Component {
  text = this.props.text;
  rows = this.props.rows;
  
  render() {
    return(
      <footer className="footer">
        <div className="footer__wrapper">
          <div className="footer__text">
            <h1>{ this.text }</h1>
          </div>
          <div className="footer__rows">
            { this.rows.map((row) => (
              <FooterRow row={ row } />
            ))}
          </div>
        </div>
        <div className="footer__underline">
          <hr style={{
            margin: '30px'
          }}/>
          <p style={{
            marginLeft: '30px',
            color: '#fff'
          }}>Copyright 2023. NFT</p>
        </div>
      </footer>
    );
  }
}

export default Footer;