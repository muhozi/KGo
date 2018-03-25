import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, StatusBar, Text, TextInput} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView,{Polyline} from 'react-native-maps';
import FBSDK from 'react-native-fbsdk';
import { styles } from '../styles';

const BottomMenu = (props) => (
  <View style={styles.bigMenuBar}>
    <View style={{flex:1}}>
      <Text style={{color:'#fff'}}>{props.title}</Text>
    </View>
  </View>
);

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromLocation:'',
      toLocation:'',
    }
  }
  componentDidMount() {}
  render() {
    return (
      <View style={styles.mapContainer}>
        <StatusBar />
          <View style={styles.searchBar}>
            <View style={styles.topSearchBarIcon}>
              <Icon name="ios-pin-outline" size={28}/>
            </View>
            <View style={styles.topSearchInputContainer}>
              <TextInput
                style={{borderColor: 'gray', flex:8,}}
                onChangeText={(fromLocation) => this.setState({fromLocation})}
                placeholder="From ..."
                value={this.state.fromLocation}
              />
            </View>
          </View>
          <View style={styles.searchBar2}>
            <View style={styles.topSearchBarIcon}>
              <Icon name="ios-remove-circle-outline" size={28}/>
            </View>
            <View style={styles.topSearchInputContainer}>
              <TextInput
                style={{borderColor: 'gray', flex:8,}}
                onChangeText={(toLocation) => this.setState({toLocation})}
                placeholder="To ..."
                value={this.state.toLocation}
              />
            </View>
          </View>
          <View style={styles.bottomBigMenus}>
            <BottomMenu title="Bus stops"/>
            <BottomMenu title="Lines"/>
            <BottomMenu title="Journeys"/>
          </View>
          <MapView
            style={styles.homeMap}
            initialRegion={{
              latitude: parseFloat(-1.935114),
              longitude: parseFloat(30.082111),
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
