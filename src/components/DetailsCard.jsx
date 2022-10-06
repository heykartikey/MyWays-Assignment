const DetailsCard = ({ icon, title, text }) => {
  return (
    <div className="flex items-center">
      <div className="flex">
        {icon}
        <span className="px-2">{title}</span>
      </div>
      <span className="font-semibold flex-grow text-right">{text}</span>
    </div>
  );
};

export default DetailsCard;
