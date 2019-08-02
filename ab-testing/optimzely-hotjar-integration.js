(function() {
    window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};

    window.cxl_hj_tags = [];

    function wait(method) {
        if ( typeof(optimizely) == 'object' && typeof(optimizely.get) === 'function' && typeof(optimizely.get('state').getVariationMap()) == 'object' ) {
            method();
        } else {
            setTimeout( function() { wait(method) }, 50 );
        }
    }

    wait(function() {
        var experiments = optimizely.get('state').getVariationMap();
        for ( e in experiments ) {
            if ( typeof(experiments[e] == 'object') && typeof(experiments[e]['index']) == 'number' ) { 
                var experiment_ID = e;
                var variation = experiments[e]['index'];
                variation = variation.toString();
                var tag = 'hj-' + experiment_ID + '-' + variation;
                window.cxl_hj_tags.push(tag);
                hj('trigger', tag);
            }
        }
        // Send HJ tag
        hj('tagRecording', window.cxl_hj_tags);
    });
})();