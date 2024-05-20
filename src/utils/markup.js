export const createElement = (tagName, props) => {
  const $element = document.createElement(tagName);
  if (!props) return $element;
  if (props.id) $element.id = props.id;
  if (props.className) $element.className = props.className;
  return $element;
};
