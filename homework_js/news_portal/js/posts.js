function loadPosts() {

    var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
    var xhr = new XHR();
    var root = 'http://jsonplaceholder.typicode.com';

    xhr.open('GET', root + '/posts', true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            alert( xhr.status + ': ' + xhr.statusText );
        } else {
            try {
                var posts = JSON.parse(xhr.responseText);
            } catch (e) {
                alert( "Некорректный ответ " + e.message );
            }
            showPosts(posts);
        }

    };

}

function shortenedPost (str) {
    if (str.length > 40) {
        return (str.substring(0, 40) + "...");
    }
    else {
        return str;
    }
}

function showPosts(posts) {

    posts.forEach(function(post) {
        var li = list.appendChild(document.createElement('li'));
        var div = li.appendChild(document.createElement('div'));
        var title = div. appendChild(document.createElement('h3'));
        var p = div. appendChild(document.createElement('p'));
        var link = "<a href='article.html?id=" + post.id + "'>(View full post)</a>";
        div.classList.add("post");
        title.classList.add("title");
        p.classList.add("shortened-text");
        title.innerHTML = post.title + "<br>";
        p.innerHTML = shortenedPost(post.body) + link;
    });

}

loadPosts();