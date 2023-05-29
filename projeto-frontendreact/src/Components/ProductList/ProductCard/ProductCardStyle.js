import styled from "styled-components";
export const CardCaixa = styled.div`
  border: 3px solid black;
  width: 30%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  font-weight: bolder;
  color: black;

  img {
    width: 100%;
    height: 70%;
  }
`;

export const CardTextCaixa = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: bolder;
  button {
    height: 40%;

    font-weight: bolder;
  }
  p {
    font-weight: bolder;
    font-size: 1em;
  }
`;
