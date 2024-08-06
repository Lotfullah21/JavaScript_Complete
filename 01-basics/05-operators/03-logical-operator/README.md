## Logical Operators

Logical operators are used to determine if something is true or false.

1. **And (`&&`)**
2. **Or (`||`)**
3. **Not (`!`)**

### 1. And (&&)

Checks if both conditions are true.
If both conditions are true, it returns true. If one of the conditions is false, it returns false.
If we consider `True=1` and `False=0`, then the output of the operation is the result of these multiplications.

`1*0 = 0
 1*1 = 1
 0*1 = 0
 0*0 = 0`

We have two variables; hence, we can combine them in four different possible combinations.

| Condition A | Condition B | A && B |
| ----------- | ----------- | ------ |
| True        | True        | True   |
| True        | False       | False  |
| False       | True        | False  |
| False       | False       | False  |

### 2. Or (||)

Checks if at least one of the conditions is true.
If one or both of the conditions are true, it returns true. If both conditions are false, it returns false.
We have two variables; hence, we can combine them in four different possible combinations.
This operation is like addition,

`1+0 = 1
 1+1 = 1
 0+1 = 1
 0+0 = 0`

| Condition A | Condition B | A     | B   |
| ----------- | ----------- | ----- | --- |
| True        | True        | True  |
| True        | False       | True  |
| False       | True        | True  |
| False       | False       | False |

### 3. Not (!)

Inverts the value of the condition.
If the condition is true, it returns false. If the condition is false, it returns true.

`not(0) = 1
 not(!) = 0`

| Condition A | !A    |
| ----------- | ----- |
| True        | False |
| False       | True  |
