class AboutUsSlider{

  constructor(_this, method){
    this.init(_this, method);
  }

  init(_this){

    _this.slick({
      infinite: true,
      dots: true,
      slidesToShow: 1,
    });

  }

}

export default AboutUsSlider;
