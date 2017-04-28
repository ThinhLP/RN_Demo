import React, { Component } from 'react';
import Dimensions from 'Dimensions';

import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform
} from 'react-native';

import Constant from '../constant/constant.js'

const Circle = (props) => {
  var listStyle = [styles.circle];
  var borderRadius;
  switch (props.size) {
    case 'small':
      listStyle.push(styles.smallCircle);
      borderRadius = defaultDiameter /2
      break;
    case 'medium':
      listStyle.push(styles.mediumCircle);
      borderRadius = defaultDiameter * 1.12/2
      break;
    case 'big':
      listStyle.push(styles.bigCircle);
      borderRadius = defaultDiameter * 1.25/2
      break;
  }

  if (props.rotate === 'left') {
    listStyle.push(styles.circleRotateLeft);
  } else if (props.rotate === 'right') {
    listStyle.push(styles.circleRotateRight);
  }

  return (
    <Image borderRadius={borderRadius} source={require('../resources/images/circle_background2.jpeg')}
        style={listStyle}>
      <Text style={styles.circleText}>{props.title}</Text>
    </Image>);
};

const widthDevice = Constant.size.widthDevice;
const heightDevice = Constant.size.heightDevice;
const bar = Constant.size.bar;
const defaultDiameter = (heightDevice - bar)/7.5

const styles = StyleSheet.create({
  circle: {
    borderWidth: 2,
    borderColor: '#8FC5E1',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
    marginLeft: 20,
    marginBottom: 20,
    backgroundColor: '#1F87AF',
  },
  bigCircle: {
      width: defaultDiameter * 1.25,
      height: defaultDiameter * 1.25,
      borderRadius: defaultDiameter * 1.25/ 2,
  },
  mediumCircle: {
      width: defaultDiameter * 1.12,
      height: defaultDiameter * 1.12,
      borderRadius: defaultDiameter * 1.12/ 2,
  },
  smallCircle: {
      width: defaultDiameter,
      height: defaultDiameter,
      borderRadius: defaultDiameter/2,
  },
  circleRotateLeft: {
    transform: [{
        rotate: '-10deg',
      }]
  },
  circleRotateRight: {
    transform: [{
        rotate: '10deg',
      }]
  },
  circleText: {
    fontSize: 11,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
});

export default Circle;
