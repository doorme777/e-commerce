import { XMarkIcon } from '@heroicons/react/24/solid'

function OrderCard({
   totalPrice,
   totalProducts,
}) {
    let renderXMarkIcon;
    if (handleDeleteProducts) {
        renderXMarkIcon = <XMarkIcon className='size-6 text-black cursor-pointer' onClick={() => handleDeleteProducts(id)}></XMarkIcon>
    }
    return (
        <div className="flex justify-between items-center px-6 mb-2 border border-black">
            <p>
                <span>01.02.24</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
            </p>
        </div>
    )
}

export default OrderCard;