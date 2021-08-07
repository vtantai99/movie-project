import totalAtm from "../../Assets/Images/totalAtm.png";
import momo from "../../Assets/Images/momo.jpeg";
import totalVisa from "../../Assets/Images/totalVisa.png";
export const listPayment = [
  {
    name: "payment",
    id: "atm",
    img: `${totalAtm}`,
    des: "Thẻ ATM nội địa",
    value: 1,
  },
  {
    name: "payment",
    id: "visa",
    img: `${totalVisa}`,
    des: "Visa, MasterCard, JCB",
    value: 2,
  },
  {
    name: "payment",
    id: "momo",
    img: `${momo}`,
    des: "MoMo",
    value: 3,
  },
];
