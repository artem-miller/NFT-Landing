import React from "react";
import ImagePost from "./ImagePost";

class Body extends React.Component {
  title = this.props.title;
  text = this.props.text;
  
  render() {
    return(
      <div className="container__body">
        <div className="body__info">
          <h1>{ this.title }</h1>
          <h3>{ this.text }</h3>
          <div className="body__buttons">
            <button className="btn-gradient">Исследовать</button>
            <button className="btn-transparent" style={
            {
              borderRadius: '99px',
              fontSize: '17px',
              padding: '10px',
              width: '150px',
              marginTop: '20px'
            }
            }>Создать</button>
          </div>
        </div>
        <ImagePost image={ process.env.PUBLIC_URL + '/images/logo.jpg' } likes="258" />
      </div>
    );
  }
}

export default Body;