import React, { Component } from 'react';
import { View } from 'react-native';
import { Router, Scene, Modal, Tabs } from 'react-native-router-flux';
import {
  setCustomTextInput,
} from 'react-native-global-props';
import { connect, Provider } from 'react-redux';
import Splash from './containers/Splash';
import Home from './containers/Home';
import Join from './containers/Join';
import Ask from './containers/Ask';
import Profile from './containers/Profile';
import ConfigureStore from './libs/ConfigureStore';
import { TabIcon, Navbar, HomeNavbar } from './components';

const RouterWithRedux = connect()(Router);
const store = ConfigureStore();
const customTextInputProps = {
  underlineColorAndroid: 'rgba(0,0,0,0)',
};
setCustomTextInput(customTextInputProps);
export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Provider store={store}>
          <RouterWithRedux>
            <Modal key="hola" hideNavBar>
              <Scene key="splash" component={Splash} hideNavBar initial />
              <Scene key="join" component={Join} title="Join" hideNavBar={true} />
              <Tabs
                key="app"
                tabBarPosition="bottom"
                swipeEnabled={true}
                showLabel={false}
                inactiveBackgroundColor="rgb(233, 233, 233)"
                activeBackgroundColor="#3f8088"
                tabBarStyle={{ borderTopWidth: 0 }}
              >
                <Scene
                  key="home"
                  component={Home}
                  title="Home"
                  icon={TabIcon}
                  iconImg="ios-home-outline"
                  hideNavBar={true}
                  navBar={HomeNavbar}
                />
                <Scene
                  key="chat"
                  component={Ask}
                  title="Ask"
                  icon={TabIcon}
                  iconImg="ios-chatboxes-outline"
                  hideNavBar={false}
                  navBar={Navbar}
                />
                <Scene
                  key="work"
                  component={Profile}
                  title="My profile"
                  icon={TabIcon}
                  iconImg="ios-person"
                  navBar={Navbar}
                />
              </Tabs>
            </Modal>
          </RouterWithRedux>
        </Provider>
      </View>
    );
  }
}
