import { useState } from "react";
import Button from "../../ui/Button";

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const id = Date.now();

  function handleClick(e) {
    e.preventDefault();

    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);
  }

  return (
    <form className="form-add-friend">
      <label>👭 Friend Name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />

      <label>🎇 Image</label>
      <input value={image} onChange={(e) => setImage(e.target.value)} />

      <Button onClick={handleClick}>Add Friend</Button>
    </form>
  );
}

export default FormAddFriend;
