export const processStoreKpis = (today, yesterday, lastWeek) => {
  if (today.length === 0) {
    return {};
  }

  const kpiT = today.filter((kpi) => kpi.category !== 'TOTAL');
  const kpiY = yesterday.filter((kpi) => kpi.category !== 'TOTAL');
  const kpiLW = lastWeek.filter((kpi) => kpi.category !== 'TOTAL');

  const aux = {};

  const kpis = [
    'Contribución',
    'Venta Bruta',
    'Venta Neta',
    'Ticket promedio',
    'Transacciones',
  ];

  kpis.forEach((name) => {
    aux[name] = {};
  });

  kpis.forEach((name) => {
    kpiT.forEach((kpi) => {
      aux[name][kpi.category] = {};
    });

    kpiT.forEach((kpi) => {
      let units;
      let value;
      if (name === 'Contribución') {
        units = '$';
        value = kpi.contribution;
      } else if (name === 'Venta Bruta') {
        units = '$';
        value = kpi.grossSale;
      } else if (name === 'Venta Neta') {
        units = '$';
        value = kpi.netSale;
      } else if (name === 'Ticket promedio') {
        units = '';
        value = kpi.netSale / kpi.transactions;
      } else if (name === 'Transacciones') {
        units = 'unidades';
        value = kpi.transactions;
      }

      aux[name][kpi.category].value = value;
      aux[name][kpi.category].units = units;
      aux[name][kpi.category].name = name;
      aux[name][kpi.category].id = name;
      aux[name][kpi.category].store = kpi.store;
      aux[name][kpi.category].category = kpi.category;
    });

    kpiY.forEach((kpi) => {
      let difference;
      let percentage;

      if (name === 'Contribución') {
        difference = kpi.contribution - aux[name][kpi.category].value;
        percentage = (difference / kpi.contribution) * 100;
      } else if (name === 'Venta Bruta') {
        difference = kpi.grossSale - aux[name][kpi.category].value;
        percentage = (difference / kpi.grossSale) * 100;
      } else if (name === 'Venta Neta') {
        difference = kpi.netSale - aux[name][kpi.category].value;
        percentage = (difference / kpi.netSale) * 100;
      } else if (name === 'Ticket promedio') {
        difference = kpi.netSale / kpi.transactions - aux[name][kpi.category].value;
        percentage = (difference / (kpi.netSale / kpi.transactions)) * 100;
      } else if (name === 'Transacciones') {
        difference = kpi.transactions - aux[name][kpi.category].value;
        percentage = (difference / kpi.transactions) * 100;
      }

      aux[name][kpi.category].variationYNumber = difference;
      aux[name][kpi.category].variationYpercentage = percentage;
    });

    kpiLW.forEach((kpi) => {
      let difference;
      let percentage;

      if (name === 'Contribución') {
        difference = kpi.contribution - aux[name][kpi.category].value;
        percentage = (difference / kpi.contribution) * 100;
      } else if (name === 'Venta Bruta') {
        difference = kpi.grossSale - aux[name][kpi.category].value;
        percentage = (difference / kpi.grossSale) * 100;
      } else if (name === 'Venta Neta') {
        difference = kpi.netSale - aux[name][kpi.category].value;
        percentage = (difference / kpi.netSale) * 100;
      } else if (name === 'Ticket promedio') {
        difference = kpi.netSale / kpi.transactions - aux[name][kpi.category].value;
        percentage = (difference / (kpi.netSale / kpi.transactions)) * 100;
      } else if (name === 'Transacciones') {
        difference = kpi.transactions - aux[name][kpi.category].value;
        percentage = (difference / kpi.transactions) * 100;
      }

      aux[name][kpi.category].variationLWNumber = difference;
      aux[name][kpi.category].variationLWpercentage = percentage;
    });
  });

  return aux;
};

export const processMainKpis = (kpiT, kpiY, kpiLW) => {
  if (kpiT.length === 0) {
    return [];
  }

  let totalY;
  let totalLW;
  let averageTicketY;
  let averageTicketLW;

  if (kpiY.length > 0) {
    totalY = kpiY.find((kpi) => kpi.category === 'TOTAL');
    averageTicketY = totalY.netSale / totalY.transactions;
  }

  if (kpiLW.length > 0) {
    totalLW = kpiLW.find((kpi) => kpi.category === 'TOTAL');
    averageTicketLW = totalLW.netSale / totalLW.transactions;
  }
  const totalT = kpiT.find((kpi) => kpi.category === 'TOTAL');

  const averageTicketT = totalT.netSale / totalT.transactions;

  const kpis = [
    'Contribución',
    'Venta Bruta',
    'Venta Neta',
    'Ticket promedio',
    'Transacciones',
  ];

  const auxMainKpi = [];

  kpis.forEach((name) => {
    let units;
    let valueT;
    let valueY;
    let valueLW;

    if (name === 'Contribución') {
      units = '$';
      valueT = totalT ? totalT.contribution : -1;
      valueY = totalY ? totalY.contribution : -1;
      valueLW = totalLW ? totalLW.contribution : -1;
    } else if (name === 'Venta Bruta') {
      units = '$';
      valueT = totalT ? totalT.grossSale : -1;
      valueY = totalY ? totalY.grossSale : -1;
      valueLW = totalLW ? totalLW.grossSale : -1;
    } else if (name === 'Venta Neta') {
      units = '$';
      valueT = totalT ? totalT.netSale : -1;
      valueY = totalY ? totalY.netSale : -1;
      valueLW = totalLW ? totalLW.netSale : -1;
    } else if (name === 'Ticket promedio') {
      units = '';
      valueT = totalT ? averageTicketT : -1;
      valueY = totalY ? averageTicketY : -1;
      valueLW = totalLW ? averageTicketLW : -1;
    } else if (name === 'Transacciones') {
      units = 'unidades';
      valueT = totalT ? totalT.transactions : -1;
      valueY = totalY ? totalY.transactions : -1;
      valueLW = totalLW ? totalLW.transactions : -1;
    }

    const obj = {
      id: name,
      name,
      store: totalT.store,
      units,
      value: valueT,
      variationYNumber: valueY === -1 || valueT === -1 ? '-' : valueY - valueT,
      variationLWNumber:
        valueLW === -1 || valueT === -1 ? '-' : valueLW - valueT,
      variationYpercentage:
        valueY === -1 || valueT === -1
          ? '-'
          : ((valueY - valueT) / valueY) * 100,
      variationLWpercentage:
        valueLW === -1 || valueT === -1
          ? '-'
          : ((valueLW - valueT) / valueLW) * 100,
    };

    auxMainKpi.push(obj);
  });

  return auxMainKpi;
};
