# **Week 13, Lecture 2**
## **EFFICIENT INTEGER FACTORIZATION USING QUANTUM COMPUTERS​**
### _**Main Focus:** Shor's Algorithm_
----

## **Shor's Algorithm**

Shor’s algorithm is famous for factoring integers in polynomial time. Since the best-known classical algorithm requires superpolynomial time to factor the product of two primes, the widely used cryptosystem, RSA, relies on factoring being impossible for large enough integers.

In this chapter we will focus on the quantum part of Shor’s algorithm, which actually solves the problem of period finding. Since a factoring problem can be turned into a period finding problem in polynomial time, an efficient period finding algorithm can be used to factor integers efficiently too.

It runs only partially on a quantum computer with complexity $O((\log n)^2(\log {\log n}) (\log{\log{\log n}}))$ and the pre and post processing are done on a classical computer.

### **Algorithm:**
Let $n = pq$ be a product of two primes. Let $x$ be a nontrivial square root of $1 \% n$. 

$$x^2 \equiv 1 (mod n), x \neq ±1 (mod n)$$

These conditions tell us that $1 < x < n − 1$ and $x^2 − 1 = (x + 1)(x − 1) \equiv 0 (mod n)$. 

Consider the greatest common divisors $gcd(x + 1, n)$ and $gcd(x − 1, n)$.

At least one of these must be a nontrivial factor of $n$ since $1 < x < n−1$. Shor’s algorithm prime
factorizes by finding such an $x$. The algorithm follows:
1. Choose a random integer $a < n$. If $gcd(a, n) \neq 1$, then we have stumbled upon a nontrivial factor of $n$. Otherwise, 
2. Find the period $r$ of the function $f(k) = a^k(mod n)$. In other words, we want $a^r$ to be the identity, with $a^r \equiv 1 (mod n)$.
3. Notice that if $r$ is even, we let $x = a^{r/2}$. And if $x$ satisfies $x !\equiv ±1 (mod n)$, then we can find nontrivial factors of $n$.

### **Classical Subpart:**

We find the order in this part. We have two integers $y$ and $N$ such that $y < N$ and $\text{gcd}(y,N) = 1$.

Here, the order of $y$ is the minimum positive integer $b$ such that $y^b = 1 \bmod N$.

1. Pick a random number $n$ where $n < N$ and calculate the gcd of $n$ and $N$.

2. If $\text{gcd}(n,N) != 1$, there exists a non-trivial factor of $N$.
   $$ (y + t) = n^{y+t} \bmod N = n^y \bmod N = f(y)$$

3. If $t$ is odd or $n^{t/2} = -1 \bmod n$, then repeat step 1.

4. The non trivial factor of $N$ will be $\text {gcd}(n^{t/2} +/-1,N)$.

### **Quantum Subpart:**

Here, we select a power of 2 and $Q = 2L$ where $N^2 \leq Q \leq 2N^2$.

Let $f=\{0, 1, ... , Q-1\}$ where $f(b)=\frac {1}{Q^{\frac {1}{2}}} \sum^{Q-1}{y = 0} | f(a) | w^{yb}$ and $w$ is the $Q^\text{th}$ root of unity.

1. Perform Shor's Algorithm. Consider the problem where we have to factor an odd integer $r$.

2. Select an integer $Q$ such that $N^2 \leq Q \leq 2N^2$.

3. Select any integer $n$ such that $\text{gcd}(n,N) = 1$.

4. Create two quantum registers that are entangled in such a way that the collapse of the input register corresponds to the collapse of the output register.
   Here, the input register should contain enough qubits to represent numbers as big as $Q-1$, whereas the output register should contain enough qubits to represent numbers as big as $N-1$.

## **Quantum Mechanics**

### **Massive Parallelism**

$n$ Qubits = superposition of their $2^n$ possible states.

The intermediate steps are simple unitary transformations.
$$ \sum {x \in \{0,1\}^n} \alpha_x|x> $$

### **Quantum Parallelism**

 Quantum parallelism arises from the ability of a quantum memory register to exist in a superposition of base states. A quantum memory register can exist in a superposition of states, each component of this superposition may be thought of as a single argument to a function. A function performed on the register in a superposition of states is thus performed on each of the components of the superposition, but this function is only applied one time. 
By linearity,

$$ U_f(\frac {1}{\sqrt{2^n}} \sum^{2^n-1}_{x=0} |x,0>) = \frac {1}{\sqrt{2^n}} \sum^{2^n-1}_{x=0} U_f(|x,0>) = \frac {1}{\sqrt{2^n}} \sum^{2^n-1}_{x=0} |x,f(x)> $$

The more superposed states that exist in you register, the smaller the probability that you will measure any particular one will become.

## **END OF WEEK 13, LECTURE 2**
-----
-----