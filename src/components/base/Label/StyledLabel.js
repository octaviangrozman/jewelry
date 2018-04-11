import styled from 'styled-components';

const StyledLabel = styled.span`
  display: ${props => (props.fluid ? 'inline-block' : 'inline-flex')};
  text-align: center;
  width: ${props => (props.fluid ? '100%' : 'auto')};
  background: ${props => props.color};
  color: ${props => (props.color === '#fff' ? '#555' : 'white')}!important;
  border: ${props => (props.color === '#fff' ? '1px solid #ddd' : 'none')};
  font-size: 13px;
  font-weight: 600;
  padding: 1 6;
  margin: 5px 5px 5px 0;
  border-radius: 4px;
  position: relative;

  &:hover {
    opacity: ${props => (props.hover ? '.6' : 1)};
  }
`;

export default StyledLabel;
