import React from "react";

class ImagePost extends React.Component {
  constructor(props) {
    super(props);
    this.image = this.props.image;
    this.state = {
      likeFillModeClass: "material-symbols-outlined like",
      likesCount: props.likes,
      likeState: "favorite"
    }

    this.onLikeEvent = this.onLikeEvent.bind(this);
  }
  
  render() {
    return(
      <div className="image-post">
        <img src={ this.image } alt="" />
        <div className="likes">
          <span className={ this.state.likeFillModeClass } onClick={ () => this.onLikeEvent() }>{ this.state.likeState }</span>
          <span>{ this.state.likesCount }</span>
        </div>
      </div>
    );
  }
  
  onLikeEvent() {
    if (this.state.likeFillModeClass.includes("material-symbols-outlined-fill")) {
      this.setState({
        likeFillModeClass: "material-symbols-outlined like",
        likesCount: parseInt(this.state.likesCount) - 1,
        likeState: "favorite"
      });
    }
    else {
      this.setState({
        likeFillModeClass: "material-symbols-outlined-fill material-symbols-outlined like",
        likesCount: parseInt(this.state.likesCount) + 1,
        likeState: "🤍"
      });
    }
  }
}

export default ImagePost;