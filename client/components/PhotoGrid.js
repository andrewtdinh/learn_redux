import React from 'react';

const PhotoGrid = React.createClass({
  render(){
    return (
      <div className="photo-grid">
        {this.props.posts.map((posts, i) => <Photo/>)}
      </div>
    )
  }
})

export default PhotoGrid;
