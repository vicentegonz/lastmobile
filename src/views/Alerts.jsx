import React from 'react';
import { StatusBar, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { WhiteSpace, Pagination } from '@ant-design/react-native';
import AlertCard from '@/components/AlertCard.jsx';
import { incrementByAmount } from '@/store/alertSlice';
import alertsStyles from '@/assets/styles/alerts';

export default function Alerts() {
  const dispatch = useDispatch();
  const Currentpage = useSelector((state) => state.alert.page);
  const totalPages = useSelector((state) => state.alert.totalPages);
  const pageAlerts = useSelector((state) => state.alert.pageAlerts);

  const locale = {
    prevText: '<',
    nextText: '>',
  };

  const alerts = pageAlerts.map((alert) => (
    <AlertCard key={alert.id} alert={alert} />
  ));

  return (
    <View style={alertsStyles.alertsView}>
      <StatusBar backgroundColor="#052D4C" />

      <WhiteSpace size="md" />
      {alerts.length > 0 ? (
        <View>{alerts}</View>
      ) : (
        <View style={alertsStyles.alertWarning}>
          <Text style={alertsStyles.alertWarningText}>
            No hay alertas para mostrar.
          </Text>
        </View>
      )}
      <WhiteSpace size="md" />
      {alerts.length > 0 ? (
        <View style={alertsStyles.alertPagination}>
          <Pagination
            total={totalPages}
            locale={locale}
            current={Currentpage}
            onChange={(page) => {
              dispatch(incrementByAmount(page));
            }}
            responsive
          />
          <WhiteSpace size="sm" />
        </View>
      ) : null}
    </View>
  );
}
