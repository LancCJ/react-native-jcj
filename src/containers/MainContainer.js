import React from 'react';
import { connect } from 'react-redux';
//import CodePush from 'react-native-code-push';
import { bindActionCreators } from 'redux';
import Main from '../pages/Main';

class MainContainer extends React.Component {
  static componentDidMount() {
    // CodePush.sync({
    //   deploymentKey: 'RGOUfyINiLicZnld67aD0nrbRvyLV1Ifekvul',
    //   updateDialog: {
    //     optionalIgnoreButtonLabel: '稍后',
    //     optionalInstallButtonLabel: '后台更新',
    //     optionalUpdateMessage: 'iReading有新版本了，是否更新？',
    //     title: '更新提示'
    //   },
    //   installMode: CodePush.InstallMode.ON_NEXT_RESTART
    // });
  }

  render() {
    return <Main {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
