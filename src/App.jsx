import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { LoadingSpinner } from './components/ui/LoadingComponents';

// Lazy loading das páginas para melhor performance
const VendasPage = lazy(() => import('./pages/vendas'));
const ClientesPage = lazy(() => import('./pages/clientes'));
const EstoquePage = lazy(() => import('./pages/estoque'));
const ComprasPage = lazy(() => import('./pages/compras'));
const FinanceiroPage = lazy(() => import('./pages/financeiro'));
const RelatoriosPage = lazy(() => import('./pages/relatorios'));

export default function App() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    }>
      <Routes>
        <Route path="/" element={<Navigate to="/vendas" replace />} />
        <Route path="/vendas" element={<VendasPage />} />
        <Route path="/clientes" element={<ClientesPage />} />
        <Route path="/estoque" element={<EstoquePage />} />
        <Route path="/compras" element={<ComprasPage />} />
        <Route path="/financeiro" element={<FinanceiroPage />} />
        <Route path="/relatorios" element={<RelatoriosPage />} />
      </Routes>
    </Suspense>
  );
}