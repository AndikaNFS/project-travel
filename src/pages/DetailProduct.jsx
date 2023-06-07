import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductDetail } from '../services/user';
import { useCallback } from 'react';
import { useEffect } from 'react';
import ProductDetail from '../components/ProductDetail';
import Navbar from '../components/Navbar';

const DetailProduct = () => {
  const { id } = useParams();
  const [DetailProduct, setDetailProduct] = useState([]);

  const getProductDetailAPI = useCallback(async (id) => {
    const data = await getProductDetail(id);
    setDetailProduct(data);
  }, []);

  useEffect(() => {
    getProductDetailAPI(id);
  }, []);

  return (
    <>
      <Navbar />
      <ProductDetail item={DetailProduct.detail} />
    </>
  );
};

export default DetailProduct;
