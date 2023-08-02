import axios from 'axios';

export async function getAllSong(page) {
    const res = await axios.get('http://localhost:8080/spotifys/' + page + '/' + 2);
    return res.data;
}

export async function create(song) {
    await axios.post('http://localhost:8080/spotifys/', song);
}

export async function editSong(id) {
    await axios.put('http://localhost:8080/spotifys/' + id);
}

export async function getSongById(id) {
    const res = await axios.get('http://localhost:8080/spotifys/' + id);
    return res.data;
}

export async function searchByName(name) {
    const res = await axios.get('http://localhost:8080/spotifys/search/' + name);
    return res.data;
}