function CardTechStack({ title, imgSrc }) {
  return (
    <div className="flex flex-col items-center bg-blue-100 rounded-xl shadow-lg p-5 mx-2 w-32 md:w-32 min-h-[150px] transition-transform hover:scale-105 hover:shadow-2xl">
      <img src={imgSrc} alt={title} className="w-16 h-16 md:w-20 md:h-20 object-contain" />
      <p className="mt-3 text-lg md:text-xl font-bold text-blue-800 tracking-wide font-mono drop-shadow text-center">
        {title}
      </p>
    </div>
  );
}
export default CardTechStack;