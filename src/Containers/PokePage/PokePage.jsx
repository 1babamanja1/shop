import React from 'react';

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPokes } from '../../redux/common/dataLoading/selectors';
import BigSaleCard from '../../Components/BigSaleCard';

const PokePage = () => {
  const { pokeName } = useParams();
  const pokeList = useSelector(getPokes);
  const pokeData = pokeList.find((item) => item.name === pokeName);

  if (!pokeData) {
    return null;
  }
  return <BigSaleCard name={pokeData.name} type={pokeData.type} pic={pokeData.pic} />;
};

export default PokePage;
