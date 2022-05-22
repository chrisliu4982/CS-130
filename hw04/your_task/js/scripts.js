const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioFile = 'https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c';
const audioPlayer = AudioPlayer('.player', audioFile);

const search = (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

const getTracks = (term) => {
    console.log(`
        get tracks from spotify based on the search term
        "${term}" and load them into the #tracks section 
        of the DOM...`);
    fetch(baseURL + '?q=' + term + '&type=track')
    .then(response => response.json())
    .then(data => {
        if(data.length == 0){
            document.getElementById('tracks').innerHTML = `
            No tracks found that match your search criteria.
            `
        }
        else{
            if (data.length > 5){
                tracks = data.slice(0, 5)
            }
            console.log(tracks)
            document.getElementById('tracks').innerHTML = ``
            tracks.forEach((element, index) => {
                document.getElementById('tracks').innerHTML += `
                <button class="track-item preview" data-preview-track="${element.preview_url}" onclick="handleTrackClick(event);">
                <img src="${element.album.image_url}" alt='album art for ${element.album.name}'>
                    <i class="fas play-track fa-play" aria-hidden="true"></i>
                <div class="label">
                    <h2>${element.name}</h2>
                    <p>
                        ${element.artist.name}
                    </p>
                </div>
                </button>
                `
                
            });
        }
    })
};

const getAlbums = (term) => {
    console.log(`
        get albums from spotify based on the search term
        "${term}" and load them into the #albums section 
        of the DOM...`);
    fetch(baseURL + '?q=' + term + '&type=album')
    .then(response => response.json())
    .then(data => {
        if (data.length == 0){
            document.getElementById('albums').innerHTML = `
            No albums were returned.
            `
        }
        else {
            console.log(data)
            document.getElementById('albums').innerHTML = ``
            data.forEach(element => {
                document.getElementById('albums').innerHTML += `
                <section class="album-card" id="2lATw9ZAVp7ILQcOKPCPqp">
                <div>
                    <img src="${element.image_url}" alt='album art for ${element.name}'>
                    <h2>${element.name}</h2>
                    <div class="footer">
                        <a href="${element.spotify_url}" target="_blank">
                            view on spotify
                        </a>
                    </div>
                </div>
                </section>
                `
            })
            
        }
    })
};

const getArtist = (term) => {
    console.log(`
        get artists from spotify based on the search term
        "${term}" and load the first artist into the #artist section 
        of the DOM...`);
    fetch(baseURL + '?q=' + term + '&type=artist')
    .then(response => response.json())
    .then(data => {
        if(data.length != 0){
            topResult = data[0]
            document.getElementById('artist').innerHTML = `
                <section class="artist-card" id="${topResult.id}">
                    <div>
                        <img src="${topResult.image_url}" alt='image of ${topResult.name}'>
                        <h2>${topResult.name}</h2>
                        <div class="footer">
                            <a href="${topResult.spotify_url}" target="_blank">
                                view on spotify
                            </a>
                        </div>
                    </div>
                </section>
                `   
        }

    })
    
};

const handleTrackClick = (ev) => {
    const previewUrl = ev.currentTarget.getAttribute('data-preview-track');
    console.log(previewUrl);
    // audioPlayer.setAudioFile(previewUrl)
    document.getElementById('track').src = previewUrl
    audioPlayer.play()
    console.log(ev.currentTarget.querySelector('img').src)
    document.getElementById('current-track').innerHTML = `
        <img src="${ev.currentTarget.querySelector('img').src}" alt='album art'>
        <div>
            <h2> ${ev.currentTarget.querySelector('h2').innerHTML} </h2>
            <p> ${ev.currentTarget.querySelector('p').innerHTML} </p>
        </div>
    `
}

document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};

