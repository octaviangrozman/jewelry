import { injectGlobal } from 'styled-components';
import { COLORS } from './styles';

const styles = injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Karla:400,400i,700,700i&subset=latin-ext');
  @import url('https://fonts.googleapis.com/css?family=Hind:300,400,500,600,700|Libre+Franklin:100,200,200i,300,300i,400,400i,500,500i,600,700,800i,900');
  /* Font-family: Hind, Libre Franklin, Karla */

  html, body {
    display: block;
    min-height: 100%;
    min-width: 100%;
    margin: 0;
    font-family: 'Hind', sans-serif, serif;
    color: ${COLORS.BLACK};
  }

  #root {
    display: block;
    min-height: 100%;
    min-width: 100%;

    input {
      border-radius: 0px;
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a, a:visited, a:link {
    color: ${COLORS.BLACK};
    text-decoration: none;
  }
`;

export default styles;
