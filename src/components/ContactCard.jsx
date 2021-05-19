import React from 'react';
import { PropTypes } from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';
import { Card, Icon } from '@ant-design/react-native';
import styles from '@/assets/styles/index.jsx';

export default function ContactCard({ title, navigation }) {
  const contactIcon = <Icon name="team" size="md" color="black" />;
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
        <Card style={styles.cardContainer}>
          <Card.Header
            title={title}
            thumbStyle={styles.thumbIcon}
            thumb={contactIcon}
          />
          <Card.Body>
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>Contact information</Text>
            </View>
          </Card.Body>
        </Card>
      </TouchableOpacity>
    </View>
  );
}

ContactCard.propTypes = {
  title: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
