import { Component, Suspense, type ReactNode } from 'react';
import { lazyProvider } from './mf';
import './styles.css';

// ProviderBoundary catches the lazy() rejection that fires when a provider's
// remoteEntry.js can't be fetched (provider not running, network error,
// etc.). Without it any one missing provider unmounts the whole consumer
// tree. React has no built-in functional error boundary so this is a class.
// Wrap each <ProviderBoundary> in your router of choice if you need routing.
class ProviderBoundary extends Component<
  { children: ReactNode; name: string },
  { error: Error | null }
> {
  state = { error: null as Error | null };
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div role="alert">
          <p>
            Provider &quot;{this.props.name}&quot; unavailable:{' '}
            {this.state.error.message}
          </p>
        </div>
      );
    }
    return (
      <Suspense fallback={<p>Loading {this.props.name}...</p>}>
        {this.props.children}
      </Suspense>
    );
  }
}

const ProviderAccounts = lazyProvider('accounts', 'App');

export function App() {
  return (
    <div className="shell">
      <header className="shell-header">
        <p className="shell-brand">Open Banking Lite</p>
        <nav aria-label="Sections">
          <span className="shell-nav-current" aria-current="page">
            Accounts
          </span>
        </nav>
      </header>
      <main className="shell-main">
        <ProviderBoundary name="accounts">
          <ProviderAccounts />
        </ProviderBoundary>
      </main>
    </div>
  );
}

export default App;
