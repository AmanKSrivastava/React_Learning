import headerImage from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescription = ["Fundamental", "Core", "Crucial"];

function genRandomIndex(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
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
