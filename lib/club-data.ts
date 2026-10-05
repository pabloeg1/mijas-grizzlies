export const crestUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Escudo%20GRIZZLIES-AtckxhFlCU2cd0McGz8Fpiv5LZBGQf.jpeg'

export type Player = { number: number; name: string; position: string; photo: string; age: number; nationality: string; height: string; foot: string; appearances: number; goals: number; assists: number; bio: string }

export const players: Player[] = [
  { number: 1, name: 'Álex Moreno', position: 'Portero', photo: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=700&q=85', age: 26, nationality: 'España', height: '1,86 m', foot: 'Derecho', appearances: 14, goals: 0, assists: 1, bio: 'Portero de reflejos felinos y gran juego con los pies. Un seguro bajo palos.' },
  { number: 3, name: 'Diego Santos', position: 'Cierre', photo: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=700&q=85', age: 28, nationality: 'España', height: '1,82 m', foot: 'Derecho', appearances: 16, goals: 3, assists: 4, bio: 'Líder de la zaga, ordena al equipo y domina el juego aéreo.' },
  { number: 5, name: 'Bruno Vidal', position: 'Ala', photo: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=700&q=85', age: 24, nationality: 'Portugal', height: '1,76 m', foot: 'Izquierdo', appearances: 15, goals: 8, assists: 6, bio: 'Vertical, eléctrico y con un uno contra uno diferencial.' },
  { number: 7, name: 'Leo Castillo', position: 'Ala', photo: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=700&q=85', age: 23, nationality: 'España', height: '1,78 m', foot: 'Derecho', appearances: 17, goals: 12, assists: 9, bio: 'Talento ofensivo y desequilibrio desde la banda derecha.' },
  { number: 9, name: 'Martín Rivas', position: 'Pívot', photo: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=700&q=85', age: 29, nationality: 'Argentina', height: '1,84 m', foot: 'Izquierdo', appearances: 18, goals: 19, assists: 7, bio: 'El referente ofensivo. Potencia, juego de espaldas y olfato goleador.' },
  { number: 10, name: 'Nico Ferrer', position: 'Ala', photo: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=700&q=85', age: 27, nationality: 'España', height: '1,80 m', foot: 'Derecho', appearances: 17, goals: 14, assists: 11, bio: 'El cerebro del Grizzlies. Ve pases imposibles y marca el ritmo.' },
  { number: 11, name: 'Hugo Marín', position: 'Ala', photo: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=700&q=85', age: 22, nationality: 'España', height: '1,75 m', foot: 'Izquierdo', appearances: 13, goals: 6, assists: 5, bio: 'Juventud y descaro para romper partidos desde el banquillo.' },
  { number: 14, name: 'Tomás Ruiz', position: 'Cierre', photo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=700&q=85', age: 25, nationality: 'Uruguay', height: '1,81 m', foot: 'Derecho', appearances: 12, goals: 2, assists: 3, bio: 'Defensor intenso, rápido en la cobertura y preciso en salida.' },
]

export const table = ['Grizzlies Futsal', 'Atlético Norte', 'Sporting Levante', 'CD Valdeoro', 'Inter Costa', 'Racing 92', 'FS Marítimo', 'Unión Central', 'Los Pinos FS', 'Círculo Deportivo', 'Vértice Futsal', 'AD Rayo', 'Marea Azul', 'Club 1908', 'Náutico Sur', 'Villa Real FS', 'Barrio Alto', 'Titanes', 'San Marcos', 'Fénix'].map((team, index) => ({ team, played: 18, won: 14 - Math.floor(index / 5), drawn: index % 4 === 0 ? 2 : 1, lost: 18 - (14 - Math.floor(index / 5)) - (index % 4 === 0 ? 2 : 1), points: 44 - index * 2 }))

export const fixtures = [
  { date: 'SÁB 18 OCT', time: '19:30', opponent: 'Atlético Norte', venue: 'Pabellón Central', home: true },
  { date: 'VIE 24 OCT', time: '20:45', opponent: 'Sporting Levante', venue: 'Palau Esportiu', home: false },
  { date: 'DOM 02 NOV', time: '12:00', opponent: 'CD Valdeoro', venue: 'Pabellón Central', home: true },
]

export const topScorers = [...players].sort((a, b) => b.goals - a.goals)
export const topAssists = [...players].sort((a, b) => b.assists - a.assists)
export const topCombined = [...players].sort((a, b) => (b.goals + b.assists) - (a.goals + a.assists))

export function getPlayer(number: string) { return players.find((player) => player.number === Number(number)) }
