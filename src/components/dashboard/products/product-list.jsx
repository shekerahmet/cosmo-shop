import React from 'react'
import { Table } from 'react-bootstrap'
import ProductsRow from './products-row';

const ProductList = ({products}) => {



  return(
  
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
              <th> Edit / Delete </th>
            </tr>
          </thead>
          <tbody>
            
          {products.map((item,index) => (
          <ProductsRow key={index}  {...item} seq={index+1} />
        ))}
           
          </tbody>
        </Table>
      )
}

export default ProductList