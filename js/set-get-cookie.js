// Set cookie
function setCookie(name, value, expires) {
    var cookie_string = '';
    var cookie_string = name + "=" + value + "; path=/; expires=" + expires;
    document.cookie = cookie_string;
}

// e.q. setCookie('show-coupon', 'false', 'Tue, 19 Mar 2019 00:00:01 GMT');

// Get cookie
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) {
        return parts.pop().split(";").shift();
    }
}
