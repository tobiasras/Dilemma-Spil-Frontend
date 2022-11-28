class Lobby {
    createLobby(event) {
        event.preventDefault();
        let formData = $('#create-lobby').serializeArray();

        let data = formCleaner.cleanFormData(formData);

        api("api/post/create/lobby", "POST", data).then(response => {

            const lobbyCode = response.lobbyCode;

            console.log("connected to: " + lobbyCode);

            socket.join(lobbyCode);
        });
    }

    joinLobby(event) {
        event.preventDefault()
        let formData = $('#lobby-exist').serializeArray();

        let data = formCleaner.cleanFormData(formData);

        const player =
            {
                fieldOfStudy: data.fieldOfStudy,
                name: data.name,
                isReady: false
            }


        api("api/get/read/lobbyExist/" + data.lobbyID, "GET").then(response => {
            console.log(JSON.stringify(response.gameLobby));
            const gameLobby = response.gameLobby

            if (response.gameLobby != null) {
                socket.join(gameLobby.lobbyCode, player);

                console.log("connected to: " + gameLobby.lobbyCode);
            } else {
                console.log("Gamelobby does not exist");
            }


        });
    }

    fetchAllLobby(event){
        event.preventDefault()


        api("api/get/all/lobby", "GET").then(response => {
            console.log(JSON.stringify(response));

        })
    }
}

const lobby = new Lobby();