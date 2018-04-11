import styled from 'styled-components';

const Svg = styled.svg`
    display: inline-block;
    vertical-align: middle;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    margin: 0 10px;
    ${props => props.onClick && 'cursor: pointer;'}
    ${props => props.hover && 'cursor: pointer;'}
    &:hover{
      fill-opacity: ${props => (props.hover ? '.6' : 1)};
    }
`;


export default Svg;
