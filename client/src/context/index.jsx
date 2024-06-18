import React, { createContext, useContext } from 'react'

import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react'
import { ethers } from 'ethers'

const StateContext = createContext()

export const StateContextProvider = ({ children }) => {
    const { contract } = useContract('0x067079d53CFf3D6d119E06a835AC372F905fBfCe')
    const { mutateAsync: createCampaign } = useContractWrite(contract, 'createCampaign') 

    const address = useAddress()
    const connect = useMetamask()

    const publishCampaign = async (form) => {
        try {
            const data = await createCampaign({
                args:[
                    address, // owner
                    form.title, // title
                    form.description, // description
                    form.target, // target
                    new Date(form.deadline).getTime(), // deadline
                    form.image // image
                ]
            })

            console.log('contract call success', data)
        } catch (error) {
            console.log('contract call failure', error)
        }
    }

    const getCampaigns = async () => {
        const campaigns = await contract.call('getCampaigns')
        
        const parsedCampaigns = campaigns.map((campaign, i) => ({
            owner: campaign.owner,
            title: campaign.title,
            description: campaign.description,
            target: ethers.utils.formatEther(campaign.target.toString()),
            deadline: campaign.deadline.toNumber(),
            amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
            image: campaign.image,
            pId: i
        }))

        return parsedCampaigns;
    }

    return (
        <StateContext.Provider value={{ address, contract, connect, createCampaign: publishCampaign, getCampaigns }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext) 