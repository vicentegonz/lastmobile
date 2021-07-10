const formatDate = (date) => {
  let dd = date.getDate();

  let mm = date.getMonth() + 1;
  const yyyy = date.getFullYear();
  if (dd < 10) {
    dd = `0${dd}`;
  }

  if (mm < 10) {
    mm = `0${mm}`;
  }
  return `${yyyy}-${mm}-${dd}`;
};

const getDates = () => {
  let today = new Date();

  let yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  let date2 = new Date(today);
  date2.setDate(today.getDate() - 2);

  let date3 = new Date(today);
  date3.setDate(today.getDate() - 3);

  let date4 = new Date(today);
  date4.setDate(today.getDate() - 4);

  let date5 = new Date(today);
  date5.setDate(today.getDate() - 5);

  let date6 = new Date(today);
  date6.setDate(today.getDate() - 6);

  let lastWeek = new Date(today);
  lastWeek.setDate(today.getDate() - 7);

  const days = {
    d0: lastWeek.getDay(),
    d1: date6.getDay(),
    d2: date5.getDay(),
    d3: date4.getDay(),
    d4: date3.getDay(),
    d5: date2.getDay(),
    d6: yesterday.getDay(),
    d7: today.getDay(),
  };

  today = formatDate(today);
  yesterday = formatDate(yesterday);
  date2 = formatDate(date2);
  date3 = formatDate(date3);
  date4 = formatDate(date4);
  date5 = formatDate(date5);
  date6 = formatDate(date6);
  lastWeek = formatDate(lastWeek);

  return {
    today, yesterday, date2, date3, date4, date5, date6, lastWeek, days,
  };
};

export default getDates;
