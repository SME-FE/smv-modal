import { getType } from '../utils';

const plugins = {
  beforeMount: [],
  mounted: [],
  beforeSubmit: [],
  submitted: [],
  beforeClose: [],
  closed: [],
  destroyed: [],
};

function handlePluginErr() {}

export function installPlugin(plg, opts) {
  if (!plg.install || typeof plg.install !== 'function') {
    handlePluginErr();
    return;
  }

  // TODO
}

export function installPlugins(plgs, opts) {
  if (getType(plgs) === 'Object') {
  } else if (getType(plgs) === 'Array') {
  } else {
    handlePluginErr();
  }
}

export function post(lifecycle, target, ...args) {
  const callers = plugins[lifecycle];
  callers.reduce((tg, caller) => {
    return caller(tg, ...args);
  }, target);
}
