import React from 'react';
import { PropTypes } from 'prop-types';
import { View, Text } from 'react-native';
import { Card, WhiteSpace } from '@ant-design/react-native';
import kpiStyles from '@/assets/styles/kpis';
import MainKPIValue from '@/components/MainKPIValue.jsx';
import KpiCategoryCardText from '@/components/KpiCategoryCardText.jsx';

export default function KpiCategory({ kpi }) {
  return (
    <View>
      <Card style={kpiStyles.categoryKpiCard}>
        <Card.Header title={kpi.category} />
        <Card.Body>
          {kpi.value !== undefined ? (
            <MainKPIValue value={kpi.value} unit={kpi.units} />
          ) : null}

          <WhiteSpace size="md" />

          <View style={kpiStyles.categoryKpiDifferences}>
            <View>
              <Text style={kpiStyles.categoryText}>Ayer</Text>
              <KpiCategoryCardText
                variationN={kpi.variationYNumber ? kpi.variationYNumber : '-'}
                variationP={
                  kpi.variationYpercentage ? kpi.variationYpercentage : '-'
                }
                unit={kpi.units}
              />
            </View>

            <View>
              <Text style={kpiStyles.categoryText}>Semana pasada</Text>
              <KpiCategoryCardText
                variationN={kpi.variationLWNumber ? kpi.variationLWNumber : '-'}
                variationP={
                  kpi.variationLWpercentage ? kpi.variationLWpercentage : '-'
                }
                unit={kpi.units}
              />
            </View>
          </View>
        </Card.Body>
      </Card>
      <WhiteSpace size="md" />
    </View>
  );
}

KpiCategory.propTypes = {
  kpi: PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    value: PropTypes.number,
    units: PropTypes.string,
    variationYNumber: PropTypes.number,
    variationYpercentage: PropTypes.number,
    variationLWNumber: PropTypes.number,
    variationLWpercentage: PropTypes.number,
  }),
};

KpiCategory.defaultProps = {
  kpi: PropTypes.shape({
    name: '',
    value: 0,
    units: '',
    variationYNumber: 0,
    variationYpercentage: 0,
    variationLWNumber: 0,
    variationLWpercentage: 0,
  }),
};
