
function draw_title(text) {
    const title = document.createElement("div");
    title.innerText = text;
    title.style.fontSize = "xx-large";
    return title;
}


function draw_body(text) {
    const body = document.createElement("div");
    body.innerText = text;
    body.style.background = "grey"
    return body;
}

function draw_hr(){
    const hr = document.createElement("hr");
    return hr;
}




/*
function button_edit(){
    const btn = document.createElement("button");
    btn.innerHTML = "Editar";
    btn.type = "submit"
    btn.id = "edit-button"
    return btn;
}

function button_send(){
    const btn2 = document.createElement("button");
    btn2.innerHTML = "Enviar";
    btn2.type = "submit"
    btn2.id = "end-editing"
    return btn;
}

edit_button.addEventListener("click", function(){
    paragraph.contentEditable = "true";
});

end_editing.addEventListener("click", function(){
    paragraph.contentEditable = "false";
})
*/

function draw_post(post) {

    document.getElementById('main').appendChild(draw_title(post.title));
    document.getElementById('main').appendChild(draw_body(post.body));
    //document.getElementById('main').appendChild(button_edit());
    //document.getElementById('main').appendChild(button_send());
    document.getElementById('main').appendChild(draw_hr());
}


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        for (index in posts) draw_post(posts[index]);
    });
