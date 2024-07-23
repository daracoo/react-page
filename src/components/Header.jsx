import reactCoreConcepts from '../assets/react-core-concepts.png';//correct way of including pictures

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
    const description = reactDescriptions[genRandomInt(2)];
    return (
      <header>
        <img src={reactCoreConcepts} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }

export default Header;