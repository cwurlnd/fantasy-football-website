export default function ChatForm({ onChange, onClick }) {
    return (
        <form autoComplete="off">
        <div>
        <div className="form-group">
          <label>Chat</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="chatInput"
            size="30" 
            maxLength="50"
            onChange={onChange}
            name="email"
            required
          />
        </div>{" "}
        <div className="form-group">
          <br></br>
          <button type="submit" className="btn btn-primary" onClick={onClick}>
            Submit
          </button>
        </div>
    </div>
  </form>
  );
}