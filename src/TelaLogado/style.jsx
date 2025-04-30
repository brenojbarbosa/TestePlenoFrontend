import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: #121214;
`;

export const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #01121F;
  padding: 16px;

  @media (max-width: 728px) {
    padding: 12px;
    background-color: #021A30;
  }
`;

export const ContainerHeader = styled.div`
  width: 100%;
  height: 118px;
  background-color: #01121F;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 728px) {
    flex-direction: column;
    height: auto;
    padding: 12px;
  }
`;

export const Logo = styled.img`
  width: 113px;
  height: 113px;

  @media (max-width: 728px) {
    width: 113px;
    height: 113px;
  }
`;

export const ButtonBack = styled.button`
  width: 55.49px;
  height: 32px;
  border-radius: 4px;
  padding: 0 16px;
  background-color: #021A30;
  color: #DEEEFF;
  font-weight: 600;
  font-size: 12px;
  line-height: 28.42px;
  border: none;

  &:hover {
    background-color: #023047;
    cursor: pointer;
  }

  @media (max-width: 728px) {
    font-size: 12px;
    border: 1px solid black;

  }
`;

export const H2Welcome = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  color: #F8F9FA;
  margin: 0;
  padding-left: 33px;


  @media (max-width: 728px) {
    font-size: 18px;
    text-align: center;
  }
`;

export const PCargo = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: #868E96;
  margin: 0;

  @media (max-width: 728px) {
    font-size: 12px;
    text-align: center;
  }
`;

export const H2Message = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  color: #F8F9FA;
  margin: 0;
  text-align: center;
  white-space: nowrap;

  @media (max-width: 728px) {
    font-size: 18px;
  }
`;

export const P = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24.36px;
  color: #ffffff;
  margin: 0;
  text-align: center;

  @media (max-width: 728px) {
    font-size: 16px;
    line-height: 24.36px;
  }
`;

export const ContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background-color: #021A30;
  flex: 1;
  padding: 40px 16px 0 16px;
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
`;
