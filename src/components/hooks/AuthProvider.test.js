// AuthProvider.test.js

import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { AuthProvider, useAuth } from './AuthProvider';

describe('AuthProvider', () => {
  it('should provide auth context', async () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    // Verifica se o texto de loading está sendo exibido
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Aguarda até que o contexto seja carregado
    await waitFor(() => {
      expect(useAuth().filial).toBeTruthy();
      expect(useAuth().loading).toBeFalsy();
    });
  });
});

const TestComponent = () => {
  const { filial, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Filial: {filial?.nome}</h1>
      {/* Renderiza outros dados da filial conforme necessário */}
    </div>
  );
};
