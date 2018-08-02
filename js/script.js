$("#pricing-number").slider({
  formatter: function(value) {
    switch (value) {
      case 0:
        return 100;
      case 50000:
        return '50,000+';
      default:
        return value;
    }
  }
});
  
$("#ex8").slider({
tooltip: 'always'
});
$("#ex8").slider({
  tooltip: 'always'
});

$("#pricing-numbere").slider({
  formatter: function(value) {
    switch (value) {
      case 0:
        return 100;
      case 50000:
        return '50,000+';
      default:
        return value;
    }
  }
});
