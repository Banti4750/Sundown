

const Button = (props: any) => {
    return (
        <>
            <button className="relative overflow-hidden border border-stone-400 text-black px-5 py-3 rounded-3xl font-bold hover:text-white group">
                <span className="relative z-10">{props.title}</span>
                <div className="absolute inset-0 bg-black scale-y-0 origin-bottom transition-transform duration-300 ease-linear group-hover:scale-y-100"></div>
            </button>

        </>
    )
}

export default Button