import styled from "styled-components"
export const Container = styled.div`
    display: flex;
    margin:20px;
`
export const Description = styled.div`
    margin : 20px;
`
export const Boxes = styled.div`
    display: inline-block;
    margin-left: 15px;
    margin-bottom: 20px;
`
export const Title = styled.div`
    padding : 20px;
    border-style : solid;
    margin : 10px;
    `
export const Select = styled.select`
        width : 30%;
        height : 20px;
        background : white;
        color: gray;
        padding-left: 5px;
        font-size: 14px;
        border: none;
        margin-left: 30px;

        option {
            color: black;
            background: white;
            display: flex;
            white-space: pre;
            min-height: 20px;
            padding: 0px 2px 1px;
        }
    `
export const Button = styled.button`
    position: relative;
    border: none;
`  
interface YourProps {
    primary: boolean
}

export const PictureStyle = styled.svg`
    position: absolute;
    width: 20px;
    top:8px;
    right:16px;
    background-color : ${(props:YourProps) => props.primary ? "red" : "white"};
    
`
