# **Week 9, Lecture 1**
## **Primality Testing**
### _**Main Focus:** Miller-Rabin Randomized Test_
----

## **Randomized Algorithms:**
A randomized algorithm flips coins during its execution to determine
what to do next. When considering a randomized algorithm, we usually care about its expected worst-case performance, which is the average amount of time it takes on the worst input of a given size. This average is computed over all the possible outcomes of the coin flips during the execution of the algorithm. 

We may also ask for a high-probability bound, showing that the algorithm doesn’t consume too much resources most of the time. In studying randomized algorithms, we consider pretty much the same issues as for deterministic algorithms: how to design a good randomized algorithm, and how to prove that it works within given time or error bounds.

The main difference is that it is often easier to design a randomized algorithm—randomness turns out to be a good substitute for cleverness more often than one might expect—but harder to analyze it. So much of what one does is develop good techniques for analyzing the often very complex random processes that arise in the execution of an algorithm. 

## **Proving Primality:**
Suppose we have a positive integer $N$, we need to define and determine if they are prime or not. This is intimately related to the
problem of factoring $N$; without a method for determining primality, we have no way of knowing when we have completely factored $N$. 

### **INTUTION FOR MILLER-RABIN ALGORITHM:**

Given an odd integer $N$:
1. Pick a random integer $a \in [1,N-1]$.
2. Write $N = 2^st + 1$, with $t$ odd, and compute $b = a^t mod N$.
If $b ≡ ±1 mod N$, return true since, $a$ is not a witness, $N$ could be prime).
3. For $i$ from 1 to $s − 1$:
Set $b \leftarrow b^2 mod N$. If $b ≡ −1 mod N$, return true ($a$ is not a witness, $N$ could be prime).
4. Return false ($a$ is a witness, $N$ is definitely not prime).

For an odd integer $n > 1$, factor out the largest power of 2 from $n − 1$, say $n − 1 = 2^ek$, where $e \ge 1$ and $k$ is odd. The polynomial $x^{n−1} − 1 = x^{2^ek} − 1$ can be factored repeatedly as often as we have powers of 2 in the exponent:

> $x^{2^ek} − 1 = (x^{2^{e-1}k})^2 − 1 $ <br>
Which gives us: <br>
$(x^{2^{e-1}k}-1) (x^{2^{e-1}k}+1)$ <br>
$\vdots$ <br>
$(x^k-1)(x^k+1)(x^{2k}+1)(x^{4k}+1) \ldots (x^{2^{e-1}k}+1)$ <br>

If $n$ is prime and $1 \le a \le n − 1$ then $a^{n−1} − 1 ≡ 0 mod n$ by Fermat’s little theorem, so using the above factorization we have:

$(a^k-1)(a^k+1)(a^{2k}+1)(a^{4k}+1) \ldots (a^{2^{e-1}k}+1) \equiv 0$ mod $n$

When $n$ is prime one of these factors must be 0 mod $n$, so:
> $a^k \equiv 1$ mod $n$ or $a^{2^{i}k}$ for some $i \in \{0, . . . , e − 1\}$.

The congruences makes sense for all odd $n > 1$, prime or not. Their simultaneous failure for some $a$ in $\{1, . . . , n − 1\}$ will lead to a primality test. 

## **END OF WEEK 9, LECTURE 1**
-----
-----

