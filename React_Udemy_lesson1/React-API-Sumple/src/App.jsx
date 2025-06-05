import { useState } from "react";
import axios from "axios";
import "./App.css";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Person } from "@mui/icons-material";

function App() {
  const isError = (error) => {
    return error instanceof Error;
  };

  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      if (isError(e)) {
        setError(e);
      }
    }
  };

  const deleteAllUsers = () => {
    setUsers([]);
  };

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <List>
        {users.map((user) => (
          <ListItem key={user.id}>
            <ListItemIcon>
              <Person color="primary" sx={{ fontSize: 30 }} />
            </ListItemIcon>
            <ListItemText>{user.name}</ListItemText>
          </ListItem>
        ))}
      </List>
      <Button variant="contained" onClick={fetchUsers}>
        Click!
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={deleteAllUsers}
        style={{ marginLeft: "10px" }}
      >
        Delete All Users
      </Button>
    </div>
  );
}

export default App;