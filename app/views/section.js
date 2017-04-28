import React, { Component } from 'react';
import Dimensions from 'Dimensions';

import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  Platform,
} from 'react-native';


import LinearGradient from 'react-native-linear-gradient';
import Circle from './circle.js';
import Constant from '../constant/constant.js'

const imageUrls = [require('../resources/images/line2.png'),
                  require('../resources/images/line3.png'),
                  require('../resources/images/line4.png')];

class Section extends Component {
  constructor(props) {
     super(props);
     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     this.state = {
        dataSource: ds.cloneWithRows(this.props.itemsContent),
     };
  }

  render() {
    var imageTag;
    var index = this.props.index;
    var containerCustom, section;

    if (index != null) {
        imageTag = (
            <View style={styles.borderWrapper}>
                <Image source={imageUrls[index]} style={styles.border} />
            </View>
        );
        containerCustom = {
            top: index === 1 ? -45 : (index + 1) * -30,
            flexBasis: (heightDevice-bar)/ 3 + 35
        };
    }

    var combineContainer = StyleSheet.flatten([styles.container, containerCustom]);
    return (
        <View style={[combineContainer]}>
            {imageTag}
            <LinearGradient colors={this.props.colors} style={styles.section}>
                <Text style={styles.sectionTitle}>{this.props.title}</Text>
                <ListView style={styles.sectionContent}
                    contentContainerStyle={styles.contentContainer}
                    horizontal={true}
                    dataSource={this.state.dataSource}
                    renderRow={(data) => <Circle {...data}/>}
                    showsHorizontalScrollIndicator={false}
                  />
            </LinearGradient>
        </View>
    );
  }
}


const widthDevice = Constant.size.widthDevice;
const heightDevice = Constant.size.heightDevice;
const bar = Constant.size.bar;

var styles = StyleSheet.create({
  container: {
      position: 'relative',
      zIndex: 1000,
      backgroundColor: 'transparent',
      margin:0,
      alignItems: 'stretch',
      flexBasis: (heightDevice-bar)/ 3,
  },
  border: {
      width: widthDevice,
      height: 60,
  },
  borderWrapper: {
      width: widthDevice,
      height: 35,
      margin: 0,
      padding: 0,
  },
  section: {
      height: (heightDevice-bar)/3,
  },
  sectionTitle: {
      color: '#ffffff',
      fontSize: 16,
      backgroundColor: 'transparent',
      marginLeft: 10,
      fontWeight: 'bold',
  },
  sectionContent: {
      flex: 1,
      flexDirection: 'row',
  },
  contentContainer: {
      alignItems: 'center',
      justifyContent: 'center',
  },

});

module.exports = Section;
