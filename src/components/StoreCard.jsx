import React from 'react';
import { useSelector } from 'react-redux';
import { PropTypes, oneOfType } from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';
import { Card, Icon } from '@ant-design/react-native';
import styles from '@/assets/styles/index.jsx';

export default function StoreCard({ navigation, idStore }) {
  const store = useSelector((state) => state.store.storeObjects)[idStore];

  const storeIcon = <Icon name="shop" size="md" color="black" />;

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Tienda')}>
        <Card style={styles.cardContainer}>
          <Card.Header
            title={`Tienda ${idStore}`}
            thumbStyle={styles.thumbIcon}
            thumb={storeIcon}
          />
          <Card.Body>
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>{`Dirección: ${store.address}`}</Text>
              <Text style={styles.cardText}>{`Zona: ${store.zone}`}</Text>
            </View>
          </Card.Body>
        </Card>
      </TouchableOpacity>
    </View>
  );
}

StoreCard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  idStore: oneOfType([PropTypes.number]),
};

StoreCard.defaultProps = {
  idStore: undefined,
};
