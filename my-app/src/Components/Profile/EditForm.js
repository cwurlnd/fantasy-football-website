import { getAllTeams } from "../../Common/Services/Service";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function EditForm({ onChangeFirst, onChangeLast, onChangeEmail, onChangeTeam, onClick }) {
    const [teams, setTeams] = useState([]);

    // Get all of the teams for the dropdown
    useEffect(() => {
        getAllTeams().then((teams) => {
            setTeams(teams);
        });
    }, []);

    return (
        <form autoComplete="off">
        <div>
        <div className="form-group">
          <label>First Name</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="name-input"
            size="30" 
            maxLength="50"
            onChange={onChangeFirst}
            name="firstName"
            required
          />
        </div>{" "}
        <div className="form-group">
          <label>Last Name</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="name-input"
            size="30" 
            maxLength="50"
            onChange={onChangeLast}
            name="lastName"
            required
          />
        </div>{" "}
        <div className="form-group">
          <label>Username/Email</label>
          <br />
          <input
            type="email"
            className="form-control"
            id="email-input"
            onChange={onChangeEmail}
            name="email"
            required
          />
        </div>{" "}
        <div className="form-group">
          <label>Favorite Team</label>
          <br />
          <select class="form-select" name="team" onChange={onChangeTeam}>
            {teams.map((team) => (
                    <option value={team.get("name")}>{team.get("name")}</option>
            ))}
        </select>
        </div>
        <div className="form-group">
          <br></br>
          <button type="submit" className="btn btn-primary" style={{
          marginRight: '1rem',
          }} onClick={onClick}>
            Submit
          </button>
          <Link to="/profile">
                <Button variant="danger">Cancel</Button>{' '}
            </Link>
        </div>
    </div>
  </form>
    );
}