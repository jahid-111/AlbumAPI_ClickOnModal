console.log('album.js')


const albumFetch = () => {
    const url =  'https://jsonplaceholder.typicode.com/photos';
        fetch(url)
        .then(response => response.json())
        .then(getResponse => getAlbumData(getResponse))
    }
    albumFetch()

        // ==========================  DISPLAY ALL IMAGE 
    const getAlbumData = (datasOfAlbum) => {
        // console.log(datasOfAlbum)
            const returnDataArray = datasOfAlbum.map( (data) =>{
                return data; // Re-useable
            })
            // console.log(returnDataArray)
    const StoreArray =  returnDataArray.slice(0,100); 
    // console.log(datasOfAlbum);
    
    const displayContainer = document.getElementById('displayContainer');
    for (const data of StoreArray) {
        const displayCol = document.createElement('col')
        displayCol.innerHTML = `
                <img src="${data.thumbnailUrl}" class="card-img-top p-1 shadow-lg" alt="${data.albumId}">
                <div class="card">
                    <div class=" card-body">
                  
                    <h5 class="card-title">${data.title}title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </p>
                    <button onclick="getAlbumID('${data.albumId}')" data-bs-toggle="modal" data-bs-target="#staticBackdrop" type="button" class="btn w-100 fw-semibold  py-3 px-3 btn-danger fs-se">Primary
                    </button>

                    </div>
                </div>  `;
                displayContainer.appendChild(displayCol)
                // console.log(data)       
            }
    }



    // ==================    // SET DAINAMIC ID TO MODAL 
   
    const getAlbumID = (id) => {
        const url = `https://jsonplaceholder.typicode.com/albums/${id}`;
        fetch(url)
            .then(response => response.json())
            .then(getResponse => displayId(getResponse))
    }
        const displayId = getId  => {
            // console.log(getId)
            const modalInner = document.getElementById('modalInner')
            modalInner.innerHTML = `
                <ul><li>User ID : ${getId.userId}</li></ul>
                <ul><li> ID : ${getId.id}</li></ul>
                <ul><li> Title : ${getId.title}</li></ul>
            `
            // console.log(modalInner)
        }
    getAlbumID()

        // ALERT FOR SEARCH BUTTON 
    const inputSearch = document.getElementById('inputSearch');
    function submit() {
            alert("Data Can't be Found...!")
        }
