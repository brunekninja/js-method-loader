import LoadMethods from "../domMethods";

export default {
  init() {
    const methods = new LoadMethods();

    methods.loadMethods();
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
