(function(){
    var settings = {
        messagesToSend: 5,
        interval: 30, // in seconds
        channelName: 'silver', // has to be current channel's name, prevents from sending messages after changing channels
        workSpaceName: 'CXL'
    }

    sendRandomMessages();

    function sendRandomMessages() {
        var messagesSent = 0;
        var mainInterval = setInterval(function(){
            sendMessage();
            messagesSent ++;
            console.log('messages sent: ' + messagesSent);
            if ( messagesSent >= settings.messagesToSend ) {
                clearInterval(mainInterval);
            }
        }, settings.interval * 1000 ); // * 1000 for seconds instead of milliseconds
    }

    function sendMessage() {
        if ( checkChannel() ) {
            var msg = generateRandomString();
            setMessage(msg);
            submitMessage();
        } else {
            console.log('Wrong channel, message aborted!');
        }
    }

    function generateRandomString() {
        return 'Rand str is: ' + Math.random().toString(36).substr(2, 5);
    }

    function setMessage(msg) {
        document.querySelector('.ql-editor p').innerText = msg;
    }

    function submitMessage() {
        var event = new KeyboardEvent("keydown", {
            keyCode: 13
        });
        document.querySelector('.ql-editor').dispatchEvent(event);
    }

    function checkChannel() {
        if ( document.title === 'slack | ' + settings.channelName + ' | ' + settings.workSpaceName || document.title === 'Slack | * ' + settings.channelName + ' | ' + settings.workSpaceName ) {
            return true;
        } else {
            return false;
        }
    }
})();