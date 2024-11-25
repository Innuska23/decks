import axios from 'axios'
import { ResponseType } from './decks-reducer'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const DecksApi = {
  getDesks() {
    return instance.get<ResponseType>('/v2/decks')
  }
}