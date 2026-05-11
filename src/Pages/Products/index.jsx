import React, { useEffect, useState } from 'react'
import Card from '../../Components/Card'

export default function Products() {

  const [products, setProducts] = useState()

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('https://sephora.p.rapidapi.com/products/v2/list?number=1&size=30&country=SG&language=en-SG&sort=sales', {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '3173452691mshd8b9eeb31b10e14p1216b6jsn05d7e610fb7b',
            'x-rapidapi-host': 'sephora.p.rapidapi.com'
          }
        })
        const data = await res.json()
        setProducts(data.data)

      } catch (error) {
      }
    })()
  }, [])


  const items = products?.map((e, index) => {

    return <Card key={index} id={e.id} title={e.attributes.name}
      price={e.attributes.price / 100}
      img={e.attributes['image-urls'][0]} />
  })


  return (
    <>
      {products ? <div className='py-4 d-flex justify-content-around gap-3 flex-wrap'>
        {items}
      </div> : <p>Loading ...</p>}
    </>
  )
}
