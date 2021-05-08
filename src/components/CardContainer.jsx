import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import { Card } from '@ant-design/react-native';
import styles from '@/assets/styles/index.jsx';
import CardContent from './CardContent.jsx';

// eslint-disable-next-line object-curly-newline
export default function CardContainer({ icon, title, tag, navigation }) {
  let url = '';
  if (tag === 'shop') {
    url = 'Shop';
  } else if (tag === 'event') {
    url = 'Event';
  } else {
    url = 'Contact';
  }

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(url)}>
        <Card style={styles.cardContainer}>
          <Card.Header
            title={title}
            thumbStyle={styles.thumbIcon}
            thumb={icon}
          />
          <CardContent tag={tag} />
        </Card>
      </TouchableOpacity>
    </View>
  );
}

CardContainer.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
