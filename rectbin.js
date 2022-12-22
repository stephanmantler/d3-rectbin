(function() {

  d3.rectbin = function() {
    var dx = 0.1,
        dy = 0.1, 
        x = rectbinX,
        y = rectbinY;

    function rectbin(points) {
      var binsById = {};
      
      points.forEach(function(point, i) {
        var py = y.call(rectbin, point, i) / dy;
        var pj = trunc(py);
        var px = x.call(rectbin, point, i) / dx;
        var pi = trunc(px);
      
        var id = pi + '-' + pj;
        
        if(! (id in binsById) ) {
          binsById[id] = [];
          var bin2 = binsById[id];
          bin2.i = pi;
          bin2.j = pj;
          bin2.x = pi * dx;
          bin2.y = pj * dy;
        }
        
        var bin = binsById[id];
        bin.push(point);
      });
      return d3.values(binsById);
    }

    rectbin.x = function(_) {
      if (!arguments.length) return x;
      x = _;
      return rectbin;
    };

    rectbin.y = function(_) {
      if (!arguments.length) return y;
      y = _;
      return rectbin;
    };

    rectbin.dx = function(_) {
      if (!arguments.length) return dx;
      dx = _;
      return rectbin;
    };

    rectbin.dy = function(_) {
      if (!arguments.length) return dy;
      dy = _;
      return rectbin;
    };


    return rectbin;
  };

  var rectbinX = function(d) { return d[0]; },
      rectbinY = function(d) { return d[1]; };

})();

function trunc(x) {
  return x < 0 ? Math.ceil(x) : Math.floor(x);
}
