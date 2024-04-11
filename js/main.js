function hideAll() {
    let list = [document.getElementById('page-home'), 
                document.getElementById('page-music'),
                document.getElementById('page-live'),
                document.getElementById('page-links'),];
    for (let i = 0; i < list.length; i++) {
        list[i].style.display = 'none';
    };
};

function showHome() {
    let x = document.getElementById("page-home");
    hideAll();
    x.style.display = 'flex';
};

function showLive() {
    let x = document.getElementById("page-live");
    hideAll();
    x.style.display = 'flex';
};

function showMusic() {
    let x = document.getElementById("page-music");
    hideAll();
    x.style.display = 'flex';
};

function showLinks() {
    let x = document.getElementById("page-links");
    hideAll();
    x.style.display = 'flex';
};

/* Added toggleTheme() functon to handle the theme change. */
function toggleTheme() {
    var head = document.head;
    var links = document.head.getElementsByTagName("link");

    if (links.length == 1) {
        file = "css/theme.css";
        var link = document.createElement("link");

        link.rel = "stylesheet";
        link.href = file;

        head.appendChild(link);
    } else {
        var last = links[1];
        head.removeChild(last);
    }

    /*
    var bg = document.body;
    var title = document.getElementsByClassName("band-name")[0];
    var footer = document.getElementsByClassName("foot")[0];
    var page = document.getElementsByClassName("page")[0];

    if (bg.style.backgroundColor == "whitesmoke") {
        bg.style.backgroundColor = "black";
        title.style.color = "whitesmoke";
        footer.style.color = "whitesmoke";
        page.style.border = "5px solid rgb(155, 152, 152)";
    } else {
        bg.style.backgroundColor = "whitesmoke";
        title.style.color = "black";
        footer.style.color = "black";
        page.style.border = "none";
    };
    */

};
