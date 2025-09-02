import headerImage from "./assets/react-core-concepts.png";
import coreConceptImage from "./assets/components.png";
const reactDescription = ["Fundamental", "Core", "Crucial"];

function genRandomIndex(max) {
  return Math.floor(Math.random() * (max + 1));
}
function CoreConcepts(props) {
  return (
    <li>
      <img src={props.image} als={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
function Header() {
  const description = reactDescription[genRandomIndex(2)];
  return (
    <header>
      <main>
        <section id="core-concepts">
          <ul>
            <CoreConcepts
              title="Components"
              description="The core UI building block"
              image={coreConceptImage}
            />
            <CoreConcepts />
            <CoreConcepts />
            <CoreConcepts />
          </ul>
        </section>
      </main>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
