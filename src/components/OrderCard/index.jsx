import { XMarkIcon } from '@heroicons/react/24/solid'

function OrderCard(props) {
    const {
        id,
        title,
        imageUrl,
        price,
        handleDeleteProducts,
    } = props;
    let renderXMarkIcon;
    if (handleDeleteProducts) {
        renderXMarkIcon = <XMarkIcon className='size-6 text-black cursor-pointer' onClick={() => handleDeleteProducts(id)}></XMarkIcon>
    }

    return (
        <div className="flex justify-between items-center px-6 mb-2">
            <div 
            className='flex items-center gap-2'>
                <figure 
                className='size-20'>
                    <img 
                    className="size-full rounded-lg object-cover"
                    src={imageUrl} 
                    alt={title} />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex gap-1'>
                <p className='text-lg font-medium'>${price}</p>
                {renderXMarkIcon}
            </div>
        </div>
    )
}

export default OrderCard;