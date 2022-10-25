export default function Form({ onChangeLeague, onChangeSize, onChangeScoring, onClick }) {
    return (
        <div>
            <form>
                <p>
                    League Name: <input type="text" name="name" size="30" maxLength="50" onChange={onChangeLeague} />
                </p>
                <p>
                League Size:
                    <select name="size" onChange={onChangeSize}>
                        <option value="8">8 Teams</option>
                        <option value="10">10 Teams</option>
                        <option value="12">12 Teams</option>
                    </select>
                </p>
                <p>
                League Scoring:
                    <select name="scoring" onChange={onChangeScoring}>
                        <option value="Standard">Standard</option>
                        <option value="PPR">PPR</option>
                        <option value="Half PPR">Half PPR</option>
                    </select>
                </p>
            </form>
            <button onClick={onClick}>Submit</button>
        </div>
    );
}