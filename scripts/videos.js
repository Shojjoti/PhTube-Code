console.log("videos added")

//time count function 
function testTimeString(time)
{
    const hour = parseInt(time/3600);
    let remainderSecond = time % 3600 ; 
    const minute = parseInt(remainderSecond/60); 
    remainderSecond =     (remainderSecond % 60) ;
    return `${hour} hour ${minute} minute ${remainderSecond} second ago` ;
}

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

const loadCategoryVideos = (id) =>{
    //alert(id);
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`) 
    .then((res)=> res.json())    
    .then((data)=> DisplayVideos(data.category))
    .catch((error) => console.log(error));
    
};

//create DisplayVideos
const DisplayVideos = (videos) =>{
    const videoContainer = document.getElementById("videos") ;
    videoContainer.innerHTML ="";
    if(videos.length==0)
    {
        videoContainer.classList.remove("grid");
        videoContainer.innerHTML=`
         <div class="min-h-screen flex flex-col gap-5 justify-center items-center">
           <img src="asset/Icon.png"
         </div>
         <p class="text-xl"> NO CONTENT HERE IN THIS CATEGORY</p>

        ` ;
    }
    else{
        videoContainer.classList.add("grid");
    }
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
                 ${video.others.posted_date.length==0 ? "" :`<span class="absolute text-xs right-2 bottom-2 bg-black text-white rounded p-1 ">${testTimeString(video.others.posted_date)}</span>` }
                 
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
        const buttonContainer = document.createElement("div");
        buttonContainer.innerHTML = `
          <button onclick="loadCategoryVideos( ${item.category_id})" class="btn">
             ${item.category}          
          </button>
        
        `;
        

        //add button to category container
        categoryContainer.append(buttonContainer);
        
    });

} ;
loadCategories();
loadVideos();