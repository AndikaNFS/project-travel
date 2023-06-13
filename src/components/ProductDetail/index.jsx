import React, { useEffect, useState } from 'react';
import HeroItem from './HeroItem';
import BestWisata from '../BestWisata';
import BestAtraksi from '../BestAtraksi';
import { getBestAtraksi, getBestWisata } from '../../services/user';
import { useCallback } from 'react';

const ProductDetail = ({ item, bestWisata, bestAttraction }) => {
  const [dataBestWisata, setDataBestWisata] = useState([]);
  const [dataBestAtraksi, setDataBestAtraksi] = useState([]);

  const getBestWisataList = useCallback(async () => {
    const data = await getBestWisata();
    setDataBestWisata(data);
  }, [getBestWisata]);

  const getBestAtraksiList = useCallback(async () => {
    const data = await getBestAtraksi();
    setDataBestAtraksi(data);
  }, [getBestAtraksi]);

  useEffect(() => {
    getBestWisataList();
    getBestAtraksiList();
  }, []);

  return (
    <>
      {bestWisata ? (
        <>
          <BestWisata item={dataBestWisata} />
        </>
      ) : bestAttraction ? (
        <>
          <BestAtraksi item={dataBestAtraksi} />
        </>
      ) : (
        <>
          <HeroItem item={item} />
          ProductDetail
        </>
      )}
    </>
  );
};

export default ProductDetail;
