import styled from "styled-components";

export const SearchG=styled.div`
    display: flex;
    align-items: center;
    width: 300px;
    height: 45px;
    border: 1px solid #AAC0C5;
    border-radius: 16px;
    padding: 15px;

    @media only screen and (max-width: 320px) {
    width: 100%;
  }
`

export const TextInput=styled.input.attrs({
    type:'text',
    placeholder:"Search"
})`
    color: "#F8FCFC";
    border: 0;
    width: 90%;
    margin-left: 5px;
    &:focus{
        outline:0
    }
`