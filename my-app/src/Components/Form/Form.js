export default function Form({ onChange, onClick }) {
    return (
        <div>
            <form>
                <p>
                    League Name: <input type="text" name="name" size="30" maxLength="50" onChange={onChange} />
                </p>
            </form>
            <button onClick={onClick}>Submit</button>
        </div>
    );
}