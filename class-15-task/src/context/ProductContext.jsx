import React, { createContext } from 'react'
import { useEffect, useState } from "react";
import { getAllProductData } from '../Api/ProductApi';



export const ProductDataContext = createContext()

const ProductContext = (props) => {

  const [productData, setproductData] = useState([])

  const setData = async () => {
    
    setproductData(await getAllProductData())

  }

  useEffect(()=>{
    setData()
  },[])

  return (
    <div>
      <ProductDataContext.Provider value={productData}>
        {props.children}
      </ProductDataContext.Provider>
    </div>
  )
}

export default ProductContext
