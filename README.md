# js-method-loader
Javascript method loader, and action listener binded with data attribute.

Main js router is borrowed from Wordpress Sage Starter theme.

The idea behind this method loader is the approach for using actions on elements.

Let's say that action has to be run on button element. To create action with this approach use data attribute on that element like this:

    <button class="site__totop" data-method="bckToTop"></button>
    
All elements with that "data-method" are triggered in JS.

This will trigger bckToTop.js file.
Method loader will find BckToTop class, and run it.

All methods need's to be imported add all classes added inside classes object.
Like so:

    import aboutUsSlider from "./methods/aboutUsSlider";
    import anchorList from "./methods/anchorList";
    import bckToTop from "./methods/bckToTop";

    let classes = {
      aboutUsSlider,
      anchorList,
      bckToTop
    };
    
This is it !!
Enjoy :)
