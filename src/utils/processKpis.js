export const processStoreKpis = (today, yesterday, lastWeek) => {
  if (today.length === 0) {
    return {};
  }

  const kpiT = today.filter(
    (kpi) => kpi.category !== 'TOTAL' && kpi.category !== 'POA',
  );

  const kpiY = yesterday.filter(
    (kpi) => kpi.category !== 'TOTAL' && kpi.category !== 'POA',
  );
  const kpiLW = lastWeek.filter(
    (kpi) => kpi.category !== 'TOTAL' && kpi.category !== 'POA',
  );

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

      if (aux[name][kpi.category]) {
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
      }
    });

    kpiLW.forEach((kpi) => {
      let difference;
      let percentage;
      if (aux[name][kpi.category]) {
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
      }
    });
  });

  return aux;
};

function getStore(kpiTotal, kpiPoa) {
  let store;
  store = kpiTotal ? kpiTotal.store : null;
  store = kpiPoa ? kpiPoa.store : null;

  return store;
}

export const processMainKpis = (today, yesterday, lastWeek) => {
  const kpiT = today.filter(
    (kpi) => kpi.category !== 'TOTAL' && kpi.category !== 'POA',
  );
  if (today.length === 0 || kpiT.length === 0) {
    return [];
  }

  let totalY;
  let totalLW;
  let averageTicketY;
  let averageTicketLW;

  const totalT = today.find((kpi) => kpi.category === 'TOTAL');

  const poaT = today.filter((kpi) => kpi.category === 'POA')[0];

  const kpiY = yesterday.filter((kpi) => kpi.category !== 'POA');
  const kpiLW = lastWeek.filter((kpi) => kpi.category !== 'POA');

  if (kpiY.length > 0) {
    totalY = yesterday.find((kpi) => kpi.category === 'TOTAL');
    averageTicketY = totalY ? totalY.netSale / totalY.transactions : null;
  }

  if (kpiLW.length > 0) {
    totalLW = kpiLW.find((kpi) => kpi.category === 'TOTAL');
    averageTicketLW = totalLW ? totalLW.netSale / totalLW.transactions : null;
  }

  const averageTicketT = totalT ? totalT.netSale / totalT.transactions : null;

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
    let poa;

    if (name === 'Contribución') {
      units = '$';
      valueT = totalT ? totalT.contribution : '-';
      valueY = totalY ? totalY.contribution : '-';
      valueLW = totalLW ? totalLW.contribution : '-';
      poa = '-';
    } else if (name === 'Venta Bruta') {
      units = '$';
      valueT = totalT ? totalT.grossSale : '-';
      valueY = totalY ? totalY.grossSale : '-';
      valueLW = totalLW ? totalLW.grossSale : '-';
      poa = '-';
    } else if (name === 'Venta Neta') {
      units = '$';
      valueT = totalT ? totalT.netSale : '-';
      valueY = totalY ? totalY.netSale : '-';
      valueLW = totalLW ? totalLW.netSale : '-';
      poa = poaT.netSale ? poaT.netSale : '-';
    } else if (name === 'Ticket promedio') {
      units = '';
      valueT = totalT ? averageTicketT : '-';
      valueY = totalY ? averageTicketY : '-';
      valueLW = totalLW ? averageTicketLW : '-';
      poa = '-';
    } else if (name === 'Transacciones') {
      units = 'unidades';
      valueT = totalT ? totalT.transactions : '-';
      valueY = totalY ? totalY.transactions : '-';
      valueLW = totalLW ? totalLW.transactions : '-';
      poa = '-';
    }

    const obj = {
      id: name,
      name,
      store: getStore(totalT, poaT),
      units,
      value: valueT,
      poa,
      variationYNumber:
        valueY === '-' || valueT === '-' ? '-' : valueY - valueT,
      variationLWNumber:
        valueLW === '-' || valueT === '-' ? '-' : valueLW - valueT,
      variationYpercentage:
        valueY === '-' || valueT === '-'
          ? '-'
          : ((valueY - valueT) / valueY) * 100,
      variationLWpercentage:
        valueLW === '-' || valueT === '-'
          ? '-'
          : ((valueLW - valueT) / valueLW) * 100,
    };

    auxMainKpi.push(obj);
  });

  return auxMainKpi;
};
