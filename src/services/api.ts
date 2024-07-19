import { BASE_URL } from '../config'
import { ILibrary } from '../interfaces'

interface BooksResponse {
  default: ILibrary
}
export const getBooks = (): Promise<ILibrary> => {
  const url = new URL(BASE_URL)
  try {
    return fetch(url)
      .then(resp => resp.json() as Promise<BooksResponse>)
      .then(data => data.default)
  } catch (error) {
    console.error('Error get data books:', error)
    throw new Error(`Fetch error`)
  }
}
