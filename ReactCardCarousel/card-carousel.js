export const data = [
  {
    name: "simon",
    img: "https://imgur.com/c43aAlv.jpg",
  },
  {
    name: "neo",
    img: "https://imgur.com/RF2a3PB.jpg",
  },
  {
    name: "morpheus",
    img: "https://imgur.com/B0SNpZI.jpg",
  },
  {
    name: "trinity",
    img: "https://imgur.com/KnXHM0K.jpg",
  },
];

const Card = ({ name, img }) => {
  return (
    <div className="card">
      <img src={img} alt={name} />
      <h2>{name}</h2>
    </div>
  );
};

export default Card;