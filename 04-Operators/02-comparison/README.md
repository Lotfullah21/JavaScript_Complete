## Comparison Operators

Comparison operators are used to compare two values. They return a Boolean value: `true` or `false`.

1. **Equal (`==`)**
2. **Not Equal (`!=`)**
3. **Strict Equal (`===`)**
4. **Strict Not Equal (`!==`)**
5. **Greater Than (`>`)**
6. **Greater Than or Equal (`>=`)**
7. **Less Than (`<`)**
8. **Less Than or Equal (`<=`)**

### 1. Equal (==)

Checks if two values are equal irrespective of their data types.

| Expression | Result |
| ---------- | ------ |
| 5 == 5     | true   |
| 5 == '5'   | true   |
| 5 == 10    | false  |

### 2. Not Equal (!=)

Checks if two values are not equal, allowing type conversion.

| Expression | Result |
| ---------- | ------ |
| 5 != 5     | false  |
| 5 != '5'   | false  |
| 5 != 10    | true   |

### 3. Strict Equal (===)

Checks if two values are equal and their types are also the same.

| Expression | Result |
| ---------- | ------ |
| 5 === 5    | true   |
| 5 === '5'  | false  |
| 5 === 10   | false  |

### 4. Strict Not Equal (!==)

Checks if two values are not equal without allowing type conversion.

| Expression | Result |
| ---------- | ------ |
| 5 !== 5    | false  |
| 5 !== '5'  | true   |
| 5 !== 10   | true   |

### 5. Greater Than (>)

Checks if the value on the left is greater than the value on the right.

| Expression | Result |
| ---------- | ------ |
| 10 > 5     | true   |
| 5 > 10     | false  |
| 5 > 5      | false  |

### 6. Greater Than or Equal (>=)

Checks if the value on the left is greater than or equal to the value on the right.

| Expression | Result |
| ---------- | ------ |
| 10 >= 5    | true   |
| 5 >= 10    | false  |
| 5 >= 5     | true   |

### 7. Less Than (<)

Checks if the value on the left is less than the value on the right.

| Expression | Result |
| ---------- | ------ |
| 5 < 10     | true   |
| 10 < 5     | false  |
| 5 < 5      | false  |

### 8. Less Than or Equal (<=)

Checks if the value on the left is less than or equal to the value on the right.

| Expression | Result |
| ---------- | ------ |
| 5 <= 10    | true   |
| 10 <= 5    | false  |
| 5 <= 5     | true   |
