# **Week 8, Lecture 1**
## **Number Theoretic Algorithms**
### _**Main Focus:** GCD: Euclideans Algorithm, Extended Euclids Algorithm, Modular Division, Public-Key Cryptography_
----

## **GCD: Euclids Algorithm**

The original version of Euclid’s algorithm is based on subtraction: we recursively subtract the smaller number from the larger. 

```py
def gcd(a, b):
    if a == b:
        return a
    if a > b:
        gcd(a - b, b)
    else:
        gcd(a, b - a)
```

Based on $n=a+b$, the number of steps can be linear, for example $gcd(x, 1)$, so the time complexity is $O(n)$. This is the worst-case complexity, because the value $x + y$ decreases with every step.

### **By Division:**

For two given numbers $a$ and $b$, such that $a \ge b$:
1. If $b | a$, then $gcd(a, b) = b$
2. Otherwise $gcd(a, b) = gcd(b, a\%b)$.

>In order to prove that $gcd(a, b) = gcd(b, r)$, where $r = a \% b$ and $a = b*t + r$:
>1. Firstly, let $d = gcd(a, b)$. We get $d | (b · t + r)$ and $d | b$, so $d | r$. Therefore, we get $gcd(a, b) | gcd(b, r)$.
>2. Secondly, let $c = gcd(b, r)$. We get $c | b$ and $c | r$, so $c | a$. Therefore, we get $gcd(b, r) | gcd(a, b)$.

Hence, $gcd(a, b) = gcd(b, r)$. Now, we can recursively call a function while $a$ is NOT divisible by $b$.
```py
def gcd(a, b):
    if a % b == 0:
        return b
    else:
        return gcd(b, a % b)
```
The **time complexity** is logarithmic based on the sum of $a$ and $b$ is $O(log(a + b))$. 

-----

## **Public-Key Cryptography: RSA**

RSA is an encryption algorithm, used to securely transmit messages over the internet. As we can seem it is application based. It is based on the principle that it is easy to multiply large numbers, but factoring large numbers is very difficult. 

>In public-key cryptography, Person A encrypts their message using Person B's, public key, which can only be unlocked by Person A's private key. 

RSA implementation only involves the multiplication and we can see it work below:
1. The receiver chooses two large prime numbers pp and qq. Their product, n=pqn=pq, will be half of the public key.
2. The receiver calculates $\phi(pq)=(p-1)(q-1)ϕ(pq)=(p−1)(q−1)$ and chooses a number $e$ relatively prime to $\phi(pq)ϕ(pq)$.
3. The receiver calculates the modular inverse $d$ of $e$ modulo $\phi(n)ϕ(n)$. In other words, $de \equiv 1 \pmod{{\small\phi(n)}}de≡1(modϕ(n))$. $d$ is the private key.
4. The receiver distributes both parts of the public key: $n$ and $e$. $d$ is kept secret.

**For example**, suppose the receiver selected the primes $p=11$ and $q=17$, along with $e=3$.

1. The receiver calculates $n=pq=11 \cdot 17=187$, which is half of the public key.
2. The receiver also calculates $\phi(n)=(p-1)(q-1)=10 \cdot 16=160$. $e=3$ was also chosen.
3. The receiver calculates $d=107$, since then $de=321 \equiv 1 \pmod{{\small\phi(n)}}$, $((since \phi(n)=160).ϕ(n)=160)$.
4. The receiver distributes his public key: $n=187$ and $e=3$.


## **END OF WEEK 8, LECTURE 1**
-----
-----

