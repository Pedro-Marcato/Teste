import { useState, useEffect } from 'react';

const useProfileData = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dadosEstaticos = {
      nome: 'Pedro Marcato',
      idade: '20 anos',
      ocupacao: 'Estudante',
      descricao:
        'Meu nome é Pedro Araújo Marcato e este é o meu perfil. Estou cursando ADS no IESB Sul e já estou no 4º semestre.'
    };

    setProfile(dadosEstaticos);
    setLoading(false);
  }, []);

  return { profile, loading };
};

export default useProfileData;
