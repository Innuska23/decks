import { AddDeckParams, DecksApi } from "./decks-api"
import { AppDispatch } from "../../app/store"

type AuthorType = {
  id: string,
  name: string
}

export type DecksType = {
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
  items: DecksType[],
  pagination: PaginationType
}

const initialState = {
  decks: [] as DecksType[],
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
        decks: action.decks
      }
    }
    case "CREATE_DECKS": {
      return {
        ...state,
        decks: [action.deck, ...state.decks]
      }
    }
    default:
      return state
  }
}

export const setDecksAC = (decks: DecksType[]) => {
  return {
    type: "SET_DECKS",
    decks
  } as const
}

export const createDecksAC = (deck: DecksType) => {
  return {
    type: "CREATE_DECKS",
    deck
  } as const
}

export const fetchDecksTC = () => (dispatch: AppDispatch) => {
  DecksApi.getDesks()
    .then((res) => {
      dispatch(setDecksAC(res.data.items))
    }).catch((error) => {
      console.error('Error fetch deck:', error)
    })
}

export const createDecksTC = (params: AddDeckParams) => async (dispatch: AppDispatch) => {
  return DecksApi.postDesks(params)
    .then((res) => {
      dispatch(createDecksAC(res.data))
    }).catch((error) => {
      console.error('Error create deck:', error)
    })
}

export type SetDecksActionType = ReturnType<typeof setDecksAC>
export type CreateDecksActionType = ReturnType<typeof createDecksAC>

type DecksActions = SetDecksActionType
  | CreateDecksActionType