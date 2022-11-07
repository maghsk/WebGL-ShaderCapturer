console.log("This is a popup!");

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function button_on_click() {
    let dumped_str = "";
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        let tab = tabs[0];
        chrome.tabs.sendMessage(tab.id, {action: "getShaders"}, function(response) {
            console.log(response);
            dumped_str = JSON.stringify(response);
        });
    });
    const fileName = 'compiled_shaders.json';
    download(fileName, dumped_str);
}

document.getElementById("dsj_button").onclick = button_on_click;
