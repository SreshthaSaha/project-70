import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyleSheet ,Alert} from 'react-native';

const MyHeader = props => {
  return (
    <Header
    leftComponent = {<Icon name='bars' type='font-awesome' color='#696969'/>}
      centerComponent={{ text: props.title, style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
      backgroundColor = "#00fcb9"
    />
  );
};

export default MyHeader;