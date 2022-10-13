import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(searchTerm) {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001d6539663b196434eaa66983c341f78b5";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${searchTerm}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(event.target[0].value);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search(keyword);
  }

  function updateInputAndSearch(newKeyword) {
    setKeyword(newKeyword);
    search(newKeyword);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
              value={keyword}
            />
          </form>
          <div className="hint">
            <strong>suggested words:</strong> creative, developer, surfing, key,
            etc.
          </div>
        </section>
        <Results
          results={results}
          updateInputAndSearch={updateInputAndSearch}
        />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
