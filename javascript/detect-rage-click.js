if ( typeof(jQuery) === 'function' ) {
    jQuery(document).ready(function($) {

        jQuery.fn.extend({
            getPath: function() {
                var path, node = this;
                while (node.length) {
                    var realNode = node[0],
                        name = realNode.localName;
                    if (!name) break;
                    name = name.toLowerCase();

                    var parent = node.parent();

                    var sameTagSiblings = parent.children(name);
                    if (sameTagSiblings.length > 1) {
                        var allSiblings = parent.children();
                        var index = allSiblings.index(realNode) + 1;
                        if (index > 1) {
                            name += ':nth-child(' + index + ')';
                        }
                    }

                    path = name + (path ? '>' + path : '');
                    node = parent;
                }

                return path;
            }
        });
        // Number of rage clicks
        var no_of_clicks = 3;
        //Time interval - 3 for 3secs, 4 for secs and likewise
        var time = 2;
        var click_events = [];

        //internal variables
        var possible_click = 3;
        var radius = 100;

        function detectXClicks(count, interval) {
            var last = click_events.length - 1;
            var time_diff = (click_events[last].time.getTime() - click_events[last - count + 1].time.getTime()) / 1000;
            //returns false if it event period is longer than 5 sec
            if (time_diff > interval) return null;

            //check click distance
            var max_distance = 0;
            for (i = last - count + 1; i < last; i++) {
                for (j = i + 1; j <= last; j++) {
                    var distance = Math.round(Math.sqrt(Math.pow(click_events[i].event.clientX - click_events[j].event.clientX, 2) + Math.pow(click_events[i].event.clientY - click_events[j].event.clientY, 2)));
                    if (distance > max_distance) max_distance = distance;
                    if (distance > radius) return null;
                }
            }
            var result = {
                count: count,
                max_distance: max_distance,
                time_diff: time_diff
            }
            return result;
        }

        function removeUsedClickPoints(count) {
            click_events.splice(click_events.length - count, count);
        }
        $("body").click(function(event) {
            click_events.push({
                event: event,
                time: new Date()
            });
            //remain only required number of click events and remove left of them.
            if (click_events.length > possible_click) {
                click_events.splice(0, click_events.length - possible_click);
            }
            //detect 3 click in 5 sec
            if (click_events.length >= 3) {
                var result = detectXClicks(no_of_clicks, time);
                if (result != null) {
                    var path = $(event.target).getPath();
                    //console.log('Rage Click: ' + JSON.stringify(result));
                    dataLayer.push({
                        'event': 'rage_click',
                        'rc_element': path,
                        'rc_count': result.count,
                        'rc_max_distance': result.max_distance,
                        'rc_time_diff': result.time_diff
                    });
                    removeUsedClickPoints(3);
                }
            }
        });
    });
}