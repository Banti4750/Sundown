

const Roller = () => {
    const content = [
        { text: "EXPERIENCES", hasCircle: true },
        { text: "CONTENT", hasCircle: true },
        { text: "ENVIRONMENTS", hasCircle: true },
    ];

    return (
        <div className="relative overflow-hidden w-full  bg-[#EFEAE3]">
            <div className="flex animate-[scroll_10s_linear_infinite] items-center  my-32">
                {/* First Set */}
                {content.map((item, index) => (
                    <div key={`set1-${index}`} className="flex items-center">
                        <h1 className="text-[150px] font-bold whitespace-nowrap mr-8">{item.text}</h1>
                        {item.hasCircle && (
                            <div className="bg-[#FE3204] rounded-full w-20 h-20 mr-8"></div>
                        )}
                    </div>
                ))}
                {/* Duplicate Set for Seamless Loop */}
                {content.map((item, index) => (
                    <div key={`set2-${index}`} className="flex items-center">
                        <h1 className="text-[150px] font-bold whitespace-nowrap mr-8">{item.text}</h1>
                        {item.hasCircle && (
                            <div className="bg-[#FE3204] rounded-full w-20 h-20 mr-8"></div>
                        )}
                    </div>
                ))}

                {content.map((item, index) => (
                    <div key={`set2-${index}`} className="flex items-center">
                        <h1 className="text-[150px] font-bold whitespace-nowrap mr-8">{item.text}</h1>
                        {item.hasCircle && (
                            <div className="bg-[#FE3204] rounded-full w-20 h-20 mr-8"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Roller;