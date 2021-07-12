/* eslint-disable no-param-reassign */
function checkNaN(number) {
  if (number === 0) {
    return true;
  }
  return false;
}

export function experienceGrade(obj) {
  if (checkNaN(obj.amountExperience)) {
    return '-';
  }
  return obj.experience / obj.amountExperience;
}

export function waitingTimeGrade(obj) {
  if (checkNaN(obj.amountWaitingTime)) {
    return '-';
  }
  return obj.waitingTime / obj.amountWaitingTime;
}

export function speedGrade(obj) {
  if (checkNaN(obj.amountSpeed)) {
    return '-';
  }
  return obj.speed / obj.amountSpeed;
}

export function qualityGrade(obj) {
  if (checkNaN(obj.amountQuality)) {
    return '-';
  }
  return obj.quality / obj.amountQuality;
}

export function bathroomGrade(obj) {
  if (checkNaN(obj.amountBathroom)) {
    return '-';
  }
  return obj.bathroom / obj.amountBathroom;
}

export function kindnessGrade(obj) {
  if (checkNaN(obj.amountKindness)) {
    return '-';
  }
  return obj.kindness / obj.amountKindness;
}

export function npsGrade(obj) {
  if (checkNaN(obj.amountNps)) {
    return '-';
  }
  return obj.nps / obj.amountNps;
}

export function checkYesterday(today, yesterday, main, nps) {
  if (!yesterday || today.service === 0 || yesterday.service === 0) {
    main.variationYNumber = '-';
    main.variationYpercentage = '-';
    nps.variationYNumber = '-';
    nps.variationYpercentage = '-';
  } else {
    main.variationYNumber = yesterday.service - today.service;
    main.variationYpercentage = ((yesterday.service - today.service) / yesterday.service) * 100;

    nps.variationYNumber = yesterday.nps - today.nps;
    nps.variationYpercentage = ((yesterday.nps - today.nps) / yesterday.nps) * 100;
  }
}

export function checkLastWeek(today, lastWeek, main, nps) {
  if (!lastWeek || today.service === 0 || lastWeek.service === 0) {
    main.variationLWNumber = '-';
    main.variationLWpercentage = '-';
    nps.variationLWNumber = '-';
    nps.variationLWpercentage = '-';
  } else {
    main.variationLWNumber = lastWeek.service - today.service;
    main.variationLWpercentage = ((lastWeek.service - today.service) / lastWeek.service) * 100;

    nps.variationLWNumber = lastWeek.nps - today.nps;
    nps.variationLWpercentage = ((lastWeek.nps - today.nps) / lastWeek.nps) * 100;
  }
}

export function checkSubYesterday(sub, v7, v8) {
  if (v7 === 0 || v8 === 0) {
    sub.variationYNumber = '-';
    sub.variationYpercentage = '-';
  } else {
    sub.variationYNumber = v7 - v8;
    sub.variationYpercentage = ((v7 - v8) / v7) * 100;
  }
}

export function checkSubLastWeek(sub, v1, v8) {
  if (v1 === 0 || v8 === 0) {
    sub.variationLWNumber = '-';
    sub.variationLWpercentage = '-';
  } else {
    sub.variationLWNumber = v1 - v8;
    sub.variationLWpercentage = ((v1 - v8) / v1) * 100;
  }
}
