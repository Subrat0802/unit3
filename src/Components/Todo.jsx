import React from "react";

export default function Todo() {
  const [text, setText] = React.useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  return (
    <div>
      <input placeholder="Add Todo" value={text} onChange={handleChange} />
      <button>Add</button>
    </div>
  );
}
