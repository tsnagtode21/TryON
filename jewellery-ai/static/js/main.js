   function add_images(images){
   debugger;
      var carousel_div = document.getElementById('owl-carouselid')
      var carouseldata = ""
      for(var i=0;i<images.length;i++){
           carouseldata += "<div><div class='card'><img src=\'" + images[i] + "\' alt='Earring1'></div></div>"
      }
      carousel_div.innerHTML=carouseldata

      $('.owl-carousel').each(function() {
            var carouselId = $(this).attr('id');
            $('.owl-carousel').owlCarousel({
                autoplay: true,
                autoplayTimeout: 2000,
                loop: true,
                margin: 10,
                items: 4,
                nav: true, // Enable navigation arrows
                navText: [
                    '<i class="fa fa-chevron-left"></i>', // Use font awesome icons or custom images
                    '<i class="fa fa-chevron-right"></i>'
                ]
            });
          });
   }









//// Fetch the images from the Django backend
//fetch('/slider-images/')
//    .then(response => response.json())
//    .then(data => {
//        // Loop through the images and create the slider
//        data.forEach(image => {
//            const sliderImage = document.createElement('img');
//            sliderImage.src = image.url;
//            sliderImage.classList.add('slider-image');
//            document.getElementById('slider').appendChild(sliderImage);
//        });
//
//        // Initialize the Bootstrap carousel
//        $('#slider').carousel({
//            interval: 2000, // Set the interval between slides (in milliseconds)
//            wrap: true, // Enable carousel wrap-around
//            keyboard: false // Disable keyboard navigation
//        });
//    });
