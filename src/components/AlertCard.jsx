import React from 'react';
import { PropTypes } from 'prop-types';
import { View, Text } from 'react-native';
import { Card, Icon, WhiteSpace } from '@ant-design/react-native';
import alertsStyles from '@/assets/styles/alerts';

export default function AlertCard({ alert }) {
  const alertIcon = <Icon name="alert" size="md" color="black" />;

  return (
    <View>
      <WhiteSpace size="md" />
      <Card style={alertsStyles.alertCard}>
        <Card.Header
          title={`Alerta ${alert.id}`}
          thumbStyle={alertsStyles.alertThumbIcon}
          thumb={alertIcon}
          extra={`Tienda: ${alert.store}`}
        />
        <Card.Body>
          <View style={alertsStyles.alertContent}>
            {alert.data.date !== undefined ? (
              <Text style={alertsStyles.alertCardText}>
                {`Fecha: ${alert.data.date}`}
              </Text>
            ) : null}
            <Text style={alertsStyles.alertCardText}>
              {`Descripción: ${alert.data.event}`}
            </Text>
          </View>
        </Card.Body>
      </Card>
    </View>
  );
}

AlertCard.propTypes = {
  alert: PropTypes.shape({
    data: PropTypes.shape({
      date: PropTypes.string,
      event: PropTypes.string.isRequired,
    }),
    id: PropTypes.number.isRequired,
    store: PropTypes.number.isRequired,
  }).isRequired,
};
