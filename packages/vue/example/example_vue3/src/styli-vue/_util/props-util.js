// import { isVNode, Fragment, Comment, Text, h } from 'vue';
import { isVNode, Fragment } from 'vue';
import isValid from './isValid';

const getSlot = (self, name = 'default', options = {}) => {
  if (isVNode(self)) {
    if (self.type === Fragment) {
      return name === 'default' ? flattenChildren(self.children) : [];
    } else if (self.children && self.children[name]) {
      return flattenChildren(self.children[name](options));
    } else {
      return [];
    }
  } else {
    let res = self.$slots[name] && self.$slots[name](options);
    return flattenChildren(res);
  }
};
const flattenChildren = (children = [], filterEmpty = true) => {
  const temp = Array.isArray(children) ? children : [children];
  const res = [];
  temp.forEach((child) => {
    if (Array.isArray(child)) {
      res.push(...flattenChildren(child, filterEmpty));
    } else if (child && child.type === Fragment) {
      res.push(...flattenChildren(child.children, filterEmpty));
    } else if (child && isVNode(child)) {
      if (filterEmpty && !isEmptyElement(child)) {
        res.push(child);
      } else if (!filterEmpty) {
        res.push(child);
      }
    } else if (isValid(child)) {
      res.push(child);
    }
  });
  return res;
};
export function isEmptyElement(c) {
  return (
    c.type === Comment ||
    (c.type === Fragment && c.children.length === 0) ||
    (c.type === Text && c.children.trim() === '')
  );
}
export { getSlot };
