const Input = (props) => {
    return (
        <input
            className='
            px-1 md:px-2 py-1 
            appearance-none 
            outline-none 
            border border-green-700 
            hover:bg-black hover:bg-opacity-30
            focus:bg-black focus:bg-opacity-30 
            rounded-sm
            '
            {...props}
        />
    )
}

export default Input