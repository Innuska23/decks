import { DecksApi } from "./decks-api"
import { AppDispatch } from "../../app/store"

type AuthorType = {
  id: string,
  name: string
}

export type DesksType = {
  isFavorite: boolean,
  author: AuthorType,
  id: string,
  userId: string,
  name: string,
  isPrivate: boolean,
  cover: string,
  created: string,
  updated: string,
  cardsCount: number
}

type PaginationType = {
  currentPage: number,
  itemsPerPage: number,
  totalPages: number,
  totalItems: number
}

export type ResponseType = {
  items: DesksType[],
  pagination: PaginationType
}


const initialState = {
  decks: [] as DesksType[],
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET_DECKS': {
      return {
        ...state,
        decks: action.payload.items
      }
    }

    default:
      return state
  }
}

export const setDecksAC = (decks: ResponseType) => {
  return {
    type: "SET_DECKS",
    payload: decks
  } as const
}

export const fetchDecksTC = () => (dispatch: AppDispatch) => {
  DecksApi.getDesks()
    .then((res) => {
      dispatch(setDecksAC(res.data))
    })
}

export type SetDecksActionType = ReturnType<typeof setDecksAC>

type DecksActions = SetDecksActionType
