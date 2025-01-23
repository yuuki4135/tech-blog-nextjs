import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { BlogCard } from '../BlogCard'

const mockBlog = {
  id: '1',
  title: 'Test Blog',
  content: 'Test content',
  eyecatch: {
    url: 'https://example.com/image.jpg'
  },
  createdAt: '2023-01-01T00:00:00.000Z'
}

describe('BlogCard', () => {
  it('renders blog title and date', () => {
    render(<BlogCard blog={mockBlog} />)
    
    expect(screen.getByText('Test Blog')).toBeInTheDocument()
    expect(screen.getByText('2023/1/1')).toBeInTheDocument()
  })

  it('renders image when eyecatch is provided', () => {
    render(<BlogCard blog={mockBlog} />)
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg')
    expect(image).toHaveAttribute('alt', 'Test Blog')
  })
})
