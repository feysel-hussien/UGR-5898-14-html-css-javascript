


document.addEventListener('DOMContentLoaded', function() {
    

  
    var header = document.querySelector('.header__logo');
    header.addEventListener('click', function() {
        header.style.color = 'red';
    });

    var head = document.querySelector('.logo');
    head.addEventListener('click', function() {
        alert("Contact us in any of these platforms")
    });

   
    var detail = document.querySelector('.contact-details');
    detail.addEventListener('click', function() {
        detail.style.color = 'green';
    });


    var detail = document.querySelector('.contact-details');
    detail.addEventListener('click', function() {
        alert(" contact us by the following account")
    });
    
    document.addEventListener('DOMContentLoaded', function() {
        var footerYear = document.querySelector('.footer-year');
        var currentYear = new Date().getFullYear();
        footerYear.innerText = currentYear;
    });


    var footerYear = document.querySelector('.footer-year');
    footerYear.addEventListener('click', function() {
        alert(" current year")
    });

    var footerYear = document.querySelector('.footer-year');
    footerYear.addEventListener('click', function() {
        footerYear.style.color = 'red';
    });


    var feed = document.querySelector('.feedback');
    feed.addEventListener('click', function() {
        var feedbackText;
        do {
                feedbackText = prompt("Any feedback?");
        } while (!feedbackText.trim());
        alert("Thanks for the feedback, your feedback will be saved. : " + feedbackText);

        
    

            
});




    



});






document.addEventListener('DOMContentLoaded', function () {
   
    alert('Welcome to My Website!');

    var mypic = document.querySelector('.my__pic');
    mypic.addEventListener('click', function () {
        alert('This is me!');
        
    });

   
    var logod = document.querySelector('.header__logo');
    logod.addEventListener('click', function () {
        alert('Logo clicked!');
        
    });

    
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
            if (window.scrollY > 350) {
                header.style.backgroundColor = 'darkred'; 
            } else {
                header.style.backgroundColor = 'darkcyan'; 
            }
        });
    
       
    document.addEventListener('DOMContentLoaded', function() {
        var footerYear = document.querySelector('.footer-year');
        var currentYear = new Date().getFullYear();
        footerYear.innerText = currentYear;
    });

    
    
    var footerYear = document.querySelector('.footer-year');
    footerYear.addEventListener('click', function() {
        alert(" current year")
    });
    
    var footerYear = document.querySelector('.footer-year');
    footerYear.addEventListener('click', function() {
        footerYear.style.color = 'red';
    });
    
    
    var feed = document.querySelector('.feedback');
    feed.addEventListener('click', function() {
        var feedbackText;
        do {
                feedbackText = prompt("Any feedback?");
        } while (!feedbackText.trim());
        alert("Thanks for the feedback, your feedback will be saved. : " + feedbackText);
    
        
    });
    const foot = document.querySelector('.foot');
    window.addEventListener('scroll', function() {
            if (window.scrollY < 950) {
                nav.style.backgroundColor = 'darkred'; 
            } else {
                nav.style.backgroundColor = 'darkcyan'; 
            }
        });
        var mypic = document.querySelectorAll('.my__pic');
        mypic.forEach(function(image) {
            image.addEventListener('mouseover', function() {
                image.style.opacity = '0.7';
            });
            image.addEventListener('mouseout', function() {
                image.style.opacity = '1';
            });
        });
        
});






document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
            if (window.scrollY > 350) {
                header.style.backgroundColor = 'darkred'; 
            } else {
                header.style.backgroundColor = 'darkcyan'; 
            }
        });
    
        document.addEventListener('DOMContentLoaded', function() {
            var footerYear = document.querySelector('.footer-year');
            var currentYear = new Date().getFullYear();
            footerYear.innerText = currentYear;
        });
    
        
        
        var footerYear = document.querySelector('.footer-year');
        footerYear.addEventListener('click', function() {
            alert(" current year")
        });
        
        var footerYear = document.querySelector('.footer-year');
        footerYear.addEventListener('click', function() {
            footerYear.style.color = 'red';
        });
        
        
        var feed = document.querySelector('.feedback');
        feed.addEventListener('click', function() {
            var feedbackText;
            do {
                    feedbackText = prompt("Any feedback?");
            } while (!feedbackText.trim());
            alert("Thanks for the feedback, your feedback will be saved. : " + feedbackText);
        
            
        });
        const nav = document.querySelector('.foot');
        window.addEventListener('scroll', function() {
                if (window.scrollY > 250) {
                    nav.style.backgroundColor = 'darkred'; 
                } else {
                    nav.style.backgroundColor = 'darkcyan'; 
                }
            });

        var bur = document.querySelector('.block__image__bur');
        bur.addEventListener('click', function() {
            alert(" location: Base Burger")
        });

        var yor = document.querySelector('.block__image__yo');
        yor.addEventListener('click', function() {
            alert(" location: amrogn chicken")
        });
        var ol = document.querySelector('.block__image__ole');
        ol.addEventListener('click', function() {
            alert(" location: Koba pastry")
        });

        var foodImages = document.querySelectorAll('.block__image__bur, .block__image__yo, .block__image__ole');
        foodImages.forEach(function(image) {
            image.addEventListener('mouseover', function() {
                image.style.opacity = '0.7';
            });
            image.addEventListener('mouseout', function() {
                image.style.opacity = '1';
            });
        });
   
});





document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
            if (window.scrollY > 0) {
                header.style.backgroundColor = 'darkred'; 
            } else {
                header.style.backgroundColor = 'darkcyan'; 
            }
        });
    
        document.addEventListener('DOMContentLoaded', function() {
            var footerYear = document.querySelector('.footer-year');
            var currentYear = new Date().getFullYear();
            footerYear.innerText = currentYear;
        });
    
        
        
        var footerYear = document.querySelector('.footer-year');
        footerYear.addEventListener('click', function() {
            alert(" current year")
        });
        
        var footerYear = document.querySelector('.footer-year');
        footerYear.addEventListener('click', function() {
            footerYear.style.color = 'red';
        });
        
        
        var feed = document.querySelector('.feedback');
        feed.addEventListener('click', function() {
            var feedbackText;
            do {
                    feedbackText = prompt("Any feedback?");
            } while (!feedbackText.trim());
            alert("Thanks for the feedback, your feedback will be saved. : " + feedbackText);
        
            
        });
        const nav = document.querySelector('.foot');
        window.addEventListener('scroll', function() {
                if (window.scrollY < 100) {
                    nav.style.backgroundColor = 'darkred'; 
                } else {
                    nav.style.backgroundColor = 'darkcyan'; 
                }
            });

            var ashe = document.querySelectorAll('.ash__item');
            ashe.forEach(function(image) {
                image.addEventListener('mouseover', function() {
                    image.style.opacity = '0.7';
                   
                });
                image.addEventListener('mouseout', function() {
                    image.style.opacity = '1';
                    
                });
            });      
           
});




document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
            if (window.scrollY > 30) {
                header.style.backgroundColor = 'darkred'; 
            } else {
                header.style.backgroundColor = 'darkcyan'; 
            }
        });
    
        document.addEventListener('DOMContentLoaded', function() {
            var footerYear = document.querySelector('.footer-year');
            var currentYear = new Date().getFullYear();
            footerYear.innerText = currentYear;
        });
    
        
        
        var footerYear = document.querySelector('.footer-year');
        footerYear.addEventListener('click', function() {
            alert(" current year")
        });
        
        var footerYear = document.querySelector('.footer-year');
        footerYear.addEventListener('click', function() {
            footerYear.style.color = 'red';
        });
        
        
        var feed = document.querySelector('.feedback');
        feed.addEventListener('click', function() {
            var feedbackText;
            do {
                    feedbackText = prompt("Any feedback?");
            } while (!feedbackText.trim());
            alert("Thanks for the feedback, your feedback will be saved. : " + feedbackText);
        
            
        });
        const nav = document.querySelector('.foot');
        window.addEventListener('scroll', function() {
                if (window.scrollY < 500) {
                    nav.style.backgroundColor = 'darkred'; 
                } else {
                    nav.style.backgroundColor = 'darkcyan'; 
                }
            });

        var sod = document.querySelector('.sode');
        sod.addEventListener('click', function() {
            alert("use link to go to website: https://sodereresorthotel.net/ ")
        });
});