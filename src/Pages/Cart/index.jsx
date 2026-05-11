import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, clearAll, removeItem } from '../../Store/Slices/Cart';


export default function Cart() {
     const list = useSelector(state =>state.cartRedux.list)
     console.log(list);
     const dispatch=useDispatch()
     let totalPrice=0 

     const items = list?.map((e,index)=>{
              totalPrice += (e.attributes.price / 100) * e.quantity
     
     return <tr key={index}>
          <td align='center'>{index + 1} </td>
          <td align='center'><img src={e.attributes['image-urls'][0]} alt={e.attributes.name} style={{width:'60px',height:'60px'}}/></td>
          <td align='center'>{e.attributes.name}</td>
          <td align='center'>{e.attributes.price}</td>
          <td align='center'>{e.quantity}</td>
          <td align='center'>{(e.attributes.price/100)*e.quantity}$</td>
          <td align='center'>
               <button className='btn btn-success' onClick={()=>dispatch(addItem(e))}>+</button>
               <button className='btn btn-danger ms-2' onClick={()=>dispatch(removeItem(e.id))}>_</button>
          </td>
          </tr>
     })


return (
    <div>
      {list.length > 0 ? <>

        <table className="table container mt-5" style={{ borderRadius: '14px', overflow: 'hidden', boxShadow: '0 0 16px 2px rgba(0,0,0,.1)' }}>
          <thead>
            <tr>
              <th scope="col" align='center'>#</th>
              <th scope="col" align='center'>image</th>
              <th scope="col" align='center'>Name</th>
              <th scope="col" align='center'>Price</th>
              <th scope="col" align='center'>Quantity</th>
              <th scope="col" align='center'>Total Price</th>
              <th scope="col" align='center'>Add / Remove</th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
          <tfoot>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td align='center'>Total Price :</td>
            <td align='center'>{totalPrice}</td>
          </tfoot>
        </table>

        <button className='btn btn-danger mt-3' onClick={() => dispatch(clearAll())}>
          Clear Cart
        </button>

      </> : <h2>Cart is empty</h2>}
    </div>
  )
}

