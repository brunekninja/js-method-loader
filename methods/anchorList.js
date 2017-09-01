class AnchorList{

  constructor(_this, method){
    this.init(_this, method);
  }

  init(_this){

    _this.on('click', 'a', function(event){
      event.preventDefault();

      $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 120,
      }, 500);
    });

  }

}

export default AnchorList;
