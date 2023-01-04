import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers, deleteCustomers } from "../../redux/apiCalls";

export default function UserList() {
  // const [data, setData] = useState(userRows);
  const distpatch = useDispatch();
  const customers = useSelector((state) => state.customer.currentCustomer);
  useEffect(() => {
    getCustomers(distpatch);
  }, [distpatch]);

  const handleDelete = (id) => {
    deleteCustomers(id, distpatch);
  };

  const columns = [
    // { field: "_id", headerName: "ID", width: 230 },
    {
      field: "customer",
      headerName: "Customer",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.image} alt="" />
            {params.row.nameCus}
          </div>
        );
      },
    },
    { field: "emailCus", headerName: "Email", width: 210 },
    { field: "username", headerName: "Username", width: 150 },
    {
      field: "phoneCus",
      headerName: "Phone",
      width: 120,
    },
    { field: "sex", headerName: "Sexual", width: 120 },
    { field: "addressCus", headerName: "Address", width: 400 },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/customer/find/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <Link to="/newUser">
        <button className="userAddButton">Create</button>
      </Link>
      <DataGrid
        rows={customers}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={20}
        // checkboxSelection
      />
    </div>
  );
}
