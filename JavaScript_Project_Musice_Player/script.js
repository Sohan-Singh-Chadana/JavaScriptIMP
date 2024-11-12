const menuBtn = document.querySelector(".menu-btn"),
    container = document.querySelector(".container");

const progressBar = document.querySelector(".bar"),
    progressDot = document.querySelector(".dot"),
    currentTimeEl = document.querySelector(".current-time"),
    DurationEl = document.querySelector(".duration"),
    progressLine = document.querySelector(".progress-line");


menuBtn.addEventListener("click", () => {
    container.classList.toggle("active");
});

let playing = false,
    currentSong = 0,
    shuffle = false,
    repeat = false,
    favourits = [],
    audio = new Audio();


const songs = [{
        title: "Long_Drive_Instrumental",
        artist: "artist song 1",
        img_src: "default4.jfif",
        src: "data/music/1.mp3",
    },
    {
        title: "Baga Ri Sugan Chidi",
        artist: "• Bablu Ankiya & Sonu Kanwar • 2024",
        img_src: "bagaRiSuganChidi.jpg",
        src: "data/music/3.mp3",
    },
    {
        title: "Tharo Dhani He Natkhatiyo",
        artist: "• Bablu Ankiya & Sonu Kanwar • 2024",
        img_src: "TharoDhaniHeNatkhatiyo.jpg",
        src: "data/music/Tharo Dhani He Natkhatiyo.mp3",
    },
    {
        title: "Bansa Aavo Pawna",
        artist: "• Bablu Ankiya & Sonu Kanwar • 2024",
        img_src: "BansaAavoPawna.jpg",
        src: "data/music/Bansa Aavo Pawna.mp3",
    },
    {
        title: "Tu Kahde To Jaan Bhi De Du",
        artist: "• Bablu Ankiya & Sonu Kanwar • 2024",
        img_src: "TuKahdeToJaanBhiDeDu.jpg",
        src: "data/music/Tu Kahde To Jaan Bhi De Du.mp3",
    },
    {
        title: "Tu Kyu Nahi Raji Bole",
        artist: "• Bablu Ankiya & Sonu Kanwar • 2024",
        img_src: "TuKyuNahiRajiBole.jpg",
        src: "data/music/Tu Kyu Nahi Raji Bole.mp3",
    },
    {
        title: "Love You Kahde",
        artist: "• Bablu Ankiya & Sonu Kanwar • 2024",
        img_src: "LoveYouKahde.jpg",
        src: "data/music/Love You Kahde.mp3",
    },
    {
        title: "Rupali Surat Sajan",
        artist: "• Bablu Ankiya & Rashmi Nishad • 2024",
        img_src: "RupaliSuratSajan.jpg",
        src: "data/music/Rupali Surat Sajan.mp3",
    },
    {
        title: "Mhare To Banna Kandoro Ghadai Do",
        artist: "• Bablu Ankiya & Sonu Kanwar • 2024",
        img_src: "MhareToBannaKandoroGadaiDo.jpg",
        src: "data/music/Mhare To Banna Kandoro Ghadai Do.mp3",
    },
    {
        title: "Mobile Re Chakkar Mein",
        artist: "• Bablu Ankiya & Sonu Kanwar • 2024",
        img_src: "MobileReChakkarMein.jpg",
        src: "data/music/Mobile Re Chakkar Mein.mp3",
    },

];

const playlistContainer = document.querySelector("#playlist"),
    infoWrapper = document.querySelector(".info"),
    coverImage = document.querySelector(".cover-img"),
    currentSongTitle = document.querySelector(".current-song-title"),
    currentFavourite = document.querySelector("#current-favourite"),
    songRow = [];



const playPauseBtn = document.querySelector("#playpause"),
    nextBtn = document.querySelector("#next"),
    prevBtn = document.querySelector("#prev");


function random_bg_color() {
    // Get a random number between 64 to 256
    // (for getting lighter colors)
    let red = Math.floor(Math.random() * 256) + 64;
    let green = Math.floor(Math.random() * 256) + 64;
    let blue = Math.floor(Math.random() * 256) + 64;

    // Construct a color with the given values
    let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";

    red = Math.floor(Math.random() * 256) + 64;
    green = Math.floor(Math.random() * 256) + 64;
    blue = Math.floor(Math.random() * 256) + 64;
    let bgColor2 = "rgb(" + red + ", " + green + ", " + blue + ")";

    // Set the background to the new color
    document.body.style.backgroundImage = `linear-gradient(to bottom right, ${bgColor}, ${bgColor2})`;
    // document.querySelector(".top").style.background = bgColor;
    // coverImage.style.borderColor = bgColor;
    // container.style.background = bgColor2;
}

currentSongTitle.addEventListener("click", () => {
    container.classList.toggle("active");
});


//? Add song dayanamaclliy

const fileInput = document.querySelector("#fileInput"),
    addSongBtn = document.querySelector("#addSongBtn");

addSongBtn.addEventListener('click', () => {
    fileInput.click();
})

//? working code
function fetchSongsFromIndexedDB() {
    let db;

    const request = indexedDB.open('musicPlayerDB', 1);

    request.onerror = function(event) {
        console.error('Database error:', event.target.errorCode);
    };

    request.onsuccess = function(event) {
        db = event.target.result;
        loadSongsFromDB();
    };

    request.onupgradeneeded = function(event) {
        db = event.target.result;
        const objectStore = db.createObjectStore('songs', { keyPath: 'id', autoIncrement: true });
        objectStore.createIndex('title', 'title', { unique: false });
        objectStore.createIndex('artist', 'artist', { unique: false });
        objectStore.createIndex('img_src', 'img_src', { unique: false });
        objectStore.createIndex('src', 'src', { unique: false });
    };



    function addSongToDB(song) {
        const transaction = db.transaction(['songs'], 'readwrite');
        const objectStore = transaction.objectStore('songs');
        const request = objectStore.add(song);

        request.onsuccess = function(event) {
            console.log('Song added to the database');
        };

        request.onerror = function(event) {
            console.error('Error adding song to the database:', event.target.errorCode);
        };
    }


    function loadSongsFromDB() {
        const transaction = db.transaction(['songs'], 'readonly');
        const objectStore = transaction.objectStore('songs');
        const request = objectStore.getAll();

        request.onsuccess = function(event) {
            const savedSongs = event.target.result;
            if (savedSongs.length > 0) {
                songs.push(...savedSongs);
                updatePlaylist(songs);
                currentSong = 0;
                loadSong(currentSong);
            }
        };

        request.onerror = function(event) {
            console.error('Error retrieving songs from the database:', event.target.errorCode);
        };
    }


    fileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const song = {
                    title: file.name,
                    artist: "Unknown Artist",
                    img_src: "default4.jfif",
                    src: e.target.result,
                };

                addSongToDB(song);
                songs.push(song);
                updatePlaylist(songs);
                currentSong = songs.length - 1;
                loadSong(currentSong);
                audio.play();
                playPauseBtn.classList.replace("fa-play", 'fa-pause');
                playing = true;
                toggleSoundWaves(true, currentSong);
            };
            reader.readAsDataURL(file);
        }
    });

    console.log("fetchSongFromIndexeDb Function Call")
}
fetchSongsFromIndexedDB();


//? working whithout localsotorage
// let db;

// const request = indexedDB.open('musicPlayerDB', 1);

// request.onerror = function(event) {
//     console.error('Database error:', event.target.errorCode);
// };

// request.onsuccess = function(event) {
//     db = event.target.result;
//     loadSongsFromDB();
// };

// request.onupgradeneeded = function(event) {
//     db = event.target.result;
//     const objectStore = db.createObjectStore('songs', { keyPath: 'id', autoIncrement: true });
//     objectStore.createIndex('title', 'title', { unique: false });
//     objectStore.createIndex('artist', 'artist', { unique: false });
//     objectStore.createIndex('img_src', 'img_src', { unique: false });
//     objectStore.createIndex('src', 'src', { unique: false });
// };



// function addSongToDB(song) {
//     const transaction = db.transaction(['songs'], 'readwrite');
//     const objectStore = transaction.objectStore('songs');
//     const request = objectStore.add(song);

//     request.onsuccess = function(event) {
//         console.log('Song added to the database');
//     };

//     request.onerror = function(event) {
//         console.error('Error adding song to the database:', event.target.errorCode);
//     };
// }


// function loadSongsFromDB() {
//     const transaction = db.transaction(['songs'], 'readonly');
//     const objectStore = transaction.objectStore('songs');
//     const request = objectStore.getAll();

//     request.onsuccess = function(event) {
//         const savedSongs = event.target.result;
//         if (savedSongs.length > 0) {
//             songs.push(...savedSongs);
//             updatePlaylist(songs);
//             currentSong = 0;
//             loadSong(currentSong);
//         }
//     };

//     request.onerror = function(event) {
//         console.error('Error retrieving songs from the database:', event.target.errorCode);
//     };
// }

// fileInput.addEventListener("change", (e) => {
//     const file = e.target.files[0];
//     if (file) {
//         const reader = new FileReader();
//         reader.onload = (e) => {
//             const song = {
//                 title: file.name,
//                 artist: "Unknown Artist",
//                 img_src: "default4.jfif",
//                 src: e.target.result,
//             };

//             addSongToDB(song);
//             songs.push(song);
//             updatePlaylist(songs);
//             currentSong = songs.length - 1;
//             loadSong(currentSong);
//             audio.play();
//             playPauseBtn.classList.replace("fa-play", 'fa-pause');
//             playing = true;
//             toggleSoundWaves(true, currentSong);
//         };
//         reader.readAsDataURL(file);
//     }
// });


// function fetchSongsFromIndexedDB() {
//     let db;

//     const request = indexedDB.open('musicPlayerDB', 1);

//     request.onerror = function(event) {
//         console.error('Database error:', event.target.errorCode);
//     };

//     request.onsuccess = function(event) {
//         db = event.target.result;
//         loadSongsFromDB();
//         loadLastPlayedSong();
//     };

//     request.onupgradeneeded = function(event) {
//         db = event.target.result;

//         if (!db.objectStoreNames.contains('songs')) {
//             const songStore = db.createObjectStore('songs', { keyPath: 'id', autoIncrement: true });
//             songStore.createIndex('title', 'title', { unique: false });
//             songStore.createIndex('artist', 'artist', { unique: false });
//             songStore.createIndex('img_src', 'img_src', { unique: false });
//             songStore.createIndex('src', 'src', { unique: false });
//         }

//         if (!db.objectStoreNames.contains('playerState')) {
//             db.createObjectStore('playerState', { keyPath: 'id' });
//         }
//     };

//     function addSongToDB(song) {
//         const transaction = db.transaction(['songs'], 'readwrite');
//         const objectStore = transaction.objectStore('songs');
//         const request = objectStore.add(song);

//         request.onsuccess = function(event) {
//             console.log('Song added to the database');
//         };

//         request.onerror = function(event) {
//             console.error('Error adding song to the database:', event.target.errorCode);
//         };
//     }

//     function loadSongsFromDB() {
//         const transaction = db.transaction(['songs'], 'readonly');
//         const objectStore = transaction.objectStore('songs');
//         const request = objectStore.getAll();

//         request.onsuccess = function(event) {
//             const savedSongs = event.target.result;
//             if (savedSongs.length > 0) {
//                 songs.push(...savedSongs);
//                 updatePlaylist(songs);
//                 currentSong = 0; // Set to the first song or adjust as needed
//                 loadSong(currentSong);
//             }
//         };

//         request.onerror = function(event) {
//             console.error('Error retrieving songs from the database:', event.target.errorCode);
//         };
//     }


//     fileInput.addEventListener("change", (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = (e) => {
//                 const song = {
//                     title: file.name,
//                     artist: "Unknown Artist",
//                     img_src: "default4.jfif",
//                     src: e.target.result,
//                 };

//                 addSongToDB(song); // Add song to IndexedDB
//                 songs.push(song); // Add song to local array
//                 updatePlaylist(songs); // Update the UI with the new song
//                 currentSong = songs.length - 1; // Set current song to the newly added song
//                 loadSong(currentSong); // Load the newly added song
//                 audio.play(); // Play the song
//                 playPauseBtn.classList.replace("fa-play", 'fa-pause');
//                 playing = true;
//                 toggleSoundWaves(true, currentSong);
//             };
//             reader.readAsDataURL(file);
//         }
//     });


// }

// fetchSongsFromIndexedDB();

//? new code
// function fetchSongsFromIndexedDB() {
//     let db;

//     const request = indexedDB.open('musicPlayerDB', 1);

//     request.onerror = function(event) {
//         console.error('Database error:', event.target.errorCode);
//     };

//     request.onsuccess = function(event) {
//         db = event.target.result;
//         loadSongsFromDB();
//         loadLastPlayedSong();
//     };

//     request.onupgradeneeded = function(event) {
//         db = event.target.result;

//         if (!db.objectStoreNames.contains('songs')) {
//             const songStore = db.createObjectStore('songs', { keyPath: 'id', autoIncrement: true });
//             songStore.createIndex('title', 'title', { unique: false });
//             songStore.createIndex('artist', 'artist', { unique: false });
//             songStore.createIndex('img_src', 'img_src', { unique: false });
//             songStore.createIndex('src', 'src', { unique: false });
//         }

//         if (!db.objectStoreNames.contains('playerState')) {
//             db.createObjectStore('playerState', { keyPath: 'id' });
//         }
//     };

//     function addSongToDB(song) {
//         const transaction = db.transaction(['songs'], 'readwrite');
//         const objectStore = transaction.objectStore('songs');
//         const request = objectStore.add(song);

//         request.onsuccess = function(event) {
//             console.log('Song added to the database');
//         };

//         request.onerror = function(event) {
//             console.error('Error adding song to the database:', event.target.errorCode);
//         };
//     }

//     function loadSongsFromDB() {
//         const transaction = db.transaction(['songs'], 'readonly');
//         const objectStore = transaction.objectStore('songs');
//         const request = objectStore.getAll();

//         request.onsuccess = function(event) {
//             const savedSongs = event.target.result;
//             if (savedSongs.length > 0) {
//                 songs.push(...savedSongs);
//                 updatePlaylist(songs);
//             }
//         };

//         request.onerror = function(event) {
//             console.error('Error retrieving songs from the database:', event.target.errorCode);
//         };
//     }

//     function saveLastPlayedSong(songIndex, currentTime) {
//         const transaction = db.transaction(['playerState'], 'readwrite');
//         const objectStore = transaction.objectStore('playerState');
//         const request = objectStore.put({ id: 'lastPlayed', songIndex, currentTime });

//         request.onsuccess = function(event) {
//             console.log('Last played song saved');
//         };

//         request.onerror = function(event) {
//             console.error('Error saving last played song:', event.target.errorCode);
//         };
//     }

//     function loadLastPlayedSong() {
//         const transaction = db.transaction(['playerState'], 'readonly');
//         const objectStore = transaction.objectStore('playerState');
//         const request = objectStore.get('lastPlayed');

//         request.onsuccess = function(event) {
//             const lastPlayed = event.target.result;
//             if (lastPlayed) {
//                 currentSong = lastPlayed.songIndex;
//                 loadSong(currentSong);
//                 audio.currentTime = lastPlayed.currentTime;
//                 audio.play();
//                 playPauseBtn.classList.replace("fa-play", 'fa-pause');
//                 playing = true;
//                 toggleSoundWaves(true, currentSong);
//             }
//         };

//         request.onerror = function(event) {
//             console.error('Error loading last played song:', event.target.errorCode);
//         };
//     }

//     fileInput.addEventListener("change", (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = (e) => {
//                 const song = {
//                     title: file.name,
//                     artist: "Unknown Artist",
//                     img_src: "default4.jfif",
//                     src: e.target.result,
//                 };

//                 addSongToDB(song);
//                 songs.push(song);
//                 updatePlaylist(songs);
//                 currentSong = songs.length - 1;
//                 loadSong(currentSong);
//                 audio.play();
//                 playPauseBtn.classList.replace("fa-play", 'fa-pause');
//                 playing = true;
//                 toggleSoundWaves(true, currentSong);
//             };
//             reader.readAsDataURL(file);
//         }
//     });

//     audio.addEventListener('timeupdate', () => {
//         if (playing) {
//             saveLastPlayedSong(currentSong, audio.currentTime);
//         }
//     });
// }
// fetchSongsFromIndexedDB();

//? working but error
// function fetchSongsFromIndexedDB() {
//     let db;

//     const request = indexedDB.open('musicPlayerDB', 1);

//     request.onerror = function(event) {
//         console.error('Database error:', event.target.errorCode);
//     };

//     request.onsuccess = function(event) {
//         db = event.target.result;
//         loadSongsFromDB();
//         loadLastPlayedSong();
//     };

//     request.onupgradeneeded = function(event) {
//         db = event.target.result;

//         if (!db.objectStoreNames.contains('songs')) {
//             const songStore = db.createObjectStore('songs', { keyPath: 'id', autoIncrement: true });
//             songStore.createIndex('title', 'title', { unique: false });
//             songStore.createIndex('artist', 'artist', { unique: false });
//             songStore.createIndex('img_src', 'img_src', { unique: false });
//             songStore.createIndex('src', 'src', { unique: false });
//         }

//         if (!db.objectStoreNames.contains('playerState')) {
//             db.createObjectStore('playerState', { keyPath: 'id' });
//         }
//     };

//     function addSongToDB(song) {
//         const transaction = db.transaction(['songs'], 'readwrite');
//         const objectStore = transaction.objectStore('songs');
//         const request = objectStore.add(song);

//         request.onsuccess = function(event) {
//             console.log('Song added to the database');
//             song.id = event.target.result; // Set the ID for the new song
//             songs.push(song);
//             updatePlaylist(songs);
//             currentSong = songs.length - 1;
//             loadSong(currentSong);
//             audio.play();
//             playPauseBtn.classList.replace("fa-play", 'fa-pause');
//             playing = true;
//             toggleSoundWaves(true, currentSong);
//             saveLastPlayedSong(currentSong, audio.currentTime);
//         };

//         request.onerror = function(event) {
//             console.error('Error adding song to the database:', event.target.errorCode);
//         };
//     }

//     function loadSongsFromDB() {
//         const transaction = db.transaction(['songs'], 'readonly');
//         const objectStore = transaction.objectStore('songs');
//         const request = objectStore.getAll();

//         request.onsuccess = function(event) {
//             const savedSongs = event.target.result;
//             if (savedSongs.length > 0) {
//                 songs.push(...savedSongs);
//                 updatePlaylist(songs);
//             }
//         };

//         request.onerror = function(event) {
//             console.error('Error retrieving songs from the database:', event.target.errorCode);
//         };
//     }

//     function saveLastPlayedSong(songIndex, currentTime) {
//         const transaction = db.transaction(['playerState'], 'readwrite');
//         const objectStore = transaction.objectStore('playerState');
//         const request = objectStore.put({ id: 'lastPlayed', songIndex, currentTime });

//         request.onsuccess = function(event) {
//             console.log('Last played song saved');
//         };

//         request.onerror = function(event) {
//             console.error('Error saving last played song:', event.target.errorCode);
//         };
//     }

//     function loadLastPlayedSong() {
//         const transaction = db.transaction(['playerState'], 'readonly');
//         const objectStore = transaction.objectStore('playerState');
//         const request = objectStore.get('lastPlayed');

//         request.onsuccess = function(event) {
//             const lastPlayed = event.target.result;
//             if (lastPlayed) {
//                 currentSong = lastPlayed.songIndex;
//                 loadSong(currentSong);
//                 audio.currentTime = lastPlayed.currentTime;
//                 audio.play();
//                 playPauseBtn.classList.replace("fa-play", 'fa-pause');
//                 playing = true;
//                 toggleSoundWaves(true, currentSong);
//             }
//         };

//         request.onerror = function(event) {
//             console.error('Error loading last played song:', event.target.errorCode);
//         };
//     }

//     fileInput.addEventListener("change", (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = (e) => {
//                 const song = {
//                     title: file.name,
//                     artist: "Unknown Artist",
//                     img_src: "default4.jfif",
//                     src: e.target.result,
//                 };

//                 addSongToDB(song);
//             };
//             reader.readAsDataURL(file);
//         }
//     });

//     audio.addEventListener('timeupdate', () => {
//         if (playing) {
//             saveLastPlayedSong(currentSong, audio.currentTime);
//         }
//     });
// }

// fetchSongsFromIndexedDB();


function init() {
    // const savedSongs = localStorage.getItem('songs');
    // if (savedSongs) {
    //     songs.push(...JSON.parse(savedSongs));
    // }

    // const savedSongsMetadata = localStorage.getItem("songsMetadata");
    // if (savedSongsMetadata) {
    //     const parsedMetadata = JSON.parse(savedSongsMetadata);
    //     songs.length = 0;

    //     parsedMetadata.forEach((metadata, index) => {
    //         const song = {
    //             ...metadata,
    //             file: null,
    //         }
    //         songs.push(song)
    //     })
    // }


    loadFavourites();
    updatePlaylist(songs);

    if (songs.length > 0) {
        currentSong = 0;
        loadSong(currentSong);
    }


    console.log("init Function Call")
}

init();




function updatePlaylist(songs) {
    // remove any existing element

    playlistContainer.innerHTML = "";

    // use for each on songs array
    songs.forEach((song, index) => {
        // extract data from song

        const { title, src } = song;

        // check if included in favourites array
        const isFavourite = favourits.includes(index);

        let musicTitle = limitTitle(title, 25);

        // create a tr to wrappe song
        const tr = document.createElement("tr");
        tr.classList.add("song");
        tr.innerHTML = `
     <td class="no">
               <h5>${index + 1}</h5>
    </td>
        <td class="title">
            <h6>${musicTitle}</h6>
        </td>
        <td class="sound-waves">
            <div></div>
            <div></div>
            <div></div>
        </td>
        <td class="length">
            <h5>2:03</h5>
        </td>
        <td>
            <i class="fas fa-heart ${isFavourite ? "active" : ""}"></i>
        </td>
        <td>
           <i class="fas fa-trash delete-btn"></i>
        </td>
         <!--<td>
            <i class="fa-solid fa-ellipsis-vertical song-detail"></i>
        </td>-->
    `;

        playlistContainer.append(tr);
        songRow[index] = tr;

        //? add event listener for delete button
        tr.querySelector(".delete-btn").addEventListener("click", () => {
            deleteSong(index);
        })

        //lets play song when clicked on playlist songs

        tr.addEventListener("click", (e) => {
            // lets add to Favourits when clicked on heart

            if (e.target.classList.contains("fa-heart")) {
                addToFavourits(index);
                e.target.classList.toggle("active");
                //if heart clicked just add to favourit dont play
                return;
            }

            // if (e.target.classList.contains("song-detail")) {
            //     opensongDetailFunction(index)
            //     return;
            // }

            currentSong = index;
            loadSong(currentSong);
            audio.play();
            container.classList.remove("active");
            playPauseBtn.classList.replace("fa-play", "fa-pause");
            playing = true;
            toggleSoundWaves(true, currentSong);
        });

        // const audioForDuration = new Audio(`data/music/${src}`);
        const audioForDuration = new Audio(src);
        audioForDuration.addEventListener("loadedmetadata", () => {
            const duration = audioForDuration.duration;
            let songDration = formatTime(duration);
            tr.querySelector(".length h5").innerText = songDration;
        });

        //? store the updated src in the songs array
        songs[index].src = src; // Ensure src is updated

    });

}



function deleteSong(index) {
    // Remove the song from the songs array
    const songToDelete = songs[index];

    // Remove the specific row from the playlist UI
    songRow[index].remove();
    songs.splice(index, 1);

    // Open IndexedDB transaction and delete object by key
    const request = indexedDB.open('musicPlayerDB');

    request.onsuccess = function(event) {
        const db = event.target.result;
        const transaction = db.transaction(['songs'], 'readwrite');
        const objectStore = transaction.objectStore('songs');

        // Assuming the keyPath is 'id' with autoIncrement
        const deleteRequest = objectStore.delete(songToDelete.id);

        deleteRequest.onsuccess = function(event) {
            console.log('Song deleted from IndexedDB');
            // Update the playlist after successful deletion from IndexedDB
            updatePlaylist(songs);
            if (index === currentSong) {
                currentSong = 0;
                loadSong(currentSong);
                playPauseFunction();
            }
        };

        deleteRequest.onerror = function(event) {
            console.error('Error deleting song from IndexedDB:', event.target.error);
        };
    };

    request.onerror = function(event) {
        console.error('Error opening database for deleting song:', event.target.error);
    };
}



function formatTime(time) {
    // format time lik 2:30
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);

    // add traling zero if seconds less than 10
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${seconds}`;
}

// limitTitle function
function limitTitle(title, maxLength) {
    if (title.length > maxLength) {
        return title.substring(0, maxLength) + "...";
    } else {
        return title;
    }
}

// lastplay song and time
function saveLastPlayed() {
    const currentSongData = {
        index: currentSong,
        time: audio.currentTime
    };
    localStorage.setItem('lastPlayed', JSON.stringify(currentSongData));
}

// Call this function whenever the song is changed or paused
audio.addEventListener('timeupdate', saveLastPlayed);
audio.addEventListener('pause', saveLastPlayed);


function loadLastPlayed() {
    const lastPlayed = JSON.parse(localStorage.getItem('lastPlayed'));
    if (lastPlayed && songs[lastPlayed.index]) {
        currentSong = lastPlayed.index;
        loadSong(currentSong);
        audio.currentTime = lastPlayed.time;
    } else {
        loadSong(0); // Load the first song if no last played data is found
    }
}

// Call this function on page load
window.addEventListener('load', () => {
    loadLastPlayed();
    // fetchSongsFromIndexedDB();
});



// ? lets add audio play functionality

function loadSong(num) {

    let currentSongTitleMain = limitTitle(songs[num].title, 15);

    // change all the title artist and times to current song
    infoWrapper.innerHTML = `
     <h2>${currentSongTitleMain}</h2>
     <h3>${songs[num].artist}</h3>
    `;
    let currentSongTitlesmall = limitTitle(songs[num].title, 20);
    currentSongTitle.innerHTML = currentSongTitlesmall;

    // change the cover image
    coverImage.style.backgroundImage = `url(data/img/${songs[num].img_src})`;

    // add src of current song to audio variable
    // audio.src = `data/music/${songs[num].src}`;
    // audio.src = songs[num].src;

    //! update code
    // if (songs[num].file) {
    //     const reader = new FileReader();
    //     reader.onload = (e) => {
    //         audio.src = e.target.result;
    //         if (playing) {
    //             audio.play();
    //         }
    //     };
    //     reader.readAsDataURL(songs[num].file)
    // } else {
    //     audio.src = songs[num].src;
    //     if (playing) {
    //         audio.play();
    //     }
    // }

    //! old code
    //* add src of current song to audio variable
    if (songs[num].src.startsWith("data:")) {
        // The src is a data URL
        audio.src = songs[num].src;
    } else {
        // The src is a regular URL
        audio.src = songs[num].src;
    }


    // Update the playlist to highlight the current song and update duration
    songRow.forEach((row, index) => {
        const isCurrent = index === num;
        row.querySelector(".title").classList.toggle("active", isCurrent);
    });


    // if song is in favourite highlight
    if (favourits.includes(num)) {
        currentFavourite.classList.add("active");
    } else {
        // if not  remove active
        currentFavourite.classList.remove("active");
    }


    // Apply a random background color;
    random_bg_color();
    toggleSoundWaves(playing, num);
    // highlightCurrentSong(num);

    console.log("loadSong Function Call");

}

//! not require code start

// function highlightCurrentSong(songIndex) {
//     // const titleStyle = document.querySelectorAll(".title")
//     songRow.forEach((row, index) => {
//         const titleStyle = row.querySelector(".title");
//         if (index === songIndex) {
//             titleStyle.classList.add("active");
//         } else {
//             titleStyle.classList.remove("active");
//         }
//     })
// }

// playlistContainer.addEventListener("click", (e) => {
//     const tr = e.target.closest(".song")
//     if (tr) {
//         const index = Array.from(tr.parentNode.children).indexOf(tr);
//         currentSong = index;
//         loadSong(currentSong);
//         audio.play();
//         playPauseBtn.classList.replace("fa-play", "fa-pause");
//         playing = true;
//         toggleSoundWaves(true, currentSong)
//     }
// })

//! not require code end



function toggleSoundWaves(play, songIndex) {
    const soundWaves = document.querySelectorAll(".sound-waves div");
    const soundWavesBottom = document.querySelectorAll(".sound-waves-bottom div");
    const songRows = document.querySelectorAll(".song");

    // soundWaves.forEach((wave) => {
    //     wave.style.animationPlayState = "paused";
    //     wave.classList.remove("active");
    //     songRow.forEach((row) => {
    //         row.querySelector(".title").classList.remove("active");
    //     });
    //     // currentSongTitle.classList.remove("active")
    // });

    songRows.forEach((row, index) => {
        const waves = row.querySelectorAll(".sound-waves div");
        waves.forEach((wave) => {
            wave.style.animationPlayState = "paused";
            wave.classList.remove("active");
        });

        const title = row.querySelector(".title");
        if (title) title.classList.remove("active");

        row.classList.remove("active");

    })

    soundWavesBottom.forEach((wave) => {
        wave.style.animationPlayState = "paused";
        // wave.classList.remove("active");
    });

    if (play) {
        const currentSongRow = songRows[songIndex];
        if (currentSongRow) {
            const currentSongWaves = songRows[songIndex].querySelectorAll(".sound-waves div");
            currentSongWaves.forEach((wave) => {
                wave.style.animationPlayState = "running";
                wave.classList.add("active");
                currentSongTitle.classList.add("active");
            });


            const SongTitle = currentSongRow.querySelector(".title");
            if (SongTitle) {
                SongTitle.classList.add("active")
            }

            currentSongRow.classList.add("active")
        }

        // const currentSongWaves = songRows[songIndex].querySelectorAll(".sound-waves div");
        // currentSongWaves.forEach((wave) => {
        //     wave.style.animationPlayState = "running";
        //     wave.classList.add("active");
        //     currentSongTitle.classList.add("active");
        // });


        const currentSongWavesBottom = soundWavesBottom;
        currentSongWavesBottom.forEach((wave) => {
            wave.style.animationPlayState = 'running';
            wave.classList.add("active")
        })


        // songRow.forEach((row, index) => {
        //     const titleStyle = row.querySelector(".title");
        //     if (index === songIndex) {
        //         titleStyle.classList.add("active");
        //     }
        //     // else {
        //     //     titleStyle.classList.remove("active");
        //     // }
        // })
    }
};

audio.addEventListener("play", () => {
    toggleSoundWaves(true, currentSong)
})
audio.addEventListener("pause", () => {
    toggleSoundWaves(false, currentSong)
})


// lets add play pause next prev functionality

// const playPauseBtn = document.querySelector("#playpause"),
//     nextBtn = document.querySelector("#next"),
//     prevBtn = document.querySelector("#prev");

function playPauseFunction() {
    if (playing) {
        // pause if already playing
        playPauseBtn.classList.replace("fa-pause", "fa-play");
        playing = false;
        audio.pause();
        toggleSoundWaves(false, currentSong)

    } else {
        // if not playing play
        playPauseBtn.classList.replace("fa-play", "fa-pause");
        playing = true;
        audio.play();
        toggleSoundWaves(true, currentSong)
    }
}

playPauseBtn.addEventListener("click", playPauseFunction);

function nextSong() {
    // shuffle when playing next songs

    if (shuffle) {
        shuffleFunc();
        loadSong(currentSong);
    }

    // if current song is not last in playlist
    else if (currentSong < songs.length - 1) {
        // load the next song
        currentSong++;
    } else {
        // else if its last song then play first
        currentSong = 0;
    }
    loadSong(currentSong);
    toggleSoundWaves(true, currentSong)

    // after load if song waas playing keep playing current too

    // we need to play if playing true so insted of return make next if to else if
    if (playing) {
        audio.play();
    }
}

nextBtn.addEventListener("click", nextSong);

// song 1 repeated that means shuffle is working

function prevSong() {
    // same on prev songs

    if (shuffle) {
        shuffleFunc();
        loadSong(currentSong);
    }

    // same for prev song if first song playing go to last song
    else if (currentSong > 0) {
        currentSong--;
    } else {
        currentSong = songs.length - 1;
    }
    loadSong(currentSong);
    toggleSoundWaves(true, currentSong)

    // after load if song waas playing keep playing current too

    if (playing) {
        audio.play();
    }
}

prevBtn.addEventListener("click", prevSong);

function addToFavourits(index) {
    // check if already in favourits then remove
    if (favourits.includes(index)) {
        favourits = favourits.filter((item) => item !== index);
        //if current playing song is removed also remove currentFavourit
        currentFavourite.classList.remove("active");
    } else {
        // if not already in favourits add
        favourits.push(index);

        // if coming from current favourit that is index and current are equals

        if (index === currentSong) {
            currentFavourite.classList.add("active");
        }

        // after adding favorite rerender playlist to show favourties
        updatePlaylist(songs);
        if (playing) {
            toggleSoundWaves(true, currentSong);
        }
    }

    localStorage.setItem('favourits', JSON.stringify(favourits));
}

function loadFavourites() {
    const savedFavourits = localStorage.getItem("favourits");
    if (savedFavourits) {
        favourits = JSON.parse(savedFavourits);
    }
}


// also add to favourit curent playing song when clicked heart

currentFavourite.addEventListener("click", (e) => {
    e.stopPropagation();
    currentFavourite.classList.toggle("active");
    addToFavourits(currentSong);

    // after adding favorite rerender playlist to show favourties
    updatePlaylist(songs);
    if (playing) {
        toggleSoundWaves(true, currentSong);
    }
});

// lets add shuffle functionality

const shuffleBtn = document.querySelector("#shuffle");

function shuffleSongs() {
    // if shuffle false make it true or vice versa
    shuffle = !shuffle;
    shuffleBtn.classList.toggle("active");
}

shuffleBtn.addEventListener("click", shuffleSongs);

// if shuffle true shuffle songs when playing next or prev

function shuffleFunc() {
    if (shuffle) {
        // select a random song from playlist
        currentSong = Math.floor(Math.random() * songs.length);
    }
    // if shuffle false do nothing
}


// repeat functionality

const repeatBtn = document.querySelector("#repeat");

function repeatSong() {
    if (repeat === 0) {
        // if repeat is off make it 1 then means repeat current song
        repeat = 1;
        // if repeat on make button active
        repeatBtn.classList.add("active");
    } else if (repeat === 1) {
        // if repeat is 1 than is only repeat current song make it 2 that means repeat playlist
        repeat = 2;
        repeatBtn.classList.add("active")
    } else {
        // else turn off repeat
        repeat = 0;
        repeatBtn.classList.remove("active");
    }
}

function repeatSong1() {
    repeatBtn.classList.toggle("active");
    const repeatBtnState = repeatBtn.classList.contains("active")
    if (repeatBtnState) {
        audio.loop = true;
        // loadSong(currentSong);
        // repeatBtn.classList.add("active");
    } else {
        audio.loop = false;
        // loadSong(currentSong);
        // repeatBtn.classList.remove("active");
    }
}

// repeatBtn.addEventListener("click", repeatSong);
// on one click its repeat === 1  on second repeat === 2 on third repeat === 0 and revise
repeatBtn.addEventListener("click", repeatSong1);

// now if reapeat on on audio end
audio.addEventListener("ended", () => {
    if (repeat === 1) {
        // if repeat curren song
        // again load current  song
        loadSong(currentSong);
        audio.play();
    } else if (repeat === 2) {
        // if repeat playlist
        // play next song
        nextSong();
        audio.play();
    } else if (shuffle) {
        nextSong();
    } else {
        // if repeat off
        // just play all playlist one time then stop
        if (currentSong === songs.length - 1) {
            // if its last song in playlist stop playing now
            audio.play();
            playPauseBtn.classList.replace("fa-pause", "fa-play");
            toggleSoundWaves(false, currentSong);
            playing = false;
        } else {
            // if not last continue to next
            nextSong();
            audio.play();
        }
    }
})

//? lets add progress bar

//? progress function

function progress() {
    //? get duration and current time from audio
    let { duration, currentTime } = audio;

    //? if anyone not a number make it 0

    isNaN(duration) ? (duration = 0) : duration;
    isNaN(currentTime) ? (currentTime = 0) : currentTime;

    //? update time elements

    currentTimeEl.innerHTML = formatTime(currentTime);
    DurationEl.innerHTML = formatTime(duration);


    //? lets move the progress dot

    let progressPercentage = (currentTime / duration) * 100;
    progressDot.style.left = `${progressPercentage}%`;
    progressLine.style.width = `${progressPercentage}%`
}

// update progress on audio timeupdate event

audio.addEventListener("timeupdate", progress);

//? change progress when clicked on bar

function setProgress(e) {
    let width = this.clientWidth;
    let clickX = e.offsetX;
    let duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

progressBar.addEventListener("click", setProgress);


//? volumeBar functionality

const volume = document.querySelector("#volume"),
    layer = document.querySelector(".layer"),
    volBar = document.querySelector(".volume-bar"),
    volumeRange = document.querySelector(".volumerange");

function volumeBarFun() {
    layer.classList.toggle("active");
    setTimeout(() => {
        if (layer.classList.contains("active")) {
            layer.classList.remove("active")
        }
    }, 5000);
};

volume.addEventListener("click", volumeBarFun);

function setVolumeFunc() {
    audio.volume = volumeRange.value
    const barWidth = (volumeRange.value / 1) * 100;
    volBar.style.width = `${barWidth}%`;
};

volumeRange.addEventListener("input", setVolumeFunc);