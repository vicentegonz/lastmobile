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

  let lastWeek = new Date(today);
  lastWeek.setDate(today.getDate() - 7);

  today = formatDate(today);
  yesterday = formatDate(yesterday);
  lastWeek = formatDate(lastWeek);

  return { today, yesterday, lastWeek };
};

export default getDates;
