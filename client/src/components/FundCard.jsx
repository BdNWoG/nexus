import React from 'react'

import { tagType, thirdweb } from '../assets'
import { daysLeft } from '../utils'

const FundCard = ({
    owner, title, description, target, deadline, amountCollected, image, handleClick
}) => {
    const remainingDays = daysLeft(deadline)

    return (
        <div>FundCard</div>
    )
}

export default FundCard