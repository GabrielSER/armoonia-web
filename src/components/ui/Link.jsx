import { Link as RouterLink } from 'react-router-dom'
import { armooniaClass } from './common'

const Link = (props) => {

    const { className } = props
    const properties = { ...props }
    delete properties.className

    return (
        <RouterLink
            className={armooniaClass(className)}
            {...properties}
        />
    )
}

export default Link
