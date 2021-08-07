import * as actions from "../../redux/action/bookingAction/actionTypes";

const initialState = {
  bookingList: {},
  statusFood: false,
  statusRps: false,
  foodList: [
    {
      id: 1,
      name: "Snack",
      price: 19000,
      img: "https://salt.tikicdn.com/ts/product/51/0d/45/2956097ff4862fba95d0245e9d3d3589.jpg",
      quantity: 0,
    },
    {
      id: 2,
      name: "Khoai tây chiên",
      price: 29000,
      img: "https://mcdonalds.vn/uploads/2018/food/ga-ran/medium_world_famous_fries.png",
      quantity: 0,
    },
    {
      id: 3,
      name: "Bắp phô mai",
      price: 39000,
      img: "https://i2.wp.com/www.spainonafork.com/wp-content/uploads/2019/04/popcornHOR-11.png?fit=750%2C750&ssl=1",
      quantity: 0,
    },
    {
      id: 4,
      name: "Coca-cola",
      price: 29000,
      img: "https://i.pinimg.com/originals/a8/8e/61/a88e6156b1f1d9828fa7b84f151e4a50.jpg",
      quantity: 0,
    },
    {
      id: 5,
      name: "Pepsi",
      price: 29000,
      img: "https://5.imimg.com/data5/DM/BJ/MY-34771960/pepsi-paper-cup-500x500.jpg",
      quantity: 0,
    },
    {
      id: 6,
      name: "7 Up",
      price: 29000,
      img: "https://previews.123rf.com/images/topvectors/topvectors1702/topvectors170201698/72535193-soft-drink-in-stripy-paper-cup-with-straw-cinema-and-movie-theatre-related-object-cartoon-colorful-v.jpg",
      quantity: 0,
    },
    {
      id: 7,
      name: "Combo 1",
      price: 59000,
      img: "https://image.freepik.com/free-vector/popcorn-striped-bucket-with-cup-soda-icon-illustration-cinema-movie-flat-icon_385450-13.jpg",
      quantity: 0,
    },
    {
      id: 8,
      name: "Combo 2",
      price: 79000,
      img: "https://image.freepik.com/free-vector/delicious-cinema-food-menu_24877-51625.jpg",
      quantity: 0,
    },
  ],
};
export default function bookingReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case actions.GET_BOOKING: {
      return { ...state, bookingList: payload };
    }
    case actions.SELECT_SEAT: {
      const danhSachGhe = [...state.bookingList.danhSachGhe];
      const seatChoosing = payload;
      const index = danhSachGhe.findIndex(
        (item) => item.maGhe === seatChoosing.maGhe
      );
      if (seatChoosing.dangChon) {
        danhSachGhe[index].dangChon = false;
      } else {
        danhSachGhe[index].dangChon = true;
      }
      const newBookingList = { ...state.bookingList, danhSachGhe };
      return { ...state, bookingList: newBookingList };
    }
    case actions.CALL_FOOD:
      return { ...state, statusFood: payload };

    case actions.RPS_BOOKING: {
      return { ...state, statusRps: payload };
    }
    default:
      return state;
  }
}
