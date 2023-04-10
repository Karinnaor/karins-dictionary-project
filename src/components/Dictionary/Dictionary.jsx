import React, { useState } from "react";
import Results from "./Results/Results";
import Photos from "./Results/Photos/Photos";
import "./Dictionary.css";
import { fetchDefinition, fetchImages } from "./apiUtils";
import Search from "./Search";

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
    fetchDefinition(searchTerm).then(handleDictionaryResponse);

    fetchImages(searchTerm).then(handlePexelsResponse);
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
        <Search
          handleSubmit={handleSubmit}
          handleKeywordChange={handleKeywordChange}
          defaultKeyword={props.defaultKeyword}
          keyword={keyword}
        />
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
