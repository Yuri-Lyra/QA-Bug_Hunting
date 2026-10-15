# Sweet Shop (e-commerce demo app)

Environment: Windows 11, Chrome, logged out.

## SHOP-001: Basket total shows NaN after choosing Standard Shipping
- **Severity:** Critical
- **Steps:** 1. Open the home page. 2. Add an item to the basket. 3. Open the basket. 4. Select "Standard Shipping (£1.99)".
- **Expected:** £1.99 is added to the basket total.
- **Actual:** The total shows "Not a Number" (NaN).
- **Why critical:** A wrong total blocks checkout and is a money-related failure.

## SHOP-002: Misleading validation message on an empty email field
- **Severity:** Minor
- **Steps:** 1. Open the home page. 2. Click [Login]. 3. Leave "Email address" empty. 4. Click [Login].
- **Expected:** A clear message such as "Please enter a valid email address".
- **Actual:** The message says "Use one of the demo email addresses shown in the tooltip."

## SHOP-003: Image of one product does not render on the sweets page
- **Severity:** Minor
- **Steps:** 1. Open the home page. 2. Click [Browse sweets]. 3. Look at the "Wham Bars" item.
- **Expected:** The product image loads.
- **Actual:** The image does not render.

## SHOP-004: No validation message for an empty promo code
- **Severity:** Minor
- **Steps:** 1. Open the basket/checkout page. 2. Leave "Promo code" empty. 3. Click [Redeem].
- **Expected:** A validation message under the field.
- **Actual:** Nothing is shown.
