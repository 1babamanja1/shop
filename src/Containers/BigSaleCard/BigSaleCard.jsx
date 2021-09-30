import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import {
  Table, TableBody, TableCell, TableContainer, TableRow,
} from '@mui/material';
import moment from 'moment';
import { getFullInfoSelector, getPokeLoadStatus } from '../../redux/pokemons/selectors';
import { getFullInfo } from '../../redux/pokemons/actions';
import { addToCart } from '../../redux/cart/actions';

import Type from '../../Components/Type';
import Button from '../../Components/Button';
import { colors } from '../../Theme/theme';
import Preloader from '../../Components/Preloader';

const BigSaleCard = () => {
  const dispatch = useDispatch();
  const { pokeName } = useParams();

  useEffect(() => {
    dispatch(getFullInfo(pokeName));
  }, [dispatch, pokeName]);

  const isPokeLoading = useSelector(getPokeLoadStatus);
  const pokeData = useSelector(getFullInfoSelector);
  const clickHandler = () => { dispatch(addToCart(pokeData)); };

  if (Object.keys(pokeData).length === 0) {
    return <Preloader />;
  }

  const birthdate = moment(pokeData.details.birthday, 'DD MM YYYY');
  const age = moment().diff(birthdate, 'years');

  const createData = (name, value) => ({
    name, value,
  });
  const row = [
    createData('Weight:', pokeData.details.weight),
    createData('Height:', pokeData.details.height),
    createData('Category:', pokeData.details.category),
    createData('Birthday:', `${birthdate.format('L')} (${age} years)`),
  ];

  return (
    <div>
      {isPokeLoading
        ? <Preloader />
        : (
          <StyledCard>
            <Pic img={pokeData.pic} />
            <Body>
              <Header>{pokeData.name}</Header>
              <TableContainer>
                <Table>
                  <TableBody>
                    {row.map((item) => (
                      <TableRow key={item.name}>
                        <TableCell sx={{ color: 'inherit' }}>{item.name}</TableCell>
                        <TableCell sx={{ color: 'inherit' }}>{item.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <Info>
                <h4>Type: </h4>
                {pokeData.type.map((item) => (
                  <Type
                    pokeType={item}
                    pokeName={pokeData.name}
                    key={`${item}_${pokeData.name}`}
                  />
                ))}
              </Info>
              <Info>
                <h4>Weakness: </h4>
                {pokeData.details.weakness.map((item) => (
                  <Type
                    pokeType={item}
                    pokeName={pokeData.name}
                    key={`${item}_${pokeData.name}`}
                  />
                ))}
              </Info>

              <Button buttonName="Add to Cart" onClick={clickHandler} />
            </Body>
          </StyledCard>
        )}
    </div>
  );
};

export default BigSaleCard;

const StyledCard = styled.div`
  width: 900px;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: ${(props) => props.theme.color}
`;

const Header = styled.h2`
  color: ${colors.orange}
  text-decoration: none;
`;
const Pic = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: contain;
`;
const Body = styled.div`
  min-width: 200px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;

  & * {
    margin-right: 7px;
  }
`;
