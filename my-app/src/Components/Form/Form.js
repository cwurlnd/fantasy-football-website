export default function Form({ onChangeLeague, onChangeSize, onChangeScoring, onClick }) {
    return (
        <form autoComplete="off">
        <div>
        <div className="form-group">
          <label>League Name</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="name-input"
            size="30" 
            maxLength="50"
            onChange={onChangeLeague}
            name="email"
            required
          />
        </div>{" "}
        <div className="form-group">
          <label>League Size</label>
          <br />
          <select class="form-select"name="size" onChange={onChangeSize}>
            <option value="8">8 Teams</option>
            <option value="10">10 Teams</option>
            <option value="12">12 Teams</option>
          </select>
        </div>
        <div className="form-group">
          <label>League Scoring</label>
          <br />
          <select class="form-select" name="scoring" onChange={onChangeScoring}>
            <option value="Standard">Standard</option>
            <option value="PPR">PPR</option>
            <option value="Half PPR">Half PPR</option>
        </select>
        </div>
        <div className="form-group">
          <br></br>
          <button type="submit" className="btn btn-primary" onClick={onClick}>
            Submit
          </button>
        </div>
    </div>
  </form>



    //     <div>
    //         <form>
    //             <p>
    //                 League Name: <input type="text" name="name" size="30" maxLength="50" onChange={onChangeLeague} />
    //             </p>
    //             <p>
    //             League Size:
    //                 <select name="size" onChange={onChangeSize}>
    //                     <option value="8">8 Teams</option>
    //                     <option value="10">10 Teams</option>
    //                     <option value="12">12 Teams</option>
    //                 </select>
    //             </p>
    //             <p>
    //             League Scoring:
                    // <select name="scoring" onChange={onChangeScoring}>
                    //     <option value="Standard">Standard</option>
                    //     <option value="PPR">PPR</option>
                    //     <option value="Half PPR">Half PPR</option>
                    // </select>
    //             </p>
    //         </form>
    //      <button onClick={onClick}>Submit</button>
    //  </div>
    );
}