import styled from "styled-components";

export const LogoContainer = styled.div `
width: 217px;
height: 217px;
top: -24;
left: 614px;

@media(max-width: 728px){
  width: 148px;
  height: 148px;
  left: 86px;
  display: flex;
  justify-content: center;
  align-items: center;
  
}


`
export const Logo = styled.img`
width: 217px;
height: 217;
top: -24;
left: 614px;


`

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #021A30;
  width: 369px;
  height: 502px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  gap: 1rem;

  @media (max-width: 728px) {
    width: 296px;
    height: 402.69px;
    padding: 33.69px 17.65px;
    border-radius: 3.21px;
    gap: 17.65px;
  }
`;
export const H3 = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  color: #f8f9fa;

  @media (max-width: 728px) {
    font-size: 14.44px;
  }
`;
export const Input = styled.input`
  width: 329.3px;
  height: 48px;
  padding: 1rem;
  box-sizing: border-box;
  background-color: #343b41;
  border: 2px solid white;
  color: #f8f9fa;
  &::placeholder {
    font-weight: 400;
    font-size: 16.24px;
    line-height: 26.39px;
    letter-spacing: 0;
    color: #f8f9fa;
    opacity: 1;
    text-shadow: 1px 1px 2px #000;
  }

  @media (max-width: 728px) {
    width: 264.66px;
    height: 38.5px;
    border-radius: 3.21px;
    border: 0.98px;

    &::placeholder {
      font-size: 16.24px;
    }
  }
`;
export const Label = styled.label`
  align-self: flex-start;
  width: 31px;
  color: #f8f9fa;
  font-size: 12.18px;

  @media (max-width: 728px) {
    font-size: 9.77px;
  }
`;
export const Button = styled.button`
  width: 324px;
  height: 58px;
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  line-height: 26.39px;
  outline: none;
  border-radius: 4px;
  border: none;

  &:hover {
    background-color: #d35400; 
    cursor: pointer;
  }

  &:active {
    transform: scale(0.98);
    opacity: 0.8;
  }

  @media (max-width: 728px) {
    width: 259.9px;
    height: 38.5px;
    border-radius: 1.22px;
  }
`;


export const P = styled.p`
  width: 170px;
  color: #868e96;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  white-space: nowrap;
  @media(max-width:728px){
    font-size: 9.63px;

  }
`;
export const WrapperText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
