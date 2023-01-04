import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteProducts, getProducts } from "../../redux/apiCalls";
export default function ProductList() {
  const distpatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  useEffect(() => {
    getProducts(distpatch);
  }, [distpatch]);

  const handleDelete = (id) => {
    deleteProducts(id, distpatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 500,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.image} alt="" />
            {params.row.nameProduct}
          </div>
        );
      },
    },
    { field: "weight", headerName: "Weight", width: 120 },
    { field: "category", headerName: "Category", width: 160 },

    {
      field: "price",
      headerName: "Price",
      width: 130,
    },
    { field: "inStock", headerName: "In Stock", width: 120 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <Link to="/newproduct">
        <button className="productAddButton">Create</button>
      </Link>
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={20}
        checkboxSelection
      />
    </div>
  );
}
