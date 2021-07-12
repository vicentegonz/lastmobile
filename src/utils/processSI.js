import {
  experienceGrade,
  waitingTimeGrade,
  speedGrade,
  qualityGrade,
  bathroomGrade,
  kindnessGrade,
  npsGrade,
  checkYesterday,
  checkLastWeek,
  checkSubYesterday,
  checkSubLastWeek,
} from '@/utils/formulasSI';
import getDates from '@/utils/getDates';
import round from '@/utils/round';

function makeIndicator(obj) {
  // ASK CLIENTS:
  // WHAT IF ONE IS MISSING? (0)
  // Chart working with zeros -> should it not be displayed?

  const experience = experienceGrade(obj);
  const waitingTime = waitingTimeGrade(obj);
  const speed = speedGrade(obj);
  const quality = qualityGrade(obj);
  const bathroom = bathroomGrade(obj);
  const kindness = kindnessGrade(obj);
  const nps = npsGrade(obj);

  let service = experience * 0.125
    + waitingTime * 0.175
    + speed * 0.175
    + quality * 0.175
    + bathroom * 0.175
    + kindness * 0.175;

  if (!service) {
    service = '-';
  }

  const finalObj = {
    experience,
    waitingTime,
    speed,
    quality,
    bathroom,
    kindness,
    service,
    nps,
  };

  return finalObj;
}

function getValues(key, indicators) {
  const v1 = indicators[0] ? indicators[0][key] : 0;
  const v2 = indicators[1][key];
  const v3 = indicators[2][key];
  const v4 = indicators[3][key];
  const v5 = indicators[4][key];
  const v6 = indicators[5][key];
  const v7 = indicators[6] ? indicators[6][key] : 0;
  const v8 = indicators[7][key];
  return {
    v1, v2, v3, v4, v5, v6, v7, v8,
  };
}

export default function processSI(data) {
  const {
    today,
    yesterday,
    date2,
    date3,
    date4,
    date5,
    date6,
    lastWeek,
    days,
  } = getDates();

  let indicatorT;
  let indicatorY;
  let indicatord2;
  let indicatord3;
  let indicatord4;
  let indicatord5;
  let indicatord6;
  let indicatordLW;

  data.forEach((obj) => {
    if (obj.date === today) {
      indicatorT = makeIndicator(obj);
    } else if (obj.date === yesterday) {
      indicatorY = makeIndicator(obj);
    } else if (obj.date === date2) {
      indicatord2 = makeIndicator(obj);
    } else if (obj.date === date3) {
      indicatord3 = makeIndicator(obj);
    } else if (obj.date === date4) {
      indicatord4 = makeIndicator(obj);
    } else if (obj.date === date5) {
      indicatord5 = makeIndicator(obj);
    } else if (obj.date === date6) {
      indicatord6 = makeIndicator(obj);
    } else if (obj.date === lastWeek) {
      indicatordLW = makeIndicator(obj);
    }
  });

  if (indicatorT === undefined) {
    const mainService = {};
    const aux = [];
    const npsService = {};
    return { mainService, aux, npsService };
  }

  const mainService = {
    name: 'Nota Final',
    id: 'mainService',
    value: round(indicatorT.service, 2),
    data: {
      v1: round(indicatordLW.service, 2),
      v2: round(indicatord6.service, 2),
      v3: round(indicatord5.service, 2),
      v4: round(indicatord4.service, 2),
      v5: round(indicatord3.service, 2),
      v6: round(indicatord2.service, 2),
      v7: round(indicatorY.service, 2),
      v8: round(indicatorT.service, 2),
    },
    weekDates: days,
  };

  const npsService = {
    name: 'NPS',
    id: 'nps',
    value: round(indicatorT.nps, 2),
    data: {
      v1: round(indicatordLW.nps, 2),
      v2: round(indicatord6.nps, 2),
      v3: round(indicatord5.nps, 2),
      v4: round(indicatord4.nps, 2),
      v5: round(indicatord3.nps, 2),
      v6: round(indicatord2.nps, 2),
      v7: round(indicatorY.nps, 2),
      v8: round(indicatorT.nps, 2),
    },
    weekDates: days,
  };

  checkYesterday(indicatorT, indicatorY, mainService, npsService);
  checkLastWeek(indicatorT, indicatordLW, mainService, npsService);

  const serviceNames = [
    'Experiencia',
    'Tiempo de espera',
    'Velocidad',
    'Calidad',
    'Baño',
    'Amabilidad',
  ];

  const aux = [];

  const indicadores = [
    indicatordLW,
    indicatord6,
    indicatord5,
    indicatord4,
    indicatord3,
    indicatord2,
    indicatorY,
    indicatorT,
  ];

  serviceNames.forEach((name) => {
    let values;

    if (name === 'Experiencia') {
      values = getValues('experience', indicadores);
    } else if (name === 'Tiempo de espera') {
      values = getValues('waitingTime', indicadores);
    } else if (name === 'Velocidad') {
      values = getValues('speed', indicadores);
    } else if (name === 'Calidad') {
      values = getValues('quality', indicadores);
    } else if (name === 'Baño') {
      values = getValues('bathroom', indicadores);
    } else if (name === 'Amabilidad') {
      values = getValues('kindness', indicadores);
    }

    const subService = {
      name,
      id: name,
      value: round(values.v8, 2),
      data: {
        v1: round(values.v1, 2),
        v2: round(values.v2, 2),
        v3: round(values.v3, 2),
        v4: round(values.v4, 2),
        v5: round(values.v5, 2),
        v6: round(values.v6, 2),
        v7: round(values.v7, 2),
        v8: round(values.v8, 2),
      },
      weekDates: days,
    };

    checkSubYesterday(subService, values.v7, values.v8);
    checkSubLastWeek(subService, values.v1, values.v8);

    aux.push(subService);
  });

  return { mainService, aux, npsService };
}
