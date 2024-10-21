function Friend({ friend, selectedFriend, setSelectedFriend, setIsOpen }) {
  return (
    <li
      onClick={() => {
        setSelectedFriend(friend);
        setIsOpen(false);
      }}
      className={friend.id === selectedFriend?.id ? "selected" : ""}
    >
      <img src={friend.image} alt="frined" />
      <h3>{friend.name}</h3>
      <p
        className={
          friend.balance > 0 ? "green" : friend.balance === 0 ? "" : "red"
        }
      >
        {friend.balance > 0
          ? `${friend.name} owes you $${friend.balance}`
          : friend.balance === 0
          ? `You and ${friend.name} break even`
          : `You owe ${friend.name} $${friend.balance}`}
      </p>
    </li>
  );
}

export default Friend;
