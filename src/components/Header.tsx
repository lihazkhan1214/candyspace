import { Grid3X3 } from "lucide-react";

const Header = () => {
  return (
    <header className="absolute text-white top-0 bg-transparent left-0 right-0 z-50  ">
      <div className="container mx-auto  py-4 flex   items-start justify-between">
        <div className="md:mt-10 ">
          <p className="text-2xl md:text-5xl text-start font-semibold tracking-tight ">CANDYSPACE</p>
          <p className="text-sm text-start text-white md:mt-5">Where Wisdom Meets Ambition.</p>
        </div>
        <button className="p-2 rounded-lg transition-colors">
          <Grid3X3 className="w-10 h-10" />
        </button>
      </div>
    </header>
  );
};

export default Header;
