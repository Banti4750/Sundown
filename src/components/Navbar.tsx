import Sundown_logo from "../aseests/Sundown_logo"
import Button from "./Button"


const Navbar = () => {
    return (
        <>
            <div className="flex justify-between px-8 py-10 items-center">
                <Sundown_logo />

                <div className="flex flex-row gap-4">
                    <Button title="Work" />
                    <Button title="Studio" />
                    <Button title="Contact" />

                </div>

            </div>
        </>
    )
}

export default Navbar