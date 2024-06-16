import React from 'react'

const CustomButton = ({ 
    btnType, title, handleClick, styles 
}) => {
    return (
        <button type={btnType} className={`${styles} font-epilogue font-semibold leading-[26px] test-[16px] text-white min-h-[52px] px-4 rounded-[10px]`} onClick={handleClick}>
            {title}
        </button>
    )
}

export default CustomButton