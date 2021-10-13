import logo from '../../assets/images/logo.png'

const Logo = (props) => {

    const { className } = props

    return (
        <img
            className={className}
            src={logo}
            alt=''
        />
    )
}

export default Logo
