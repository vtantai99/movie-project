export const formatWeekDate = (weekDate) => {
  if (window.innerWidth >= 768) {
    switch (weekDate) {
      case 0:
        return "Chủ Nhật";
      case 1:
        return "Thứ 2";
      case 2:
        return "Thứ 3";
      case 3:
        return "Thứ 4";
      case 4:
        return "Thứ 5";
      case 5:
        return "Thứ 6";
      case 6:
        return "Thứ 7";
      default:
        return null;
    }
  } else {
    switch (weekDate) {
      case 0:
        return "CN";
      case 1:
        return "T2";
      case 2:
        return "T3";
      case 3:
        return "T4";
      case 4:
        return "T5";
      case 5:
        return "T6";
      case 6:
        return "T7";
      default:
        return null;
    }
  }
};
