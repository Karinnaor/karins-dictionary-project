import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          function onSynonymClick() {
            props.updateInputAndSearch(synonym);
          }

          return (
            <li key={index}>
              {" "}
              <button className="btn btn-light mb-2" onClick={onSynonymClick}>
                {synonym}{" "}
              </button>
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
