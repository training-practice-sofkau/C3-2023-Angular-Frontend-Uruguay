import { AccountInterfaec } from './account-interface';
import { AccountTransfer } from './accountTransfer';
import { NewTransferInterface } from './newTransernterface';
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
