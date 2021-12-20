import clsx from 'clsx'
import logo from '../../assets/images/logo.png'

const Logo = (props) => {

    const { className } = props

    return (
        <img
            className={clsx(
                'aspect-square object-contain',
                className
            )}
            src={logo}
            alt=''
        />
    )
}

export default Logo
