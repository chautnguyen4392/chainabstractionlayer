import BigNumber from 'bignumber.js'
import { SwapProvider, SwapParams } from './swap'
import { ChainProvider, SendOptions } from './chain'
import { NftProvider } from './nft'
import { WalletProvider } from './wallet'

import { FeeProvider, FeeDetails, FeeDetail, EIP1559Fee } from './fees'
import { Transaction, TxStatus } from './transaction'
import { Block } from './block'
import { Address } from './address'
import { Network } from './network'

import * as bitcoin from './bitcoin'
import * as ethereum from './ethereum'
import * as near from './near'
import * as terra from './terra'
import * as solana from './solana'
import * as yacoin from './yacoin'

interface IClient {
  /**
   * Helper method that returns method from a provider.
   * @param {!string} method - Name of the method to look for in the provider stack
   * @param {object} [requestor] - If provided, it returns method from providers only
   *  above the requestor in the stack.
   * @return {function} Returns method from provider instance associated with the requested method
   */
  getMethod(method: string, requestor?: any): () => any

  chain: ChainProvider
  swap: SwapProvider
  wallet: WalletProvider
}

export {
  IClient,
  SwapProvider,
  ChainProvider,
  NftProvider,
  WalletProvider,
  FeeProvider,
  EIP1559Fee,
  BigNumber,
  Transaction,
  TxStatus,
  Block,
  FeeDetails,
  FeeDetail,
  Address,
  Network,
  SendOptions,
  SwapParams,
  bitcoin,
  ethereum,
  near,
  terra,
  solana,
  yacoin
}
