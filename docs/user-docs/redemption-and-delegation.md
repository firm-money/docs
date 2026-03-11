---
sidebar_position: 4
---


# Redemptions and Delegation

### What are redemptions?

Redemptions serve the crucial purpose of keeping USF pegged to the value of a dollar, creating a price floor around $0.9945. They do this in a decentralized way without reliance on centralized assets, oracles, or 3rd parties.

A redemption is essentially swapping USF for collateral at face value, as if 1 USF is exactly worth $1.00. Redemptions can be initiated by anyone, but are only profitable when USF is less than $1.

The redeemer sends USF to the protocol and in return gets a mix of collateral (minus the redemption fee). The redeemed amount is split among the different collateral assets based on their current Stability Pool backing (see [link](#how-is-the-collateral-split-determined) for more info).

Redemptions start from the borrower paying the least interest.

Read more about how to [protect yourself](#how-can-i-stay-protected) from redemptions and what happens if [you are redeemed](#what-happens-if-my-trove-gets-redeemed).

### What happens if two Troves have the same IR?

In this case, the "Last In, First Out" (LIFO) principle applies, meaning the Trove that set its interest rate more recently will be redeemed first.

### When can redemptions occur?

A redemption can occur at any time, but will likely only happen when it is profitable to do so. This is usually the case when the price of USF is less than $1 (minus the current redemption fee).

### Who can initiate a redemption?

Any address can initiate a redemption, provided that they have a sufficient amount of USF to do so. However, we expect redemptions to be mainly performed by professional bots rather than humans.

### What happens if my Trove gets redeemed?

You can think of redemptions as if somebody else is repaying your debt and retrieving an equivalent amount of your collateral in return.

If your collateral is redeemed, an equivalent amount of your debt in USD terms is repaid. The redeemer receives your collateral, less the redemption fee, which remains in your Trove. This means that at the time of redemption you have not lost any money in USD terms — likely you even made a small gain with the received redemption fee as the peg recovers.

Example with ETH at $3,000:

* Before the redemption: 10 ETH collateral, 20,000 USF debt.
* After the redemption: 5.025 ETH collateral, 5,000 USF debt.

You can see your collateral and debt reduced equally (in USD terms) and the redemption fee (0.025 ETH) being added to your collateral value.

Partially affected Troves whose debt stays above the minimum debt threshold of 200 USF continue to work as before, while Troves whose debt is reduced to a lesser amount (or 0) switch to a dormant operating mode (see below for [more](#what-happens-when-redemptions-cause-a-debt-of-a-trove-to-fall-below-the-minimum-amount) info).

### How is the collateral split determined?

The split is dynamic, optimizing for the economic safety of the system. The riskier a collateral is, the more redemption volume is directed to that market. If a market's Stability Pool is relatively small compared to its total debt, it's considered riskier, as there's a higher likelihood of bad debt occurring in extreme events.

To mitigate this risk, the system redeems proportionally to the "outside debt" of each collateral type. This is calculated as the total debt borrowed against a specific collateral minus the size of the Stability Pool for that borrowing market.

### Is there a redemption fee?

Yes. The redemption fee mechanics are broadly the same as in Liquity V1, but with adapted parametrization leading to a faster fee decay. The redemption fee is taken as a cut of the total collateral drawn from the system in a redemption. Contrary to Liquity V1, the fee stays with the users as part of their collateral.

Redemption fees are based on the `baseRate` state variable, which is dynamically updated. The `baseRate` increases with each redemption, and exponentially decays according to time passed since the last redemption (half-life of 6 hours).

Upon each redemption of x USF: `baseRate` is decayed based on time passed since the last fee event and incremented by an amount proportional to the fraction of the total USF supply to be redeemed, i.e. `x/total_usf_supply`

The redemption fee percentage is given by `min(0.5% + baseRate, 100%)`.

### How can I stay protected?

The risk of redemption depends on two factors: the interest rate you set and the price of USF.

**The interest rate** you set determines how much USF must be redeemed before it's your turn. The higher your rate, the more USF is redeemable before you, and vice versa.

**The price of USF** is the second crucial factor. When it trades above $1, redemptions become unprofitable and should cease. If demand for USF is strong, it could maintain a price above $1 for an extended period.

During such times, you can comfortably reduce the interest rate you're paying without increasing your risk of redemption.

### What is delegation of interest rates?

Interest rate delegation is a feature that allows borrowers to delegate the management of their interest rate to a third party. This enables them to create a passive, hands-off position, while still keeping a competitive rate and low redemption risk.

There are three types of delegations:

* **To a third party manager:** A specialized entity which provides predetermined strategies for batches of multiple Troves and charges a fee for the service
* **To an automated and decentralized contract strategy:** A predefined strategy managing interest rates in an autonomous manner
* **To your own wallet:** Delegate to a hot wallet when on vacation, or to a friend

It is important to note that a delegate or contract strategy can do nothing else but set the interest rate in a predetermined range, significantly limiting the risks of the borrowers.

Borrowers should keep an eye on the interest rate range and the maximum update frequency (relevant in case of premature adjustments) preset by the manager.

### Who are the current active interest rate delegates?

| Entity | Collateral Assets | Delegation Info | Description |
| ------ | ---------------- | ---------------- | ----------- |
| Summerstone | All assets on Firm Money | https://summerstone.xyz/ | Experienced infrastructure partner who provides several services for Firm Money. |

_Note that neither Liquity AG nor Firm Money are responsible for the actions of any delegates. Please do your own research._

### What happens if there are issues with the smart contract for delegating interest rates?

Your Trove would not be affected — the only thing that would get affected is the interest rate at which your position is set.

### Why are redemptions based on interest rate and not LTV?

Since the purpose of redemptions is to diminish USF supply in response to reduced demand, and interest rates drive demand, rate-based redemption processing is a more sustainable and effective lever to reach market equilibrium. Actively managing for both interest rate and LTV would weaken the ability to enforce market-level interest rates and deposit yields, while complicating the process for the system and its users.

### What's the difference in redemption fees between Liquity V1 and Firm Money?

In V2, when borrowers are affected by redemptions, the redemption fee charged to the redeemer stays within the affected Troves instead of being diverted as in Liquity V1.

So, in Liquity V1 the `borrower_loss = redemption_fee + redeemer_gain`, while in Firm Money it's `borrower_loss = redeemer_gain`.

### What happens when redemptions cause a debt of a Trove to fall below the minimum amount?

If the redeemed amount exceeds the debt of an affected Trove, it doesn't get closed as in Liquity V1, but remains open with 0 USF debt and the remaining collateral. The owner of a fully redeemed Trove may close it by withdrawing the remaining collateral, or borrow again to bring its debt above the minimum of 200 USF, topping up its collateral if needed.

If the redeemed amount does not exceed the debt of a Trove, but would leave it between 0 and 200 USF, the Trove would remain open with the remaining debt and remaining collateral. The owner may close it by paying off the remaining debt and withdrawing the remaining collateral, or borrow anew as described above.
