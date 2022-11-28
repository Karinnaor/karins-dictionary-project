import React from "react";

export default function Search(props) {
  return (
    <section>
      <h1>What word do you want to look up?</h1>
      <form onSubmit={props.handleSubmit}>
        <input
          type="search"
          onChange={props.handleKeywordChange}
          defaultValue={props.defaultKeyword}
          value={props.keyword}
        />
      </form>
      <div className="hint">
        <strong>suggested words:</strong> creative, developer, surfing, key,
        etc.
      </div>
    </section>
  );
}
