// Lazy load
/**
 * jQuery Unveil
 * A very lightweight jQuery plugin to lazy load images
 * http://luis-almeida.github.com/unveil
 *
 * Licensed under the MIT license.
 * Copyright 2013 Luís Almeida
 * https://github.com/luis-almeida
 */

(function ($) {
  $.fn.unveil = function (threshold, callback) {
    const $w = $(window);
    const th = threshold || 0;
    const retina = window.devicePixelRatio > 1;
    const attrib = retina ? 'data-src-retina' : 'data-src';
    let images = this;
    let loaded;

    this.one('unveil', function () {
      let source = this.getAttribute(attrib);
      source = source || this.getAttribute('data-src');
      if (source) {
        this.setAttribute('src', source);
        if (typeof callback === 'function') callback.call(this);
      }
    });

    function unveil() {
      const inview = images.filter(function () {
        const $e = $(this);
        if ($e.is(':hidden')) return;

        const wt = $w.scrollTop();
        const wb = wt + $w.height();
        const et = $e.offset().top;
        const eb = et + $e.height();

        return eb >= wt - th && et <= wb + th;
      });

      loaded = inview.trigger('unveil');
      images = images.not(loaded);
    }

    $w.on('scroll.unveil resize.unveil lookup.unveil', unveil);

    unveil();

    return this;
  };
})(window.jQuery || window.Zepto);

$(document).ready(() => {
  $('img').unveil();
});

const triggerImages = function triggerImages() {
  $('img').trigger('unveil');
};
