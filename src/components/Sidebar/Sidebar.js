import Friend from "./Friend";

function Sidebar({
  data,
  friends,
  selectedFriend,
  setSelectedFriend,
  setIsOpen,
}) {
  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            selectedFriend={selectedFriend}
            setSelectedFriend={setSelectedFriend}
            setIsOpen={setIsOpen}
            key={friend.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
