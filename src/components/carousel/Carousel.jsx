import React, { Children, cloneElement, useEffect, useRef, useState } from 'react'
import './Carousel.css'

function Carousel({children}) {

    const [items, setItems] = useState([])
    const [offset, setOffset] = useState(0)
    const [offSetWidth, setOffSetWidth] = useState()
    const ref = useRef()

    console.log(items.length)

    const handleLeft = () => {
        setOffset((currentOffset) => {
            if(currentOffset >= 1) {
                const newOffset = currentOffset - 1
                return newOffset
            } else {
                return (items.length - 1)
            }
        })
    }

    const handleRight = () => {
        setOffset((currentOffset) => {
            if((items.length) > (currentOffset + 1)) {
                const newOffset = currentOffset + 1
                return newOffset
            } else {
                return 0
            }
        })
    }

    useEffect(() => {
        setItems(
            Children.map(children, child => {
                return cloneElement(child)
            })
        )
        setOffSetWidth(ref.current.offsetWidth)
    }, [])

  return (
    <div className='main-container'>
        <button className='btn btn-left' onClick={handleLeft}></button>
        <button className='btn btn-right' onClick={handleRight}></button>
        <div className='window'>
            <div 
                ref={ref}
                className='items'
                style={{
                    transform: `translateX(${(offSetWidth) * (-offset)}px)`
                }}    
            >
                {children}
            </div>
        </div>
    </div>
  )
}

export default Carousel