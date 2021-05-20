import React, { useEffect } from 'react';
import { fetchStores } from '@/store/storeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { PropTypes, oneOfType } from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';
import { Card, Icon } from '@ant-design/react-native';
import styles from '@/assets/styles/index.jsx';

export default function StoreCard({ navigation, idStore }) {
  const dispatch = useDispatch();
  const address = useSelector((state) => state.store.address);
  const zone = useSelector((state) => state.store.zone);

  useEffect(() => {
    if (idStore !== undefined) {
      dispatch(fetchStores(idStore));
    }
  }, [dispatch, idStore]);

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
              <Text style={styles.cardText}>{`Dirección: ${address}`}</Text>
              <Text style={styles.cardText}>{`Zona: ${zone}`}</Text>
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
