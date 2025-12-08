---
sidebar_position: 6
---

# Audits & Risk Disclosure

Detailed disclosures of protocol risks and user considerations. Mustang Finance code has been audited several times by Pashov Audit Group, and several independent auditors. It has also been scranned by Octane Security, an automated tested and security monitoring service.

See a list of audit reports here: https://github.com/MustangProtocol/audit-reports/tree/main

## Contract Risk 

Underlying Liquity contracts are audited and secure. Mustang Finance Protocol is a fork of Liquity and inherits most of the same risks and security considerations, but with several differences.

Mustang Finance protocol contracts (and all changes from the Liquity core contracts) have undergone multiple comprehensive security audits:

### Security Audits

- **August 23, 2025:** [Mustang Security Review](https://github.com/MustangProtocol/audit-reports/blob/main/Mustang-security-review_2025-08-23.pdf)
- **September 22, 2025:** [Mustang Security Review](https://github.com/MustangProtocol/audit-reports/blob/main/Mustang-security-review_2025-09-22.pdf)
- **November 30, 2025:** [Mustang Audit - Shred Security](https://github.com/ShredSecurity/audits/blob/main/private_reviews/Mustang-Audit-Shred-11-2025.pdf)

Mustang Finance code has been audited by Pashov Audit Group and several independent auditors. The protocol also underwent extensive testing with automated vulnerability testing by [Octane Security](https://octane.security/), with reports available for each pull request on our [GitHub repository](https://github.com/MustangProtocol/must-finance).

For a complete list of all audit reports, visit our [audit-reports repository](https://github.com/MustangProtocol/audit-reports/tree/main).


## Centralization Risk

### Mustang Finance Governance
Mustang Finance Protocol is designed to be as limited and decentralized as possible. The only parameters in the protocol which can be updated or changed by Mustang Finance governance are:
1. Debt limits for each collateral type, which can be lowered at any time but only raised by a factor of 2x with a 7 day timelock.
2. How to direct 25% of protocol revenue. 

New collateral types can NOT be added by Mustang Finance governance.
MUST can NEVER be minted by Mustang Finance governance.
The percentage of fees that are directed to the stability pool can NOT be changed by Mustang Finance governance.

### Saga EVM Network
Mustang is depdent on the security of Saga. If there is ever a critical issue with Saga EVM or other Saga infrastructure that could effect the safety of Mustang.

### Collaterals

It is possible that some collateral tokens could be upgraded by respective DAOs or groups in the future. Conservative debt limits and over-collateralization ratios have been chosen to limit risks of this posing any issues.











