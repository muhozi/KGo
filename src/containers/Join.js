import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import FBSDK from 'react-native-fbsdk';

const { LoginButton } = FBSDK;

class Join extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Image
          source={require('../assets/images/icon.png')}
          style={{ width: 150, height: 150, marginBottom: 80 }}
        />
        <View style={styles.logo}>
          <LoginButton
            publishPermissions={['publish_actions']}
            onLoginFinished={(error, result) => {
              if (error) {
                this.setState({ message: 'Something went wrong' });
              } else if (result.isCancelled) {
                this.setState({ message: 'Login cancelled' });
              } else {
                Actions.app({ type: 'reset' });
              }
            }}
            onLogoutFinished={() => alert('User logged out')}
          />
        </View>
        <View style={{ position: 'absolute', bottom: 30 }}>
          <Text style={{ fontSize: 13, color: '#c9c9c9' }}>Kigali Go</Text>
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Join);
