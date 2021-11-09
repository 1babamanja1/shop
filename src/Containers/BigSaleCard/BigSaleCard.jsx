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
  const { id } = useParams();

  useEffect(
    () => {
      dispatch(getFullInfo(id));
    },
    [dispatch, id],
  );

  const isPokeLoading = useSelector(getPokeLoadStatus);
  const pokeData = useSelector(getFullInfoSelector)[0];
  const clickHandler = () => {
    dispatch(addToCart(pokeData));
  };

  if (isPokeLoading) {
    return <Preloader />;
  }

  const birthdate = moment(pokeData.details.birthday, 'DD MM YYYY');
  const age = moment().diff(birthdate, 'years');

  const createData = (name, value) => ({
    name,
    value,
  });
  const row = [
    createData('Weight:', pokeData.details.weight),
    createData('Height:', pokeData.details.height),
    createData('Category:', pokeData.details.category),
    createData('Birthday:', `${birthdate.format('L')} (${age} years)`),
  ];

  return (
    <StyledCard>
      <Pic img={pokeData.pic} />
      <Body>
        <Header>{pokeData.name}</Header>
        <TableContainer>
          <Table>
            <TableBody>
              {row.map((item) => (
                <StyledTableRow key={item.name}>
                  <TableCell sx={{ color: 'inherit', padding: '5px 10px' }}>{item.name}</TableCell>
                  <TableCell sx={{ color: 'inherit', padding: '5px 10px' }}>{item.value}</TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Info>
          <h4>Type: </h4>
          {pokeData.type.map((item) => (
            <Type pokeType={item} pokeName={pokeData.name} key={`${item}_${pokeData.name}`} />
          ))}
        </Info>
        <Info>
          <h4>Weakness: </h4>
          {pokeData.details.weakness.map((item) => (
            <Type pokeType={item} pokeName={pokeData.name} key={`${item}_${pokeData.name}`} />
          ))}
        </Info>

        <Button buttonName="Add to Cart" onClick={clickHandler} />
      </Body>
    </StyledCard>
  );
};

export default BigSaleCard;

const StyledCard = styled.div`
  width: 900px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.bigCardColor};
  border: 1px solid ${colors.grey};
  border-radius: 10px;
`;

const Header = styled.h2`
  color: ${colors.orange};
  text-decoration: none;
`;
const Pic = styled.div`
  width: 250px;
  height: 250px;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: contain;
`;
const Body = styled.div`
  width: 66%;
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

const StyledTableRow = styled(TableRow)`
  :nth-child(2n) {
    background-color: ${colors.grey};
    color: ${colors.darkGrey};
  }
`;
