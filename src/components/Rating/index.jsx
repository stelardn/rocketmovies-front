import { Container } from "./styles";
import FullStar from "../../assets/full-star.svg";
import HollowStar from "../../assets/hollow-star.svg";


export function Rating({ rating }) {
  return (
    <Container>
      {[...Array(rating)].map(() => <img src={FullStar} />)}
      {[...Array(5 - rating)].map(() => <img src={HollowStar} />)}
    </Container>
  )
}