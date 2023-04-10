import React from "react";
import Meaning from "./Meaning/Meaning";
import Phonetic from "./Phonetic/Phonetic";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2 className="text-capitalize mb-4">{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning
                meaning={meaning}
                updateInputAndSearch={props.updateInputAndSearch}
              />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}