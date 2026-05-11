import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./style.css";
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../../Store/Slices/Cart'



export default function ProductDetail() {

  const { id } = useParams();

  const [product, setProduct] = useState();

  const navigate = useNavigate();
  const dispatch =useDispatch()
  const quantity =useSelector(state=> state.cartRedux.list)?.filter((e)=> e.id===id)[0]?.quantity


  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `https://sephora.p.rapidapi.com/products/v2/detail?id=${id}&country=SG&language=en-SG`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-key":
                "3173452691mshd8b9eeb31b10e14p1216b6jsn05d7e610fb7b",
              "x-rapidapi-host": "sephora.p.rapidapi.com",
            }
          }
        )
        const data = await res.json()
        if(data.data){
          setProduct(data.data)
        }else{
          navigate('/not-found')}
        console.log(data.data);
      } catch (error) {

      }
    })()
  }, [id])

  return (
    <>
      {product ? 
        <div className="card py-5 mb-3 w-75  shadow-lg detail-card">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={product.attributes["image-urls"][0]}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{product.attributes.name}</h5>
                <p className="card-text">
                  Price : ${product.attributes.price / 100}
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
                <div className="d-flex align-items-center">
                  <button className="btn btn-success" onClick={()=> dispatch (addItem(product))}>+</button>
                </div>
              </div>
              {
                quantity && <>
                <span className="fs-3 mx-3">{quantity}</span>
                <button className="btn btn-danger" onClick={()=> dispatch(removeItem(id))}>_</button>
                </>
              }
            </div>
          </div>
        </div>: 
        <p>Loading ...</p>
      }
    </>
  )
}
