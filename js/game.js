class Socket {
    disconnect(){
        this.stompClient.disconnect();
    }



    join(lobbyID, player) {
        if (this.socket !== undefined){
            this.disconnect();
        }

        this.lobby = lobbyID
        this.url = "http://localhost:8080/game/" + this.lobby;
        this.socket = new SockJS(this.url);
        this.stompClient = Stomp.over(this.socket);

        $('#lobbyID-display').text(this.lobby);

        this.stompClient.debug = null; // SETS DEBUG MODE OFF

        this.stompClient.connect({}, (frame) => {
            this.stompClient.subscribe('/topic/errors/', (greeting) => {
            });

            this.stompClient.subscribe('/topic/greetings/' + this.lobby, (greeting) => {
                this.setData(greeting.body);

            });


            console.log("Player name: " + JSON.stringify(player))

            // first request
            if (player === undefined){
                this.stompClient.send('/app/game/create/' + this.lobby, {}, JSON.stringify({}));
                console.log("has not player")

            } else {
                this.stompClient.send('/app/game/' + this.lobby, {}, JSON.stringify(player));
                console.log("has player")
            }




        });



        $('#send-request').off().on('click', function (){
            let stompClient = Stomp.over(socket.socket);
            stompClient.send('/app/game/' + socket.lobby, {}, JSON.stringify({name: "Method"}));
        });

    }

    setData(message) {
        let txt1 = "<p>" + message + "</p>";
        $('#message-output').append(txt1);
    }
}

const socket = new Socket();