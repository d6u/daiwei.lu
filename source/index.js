import './css/index.scss';

const NAVBAR_ACTIVE_CLS = 'o-navbar__link--active';

let buttons = document.querySelectorAll('[data-page]');

let handleClickEvent = event => {
  event.preventDefault();

  let { target } = event;
  let { dataset: { page } } = target;
  let targetClassName = `o-container__target--${page}`;

  for (let btn of buttons) {
    btn.classList.remove(NAVBAR_ACTIVE_CLS);
  }

  target.classList.add(NAVBAR_ACTIVE_CLS);

  for (let className of document.body.classList) {
    if (targetClassName !== className) {
      document.body.classList.remove(className);
    }
  }

  document.body.classList.add(targetClassName);
}

for (let btn of buttons) {
  btn.addEventListener('click', handleClickEvent, false);
}


// const select = selector => document.querySelectorAll(selector);
// const listen = _.curry((element, name, handler) =>
//   element.addEventListener(name, handler, false));
// const addClass = _.curry((element, className) =>
//   element.classList.add(className));
// const removeClass = _.curry((element, className) =>
//   element.classList.remove(className));

// {
//   const addClassToDocument = addClass(document.body);
//   const handleMouseEnter   = ({target}) =>
//     addClassToDocument(`t-works-${target.dataset.showcase}`);
//   const listenToMouseEnter = listen(_, 'mouseenter', handleMouseEnter);
//   const eachElement        = _.partial(_.forEach, _, listenToMouseEnter);
//   const reactOnMouseEnter  = _.flow(select, eachElement);

//   reactOnMouseEnter('[data-showcase]');
// }

// {
//   const removeClassToDocument = removeClass(document.body);
//   const handleMouseEnter      = ({target}) =>
//     removeClassToDocument(`t-works-${target.dataset.showcase}`);
//   const listenToMouseLeave    = listen(_, 'mouseleave', handleMouseEnter);
//   const eachElement           = _.partial(_.forEach, _, listenToMouseLeave);
//   const reactOnMouseLeave     = _.flow(select, eachElement);

//   reactOnMouseLeave('[data-showcase]')
// }
