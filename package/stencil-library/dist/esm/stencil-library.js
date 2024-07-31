import { p as promiseResolve, b as bootstrapLazy } from './index-b461fe45.js';
export { s as setNonce } from './index-b461fe45.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.19.2 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1],"size":[2]}]]],["wrapper-my-component",[[1,"wrapper-my-component"]]]], options);
});

//# sourceMappingURL=stencil-library.js.map