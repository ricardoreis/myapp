 // Enable pusher logging - don't include this in production
 Pusher.logToConsole = true;

 var pusher = new Pusher('299befe5a529c96a2330', {
   cluster: 'us2',
   forceTLS: true
 });

 var channel = pusher.subscribe('my-channel');
 channel.bind('my-event', function(data) {
   alert(JSON.stringify(data));
 });