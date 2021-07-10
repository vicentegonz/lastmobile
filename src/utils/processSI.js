import {
  experienceGrade,
  waitingTimeGrade,
  speedGrade,
  qualityGrade,
  bathroomGrade,
  kindnessGrade,
  npsGrade,
} from '@/utils/formulasSI';
import getDates from '@/utils/getDates';
import round from '@/utils/round';

function makeIndicator(obj) {
  const experience = experienceGrade(obj);
  const waitingTime = waitingTimeGrade(obj);
  const speed = speedGrade(obj);
  const quality = qualityGrade(obj);
  const bathroom = bathroomGrade(obj);
  const kindness = kindnessGrade(obj);
  const nps = npsGrade(obj);

  const service = experience * 0.125
    + waitingTime * 0.175
    + speed * 0.175
    + quality * 0.175
    + bathroom * 0.175
    + kindness * 0.175;

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

export default function processSI(data) {
  const {
    today, yesterday, date2, date3, date4, date5, date6, lastWeek, days,
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
    variationYNumber: indicatorY.service - indicatorT.service,
    variationLWNumber: indicatordLW.service - indicatorT.service,
    variationYpercentage:
      ((indicatorY.service - indicatorT.service) / indicatorY.service) * 100,
    variationLWpercentage:
      ((indicatordLW.service - indicatorT.service) / indicatordLW.service)
      * 100,
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
    variationYNumber: indicatorY.nps - indicatorT.nps,
    variationLWNumber: indicatordLW.nps - indicatorT.nps,
    variationYpercentage:
      ((indicatorY.nps - indicatorT.nps) / indicatorY.nps) * 100,
    variationLWpercentage:
      ((indicatordLW.nps - indicatorT.nps) / indicatordLW.nps) * 100,
  };

  const serviceNames = [
    'Experiencia',
    'Tiempo de espera',
    'Velocidad',
    'Calidad',
    'Baño',
    'Amabilidad',
  ];

  const aux = [];

  serviceNames.forEach((name) => {
    let v1;
    let v2;
    let v3;
    let v4;
    let v5;
    let v6;
    let v7;
    let v8;

    if (name === 'Experiencia') {
      v1 = indicatordLW.experience;
      v2 = indicatord6.experience;
      v3 = indicatord5.experience;
      v4 = indicatord4.experience;
      v5 = indicatord3.experience;
      v6 = indicatord2.experience;
      v7 = indicatorY.experience;
      v8 = indicatorT.experience;
    } else if (name === 'Tiempo de espera') {
      v1 = indicatordLW.waitingTime;
      v2 = indicatord6.waitingTime;
      v3 = indicatord5.waitingTime;
      v4 = indicatord4.waitingTime;
      v5 = indicatord3.waitingTime;
      v6 = indicatord2.waitingTime;
      v7 = indicatorY.waitingTime;
      v8 = indicatorT.waitingTime;
    } else if (name === 'Velocidad') {
      v1 = indicatordLW.speed;
      v2 = indicatord6.speed;
      v3 = indicatord5.speed;
      v4 = indicatord4.speed;
      v5 = indicatord3.speed;
      v6 = indicatord2.speed;
      v7 = indicatorY.speed;
      v8 = indicatorT.speed;
    } else if (name === 'Calidad') {
      v1 = indicatordLW.quality;
      v2 = indicatord6.quality;
      v3 = indicatord5.quality;
      v4 = indicatord4.quality;
      v5 = indicatord3.quality;
      v6 = indicatord2.quality;
      v7 = indicatorY.quality;
      v8 = indicatorT.quality;
    } else if (name === 'Baño') {
      v1 = indicatordLW.bathroom;
      v2 = indicatord6.bathroom;
      v3 = indicatord5.bathroom;
      v4 = indicatord4.bathroom;
      v5 = indicatord3.bathroom;
      v6 = indicatord2.bathroom;
      v7 = indicatorY.bathroom;
      v8 = indicatorT.bathroom;
    } else if (name === 'Amabilidad') {
      v1 = indicatordLW.kindness;
      v2 = indicatord6.kindness;
      v3 = indicatord5.kindness;
      v4 = indicatord4.kindness;
      v5 = indicatord3.kindness;
      v6 = indicatord2.kindness;
      v7 = indicatorY.kindness;
      v8 = indicatorT.kindness;
    }

    const subService = {
      name,
      id: name,
      value: round(v8, 2),
      data: {
        v1: round(v1, 2),
        v2: round(v2, 2),
        v3: round(v3, 2),
        v4: round(v4, 2),
        v5: round(v5, 2),
        v6: round(v6, 2),
        v7: round(v7, 2),
        v8: round(v8, 2),
      },
      weekDates: days,
      variationYNumber: v7 - v8,
      variationLWNumber: v1 - v8,
      variationYpercentage: ((v7 - v8) / v7) * 100,
      variationLWpercentage: ((v1 - v8) / v1) * 100,
    };

    aux.push(subService);
  });

  return { mainService, aux, npsService };
}
