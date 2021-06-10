import React from 'react';
import { PropTypes } from 'prop-types';
import { View, Text } from 'react-native';
import { Card, WhiteSpace } from '@ant-design/react-native';
import styles from '@/assets/styles/index.jsx';
import KpiCardText from '@/components/KpiCardText.jsx';

export default function KpiCard({ kpi }) {
  return (
    <View>
      <WhiteSpace size="md" />
      <Card style={styles.kpiCardContainer}>
        <Card.Header title={kpi.name} />
        <Card.Body style={styles.kpiCardBody}>
          <View>
            {kpi.value !== undefined ? (
              <Text style={styles.kpiCardValue}>{`$${kpi.value} M`}</Text>
            ) : null}
          </View>
          <View style={styles.kpiDifferences}>
            <View>
              <KpiCardText variation={kpi.differnceYesterday} />
              <Text>Ayer</Text>
            </View>

            <View>
              <KpiCardText variation={kpi.differnceLastWeek} />
              <Text>Semana pasada</Text>
            </View>
          </View>
        </Card.Body>
      </Card>
    </View>
  );
}

KpiCard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  kpi: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    differnceYesterday: PropTypes.number.isRequired,
    differnceLastWeek: PropTypes.number.isRequired,
  }).isRequired,
};
