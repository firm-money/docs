---
sidebar_position: 6
---

# Audits & Risk Disclosure

Detailed disclosures of protocol risks and user considerations. Firm Money code has been audited several times by Pashov Audit Group, Cyfrin, Shred Security, and several independent auditors. It has also been scanned by Octane Security, an automated testing and security monitoring service.

See a list of audit reports here: https://github.com/firm-money/audit-reports/tree/main

## Contract Risk

Underlying Liquity contracts are audited and secure. Firm Money is a fork of Liquity V2 and inherits most of the same risks and security considerations, with several differences documented in the [Changes from Liquity V2](./changes-from-liquity.md) page.

Firm Money protocol contracts (and all changes from the Liquity core contracts) have undergone multiple comprehensive security audits:

### Security Audits

- **August 23, 2025:** [Firm Security Review](https://github.com/firm-money/audit-reports/blob/main/Firm-security-review_2025-08-23.pdf)
- **September 22, 2025:** [Firm Security Review](https://github.com/firm-money/audit-reports/blob/main/Firm-security-review_2025-09-22.pdf)
- **November 30, 2025:** [Firm Audit - Shred Security](https://github.com/ShredSecurity/audits/blob/main/private_reviews/Firm-Audit-Shred-11-2025.pdf)
- **March 9, 2026:** [Firm Money - Cyfrin Audit](./audits.md#audit-report-4--cyfrin) (5 Low, 3 Informational)

Firm Money code has been audited by Pashov Audit Group and several independent auditors. The protocol also underwent extensive testing with automated vulnerability testing by [Octane Security](https://octane.security/), with reports available for each pull request on our [GitHub repository](https://github.com/firm-money/firm).

For a complete list of all audit reports, visit our [audit-reports repository](https://github.com/firm-money/audit-reports/tree/main).


## Centralization Risk

### Firm Money Governance
Firm Money Protocol is designed to be as limited and decentralized as possible. The only parameters in the protocol which can be updated or changed by governance are:
1. Debt limits for each collateral type, which can be lowered at any time but only raised by a factor of 2x with a 7 day timelock.
2. How to direct 25% of protocol revenue.

New collateral types can NOT be added by Firm Money governance.
USF can NEVER be minted by governance.
The percentage of fees that are directed to the stability pool can NOT be changed by governance.

### Status Network
Firm Money is deployed on [Status Network](https://status.network/), an Ethereum L2. Firm is dependent on the security of Status Network. If there is ever a critical issue with Status Network infrastructure, it could affect the safety of Firm Money.

### Collaterals

It is possible that some collateral tokens could be upgraded by respective DAOs or groups in the future. Conservative debt limits and over-collateralization ratios have been chosen to limit risks of this posing any issues.
