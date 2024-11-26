console.log("videos added")
// create loadCategories
const loadCategories=() => {
    //fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories") 
    .then((res)=>res.json())    
    .then((data)=> console.log(data))
    .catch((error) => console.log(error));

}


//create DisplayCategories

const DisplayCategories = (data) => {
    // add data in html 
}

loadCategories();