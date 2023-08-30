import React from "react";
import Widget from "./Widget";

class GetSrarted extends React.Component {
  title = this.props.title;
  text = this.props.text;
  widgets = this.props.widgets;

  render() {
    return(
      <div className="getting-started" dataAnchor="getstarted">
        <h1>{ this.title }</h1>
        <h3>{ this.text }</h3>
        <div className="widgets">
          { this.widgets.map((widget) => (
             <Widget icon={ widget.icon } text={ widget.text }></Widget>
          )) }
        </div>
      </div>
    );
  }
}

export default GetSrarted;