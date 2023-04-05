import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setClearCart, setDecreaseQuantity, setIncreaseQuantity, setRemoveItemFromCart } from '../../app/CartSlice'

const CartItem = ({ item: { id, title, text, img, color, shadow, cartQuantity, price } }) => {
    const dispatch = useDispatch()
    const onRemoveItem = () => {
        dispatch(setRemoveItemFromCart({ id, title, text, img, color, shadow, cartQuantity, price }))
    }

    const onIncreaseItem = () => {
        dispatch(setIncreaseQuantity({ id, title, text, img, color, shadow, cartQuantity, price }))
    };
    const onDecreaseItem = () => {
        dispatch(setDecreaseQuantity({ id, title, text, img, color, shadow, cartQuantity, price }))
    };

    return (
        <>
            <div className='flex items-center justify-between w-full px-5'>
                <div className='flex items-center gap-5'>
                    <div className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105 transition-all duration-700 ease-in-out grid items-center`}>
                        <img src={img} alt={`img/cart-img-${id}`} className='w-36 h-auto object-fill lg:w-28' />
                    </div>
                    <div className='grid items-center gap-4'>
                        <div className='grid items-center leading-none'>
                            <h1 className='font-medium text-lg text-slate-900 lg:text-sm'>{title}</h1>
                            <p className='text-sm text-slate-800 lg:text-xs'>{text}</p>
                        </div>
                        <div className='flex items-center justify-around w-full'>
                            <button type='button' className='bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90' onClick={onDecreaseItem}> <MinusIcon className='w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]' /> </button>
                            <div className='bg-theme-cart font-medium text-white rounded lg:text-xs w-7 h-6 lg:h-5 lg:w-6 grid items-center justify-items-center'>{cartQuantity}</div>
                            <button type='button' className='bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90' onClick={onIncreaseItem}> <PlusIcon className='w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]' /> </button>
                        </div>
                    </div>
                </div>
                <div className='grid items-center gap-5'>
                    <div className='grid items-center justify-items-center'>
                        <h1 className='text-lg lg:text-base text-slate-900 font-medium'>${price * cartQuantity}</h1>
                    </div>
                    <div>
                        <button type='button' className='bg-theme-cart rounded p-1 lg:p-0.5 grid items-center justify-items-center cursor-pointer ' onClick={onRemoveItem}> <TrashIcon className='w-5 h-5 text-white' /> </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem