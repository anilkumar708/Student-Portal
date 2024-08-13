import { Typography } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import "./Paginations.css";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();

    if (data && data.products) {
      setProducts(data.products);
    }
  };

  useEffect(() => {
    fetchProducts();
  });

  const paginationHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };
  return (
    <div>
      {products.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((prod) => {
            return (
              <span key={prod.id} className="products1">
                <img src={prod.thumbnail} alt={prod.title} />
                <Typography>{prod.title}</Typography>
              </span>
            );
          })}
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          <span
            className={page > 1 ? "" : "pagination-diabled"}
            onClick={() => paginationHandler(page - 1)}
          >
            ◀
          </span>
          {[...Array(products.length / 10)].map((_, i) => {
            return (
              <span
                className={page === i + 1 ? "pagination-point" : ""}
                onClick={() => paginationHandler(i + 1)}
                key={i}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            className={page < products.length / 10 ? "" : "pagination-diabled"}
            onClick={() => paginationHandler(page + 1)}
          >
            ▶
          </span>
        </div>
      )}
    </div>
  );
};

export default Pagination;
