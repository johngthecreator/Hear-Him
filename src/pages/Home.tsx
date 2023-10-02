import Header from "../components/Header";

export default function Home(){
    return(
        <div className="flex flex-col h-screen w-full bg-white">
            <main>
                <Header />
                <div className="flex flex-col justify-center gap-10 items-center p-10 md:flex-row">
                    <img src="./celeste.jpeg" className="w-[275px] shadow-xl rounded-xl overflow-hidden" />
                    <div className="text-[50px] font-bold">
                        <h2>Scripture Study</h2>
                        <h2>Made Easy.</h2>
                    </div>
                </div>
            </main>
        </div>
        
    )
}