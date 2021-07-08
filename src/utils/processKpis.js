/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
export const processStoreKpis = (kpiT, kpiY, kpiLW) => {
  const aux = {};

  const kpis = [
    'Contribución',
    'Venta Gross',
    'Venta Neta',
    'Ticket promedio',
    'Transacciones',
  ];

  kpis.map((name) => {
    aux[name] = {};
  });

  kpis.map((name) => {
    kpiT.map((kpi) => {
      aux[name][kpi.category] = {};
    });

    kpiT.map((kpi) => {
      let units;
      let value;
      if (name === 'Contribución') {
        units = '$';
        value = kpi.contribution;
      } else if (name === 'Venta Gross') {
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

    kpiY.map((kpi) => {
      let difference;
      let percentage;

      if (name === 'Contribución') {
        difference = kpi.contribution - aux[name][kpi.category].value;
        percentage = difference / kpi.contribution / 100;
      } else if (name === 'Venta Gross') {
        difference = kpi.grossSale - aux[name][kpi.category].value;
        percentage = difference / kpi.grossSale / 100;
      } else if (name === 'Venta Neta') {
        difference = kpi.netSale - aux[name][kpi.category].value;
        percentage = difference / kpi.netSale / 100;
      } else if (name === 'Ticket promedio') {
        difference = kpi.netSale / kpi.transactions - aux[name][kpi.category].value;
        percentage = difference / (kpi.netSale / kpi.transactions) / 100;
      } else if (name === 'Transacciones') {
        difference = kpi.transactions - aux[name][kpi.category].value;
        percentage = difference / kpi.transactions / 100;
      }

      aux[name][kpi.category].variationYNumber = difference;
      aux[name][kpi.category].variationYpercentage = percentage;
    });

    kpiLW.map((kpi) => {
      let difference;
      let percentage;

      if (name === 'Contribución') {
        difference = kpi.contribution - aux[name][kpi.category].value;
        percentage = difference / kpi.contribution / 100;
      } else if (name === 'Venta Gross') {
        difference = kpi.grossSale - aux[name][kpi.category].value;
        percentage = difference / kpi.grossSale / 100;
      } else if (name === 'Venta Neta') {
        difference = kpi.netSale - aux[name][kpi.category].value;
        percentage = difference / kpi.netSale / 100;
      } else if (name === 'Ticket promedio') {
        difference = kpi.netSale / kpi.transactions - aux[name][kpi.category].value;
        percentage = difference / (kpi.netSale / kpi.transactions) / 100;
      } else if (name === 'Transacciones') {
        difference = kpi.transactions - aux[name][kpi.category].value;
        percentage = difference / kpi.transactions / 100;
      }

      aux[name][kpi.category].variationLWNumber = difference;
      aux[name][kpi.category].variationLWpercentage = percentage;
    });
  });

  return aux;
};

export const processMainKpis = (kpiT, kpiY, kpiLW) => {
  let contributionT = 0;
  let grossSaleT = 0;
  let netSaleT = 0;
  let transactionsT = 0;

  let contributionY = 0;
  let grossSaleY = 0;
  let netSaleY = 0;
  let transactionsY = 0;

  let contributionLW = 0;
  let grossSaleLW = 0;
  let netSaleLW = 0;
  let transactionsLW = 0;

  let store;

  kpiT.map((kpi) => {
    contributionT += kpi.contribution;
    grossSaleT += kpi.grossSale;
    netSaleT += kpi.netSale;
    transactionsT += kpi.transactions;
    store = kpi.store;
  });

  kpiY.map((kpi) => {
    contributionY += kpi.contribution;
    grossSaleY += kpi.grossSale;
    netSaleY += kpi.netSale;
    transactionsY += kpi.transactions;
  });

  kpiLW.map((kpi) => {
    contributionLW += kpi.contribution;
    grossSaleLW += kpi.grossSale;
    netSaleLW += kpi.netSale;
    transactionsLW += kpi.transactions;
  });

  const averageTicketT = netSaleT / transactionsT;
  const averageTicketY = netSaleY / transactionsY;
  const averageTicketLW = netSaleLW / transactionsLW;

  const kpis = [
    'Contribución',
    'Venta Gross',
    'Venta Neta',
    'Ticket promedio',
    'Transacciones',
  ];

  const auxMainKpi = [];

  kpis.map((name) => {
    let units;
    let valueT;
    let valueY;
    let valueLW;

    if (name === 'Contribución') {
      units = '$';
      valueT = contributionT / kpiT.length;
      valueY = contributionY / kpiY.length;
      valueLW = contributionLW / kpiLW.length;
    } else if (name === 'Venta Gross') {
      units = '$';
      valueT = grossSaleT / kpiT.length;
      valueY = grossSaleY / kpiY.length;
      valueLW = grossSaleLW / kpiLW.length;
    } else if (name === 'Venta Neta') {
      units = '$';
      valueT = netSaleT / kpiT.length;
      valueY = netSaleY / kpiY.length;
      valueLW = netSaleLW / kpiLW.length;
    } else if (name === 'Ticket promedio') {
      units = '';
      valueT = averageTicketT / kpiT.length;
      valueY = averageTicketY / kpiY.length;
      valueLW = averageTicketLW / kpiLW.length;
    } else if (name === 'Transacciones') {
      units = 'unidades';
      valueT = transactionsT / kpiT.length;
      valueY = transactionsY / kpiY.length;
      valueLW = transactionsLW / kpiLW.length;
    }

    const obj = {
      id: name,
      name,
      store,
      units,
      value: valueT,
      variationYNumber: valueY - valueT,
      variationLWNumber: valueLW - valueT,
      variationYpercentage: ((valueY - valueT) / valueY) * 100,
      variationLWpercentage: ((valueLW - valueT) / valueLW) * 100,
    };

    auxMainKpi.push(obj);
  });

  return auxMainKpi;
};
