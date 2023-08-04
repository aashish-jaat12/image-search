const accesskey = "eeDdNiw4dTsCQrsLbSCWY3zycrnI7y-g8VLNWrx1xAY"

const searchform =document.getElementById('form')
const searchbox =document.getElementById('search-box')
const searchbtn =document.getElementById('search')

const searchresult =document.getElementById('search-result')
const showmorebtn =document.getElementById('show-more-btn')

let keyword =" ";
let page = 1;

async function searchimage() {

    keyword =searchbox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}
    &query=${keyword}&client_id=${accesskey}&per_page=12`;

    const responce = await fetch(url);
    const data =await responce.json();

    if(page===1){
        searchresult.innerHTML =" "    }

const results =data.results;

    results.map((result)=>{

        const image =document.createElement("img")
        image.src=result.urls.small;
        const imagelink =document.createElement('a')
        imagelink.href=result.links.html;
        imagelink.target='_blank';
        imagelink.appendChild(image);
        searchresult.appendChild(imagelink)
    })
showmorebtn.style.display ="block"

}


searchbtn.addEventListener("click",(e)=>{

e.preventDefault();
 page = 1 ;
    searchimage()
    
})

showmorebtn.addEventListener("click",()=>{
    page++;
    searchimage()
})

