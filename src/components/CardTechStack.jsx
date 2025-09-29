

function CardTechStack({ title, imgSrc }) {
  return (
    <div>
      <div className="flex flex-col items-center">
        <img src={imgSrc} alt="React" className="w-25 h-25" />
        <p className="mt-4 text-2xl text-shadow-gray-950">{title}</p>
      </div>
    </div>
  );
}
export default CardTechStack;
