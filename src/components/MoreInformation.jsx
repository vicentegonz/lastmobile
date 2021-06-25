import * as React from 'react';
import { Icon } from '@ant-design/react-native';
import styles from '@/assets/styles/index';

export default function MoreInformation() {
  return (
    <Icon
      name="right-square"
      size="md"
      color="#05426F"
      style={styles.informationIcon}
    />
  );
}
