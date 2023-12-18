const SocialIcons = ({ link, icon }: { link: string; icon: React.ReactNode }) => {
  return (
    <div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="text-3xl text-black ">{icon}</button>
      </a>
    </div>
  );
};
export default SocialIcons;
