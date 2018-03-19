$("document").ready(function(){
    let ws = new WebSocket("ws://0.0.0.0:5678/");
    ws.onopen = function (event){
        $("ul").append("<p>CONNECTED</p>");
    };
    ws.onmessage = function (event) {
        $("ul").append("<p>The number of client: " + event.data + "</p>");
    };
    ws.onclose = function () {
        $("ul").append("<p>DISCONNECTED</p>");
    }
});




