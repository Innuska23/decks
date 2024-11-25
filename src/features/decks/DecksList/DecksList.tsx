import { useEffect } from 'react'
import s from './DecksList.module.css'
import { DesksType, fetchDecksTC } from '../decks-reducer'
import { useAppDispatch, useAppSelector } from '../../../app/store'
import { DeckItem } from './DeckItem/DeckItem'

export const DecksList = () => {
  const dispatch = useAppDispatch();
  const decks: DesksType[] = useAppSelector(state => state.decksReducer.decks);

  useEffect(() => {
    dispatch(fetchDecksTC())
  }, [dispatch])

  return <ul className={s.list}>
    {decks.map((deck) => (
      <DeckItem key={deck.id} deck={deck} />
    ))}
  </ul>
}
