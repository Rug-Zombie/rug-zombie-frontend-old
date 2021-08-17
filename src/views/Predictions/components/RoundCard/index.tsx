import React, { useEffect } from 'react'
import { BigNumber } from 'bignumber.js'
import OutbidRoundCard from './OutbidRoundCard'
import LeaderRoundCard from './LeaderRoundCard'

interface RoundCardProps {
  bid: any,
  lastBidId: number,
  id: number,
  bidId: number,
}

const RoundCard: React.FC<RoundCardProps> = ({ bid, lastBidId, id, bidId }) => {
  // Live round
  if (id === lastBidId) {
    return (
      <LeaderRoundCard
        bid={bid}
        id={bidId}
      />
    )
  }

  // Past rounds
  return (
    <OutbidRoundCard
      bid={bid}
      id={bidId}
    />
  )
}

export default RoundCard
