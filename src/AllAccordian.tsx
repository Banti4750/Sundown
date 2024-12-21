import Accordion from "./components/Accordian"

import photo1 from './aseests/photo1.avif'
import photo2 from './aseests/photo2.avif'
import photo3 from './aseests/photo3.avif'
import photo4 from './aseests/photo4.avif'
import photo5 from './aseests/photo5.avif'
import photo6 from './aseests/photo6.avif'
import Button from "./components/Button"

const AllAccordian = () => {
    return (
        <>  <div className="bg-[#EFEAE3]">

            <Accordion title="Play New Kidvision" name="NIKE" type="Environment" image={photo1} />
            <div className="bg-stone-300 h-[1px] "></div>
            <Accordion title="SOHO NYC" name="NIKE" type="Environment" image={photo2} />
            <div className="bg-stone-300 h-[1px] "></div>
            <Accordion title="Makers Studio HOI" name="NIKE" type="Environment" image={photo3} />
            <div className="bg-stone-300 h-[1px] "></div>
            <Accordion title="SOHO 2024" name="NIKE" type="Environment" image={photo4} />
            <div className="bg-stone-300 h-[1px] "></div>
            <Accordion title="NYFW Popup" name="NIKE" type="Environment" image={photo5} />
            <div className="bg-stone-300 h-[1px] "></div>
            <Accordion title="Air Force 1 2021" name="NIKE" type="Environment" image={photo6} />
            <div className="bg-stone-300 h-[1px] "></div>
            <div className="mt-16 mx-8">
                <Button title="All project" />

            </div>
        </div>

        </>
    )
}

export default AllAccordian