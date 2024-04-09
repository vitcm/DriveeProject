import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Filial {
  id: number;
  nome: string;
  endereco: string;
  cep: string;
  uf: string;
  cidade: string;
  valorAluguel: number;
  inicioContrato: Date;
  fimContrato: Date;
  complemento: String;
}

interface AuthContextType {
  filial: Filial | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  filial: null,
  loading: true,
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [filial, setFilial] = useState<Filial | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFiliaisData = async () => {
      try {
        const response = await axios.get("/api/filiais");
        setFilial(response.data);
        console.log("olar", response.data);
      } catch (error) {
        console.error("DEU RUIM!", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFiliaisData();
  }, []);

  return (
    <AuthContext.Provider value={{ filial, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
