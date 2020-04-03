const filterContainer = document.querySelector('.filter-container')
const areaSubCat = document.getElementById('country-sub-cat')
const subCatContainer = document.querySelectorAll('.sub-cat-div')
let photos = []
photos.push({
    id: 1,
    tag: "#berlin #europe #city",
    src: "images/Berlin2.png"
})
photos.push({
    id: 2,
    tag: "#berlin #europe #city",
    src: "images/Berlin3.jpg"
})
photos.push({
    id: 3,
    tag: "#americas #mountain",
    src: "images/Cali1.jpg"
})
photos.push({
    id: 4,
    tag: "#asia #HongKong #city",
    src: "images/HK1 copy.jpg"
})
photos.push({
    id: 5,
    tag: "#asia #HongKong #city",
    src: "images/HK2.jpg"
})
photos.push({
    id: 6,
    tag: "#asia #HongKong #city",
    src: "images/HK3.png"
})
photos.push({
    id: 7,
    tag: "#asia #HongKong #city",
    src: "images/HK4.jpg"
})
photos.push({
    id: 8,
    tag: "#asia #japan #city",
    src: "images/JP1.png"
})
photos.push({
    id: 9,
    tag: "#asia #japan #city",
    src: "images/JP2.png"
})
photos.push({
    id: 10,
    tag: "#asia #japan #city",
    src: "images/JP3.jpg"
})
photos.push({
    id: 11,
    tag: "#asia #japan #city",
    src: "images/JP4.jpg"
})
photos.push({
    id: 12,
    tag: "#europe #london #city",
    src: "images/London1.jpg"
})
photos.push({
    id: 13,
    tag: "#europe #london #city",
    src: "images/London2.jpg"
})
photos.push({
    id: 14,
    tag: "#europe #London #city",
    src: "images/London3.jpg"
})
photos.push({
    id: 15,
    tag: "#europe #London #city",
    src: "images/London4.jpg"
})
photos.push({
    id: 16,
    tag: "#australia #city",
    src: "images/Mel1.jpg"
})
photos.push({
    id: 17,
    tag: "australia, Nature",
    src: "images/Mel2.jpg"
})
photos.push({
    id: 18,
    tag: "#Australia #city",
    src: "images/Mel3.jpg"
})
photos.push({
    id: 19,
    tag: "#americas #city",
    src: "images/NYC1.jpg"
})
photos.push({
    id: 20,
    tag: "#americas #city",
    src: "images/NYC2.jpg"
})
photos.push({
    id: 21,
    tag: "#americas #city",
    src: "images/NYC3.png"
})
photos.push({
    id: 22,
    tag: "#australia #city",
    src: "images/Sydney1.jpg"
})
photos.push({
    id: 23,
    tag: "#australia #city",
    src: "images/Sydney2.jpg"
})
photos.push({
    id: 24,
    tag: "#australia #beach",
    src: "images/Sydney3.jpg"
})
photos.push({
    id: 25,
    tag: "#beach",
    src: "images/Misc1.jpg"
})
photos.push({
    id: 26,
    tag: "#travel-essential",
    src: "images/Misc2.jpg"
})
photos.push({
    id: 27,
    tag: "#beach",
    src: "images/Misc4.jpg"
})
photos.push({
    id: 28,
    tag: "#mountain",
    src: "images/Misc3.jpg"
})
photos.push({
    id: 29,
    tag: "#beach #family",
    src: "images/Misc5.jpg"
})
photos.push({
    id: 30,
    tag: "#beach",
    src: "images/Misc10.jpg"
})


let foundImages = []
filterContainer.addEventListener('click', (e)=>{
    if(e.target.classList.value === "main-cat"){
        if (e.target.id === "travel-essential"){
            foundImages = filterPhotos(e.target.id)
            return displayImages(foundImages)
        }
        if (e.target.id === "show-all"){
           displayImages(photos)
        }
        subCatContainer.forEach((e)=>{
            e.style.display="none"
        })
        const clickFilter = e.target.id
        document.querySelector(`.${clickFilter}`).style.display="block"
        
    }
    if(e.target.classList.value === "sub-filter"){
        const clickSubFilter = (e.target.id).toString()
        console.log(clickSubFilter)
        foundImages = filterPhotos(clickSubFilter)
        displayImages(foundImages)
    

      
    }
})

const filterPhotos = (filter)=>{
    return photos.filter((photo)=>{
       return photo.tag.includes(filter)
   })

}


const photoGallery = document.querySelector('.photo-gallery-container')
let tagHTML = ""
let outphotoHTML


const displayImages = (photos)=>{
    photoGallery.innerHTML=" "
    photos.forEach((photo)=>{
    
            outputPhotoHTML = ` <div class="photo-card">
        <div class="photo-container">
            <img class="photo" src="${photo.src}" alt="Beach" data-tag="${photo.tag}">
        </div> 
           <div class="photo-description">
           <span id="photo-tag-container"> ${photo.tag} </span>
        </div>
    </div>`
    photoGallery.insertAdjacentHTML('afterbegin', outputPhotoHTML)
    document.querySelector('.photo-card').classList.add('fadeIn')
    })
   
}


displayImages(photos);