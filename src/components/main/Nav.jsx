import Logo from '../ui/Logo'
import aretes from '../../assets/images/arete.png'
import collares from '../../assets/images/collar.png'
import pulseras from '../../assets/images/pulsera.png'
import gaferos from '../../assets/images/gafero.png'
import tobilleras from '../../assets/images/tobillera.png'
import earcuffs from '../../assets/images/earcuff.png'

const Category = (props) => {
    return (
        <div className='flex-row justify-center md:justify-evenly hover:underline'>
            <img src={props.url} alt=''
                className='flex w-14 md:w-20 h-14 md:h-20' />
            <span className='flex md:justify-center font-montserrat text-gray-800 font-black'>
                <p>{props.name}</p>
            </span>

        </div>



    )
}

const Nav = () => {
    return (
        <div className='flex flex-row md:flex-col flex-shrink-0 order-last md:order-first w-full md:w-32 h-24 md:h-full bg-primary shadow-2xl'>
            <div className='hidden md:flex w-full h-36 justify-center bg-gold'>
                <Logo className='flex w-full object-contain p-2' />
            </div>
            <div className='flex md:flex-col p-2 md:p-0 gap-4 md:gap-0 w-full justify-center md:items-center overflow-x-auto md:overflow-x-hidden'>
                <Category name="Aretes" url={aretes}/>
                <Category name="Earcuff" url={earcuffs}/>
                <Category name="Collares" url={collares}/>
                <Category name="Pulseras" url={pulseras}/>
                <Category name="Tobilleras" url={tobilleras}/>
                <Category name="Gaferos" url={gaferos}/>
            </div>
        </div>
    )
}

export default Nav
