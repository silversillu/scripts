window.dataLayer = window.dataLayer || [];
(function(){
    window.dataLayer.push(arguments);
})('event', 'optimize.callback', {
    callback: function(value, name){
        //console.log(name + '.' + value)
        window.dataLayer.push({
            'event': 'optimize-experiment',
            'go_experiment': name,
            'go_variation': value
        });
    }
});
