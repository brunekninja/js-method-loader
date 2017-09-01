class BckToTop{

  constructor(_this, method){
    this.init(_this, method);
  }

  init(_this){

    _this.click(function() {
      $("body").animate({ scrollTop: 0} , 1000);
    });

  }

}

export default BckToTop;


