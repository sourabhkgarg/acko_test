
import React from 'react';
import Star from '../Icons/star';
import GrayStar from '../Icons/starGray';


class Rating extends React.Component{

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }


  render () {

    return (
      <div className="flex container pad_top_10">

        <div className="club_details">

          <p><span>Club : </span> Health Forge</p>
          <p><span>Partners : </span> span>Multipsorts</p>
          <p> <span>Members :</span> 10/14</p>

        </div>

      <div className="total_rating">

        <div>
          <Star />
          <Star />
          <Star />
          <Star />
          <GrayStar/>
        </div>

        <span>(66 reviews)</span>


      </div>


      </div>
    );
  }

}



export default Rating;

