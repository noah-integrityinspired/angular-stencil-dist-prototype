import { b as bootstrapLazy } from './index-b461fe45.js';
export { s as setNonce } from './index-b461fe45.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1],"size":[2]}]]],["wrapper-my-component",[[1,"wrapper-my-component"]]]], options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map