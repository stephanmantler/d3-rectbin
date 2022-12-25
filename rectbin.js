(function() {

  d3.rectbin = function() {
    var dx = 0.1,
        dy = 0.1, 
        x = rectbinX,
        y = rectbinY;

    function rectbin(points) {
      var binsById = {};
      var minMax = {};
      
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
          bin2.count = 0
        }
        
        var bin = binsById[id];
        //bin.push(point);
        bin.count = bin.count + 1;
        binsById[id] = bin;

        var mm = pi;
        if(! (mm in minMax)) {
          minMax[mm] = [];
          var mmbin = minMax[mm];
          mmbin.i = pi;
          mmbin.x = pi * dx;
          mmbin.min = y.call(rectbin, point, i);
          mmbin.max = y.call(rectbin, point, i);
          mmbin.maxCount = bin.count;
          minMax[mm] = mmbin;
        }
        else {
          var mmbin = minMax[mm];
          mmbin.min = Math.min(mmbin.min, y.call(rectbin, point, i));
          mmbin.max = Math.max(mmbin.max, y.call(rectbin, point, i));
          mmbin.maxCount = Math.max(mmbin.maxCount, bin.count);
          minMax[mm] = mmbin;
        }
      });
      return { values: d3.values(binsById), minMax: d3.values(minMax) };
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
  return Math.floor(x);
}
