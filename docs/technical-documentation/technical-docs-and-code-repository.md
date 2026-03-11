---
sidebar_position: 1
---

# Technical Docs & Code

Technical documentation and code repository information for developers.

## Primary Core Repository

https://github.com/firm-money/firm/

Contains the core contracts and libraries for the Firm Money protocol. Also includes the front end and everything you need to run your own instance of the app.

The README has more design and architecture information.

## Tech Spec Changes from Liquity V2

For a full breakdown of all technical changes, see the [Changes from Liquity V2](./changes-from-liquity.md) page.

### Delegation
`ActivePool.sol` now has a `delegateTokens` function. Any tokens can be delegated to the `delegate` role. The role can be updated by `governance`, which is the DAO of NERI holders. Anyone can call the delegate function safely since it always delegates to the `delegate` role.

`_mint`, `_burn`, `_transfer` functions have been replaced with `selfMint`, `selfBurn`, and `selfTransfer` from the [Superfluid SuperToken](https://github.com/superfluid-finance/protocol-monorepo/blob/dev/packages/ethereum-contracts/contracts/superfluid/SuperToken.sol).

The USF token is no longer a standalone ERC-20, but rather a UUPS proxy initialized into an ERC-20. Many deployment changes as a result.

:::caution Developer Note
Do not use the Foundry `deal()` cheatcode with the USF token in testing, since the storage layout differs from what Foundry expects for a standard ERC-20.
:::

ERC-20 imports on the stablecoin contract are removed in favor of using UUPS proxy ERC-20 imported by Superfluid. It uses the same OpenZeppelin ERC-20 implementation.

Also remaps OZ in many places because of circular dependencies.

### More Collaterals and Debt Limits
`BorrowerOperations` handles minting new USF. Debt can be minted in `withdrawBold`, `_openTrove` (which is used in the batch manager and elsewhere too, so be careful), and `_moveTokensFromAdjustment`. Simple debt limit is just a `uint256` stored in the `TroveManager` of each branch, and accessible to the `CollateralRegistry` via the index of the collateral. Getters and setters are added.

Does not handle the situation where interest accrued goes over the debt limit.

Debt limit can be raised by `governance` by a max factor of 2 at a time, by calling the `CollateralRegistry` which then calls the `TroveManager` for that collateral branch.

Debt limit can be lowered to any amount at any time (still must use the timelock).
