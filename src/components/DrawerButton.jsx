import * as React from 'react';
import { View } from 'react-native';
import styles from '@/assets/styles/index.jsx';
import { Button, Icon } from '@ant-design/react-native';
import { DrawerActions } from '@react-navigation/native';
import PropTypes from 'prop-types';

export default function DrawerButton(props) {
  return (
    <View>
      <Button
        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
        style={styles.menuButtom}
      >
        <Icon name="menu" size="sm" color="black" style={styles.icon} />
      </Button>
    </View>
  );
}

DrawerButton.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
};
