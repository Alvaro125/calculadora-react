import styled from "styled-components";

const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #AAAAFF;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto';
    

    input {
        width: 100%;
        height: 75px;
        background-color: #0e0e0e;
        border-bottom: solid 4px #1a1a1a;
        border-right: solid 4px #1a1a1a;
        border-top: solid 4px #000000;
        border-left: solid 4px #000000;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 0 10px;
        font-size: 24px;
        font-family: 'Roboto';
        color: #FFFFFF;
    }
`
const Input = ({value,style}:{value:string,style?: any}) => {
    return (
      <InputContainer style={style}>
        <input disabled value={value}/>
      </InputContainer>
    );
  }
export default Input;