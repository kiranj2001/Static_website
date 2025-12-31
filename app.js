const slider = document.querySelector('.slider');
        const slides = slider.querySelectorAll('img');
        let slideIndex = 0;

        setInterval(() => {
            slideIndex = (slideIndex + 1) % slides.length;
            slider.scrollTo({
                left: slides[slideIndex].offsetLeft - slides[0].offsetLeft,
                behavior: 'smooth'
            });
        }, 3000);