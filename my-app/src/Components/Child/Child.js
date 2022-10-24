export default function Child({ people }) {
    return (
      <header>
        {people.length > 0 && (
          <ul>
            {people.map((person) => (
              <div>
                <span>
                  <li key={person.id}>{person.get("name")}</li>{" "}
                </span>
              </div>
            ))}
          </ul>
        )}
      </header>
    );
  }
  