$(document).ready(function(){   
    setTimeout(function () {
        $("#cookieConsent").fadeIn(100);
     }, 1000);
    $("#closeCookieConsent, .cookieConsentOK").click(function() {
        $("#cookieConsent").fadeOut(200);
    }); 
}); 
