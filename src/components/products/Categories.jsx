import aretes from '../../assets/images/arete.png'
import collares from '../../assets/images/collar.png'
import pulseras from '../../assets/images/pulsera.png'
import gaferos from '../../assets/images/gafero.png'
import tobilleras from '../../assets/images/tobillera.png'
import earcuffs from '../../assets/images/earcuff.png'
import facemask from '../../assets/images/tapabocas.png'
import clsx from 'clsx'

const Category = (props) => {
    return (
        <div
            className={clsx(
                'flex',
                'flex-col',
                'items-center',
                'hover:underline',
                'duration-200 ease-in-out transform hover:scale-110'
            )}
        >
            <img
                className={clsx(
                    'flex',
                    'w-14 md:w-12 lg:w-12',
                    'h-14 md:h-12 lg:h-12',
                    'rounded-full',
                    'hover:opacity-70',
                    'border-2 border-transparent',
                    'hover:border-primary'
                )}
                src={props.url}
                alt=''
            />
            <span
                className={clsx(
                    'flex',
                    'lg:justify-center',
                    'font-montserrat',
                    'text-gray-800',
                    'font-black'
                )}
            >
                <p>{props.name}</p>
            </span>
        </div >
    )
}

const Categories = () => {
    return (
        <div
            className={clsx(
                'flex',
                'flex-row md:flex-col',
                'flex-shrink-0',
                'order-last md:order-first',
                'w-full md:w-32 h-24 md:h-full',
                'bg-secondary',
                'rounded',
                'p-3',
                'shadow-2xl'
            )}
        >
            <div
                className={clsx(
                    'flex',
                    'md:flex-col',
                    'p-2 md:p-3',
                    'gap-4 md:gap-0',
                    'w-full',
                    'justify-center',
                    'md:items-center',
                    'overflow-x-auto',
                    'md:overflow-x-hidden'
                )}
            >
                <Category name='Aretes' url={aretes} />
                <Category name='Earcuff' url={earcuffs} />
                <Category name='Collares' url={collares} />
                <Category name='Pulseras' url={pulseras} />
                <Category name='Tobilleras' url={tobilleras} />
                <Category name='Gaferos' url={gaferos} />
                <Category name='Tapabocas' url={facemask} />
            </div>
        </div >
    )
}

export default Categories