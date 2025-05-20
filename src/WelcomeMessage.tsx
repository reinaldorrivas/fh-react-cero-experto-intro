const newMessage = {
  autor: 'René Rivas',
  message: '¡Hola Mundo!',
};

const returnValues = () => {
  return [newMessage.autor, newMessage.message];
};

const WelcomeMessage = ({ title, subtitle }) => {

  return (
    <>
      <header>
        <h1>{title}</h1>
        <small>{subtitle}</small>
      </header>
      <main>
        <p>{returnValues()[0]}</p>
        <p>{returnValues()[1]}</p>
      </main>
    </>
  );
};

export default WelcomeMessage;
