// @flow
import { checkHexColor, appendWidget } from '../src';

const htmlToElement = (html) => {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content.firstChild;
};


test('checkHexColor', () => {
  expect(checkHexColor('#fff')).toBe('#fff');
});

test('appendWidget', () => {
  const node = htmlToElement('<div data-size="m" data-title-text="dfsf" data-bg-color="" data-button-color="de1c1c" id="point"></div>');
  document.body.appendChild(node);
  const template = '<div class="travelpayoutsjs-bookpage travelpayoutsjs-bookpage--m" style="background-color: #4A90E2 !important"><h2 class="travelpayoutsjs-title">dfsf</h2><div class="travelpayoutsjs-content"><p class="travelpayoutsjs-info">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p><form action="#" class="travelpayoutsjs-form"><label class="travelpayoutsjs-form-item"><input type="text" placeholder="Depart date" class="travelpayoutsjs-input js-travelpayoutsjs-datepicker"></label><label class="travelpayoutsjs-form-item"><input type="text" placeholder="Return date" class="travelpayoutsjs-input js-travelpayoutsjs-datepicker"></label><div class="travelpayoutsjs-form-item"><input type="submit" value="search" style="background-color: #F5A623 !important" class="travelpayoutsjs-input travelpayoutsjs-input--button"></div></form></div></div>';
  appendWidget('#point');
  expect(document.getElementById('point').innerHTML).toBe(template);
});

