import styled from 'styled-components';

const PanelWrapper = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  width: 100%;
  margin-bottom: 40px;
`;

PanelWrapper.defaultProps = {
  visible: true
};

export default PanelWrapper;
