# **Week 9, Lecture 2**
## **Primality Testing**
### _**Main Focus:** Polynomial-Time Reductions and NP-Completeness Theory_
----

## **Types of Complexity Classes:**

**P-Class:** Is the set of decision problems that can be solved by a deterministic machine in polynomial time. 

**NP-Class:** Is the set of decision problems that can be solved by a non-deterministic machine in polynomial time. NP class problems are those whose solutions are easy to verify. 

**Co-NP Class:** It is the complement of NP class. If the answer to a problem in Co-NP is "NO", then there is a proof of this fact that can be checked in polynomial time. 

**Relation between the above:** 
Every decision problem in P is also in NP. If a problem is in P, then we can verify it to be correct and thus any problem in P is also in Co-NP. 

## **Reductions:** 
Suppose we solve a complicated problem named $X$. In order to simplify it, suppose we solve a similar problem to $X$, named $Y$. We try to map, $X$ to $Y$ and use $Y$ to solve $X$. This is reduction. 

In order to map problem $X$ to problem $Y$, we need some algorithm and that may potentially take linear time or more. Cost of solving $X$:
>Cost of solving $X$ = Cost of solving $Y$ + Reduction Time

When we use $Y$ algorithm multiple times, we get:
>Cost of solving $X$ = Number of Times * Cost of solving $Y$ + Reduction Time

The main feature of a NP-Complete is reducibility. That means, we reduce given NP-complete problems to other NP-complete problems. It is important to note that it is not necessary to reduce the given problem to known hard problem to prove its hardness. Sometimes, we reduce the known hard problem to given problem. 

## **Important NP-Completeness Problems:**
A boolean formula is in *conjunctive normal form (CNF)* if it is a conjunction (AND) of several clauses, each of which is the disjunction (OR) of several literals, each of whcih is either a variable or negation. 

1. A 3-CNF formula is a CNF formula with exactly 3 literals per clause. 
2. 3-SAT Problem: It is just SAT restricted to 3-CNF formulas.
3. 2-SAT problem: It is just SAT restricted to 2-CNF formulas. 


## **END OF WEEK 9, LECTURE 2**
-----
-----

