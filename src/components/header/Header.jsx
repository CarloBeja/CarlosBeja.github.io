import {BiLogoCodepen} from "react-icons/bi";

function Header() {
    return (
        <>
            <div className={"flex text-black text-2xl font-bold py-3 justify-center mb-9"}>
                <div className={"flex items-center justify-center"}>
                    <div className={"text-[#6DC093] mr-1"}>
                        <BiLogoCodepen/>
                    </div>
                    <a href="/">BlogWise</a>
                </div>

            </div>
        </>
    )

}

export default Header;