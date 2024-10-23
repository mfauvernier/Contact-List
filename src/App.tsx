import { useState } from "react";
import "./App.css";
import Add from "./components/Add";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { nanoid } from "nanoid";
import toast from "react-hot-toast";

type User = {
  username: string;
  email: string;
  id: string;
  avatar: string;
};

function App() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);

  const addNotify = () => toast("Contact ajouté !");
  const deleteNotify = () => toast("Contact supprimé !");

  const handleAdd = () => {
    if (username && email) {
      const avatar = `https://api.multiavatar.com/${username}.svg`;
      const newUser = { username, email, id: nanoid(), avatar };
      setUsers((prevUsers) => [...prevUsers, newUser]);
      setUsername("");
      setEmail("");
      addNotify();
    }
  };

  const deleteUser = (id: string) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    deleteNotify();
  };

  return (
    <>
      <Header />
      <Add
        username={username}
        setUsername={setUsername}
        email={email}
        setEmail={setEmail}
        handleAdd={handleAdd}
        users={users}
        deleteUser={deleteUser}
      />
      <Footer />
    </>
  );
}

export default App;
