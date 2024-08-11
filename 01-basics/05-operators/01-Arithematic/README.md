## Arithmetic Operators

Arithmetic operators are used to perform mathematical operations on numbers.

1. **Addition (`+`)**
2. **Subtraction (`-`)**
3. **Multiplication (`*`)**
4. **Division (`/`)**
5. **Modulus (`%`)**
6. **Exponentiation (`**`)\*\*
7. **Increment (`++`)**
8. **Decrement (`--`)**

### 1. Addition (+)

Adds two numbers together.

| Expression | Result |
| ---------- | ------ |
| 5 + 3      | 8      |
| 10 + 20    | 30     |
| 0 + 5      | 5      |

### 2. Subtraction (-)

Subtracts the second number from the first.

| Expression | Result |
| ---------- | ------ |
| 10 - 5     | 5      |
| 20 - 10    | 10     |
| 5 - 8      | -3     |

### 3. Multiplication (\*)

Multiplies two numbers.

| Expression | Result |
| ---------- | ------ |
| 4 \* 2     | 8      |
| 5 \* 5     | 25     |
| 10 \* 0    | 0      |

### 4. Division (/)

Divides the first number by the second.

| Expression | Result |
| ---------- | ------ |
| 10 / 2     | 5      |
| 20 / 5     | 4      |
| 5 / 2      | 2.5    |

### 5. Modulus (%)

Returns the remainder of the division of the first number by the second.

| Expression | Result |
| ---------- | ------ |
| 10 % 3     | 1      |
| 20 % 4     | 0      |
| 5 % 2      | 1      |

### 6. Exponentiation (\*\*)

Raises the first number to the power of the second number.

| Expression | Result |
| ---------- | ------ |
| 2 \*\* 3   | 8      |
| 5 \*\* 2   | 25     |
| 10 \*\* 0  | 1      |

### 7. Increment (++)

Increases a number by one.

| Expression  | Result |
| ----------- | ------ |
| let a = 5;  |        |
| ++a;        | 6      |
| let b = 10; |        |
| ++b;        | 11     |

### 8. Decrement (--)

Decreases a number by one.

| Expression  | Result |
| ----------- | ------ |
| let a = 5;  |        |
| a--;        | 4      |
| let b = 10; |        |
| --b;        | 9      |

```js
1 + "2";
```

Note that the value of 1 is of the number data type, and the value of "2" is of the string data type, and so JavaScript will coerce the number 1 to a string of "1", and then concatenate it with the string of "2", so the result is a string of "12".
