

const Button = (props) => {
    return (
        <button
            className='p-1 shadow-md bg-primary text-sm md:text-lg font-montserrat text-secondary font-black hover:opacity-70 focus:opacity-70 focus:border focus:border-quaternary focus:outline-none'
            {...props}
        />
    )
}

export default Button
