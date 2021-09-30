import React from 'react';
import styled from 'styled-components';

const Preloader = () => (
  <StyledPreloader />
);
export default Preloader;

const StyledPreloader = styled.div`
  width: 200px;
  height: 200px;
  background-image: url('/imgs/pika_preloader.png');
  background-position: center;
  background-size: cover;
  animation-name: fluctuate-animation;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}
@keyframes fluctuate-animation {
  50% { transform: rotate(30deg) }
  100% { transform: rotate(-30deg) }`;
