import React from 'react';
import { StyleSheet, Navigator } from 'react-native';

import { Router, Scene, ActionConst } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Splash from '../pages/Splash';
import MainContainer from '../containers/MainContainer';
import Apps from '../pages/Apps';
import Setting from '../pages/Setting';
import Test from '../pages/Test';
import TabIcon from '../components/TabIcon';

const RouterWithRedux = connect()(Router);
const backButton = require('../img/arrow_left.png');

const getSceneStyle = (props, computedProps) => {
  const style = {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null
  };
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar
      ? 0
      : Navigator.NavigationBar.Styles.General.TotalNavHeight;
    style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};

class App extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <RouterWithRedux
        getSceneStyle={getSceneStyle}
        navigationBarStyle={styles.navBar}
        titleStyle={styles.navBarTitle}
        backButtonImage={backButton}
      >
        <Scene key="root">
          <Scene
            key="splash"
            component={Splash}
            hideNavBar
            hideTabBar
            initial
          />
          <Scene
              key="test"
              component={Test}
              hideTabBar
              title="测 试"
          />
          <Scene
            key="tabbar"
            tabs
            pressOpacity={0.8}
            type={ActionConst.REPLACE}
          >
            <Scene
              key="main"
              component={MainContainer}
              hideNavBar
              title="首 页"
              icon={TabIcon}
              iconName="md-home"
            />

            <Scene
              key="apps"
              component={Apps}
              title="功 能"
              icon={TabIcon}
              iconName="md-apps"
            />

            <Scene
              key="setting"
              component={Setting}
              title="设 置"
              icon={TabIcon}
              iconName="md-cog"
            />


          </Scene>
        </Scene>
      </RouterWithRedux>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#5044EA'
  },
  navBarTitle: {
    color: '#fff',
    fontSize: 20
  }
});

export default App;
