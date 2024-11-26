import { DeckItem } from './DeckItem/DeckItem'
import { useFetchDesks } from './useFetchDesks'

import s from './DecksList.module.css'

export const DecksList = () => {
  const { decks } = useFetchDesks()
  console.log("Decks in component:", decks);

  return (
    <ul className={s.list}>
      {decks.map((deck) => (
        <DeckItem key={deck.id} deck={deck} />
      ))}
    </ul>
  )
}
