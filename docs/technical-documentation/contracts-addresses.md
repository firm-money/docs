---
sidebar_position: 1

---

# Firm Money Protocol Contracts

**Network:** Status Network (coming soon)  

:::info
Contract addresses will be updated here once the Status Network deployment is live. All addresses below are placeholders.
:::

## Governance

| Contract | Address | Description |
|----------|---------|-------------|
| Governance Safe | `0x0000000000000000000000000000000000000000` | Multisig controlling protocol parameters and receiving fees |

## Core Contracts

These contracts are shared across all collateral branches:

| Contract | Address | Description |
|----------|---------|-------------|
| USF Stablecoin | `0x0000000000000000000000000000000000000000` | USF stablecoin token |
| CollateralRegistry | `0x0000000000000000000000000000000000000000` | Registry for all collateral types |
| HintHelpers | `0x0000000000000000000000000000000000000000` | Helper contract for trove operations |
| MultiTroveGetter | `0x0000000000000000000000000000000000000000` | Batch trove data retrieval |

## Collateral Branches

### Branch 0: ETH

| Contract | Address | Description |
|----------|---------|-------------|
| Token Address | `0x0000000000000000000000000000000000000000` | WETH token address |
| AddressesRegistry | `0x0000000000000000000000000000000000000000` | Branch-specific address registry |
| BorrowerOperations | `0x0000000000000000000000000000000000000000` | Trove management operations |
| TroveManager | `0x0000000000000000000000000000000000000000` | Core trove management logic |
| TroveNFT | `0x0000000000000000000000000000000000000000` | Trove ownership NFTs |
| StabilityPool | `0x0000000000000000000000000000000000000000` | Stability pool for liquidations |
| ActivePool | `0x0000000000000000000000000000000000000000` | Active collateral pool |
| DefaultPool | `0x0000000000000000000000000000000000000000` | Default collateral pool |
| GasPool | `0x0000000000000000000000000000000000000000` | Gas compensation pool |
| CollSurplusPool | `0x0000000000000000000000000000000000000000` | Collateral surplus pool |
| SortedTroves | `0x0000000000000000000000000000000000000000` | Sorted trove data structure |
| PriceFeed | `0x0000000000000000000000000000000000000000` | ETH price feed |

### Branch 1: wstETH

| Contract | Address | Description |
|----------|---------|-------------|
| Token Address | `0x0000000000000000000000000000000000000000` | wstETH token address |
| AddressesRegistry | `0x0000000000000000000000000000000000000000` | Branch-specific address registry |
| BorrowerOperations | `0x0000000000000000000000000000000000000000` | Trove management operations |
| TroveManager | `0x0000000000000000000000000000000000000000` | Core trove management logic |
| TroveNFT | `0x0000000000000000000000000000000000000000` | Trove ownership NFTs |
| StabilityPool | `0x0000000000000000000000000000000000000000` | Stability pool for liquidations |
| ActivePool | `0x0000000000000000000000000000000000000000` | Active collateral pool |
| DefaultPool | `0x0000000000000000000000000000000000000000` | Default collateral pool |
| GasPool | `0x0000000000000000000000000000000000000000` | Gas compensation pool |
| CollSurplusPool | `0x0000000000000000000000000000000000000000` | Collateral surplus pool |
| SortedTroves | `0x0000000000000000000000000000000000000000` | Sorted trove data structure |
| PriceFeed | `0x0000000000000000000000000000000000000000` | wstETH price feed |

### Branch 2: rETH

| Contract | Address | Description |
|----------|---------|-------------|
| Token Address | `0x0000000000000000000000000000000000000000` | rETH token address |
| AddressesRegistry | `0x0000000000000000000000000000000000000000` | Branch-specific address registry |
| BorrowerOperations | `0x0000000000000000000000000000000000000000` | Trove management operations |
| TroveManager | `0x0000000000000000000000000000000000000000` | Core trove management logic |
| TroveNFT | `0x0000000000000000000000000000000000000000` | Trove ownership NFTs |
| StabilityPool | `0x0000000000000000000000000000000000000000` | Stability pool for liquidations |
| ActivePool | `0x0000000000000000000000000000000000000000` | Active collateral pool |
| DefaultPool | `0x0000000000000000000000000000000000000000` | Default collateral pool |
| GasPool | `0x0000000000000000000000000000000000000000` | Gas compensation pool |
| CollSurplusPool | `0x0000000000000000000000000000000000000000` | Collateral surplus pool |
| SortedTroves | `0x0000000000000000000000000000000000000000` | Sorted trove data structure |
| PriceFeed | `0x0000000000000000000000000000000000000000` | rETH price feed |

### Branch 3: SNT

| Contract | Address | Description |
|----------|---------|-------------|
| Token Address | `0x0000000000000000000000000000000000000000` | SNT token address |
| AddressesRegistry | `0x0000000000000000000000000000000000000000` | Branch-specific address registry |
| BorrowerOperations | `0x0000000000000000000000000000000000000000` | Trove management operations |
| TroveManager | `0x0000000000000000000000000000000000000000` | Core trove management logic |
| TroveNFT | `0x0000000000000000000000000000000000000000` | Trove ownership NFTs |
| StabilityPool | `0x0000000000000000000000000000000000000000` | Stability pool for liquidations |
| ActivePool | `0x0000000000000000000000000000000000000000` | Active collateral pool |
| DefaultPool | `0x0000000000000000000000000000000000000000` | Default collateral pool |
| GasPool | `0x0000000000000000000000000000000000000000` | Gas compensation pool |
| CollSurplusPool | `0x0000000000000000000000000000000000000000` | Collateral surplus pool |
| SortedTroves | `0x0000000000000000000000000000000000000000` | Sorted trove data structure |
| PriceFeed | `0x0000000000000000000000000000000000000000` | SNT price feed |

### Branch 4: LINEA (coming soon)

| Contract | Address | Description |
|----------|---------|-------------|
| Token Address | `0x0000000000000000000000000000000000000000` | LINEA token address |
| *All branch contracts* | `0x0000000000000000000000000000000000000000` | Coming soon |

### Branch 5: sGUSD (coming soon)

| Contract | Address | Description |
|----------|---------|-------------|
| Token Address | `0x0000000000000000000000000000000000000000` | sGUSD token address |
| *All branch contracts* | `0x0000000000000000000000000000000000000000` | Coming soon |

## Notes

- All addresses are placeholders and will be updated once the Status Network deployment is live.
- Each collateral branch operates independently with its own set of contracts, isolating risks.
- Core contracts (USF Stablecoin, CollateralRegistry, HintHelpers, MultiTroveGetter) are shared across all branches.
- Price feeds provide real-time pricing data for each collateral type with several safeguards built in.
