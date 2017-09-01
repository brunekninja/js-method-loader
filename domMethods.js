import aboutUsSlider from "./methods/aboutUsSlider";
import anchorList from "./methods/anchorList";
import bckToTop from "./methods/bckToTop";

let classes = {
  aboutUsSlider,
  anchorList,
  bckToTop
};

class LoadMethods {
  constructor(){
    this.context = $(document);
  }

  loadMethods() {

    this.context.find( '*[data-method]' ).each(function(){
      let that = $(this),
        methods = that.attr('data-method');

      $.each(methods.split(" "), function(index, methodName){
        try {
          if(typeof classes[methodName] !== 'undefined'){
            new classes[methodName](that, methodName);
          }
        }
        catch(e) {
          console.log(e);
        }
      });
    });

  }

}

export default LoadMethods;
