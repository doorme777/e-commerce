import { ChevronRightIcon } from '@heroicons/react/24/solid'

function OrderCard({
    totalPrice,
    totalProducts,
}) {    
    return (
        <div className='flex justify-between items-center px-6 mb-2 border border-black rounded-lg p-4 w-80'>
            <div className='flex justify-between w-full'>
                <p>
                    <span className='font-light'>01.02.24</span>
                    <span className='font-light'>{totalProducts} articles</span>
                </p>
                <p className='flex items-center gap-2'>
                <span className='font-medium text-2xl'>${totalPrice}</span>
                <ChevronRightIcon className='size-6 text-black cursor-pointer' />
                </p>
            </div>
        </div>
    )
}

export default OrderCard;