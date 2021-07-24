export const convertTime = (item, time) => {
  item = item.split(":");
  let hours = +item[0];
  let minutes = +item[1];
  minutes >= 10 ? (minutes = minutes) : (minutes = "0" + minutes);
  let timeEnds = hours + time;
  timeEnds >= 24 ? (timeEnds = timeEnds - 24) : (timeEnds = timeEnds);
  timeEnds < 10 ? (timeEnds = "0" + timeEnds) : (timeEnds = timeEnds);
  return timeEnds + ":" + minutes;
};

export const disableTime = (time) => {
  if (time) {
    const hours = time.split(":");
    if (
      +hours[0] >= new Date().getHours() &&
      +hours[1] > new Date().getMinutes()
    )
      return true;
    if (
      +hours[0] > new Date().getHours() &&
      +hours[1] < new Date().getMinutes()
    )
      return true;
    return false;
  }
};
