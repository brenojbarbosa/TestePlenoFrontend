import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
`;

export const Logo = styled.img`
  width: 148px;
  height: 148px;
`;

export const ButtonBack = styled.button`
  width: 67.49px;
  height: 40.11px;
  font-size: 12px;
  font-weight: 600;
  line-height: 28.42px;
  border-radius: 4px;
  padding: 0 16.24px;
  color: #f8f9fa;
  background-color: #021a30;
  margin-left: auto;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    background-color: #1a2930;
    color: #ffffff;
  }

  @media (max-width: 728px) {
    width: 79.54px;
    height: 31.95px;
    padding: 16.24px;
    font-size: 9.59px;
    line-height: 22.73px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  max-width: 370px;
  padding: 42px 22px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  background-color: #021a30;
  color: #f8f9fa;
  margin-bottom: 50px;
  box-sizing: border-box;

  @media (max-width: 728px) {
    width: 296px;
    padding: 33.58px 17.59px;
  }
`;

export const H2 = styled.h2`
  width: 127px;
  height: 28px;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  margin: 0 auto;

  @media (max-width: 728px) {
    width: 101.54px;
    height: 22.39px;
    font-size: 14.39px;
    line-height: 22.39px;
  }
`;

export const P = styled.p`
  width: 166px;
  height: 22px;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  color: #868e96;
  margin: 0 auto;

  @media (max-width: 728px) {
    width: 132.72px;
    height: 17.59px;
    font-size: 9.59px;
    line-height: 17.59px;
  }
`;

export const Label = styled.label`
  font-weight: 400;
  font-size: 12.18px;
  color: #f8f9fa;
  display: inline-block;

  @media (max-width: 728px) {
    font-size: 9.74px;
  }
`;

export const Input = styled.input`
  width: 329.93px;
  height: 48px;
  border-radius: 1.22px;
  padding: 16.24px;
  margin-bottom: 10.15px;
  background-color: #343b41;
  border: 1px solid transparent;
  box-sizing: border-box;
  color: #ffffff;

  &::placeholder {
    font-weight: 400;
    font-size: 16.24px;
    line-height: 26.39px;
    color: #868e96;
  }

  &:focus {
    outline: none;
    border: 1px solid #ffffff;
    background-color: #2c343a;
  }

  @media (max-width: 728px) {
    width: 263.79px;
    height: 38.38px;
    border-radius: 3.2px;

    &::placeholder {
      font-size: 12.99px;
      line-height: 21.1px;
    }
  }
`;

export const ButtonRegister = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  padding: 0 22.33px;
  margin-bottom: 10.15px;
  color: #ffffff;
  background-color: #8b3d07;
  border: 1px solid transparent;
  box-sizing: border-box;

  &:hover {
    background-color: #d35400;
    cursor: pointer;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(211, 84, 0, 0.6);
  }

  @media (max-width: 728px) {
    width: 260.65px;
    height: 38.38px;
    font-size: 12.79px;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 48px;
  padding: 10px 16px;
  margin-bottom: 10.15px;
  background-color: #343b41;
  border: 1px solid transparent;
  color: #868e96;
  font-weight: 400;
  font-size: 16px;
  line-height: 26.39px;
  box-sizing: border-box;
  border-radius: 1.22px;
  appearance: none;

  option {
    color: #343b41;
    background-color: #f8f9fa;
  }

  option[disabled] {
    color: #868e96;
    background-color: #343b41;
  }
`;

export const SelectContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 329.93px;
  height: 48px;
`;

export const ArrowIcon = styled.i`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 28px;
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  font-size: 16px;
  pointer-events: none;
  color: #868e96;
`;
