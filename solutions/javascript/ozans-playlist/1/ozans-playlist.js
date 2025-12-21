// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  const set = new Set()
  for(let i = 0;i < playlist.length; i++){
    set.add(playlist[i]);
  }
  const arr = Array.from(set);
  return arr;
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  const result = playlist.find((name) => name === track);
  return result ? true : false;
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  const result  = hasTrack(playlist, track);
  result ? true : playlist.push(track);
  return playlist;
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  const index  = playlist.indexOf(track);
  if(index > -1){
    playlist.splice(index,1);
  }
  return playlist;
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  let artists = [];
  for(let i = 0; i < playlist.length; i++) {
    const [ song ,artist ] = playlist[i].split(' - ');
    if(!artists.includes(artist)) {
      artists.push(artist);
    }
  }
  return artists;
}
