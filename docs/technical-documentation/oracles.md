---
sidebar_position: 2
---

# Oracles

Firm Money uses Tellor oracles as its price feed solution. Tellor provides decentralized, censorship-resistant price data with frequent updates to ensure accurate collateral valuations and liquidation calculations.

To learn more about Tellor check out this website here: https://tellor.io/

## Oracle Addresses

:::info
Oracle addresses will be updated here once the Status Network deployment is live. All addresses below are placeholders.
:::

All oracles use a shared DataBank address: `0x0000000000000000000000000000000000000000`

| Oracle Type | Address | Description |
|-------------|---------|-------------|
| ETH/USD | `0x0000000000000000000000000000000000000000` | Tellor ETH/USD oracle for ETH collateral |
| wstETH/USD | `0x0000000000000000000000000000000000000000` | Tellor wstETH/USD oracle for wstETH collateral |
| rETH/USD | `0x0000000000000000000000000000000000000000` | Tellor rETH/USD oracle for rETH collateral |
| SNT/USD | `0x0000000000000000000000000000000000000000` | Tellor SNT/USD oracle for SNT collateral |
| LINEA/USD | `0x0000000000000000000000000000000000000000` | Tellor LINEA/USD oracle for LINEA collateral |
| sGUSD/USD | `0x0000000000000000000000000000000000000000` | Tellor sGUSD/USD oracle for sGUSD collateral |

## Staleness Thresholds
:::tip
All oracles have a 5-hour staleness threshold (4-hour heartbeat + 1-hour buffer) to ensure price feeds remain current and reliable.
:::

## Oracle Update Frequency

- **Heartbeat**: 4 hours (oracles update at least every 4 hours)
- **Price Threshold**: 1.00% for ETH/USD, 2.00% for all other feeds (triggers update if price moves beyond threshold)

## Oracle Provider

- **Tellor**: Decentralized oracle network providing censorship-resistant price feeds for all Firm Money collaterals

## Usage

These oracles are used as part of the PriceFeeds in the Firm Money protocol for:
- Collateral valuation
- Liquidation calculations
- Risk management
- Price stability monitoring
