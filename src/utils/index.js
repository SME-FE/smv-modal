import Vue from 'vue';

export const hasOwn = (obj, key) => {
  return Object.prototype.hasOwnProperty.call(obj, key);
};

export const getType = v => Object.prototype.toString.call(v).slice(8, -1);

export const isSSR = () => Vue.prototype.$isServer;

export const isVnode = vnode => vnode && hasOwn(vnode, 'componentOptions');

export const isSFC = content => {
  return getType(content.render) === 'Function' || /\.vue/.test(content.__file);
};

export const templateParser = args => {
  if (args.length <= 1) {
    return { content: args[0] };
  } else if (args.length === 2) {
    return { content: args[1] };
  } else {
    return {
      title: args[1],
      content: args[2],
    };
  }
};

export const getContentType = content => {
  if (!content || getType(content) === 'String') return 'string';
  if (isSFC(content)) return 'sfc';
  if (isVnode(content)) return 'vnode';
  throw new TypeError(
    `Error in Modal(options), expected [options.content] to be SFC, VNode or String, but got [${getType(
      content
    )}]`
  );
};

export const VnodeFactory = vnode => {
  return Vue.extend({
    name: 'smv-modal-content',
    _xname: 'smv-modal-content',
    functional: true,
    render: function(h) {
      return vnode;
    },
  });
};

export const CompFactory = comp => {
  const CompContructor = Vue.extend(comp);
  CompContructor._xname = `${comp.name}`;
  return CompContructor;
};
