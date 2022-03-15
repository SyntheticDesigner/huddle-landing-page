import styled from "styled-components";
export const HuddleMain = styled.div`
  --violet: hsl(257, 40%, 49%);
  --soft-magenta: hsl(300, 69%, 71%);
  --headerBlue: #00252e;
  --iconGrey: #a7b9c8;
  --prevGrey: #e1e8ee;
  --grad1: linear-gradient(131.91deg, #fcbc77 0%, #ff6ab1 100%);
  --grad2: linear-gradient(131.91deg, #01c3fb 0%, #0182fb 100%);
  --grad3: linear-gradient(131.91deg, #fb53c4 0%, #ae53f3 100%);

  background: no-repeat center/cover
    ${({ bgDesk }) => bgDesk && `url(${bgDesk})`};
  height: fit-content;
  min-height: 100vh;
  text-align: left;
  padding: 0px 80px;
  position: relative;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    background: no-repeat top/100% ${({ bgMob }) => bgMob && `url(${bgMob})`};
    padding: 0px 32px;
  }
`;
export const FlexBox = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-self: flex-start;
  justify-content: space-around;
  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
  }
`;
export const Logo = styled.img`
  width: 13rem;
  height: 3rem;
  margin-top: 50px;
  @media (max-width: 1000px) {
    margin-top: 32px;
    width: 10rem;
  }
`;
export const FooterCont = styled.div`
  justify-self: flex-end;
  display: flex;
  justify-content: flex-end;
  color: white;
  margin-bottom: 50px;
  @media (max-width: 1000px) {
    justify-content: center;
    padding-bottom: 32px;
  }
`;
export const SocLink = styled.a`
  margin: 0px 16px;
  border: 2px solid white;
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Section1 = styled.div`
  width: 58%;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 1000px) {
    width: 100%;
    margin: 64px 0px;
  }
`;

export const RegCont = styled.div`
  text-align: left;
  width: 40%;
  padding-left: 32px;
  @media (max-width: 1000px) {
    text-align: center;
    width: 100%;
  }
`;
export const MainH1 = styled.h1`
  color: white;
  margin-bottom: 16px;
  font-size: 2rem;
  line-height: 4rem;
  @media (max-width: 1000px) {
    font-size: 1.7rem;
    line-height: 2.7rem;
  }
`;
export const MainText = styled.p`
  color: white;
  opacity: 0.88;
  line-height: 1.5rem;
  margin-bottom: 16px;
`;
export const RegBtn = styled.button`
  color: var(--violet);
  padding: 16px 64px;
  background: white;
  border: none;
  border-radius: 32px;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 64px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  transition: all 0.3s;
  &:hover{
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.5);
    scale: 1.05;
    color: white;
    background-color: var(--soft-magenta);
  }
`;
