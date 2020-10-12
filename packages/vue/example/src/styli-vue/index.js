import Div from './Div/index.js';

const components = [Div];

const install = function (Vue, opts = {}) {
  console.log('opts-->', opts);
  // locale.use(opts.locale);
  // locale.i18n(opts.i18n);

  components.forEach((component) => {
    console.log('注册组件---->', component);
    Vue.component(component.name, component);
  });
};
export default {
  version: '0.0.1',
  // locale: locale.use,
  // i18n: locale.i18n,
  install,
  Div,
};
