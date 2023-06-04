import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../redux/actions";
import "./ProductsDetail.css";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  const image = "";

  return (
    <div className="products-detail-container">
      <Link to="/home">
        <button>Go PetMart</button>
      </Link>
      <div>
        {product.length === 0 ? (
          <div></div>
        ) : (
          <>
            <img
              src={product.image ? product.image : image}
              alt={`img-${product.name}`}
            />
            <section>
              <div>
                <h1>{product.name}</h1>
                {product.stock ? (
                  <p className="stock">Stock: {product.stock}</p>
                ) : (
                  <p className="stock">Out of Stock</p>
                )}
                <p className="description">Description: {product.description}</p>
                <p className="price">Price: {product.price}</p>
              </div>
            </section>
          </>
        )}
      </div>
      <button>BUY</button>
    </div>
  );
};

export default Detail;
