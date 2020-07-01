import styled from "styled-components";

const ForumBox = styled.div`
  display: flex;
  background-color: ${(props) => (props.index % 2 === 0 ? "white" : "#F6F6F6")};
  flex-direction: row;
  min-height: 8rem;
  width: 100%;
  /* border-radius: 0.3rem; */
  /* border: 0.1rem solid #d1d1d1; */
  align-items: center;
  border-left: 1rem solid darkturquoise;
  padding: 3rem;
  font-size: 2rem;
  cursor: pointer;
  color: #404040;
  box-shadow: 2px 2px 9px 0px #d1d1d1;

  :hover {
    background: aliceblue;
  }
`;

export const Styles = {
  ForumBox,
};
