(function () {
    Object.size = function(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };

    window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
    window.cxl_hj_tags = [];

    if (typeof ga == 'function') {
        ga(function (tracker) {
            var propertytId = tracker.get('trackingId');

            if (propertytId) {
                var experimentIds = gaData[propertytId].experiments;

                if (typeof experimentIds == 'object') {
                    var experimentsCount = Object.size(experimentIds);

                    if (experimentsCount > 0) {
                        Object.keys(experimentIds).forEach(function (experiment) {
                            var experimentId = experiment;
                            var variationId = experimentIds[experiment];

                            var tag = 'hj-' + experimentId + '-' + variationId;
                            window.cxl_hj_tags.push(tag);
                            hj('trigger', tag); // Send HJ trigger
                            
                        });
                        hj('tagRecording', window.cxl_hj_tags); // Send HJ tags
                    }
                }
            }
        });
    }
})();