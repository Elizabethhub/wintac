import ecipMob from "../../assets/mob/ecip-mob.png";
import clothMob from "../../assets/mob/cloth-mob.png";
import shoesMob from "../../assets/mob/shoes-mob.png";
import knifeMob from "../../assets/mob/knife-mob.png";
import { HeroItemWrapper, HeroList, ItemLink, ItemText } from "./HeroStyles";

export default function HeroItems() {
  const itemsData = [
    { text: "Екіпірування і спорядження", pic: ecipMob },
    { text: "Одяг", pic: clothMob },
    { text: "Взуття", pic: shoesMob },
    { text: "Ножі, ліхтарі, біноклі", pic: knifeMob },
  ];
  return (
    <HeroList>
      {itemsData.map((item) => {
        return (
          <HeroItemWrapper key={item.text} style={{ backgroundImage: `url(${item.pic})` }}>
            <ItemText>{item.text}</ItemText>
            <ItemLink href="">`{"Детальніше >"}`</ItemLink>
          </HeroItemWrapper>
        );
      })}
    </HeroList>
  );
}
