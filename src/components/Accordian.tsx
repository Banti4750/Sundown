
const Accordion = (props: any) => {
    return (
        <div className="relative group cursor-pointer">
            {/* Base Background */}
            <div className="absolute inset-0 bg-[#EFEAE3]"></div>

            {/* Hover Background */}
            <div className="absolute inset-0 bg-[#FF9831] scale-y-0 origin-top transition-transform duration-300 ease-linear group-hover:scale-y-100"></div>

            {/* Content Container - Always on Top */}
            <div className="relative z-20 flex justify-between p-8">
                <div>
                    <h1 className="text-5xl tracking-tighter font-bold group-hover:text-black transition-colors duration-300">
                        {props.title}
                    </h1>
                </div>

                <div>
                    <div>
                        <h1 className="float-end transition-colors duration-300">{props.name}</h1>
                        <h1 className="text-gray-600 leading-3 transition-colors duration-300">
                            {props.type}
                        </h1>
                    </div>
                </div>
            </div>

            <div
                className="absolute top-1/2 left-2/3 transform -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
            >
                <img
                    className="w-96 h-[450px] rounded-2xl shadow-lg"
                    src={props.image}
                    alt="Accordion Image"
                />
            </div>




        </div>
    );
};

export default Accordion;
