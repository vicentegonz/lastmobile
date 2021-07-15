import * as React from 'react';
import { View } from 'react-native';
import navStyles from '@/assets/styles/navigation';
import { Button, Icon } from '@ant-design/react-native';
import { DrawerActions } from '@react-navigation/native';
import PropTypes from 'prop-types';

export default function DrawerButton(props) {
  return (
    <View>
      <Button
        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
        style={navStyles.menuButtom}
      >
        <Icon name="menu" size="sm" color="black" style={navStyles.drawerIcon} />
      </Button>
    </View>
  );
}

DrawerButton.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
};
