import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { PRIVATE } from '../router/path';

export default function PublicRoute() {
  const { token } = useAuthContext();
  if (!token) {
    // Si no hay token, permite el acceso al contenido público
    return <Outlet />;
  }
  // Si hay un token (usuario autenticado), redirige al usuario a la ruta privada
  return <Navigate to={PRIVATE} />;
}