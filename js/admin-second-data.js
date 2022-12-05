function editHints(event, hintId, body){

    console.log(hintBody);

    api("api/post/update/" + hintId + "/hintsdilemma", "post", body);

    event.preventDefault();
}