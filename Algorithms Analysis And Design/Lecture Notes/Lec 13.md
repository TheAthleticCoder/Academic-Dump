# **Week 11, Lecture 1**
## **Proving NP-Completeness**
### _**Main Focus:** Vertex-Cover and Subset-Sum_
----

## **Intution:**

1. **Vertex Cover:** Find minimum set of vertex that covers all the edges in the graph.  
2. **Set Cover:**  Find a smallest size cover set that covers every vertex.

These are NP-Hard problems, i.e., If we could solve any of these problems in polynomial time, then
$P = NP$. In some situations, we want a efficient solution which is close to the optimal accuracy, but does NOT need to be 100% accurate. 

It may be possible to find a near-optimal solutions in polynomial time. An algorithm that runs in polynomial
time and outputs a solution close to the optimal solution is called an **approximation algorithm**.

### **4-Step Proof for NP- Complete:**
1. Prove $X$ is in $NP$. 
2. Select problem $Y$ that is know to be in NP-Complete.
3. Define a polynomial time reduction from $Y$ to $X$.
4. Prove that given an instance of $Y$ , $Y$ has a solution iff $X$ has a solution.

### **Vertex Cover:**

Given a $G = (V, E)$, find a minimum subset $C \subseteq V$ , such that $C$ “covers” all edges in $E$, i.e., every edge $\in E$ is incident to at least one vertex in $C$.

### **Independent Set:**

An independent set of a graph $G = (V, E)$ is a $V_I ⊆ V$ such that no two vertices in $V_I$ share an edge.

**Given that the Independent Set (IS) decision problem is NP-complete, prove that Vertex Cover (VC) is NP-complete.**

1. Vertex Cover $\in NP$
Given $V_C$ , vertex cover of $G = (V, E)$, $|V_C| = k$. For each vertex $\in VC$ , remove all incident edges. 
2. Select a known NP-Complete Problem. Independent Set (IS) is a known NP-complete problem.

We need to reduce from a known NP-hard problem to Vertex Cover. Here, we will choose IS. Reduce from IS to Vertex Cover. We need to give a polynomial-time algorithm that takes as input a graph $G$ and a number $k$ such that:

1. If $G$ has an independent set of size $k$ or more, then $G'$ has a vertex cover of size $k'$ or less.
2. If $G$ has no independent set of size $k$ or more, then $G'$ has no vertex cover of size $k'$ or less. <br>
(*Contrapositive:* If $G'$ has a vertex cover of size $k'$ or less, then $G$ has an independent set of size $k$ or more). 
-----
### **Subset Sum:**

The Subset Sum problem is defined as follows:
1. Given a sequence of integers $a_1, a_2,. . . , a_n$ and $a$ parameter $k$,
2. Decide whether there is a subset of the integers whose sum is exactly $k$. Formally, decide whether there is a subset $I \subseteq {1, . . . , n}$ such that $\sum\limits_{i \in I}a_i=k$. 

Subset Sum is a true decision problem, not an optimization problem forced to become a decision problem. It is easy to see that Subset Sum is in NP. We prove that Subset Sum is NP-complete by reduction from Vertex Cover. We have to proceed as follows: <br>
1. Start from a graph $G$ and a parameter $k$.
2. Create a sequence of integers and a parameter $k'$.
3. Prove that the graph has vertex cover with $k$ vertices iff there is a subset of the integers
that sum to $k'$.

**From Covers to Subsets:** Suppose there is a vertex cover $C$ of size $k$ in $G$. Then we choose all the integers $a_i$ such that $i \in C$ and all the integers $b_{(i,j)}$ such that exactly one of $i$ and $j$ is in $C$. Then, when we sum these integers, doing the operation in base 4, we have a 2 in all digits except for the most significant one. In the most significant digit, we are summing one $|C| = k$ times. The sum of the integers is thus $k'$. 

**From Subsets to Covers:** Suppose we find a subset $C \subseteq V$ and $E' \subseteq E$ such that:

> $\sum\limits_{i \in C}a_i + \sum\limits_{(i,j) \in E'}b_{(i,j)}=k'$

First note that we never have a carry in the $|E|$ less significant digits: operations are in base 4 and there are at most 3 ones in every column. Since the $b_{(i,j)}$ can contribute at most one 1 in every column, and $k'$ has a 2 in all the $|E|$ less significant digits, it means that for every edge $(i, j)$, $C$ must contain either $i$ or $j$. So $C$ is a cover. Every $a_i$ is at least $4^{|E|}$, and $k'$ gives a quotient of $k$ when divided by $4^{|E|}$. So $C$ cannot contain more than $k$ elements.
 
>Thus, we prove that: <br>
Set Cover $\in$ NP <br>
Vertex Cover $\leq$ Set Cover


## **END OF WEEK 11, LECTURE 1**
-----
-----

