function UriBuilder (url) {
  var self = this;

  self.build = function () {
    var paramless = url.replace(/\?.+$/,'');
    var qs = Object.keys(self.params).reduce(function (r, v) {
      if (!v) {
        return r;
      }
      r.push(v + '=' + self.params[v]);
      return r;
    }, []).join('&');

    if (!qs) {
      return paramless;
    }

    return encodeURI(paramless + '?' + qs);
  };

  function extractUrlParams() {
    self.params = {};
    var pattern = (/(?:\?|&)([^=]+)=([^&#]+)/g);

    var param;

    while(param = pattern.exec(url)) {
      self.params[param[1]] = param[2];
    }
  }
 
  extractUrlParams();
}

module.exports = UriBuilder;
