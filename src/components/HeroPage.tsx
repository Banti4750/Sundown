import Animation_ from "../component_part2/Animation_"
import Video from "../component_part2/Video"
// import Animation_ from "../component_part2/Animation_"
import Content from "./Content"
import Navbar from "./Navbar"


const HeroPage = () => {
    return (
        <>
            <div className=" w-full  bg-[#EFEAE3]  ">
                <Navbar />
                <Content />
                <div className="bg-stone-400 h-[1px]  mx-8  my-12"></div>
                {/* <Video /> */}
                <Animation_ />
            </div>
        </>
    )
}

export default HeroPage