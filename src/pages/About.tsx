import Header from "../components/Header";

export default function About(){
    return(
        <div className="flex flex-col h-screen w-full bg-white">
            <main>
                <Header />
                <div className="text-center p-10 flex justify-center items-center flex-col gap-10">
                    <h1 className="text-[50px] font-bold">About.</h1>
                    <p className="text-left md:w-[600px]">
                        The inspiration for this project came from the problems and issues I faced as a modern-day Christian. 
                        Celeste is a unique and engaging web application designed to assist individuals in their study of scriptures. 
                        The app presents users with a single scripture verse, encouraging them to delve deeper and discover hidden messages within the verse that resonate with their personal journey. 
                        With Celeste, users can explore the profound wisdom and spiritual insights within sacred texts in a thought-provoking and interactive way. 
                        Whether you're seeking guidance, inspiration, or simply a deeper understanding of your faith, Celeste offers a meaningful and introspective approach to scripture study. 
                    </p>
                    <div className="flex flex-col md:flex-row items-center gap-5">
                        <img className="h-[200px] w-[200px] overflow-hidden rounded-[200px] object-cover" src="./john_profile.jpeg"/>
                        <div className="flex flex-col text-left">
                            <h2 className="text-2xl font-bold">John Gorriceta</h2>
                            <p>Developer of Celeste</p>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}