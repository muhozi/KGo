import React, {Component} from 'react';
import PropTypes from "prop-types";
import {View,Text} from 'react-native';
import { Router, Scene, Route,Drawer, Modal, Stack,Tabs} from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import Splash from './containers/Splash';
import Home from './containers/Home';
import Destinations from './containers/Destinations';
import reducers from './reducers';
import ConfigureStore from './libs/ConfigureStore';
import {TabIcon} from './components';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles'
//import {Tab} from './components';
// import {
//   setCustomView,
//   setCustomTextInput,
//   setCustomText,
//   setCustomImage,
//   // setCustomTouchableOpacity
// } from 'react-native-global-props';
const RouterWithRedux = connect()(Router);
const store = ConfigureStore();
export default class App extends Component{
  render(){
    return (
      <View style={{ flex: 1 }}>
      <Provider store={store}>
      
      
        <RouterWithRedux>
        <Modal key="hola" hideNavBar>
          <Scene key="splash" component={Splash} hideNavBar initial/>
          <Tabs key="dashboard"
          // tabBarComponent={Tab}
          tabBarPosition="bottom"
          swipeEnabled={true}
          showLabel={false}
          //lazy={true}
          inactiveBackgroundColor='rgb(233, 233, 233)'
          activeBackgroundColor='#3f8088'
          tabBarStyle={{borderTopWidth:0}}
          >
                  <Scene
                    key="home"
                    component={Home}
                    title="Home"
                    icon={TabIcon}
                    iconImg="ios-paper"
                    hideNavBar={false}
                    // navBar={Navbar}
                  />
                  <Scene
                    key="destinations"
                    component={Destinations}
                    title="Destinations"
                    icon={TabIcon}
                    iconImg="ios-paper"
                    // navBar={Navbar}
                  />
                  {/*<Scene
                    key="bet"
                    component={Bet}
                    title="Bet"
                    icon={TabIcon}
                    iconImg="md-football"
                    navBar={Navbar}
                  />
                  <Scene
                    key="results"
                    component={Results}
                    title="Results"
                    icon={TabIcon}
                    iconImg="md-trophy"
                    navBar={Navbar}
                  />
                  <Scene
                    key="profile"
                    component={Profile}
                    title="Me"
                    icon={TabIcon}
                    iconImg="ios-person"
                    navBar={Navbar}
                  />*/}
          </Tabs>
          </Modal>
        </RouterWithRedux>
        
      </Provider>
      </View>
    );
  }
}