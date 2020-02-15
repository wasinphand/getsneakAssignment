import styled from 'styled-components';

export const Title = styled.div`
    padding : 20px;
    border-style : solid;
    margin : 10px;
    `
export const Select = styled.select`
        width : 12%;
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
    border: none;
`  

export const PictureStyle = styled.svg`
    position: 'absolute';
    width: '20px';
    top:'8px';
    right:'16px';
    background-color : 'red';
`
export const divStyle = styled.div.attrs({
    margin : (props:any) => props.margin || '0px',
    padding : (props:any) => props.padding || '0px',
    display : (props:any) => props.display || '',
    position : (props:any) => props.position || '',
})