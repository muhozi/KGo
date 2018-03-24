import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Actions } from 'react-native-router-flux';
import { AccessToken } from 'react-native-fbsdk';

class Splash extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    setTimeout(() => {
      // Actions.join({ type: 'reset' });
      AccessToken.getCurrentAccessToken().then(data => {
        if (data==null) {
          Actions.join({ type: 'reset' });
        }
        else{
          Actions.app({ type: 'reset' });
        }
        
      });
    }, 2000);
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Animatable.Image
          animation="fadeIn"
          source={require('../assets/images/icon.png')}
          style={{ width: 150, height: 150 }}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b85454',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
