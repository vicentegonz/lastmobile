import React from 'react';
import { PropTypes } from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';
import { Card, WhiteSpace } from '@ant-design/react-native';
import CardText from '@/components/CardText.jsx';
import styles from '@/assets/styles/index.jsx';
import MoreInformation from '@/components/MoreInformation.jsx';

export default function ServiceCard({ navigation, service }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Servicios')}>
      <WhiteSpace size="md" />
      <Card style={styles.cardContent}>
        <Card.Header title={service.name} extra={<MoreInformation />} />
        <Card.Body style={styles.kpiCardBody}>
          <View>
            {service.value !== undefined ? (
              <Text style={styles.serviceCardText}>{service.value}</Text>
            ) : null}
          </View>
          <View style={styles.kpiDifferences}>
            <View>
              <CardText
                variationNumber={service.variationYNumber}
                variationPercentage={service.variationYpercentage}
              />
              <Text>Ayer</Text>
            </View>

            <View>
              <CardText
                variationNumber={service.variationLWNumber}
                variationPercentage={service.variationLWpercentage}
              />
              <Text>Semana pasada</Text>
            </View>
          </View>
        </Card.Body>
      </Card>
    </TouchableOpacity>
  );
}

ServiceCard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  service: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
    variationLWNumber: PropTypes.number,
    variationLWpercentage: PropTypes.number,
    variationYNumber: PropTypes.number,
    variationYpercentage: PropTypes.number,
  }),
};

// Later we will have to implement something for loading...
ServiceCard.defaultProps = {
  service: PropTypes.shape({
    value: 0,
    name: 'Nota Final',
    variationLWNumber: 0,
    variationLWpercentage: 0,
    variationYNumber: 0,
    variationYpercentage: 0,
  }),
};
