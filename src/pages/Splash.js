import React, { PropTypes } from 'react';
import { Dimensions, Animated,View ,StatusBar} from 'react-native';
import store from 'react-native-simple-store';

const contextTypes = {
  routes: PropTypes.object.isRequired
};

const maxHeight = Dimensions.get('window').height;
const maxWidth = Dimensions.get('window').width;
const splashImg = require('../img/splash.png');

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(1)
    };
  }

  componentDidMount() {
    const { routes } = this.context;
    Animated.timing(this.state.bounceValue, {
      toValue: 1.2,
      duration: 1000
    }).start();
    this.timer = setTimeout(
      () => {
        store.get('isInit').then((isInit) => {
          if (!isInit) {
              //TODO  初始化判断
              store.save('isInit', true);
              routes.tabbar();
          } else {
            routes.tabbar();
          }
        });
      },
      2000
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <View>
          <StatusBar
              hidden={true}
          />
          <Animated.Image
              style={{
                  width: maxWidth,
                  height: maxHeight,
                  transform: [{ scale: this.state.bounceValue }]
              }}
              source={splashImg}
          />
      </View>
    );
  }
}

Splash.contextTypes = contextTypes;

export default Splash;
