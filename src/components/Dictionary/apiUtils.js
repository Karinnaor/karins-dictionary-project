import axios from "axios";

export function fetchDefinition(searchTerm) {
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`;
  return axios.get(apiUrl);
}

export function fetchImages(searchTerm) {
  let pexelsApiKey = "563492ad6f91700001000001d6539663b196434eaa66983c341f78b5";
  let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${searchTerm}&per_page=9`;
  let headers = { Authorization: `Bearer ${pexelsApiKey}` };
  return axios.get(pexelsApiUrl, { headers: headers });
}
