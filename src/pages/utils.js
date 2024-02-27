import axios from "axios";

export const getData = async (url, callbackFc) => {
  const response = await axios.get(url)
  callbackFc(response.data)
}

export const posterUrl = "https://image.tmdb.org/t/p/w300"
export const detailUrl = "https://image.tmdb.org/t/p/w500"
export const noPicture = "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg"