const req = new XMLHttpRequest();
req.open('Get','articles.json');
req.send();

req.onreadystatechange = function (){
    if (req.readyState == 4 && req.status== 200) {
        let mainData = JSON.parse(req.responseText);
        let dataDiv = document.createElement('div')
        dataDiv.setAttribute('id','data');
        for (i = 0; i< mainData.length; i++) {
            let div = document.createElement('div'),
                heading = document.createElement('h2'),
                content = document.createElement('p'),
                author = document.createElement('p'),
                category = document.createElement('p');
            
            div.appendChild(heading).appendChild(document.createTextNode(mainData[i].title));
            div.appendChild(content).appendChild(document.createTextNode(mainData[i].body));
            div.appendChild(author).appendChild(document.createTextNode(`Author: ${mainData[i].author}`));
            div.appendChild(category).appendChild(document.createTextNode(`Category: ${mainData[i].category}`));
            dataDiv.appendChild(div);
        }
        document.body.appendChild(dataDiv);
    }
}