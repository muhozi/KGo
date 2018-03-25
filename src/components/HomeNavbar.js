import React, {Component} from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import PropTypes from "prop-types";
import Icon from 'react-native-vector-icons/Ionicons';
import {styles,colors} from '../styles';
export default class HomeNavbar extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <View>
        <View style={styles.navbar}>
          {/*<TouchableOpacity onPress={()=> this.setState({search:true})} style={{flex:1,paddingLeft:15,}}>
            <View>
              <Text style={{color:colors.primary,fontWeight:'bold',}}>
                <Icon name="md-search" size={30} color='#333'/>
              </Text>
            </View>
          </TouchableOpacity>*/}
          <View style={{flex:8,paddingRight:10}}><Text style={styles.navbarTitle}>{this.props.title}</Text></View> 
          {/*<TouchableOpacity onPress={()=> alert(this.props.onRight)}>
            <View style={{flex:1}}><Text style={{color:'#333'}}>Bet</Text></View>
          </TouchableOpacity>*/}
        </View>
      </View>
    );
  }
}
HomeNavbar.propTypes = {
  onRight: PropTypes.func,
};