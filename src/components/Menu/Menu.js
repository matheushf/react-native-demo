import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleMenu } from '../../actions';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
} from 'react-native';

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'red',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  },
});

class Menu extends Component {

  constructor() {
    super();

    this.state = {
      isOpen: false,
      selectedItem: ''
    }
  }

  onMenuItemSelected = item =>
    this.props.toggleMenu({
      isOpen: false,
      selectedItem: item
    });

  render() {
    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{ uri }}
          />
          <Text style={styles.name}>Your name</Text>
        </View>

        <Text
          onPress={() => this.onMenuItemSelected('About')}
          style={styles.item}
        >
          About
        </Text>

        <Text
          onPress={() => this.onMenuItemSelected('Contacts')}
          style={styles.item}
        >
          Contacts
        </Text>
      </ScrollView>
    );
  }
}

/* export default function Menu({ isOpen, onItemSelected }) {
} */

const mapStateToProps = state => {
  console.log('mapStateToProps Categorias ', state);
  const { menu } = state;

  return { menu };
}

// export default Categorias;
export default connect(mapStateToProps, { toggleMenu })(Menu);