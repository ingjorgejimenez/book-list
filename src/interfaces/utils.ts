export interface IFilters {
  genre: string[]
  author: string[]
}

export interface SearchFilter {
  genre?: string
  author?: string
  title?: string
}
