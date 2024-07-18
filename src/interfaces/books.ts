export interface ILibrary {
  library: IBooks[]
}

export interface IBooks {
  book: IBookItem
}

export interface IBookItem {
  title: string
  pages: number
  genre: string
  cover: string
  synopsis: string
  year: number
  ISBN: string
  author: Author
}

export interface Author {
  name: string
  otherBooks: string[]
}
