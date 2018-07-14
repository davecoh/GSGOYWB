import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Card from '../inputs/Card'
import {cards} from './models';

export default class MainContainer extends React.Component {

  renderCards = () => {
    
    return cards.map((card, index) =>
           {
            return(
              <Card
                key={index}
                text={card.text}
                index={index}
              />);
          });
  };
// {
//   this.renderCards()
// }
  render(){
    let count = 0;
    return (
      <View
        style={styles.containerDefaults}>
        {
        this.renderCards()
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerDefaults:
  {
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    paddingTop:25
  }
});
