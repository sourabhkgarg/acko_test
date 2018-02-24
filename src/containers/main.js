import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';


class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {


    return (
      <div className="container">

        <Navbar/>

        <div className="min_height">
          {this.props.children}

        </div>


        <Footer />

      </div>
    );
  }

}


function mapStateToProps(state) {

  return {};


}

export default connect(mapStateToProps)(Main);
