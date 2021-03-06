// @flow
import { COIN_DECIMAL_LENGTH, toFixedDecimals } from './formatters'

export const adjustDecimalAmountForTokenTransfer = (value: number | string) =>
  parseFloat(toFixedDecimals(value, COIN_DECIMAL_LENGTH)) * 10 ** COIN_DECIMAL_LENGTH
