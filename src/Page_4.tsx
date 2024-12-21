
import image from './aseests/page4-1.webp'
const Page_4 = () => {
    return (
        <>
            <div className="w-full   bg-[#EFEAE3]">
                <div className='pt-32 flex px-8 '>
                    <div className='w-3/5 bg-black rounded-s-2xl  flex justify-center  items-center'>
                        <div className='flex justify-center items-center flex-col'>

                            <div className='flex  w-3/5 items-center'>
                                <div>
                                    <div className='bg-stone-700 w-[1px] h-64'></div>
                                </div>

                                <div className=' space-y-4'>
                                    <h1 className='text-white font-semibold text-7xl tracking-tighter'>
                                        Design
                                    </h1>
                                    <h1 className='text-stone-700 ml-10 font-semibold text-7xl tracking-tighter'>
                                        Project
                                    </h1>
                                    <h1 className='text-stone-700 ml-10 font-semibold text-7xl tracking-tighter'>
                                        Execution
                                    </h1>
                                </div>
                            </div>

                            <div className='w-3/5 mt-4'>
                                <p className='text-white tracking-tight leading-5'>
                                    Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='  bg-[#EFEAE3]'>
                        <img className='rounded-2xl' src={image} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page_4