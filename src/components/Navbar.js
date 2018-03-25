import React from 'react';
import {Text,View} from 'react-native';
import PropTypes from "prop-types";
import {styles} from '../styles';
export default class Navbar extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <View>
        <View style={styles.navbar}>
          <View style={{flex:8,paddingRight:10}}><Text style={styles.navbarTitle}>{this.props.title}</Text></View> 
        </View>
      </View>
    );
  }
}
Navbar.propTypes = {
  onRight: PropTypes.func,
};