import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { ClubShell } from '@/components/club-shell'
import { players } from '@/lib/club-data'

export default function SquadPage(){ return <ClubShell><main className="page-wrap"><div className="page-title"><span className="eyebrow">El equipo · 2026 / 27</span><h1>La plantilla.</h1><p>Conoce a los jugadores que defienden nuestros colores. Talento, carácter y una misma camiseta.</p></div><div className="players-grid">{players.map(player=><Link className={player.photo ? 'player-card' : 'player-card no-photo'} data-number={player.number} href={`/plantilla/${player.number}`} key={player.number}>{player.photo ? <img className="player-photo" src={player.photo} alt={`Foto de ${player.name}`} /> : null}<div><span className="player-number">{String(player.number).padStart(2,'0')}</span><h3>{player.name}</h3><p>{player.position}</p></div><span className="player-link">Ficha completa <ArrowUpRight /></span></Link>)}</div></main></ClubShell> }
