import Image from "next/image";
import logo from "../public/trello.svg";

const Header = () => {
  return (
    <header className='grid grid-cols-2 p-5 py-6 cursor-pointer border-b-2 border-gray-200 bg-white'>
      <section className='grid grid-flow-col auto-cols-max gap-2 items-center'>
        <div className='h-7 w-7'>
          <Image src={logo} alt='trello'></Image>
        </div>
        <h2 className='text-xl text-list font-bold'>Trello</h2>
      </section>
    </header>
  );
};

export default Header;
