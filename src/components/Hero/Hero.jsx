import { HeroContainer, HeroHeader } from "./HeroStyles";
import HeroItems from "./HeroItems";

export default function Hero() {
  return (
    <HeroContainer>
      <HeroHeader>
        <h1>WINTAC - магазин військової амуніції</h1>
        <a href="">Перейти в повний каталог</a>
      </HeroHeader>
      <HeroItems />
    </HeroContainer>
  );
}
