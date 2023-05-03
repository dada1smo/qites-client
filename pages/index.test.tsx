import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Home from './index';
import useGroupStore from '@/stores/group.store';

describe('Home', () => {
  it('renders Home component', () => {
    render(<Home />);
  });
});

describe('Home', () => {
  it('create group', async () => {
    render(<Home />);
    const name = screen.getByRole('input', { name: 'Nome do grupo' });
    const button = screen.getByRole('button', { name: 'Criar grupo' });
    expect(name).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    await userEvent.type(name, 'Viagem do feriadão');
    expect(screen.getByDisplayValue('Viagem do feriadão')).toBeInTheDocument();
    await userEvent.click(button);
  });
});
