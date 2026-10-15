import { ClubShell } from '@/components/club-shell'
import { crestUrl, table } from '@/lib/club-data'
export default function LeaguePage() {
  return <ClubShell><main className="page-wrap">
    <div className="page-title">
      <span className="eyebrow">Competición · Liga Fútbol Sala</span>
      <h1>Clasificación.</h1>
      <p>La carrera por el título se decide en cada jornada. Sigue la posición de Grizzlies y sus rivales.</p>
    </div>
    <div className="card data-table league-table">
      <table className="mini-table" aria-label="Clasificación completa de la liga">
        <thead>
          <tr>
            <th scope="col"># Equipo</th>
            <th scope="col">PJ</th>
            <th scope="col">PG</th>
            <th scope="col">PE</th>
            <th scope="col">PP</th>
            <th scope="col">GF</th>
            <th scope="col">GC</th>
            <th scope="col">DG</th>
            <th scope="col">PTS</th>
          </tr>
        </thead>
        <tbody>
          {table.map((team, index) => {
            const isGrizzlies = team.team.toLowerCase().includes('grizzlies')
            const goalDifference = team.goalDifference > 0 ? `+${team.goalDifference}` : team.goalDifference

            return <tr key={team.team}>
              <td>
                <span className="rank">{String(index + 1).padStart(2, '0')}</span>
                <span className="team-cell">
                  {isGrizzlies ? <img className="team-crest" src={crestUrl} alt="Escudo de Mijas Grizzlies" /> : null}
                  {team.team}
                </span>
              </td>
              <td>{team.played}</td>
              <td>{team.won}</td>
              <td>{team.drawn}</td>
              <td>{team.lost}</td>
              <td>{team.goalsFor}</td>
              <td>{team.goalsAgainst}</td>
              <td>{goalDifference}</td>
              <td><strong>{team.points}</strong></td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  </main></ClubShell>
}
