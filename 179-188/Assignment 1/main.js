

let prm = new Promise ((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open('Get','articles.json');
    req.send();
    req.onload = function () {
        if (req.readyState == 4 && req.status== 200){
            resolve(JSON.parse(req.responseText));
            reject(Error('An Error Has Occured'))
        }
    }
}).then (
    (resolve) =>{ 
        for (i = 0; i< resolve.length - 5; i++) {
        let div = document.createElement('div'),
            heading = document.createElement('h3'),
            content = document.createElement('p');
        div.appendChild(heading).appendChild(document.createTextNode(resolve[i].title));
        div.appendChild(content).appendChild(document.createTextNode(resolve[i].description));
        document.body.appendChild(div);
        }   
    });