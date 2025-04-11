const NavBar = () => {
    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-transparent px-12 pt-4 pb-4 flex justify-between items-center border-b border-[rgba(245,238,230,0.5)] backdrop-blur-sm">
            <div>
                <a href="#" className="font-[underdog] text-xl">
                    Mauricio Chaile
                </a>

                <span className="font-[neue-medium] ml-8">FULLSTACK DEVELOPER</span>
            </div>

            <div className="flex justify-between text-lg">
                <a href="/about" className="font-[tusker] ml-1">about,</a>
                <a href="/projects" className="font-[tusker] ml-1">projects,</a>
            </div>
        </div>
    );
};

export default NavBar;
