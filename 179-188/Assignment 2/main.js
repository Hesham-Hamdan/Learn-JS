
fetch('articles.json')
.then(
    (result) => {
        result = result.json();
        return result;
    }
    )
.then (
    (res) =>{ 
        for (i = 0; i< res.length - 5; i++) {
        let div = document.createElement('div'),
            heading = document.createElement('h3'),
            content = document.createElement('p');
        div.appendChild(heading).appendChild(document.createTextNode(res[i].title));
        div.appendChild(content).appendChild(document.createTextNode(res[i].description));
        document.body.appendChild(div);
        }   
    });
