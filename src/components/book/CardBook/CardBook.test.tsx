import { render, screen } from '@testing-library/react'
import { CardBook, CardBookProps } from './index'

// Crea el objeto mockBook con el tipo IBookItem
const mockBook: CardBookProps = {
  book: {
    ISBN: '978-0618640157',
    cover: 'http://example.com/cover.jpg',
    title: 'El Señor de los Anillos',
    pages: 300,
    genre: 'Fantasía',
    synopsis: 'Una aventura',
    year: 1954,
    author: {
      name: 'J.R.R. Tolkien',
      otherBooks: ['El Hobbit'],
    },
  },
}

describe('<CardBook />', () => {
  test('Renders the CardBook component', () => {
    render(<CardBook book={mockBook.book} />)

    // Title in document
    const titleElement = screen.getByText('El Señor de los Anillos')
    expect(titleElement).toBeInTheDocument()

    // ISBN in document
    const linkElementByHref = screen.getByRole('link')
    expect(linkElementByHref).toBeInTheDocument()

    // attributes href in link
    expect(linkElementByHref).toHaveAttribute(
      'href',
      '/#/libro?id=978-0618640157',
    )

    // Img in Document
    const imgElement = screen.getByRole('img')
    expect(imgElement).toBeInTheDocument()

    // attribute in img
    expect(imgElement).toHaveAttribute('src', 'http://example.com/cover.jpg')
    // attribute alt in img
    expect(imgElement).toHaveAttribute('alt', 'El Señor de los Anillos')
  })
})
