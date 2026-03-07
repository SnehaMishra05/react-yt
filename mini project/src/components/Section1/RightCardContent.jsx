
const RightCardContent = ({ id, color, tag, description }) => {
    // display description passed from parent
    return (
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>{id + 1}</h2>
            <div>
                <p className='text-shadow-2xs text-xl leading-relaxed text-white mb-14'>{description}</p>
                <div className='flex justify-between'>
                    <button style={{ backgroundColor: color }} className='text-white font-medium px-8 py-2 rounded-full cursor-pointer'>{tag}</button>
                    <button className='text-white font-bold px-3 py-2 rounded-full cursor-pointer text-2xl'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent