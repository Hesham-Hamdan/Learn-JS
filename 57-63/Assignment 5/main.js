function createSelectBox(startYear, endYear) {
  // Your Code Here
  document.write(`<select>`)
  while (startYear <= endYear) {
    document.write(`<option value='${startYear}'>${startYear}</option>`);
    startYear++;
  }
  document.write(`</select>`)
}


createSelectBox(2000, 2021);