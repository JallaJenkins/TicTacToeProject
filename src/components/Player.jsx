import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditButtonClicked() {
    setIsEditing(true);
  }

  return (
    <li>
      <span class="player">
        {!isEditing
          ? <span className="player-name">{name}</span>
          : <span><input></input></span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditButtonClicked}>Edit</button>
    </li>
  );
}