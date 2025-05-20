import CounterApp from './CounterApp';
import WelcomeMessage from './WelcomeMessage';

const App = () => {
  return (
    <>
      <WelcomeMessage
        subtitle="Mis pequeños pasos para lograrlo."
        title="Bienvenido"
      />
      <main>
        <CounterApp value={0} />
      </main>
    </>
  );
};

export default App;
