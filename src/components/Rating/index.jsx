import { Container } from "./styles";
import FullStar from "../../assets/full-star.svg";
import HollowStar from "../../assets/hollow-star.svg";


export function Rating({ rating, ...rest }) {
  return (
    <Container>
      {[...Array(rating)].map((el, index) => <img src={FullStar} key={index * Math.random()} />)}
      {[...Array(5 - rating)].map((el, index) => <img src={HollowStar} key={index * Math.random()} />)}
    </Container>
  )
}