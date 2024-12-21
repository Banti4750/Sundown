
import InputAnimation from "./components/InputAnimation";

const Footer = () => {
  return (
    <div className="bg-[#FE330A] w-full h-screen relative overflow-hidden">
      {/* Navigation and Newsletter Section */}
      <div className="flex justify-between p-24">
        <nav>
          <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Work</h2>
          <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Studio</h2>
          <h2 className="text-3xl font-bold tracking-tight text-white">Contact</h2>
        </nav>

        <div className="w-1/4">
          <p className="text-lg leading-5 text-white mb-4">
            Get industry insights and creative inspiration straight to your inbox.
          </p>
          <InputAnimation />
        </div>
      </div>

      {/* Stacked Sundown Text and Divider */}
      <div className="w-full relative z-10">
        <h1 className="text-white text-[340px] text-center font-bold leading-none">Sundown</h1>
        <div className="w-full px-8 ">
          <div className="bg-stone-300/20 h-[1px] w-full" />
          <div className='flex justify-between mt-4 text-white'>
              <h5>Copyright © Sundown Studio</h5>
              <h5>Brooklyn, NY</h5>
              <h5>Brooklyn, NY</h5>
              <h5>LinkedIn</h5>
          </div>
        </div>

      </div>

      {/* Mountain Blur Effect */}
      <div className="absolute bottom-0 left-0 w-full h-4/6 flex justify-center ">
        <div className="w-full h-full
                      border-l-[90vw] border-r-[130vw] border-b-[95vh]
                      border-transparent border-b-black

                      blur-3xl
                      animate-mountainFloat" />
      </div>


    </div>
  );
};

export default Footer;