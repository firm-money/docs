---
sidebar_position: 1
---


# General

### What is Firm Money?
Firm Money is a decentralized borrowing protocol built for the [Status Network](https://status.network/) L2 chain. Users deposit ETH and Status Network core tokens as collateral and mint **$USF**, a USD-pegged stablecoin, at an interest rate they choose. Firm Money is a friendly fork of [Liquity V2](https://www.liquity.org).

Using Firm Money earns [Karma](https://status.network/), the Status Network reputation and governance token.

### The main use-cases for Firm Money are:

- Borrow USF against ETH, wstETH, rETH, SNT, and other Status Network native assets
- 1-click multiply exposure to collateral assets
- Earn yield by depositing USF in the stability pool or farming elsewhere
- Unlock capital productivity for Status Network native assets

To understand Firm Money it's helpful to understand [Liquity](https://www.liquity.org)


:::tip
**Liquity V1** was a lending protocol that allowed users to take 0% interest loans on their ETH to receive $LUSD. Over the past 4 years it proved itself resilient in a variety of market conditions.

**Liquity V2** is the next iteration of borrowing, allowing users to set their own interest rate, and use more tokens as collateral.
:::


### Liquity V1 vs Liquity V2
| Similarities | Differences  |
|--|--|
|Decentralized  |  User-set interest rates – more control over your borrowing cost. |
|Rigorous Security|Improved redemption mechanism (lowest borrowing rate is redeemed first)|
|Redemption of stablecoins for underlying collateral maintains the $1.00 peg no matter what| Troves are now transferable|
|ETH Mainnet Only|V1's code was free and open-sourced (FOSS), while with V2, Liquity will have its code set as a business source license (BUSL)|

### Firm Money vs Liquity V2
| Key Differences | Description  |
|--|--|
| **Blockchain** | [Status Network](https://status.network/) L2 vs Ethereum Mainnet |
| **Stablecoin** | $USF vs $BOLD |
| **Collateral Types** | ETH, wstETH, rETH, SNT, LINEA, sGUSD vs ETH, wstETH, rETH (Liquity V2) |
| **No Gas Costs** | Transactions on Status Network are gasless |
| **Governance** | More protocol parameters are governable: fees, LTV requirements, minimum debt, minimum interest rate, ability to add/remove collateral branches |
| **Security Features** | Additional security features including debt limits per collateral type |
| **Karma Integration** | Using Firm Money earns Karma, the Status L2 reputation and governance token |

## Does Firm Money have governance?
Firm Money has governance that can manage specific protocol parameters including:
- Distributing Protocol Liquidity Incentives (PIL)
- Directing protocol revenue to external initiatives
- Managing fees, LTV requirements, and minimum debt thresholds
- Updating collateral debt limits
- Adding or removing collateral branches via the Collateral Registry

Governance operates with a manual incentive direction system, replacing Liquity's original governance model.


## Other Helpful Resources:

Status Network:
https://status.network/

Firm Money Github:
https://github.com/firm-money/firm

Nerite (protocol home):
https://www.nerite.org/
