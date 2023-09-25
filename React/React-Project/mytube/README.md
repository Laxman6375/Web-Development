Debouncing:

typing slow = 200ms
typing fast = 30ms


Performance:
 - iphone pro max = 12 letters * 1000 = 12000
 - with debouncing = 3 Api calss * 1000 = 3000

 Debouncing with 200ms
  - if difference between 2 key stokes is < 200ms> - Decline Api call

  - >200ms make an Api calls