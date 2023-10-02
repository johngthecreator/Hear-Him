// import {AiOutlineMenu} from "react-icons/ai"
export default function Header(){
    return(
        <header className="flex flex-row justify-between items-center p-5">
            <a href="/"><h1 className="text-2xl font-bold text-black">the <span className="text-[#FFBD98]">celeste</span> project.</h1></a>
            {/* <AiOutlineMenu className="block md:hidden text-3xl font-bold"/> */}
            <a href="/study" className="bg-[#FFBD98] block md:hidden px-5 py-2 rounded-lg font-bold">study</a>
            <div className="hidden md:flex gap-10 font-bold">
                <a href="/study">study</a>
                <a href="/changelog">changelog</a>
                <a href="/about">about</a>
            </div>
        </header>
    )
}