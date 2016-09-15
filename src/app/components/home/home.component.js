// home.component.js

import template from './home.html';
import controller from './home.controller';

let homeComponent = { // es6 Object Literal Extensions
  template,
  restrict: 'E',
  controller
};

export default homeComponent;