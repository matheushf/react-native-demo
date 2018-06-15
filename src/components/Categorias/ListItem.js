import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from '../shared/';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {

  onRowPress() {
    Actions.employeeCreate({ categoria: this.props.categoria });
  }

  render() {
    const { nome } = this.props.categoria;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {nome}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

export default ListItem;