function getInternetExplorerVersion() {
  var ua = window.navigator.userAgent;
       var msie = ua.indexOf("MSIE ");
       var rv = -1;

       if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer, return version number
       {               

           if (isNaN(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))))) {
               //For IE 11 >
               if (navigator.appName == 'Netscape') {
                   var ua = navigator.userAgent;
                   var re = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
                   if (re.exec(ua) != null) {
                       rv = parseFloat(RegExp.$1);
                       alert(rv);
                   }
               }
               else {
                   alert('otherbrowser');
               }
           }
           else {
               //For < IE11
               alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
           }
           return false;
  }
}
       

getInternetExplorerVersion();