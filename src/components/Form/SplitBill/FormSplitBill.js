import { useState } from "react";
import Button from "../../ui/Button";

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [totalBill, setTotalBill] = useState("");
  const [yourPay, setYourPay] = useState("");
  const friendPay = totalBill - yourPay;
  const [whoIsPaying, setWhoIsPaying] = useState("you");

  function handleSubmit(e) {
    e.preventDefault();

    onSplitBill(whoIsPaying === "you" ? friendPay : -yourPay);
  }

  return (
    <form className="form-split-bill">
      <h2>Split bill with {selectedFriend?.name} </h2>

      <label>💰 Total bill</label>
      <input
        type="text"
        value={totalBill}
        onChange={(e) => setTotalBill(e.target.value)}
      />

      <label>🧍‍♂️ Your pay </label>
      <input
        type="text"
        value={yourPay}
        onChange={(e) => setYourPay(e.target.value)}
      />

      <label>👭 Friend bill</label>
      <input type="text" disabled value={friendPay} />

      <label>🤑 Who is paying</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="you">You</option>
        <option value="friend">{selectedFriend?.name}</option>
      </select>

      <Button onClick={handleSubmit}>Split bill</Button>
    </form>
  );
}

export default FormSplitBill;
