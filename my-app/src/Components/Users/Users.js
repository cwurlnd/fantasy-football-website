import React, { useEffect, useState } from "react";
import { getAllUsers, getUserByID } from "../../Common/Services/Service";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [id, setID] = useState("p2G7Aj8XeE");
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [favoriteTeam, setFavoriteTeam] = useState();

    // Get all of the leagues for the dropdown
    useEffect(() => {
        getAllUsers().then((users) => {
            setUsers(users);
        });
    }, []);

    useEffect(() => {
        getUserByID(id).then((user) => {
            setFirstName(user.get("firstName"));
            setLastName(user.get("lastName"));
            setFavoriteTeam(user.get("favoriteTeam"));
        });
    }, [id]);

    // Handle the changes and selections in the dropdown
    const handleChange = (e) => {
        setID(e.target.value);
    };

    return (
      <section id="temp">
        <h1>Current Users of Wade Wurl Fantasy</h1>
        <p>Select a user below:</p>


        {/* Create dropdown of all the leagues */}
        <div>
        <select class="form-select" onChange={handleChange}>
        {users.map((user) => (
                <option value={user.id}>{user.get("firstName")} {user.get("lastName")}</option>
        ))}
        </select>
        </div>

        <div>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Favorite Football Team: {favoriteTeam}</p>
        </div>
        
      </section>
    );
}