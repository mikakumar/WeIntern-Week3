import Image from "next/image";
import Link from "next/link";

import Nav_icon from '../assets/ai.png';

const Navbar = () =>{
    return(
        <>
        <div className="nav-container">
            <div>
                <Link href="/">
                <Image src={Nav_icon} width={60} height={60} alt='nav-logo' />
                </Link>
            </div>
            <div className="nav-menu">
                <ul>
                    <Link href="/signin">
                    <div className="nav-wrapper">
                    <li>Sign In</li>
                    </div>
                    </Link>
                    <Link href="/signup">
                    <div className="nav-wrapper">
                    <li>Sign Up</li>
                    </div>
                    </Link>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Navbar;