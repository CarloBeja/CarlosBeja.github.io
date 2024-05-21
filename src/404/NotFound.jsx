import {BiLogoCodepen} from "react-icons/bi";
import {TbError404} from "react-icons/tb";

function NotFound() {

    return (
        <>
            <div className="flex flex-col items-center justify-center pt-16">
                <div className="flex items-center text-4xl font-extrabold">
                    <div className="text-[#6DC093]">
                        <BiLogoCodepen/>
                    </div>
                    <h1 className="ml-2">BlogWise</h1>
                </div>

                <br/>

                <div className="flex flex-col items-center justify-center text-4xl text-center mt-24">
                    <div className={"text-8xl text-red-400"}>
                        <TbError404/>
                    </div>
                    <h1>Página no encontrada :(</h1>
                </div>
            </div>

        </>
    )


}

export default NotFound;