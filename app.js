var scroll = new SmoothScroll('a[href*="#"]', {
  easing: 'easeInOutCubic',
  speed: 1000
})

let opts = {
  threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
}

let obs = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if(entry.intersectionRatio > 0.8) {
      $('.talent_mask').mousewheel(function(e, delta) {
        e.preventDefault();
        this.scrollLeft -= (delta * 40);

        if(
          delta > 0 && this.scrollLeft === 0
        ){

            $('.talent_mask').off('mousewheel')

        } else if(
          delta < 0 && this.scrollLeft == this.scrollLeftMax
        ){

            $('.talent_mask').off('mousewheel')
        }

      })
    } else {
      $('.talent_mask').off('mousewheel')
    }

  })
}, opts)

obs.observe(document.querySelector('.talent'))
