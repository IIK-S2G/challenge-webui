import Link from "next/link";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import ThemeSwitch from "../themeSwitch";

export default function Navbar(): JSX.Element {
    return(
        <nav className="bg-black flex justify-center h-[8vh] sticky top-0">
            <h1 className="text-3xl font-bold text-white grid place-content-center mr-12">
                <Link href="/">S2G</Link>
            </h1>
            <LeftNav/>
            <RightNav/>
            {/* <ThemeSwitch/> */}
        </nav>
    )
}
