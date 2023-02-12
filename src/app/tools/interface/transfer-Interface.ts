import { AccountTransfer } from './accountTransfer';
export interface  TransferInterface
{
  income: AccountTransfer,
  id: string
  outcome: AccountTransfer,
  transferAmount: number,
  transferReason: string;
  dateTime: Date | number;
  state: true  | false;
  deletedAt: Date | number
}
