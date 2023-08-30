import React from "react";

class FooterRow extends React.Component {
  row = this.props.row;
  
  render() {
    return(
      <div className="row">
        <h1>{ this.row.text }</h1>
        <div className="row__links">
          { this.row.links.map((link) => (
            <a href="#">{ link }</a>
          ))}
        </div>
      </div>
    );
  }
}

export default FooterRow;