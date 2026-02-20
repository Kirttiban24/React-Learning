import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    const ProductData = useContext(ProductDataContext)
    
    const {productId} = useParams()

    let selectedProduct = '';
    if (ProductData.length > 0){
        selectedProduct = ProductData.find((elem) => elem.id == productId)
    }
    

  return (
        <div>
            <img src={selectedProduct.image} alt="" />
            <h2>{selectedProduct.title}</h2>
            <h4>{selectedProduct.price}</h4>
        </div>
  )
}

export default ProductDetails
