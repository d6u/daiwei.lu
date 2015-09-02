import './css/index.scss';
import _ from 'lodash';

const select = selector => document.querySelectorAll(selector);

const listen = _.curry((element, name, handler) =>
  element.addEventListener(name, handler, false));

const addClass = _.curry((element, className) =>
  element.classList.add(className));

const removeClass = _.curry((element, className) =>
  element.classList.remove(className));

// Page switcher
{
  const NAVBAR_ACTIVE_CLS = 'o-navbar__link--active';

  let buttons = select('[data-page]');

  let handleClickEvent = event => {
    event.preventDefault();

    let { target } = event;
    let { dataset: { page } } = target;
    let targetClassName = `o-container__target--${page}`;

    for (let btn of buttons) {
      removeClass(btn, NAVBAR_ACTIVE_CLS);
    }

    addClass(target, NAVBAR_ACTIVE_CLS);

    for (let className of document.body.classList) {
      if (targetClassName !== className) {
        removeClass(document.body, className);
      }
    }

    addClass(document.body, targetClassName);
  }

  for (let btn of buttons) {
    listen(btn, 'click', handleClickEvent);
  }
}

// Mouseover projects
{
  const container       = select('.o-container__page--works')[0];
  const createClassName = showcase => `o-container__page--showcase-${showcase}`;
  const getShowcase     = _.partial(_.get, _, 'target.dataset.showcase');

  {
    let handleMouseEnter  = _.flow(getShowcase, createClassName, addClass(container));
    let eachElement       = _.partial(_.forEach, _, listen(_, 'mouseenter', handleMouseEnter));
    let reactOnMouseEnter = _.flow(select, eachElement);

    reactOnMouseEnter('[data-showcase]');
  }

  {
    let handleMouseEnter  = _.flow(getShowcase, createClassName, removeClass(container));
    let eachElement       = _.partial(_.forEach, _, listen(_, 'mouseleave', handleMouseEnter));
    let reactOnMouseLeave = _.flow(select, eachElement);

    reactOnMouseLeave('[data-showcase]')
  }
}
