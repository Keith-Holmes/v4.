/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import {
  VaultBatchTransactionAccountCloseArgs,
  vaultBatchTransactionAccountCloseArgsBeet,
} from '../types/VaultBatchTransactionAccountCloseArgs'

/**
 * @category Instructions
 * @category VaultBatchTransactionAccountClose
 * @category generated
 */
export type VaultBatchTransactionAccountCloseInstructionArgs = {
  args: VaultBatchTransactionAccountCloseArgs
}
/**
 * @category Instructions
 * @category VaultBatchTransactionAccountClose
 * @category generated
 */
export const vaultBatchTransactionAccountCloseStruct = new beet.BeetArgsStruct<
  VaultBatchTransactionAccountCloseInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['args', vaultBatchTransactionAccountCloseArgsBeet],
  ],
  'VaultBatchTransactionAccountCloseInstructionArgs'
)
/**
 * Accounts required by the _vaultBatchTransactionAccountClose_ instruction
 *
 * @property [] multisig
 * @property [] proposal
 * @property [] batch
 * @property [_writable_] transaction
 * @property [_writable_] rentCollector
 * @category Instructions
 * @category VaultBatchTransactionAccountClose
 * @category generated
 */
export type VaultBatchTransactionAccountCloseInstructionAccounts = {
  multisig: web3.PublicKey
  proposal: web3.PublicKey
  batch: web3.PublicKey
  transaction: web3.PublicKey
  rentCollector: web3.PublicKey
  systemProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const vaultBatchTransactionAccountCloseInstructionDiscriminator = [
  134, 18, 19, 106, 129, 68, 97, 247,
]

/**
 * Creates a _VaultBatchTransactionAccountClose_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category VaultBatchTransactionAccountClose
 * @category generated
 */
export function createVaultBatchTransactionAccountCloseInstruction(
  accounts: VaultBatchTransactionAccountCloseInstructionAccounts,
  args: VaultBatchTransactionAccountCloseInstructionArgs,
  programId = new web3.PublicKey('SQDS4ep65T869zMMBKyuUq6aD6EgTu8psMjkvj52pCf')
) {
  const [data] = vaultBatchTransactionAccountCloseStruct.serialize({
    instructionDiscriminator:
      vaultBatchTransactionAccountCloseInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.multisig,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.proposal,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.batch,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.transaction,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.rentCollector,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
