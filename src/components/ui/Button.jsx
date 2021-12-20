import { armooniaClass } from './common'

const Button = (props) => {

    const { className } = props
    const properties = { ...props }
    delete properties.className

    return (
        <button
            className={armooniaClass(className)}
            {...properties}
        />
    )
}

export default Button
