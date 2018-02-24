import React from 'react';
import Rating from './rating';
import LikedByPeople from './likedPeopleImages';

class Card extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }


  render() {

    return (
      <div className="card">

        <div className="flex">

          <div className="coach_img">

            <img
              src="http://fitnessontoast.com/wp-content/uploads/2014/01/daily-hiit-faya-fitness-on-toast-girl-deadlift-blog-post-weights-square1.jpg"
              alt=""/>
          </div>

          <div className="content">
            <h3>Perfect body system</h3>
            <p className="author">by <span>Jasmine taylor</span></p>
            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <Rating/>

            <LikedByPeople/>

        </div>


      </div>
    );
  }

}


export default Card;

