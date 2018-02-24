import React from 'react';
import {connect} from 'react-redux';
import './homepage.scss';
import Pilate from '../Icons/pilate';
import Yoga from '../Icons/yoga';
import Fitness from '../Icons/fitness';
import Dance from '../Icons/remix';
import Card from './card';
import DownArrow from '../Icons/down';


const catArray = [{text : 'Yoga', Src : Yoga},{text : 'Fitness', Src : Fitness},{text : 'Dance', Src : Dance},{text : 'Pilates', Src : Pilate} ];

class Main extends React.Component{

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(type, e){
    let val = e.target.value;

  }

  render () {



    let categories =catArray.map((item) => {
      return (
        <div key={item.text} className={item.text === "Fitness" ? "section_active section" : "section"}>
          <item.Src />
          <br/>
          <span>{item.text}</span>
        </div>
      );

      });



    return (
      <div className="container">

        <div className="header_div">
          <img src="http://backgroundcheckall.com/wp-content/uploads/2017/12/dark-background-images-9271.png" alt=""/>

          <div className="content">
            <h2>Let us find your perfect <span>fitness</span> classes!</h2>
            <div className="search">
              <input type="text" placeholder='Enter your location'/>
              <button>search</button>
            </div>
          </div>
        </div>


        <div className="max-1200 pad_top">
          <div className="flex flex_center categories_st">
            {categories}
          </div>

          <p className="sort"><span>Sort By : </span> Closet Distance <DownArrow /></p>

          <div className="all_cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

        </div>

      </div>
    );
  }

}


function mapStateToProps(state) {
  return {
    userDetail : state.UserDetail

  };
}

export default connect(mapStateToProps)(Main);
