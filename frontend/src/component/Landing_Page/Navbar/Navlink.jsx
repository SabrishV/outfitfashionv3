const { default: Link } = require("next/link");

// NavLink component to handle active link state
const NavLink = ({ href, children }) => {
    // Get the current pathname
    

    // Check if the current link is active
    // const isActive = href === pathname;

    // Define the active class
    // const activeClass = isActive ? "text-[#024E82]" : "";

    return (
        <Link href={href}>
            <li className={`cursor-pointer font-[700] text-[12px] hover:text-[#024E82] `} >{children}</li>
        </Link>
    );
};
export default NavLink;