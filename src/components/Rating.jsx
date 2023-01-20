import { useState } from "react";
import styled from "styled-components";
import star from "../images/icon-star.svg";
import Buttons from "./Buttons";

function Rating(props) {
  const saveRatingData = (enteredRatingData) => {
    props.onRatingData(enteredRatingData);
  };

  return (
    <Block>
      <Star />
      <div>
        <Heading>How did we do?</Heading>
        <Text>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </Text>
      </div>
      <Buttons
        setIsVisible={props.setIsVisible}
        onSaveRatingData={saveRatingData}
      />
    </Block>
  );
}

export default Rating;

const Star = styled.div`
  background: #262e38;
  border-radius: 50px;
  background-image: url(${star});
  background-repeat: no-repeat;
  background-position: center;
  width: 48px;
  height: 48px;
  align-items: center;
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const Block = styled.div`
  padding: 2rem;
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const Heading = styled.h1`
  margin-top: 30px;
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  color: #fff;
  font-size: 28px;
  line-height: 30px;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 22px;
  }
`;

export const Text = styled.p`
  font-size: 15px;
  line-height: 24px;
  color: #969fad;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 22px;
  }
`;
