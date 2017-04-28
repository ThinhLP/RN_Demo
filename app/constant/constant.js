import React from 'react';
import Dimensions from 'Dimensions';
import {
  Platform,
} from 'react-native';

const Constant = {

  size: {
    widthDevice: Dimensions.get('window').width,
    heightDevice: (Platform.OS === 'ios') ? Dimensions.get('window').height : Dimensions.get('window').height - 25 ,
    bar: (Platform.OS === 'ios') ? 100 : 80,
  },
};

export default Constant;
