document.addEventListener("at-request-succeeded", function(event) { // String value coming from adobe.target.event.REQUEST_SUCCEEDED
    window.digitalData = window.digitalData || {};
    window.digitalData.content = window.digitalData.content || {};
    window.digitalData.content.targetExperiences = window.digitalData.content.targetExperiences || [];
    window.digitalData.content.targetExperiences.push(true)

    var tokens = event.detail.responseTokens;
    if (tokens) {
        tokens.forEach(function (token) {
            window.digitalData.content.targetExperiences.push(token["activity.name"] + "|" + token["experience.name"])
        });
    }
});

document.addEventListener(adobe.target.event.REQUEST_FAILED, function(event) { 
    window.digitalData = window.digitalData || {};
    window.digitalData.content = window.digitalData.content || {};
    window.digitalData.content.targetExperiences = window.digitalData.content.targetExperiences || [];
  	window.digitalData.content.targetExperiences.push(false);
});