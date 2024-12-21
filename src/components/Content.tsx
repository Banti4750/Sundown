const Content = () => {
    return (
        <>
            <div className="h-3/4  mx-12 flex  justify-between items-end mt-8">
                {/* First div at the bottom */}
                <div className="w-1/3 text-3xl font-bold    ">
                    <h3>
                        Sundown is a multi-disciplinary studio focused on creating unique, end-to-end experiences and environments.
                    </h3>
                </div>

                {/* Second div with the same width */}
                <div className="text-[150px] font-bold w-1/3 space-y-[-110px]">
                    <h1 className="flex tracking-wider float-end  mt-10">SPACES</h1>
                    <h1 className="flex float-end">THAT</h1>
                    <h1 className="flex float-end">INSPIRE</h1>
                </div>


            </div>




        </>
    );
};

export default Content;
