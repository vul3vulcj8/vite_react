import Cat1 from "../assets/images/3.jpg";
import Cat2 from "../assets/images/9.jpg";

const Card = () => {
  return (
    <div>
      <a href="https://vitejs.dev" target="_blank" rel="noopener">
        <img src={Cat1} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank" rel="noopener">
        <img src={Cat2} className="logo react" alt="React logo" />
      </a>
    </div>
  );
};

export default Card;
