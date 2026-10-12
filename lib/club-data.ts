export const crestUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Escudo%20GRIZZLIES-AtckxhFlCU2cd0McGz8Fpiv5LZBGQf.jpeg'

export type Player = { number: number; name: string; position: string; photo: string | null; age: number; nationality: string; height: string; foot: string; appearances: number; goals: number; assists: number; bio: string }

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

export const table = ['INTER COSTASUR 26/27', 'ARSENAL DE BOTELLINES 26/27', 'ALBIRROJA 26/27', 'SUPABROS FS 26/27', 'MAITEA 26/27', 'UVEME LOS BOLICHES 26/27', 'EL BOLICHE 26/27', 'GRIZZLIES FC 26/27', 'ATLEET 26/27', 'EL BOQUETILLO 26/27', 'NEW BOYS FC 26/27', 'LVK BAYER 26/27', 'ESPETOS FC 26/27', 'LOLA´S BAR FUENGIROLA CH8 26/27', 'C.D COSTASOLEÑO 26/27', 'NOSOTROS C.F', 'DESCANSO 26/27', 'LOS MILNOV FC 26/27', 'JUNGLE FC 26/27', 'PM SUPERPANTERAS 26/27'].map((team, index) => ({ team, played: 18, won: 14 - Math.floor(index / 5), drawn: index % 4 === 0 ? 2 : 1, lost: 18 - (14 - Math.floor(index / 5)) - (index % 4 === 0 ? 2 : 1), points: 44 - index * 2 }))

export const fixtures = [
  { date: 'DOM 18 OCT', time: '00:00', opponent: 'SUPABROS FS 26/27', venue: 'Campo Elola', home: true },
  { date: 'DOM 25 OCT', time: '00:00', opponent: 'RIVAL POR DEFINIR', venue: 'Campo Elola', home: false },
  { date: 'DOM 01 NOV', time: '00:00', opponent: 'RIVAL POR DEFINIR', venue: 'Campo Elola', home: true },
]

export const topScorers = [...players].sort((a, b) => b.goals - a.goals)
export const topAssists = [...players].sort((a, b) => b.assists - a.assists)
export const topCombined = [...players].sort((a, b) => (b.goals + b.assists) - (a.goals + a.assists))

export function getPlayer(number: string) { return players.find((player) => player.number === Number(number)) }
