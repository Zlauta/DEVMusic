import { formatDate } from "../utils/formatDate";
// Función generadora de ID único
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
}

// Array de 20 canciones
const cancionesIniciales = [
  {
    id: generateId(),
    titulo: "Blinding Lights",
    artista: "The Weeknd",
    genero: "Pop",
    anioLanzamiento: 2019,
    categoria: "Internacional",
    duracion: "3:20",
    fechaDeCreacion: formatDate(),
    urlPortada:
      "https://cdns-images.dzcdn.net/images/cover/4f4a2a6bde78c/500x500.jpg",
    urlAudio:
      "https://cdns-preview-4.dzcdn.net/stream/c-40e1a4cf716f7ef3b92aa8bcfdd5c615-3.mp3",
  },
  {
    id: generateId(),
    titulo: "Shape of You",
    artista: "Ed Sheeran",
    genero: "Pop",
    anioLanzamiento: 2017,
    categoria: "Internacional",
    duracion: "3:53",
    fechaDeCreacion: formatDate(),
    urlPortada:
      "https://cdns-images.dzcdn.net/images/cover/17f490db9aab6/500x500.jpg",
    urlAudio:
      "https://cdns-preview-8.dzcdn.net/stream/c-8ab54a0d22fa82348a8dbe27d9b69f29-6.mp3",
  },
  {
    id: generateId(),
    titulo: "Levitating",
    artista: "Dua Lipa",
    genero: "Pop",
    anioLanzamiento: 2020,
    categoria: "Internacional",
    duracion: "3:23",
    fechaDeCreacion: formatDateDate(),
    urlPortada:
      "https://cdns-images.dzcdn.net/images/cover/3cbb34d85f5b2/500x500.jpg",
    urlAudio:
      "https://cdns-preview-7.dzcdn.net/stream/c-7cde8023f2ea6a0a2a0e7ad3e76c37f0-6.mp3",
  },
  {
    id: generateId(),
    titulo: "Dakiti",
    artista: "Bad Bunny, Jhay Cortez",
    genero: "Reggaeton",
    anioLanzamiento: 2020,
    categoria: "Latino",
    duracion: "3:25",
    fechaDeCreacion: formatDateDate(),
    urlPortada:
      "https://cdns-images.dzcdn.net/images/cover/b03e43a95c5c3/500x500.jpg",
    urlAudio:
      "https://cdns-preview-6.dzcdn.net/stream/c-6c5f803fb9ad1f3c1a77cb9e2b07b43d-6.mp3",
  },
  {
    id: generateId(),
    titulo: "Pepas",
    artista: "Farruko",
    genero: "Reggaeton",
    anioLanzamiento: 2021,
    categoria: "Latino",
    duracion: "4:47",
    fechaDeCreacion: formatDateDate(),
    urlPortada:
      "https://cdns-images.dzcdn.net/images/cover/23aa2c2e5ccdb/500x500.jpg",
    urlAudio:
      "https://cdns-preview-5.dzcdn.net/stream/c-5d2e4023e5bbdf7e83b23cb5a9a89fd0-6.mp3",
  },
  {
    id: generateId(),
    titulo: "Despacito",
    artista: "Luis Fonsi, Daddy Yankee",
    genero: "Reggaeton",
    anioLanzamiento: 2017,
    categoria: "Latino",
    duracion: "3:49",
    fechaDeCreacion: formatDateDate(),
    urlPortada:
      "https://cdns-images.dzcdn.net/images/cover/b2f146f41d5fd/500x500.jpg",
    urlAudio:
      "https://cdns-preview-4.dzcdn.net/stream/c-41b6a2c4d4f5b8e7e5c8f69b7a73e60-4.mp3",
  },
  {
    id: generateId(),
    titulo: "Uptown Funk",
    artista: "Mark Ronson ft. Bruno Mars",
    genero: "Funk / Pop",
    anioLanzamiento: 2014,
    categoria: "Internacional",
    duracion: "4:30",
    fechaDeCreacion: formatDateDate(),
    urlPortada:
      "https://cdns-images.dzcdn.net/images/cover/4e4eab0d9d5e/500x500.jpg",
    urlAudio:
      "https://cdns-preview-2.dzcdn.net/stream/c-292bb4327f7a5806d79eeb5c1c6a0de5-4.mp3",
  },
  {
    id: generateId(),
    titulo: "Taki Taki",
    artista: "DJ Snake, Selena Gomez, Ozuna, Cardi B",
    genero: "Reggaeton / Pop",
    anioLanzamiento: 2018,
    categoria: "Latino",
    duracion: "3:32",
    fechaDeCreacion: formatDateDate(),
    urlPortada:
      "https://cdns-images.dzcdn.net/images/cover/4cddcc1e332b/500x500.jpg",
    urlAudio:
      "https://cdns-preview-0.dzcdn.net/stream/c-0a60a73d15a893a5978e5bbaa1f83f7f-4.mp3",
  },
  {
    id: generateId(),
    titulo: "Hawái",
    artista: "Maluma",
    genero: "Reggaeton",
    anioLanzamiento: 2020,
    categoria: "Latino",
    duracion: "3:21",
    fechaDeCreacion: formatDateDate(),
    urlPortada:
      "https://cdns-images.dzcdn.net/images/cover/57afc4a69a44/500x500.jpg",
    urlAudio:
      "https://cdns-preview-9.dzcdn.net/stream/c-996932bb7f4a9b67b95d99a2db5f3e28-3.mp3",
  },
  {
    id: generateId(),
    titulo: "La Canción",
    artista: "J Balvin, Bad Bunny",
    genero: "Reggaeton",
    anioLanzamiento: 2019,
    categoria: "Latino",
    duracion: "4:02",
    fechaDeCreacion: formatDateDate(),
    urlPortada:
      "https://cdns-images.dzcdn.net/images/cover/3f4a7a9dd32a/500x500.jpg",
    urlAudio:
      "https://cdns-preview-3.dzcdn.net/stream/c-3c41796c212fca15f58f942ebd833b74-4.mp3",
  },
  {
    id: generateId(),
    titulo: "Save Your Tears",
    artista: "The Weeknd",
    genero: "Pop",
    anioLanzamiento: 2020,
    categoria: "Internacional",
    duracion: "3:36",
    fechaDeCreacion: formatDateDate(),
    urlPortada:
      "https://cdns-images.dzcdn.net/images/cover/6a9b72a63a76/500x500.jpg",
    urlAudio:
      "https://cdns-preview-5.dzcdn.net/stream/c-55d2e4023e5bbdf7e83b23cb5a9a89fd0-6.mp3",
  },
  {
    id: generateId(),
    titulo: "Señorita",
    artista: "Shawn Mendes, Camila Cabello",
    genero: "Pop",
    anioLanzamiento: 2019,
    categoria: "Internacional",
    duracion: "3:11",
    fechaDeCreacion: formatDateDate(),
    urlPortada:
      "https://cdns-images.dzcdn.net/images/cover/2a3c0ccf8a2a/500x500.jpg",
    urlAudio:
      "https://cdns-preview-1.dzcdn.net/stream/c-11c60d3b9ef7b7f50b2e40a7b77d8a5d-5.mp3",
  },
  {
    id: generateId(),
    titulo: "Sunflower",
    artista: "Post Malone, Swae Lee",
    genero: "Hip-Hop",
    anioLanzamiento: 2018,
    categoria: "Internacional",
    duracion: "2:38",
    fechaDeCreacion: formatDateDate(),
    urlPortada:
      "https://cdns-images.dzcdn.net/images/cover/19fbb03f44b3/500x500.jpg",
    urlAudio:
      "https://cdns-preview-0.dzcdn.net/stream/c-0c7e20c70afbb96d9c7c3f1a833e20b4-5.mp3",
  },
  {
    id: generateId(),
    titulo: "Baila Baila Baila",
    artista: "Ozuna",
    genero: "Reggaeton",
    anioLanzamiento: 2019,
    categoria: "Latino",
    duracion: "2:46",
    fechaDeCreacion: formatDateDate(),
    urlPortada:
      "https://cdns-images.dzcdn.net/images/cover/5b6d0f6a1c2c/500x500.jpg",
    urlAudio:
      "https://cdns-preview-8.dzcdn.net/stream/c-8c5c0a02a5a732f9f5c3bb2d73c0b4c2-6.mp3",
  },
  {
    id: generateId(),
    titulo: "Mi Gente",
    artista: "J Balvin, Willy William",
    genero: "Reggaeton",
    anioLanzamiento: 2017,
    categoria: "Latino",
    duracion: "3:06",
    fechaDeCreacion: formatDateDate(),
    urlPortada:
      "https://cdns-images.dzcdn.net/images/cover/2a6bb3e5c1d5/500x500.jpg",
    urlAudio:
      "https://cdns-preview-6.dzcdn.net/stream/c-6a6f4e6a43d8e49b6e89e7c3b21f5b6c-7.mp3",
  },
  {
    id: generateId(),
    titulo: "Dákiti (Remix)",
    artista: "Bad Bunny",
    genero: "Reggaeton",
    anioLanzamiento: 2021,
    categoria: "Latino",
    duracion: "3:29",
    fechaDeCreacion: formatDateDate(),
    urlPortada:
      "https://cdns-images.dzcdn.net/images/cover/7b3c4a65a5e3/500x500.jpg",
    urlAudio:
      "https://cdns-preview-4.dzcdn.net/stream/c-4e8f2d2a5b43a88f8e23df0b5c92a8ec-8.mp3",
  },
  {
    id: generateId(),
    titulo: "Perfect",
    artista: "Ed Sheeran",
    genero: "Pop",
    anioLanzamiento: 2017,
    categoria: "Internacional",
    duracion: "4:23",
    fechaDeCreacion: formatDateDate(),
    urlPortada:
      "https://cdns-images.dzcdn.net/images/cover/8e0b0e8b92f3/500x500.jpg",
    urlAudio:
      "https://cdns-preview-9.dzcdn.net/stream/c-9a0b9a8e7b3c9b83c3b2c4e1a2b8c5d9-4.mp3",
  },
  {
    id: generateId(),
    titulo: "Shivers",
    artista: "Ed Sheeran",
    genero: "Pop",
    anioLanzamiento: 2021,
    categoria: "Internacional",
    duracion: "3:27",
    fechaDeCreacion: formatDateDate(),
    urlPortada:
      "https://cdns-images.dzcdn.net/images/cover/3e8c1f7a9c6b/500x500.jpg",
    urlAudio:
      "https://cdns-preview-2.dzcdn.net/stream/c-2f9a6c1e8b4a9d7f5a3e9c8c7d2a5e3f-7.mp3",
  },
  {
    id: generateId(),
    titulo: "Don't Start Now",
    artista: "Dua Lipa",
    genero: "Pop",
    anioLanzamiento: 2019,
    categoria: "Internacional",
    duracion: "3:03",
    fechaDeCreacion: formatDateDate(),
    urlPortada:
      "https://cdns-images.dzcdn.net/images/cover/9d8c2f6a7c5a/500x500.jpg",
    urlAudio:
      "https://cdns-preview-1.dzcdn.net/stream/c-1b3f6e8c7a2d9f4c6e8a7b2d5c1a9f3d-6.mp3",
  },
  {
    id: generateId(),
    titulo: "Dance Monkey",
    artista: "Tones and I",
    genero: "Pop",
    anioLanzamiento: 2019,
    categoria: "Internacional",
    duracion: "3:29",
    fechaDeCreacion: formatDateDate(),
    urlPortada:
      "https://cdns-images.dzcdn.net/images/cover/7d2c3f4a6e9a/500x500.jpg",
    urlAudio:
      "https://cdns-preview-0.dzcdn.net/stream/c-0c7d2a6f5b8e4c3a9f6b1c2d5f7a3b9d-7.mp3",
  },
];

export default cancionesIniciales;
