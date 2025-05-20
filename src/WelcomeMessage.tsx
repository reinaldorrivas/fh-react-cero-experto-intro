const newMessage = {
  title: 'René Rivas',
  message: '¡Hola Mundo!',
};

const returnValues = () => {
  return [newMessage.title, newMessage.message];
};

const WelcomeMessage = () => (
  <>
    <h1>{returnValues()[0]}</h1>
    <p>{returnValues()[1]}</p>
  </>
);

export default WelcomeMessage;
