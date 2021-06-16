import * as React from 'react';
import styles from '@/assets/styles/index.jsx';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

export default function MoreInformation({ message }) {
  return <Text style={styles.moreInformation}>{message}</Text>;
}

MoreInformation.propTypes = {
  message: PropTypes.string.isRequired,
};
