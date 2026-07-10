'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathName = usePathname();
    console.log(pathName);
    return (
        <div>
            <div className="max-lg:collapse bg-base-200 lg:mb-10 shadow-sm w-full rounded-md">
                <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
                <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
                <div className="collapse-title navbar">
                    <div className="navbar-start">
                        <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <Link href={"/"}>
                            <button className="btn btn-ghost text-xl">daisyUI</button>
                        </Link>

                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <Link href={"/foods"} className={pathName=== "/foods"?"text-blue-500":""}>
                                    <button>Foods Gallery</button>
                                </Link>
                            </li>
                            <li><button>Item 3</button></li>
                        </ul>
                    </div>
                </div>

                <div className="collapse-content lg:hidden z-1">
                    <ul className="menu">
                        <li><button>Item 1</button></li>
                        <li><button>Item 3</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;