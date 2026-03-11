---
sidebar_position: 3
---


# USF & Earn

### What is USF?

USF is the USD-pegged stablecoin issued by the Firm Money protocol on [Status Network](https://status.network/). It's decentralized, overcollateralized, and backed by a basket of crypto native assets.

USF is a resilient stablecoin by design:

* Only backed by crypto assets (no "real world assets" like US Treasuries)
* Directly redeemable for the underlying assets at any time by anyone permissionlessly
* Can only be created by users depositing more collateral

### What are USF's main benefits compared to other stablecoins?

* USF is backed by ETH, wstETH, rETH, SNT, and other Status Network native assets
* It is always redeemable for the underlying assets, meaning you can always swap it as if worth $1, for the collateral backing it
* USF has native incentives via Protocol Incentivized Liquidity (PIL) directed by governance, ensuring sufficient liquidity for transactions
* USF is native to Status Network L2, built specifically for Status Network's fast, gasless environment
* Using Firm Money earns [Karma](https://status.network/), the Status Network reputation and governance token

### What is USF's peg mechanism?

Firm Money uses Liquity V2's market-driven monetary policy through user-set interest rates to maintain USF's peg and to dynamically respond to situations where the token is above or below $1.00.

When USF trades above $1, borrowers tend to reduce their rates due to lower redemption risk, making borrowing more and holding USF less attractive. This helps correct the price downwards.

When USF trades below $1, arbitrageurs will initiate redemptions to restore the peg. Borrowers' exposure to redemption risk prompts them to increase interest rates, boosting demand for USF (and Earn deposits) and pushing its price upward.

### How can I earn yield with Firm Money?

* **Stability Pool deposits (Earn):** Earn protocol revenue by depositing USF into the various Stability Pools.
* **Protocol Incentivized Liquidity (PIL):** Supply liquidity for USF on incentivized external DEXes.

### Where does the yield for the Stability Pool deposits come from?

The yield comes from three sources:

1. **Interest payments**: Each borrow-market funnels 75% of its revenue to its Stability Pool depositors (Earners). This is paid out in USF.
2. **Liquidation fees**: Your USF will be used to liquidate under-collateralized loans, effectively buying their collateral with a ~5% discount. This is paid out in the respective collateral (e.g., ETH).
3. **Inflationary Incentives**: NERI tokens are added as a bonus inflationary reward to depositors.

All the yield is fully sustainable, scalable and "real", with no token emissions and lockups.

### Is there a lockup period?

There is no lockup period. Users are free to withdraw their USF deposits from the Stability Pool whenever they want.

### What is the estimated yield on Earn?

The yield is a representation of the rates borrowers are paying. Since 75% of the borrowers' interest payments go to Earn, the effective yield can exceed the average interest rate paid in a borrow market if less than 75% of the USF supply is deposited to the respective Stability Pool. This yield amplification sets Liquity V2 and Firm Money apart from competitors and money markets where lending rates cannot be higher than borrow rates.

### Why are there multiple Stability Pools?

The goals are to:

* Establish separate borrow markets for different collateral assets with their own market driven interest rates, using the Stability Pool backing to dynamically split redemptions across the available collaterals.
* Compartmentalize the risks as much as possible when depositing to the respective Stability Pools (Earn) by giving the depositors control over which collateral assets they want exposure to in case of liquidations.

### How have Stability Pools evolved from Liquity V1 to V2?

In V2, the concept of Stability Pools is expanded to accommodate multiple collateral types, keeping the interest revenue and liquidation proceeds inside the respective borrow market (collateral). Each collateral asset has its own Stability Pool to distribute yield to USF depositors.

Additionally, user-set interest rates in V2 influence the yield dynamics for Stability Pool depositors (Earn) as the yield is now fully sustainable coming from user-set interest rates (in USF) rather than token emissions.

### How do risks differ for the different Stability Pools?

Users can deposit their stablecoins into the Stability Pool of their choice, aligning with their risk preference and the types of collateral they're comfortable being exposed to. By selecting pools associated with a specific collateral, participants can tailor their risk exposure and potential reward profile.

By offering separate pools for different collateral types, the system allows users to choose their exposure based on the perceived risk and potential returns of each asset. This compartmentalization helps manage systemic risk, ensuring that impacts from liquidations in one asset class don't disproportionately affect the entire ecosystem.

It is important to note that all USF holders including depositors still remain dependent on USF to keep its peg, remaining exposed to all underlying collateral assets.
