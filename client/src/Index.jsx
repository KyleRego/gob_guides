import { Link } from "react-router-dom";

export default function Index() {
    return (
    <>
      <div>
        <section>
          <h1>Lilgobslayerguides.NET</h1>

          <p>Practical Old School Runescape Ultimate Ironperson blog and guides from one of the most bankless, Knight Lil Gob The Slayer</p>
        </section>

        <div className="d-flex justify-content-around">
          <section>
            <h2>
              Blog
            </h2>
            <ol className="list-group">
              <li ><Link to="/2025/Feb/12">Initial post</Link></li>
            </ol>
          </section>

          <section>
            <h2>
              Guides
            </h2>
            <ol>
              <li><Link to="/the-mess">The Mess</Link></li>
              <li><Link to="/activity-pairings">Activity Pairings</Link></li>
            </ol>

          </section>
        </div>
        
      </div>

    </>
  )
}
