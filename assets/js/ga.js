function initGA(id) {
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', id]);
  _gaq.push(['_trackPageview']);
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
  var trackingByInterval = (function trackingByInterval () {
    var timerCallback = function timerCallback () {
      _gaq.push(['_trackEvent', 'Reading', 'every 5 sec']);
    }
    setInterval(timerCallback, 5000);
  })();
}