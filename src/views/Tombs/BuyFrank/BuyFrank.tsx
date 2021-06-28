import React, { useState } from 'react'
import { useModal } from '@rug-zombie-libs/uikit';
import ModalInput from 'components/ModalInput/ModalInput';
import { format } from 'date-fns';


interface Details {
  id: number,
  name: string,
  withdrawalCooldown: string,
  artist?: any,
  stakingToken: any,
  pid: number,
  result: any,
  poolInfo: any,
  pendingZombie: any
}

interface BuyFrankProps {
  details: Details
}

const BuyFrank: React.FC<BuyFrankProps> = ({ details: { result: { tokenWithdrawalDate, nftRevivalDate, amount } }, details }) => {

  const currentDate = Math.floor(Date.now() / 1000);
  const [tokenTimer, setTokenTimer] = useState(parseInt(tokenWithdrawalDate) - currentDate);

  const [onPresent1] = useModal(<ModalInput inputTitle="Stake $ZMBE" />);
  return (


    amount !== "0" ?
      <div className="frank-card">
        <div className="space-between">
          {currentDate >= parseInt(tokenWithdrawalDate) ?
            <span className="total-earned text-shadow">No Withdraw Fees</span> :
            <div>
              <div className="small-text">
                <span className="white-color">5% Withdraw fee is active:</span>
              </div>
              <span className="total-earned text-shadow">
                {format(tokenTimer, 'HH:mm:ss')}</span>
            </div>}
        </div>
      </div> :
      <div className="frank-card">
        <div className="small-text">
          <span className="white-color">Buy Zombie</span>
        </div>
        <button onKeyDown={onPresent1} onClick={onPresent1} className="btn w-100" type="button">Buy with FTM</button>
      </div>
  )
}

export default BuyFrank