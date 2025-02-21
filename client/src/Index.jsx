import { Link } from "react-router-dom";

export default function Index() {
    const skillingGuides = [
        ["/gotr-and-stars", "Guardians of the Rift and mining stars"],
        ["/the-mess", "The Mess"]
    ]

    return (
    <>
      <div>
        <section>
          <h1>Lilgobslayerguides.NET</h1>

          <p>Practical Old School Runescape Ultimate Ironperson guides from Sir Lil Gob The Slayer</p>
        </section>

        <div className="d-flex justify-content-center">
          <section style={{width: "300px"}}>
          <h2>
            Skilling Guides
          </h2>
          <div className="list-group">
            {skillingGuides.map((entry, i) =>
                <Link className="list-group-item list-group-item-action"
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
