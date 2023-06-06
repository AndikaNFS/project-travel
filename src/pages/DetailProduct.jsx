import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductDetail } from '../services/user';
import { useCallback } from 'react';
import { useEffect } from 'react';

const DetailProduct = () => {
  const { id } = useParams();
  const [DetailProduct, setDetailProduct] = useState([]);
  console.log(id);
  console.log(DetailProduct);

  const getProductDetailAPI = useCallback(
    async (id) => {
      const data = await getProductDetail(id);
      setDetailProduct(data);
    },
    [getProductDetail],
  );

  useEffect(() => {
    getProductDetailAPI(id);
  }, []);

  return <div>DetailProduct</div>;
};

export default DetailProduct;
