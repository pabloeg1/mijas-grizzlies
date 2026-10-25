export const crestUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Escudo%20GRIZZLIES-AtckxhFlCU2cd0McGz8Fpiv5LZBGQf.jpeg'
export const clubTeamName = 'GRIZZLIES FC 26/27'
export const competitionName = 'LLFS FUENGIROLA/INFINITY'
export const competitionSourceUrl = 'https://www.competize.com/es/team/view/2869908-grizzlies-fc-2627#standings'

export type Player = { number: number; name: string; position: string; photo: string | null; age: number; nationality: string; height: string; foot: string; appearances: number; goals: number; assists: number; bio: string }
export type Standing = { team: string; played: number; won: number; drawn: number; lost: number; goalsFor: number; goalsAgainst: number; goalDifference: number; points: number }
export type Fixture = { date: string; time: string; opponent: string; venue: string; home: boolean; homeScore?: number; awayScore?: number; status?: string }

export const players: Player[] = [
  { number: 1, name: 'Gabriel Padrino', position: 'Portero', photo: '/jugadores/GABRIEL-PADRINO.png', age: 22, nationality: 'España', height: '1,89 m', foot: 'Derecho', appearances: 6, goals: 0, assists: 0, bio: 'Nuestro muro. Un seguro bajo palos.' },
  { number: 2, name: 'Andrés Fernandez', position: 'Cierre', photo: '/jugadores/ANDRES-FERNANDEZ.png', age: 21, nationality: 'España', height: '1,82 m', foot: 'Derecho', appearances: 5, goals: 3, assists: 0, bio: 'Líder de la zaga, ordena al equipo y domina el juego aéreo.' },
  { number: 4, name: 'Pablo Escobar', position: 'Cierre', photo: '/jugadores/PABLO-ESCOBAR.png', age: 22, nationality: 'España', height: '1,83 m', foot: 'Derecho', appearances: 5, goals: 1, assists: 0, bio: 'Un muro en defensa. Especialista en el juego de contacto.' },
  { number: 6, name: 'Antonio Parras', position: 'Ala', photo: '/jugadores/ANTONIO-PARRAS.png', age: 22, nationality: 'España', height: '1,72 m', foot: 'Derecho', appearances: 5, goals:2, assists: 0, bio: 'Nuestro capitán, puro corazón' },
  { number: 7, name: 'Alejandro Gómez', position: 'Cierre', photo: '/jugadores/ALEJANDRO-GOMEZ.png', age: 22, nationality: 'España', height: '1,81 m', foot: 'Derecho', appearances: 2, goals: 0, assists: 0, bio: 'Un tío duro de roer, una pesadilla para el pivot contrario.' },
  { number: 9, name: 'Manuel Higuera', position: 'Ala/Pivot', photo:'/jugadores/MANUEL-HIGUERA.png', age: 21, nationality: 'España', height: '1,78 m', foot: 'Derecho', appearances: 5, goals: 3, assists: 0, bio: 'Pura sangre, verticalidad y desborde.' },
  { number: 10, name: 'Adrián Carrasco', position: 'Pivot', photo: '/jugadores/ADRIAN-CARRASCO.png', age: 22, nationality: 'España', height: '1,80 m', foot: 'Derecho', appearances: 6, goals: 7, assists: 6, bio: 'Juventud y descaro para romper partidos desde el banquillo.' },
  { number: 15, name: 'Daniel Ramirez', position: 'Ala/Pivot', photo: '/jugadores/DANIEL-RAMIREZ.png', age: 22, nationality: 'España', height: '1,79 m', foot: 'Derecho', appearances: 3, goals: 5, assists: 2, bio: 'Lo mismo te marca, que asiste o defiende, un todotereno.' },
  { number: 16, name: 'Beltrán García', position: 'Mister', photo: '/jugadores/BELTRAN-GARCIA.png', age: 20, nationality: 'España', height: '1,77 m', foot: 'Derecho', appearances: 0, goals: 0, assists: 0, bio: 'La cabeza pensante del equipo, nuestro mister.' },
  { number: 17, name: 'Salvador Prieto', position: 'Ala', photo: '/jugadores/SALVADOR-PRIETO.png', age: 22, nationality: 'España', height: '1,75 m', foot: 'Derecho', appearances: 6, goals: 3, assists: 0, bio: 'Coraje y corazón por banda, no da un balon por perdido.' },
  { number: 19, name: 'Vladyslav Topolya', position: 'Ala', photo: '/jugadores/VLADYSLAV-TOPOLYA.png', age: 22, nationality: 'España', height: '1,75 m', foot: 'Derecho', appearances: 6, goals: 2, assists: 3, bio: 'Incansable, corre por todos. Desborde envidiable.' },
  { number: 21, name: 'Hugo Cuesta', position: 'Pivot', photo: '/jugadores/HUGO-CUESTA.png', age: 22, nationality: 'España', height: '1,75 m', foot: 'Izquierdo', appearances: 6, goals: 3, assists: 0, bio: 'Esfuerzo innegociable. Nuestro presi.' },
  { number: 47, name: 'Jairo Pérez', position: 'Ala', photo: '/jugadores/JAIRO-PEREZ.png', age: 22, nationality: 'España', height: '1,85 m', foot: 'Derecho', appearances: 4, goals: 0, assists: 0, bio: 'El compromiso en persona, un luchador nato.' },
  { number: 11, name: 'Roberto Méndez', position: 'Ala', photo: '/jugadores/ROBERTO-MENDEZ.png', age: 20, nationality: 'España', height: '1,74 m', foot: 'Derecho', appearances: 1, goals: 2, assists: 0, bio: 'Nuestra última incorporación, la definición de polivalencia.' }


]

export const table: Standing[] = [
  { team: 'INTER COSTASUR 26/27', played: 6, won: 5, drawn: 0, lost: 1, goalsFor: 25, goalsAgainst: 12, goalDifference: 13, points: 15 },
  { team: 'SUPABROS FS 26/27', played: 5, won: 4, drawn: 1, lost: 0, goalsFor: 26, goalsAgainst: 10, goalDifference: 16, points: 13 },
  { team: 'ARSENAL DE BOTELLINES 26/27', played: 6, won: 4, drawn: 1, lost: 1, goalsFor: 23, goalsAgainst: 11, goalDifference: 12, points: 13 },
  { team: 'ALBIRROJA 26/27', played: 7, won: 4, drawn: 1, lost: 2, goalsFor: 23, goalsAgainst: 27, goalDifference: -4, points: 13 },
  { team: 'ATLEET 26/27', played: 4, won: 4, drawn: 0, lost: 0, goalsFor: 17, goalsAgainst: 9, goalDifference: 8, points: 12 },
  { team: 'MAITEA 26/27', played: 5, won: 3, drawn: 0, lost: 2, goalsFor: 24, goalsAgainst: 16, goalDifference: 8, points: 9 },
  { team: 'EL BOLICHE 26/27', played: 5, won: 3, drawn: 0, lost: 2, goalsFor: 16, goalsAgainst: 11, goalDifference: 5, points: 9 },
  { team: 'UVEME LOS BOLICHES 26/27', played: 6, won: 3, drawn: 0, lost: 3, goalsFor: 22, goalsAgainst: 18, goalDifference: 4, points: 9 },
  { team: clubTeamName, played: 5, won: 3, drawn: 0, lost: 2, goalsFor: 18, goalsAgainst: 16, goalDifference: 2, points: 9 },
  { team: 'NEW BOYS FC 26/27', played: 6, won: 3, drawn: 0, lost: 3, goalsFor: 19, goalsAgainst: 18, goalDifference: 1, points: 9 },
  { team: 'ESPETOS FC 26/27', played: 5, won: 2, drawn: 1, lost: 2, goalsFor: 15, goalsAgainst: 16, goalDifference: -1, points: 7 },
  { team: 'LOLA´S BAR FUENGIROLA CH8 26/27', played: 6, won: 2, drawn: 1, lost: 3, goalsFor: 10, goalsAgainst: 11, goalDifference: -1, points: 7 },
  { team: 'EL BOQUETILLO 26/27', played: 4, won: 2, drawn: 0, lost: 2, goalsFor: 12, goalsAgainst: 9, goalDifference: 4, points: 6 },
  { team: 'LVK BAYER 26/27', played: 7, won: 2, drawn: 0, lost: 5, goalsFor: 22, goalsAgainst: 28, goalDifference: -6, points: 6 },
  { team: 'NOSOTROS C.F', played: 4, won: 1, drawn: 1, lost: 2, goalsFor: 9, goalsAgainst: 17, goalDifference: -7, points: 4 },
  { team: 'LOS MILNOV FC 26/27', played: 5, won: 1, drawn: 0, lost: 4, goalsFor: 10, goalsAgainst: 17, goalDifference: -7, points: 3 }, 
  { team: 'C.D COSTASOLEÑO 26/27', played: 6, won: 1, drawn: 0, lost: 5, goalsFor: 16, goalsAgainst: 24, goalDifference: -8, points: 3 },
  { team: 'PM SUPERPANTERAS 26/27', played: 6, won: 1, drawn: 0, lost: 5, goalsFor: 4, goalsAgainst: 29, goalDifference: -25, points: 3 },
  { team: 'DESCANSO 26/27', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
  { team: 'JUNGLE FC 26/27', played: 4, won: 0, drawn: 0, lost: 4, goalsFor: 8, goalsAgainst: 20, goalDifference: -12, points: 0 },
]

export const fixtures: Fixture[] = [
  { date: 'DOM 18 OCT', time: '13:00', opponent: 'SUPABROS FS 26/27', venue: 'PABELLON ELOLA - ELOLA SQUA', home: true, homeScore: 0, awayScore: 0, status: 'Por Jugar' },
  { date: 'DOM 25 OCT', time: '12:00', opponent: 'EL BOQUETILLO 26/27', venue: 'PABELLON ELOLA - ELOLA GYM', home: false, homeScore: 0, awayScore: 0, status: 'Por Jugar' },
  { date: 'DOM 1 NOV', time: '12:00', opponent: 'LOS MILNOV FC 26/27', venue: 'PABELLON ELOLA - ELOLA GYM', home: false, homeScore: 0, awayScore: 0, status: 'Por Jugar' },
]

export const clubStanding = table.find((team) => team.team === clubTeamName) ?? table[0]

export const topScorers = [...players].sort((a, b) => b.goals - a.goals)
export const topAssists = [...players].sort((a, b) => b.assists - a.assists)
export const topCombined = [...players].sort((a, b) => (b.goals + b.assists) - (a.goals + a.assists))

export function getPlayer(number: string) { return players.find((player) => player.number === Number(number)) }
