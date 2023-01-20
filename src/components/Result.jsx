import { Heading, Text } from "./Rating";
import styled from "styled-components";
import illustration from "../images/illustration-thank-you.svg";

function Result(props) {
  return (
    <Block>
      <img src={illustration} alt="" />
      <ResultText>You selected {props.rating} out of 5</ResultText>
      <Heading>Thank you!</Heading>
      <Text>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </Text>
    </Block>
  );
}

export default Result;

const Block = styled.div`
  padding: 45px 32px;
  text-align: center;
  @media (max-width: 768px) {
    padding: 34px 24px;
  }
`;
const ResultText = styled.div`
  padding: 0.25rem 0;
  font-size: 15px;
  line-height: 24px;
  background: #262e38;
  border-radius: 22.5px;
  max-width: 194px;
  margin: 32px auto;
  color: #fc7614;
  @media (max-width: 768px) {
    margin: 24px auto;
  }
`;
