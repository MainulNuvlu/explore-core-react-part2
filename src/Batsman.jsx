import { useState } from "react"

export default function Batasman() {

    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);

    const handlesingles = () => {
        const updatesRuns = runs + 1;
        setRuns(updatesRuns);
    }

    const handleFour = () => {
        const updatesRuns = runs + 4;
        setRuns(updatesRuns);
    }


    const handleSix = () => {
        const updatesRuns = runs + 6;
        setRuns(updatesRuns);

        const updatedSixes = sixes + 1;
        setSixes(updatedSixes);
    }

    return (
        <div>
            <h3>Player: Bangladeshi Batsman</h3>
            {
                runs > 50 && <p>Yoy score: 50</p>
            }
            <p>Six: {sixes}</p>
            <h1>Score: {runs}</h1>
            <button onClick={handlesingles}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}