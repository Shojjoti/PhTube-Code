console.log("videos added")
// create loadCategories
const loadCategories=() => {
    //fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories") 
    .then((res)=> res.json())    
    .then((data)=> DisplayCategories(data.categories))
    .catch((error) => console.log(error));

}

const loadVideos=() => {
    //fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos") 
    .then((res)=> res.json())    
    .then((data)=> DisplayVideos(data.videos))
    .catch((error) => console.log(error));

}

//create DisplayVideos
const DisplayVideos = (videos) =>{
    const videoContainer = document.getElementById("videos") ;
    videos.forEach(
        (video)=>{
            console.log(video);
            const card = document.createElement("div");
            card.classList= "card card-compact "
            card.innerHTML = `
            <figure class="h-[200px] relative">
              <img
                 src=${video.thumbnail}
                 class="h-full w-full object-cover"
                 alt="thumbnail" />
                 <span class="absolute right-2 bottom-2 bg-black text-white rounded p-1 ">${video.others.posted_date}</span>
            </figure>
            <div class="px-0 py-2 flex gap-2">
              
               <div >
                  <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture} />  
               </div>
               
               <div>
                 <h2 class="font-bold">${video.title}</h2>
                   <div class="flex items-center  gap-3">
                       <p class="text-gray-400">${video.authors[0].profile_name}</p>
                       ${video.authors[0].verified ? '<img class="w-6 h-6 rounded-full object-cover " src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" />' : " "}
                         
                     
                    </div> 
               <p></p>
               </div>

            </div>
            `;
            videoContainer.append(card);

        }
    );
};

//create DisplayCategories

const DisplayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories") ;

    categories.forEach((item) => {
        console.log(item);

        //create a button 
        const button = document.createElement("button");
        button.classList = "btn" ;
        button.innerText = item.category ; 

        //add button to category container
        categoryContainer.append(button);
        
    });

} ;
loadCategories();
loadVideos();