/* Should be pages from CMS or store in an array, use forEach loop to display links */

const NavLinks = () => {
    // const navItems = ['about', 'blog', 'contact' ]
    // {navItems.map((item) => {
    //     <li className="block sm:inline"> 
    //         <a href={`/${item}`} className="text-white hover:bg-white hover:text-black rounded-lg p-2"
    //         >
    //             {item}
    //         </a>
    //     </li>
    // })}
    return (
        <>
            <li className="block sm:inline"> 
                <a href="/about" className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                    About
                </a>
            </li>
            <li className="block sm:inline">
                <a href="/blog" className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                    Retreats
                </a>
            </li>
            <li className="block sm:inline">
                <a href="/blog" className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                    Blog
                </a>
            </li>
            <li className="block sm:inline">
                <a href="/contact" className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                    Contact
                </a>
            </li>
        </>
    )
}

export default NavLinks