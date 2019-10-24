/*
* This solution requires activity.name and experience.name Response Tokens to be activated in Target settings.
*/

document.addEventListener("at-request-succeeded", function(event) { // String value coming from adobe.target.event.REQUEST_SUCCEEDED
    var tokens = event.detail.responseTokens;
    window.cxl_hj_triggers = [];
    window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
    if (tokens) {
        tokens.forEach(function (token) {
            var hj_trigger = token["activity.name"] + " - " + token["experience.name"];
            if (window.cxl_hj_triggers.indexOf(hj_trigger) < 0) {
                hj('trigger', hj_trigger);
                window.cxl_hj_triggers.push(hj_trigger);
            }
        });
    }
});