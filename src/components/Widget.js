import React from "react";

class Widget extends React.Component {
  icon = this.props.icon;
  text = this.props.text

  render() {
    return(
      <div className="widget">
        <span className="material-symbols-outlined">{ this.icon }</span>
        <p>{ this.text }</p>
      </div>
    );
  }
}

export default Widget;