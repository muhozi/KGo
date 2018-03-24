import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
class Destinations extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <View style={styles.logo}>
          <Text>KGo</Text>
        </View>
        <View style={{ position: 'absolute', bottom: 30 }}>
          <Text style={{ fontSize: 10, color: 'rgba(18, 41, 72, 0.8)' }}>KGo</Text>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
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

export default connect(mapStateToProps, mapDispatchToProps)(Destinations);
