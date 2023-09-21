import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { PUBLIC, LOGIN } from '../router/path';

export default function PrivateRoute() {
  const { token } = useAuthContext();
  if (!token) {
    // Si no hay token, redirigir al usuario a la ruta pública
    return <Navigate to={LOGIN} />;
  }
  // Si hay un token, permitir el acceso al contenido protegido
  return <Outlet />;
}