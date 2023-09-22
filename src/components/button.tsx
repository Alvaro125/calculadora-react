import styled from "styled-components"

const ButtonContainer = styled.button`
    padding: 20px;
    border-bottom: solid 14px #313131;
    border-right: solid 14px #313131;
    border-top: solid 14px #474747;
    border-left: solid 14px #474747;
    border-radius: 0;
    background-color: #444444;
    color: #FFFFFF;
    font-size: 1.5rem;
    font-weight: 700;
    flex: 1;
    
    &:hover {
        border-bottom: solid 14px #474747;
        border-right: solid 14px #474747;
        border-top: solid 14px #313131;
        border-left: solid 14px #313131;
        opacity: 0.75;
    }
`

const Button = (props: {
    onClick: any
    style?: any
    children: any
}) => {
    return(
    <ButtonContainer onClick={props.onClick} style={props.style}>
        {props.children}
    </ButtonContainer>
    )
}
export default Button;