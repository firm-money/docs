---
sidebar_position: 6
---

# Collateral Parameters

[Checkout out this blog](https://www.nerite.org/writing/tech-talk-collateral-ratios) on how various collateral ratio systems work.

MCR is the primary requirement for each trove, but there are also overall global requirements for each branch.

| Asset | Initial Debt Limit | CCR_Tag | MCR | SCR | CCR | C_S_dif | Max LTV | Liquidation Penalty |
|-------|-------------------|---------|-----|-----|-----|---------|---------|-------------------|
| ETH | $100,000,000 | ETH | 110 | 110 | 150 | 40 | 90.91% | 5% |
| wstETH | $100,000,000 | LST | 110 | 110 | 160 | 50 | 90.91% | 5% |
| rETH | $100,000,000 | LST | 110 | 110 | 160 | 50 | 90.91% | 5% |
| SNT | $5,000,000 | SNT | 160 | 160 | 185 | 25 | 62.50% | 5% |
| LINEA | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD |
| sGUSD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD |

BCR is MCR + 10% in all cases.


## Debt Limit

For security, the debt limit can be set to 0 by governance, in case of emergency. This would allow only paying back debt, and no new borrowing. Governance can then later increase up to the initial debt limit, or up to 2x the current debt limit.