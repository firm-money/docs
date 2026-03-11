---
sidebar_position: 7
---

# Audit Reports

Firm Finance Protocol has undergone multiple comprehensive security audits to ensure the safety and reliability of the protocol. All audit reports are publicly available in our [audit-reports repository](https://github.com/firm-money/audit-reports).

## Security Audits

### Audit Report #1
**Date:** August 23, 2025  
**Report:** [Firm Security Review - August 2025](https://github.com/firm-money/audit-reports/blob/main/Firm-security-review_2025-08-23.pdf)

### Audit Report #2
**Date:** September 22, 2025  
**Report:** [Firm Security Review - September 2025](https://github.com/firm-money/audit-reports/blob/main/Firm-security-review_2025-09-22.pdf)

### Audit Report #3
**Date:** November 30, 2025  
**Auditor:** Shred Security  
**Report:** [Firm Audit - Shred Security November 2025](https://github.com/ShredSecurity/audits/blob/main/private_reviews/Firm-Audit-Shred-11-2025.pdf)

### Audit Report #4 — Cyfrin
**Date:** March 9, 2026  
**Auditor:** Cyfrin (SBSecurity, Arnie)  
**Scope:** Changes from Liquity V2 base — deployment scripts, price feeds (LINEA, sGUSD, SNT), BorrowerOperations, CollateralRegistry, Constants, TroveManager, AddressesRegistry  
**Commit:** `1a4691226fe5...`  
**Fix Commit:** `48dd5791b22a...`  
**Report:** [Firm Money Cyfrin Audit - March 2026](/Firm-Cyfrin-Audit-2026-03-09.pdf)

**Summary:** 5 Low severity + 3 Informational findings. No Critical, High, or Medium issues.

| ID | Severity | Finding |
|----|----------|---------|
| L-1 | Low | Deployment script missing new collaterals support |
| L-2 | Low | Debt-limit enforcement inconsistent with stated requirement |
| L-3 | Low | Oracle fallback may choose more stale price |
| L-4 | Low | Empty SP removes entire liquidator incentive |
| L-5 | Low | Insufficient liquidator incentive on non-ETH branches |
| I-1 | Info | Imported constants remain unused |
| I-2 | Info | rETH staleness configuration does not match documentation |
| I-3 | Info | MetadataNFT reuses wrong protocol branding |

## Additional Security Reviews

Firm Finance code has been audited several times by Pashov Audit Group and several independent auditors. The protocol has also been scanned by Octane Security, an automated testing and security monitoring service.

For a complete list of all audit reports, please visit our [audit-reports repository](https://github.com/firm-money/audit-reports/tree/main).

## Other Security Measures

- **Octane Security:** Automated vulnerability testing with reports available for each pull request on our [GitHub repository](https://github.com/firm-money/firm)

## Risk Disclosure

For detailed information about protocol risks and user considerations, please see our [Risk Disclosure page](./risks.md).

