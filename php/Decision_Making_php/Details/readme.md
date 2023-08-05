 Decision-making in computer programming refers to the process of making choices or taking different actions based on certain conditions. This allows programs to be more flexible and responsive to different situations, enabling them to handle various scenarios effectively.

In PHP, decision-making is achieved using conditional statements. These statements evaluate a given condition and execute different blocks of code based on whether the condition is true or false. The primary decision-making structures in PHP are:

1. **if statement**: The `if` statement is the simplest form of decision-making. It executes a block of code only if the specified condition is true. If the condition is false, the code inside the `if` block is skipped.

```php
if (condition) {
    // Code to be executed if the condition is true
}
```

2. **if-else statement**: The `if-else` statement allows the program to execute one block of code if the condition is true, and a different block of code if the condition is false.

```php
if (condition) {
    // Code to be executed if the condition is true
} else {
    // Code to be executed if the condition is false
}
```

3. **if-elseif-else statement**: The `if-elseif-else` statement is used to handle multiple conditions and provide different responses based on various scenarios. It allows the program to evaluate multiple conditions sequentially until it finds a true condition or executes the `else` block if all conditions are false.

```php
if (condition1) {
    // Code to be executed if condition1 is true
} elseif (condition2) {
    // Code to be executed if condition2 is true
} else {
    // Code to be executed if all conditions are false
}
```

4. **Nested if statements**: You can also nest conditional statements within each other to create more complex decision-making scenarios. This means having one conditional statement inside another.

```php
if (condition1) {
    // Code to be executed if condition1 is true

    if (condition2) {
        // Code to be executed if condition1 and condition2 are true
    } else {
        // Code to be executed if condition1 is true but condition2 is false
    }
} else {
    // Code to be executed if condition1 is false
}
```

In these decision-making structures, the `condition` is an expression that evaluates to either true or fales.