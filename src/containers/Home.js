import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Animated,
  StatusBar,
  Image,
} from 'react-native';
// import * as Animatable from 'react-native-animatable';
import {Actions} from "react-native-router-flux";
import Icon from 'react-native-vector-icons/FontAwesome';
import FBSDK from 'react-native-fbsdk';
const {
  GraphRequest,
  GraphRequestManager,
  LoginButton,
} = FBSDK;
const infoRequest = new GraphRequest(
  '/me',
  null,
  this._responseInfoCallback,
);
class Home extends Component {
  constructor(props) {
    super(props);
    // this.state = {progress: new Animated.Value(0),};
  }
  componentDidMount() {
    // Animated.timing(this.state.progress, {
    //   toValue: 1,
    //   duration: 5000,
    // }).start();
    // this.animation.play()
    new GraphRequestManager().addRequest(infoRequest).start();

  }
  _responseInfoCallback(error: ?Object, result: ?Object) {
    if (error) {
      alert('Error fetching data: ' + error.toString());
    } else {
      alert('Success fetching data: ' + result.toString());
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <View style={styles.logo}>
          {/*<Animatable.Image 
            animation="zoomIn"
            source={require('../assets/images/logo.png')} 
            style={{width:150,height:150}}
          />*/}
          <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + result.error);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                alert("Login was successful with permissions: " + result.grantedPermissions)
              }
            }
          }
          onLogoutFinished={() => alert("User logged out")}/>
          <Text>KGo</Text>
        </View>
        <View style={{position: 'absolute',bottom: 30,}}>
          <Text style={{fontSize: 10, color: 'rgba(18, 41, 72, 0.8)'}}>
            KGo
          </Text>
        </View>
      </View>
    );
  }
}

function mapStateToProps (state) {
  return {
    // appData: state.dataApp,
    // count: state.counter
  }
}

function mapDispatchToProps (dispatch) {
  return {
    // fetchData: () => dispatch(fetchData()),
    // increment: () => dispatch(increment())
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    marginBottom: 20,
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
