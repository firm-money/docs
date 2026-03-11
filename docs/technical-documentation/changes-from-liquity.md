---
sidebar_position: 2
---

# Changes from Liquity V2

Firm Money is a friendly fork of Liquity V2 built for [Status Network](https://status.network/), an Ethereum L2. This page documents all technical changes from the base Liquity V2 protocol.

## Overview of Changes

- New collateral types and price feeds for Status Network assets (ETH, wstETH, rETH, SNT, LINEA, sGUSD)
- Stablecoin is **$USF** (not $BOLD)
- Updated parameters for the Status L2 environment (gasless transactions, lower minimum debt)
- Governance-controlled collateral branches and debt limits
- Token delegation via Superfluid SuperToken proxy
- Using Firm Money earns Karma, the Status Network reputation and governance token
- USF liquidity anchors core pairs on Orvex, the native Status Network DEX

## Detailed Technical Changes

### New Collaterals & Price Feeds

Updated price feeds and oracles for these assets on Status Network:
- **ETH** (WETH)
- **wstETH** (Wrapped Staked ETH)
- **rETH** (Rocket Pool ETH)
- **SNT** ([Status Network Token](https://status.network/))
- **LINEA**
- **sGUSD**

Each collateral has its own branch with independent TroveManager, StabilityPool, and PriceFeed contracts, as in base Liquity V2.

### Updated Parameters for Status L2

- **$0 gas deposits** when creating new troves (Status Network is gasless)
- **Lowered minimum debt amount** to $200 (vs $2000 in base Liquity V2)
- Other small parameter tweaks for the L2 environment

### Governance-Controlled Collateral Branches

Ability to **add new collateral branches** using governance. In base Liquity V2, collateral branches are fixed at deployment. Firm Money allows the governance address to register new collateral types via the CollateralRegistry.

### Debt Limits

**Per-branch debt limits** governed by a governance address, adding a safety layer not present in base Liquity V2.

- Each collateral branch has a `debtLimit` stored in its TroveManager
- Debt limit can be **raised by governance by a max factor of 2x per transaction** (can be repeated over multiple transactions)
- Debt limit can be **lowered to any amount** at any time (still must use the timelock)
- Interest accrual is allowed to push debt over the limit — the limit only restricts new debt issuance
- Accessible to the CollateralRegistry via the collateral index

**Centralization risk:** Once the governor is set in CollateralRegistry, there is no function to update this value. A compromised key could block new debt issuance or manipulate limits.

### Token Delegation (ActivePool)

`ActivePool.sol` has a new `delegateTokens` function:
- Any tokens can be delegated to the `delegate` role
- The role can be updated by `governance` (the NERI holder DAO)
- Anyone can safely call the delegate function since it always delegates to the `delegate` role

### USF Token — SuperToken Proxy

The stablecoin (USF) is no longer a standalone ERC-20. It uses a **Superfluid SuperToken UUPS proxy** pattern:

- `_mint`, `_burn`, `_transfer` replaced with `selfMint`, `selfBurn`, `selfTransfer` from the [Superfluid SuperToken](https://github.com/superfluid-finance/protocol-monorepo/blob/dev/packages/ethereum-contracts/contracts/superfluid/SuperToken.sol)
- ERC-20 imports removed in favor of the UUPS proxy ERC-20 from Superfluid (same underlying OpenZeppelin ERC-20 implementation)
- Many deployment changes as a result
- OpenZeppelin remaps in many places due to circular dependencies

:::caution Developer Note
Do not use the Foundry `deal()` cheatcode with the USF token in testing, since the storage layout differs from what Foundry expects for a standard ERC-20.
:::

### Governance Capabilities

Firm Money's governance (NERI holders) can manage:
- Protocol Liquidity Incentives (PIL) distribution
- Protocol revenue direction to external initiatives
- Fee parameters, LTV requirements, minimum debt thresholds
- Collateral debt limits (per-branch)
- Adding or removing collateral branches via CollateralRegistry

This replaces Liquity V2's more limited governance model.

### Status Network Integration

Firm Money is deeply integrated into the [Status Network](https://status.network/) L2 economic engine:
- Unlocks native asset capital productivity (SNT, LINEA, sGUSD)
- USF liquidity anchors core pairs on Orvex, the native DEX
- Using Firm Money earns Karma, the L2 reputation and governance token
- Community governance can boost Firm Money yields with L2 native yield

## What Remains the Same

The core Liquity V2 mechanisms are preserved:

- **Core redemption mechanism** — 1 USF redeems for $1 worth of collateral, minus fees
- **Redemption fee mechanics** — `baseRate` with fee spike and time-based decay
- **User-set interest rates** — Borrowers choose their own annual interest rate
- **Ordered Troves** — Sorted by annual interest rate (low to high)
- **Liquidation mechanisms** — SP offset first, then redistribution to active Troves
- **Stability Pool algorithm** — Same Product-Sum algorithm from Liquity V1/V2
- **Individual overcollateralization** — Each Trove individually overcollateralized
- **Branch-level overcollateralization** — Each branch measured by TCR
- **Troves as NFTs** — Freely transferable
- **Batch and individual delegation** — Interest rate management
- **Collateral branch shutdown** — Under extreme conditions (TCR < SCR or oracle failure)
- **Zombie Troves** — Redemptions leave Troves open, tag as zombie below MIN_DEBT
- **CCR restrictions** — Extra borrowing restrictions when TCR < CCR

## Audit Coverage of Changes

The Firm Money-specific changes have been audited by:
- Multiple internal security reviews (August–September 2025)
- Shred Security (November 2025)
- **Cyfrin** (March 2026) — Focused specifically on the diff from base Liquity V2. See the [Audit Reports page](./audits.md) for details.
