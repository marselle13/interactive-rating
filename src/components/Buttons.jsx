import { useState } from "react";
import styled from "styled-components";

function Buttons(props) {
  const Values = [1, 2, 3, 4, 5];
  const [active, setActive] = useState(0);

  const submitRating = function () {
    if (!active) return;
    props.setIsVisible(false);
    props.onSaveRatingData(active);
  };

  return (
    <div>
      <ButtonStyle>
        {Values.map((value, index) => (
          <Button
            key={index + 1}
            value={value}
            onClick={() => {
              setActive(value);
            }}
            backgroundColor={value === active ? "#7c8798" : "#262e38"}
            textColor={value === active ? "#fff" : "#7c8798 "}
          >
            {value}
          </Button>
        ))}
      </ButtonStyle>
      <Submit onClick={submitRating}>Submit</Submit>
    </div>
  );
}

export default Buttons;

const ButtonStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 0.5rem;
  margin-top: 1.5rem;
`;

const Button = styled.button`
  background: ${(props) => props.backgroundColor};
  width: 51px;
  height: 51px;
  border: none;
  border-radius: 50px;
  font-weight: 700;
  cursor: pointer;
  color: ${(props) => props.textColor};
  font-size: 16px;
  &:hover {
    background: #fc7614;
    color: #fff;
  }
  @media (max-width: 768px) {
    &:hover {
      background: #7c8798;
    }
    font-size: 14px;
    width: 42px;
    height: 42px;
  }
`;

const Submit = styled.button`
  width: 100%;
  border: none;
  text-transform: uppercase;
  background: #fc7614;
  padding: 11px 0px;
  border-radius: 22.5px;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 2px;
  color: #fff;
  margin-top: 2rem;
  &:hover {
    background: #fff;
    color: #fc7614;
  }
  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`;
