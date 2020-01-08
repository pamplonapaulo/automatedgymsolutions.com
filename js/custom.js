(function(){

    'use strict';

    const brand = document.querySelector('.page-header-alpha .navbar-brand .text');

    function getCurrentSection(){

        if(window.location.hash == ''){

            return '#home';

        } else {

            return window.location.hash;
        }
    }

    function isBrandSmaller(){

        return brand.classList.contains('smaller');
    }

    function updateBrandStatus(){

        if(getCurrentSection() != '#home'){

            if(!isBrandSmaller()){

                brand.classList.add('smaller');
            }
        } else {
    
            if(isBrandSmaller()){

                brand.classList.remove('smaller');
            }
        }
    }

    if(window.innerWidth > 1024){

        updateBrandStatus();

        window.addEventListener("hashchange", function(){

            updateBrandStatus();
        });
    }

})();