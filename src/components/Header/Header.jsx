import "./Header.css"
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <div className="container mx-auto">
            {/* <header className="p-4">
	<div className="container flex justify-between h-16 mx-auto">
		<a rel="noopener noreferrer" href="/" aria-label="Back to homepage" className="flex items-center p-2">
			<img src="/src/assets/Logo.png" alt="" />
		</a>
		<ul className="items-stretch  space-x-3 md:flex">
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
    
</header> */}




						<div className="navbar bg-base-100">
							<div className="navbar-start">
									<div className="dropdown">
									<label tabIndex={0} className="btn btn-ghost lg:hidden">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
									</label>
									<ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
									<li>
									<NavLink  to="/" className=" text-red flex items-center px-4 -mb-1 ">Home</NavLink>
								</li>
								<li className="flex">
									<NavLink rel="noopener noreferrer" to="/donation" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Donation</NavLink>
								</li>
								<li className="flex">
									<NavLink rel="noopener noreferrer" to="/statistics" className="flex items-center px-4 -mb-1 dark:border-transparent ">Statistics</NavLink>
								</li>
									</ul>
									</div>
									<a rel="noopener noreferrer" href="/" aria-label="Back to homepage" className="flex       items-center p-2">
										<img src="/src/assets/Logo.png" alt="" />
									</a>
							</div>
							<div className="navbar-end hidden m-2 lg:flex">
								<ul className=" flex px-1">
								<li>
									<NavLink  to="/" className=" text-red flex items-center px-4 -mb-1 ">Home</NavLink>
								</li>
								<li className="flex">
									<NavLink rel="noopener noreferrer" to="/donation" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Donation</NavLink>
								</li>
								<li className="flex">
									<NavLink rel="noopener noreferrer" to="/statistics" className="flex items-center px-4 -mb-1 dark:border-transparent ">Statistics</NavLink>
								</li>
								</ul>
							</div>
					
						</div>
        </div>
    );
};

export default Header;