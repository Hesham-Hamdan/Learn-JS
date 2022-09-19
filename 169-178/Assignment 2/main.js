const req = new XMLHttpRequest();
req.open('Get','articles.json');
req.send();
console.log(req);

req.onreadystatechange = function (){
    if (req.readyState == 4 && req.status== 200) {
        console.log(req.responseText);
        console.log('Data Loaded');
    }

}