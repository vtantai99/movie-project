import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminUserModal from "../../Components/AdminUserModal";
import AdminUserTable from "../../Components/AdminUserTable";
import { getFirstLetter } from "../../Helper/Function/chartCodeAt";
import { xoaDau } from "../../Helper/Function/xoaDau";
import { iconPlus, iconReset } from "../../Helper/IconSVG/iconAdmin";
import {
  getAllUserRequest,
  changeModalUser,
} from "../../redux/action/userAction/actions";

const AdminUser = () => {
  const dispatch = useDispatch();

  const { listAllUser } = useSelector((state) => state.userReducer);
  const { isLight } = useSelector((state) => state.themeReducer);

  const [sort, setSort] = useState(null);
  const [sortedList, setSortedList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    dispatch(getAllUserRequest());
  }, [dispatch]);

  useEffect(() => {
    listAllUser.length > 0 && setSortedList(listAllUser);
  }, [listAllUser]);

  useEffect(() => {
    if (sort) {
      let { name, method } = sort;
      switch (name) {
        case "taiKhoan":
          sortTaiKhoan(method);
          break;
        case "hoTen":
          sortHoTen(method);
          break;
        case "email":
          sortEmail(method);
          break;
        case "maLoaiNguoiDung":
          sortTypeUser(method);
          break;
        default:
          sortTaiKhoan(method);
      }
    } else {
      handleSearchList(listAllUser);
    }
  }, [sort, searchTerm, listAllUser]); // eslint-disable-line react-hooks/exhaustive-deps

  const sortTaiKhoan = (method) => {
    const newList = [...sortedList];
    if (method === "asc") {
      newList.sort(
        (a, b) => getFirstLetter(a.taiKhoan) - getFirstLetter(b.taiKhoan)
      );
    } else {
      newList.sort(
        (a, b) => getFirstLetter(b.taiKhoan) - getFirstLetter(a.taiKhoan)
      );
    }
    handleSearchList(newList);
  };

  const sortHoTen = (method) => {
    const newList = [...sortedList];
    if (method === "asc") {
      newList.sort((a, b) => getFirstLetter(a.hoTen) - getFirstLetter(b.hoTen));
    } else {
      newList.sort((a, b) => getFirstLetter(b.hoTen) - getFirstLetter(a.hoTen));
    }
    handleSearchList(newList);
  };

  const sortEmail = (method) => {
    const newList = [...sortedList];
    if (method === "asc") {
      newList.sort((a, b) => getFirstLetter(a.email) - getFirstLetter(b.email));
    } else {
      newList.sort((a, b) => getFirstLetter(b.email) - getFirstLetter(a.email));
    }
    handleSearchList(newList);
  };

  const sortTypeUser = (method) => {
    const newList = [...sortedList];
    if (method === "asc") {
      newList.sort(
        (a, b) =>
          getFirstLetter(a.maLoaiNguoiDung) - getFirstLetter(b.maLoaiNguoiDung)
      );
    } else {
      newList.sort(
        (a, b) =>
          getFirstLetter(b.maLoaiNguoiDung) - getFirstLetter(a.maLoaiNguoiDung)
      );
    }
    handleSearchList(newList);
  };

  const handleAddUser = async () => {
    await dispatch(changeModalUser({ statusModal: true }));
  };

  const handleSearchList = (array) => {
    const newArray = [...array];
    setSearchList(
      newArray.filter(
        (item) =>
          xoaDau(item.taiKhoan)
            .toLowerCase()
            .indexOf(searchTerm.toLowerCase()) > -1
      )
    );
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <div>
          <input
            className={`${
              isLight ? "bg-white" : "bg-gray-800"
            } p-3 shadow-md rounded-sm outline-none`}
            value={searchTerm}
            type="text"
            placeholder="T??m ki???m ng?????i d??ng"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button
          onClick={() => setSort(null)}
          style={
            sort
              ? {
                  background: "#27ae60",
                  color: "#fff",
                }
              : {
                  background: "#ccc",
                  color: "#fff",
                }
          }
          disabled={sort ? false : true}
        >
          {iconReset} reset sort
        </Button>
        <Button
          onClick={() => handleAddUser()}
          style={{
            background: "#007be8",
            color: "#fff",
          }}
        >
          {iconPlus}
          th??m ng?????i d??ng
        </Button>
      </div>
      <div className={`${isLight ? "bg-white" : "bg-gray-800"} shadow-sm`}>
        <AdminUserTable
          sort={sort}
          setSort={setSort}
          searchList={searchList}
          searchTerm={searchTerm}
        />
        <AdminUserModal />
      </div>
    </div>
  );
};

export default AdminUser;
