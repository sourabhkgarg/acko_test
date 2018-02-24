
import React from 'react';


class Liked extends React.Component{

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }


  render () {

    return (
      <div className="container liked_by_div flex">

        <div className="flex ">

          <div className="user_image">
            <img src="https://metrouk2.files.wordpress.com/2017/08/pri_48957260.jpg" alt=""/>
          </div>
          <div className="user_image">
            <img src="https://metrouk2.files.wordpress.com/2017/08/pri_48957260.jpg" alt=""/>
          </div>
          <div className="user_image">
            <img src="https://metrouk2.files.wordpress.com/2017/08/pri_48957260.jpg" alt=""/>
          </div>
          <div className="user_image">
            <img src="https://metrouk2.files.wordpress.com/2017/08/pri_48957260.jpg" alt=""/>
          </div>
          <div className="user_image">
            <img src="https://metrouk2.files.wordpress.com/2017/08/pri_48957260.jpg" alt=""/>
          </div>
          <div className="user_image">
            <span>+6</span>
          </div>

        </div>


        <button>schedule</button>

      </div>
    );
  }

}



export default Liked;

