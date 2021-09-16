import React from 'react';
import styled from 'styled-components';

const SaleCard = ({ name, pic, details }) => (

  <StyledSaleCard>
    <Name>{name}</Name>
    <Body>
      <Pic img={pic} />
      <Info>
        <span>
          Weight:
          {details.weight}
        </span>
        <span>
          Height:
          {details.height}
        </span>
        <span>
          Category:
          {details.category}
        </span>

      </Info>
    </Body>
  </StyledSaleCard>
);

export default SaleCard;

const StyledSaleCard = styled.div`
  min-width: 300px;
  height: 200px;
  width: 25%;
  border: 1px solid green;
  margin: 5px;
`;

const Pic = styled.div`
  width: 170px;
  height: 170px ;
  background-image: url(${(props) => props.img});
  background-color: lightcyan;
  background-position: center;
  background-size: contain;
`;

const Name = styled.div`

`;
const Body = styled.div`
display: flex;
justify-content: space-around;
`;

const Info = styled.div`
display: flex;
  flex-direction: column;
`;
