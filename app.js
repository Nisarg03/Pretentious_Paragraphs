for (let i = 0; i < 10; i++) {
    let div = document.createElement('div');
    let br = document.createElement("br");
    div.className = "div";
    div.innerHTML = 'Hello'+i;
    document.body.appendChild(div);
    document.body.appendChild(br);
}