/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Dimensions from 'Dimensions';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  StatusBar,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

var MainSection = require('./app/views/view.js');

export default class View1 extends Component {
  state = {
    animated: true,
    backgroundColor: '#249ECD',
  };

  render() {

    return (

        <LinearGradient colors={['#249ECD', '#3E3F76']} style={styles.container}>
            <StatusBar backgroundColor={this.state.backgroundColor} />
            {/* Structure of Tab Bar */}
            <View style={styles.tabBar}>
                    <TouchableHighlight style={styles.tabBarButton}>
                        <Image style={styles.tabBarIcon} source={require('./app/resources/images/home.png')} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.tabBarButton}>
                        <Image style={styles.tabBarIcon} source={require('./app/resources/images/download.png')} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.tabBarButton}>
                        <Image style={styles.tabBarIcon} source={require('./app/resources/images/plus.png')} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.tabBarButton}>
                        <Image style={styles.tabBarIcon} source={require('./app/resources/images/pin.png')} />
                    </TouchableHighlight>
             </View>

             {/* Structure of 2 buttons  */}
             <TouchableHighlight style={styles.buttonBars}>
                  <Image style={styles.bars} source={require('./app/resources/images/home.png')}/>
             </TouchableHighlight>
             <TouchableHighlight style={styles.buttonSearch}>
                  <Image style={styles.search} source={require('./app/resources/images/search.png')}/>
             </TouchableHighlight>

             {/* View contains 2 buttons */}
             <View style={styles.buttons}>
             </View>

             {/* Border for view "Buttons" */}
             <Image style={styles.borderTop} source={require('./app/resources/images/line1.png')} />
             <Image style={styles.borderBottom} source={require('./app/resources/images/line2.png')} />

             {/* Content */}
             <MainSection style={styles.mainSection} />

        </LinearGradient>

    );
  }
}

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

const styles = StyleSheet.create({
  test: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10000,
  },
  container: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: 'transparent',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 30,
  },
  tabBarButton: {
    width: 60,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarIcon: {
    width: 25,
    height: 25,
  },

  buttons: {
    height: 40,
    backgroundColor: '#2187B0',
    position: 'relative',
    zIndex: 1,
  },

  borderTop: {
    margin: 0,
    width: widthDevice,
    height: 60,
    top: 60,
    position: 'absolute',
    zIndex: 100,
  },
  borderBottom: {
    margin: 0,
    width: widthDevice,
    height: 60,
    position: 'absolute',
    zIndex: 100,
    top: 95,
  },
  bars: {
    width: 20,
    height: 20,
  },
  buttonBars: {
    position: 'absolute',
    top: 80,
    left: 15,
    zIndex: 1000
  },
  search: {
    width: 20,
    height: 20,
  },
  buttonSearch: {
    position: 'absolute',
    top: 80,
    right: 15,
    zIndex: 1000
  },

  mainSection: {
    position: 'relative',
    zIndex: 100,
  },
});

AppRegistry.registerComponent('View1', () => View1);
