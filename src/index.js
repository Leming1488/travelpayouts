// @flow
import Pikaday from 'pikaday';
import moment from 'moment';

/*eslint-disable */
//suppress all warnings between comments
import widgetCss from './style/index.scss';
import pikadayCss from './style/pikaday.scss';
/*eslint-enable */

export const checkHexColor = hex => /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(`${hex}`) && hex;

const defaultOptions = {
  locale: window.navigator.userLanguage || window.navigator.language || 'en',
  sizeStyle: 'l',
  buttonColor: '#F5A623',
  backgroundColor: '#4A90E2',
  placeholder1Text: 'Depart date',
  placeholder2Text: 'Return date',
  buttonText: 'search',
  titleText: 'Where does it come from? Why do we use it?',
  paragraphText: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
};

// const setWidth = container => {
//   const width = container.offsetWidth;
//   defaultOptions.sizeStyle = width <= 286 ?
// }
const merge = (object1 = {}, object2 = {}) => {
  const mergeObject = {};
  Object.keys(defaultOptions).forEach((key) => {
    mergeObject[key] = object1[key] || object2[key];
  });
  return mergeObject;
};

const render = options => `
  <div class="travelpayoutsjs-bookpage travelpayoutsjs-bookpage--${options.sizeStyle}" style="background-color: ${options.backgroundColor} !important">
    <h2 class="travelpayoutsjs-title">${options.titleText}</h2>
    <div class="travelpayoutsjs-content">
      <p class="travelpayoutsjs-info">${options.paragraphText}</p>
      <form action="#" class="travelpayoutsjs-form">
        <label class="travelpayoutsjs-form-item">
          <input type="text"  placeholder="${options.placeholder1Text}" class="travelpayoutsjs-input js-travelpayoutsjs-datepicker"/>
        </label>
        <label class="travelpayoutsjs-form-item">
          <input type="text" placeholder="${options.placeholder2Text}" class="travelpayoutsjs-input js-travelpayoutsjs-datepicker"/>
        </label>
        <div class="travelpayoutsjs-form-item">
          <input type="submit" value="${options.buttonText}" style="background-color: ${options.buttonColor} !important"
          class="travelpayoutsjs-input travelpayoutsjs-input--button"/>
        </div>
      </form>
    </div>
  </div>`.trim().replace(/>\W+</g, '><');

const datepicker = node => new Pikaday({
  field: node,
  i18n: {
    months: moment.months(),
    weekdays: moment.weekdays(),
    weekdaysShort: moment.weekdaysShort(),
  },
  format: 'DD/MM/YYYY',
});
export const appendWidget = (nodes) => {
  [...document.querySelectorAll(nodes)].forEach((node) => {
    const container = node;
    const userOptions = {
      locale: container.getAttribute('data-locale'),
      sizeStyle: container.getAttribute('data-size'),
      buttonColor: checkHexColor(container.getAttribute('data-button-color')),
      backgroundColor: checkHexColor(container.getAttribute('data-background-color')),
      placeholder1Text: container.getAttribute('data-placeholder1-text'),
      placeholder2Text: container.getAttribute('data-placeholder2-text'),
      buttonText: container.getAttribute('data-button-text'),
      titleText: container.getAttribute('data-title-text'),
      paragraphText: container.getAttribute('data-paragrph-text'),
    };
    const mergeOptions = merge(userOptions, defaultOptions);
    container.innerHTML = render(mergeOptions);
    moment.locale(mergeOptions.locale);
    [...container.querySelectorAll('.js-travelpayoutsjs-datepicker')].forEach(element => datepicker(element));
    return true;
  });
};

appendWidget('#point');
