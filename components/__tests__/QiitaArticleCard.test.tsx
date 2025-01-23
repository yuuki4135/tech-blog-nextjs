import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { QiitaArticleCard } from '../QiitaArticleCard'

const mockArticle = {
  title: 'Test Qiita Article',
  date: '2023-01-01',
  url: 'https://qiita.com/test',
  thumbnail: 'https://example.com/thumbnail.jpg'
}

describe('QiitaArticleCard', () => {
  it('renders article title and date', () => {
    render(<QiitaArticleCard article={mockArticle} />)
    
    expect(screen.getByText('Test Qiita Article')).toBeInTheDocument()
    expect(screen.getByText('2023-01-01')).toBeInTheDocument()
  })

  it('links to the correct URL', () => {
    render(<QiitaArticleCard article={mockArticle} />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', 'https://qiita.com/test')
  })

  it('renders thumbnail image', () => {
    render(<QiitaArticleCard article={mockArticle} />)
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('src', 'https://example.com/thumbnail.jpg')
    expect(image).toHaveAttribute('alt', 'Test Qiita Article')
  })
})
