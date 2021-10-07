import Nav from './Nav'
import Header from './Header'
import ProductCard from './ProductCard'

const arr = []
for (let index = 0; index < 100; index++) {
    arr.push("XD x" + index)
}


const Main = () => {
    return (
        <div className='flex flex-col md:flex-row w-full h-full'>
            <div className='flex flex-col w-full h-full overflow-x-hidden overflow-y-hidden'>
                <Header />
                <div className='flex flex-wrap w-full h-full justify-center p-6 gap-8 overflow-x-hidden overflow-y-auto'>
                    {
                        arr.map((e, index) => <ProductCard key={index}/>)
                    }
                </div>
            </div>
            <Nav />
        </div>
    )
}

export default Main