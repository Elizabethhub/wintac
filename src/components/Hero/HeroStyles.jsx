import styled from "styled-components";
import mainMobileBg from "../../assets/mob/main-bg-mob.png";
import mainDeskTopBg from "../../assets/desktop/main-bg.png";
import triangleMob from "../../assets/mob/triangle-mob.png";
import triangleDesk from "../../assets/desktop/triangle.png";

export const HeroContainer = styled.main`
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  height: 1132px;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: var(--main-dark-khaki);
  /* @media only screen and (min-width: 768px) { */
  background-image: url(${mainMobileBg});
  /* background-triangle: url(${mainMobileBg}); */
  /* } */
  /* @media only screen and (min-width: 768px) and (resolution >= 2ddpx) {
    background-image: ${(props) => props.theme.backgroundWelcomeImageTablet2x};
  } */
  @media only screen and (min-width: 361px) {
    background-image: url(${mainDeskTopBg});
  }
`;

export const HeroHeader = styled.div`
  z-index: 1;
  position: fixed;
  top: 30px;
  left: 0;
  right: 0;
  bottom: 0;
  height: 262px;
  background-repeat: no-repeat;
  background-position: top;
  background-image: url(${triangleMob});
  h1 {
    color: var(--white);
    font-size: 26px;
    font-weight: 400;
    line-height: 36px;
    margin: 40px 30px 20px 30px;
  }
  a {
    display: block;
    color: var(--lemon);
    cursor: pointer;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    margin: 0px 30px 0px 30px;
  }
`;

export const HeroList = styled.ul`
  margin-top: 322px;
`;

export const HeroItemWrapper = styled.li`
  display: flex;
  width: 300px;
  height: 180px;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
  background-size: cover;
  background-position: center;
  border-color: 1px solid var(--light-khaki);
`;

export const ItemText = styled.h3`
  color: var(--white);
  margin-bottom: 10px;
`;

export const ItemLink = styled.a`
  color: var(--lemon);
  cursor: pointer;
  font-weight: 400;
  line-height: 24px;
`;
