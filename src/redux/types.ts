import { Address, Token } from '../config/constants/types'
import { BigNumber } from 'bignumber.js'
import tokens from '../config/constants/tokens'
import { BIG_ZERO } from '../utils/bigNumber'
import artists from '../config/constants/artists'

export interface UserInfo {
  paidUnlockFee: boolean,
  rugDeposited: BigNumber,
  tokenWithdrawalDate: number,
  nftRevivalDate: number,
  amount: BigNumber,
  pendingZombie: BigNumber
}

export interface PoolInfo {
  lpToken: string,
  allocPoint: number,
  unlockFee: BigNumber,
  minimumStake: BigNumber,
  totalStakingTokenStaked: BigNumber,
  withdrawCooldown: number,
  nftRevivalTime: number,
}

export interface TombPoolInfo {
  allocPoint: BigNumber,
  totalStaked: BigNumber,
  minimumStake: BigNumber,
  lpTotalSupply: BigNumber,
  reserves: [BigNumber, BigNumber],
}

export interface TombUserInfo {
  amount: BigNumber,
  tokenWithdrawalDate: number
  lpAllowance: BigNumber,
  pendingZombie: BigNumber
}

export interface TombOverlayPoolInfo {
  poolId: number,
  isEnabled: boolean,
  mintingTime: BigNumber
}

export interface TombOverlayUserInfo {
  nextNftMintDate: BigNumber,
  isMinting: boolean,
  randomNumber: number
}

export interface SpawningPoolInfo {
  rewardPerBlock: BigNumber,
  unlockFee: BigNumber,
  minimumStake: BigNumber,
  totalZombieStaked: BigNumber,
  withdrawCooldown: number,
  nftRevivalTime: number,
}

export interface SpawningUserInfo {
  paidUnlockFee: boolean,
  tokenWithdrawalDate: number,
  nftRevivalDate: number,
  amount: BigNumber,
  pendingReward: BigNumber,
  zombieAllowance: BigNumber,
}

export interface Bid {
  id: number,
  bidder: number,
  amount: Bid[],
}

export interface AuctionInfo {
  lastBidId: number,
  bids: Bid[],
  endDate: number,
  finalized: boolean,
  unlockFeeInBnb?: BigNumber
}

export interface AuctionUserInfo {
  bid: BigNumber,
  paidUnlockFee?: boolean
}

export interface NftUserInfo {
  ownedIds: number[],
}

export interface Artist {
  name: string,
  twitter?: string,
  instagram?: string,
}

export interface Grave {
  pid: number,
  name: string,
  subtitle: string,
  path: string,
  type: string,
  withdrawalCooldown: string,
  nftRevivalTime: string,
  isNew?: boolean,
  isEnding?: boolean,
  isClosed?: boolean,
  endDate?: number,
  latestEntryDate?: string,
  startingDate?: number,
  requiresNft?: boolean,
  requiredNftPath?: string,
  nft?: string,
  nftConverterPid?: number,
  graveNftToken?: string,
  rug: Token,
  artist: Artist,
  pcsVersion: string,
  stakingToken: string,
  liquidityDetails: string,
  userInfo: UserInfo,
  poolInfo: PoolInfo,
  rarity: string,
  isFeatured?: boolean
  isRetired?: boolean

}

export interface Tomb {
  id: number,
  pid: number,
  name: string,
  withdrawalCooldown: string,
  token: Token,
  quoteToken: Token,
  exchange: string,
  lpAddress: Address,
  notNativeDex?: boolean,
  isNew?: boolean,
  userInfo: TombUserInfo,
  poolInfo: TombPoolInfo,
}

export interface TombOverlay {
  pid: number,
  poolId: number,
  name: string,
  mintingTime: string,
  subtitle_common: string,
  subtitle_uncommon: string,
  subtitle_rare: string,
  subtitle_legendary: string,
  path_common: string,
  path_uncommon: string,
  path_rare: string,
  path_legendary: string,
  type_common: string,
  type_uncommon: string,
  type_rare: string,
  type_legendary: string,
  artist_common: Artist,
  artist_uncommon: Artist,
  artist_rare: Artist,
  artist_legendary: Artist,
  userInfo: TombOverlayUserInfo,
  poolInfo: TombOverlayPoolInfo
}

export interface SpawningPool {
  id: number,
  name: string,
  subtitle: string,
  path: string,
  type: string,
  address: Address,
  project: any,
  endBlock: number,
  withdrawalCooldown: string,
  nftRevivalTime: string,
  isNew: boolean,
  rewardToken: Token,
  rewardTokenId?: string,
  rewardTokenBnbLp?: string,
  bnbLpTokenIndex?: number,
  artist: Artist,
  pcsVersion: string,
  stakingToken: string,
  liquidityDetails: string,
  color?: string,
  tokenLogoFormat?: string,
  userInfo: SpawningUserInfo,
  poolInfo: SpawningPoolInfo,
}

export interface Auction {
  id: number,
  aid: number,
  prize: string,
  prizeSymbol: string,
  isFinished: boolean,
  bidToken?: string,
  version: string,
  exchange?: string,
  path: string,
  prizeDescription: string,
  startingBid: number,
  bt?: string,
  artist: Artist,
  token0?: string,
  token1?: string,
  end: number,
  additionalDetails?: any,
  userInfo: AuctionUserInfo,
  auctionInfo: AuctionInfo,
}

export interface Nft {
  id: number,
  name: string,
  description: string,
  symbol: string,
  address: string,
  totalSupply: BigNumber,
  path: string,
  type: string,
  rarity: string,
  userInfo: NftUserInfo
}