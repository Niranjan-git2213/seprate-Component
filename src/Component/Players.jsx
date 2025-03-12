const players = [
    { id: 101, name: "Virat Kohli", country: "India", role: "Batsman", runs: 12000 },
    { id: 102, name: "Rohit Shrma", country: "India", role: "Batsman", runs: 25500 },
    { id: 103, name: "Pat Cummins", country: "Australia", role: "Bowler", wicket: 500 },
  ];
  
  function Players() {
    return (
        <>
        {players.map((player) => (
            <div key={player.id}>
                <h2>Player: {player.name}</h2>
                <p>Country: {player.country}</p>
                <p>Role: {player.role}</p>
                <p>Total Runs: {player.runs}</p>
                <p>Total Wicket: {player.wicket}</p>

                <hr />
            </div>
        ))}
        </>
    );
  }
  
  export default Players;