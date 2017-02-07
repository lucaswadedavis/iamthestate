(function () {
    var iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    var precursors = new Set(Object.getOwnPropertyNames(iframe.contentWindow));
    document.body.removeChild(iframe);

    var iAmTheState = function() {
      var current = Object.getOwnPropertyNames(window);
      var difference = {};
      for (var i = 0; i < current.length; i++) {
        if (precursors.has(current[i])) continue;
        difference[current[i]] = window[current[i]];
      }
      return difference;
    };

    // Module Compatibility Code

    if (typeof define === 'function' && define.amd) {
      define('iamthestate', [], function() {
        return iAmTheState;
      });
    }

    var root = this;
    if (typeof exports !== 'undefined') {
      if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = iAmTheState;
      }
      exports.iAmTheState = iAmTheState;
    } else {
      root.iAmTheState = iAmTheState;
    }
}());
