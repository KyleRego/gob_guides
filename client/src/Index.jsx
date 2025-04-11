import { Link } from "react-router-dom";

export default function Index() {
    const skillingGuides = [
        ["/gotr-and-stars", "Guardians of the Rift"],
        ["/stars", "Mining stars"],
        ["/the-mess", "The Mess"],
        ["frost-crabs", "Frost Crabs"]
    ]

    return (
    <>
      <div>
        <section>
          <h1 className="fs-1">Lilgobslayerguides.NET</h1>

          <p>Practical Old School Runescape Ultimate Iron guides - Lil Gob Slayer</p>
        </section>

        <div className="d-flex justify-content-center">
          <section style={{width: "300px"}}>
          <h2 className="fs-2 mb-2">
            Skilling
          </h2>
          <div className="list-group">
            {skillingGuides.map((entry, i) =>
                <Link className="list-group-item list-group-item-secondary list-group-item-action"
                        to={entry[0]} key={i}
                        title={entry[1]}>
                    {entry[1]}
                </Link>)
            }

          </div>

          </section>
        </div>
      </div>

    </>
  )
}
