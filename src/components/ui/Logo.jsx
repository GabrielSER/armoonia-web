import logo from '../../assets/images/logo.png'

const Logo = (props) => {

    const { className } = props

    return (
        <img
            src={logo}
            alt=''
            className={className}
        />
    )
}

export default Logo
