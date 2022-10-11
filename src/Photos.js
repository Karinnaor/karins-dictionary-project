import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <h3> images </h3>
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img className="img-fluid" src={photo.src.landscape} alt="" />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
