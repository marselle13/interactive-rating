import { useState } from "react";
import styled from "styled-components";
import Rating from "./components/Rating";
import Result from "./components/Result";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [rating, setRating] = useState(0);
  const ratingData = (data) => {
    setRating(data);
  };

  return (
    <Wrapper>
      {isVisible ? (
        <Rating setIsVisible={setIsVisible} onRatingData={ratingData} />
      ) : (
        <Result rating={rating} />
      )}
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  background: radial-gradient(
    98.96% 98.96% at 50% 0%,
    #232a34 0%,
    #181e27 100%
  );

  border-radius: 30px;
  max-width: 412px;
  height: 416px;
  @media (max-width: 768px) {
    max-width: 327px;
    height: 360px;
  }
`;
