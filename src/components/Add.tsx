import { type Dispatch, type SetStateAction } from "react";
import "./Add.css";
import { FaRegTrashCan } from "react-icons/fa6";
import { Toaster } from "react-hot-toast";

type User = {
  username: string;
  email: string;
  id: string;
  avatar: string;
};

function Add({
  username,
  setUsername,
  email,
  setEmail,
  handleAdd,
  users,
  deleteUser,
}: {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  handleAdd: () => void;
  users: User[];
  deleteUser: (id: string) => void;
}) {
  return (
    <div className="container">
      <div className="add">
        <h1 className="add-title">Ajouter un contact</h1>
        <input
          type="text"
          placeholder="Entrez votre nom"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Entrez votre adrese mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleAdd}>Envoyer</button>
        <Toaster />
      </div>
      <div className="list">
        {users.length <= 1 ? (
          <p> {users.length} contact</p>
        ) : (
          <p>{users.length} contacts</p>
        )}
        {users.map((user) => (
          <div key={user.id} className="contact">
            <img src={user.avatar} alt="" />
            <div className="user-infos">
              <div className="user">
                <p>{user.username}</p>
                <p>{user.email}</p>
              </div>
              <FaRegTrashCan
                onClick={() => deleteUser(user.id)}
                color="red"
                size={22}
              />
              <Toaster />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Add;
