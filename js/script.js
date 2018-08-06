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

// $('#ex1Slider').slider({
// 	formatter: function(value) {
// 		return 'Current value: ' + value;
//     console.log(value);
// 	}
// });
$("#pricing-number").on("slide", function(slideEvt) {
    var value = slideEvt.value;
    $('#prestamo').html(value + '$');
});
$("#pricing-numbere").on("slide", function(slideEvt) {
    var valeur = slideEvt.value;
    $('#dias').html(valeur + ' días');
});
