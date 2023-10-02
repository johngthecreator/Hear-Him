import Header from "../components/Header"
export default function Changelog(){
    return(
        <div className="flex flex-col h-screen w-full bg-white">
        <main>
            <Header />
            <div className="text-center p-10 flex justify-center items-center flex-col gap-10">
                <h1 className="text-[50px] font-bold">ChangeLog.</h1>
                <div className="flex flex-col justiify-start text-left border-solid w-full rounded-xl md:w-1/2 border-2 border-[#FFBD98] p-4 overflow-y-scroll h-[400px]">
                    <p>## [Beta]</p>
                    <p>## [1.0.0] - 2023-10-01</p>
                    <p>### Added</p>
                    <p>- Added the Home, ChangeLog, Study, About pages</p>
                    <p>- Created landing page</p>
                    {/* <p>### Changed</p>
                    <p>### Removed</p> */}
                </div>
            </div>
        </main>
    </div>
    )
}