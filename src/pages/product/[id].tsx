import React from 'react'
import { useRouter } from "next/router";

const DetailProductPage = () => {
  const { query } = useRouter();
  return (
    <div>
      <div>DetailProductPage</div>
      <p>Product : {query.id}</p>
    </div>
  )
}

export default DetailProductPage