/* globals document */

$('ol').each(function () {
  $(this).find('li').each(function (k, i) {
    var text = '<span class="number">%number. </span>';
    $(this).prepend(text.replace('%number', k));
  });
});

// for (var ol in ols) {
//   if (ols.hasOwnProperty(ol) && ol !== 'length') { // WTF?
//     for (var li in ols[ol].children ) {
//       if (ols.hasOwnProperty(ol) && li !== 'length' && 'function' !== typeof ols[ol].children[li]) { // WTF?
//         ols[ol].children[li].innerHTML = '<span class="number">'+(li*1+1)+'. </span>'+ols[ol].children[li].innerHTML;
//       }
//     }
//   }
// }