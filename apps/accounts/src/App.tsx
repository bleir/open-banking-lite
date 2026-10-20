import './styles.css';

const accounts = [
  {
    name: 'Everyday current',
    number: '0000 0000 0000 0000 0000 0001',
    balance: '12 450.00 PLN',
  },
  {
    name: 'Savings',
    number: '0000 0000 0000 0000 0000 0002',
    balance: '48 200.00 PLN',
  },
  {
    name: 'Travel',
    number: '0000 0000 0000 0000 0000 0003',
    balance: '1 250.00 EUR',
  },
];

// Exposed by the federation plugin as 'accounts/App'.
// Consumers render it lazily via `lazyProvider('accounts', 'App')`.
export function App() {
  return (
    <section className="accounts" data-testid="accounts">
      <h1>Accounts</h1>
      <p className="accounts-note">Fictional balances. No bank is connected.</p>
      <ul className="accounts-list">
        {accounts.map((account) => (
          <li key={account.number}>
            <span className="accounts-name">{account.name}</span>
            <span className="accounts-number">{account.number}</span>
            <span className="accounts-balance">{account.balance}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App;
