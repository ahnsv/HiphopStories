import React, { Component } from 'react';
import { View, Text } from 'react-native';

export interface Props {
	name: string;
}

interface State { 
}

export default class MainScreen extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
