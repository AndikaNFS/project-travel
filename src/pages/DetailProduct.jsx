import React from 'react';
import { useParams } from 'react-router-dom';

const DetailProduct = () => {
  const params = useParams();
  console.log(params);
  return <div>DetailProduct</div>;
};

export default DetailProduct;
