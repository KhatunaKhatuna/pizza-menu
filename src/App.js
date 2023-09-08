import "./App.css";
import "./index.css";

const pizzaData = [
  {
    name: "Pizza Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarellaTomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
const onepizzaData = pizzaData.map((pizzadata) => {
  return pizzadata;
});

function App() {
  return (
    <div className="container ">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cusine. 6 creative dishes to choose from. All from
            our store oven, all organic, all delicious
          </p>

          <PizzaList />
        </>
      ) : (
        <p style={{ fontSize: "22px" }}>
          {" "}
          We're still working on our menu. Please come back later
        </p>
      )}
    </main>
  );
}

function PizzaList() {
  return (
    <ul className="pizzas">
      {pizzaData.map((pizza) => (
        <Pizza pizzaObject={pizza} key={pizza.name} />
      ))}
    </ul>
  );
}

function Pizza({ pizzaObject }) {
  //  if (pizzaObject.soldOut) return null; // early return
  //return  <div style={{ fontSize: "22px" }}>Sold out</div>;

  return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObject.photoName} alt={pizzaObject.name} />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <span>{pizzaObject.soldOut ? "SOLD OUT" : pizzaObject.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;
  // console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Open closeHour={closeHour} openHour={openHour} />
      ) : (
        <Close closeHour={closeHour} openHour={openHour} />
      )}
      <Time />
    </footer>
  );
}

function Open({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.{" "}
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

function Close({ closeHour, openHour }) {
  return (
    <div>
      <p>
        {" "}
        We're happy to welcome you between {openHour}:00 and {closeHour}:00.
      </p>
    </div>
  );
}
function Time() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      It's {new Date().toLocaleTimeString()}. {new Date().toLocaleDateString()}.
    </div>
  );
}
export default App;
