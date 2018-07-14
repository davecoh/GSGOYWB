import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import {colorPalette} from './constants'

export default class Card extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {text:""};
  }
  
  getCardColor = () => {
    return colorPalette[this.props.index % colorPalette.length];
  };
  
  render(){
    
    const extraStyle = StyleSheet.flatten([styles.cardDefaults, {backgroundColor: this.getCardColor()}]);
    const {text} = this.props;
    return (
      <View style={extraStyle}>
        <Text>
          {text}
        </Text>
        <TextInput
          style={styles.textDefaults}
          placeholder="Type here to translate!"
          onChangeText={(value) => this.setState({value})}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardDefaults:
    {
      flex:1
    },
  textDefaults:{
    height:40
  }
});
