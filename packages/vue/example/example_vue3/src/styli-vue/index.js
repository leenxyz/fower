// import Div from './Div/index.js';
import Div from './D/Div.jsx';
import P from './P/P.jsx'
import Span from './S/Span'
import H1 from './H/H1.jsx';
import H2 from './H/H2.jsx';
import H3 from './H/H3.jsx';
import H4 from './H/H4.jsx';
import H5 from './H/H5.jsx';
import H6 from './H/H6.jsx';
import Hr from './H/Hr.jsx';
import A from './A/A.jsx';
import Abbr from './A/Abbr.jsx';
import Acronym from './A/Acronym.jsx';
const components = [
  Div,
  P,
  Span,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Hr,
  A,
  Abbr,
  Acronym
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

export default {
  version: '0.0.1',
  install,
  Div,
  P,
  Span,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Hr,
  A,
  Abbr,
  Acronym
}