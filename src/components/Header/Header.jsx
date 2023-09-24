import "./Header.css"
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <div className="container mx-auto">
            <header className="p-4">
	<div className="container flex justify-between h-16 mx-auto">
		<a rel="noopener noreferrer" href="/" aria-label="Back to homepage" className="flex items-center p-2">
			<img src="/src/assets/Logo.png" alt="" />
		</a>
		<ul className="items-stretch hidden space-x-3 md:flex">
			<li className="flex">
				<NavLink rel="noopener noreferrer" to="/" className=" text-red flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Home</NavLink>
			</li>
			<li className="flex">
				<NavLink rel="noopener noreferrer" to="/donation" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Donation</NavLink>
			</li>
			<li className="flex">
				<NavLink rel="noopener noreferrer" to="/statistics" className="flex items-center px-4 -mb-1 dark:border-transparent ">Statistics</NavLink>
			</li>
			
		</ul>
		<button className="flex justify-end p-4 md:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
    
</header>
        </div>
    );
};

export default Header;