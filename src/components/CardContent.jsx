import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from '@/assets/styles/index.jsx';
import { Card } from '@ant-design/react-native';

const textTags = {
  event: 'Event Data',
  shop: 'Relevant Data Shop',
  contact: 'Info Contact',
};

export default function CardContent({ tag }) {
  return (
    <Card.Body>
      <View style={styles.cardContent}>
        <Text style={styles.cardText}>{textTags[tag]}</Text>
      </View>
    </Card.Body>
  );
}

CardContent.propTypes = {
  tag: PropTypes.string.isRequired,
};
