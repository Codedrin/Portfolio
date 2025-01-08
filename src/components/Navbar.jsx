import { NavLink } from "react-router-dom";



const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/' className= "w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
   <p className="blue-gradient_text">Drin</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
     {/* CV Download Button */}
        <a
          href="https://drive.google.com/file/d/14rId-I9p6KiFZPHijpWSy5M8tQD1_NSV/view?usp=sharing" // Replace with the correct path to your CV file
          download="Aldrin Rosales.pdf" // This sets the file name for the download
        className="blue-gradient_text" 
        >
        Download my  CV
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
