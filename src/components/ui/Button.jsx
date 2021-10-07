

const Button = (props) => {
    return (
        <button
            className='p-1 shadow-md bg-secondary text-sm md:text-lg font-montserrat text-gray-800 font-black hover:bg-gray-600'
            {...props}
        />
    )
}

export default Button
