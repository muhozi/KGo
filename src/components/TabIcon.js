import React from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, Button,TouchableHighlight} from "react-native";
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles,colors} from '../styles'
const propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
  iconImg: PropTypes.string,
};
const TabIcon = (props) => {
  return (
    <View style={{alignItems:'center'}}>
      <Icon name={props.iconImg} size={20} color={props.focused?'#fff':'#333'}/>
      <Text style={{alignItems:'center',fontSize:12,justifyContent:'center',color:props.focused?'#fff':'#333'}}>{props.title}</Text>
    </View>
    );
};
export default TabIcon;