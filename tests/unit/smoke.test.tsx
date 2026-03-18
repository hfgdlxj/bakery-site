import { render, screen } from '@testing-library/react'
import { HomePage } from '../../src/pages/HomePage'
import { AppProviders } from '../../src/app/providers/AppProviders'

describe('HomePage', () => {
  it('タイトルが表示される', () => {
    render(
      <AppProviders>
        <HomePage />
      </AppProviders>,
    )

    expect(screen.getByText('NEWS')).toBeInTheDocument()
  })
})
