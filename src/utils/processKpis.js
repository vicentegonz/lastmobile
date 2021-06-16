/* eslint-disable operator-linebreak */
/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
export const processStoreKpis = (kpiT, kpiY, kpiLW) => {
  const aux = {};
  kpiT.map((kpi) => {
    aux[kpi.name] = {};
  });

  kpiT.map((kpi) => {
    aux[kpi.name][kpi.category] = {};
  });

  kpiT.map((kpi) => {
    aux[kpi.name][kpi.category].value = kpi.value;
    aux[kpi.name][kpi.category].store = kpi.store;
    aux[kpi.name][kpi.category].units = kpi.units;
    aux[kpi.name][kpi.category].id = kpi.name;
    aux[kpi.name][kpi.category].name = kpi.name;
    aux[kpi.name][kpi.category].category = kpi.category;
  });

  kpiY.map((kpi) => {
    const diferencia = kpi.value - aux[kpi.name][kpi.category].value;
    aux[kpi.name][kpi.category].variationYNumber = diferencia;
    aux[kpi.name][kpi.category].variationYpercentage =
      (diferencia / kpi.value) * 100;
  });

  kpiLW.map((kpi) => {
    const diferencia = kpi.value - aux[kpi.name][kpi.category].value;
    aux[kpi.name][kpi.category].variationLWNumber = diferencia;
    aux[kpi.name][kpi.category].variationLWpercentage =
      (diferencia / kpi.value) * 100;
  });

  return aux;
};

export const processMainKpis = (kpiT, kpiY, kpiLW) => {
  const kpiTGrouped = kpiT.reduce((r, a) => {
    r[a.name] = [...(r[a.name] || []), a];
    return r;
  }, {});

  const kpiYGrouped = kpiY.reduce((r, a) => {
    r[a.name] = [...(r[a.name] || []), a];
    return r;
  }, {});

  const kpiLWGrouped = kpiLW.reduce((r, a) => {
    r[a.name] = [...(r[a.name] || []), a];
    return r;
  }, {});

  const auxMainKpi = [];

  Object.entries(kpiTGrouped).forEach(([nameKey, kpiArray]) => {
    let sumT = 0;
    let sumY = 0;
    let sumLW = 0;

    let store;
    let units;

    kpiArray.map((kpi) => {
      sumT += kpi.value;
      store = kpi.store;
      units = kpi.units;
    });

    kpiYGrouped[nameKey].map((kpi) => {
      sumY += kpi.value;
    });

    kpiLWGrouped[nameKey].map((kpi) => {
      sumLW += kpi.value;
    });

    const valueT = sumT / kpiArray.length;
    const valueY = sumY / kpiYGrouped[nameKey].length;
    const valueLW = sumLW / kpiLWGrouped[nameKey].length;

    const obj = {
      id: nameKey,
      name: nameKey,
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
