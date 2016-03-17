// external js: flickity.pkgd.js
  var $gallery = $('.gallery').flickity({cellSelector: 'img',imagesLoaded: true,percentPosition: false, autoPlay: true, lazyLoad: true, lazyLoad: 3, autoPlay: 4500 });
  var $caption = $('.caption');
  // Flickity instance
  var flkty = $gallery.data('flickity');
  $gallery.on( 'cellSelect', function() {
    // set image caption using img's alt
    $caption.text( flkty.selectedElement.alt )
  });