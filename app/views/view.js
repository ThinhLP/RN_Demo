import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import {
  Text,
  View,
  Image,
} from 'react-native';

import Section from'./section.js';

var sectionItems = require('../resources/data/items.js');
var sectionItems2 = require('../resources/data/items2.js');

module.exports = React.createClass({
  render() {
    return (
      <View>
          <Section title='おすすめ' itemsContent={sectionItems}
            colors={['#259ECD', '#588FC0']}
          />
          <Section index={1} title='新着' itemsContent={sectionItems2}
          colors={['#2F9FD1', '#4B6790']}
          />
          <Section index={2} title='お手持ちのデバイスで' itemsContent={sectionItems2}
          colors={['#2A94C3', '#3E3F76']}
          />
      </View>
    );
  }
});
