# **Week 2, Lecture 1-**
## Taxonomy Of Problems-
----
1. **Tractable-** A problem that is solvable by a polynomial-time algorithm. The upper bound is polynomial. Some examples are-
Searching for an unordered list.
Finding the minimum spanning tree of a graph.
2. **Intractable-** A problem that cannot be solved by a polynomial-time algorithm. The lower bound is exponential.
Towers of Hanoi: we can prove that any algorithm that solves this problem must have a worst-case running time that is at least O($2^{n}$ − 1). 

## Computing the $n^{th}$ Fibonacci Number $F_n$-

### Algorithm 1: Naive Solution-
-----
```c++
int Fibonacci(int n)
{
    if (n <= 1)
        return n;
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}
```
_**Time Complexity:** T(n) = T(n-1) + T(n-2) which is exponential._ 

### Algorithm 2: Memoization + Top-Down Dynamic Programming-
-----
1. Memoization allows the caching of the already computed Fibonacci numbers so that the computing function does not have to revisit already visited parts of the call tree. 
2. Memoization reduces the time and space complexities drastically; it leads to at most n additions. With constant-time arithmetic, the time complexity is O($n$). 
3. The sum of these additions leads to the time complexity of O($n^{2}$) in bit operations. The space complexity is also quadratic in the number of bits. 

```c++
int fib(int n)
{
    int f[n + 2];
    int i;
    f[0] = 0;
    f[1] = 1;

    for (i = 2; i <= n; i++)
    {
        f[i] = f[i - 1] + f[i - 2];
    }
    return f[n];
}
```

### Algorithm 3: Matrix Multiplication-

-----
$$\begin{pmatrix} F_n \ F_{n+1} \end{pmatrix} = \begin{pmatrix} 0 & 1 \ 1 & 1 \end{pmatrix}^n \cdot \begin{pmatrix} F_0 \ F_1 \end{pmatrix}$$

This is better than Algorithm 2 given above. 
_**Time Complexity:**  O(logN)_ 

### Algorithm 4: Direct Formula-

-----
The fastest known algorithm for calculating $F_n$ runs in $O(n \log ^2 n)$.

$$F_n = \frac{1}{\sqrt{5}}(\frac{1+\sqrt{5}}{2})^n - \frac{1}{\sqrt{5}}(\frac{1 - \sqrt{5}}{2})^2$$

However, this algorithm runs into accuracy issues due to the nature of irrational numbers. If we can store a sufficient-size array containing the value of $\sqrt{5}$, we still need to raise it to the power $n$, which cannot be better than algorithm 3 above.

## Algorithms For Multiplying Large Integers-

### **Karatsuba Algorithm**
-----
The **Karatsuba algorithm** is a fast multiplication algorithm that uses a divide and conquer approach to multiply two numbers.

> The naive time complexity for such multiplication is $O(n^{2})$. Using this algorithm, the time complexity is reduced from $O(n^{2})$ to $O(n^{log_2 3})$ which is approximately $O(n^{1.585})$. 

To multiply two n-digit integers:
1. Add two $1/2*n$ digit integers.
2. Multiply three $1/2$ n-digit numbers.
3. Add, substract, and shift $1/2$ n-digit integers to obtain result. 

**Mathematical Equations for the above:**

$x$ = $2^{\frac{n}{2}} \cdot x_1 + x_0$

$y$ = $2^{\frac{n}{2}} \cdot y_1 + y_0$

$x \cdot y$ = $(2^{\frac{n}{2}} \cdot x_1 + x_0) \cdot (2^{\frac{n}{2}} \cdot y_1 + y_0)$

>Time complexity of this algorithm is given above, but the calculation behind it is: $$T(n) = T(\frac{n}{2}) + T(\frac{n}{2}) + T(1 + \frac{n}{2}) + \Theta(n)$$ 

**This algorithm improves on the $O(n^2)$ time complexity, giving us the new $O(n^{1.585} \log n)$.**

## It is to be realised that faster methods exist which we shall discuss later.

-----
-----

# **Week 2, Lecture 2-**

## DIVIDE AND CONQUER- 
The D and C algorithm works by recursively breaking down a problem into 2 or more subproblems of the same type until they become simple enough to solve directly. The solutions to the subproblems are then combined to give a solution to the original problem. 

## Master Theorem for Divide and Conquer Recurrences-
-----
**Example based:** Merge sort algorithm, which operates on 2 sub-problems, each which is half the size of the original, and then performs(n) additional work for merging. 

> $T(n)$ = $2*T(n/2)$ + $O(n)$ 

This gives us a more general equation using more variables to account for minute computational changes. 

If the recurrence is of the form: 

>$T(n)$ = $a*T(n/b)$ + $O(n^{d}log_pn)$, where a >= 1, b > 1, d >= 0 and p is a real number. 

The complexity can be expressed as:
1. If a > bd, then T(n) = O(nlog(a/b))
2. If a = bd, then
    * If p = -1, then T(n) = O(nlog(a/b)loglogn)
3. If a < bd
    * If p>=0, then T(n) = O (ndlogpn)
    * If p<0, then T(n) = O(nd)

## Merge Sort-
-----
This algorithm splits the list into two equal halves, recursively sorts each half and then merges the two sorted sub-lists.

**Recursive Approach:**
```
function mergesort(a[1..n])
    if n = 1: 
        return a
    else: 
        return merge(mergesort(a[1..(n/2)]), mergesort(a[(n/2)....n]))
```

> Time Complexity: $T(n) = 2T\left(\frac{n}{2} \right) + O(n)$, on which applying Masters Theorem gives: $T(n) \in O(n \log n)$.

**Iterative Approach:**
```
Q = []
for i = 1 to n: 
    inject(Q, [a[i]])
while |Q| > 1: 
    inject(Q, merge(eject(Q), eject(Q)))
return eject(Q)
```


## Matrix Multiplication-
-----
> Time complexity of naive solution: $O(n^3)$. However, this is not optimal. 

> Time complexity of Strassen's algorithm: $O(n^{\log 7})$.

**Divide And Conquer**:

To multiply two $n \times n$ matrices $X$ and $Y$, we first divide them into four $\frac{n}{2} \times \frac{n}{2}$ sub-matrices; $$X = \begin{bmatrix} A & B \ C & D \end{bmatrix}, Y = \begin{bmatrix} E & F \ G & H \end{bmatrix}.$$ 
Then,  $$XY = \begin{bmatrix} A & B \ C & D \end{bmatrix} \begin{bmatrix} E & F \ G & H \end{bmatrix} = \begin{bmatrix} AE + BG & AF + BH \ CE + DG & CF + DH \end{bmatrix}.$$ This tells us that $T(n) = 8T\left(\frac{n}{2}\right) + O(n^2)$, which is $O(n^3)$.

**Above is the naive solution. Now we see Strassens Algorithm for better time complexity.**

However, not all eight products need to be calculated. Strassen showed how to find all terms of the product with 7 multiplications: $$XY = \begin{bmatrix} P_5 + P_4 - P_2 + P_6 & P_1 + P_2 \ P_3 + P_4 & P1 + P_5 - P_3 - P_7 \end{bmatrix},$$ where,
1. $P_1 = A*(F - H)$ 
2. $P_2 = (A+B)*H$ 
3. $P_3 = (C+D)*E$
4. $P_4 = D*(G - E)$
5. $P_5 = (A+D)*(E+H)$
6. $P_6 = (B - D)*(G + H)$
7. $P_7 = (A - C)*(E + F)$

Thus, we get $T(n) = O(n^{\log_2 7})$ as mentioned above. 

## **Median**

### **Question:** Given a list of $n$ numbers, compute the median.

**Naive Approach:** Apply merge sort and output the middle ranked element in the list of numbers. 

Time complexity: $O(n logn)$

**Applying divide and conquer:**
For any number $v$, split list named $S$ into 3 categories:
1. Elements smaller than $v$: $S_L$
2. Elements equal to $v$: $S_V$
3. Elements greater than $v$: $S_R$

Then we perform the following recursion steps:
 
$selection(S,k)$ = 

1. If $k \leq |S_L|$: $selection(S_L,k)$
2. If $|S_L|$ $<$ $k \leq |S_L|+|S_v|$: $v$
3. If $k$ $>$ $|S_v|+|S_L|$: $selection(S_R,k-|S_L|-|S_v|)$

**We had mentioned about number $v$ above, so how do we chosse it?**

We choose it by:

1. Median-of-Medians (Deterministic Approach)
    
    * Divide $n$ elements into groups of 5. 
    * Find median of each of the 5 groups.
    * Fine the median $x$ of the $n/5$ medians. 
>This is beneficial because symmetrically speaking, the number of elements that are $<x$ is atleast $3n/10-6$.

2. Randomized Approach (Choose vs Randomly)

**Thus, we conclude that the analysis and reasoning gives us $T(n) = O(n)$. Resembles order statistics.**

## **END OF WEEK 2**
-----
-----



