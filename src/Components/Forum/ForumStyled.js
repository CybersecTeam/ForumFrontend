import styled from "styled-components";

const ForumBox = styled.div`
  display: flex;
  background-color: ${(props) =>
    props.index % 2 === 0 ? "#191352" : "#271635"};

  flex-direction: row;
  min-height: 8rem;
  width: 100%;
  /* border-radius: 0.3rem; */
  /* border: 0.1rem solid #d1d1d1; */
  align-items: center;
  border-left: ${(props) =>
    props.isSelected ? "1rem solid blue;" : "1rem solid purple;"};
  padding: 3rem;
  font-size: 2rem;
  cursor: pointer;
  color: #a7a7a7;
  box-shadow: 2px 2px 9px 0px #202020;
  margin-bottom: 1rem;
  :hover {
    background: #404040;
  }
`;

export const Styles = {
  ForumBox,
};
