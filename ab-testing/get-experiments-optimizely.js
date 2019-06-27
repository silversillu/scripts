
function get_optimizely_x_tests() {
    wait_for_variable('optimizely', function() {
        if ( typeof(optimizely) == 'object' && typeof(optimizely.get) === 'function' && typeof(optimizely.get('state').getVariationMap()) == 'object' ) {
            var experiments = optimizely.get('state').getVariationMap();
            for ( e in experiments ) {
                if ( typeof(experiments[e] == 'object') ) {
                    var experiment_ID = e;
                    var variation = typeof(experiments[e]['index']) == 'number' ? experiments[e]['index'] : 'na';
                    variation = variation.toString();
                    // Do something with experiment_ID and variation
                }
            }
        } else {
            console.log('Optimizely X object not found');
        }
    });
}
