import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { session, isAdmin, loading } = useAuth();
  const loc = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-muted-foreground">Cargando…</div>
      </div>
    );
  }
  if (!session) return <Navigate to="/auth" state={{ from: loc }} replace />;
  if (!isAdmin) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background gap-4 px-4 text-center">
        <h1 className="text-3xl font-display font-bold">Acceso denegado</h1>
        <p className="text-muted-foreground">Esta cuenta no tiene permisos de administrador.</p>
      </div>
    );
  }
  return <>{children}</>;
}
