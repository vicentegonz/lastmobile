import React from 'react';
import { PropTypes } from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';
import { Card, WhiteSpace } from '@ant-design/react-native';
import styles from '@/assets/styles/index.jsx';

export default function KpiCard({ navigation, kpi }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Evento')}>
      <WhiteSpace size="md" />
      <Card style={styles.kpiCardContainer}>
        <Card.Header title={kpi.name} />
        <Card.Body>
          <View style={styles.cardContent}>
            {kpi.value !== undefined ? (
              <Text adjustsFontSizeToFit style={styles.kpiCardText}>
                {kpi.value}
              </Text>
            ) : null}
          </View>
        </Card.Body>
      </Card>
    </TouchableOpacity>
  );
}

KpiCard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  kpi: PropTypes.shape({
    value: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
