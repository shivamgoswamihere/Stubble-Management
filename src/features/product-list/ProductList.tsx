import { useState } from "react"

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {
  increment,
  incrementAsync,
  selectCount,
} from "./ProductListSlice"
const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },

export default const ProductList = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)


  return (
    <div>
      <div>
        
      </div>
    </div>
  )
}
