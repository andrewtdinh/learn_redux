import React from 'react';
import Photo from './Photo';
//import comments

const Single = React.createClass({
  render(){
    //index of the post
    const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
    console.log(i);
    return (
      <div className="single-photo">
        I'm a Single component
      </div>
    )
  }
})

export default Single;
