import headerImage from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data.js";
const reactDescription = ["Fundamental", "Core", "Crucial"];

function genRandomIndex(max) {
  return Math.floor(Math.random() * (max + 1));
}
function CoreConcepts({ image, title, description }) {
  return (
    <li>
      <img src={image} als={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function Header() {
  const description = reactDescription[genRandomIndex(2)];
  return (
    <header>
      <img src={headerImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
