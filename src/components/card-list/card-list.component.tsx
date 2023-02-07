import Card from "../card/card.component";
import "./card-list.styles.css";
import { Monster } from "../../App";

type CardListProp = {
  monsters: Monster[] /* dizideki elemanlarının tamamının type'i Monster olsun */
};

const CardList = ({ monsters }: CardListProp) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;
