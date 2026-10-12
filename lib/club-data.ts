export const crestUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Escudo%20GRIZZLIES-AtckxhFlCU2cd0McGz8Fpiv5LZBGQf.jpeg'
export const clubTeamName = 'GRIZZLIES FC 26/27'
export const competitionName = 'LLFS FUENGIROLA/INFINITY'
export const competitionSourceUrl = 'https://www.competize.com/es/team/view/2869908-grizzlies-fc-2627#standings'

export type Player = { number: number; name: string; position: string; photo: string | null; age: number; nationality: string; height: string; foot: string; appearances: number; goals: number; assists: number; bio: string }
export type Standing = { team: string; played: number; won: number; drawn: number; lost: number; goalsFor: number; goalsAgainst: number; goalDifference: number; points: number }
export type Fixture = { date: string; time: string; opponent: string; venue: string; home: boolean; homeScore?: number; awayScore?: number; status?: string }

export const players: Player[] = [
  { number: 1, name: 'Gabriel Padrino', position: 'Portero', photo: '/jugadores/GABRIEL-PADRINO.png', age: 22, nationality: 'España', height: '1,86 m', foot: 'Derecho', appearances: 4, goals: 0, assists: 0, bio: 'Nuestro muro. Un seguro bajo palos.' },
  { number: 2, name: 'Andrés Fernandez', position: 'Cierre', photo: '/jugadores/ANDRES-FERNANDEZ.png', age: 22, nationality: 'España', height: '1,82 m', foot: 'Derecho', appearances: 4, goals: 2, assists: 0, bio: 'Líder de la zaga, ordena al equipo y domina el juego aéreo.' },
  { number: 4, name: 'Pablo Escobar', position: 'Cierre', photo: '/jugadores/PABLO-ESCOBAR.png', age: 22, nationality: 'España', height: '1,83 m', foot: 'Derecho', appearances: 3, goals: 0, assists: 0, bio: 'Un muro en defensa. Especialista en el juego de contacto.' },
  { number: 6, name: 'Antonio Parras', position: 'Ala', photo: '/jugadores/ANTONIO-PARRAS.png', age: 22, nationality: 'España', height: '1,78 m', foot: 'Derecho', appearances: 4, goals:2, assists: 0, bio: 'Nuestro capitán, puro corazón' },
  { number: 7, name: 'Alejandro Gómez', position: 'Cierre', photo: '/jugadores/ALEJANDRO-GOMEZ.png', age: 22, nationality: 'España', height: '1,81 m', foot: 'Derecho', appearances: 2, goals: 0, assists: 0, bio: 'Un tío duro de roer, una pesadilla para el pivot contrario.' },
  { number: 9, name: 'Manuel Higuera', position: 'Ala/Pivot', photo: null, age: 22, nationality: 'España', height: '1,78 m', foot: 'Derecho', appearances: 4, goals: 2, assists: 0, bio: 'Pura sangre, verticalidad y desborde.' },
  { number: 10, name: 'Adrián Carrasco', position: 'Pivot', photo: '/jugadores/ADRIAN-CARRASCO.png', age: 22, nationality: 'España', height: '1,75 m', foot: 'Derecho', appearances: 4, goals: 2, assists: 2, bio: 'Juventud y descaro para romper partidos desde el banquillo.' },
  { number: 15, name: 'Daniel Ramirez', position: 'Ala/Pivot', photo: null, age: 22, nationality: 'España', height: '1,79 m', foot: 'Derecho', appearances: 2, goals: 3, assists: 2, bio: 'Lo mismo te marca, que asiste o defiende, un todotereno.' },
  { number: 16, name: 'Beltrán García', position: 'Mister', photo: '/jugadores/BELTRAN-GARCIA.png', age: 22, nationality: 'España', height: '1,75 m', foot: 'Derecho', appearances: 0, goals: 0, assists: 0, bio: 'La cabeza pensante del equipo, nuestro mister.' },
  { number: 17, name: 'Salvador Prieto', position: 'Ala', photo: '/jugadores/SALVADOR-PRIETO.png', age: 22, nationality: 'España', height: '1,75 m', foot: 'Derecho', appearances: 4, goals: 2, assists: 0, bio: 'Coraje y corazón por banda, no da un balon por perdido.' },
  { number: 19, name: 'Vladyslav Topolya', position: 'Ala', photo: '/jugadores/VLADYSLAV.png', age: 22, nationality: 'España', height: '1,75 m', foot: 'Izquierdo', appearances: 4, goals: 1, assists: 0, bio: 'Incansable, corre por todos. Desborde envidiable.' },
  { number: 21, name: 'Hugo Cuesta', position: 'Pivot', photo: '/jugadores/HUGO-CUESTA.png', age: 22, nationality: 'España', height: '1,75 m', foot: 'Izquierdo', appearances: 4, goals: 0, assists: 0, bio: 'Esfuerzo innegociable. Nuestro presi.' },
  { number: 47, name: 'Jairo Pérez', position: 'Ala', photo: null, age: 22, nationality: 'España', height: '1,85 m', foot: 'Derecho', appearances: 3, goals: 0, assists: 0, bio: 'El compromiso en persona, un luchador nato.' },
  

]

export const table: Standing[] = [
  { team: 'INTER COSTASUR 26/27', played: 2, won: 2, drawn: 0, lost: 0, goalsFor: 11, goalsAgainst: 4, goalDifference: 7, points: 6 },
  { team: 'EL BOQUETILLO 26/27', played: 2, won: 2, drawn: 0, lost: 0, goalsFor: 7, goalsAgainst: 1, goalDifference: 6, points: 6 },
  { team: 'EL BOLICHE 26/27', played: 2, won: 2, drawn: 0, lost: 0, goalsFor: 9, goalsAgainst: 5, goalDifference: 4, points: 6 },
  { team: 'ALBIRROJA 26/27', played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 6, goalsAgainst: 5, goalDifference: 1, points: 4 },
  { team: 'SUPABROS FS 26/27', played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 8, goalsAgainst: 1, goalDifference: 7, points: 3 },
  { team: 'UVEME LOS BOLICHES 26/27', played: 2, won: 1, drawn: 0, lost: 1, goalsFor: 5, goalsAgainst: 3, goalDifference: 2, points: 3 },
  { team: 'NEW BOYS FC 26/27', played: 2, won: 1, drawn: 0, lost: 1, goalsFor: 6, goalsAgainst: 5, goalDifference: 1, points: 3 },
  { team: 'ATLEET 26/27', played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 5, goalsAgainst: 4, goalDifference: 1, points: 3 },
  { team: 'NOSOTROS C.F', played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 3, goalsAgainst: 2, goalDifference: 1, points: 3 },
  { team: 'ESPETOS FC 26/27', played: 2, won: 1, drawn: 0, lost: 1, goalsFor: 7, goalsAgainst: 8, goalDifference: -1, points: 3 },
  { team: 'MAITEA 26/27', played: 2, won: 1, drawn: 0, lost: 1, goalsFor: 6, goalsAgainst: 8, goalDifference: -2, points: 3 },
  { team: 'ARSENAL DE BOTELLINES 26/27', played: 2, won: 0, drawn: 1, lost: 1, goalsFor: 6, goalsAgainst: 7, goalDifference: -1, points: 1 },
  { team: 'DESCANSO 26/27', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
  { team: 'LOS MILNOV FC 26/27', played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 2, goalsAgainst: 3, goalDifference: -1, points: 0 },
  { team: 'C.D COSTASOLEÑO 26/27', played: 2, won: 0, drawn: 0, lost: 2, goalsFor: 5, goalsAgainst: 7, goalDifference: -2, points: 0 },
  { team: clubTeamName, played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 2, goalsAgainst: 4, goalDifference: -2, points: 0 },
  { team: 'LVK BAYER 26/27', played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 1, goalsAgainst: 3, goalDifference: -2, points: 0 },
  { team: 'JUNGLE FC 26/27', played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 1, goalsAgainst: 5, goalDifference: -4, points: 0 },
  { team: 'LOLA´S BAR FUENGIROLA CH8 26/27', played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 0, goalsAgainst: 4, goalDifference: -4, points: 0 },
  { team: 'PM SUPERPANTERAS 26/27', played: 2, won: 0, drawn: 0, lost: 2, goalsFor: 1, goalsAgainst: 12, goalDifference: -11, points: 0 },
]

export const fixtures: Fixture[] = [
  { date: 'DOM 06 SEP', time: '10:00', opponent: 'EL BOLICHE 26/27', venue: 'PABELLON ELOLA - ELOLA SQUA', home: false, homeScore: 4, awayScore: 2, status: 'Finalizado' },
  { date: 'DOM 13 SEP', time: '12:00', opponent: 'LVK BAYER 26/27', venue: 'PABELLON ELOLA - ELOLA GYM', home: true, homeScore: 5, awayScore: 4, status: 'En juego' },
]

export const clubStanding = table.find((team) => team.team === clubTeamName) ?? table[0]

export const topScorers = [...players].sort((a, b) => b.goals - a.goals)
export const topAssists = [...players].sort((a, b) => b.assists - a.assists)
export const topCombined = [...players].sort((a, b) => (b.goals + b.assists) - (a.goals + a.assists))

export function getPlayer(number: string) { return players.find((player) => player.number === Number(number)) }
