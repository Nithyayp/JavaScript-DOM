let inputFile = document.querySelector("input");

//add change event to file input

inputFile.addEventListener("change", e => {
    //fetch FileList from input type file
    let file = e.target.files[0];//blob file object

    // add FileReader to read blob
    let reader = new FileReader();
    //add onload event to read blob
    reader.onload = _ => {
       console .log(reader.result);
    };
    //convert file into data url
    reader.readAsDataURL(file);
})