import Logo from '../../../../public/Group 2logo.png';

export default function Header() {
  return (
    <>
      <div className="md:flex justify-center items-center text-center">
        <header className="sm:w-3/5">
          <div className="flex items-center sm:p-3">
            <img className="sm:w-14 h-14" src={Logo} alt="" />
            <b className="sm:text-xl">Versus Check</b>
          </div>
        </header>
      </div>
    </>
  );
}
