import axios from 'axios'
import { DecksType, ResponseType } from './types/types'


export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const DecksApi = {
  getDesks() {
    return instance.get<ResponseType>('/v2/decks')
  },
  postDesks(params: AddDeckParams) {
    return instance.post<DecksType>('/v1/decks', params)
  }
}

export type AddDeckParams = {
  name: string
}