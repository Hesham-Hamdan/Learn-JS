const req = new XMLHttpRequest();
req.open('Get','articles.json');
req.send();

req.onreadystatechange = function (){
    if (req.readyState == 4 && req.status== 200) {
        let mainData = JSON.parse(req.responseText);
        console.log(mainData); 
        for (i = 0; i< mainData.length; i++) {
            mainData[i].category = 'All';
        }
        let updatedData = JSON.stringify(mainData);
        console.log(updatedData);
    }
}