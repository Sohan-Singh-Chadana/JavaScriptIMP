// const fileInput = document.querySelector("#fileInput"),
//     addSongBtn = document.querySelector("#addSongBtn");

// addSongBtn.addEventListener('click', () => {
//     fileInput.click();
// })

// fileInput.addEventListener("change", (e) => {
//     console.log(e)
//     const file = e.target.files[0];
//     if (file) {
//         const reader = new FileReader();
//         reader.onload = (e) => {
//             const song = {
//                 title: file.name,
//                 artist: "Unknown Artist",
//                 img_src: "8.jpg",
//                 src: e.target.result,
//             };
//             songs.push(song);
//             updatePlaylist(songs);
//             loadSong(songs.length - 1);
//             audio.play();
//             playPauseBtn.classList.replace("fa-play", 'fa-pause');
//             playing = true;
//         }
//         reader.readAsDataURL(file);
//     }
// });





// fileInput.addEventListener("change", (e) => {
//     // console.log(e)
//     const file = e.target.files[0];
//     if (file) {
//         // //! update Code
//         // const song = {
//         //     title: file.name,
//         //     artist: "Unknown Artist",
//         //     img_src: "default3.jfif",
//         //     file: file,
//         //     src: URL.createObjectURL(file), // use object url for file input
//         //     // src: e.target.result, // use object url for file input
//         // };

//         // songs.push(song);
//         // updatePlaylist(songs);
//         // currentSong = songs.length - 1;
//         // loadSong(currentSong);
//         // audio.play();
//         // playPauseBtn.classList.replace("fa-play", 'fa-pause');
//         // playing = true;
//         // toggleSoundWaves(true, currentSong);

//         // //? save only the metadata to localStorage
//         // const songsMetadata = songs.map(({ title, artist, img_src, src }) => ({ title, artist, img_src, src }))
//         // localStorage.setItem("songsMetadata", JSON.stringify(songsMetadata));

//         // ! old code
//         const reader = new FileReader();
//         reader.onload = (e) => {
//             const song = {
//                 title: file.name,
//                 artist: "Unknown Artist",
//                 img_src: "default3.jfif",
//                 src: e.target.result,
//             };


//             songs.push(song);
//             updatePlaylist(songs);
//             currentSong = songs.length - 1;
//             loadSong(currentSong);
//             audio.play();
//             playPauseBtn.classList.replace("fa-play", 'fa-pause');
//             playing = true;
//             toggleSoundWaves(true, currentSong);

//             //? Save the updated songs array to localStorage
//             localStorage.setItem('songs', JSON.stringify(songs));

//         };
//         reader.readAsDataURL(file);
//     };

// });


// function deleteSong(index) {
//     // Remove from playlist UIs
//     const deletedRow = songRow[index];
//     deletedRow.remove();

//     // Remove from songs array
//     songs.splice(index, 1);


//     // Update the playlist after deletion
//     updatePlaylist(songs);

//     // Open IndexedDB transaction and delete object by key
//     const request = indexedDB.open('musicPlayerDB');

//     request.onsuccess = function(event) {
//         const db = event.target.result;
//         const transaction = db.transaction(['songs'], 'readwrite');
//         const objectStore = transaction.objectStore('songs');
//         const deleteRequest = objectStore.delete(index + 1); // Assuming keyPath is 'id' with autoIncrement

//         deleteRequest.onsuccess = function(event) {
//             console.log('Song deleted from IndexedDB');
//         };

//         deleteRequest.onerror = function(event) {
//             console.error('Error deleting song from IndexedDB:', event.target.error);
//         };
//     };

//     request.onerror = function(event) {
//         console.error('Error opening database for deleting song:', event.target.error);
//     };

//     // Update localStorage: Remove metadata for the deleted song
//     // let songsMetadata = JSON.parse(localStorage.getItem('songsMetadata')) || [];
//     // songsMetadata = songsMetadata.filter((song, idx) => idx !== index);
//     // localStorage.setItem('songsMetadata', JSON.stringify(songsMetadata));
// }





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