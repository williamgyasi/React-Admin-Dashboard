import styled from "styled-components";
import tree from "../../Assets/tree.png";
import avatar from "../../Assets/avatar.png";

export const HeadG = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media only screen and (max-width: 76px) {
   
  }
`;

export const TitleLg = styled.h3`
  font-size: 28px;
  font-weight: 600;
  line-height: 100%;
  font-style: normal;
  margin-left: 20px;
  @media only screen and (max-width: 768px){
  font-size:15px;

  }
`;

export const ButtonContainer = styled.div`
  border-radius: 10px;
  padding: 5px;
  background-color: #017189;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 5px;
  top: 10px;
  cursor: pointer;
 visibility: hidden;
 z-index: 100;
 @media only screen and (max-width:320px){
    visibility: visible;
  }
`;

export const TitleSm = styled.h4`
  font-size: 12px;
  color: ${(props) => props.color};
  font-weight: 500;
`;

export const Profiler = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 320px) {
    flex-direction: column;
  }
`;


export const PlantedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  margin-right: 20px;
  @media only screen and (max-width: 320px) {
    flex-direction: row;
    margin: 0;
  }
`;

export const PlantedTitle = styled.span`
  font-size: 12px;
  font-weight: 300;
  line-height: 150%;
  word-spacing: 2px;
  margin-left: 5px;
`;

export const TreeImg = styled.img.attrs({
  src: `${tree}`,
  alt: "Tree",
})`
  width: 20px;
  height: auto;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: 20px;
  @media only screen and (max-width: 320px) {
    font-size: 16px;
    align-items: flex-start;
    margin-left: 0;
    margin-bottom: 10px;
  }
`;

export const Avatar = styled.img.attrs({
  src: `${avatar}`,
  alt: "Tree",
})`
  width: 30px;
  height: auto;
  margin-right: 10px;
`;
