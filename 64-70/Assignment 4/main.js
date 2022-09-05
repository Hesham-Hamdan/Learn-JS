function specialMix(...data) {
    let result = 0;
    for (i = 0; i < data.length; i++) {
        if (isNaN(parseInt(data[i]))) {
            continue;
        } else {
            result += parseInt(data[i]);
        } 
    }
    if (result == 0) {
        return 'All Is Strings';
    } else {
        return result;
    }
}

  console.log(specialMix(10, 20, 30)); // 60
  console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Test", "Cool", "Test")); // All Is Strings


