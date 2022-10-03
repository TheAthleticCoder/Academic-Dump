# **Week 5, Lecture 1**
## **Set Cover And Approximations**
### _Continuation of Greedy Algorithms_
----
## Class of P and NP problems:

**P:** All problems a computer can solve in a reasonable amount of time. 
**NP:** Problems that can be verified in polynomial time but need exponential number of steps to solve. Eg: Sudoku

If P=NP, are questions that are verified in polynomial time, also solved in polynomial time? However, till now we are sure that $P \subseteq NP$. 

### Reading books, we understand that:
1. P is set of problems that can be solved by a deterministic Turing machine in Polynomial time.
2. NP is set of problems that can be solved by a Non-deterministic Turing Machine in Polynomial time. P is subset of NP (any problem that can be solved by deterministic machine in polynomial time can also be solved by non-deterministic machine in polynomial time) but $P \ne NP$.
3. There are some problems that every single problem in NP can be translated into, and a fast solution to such a problem would automatically give us a fast solution to every problem in NP. This group of problems are known as NP-Complete.
4. A problem is NP-hard if an algorithm for solving it can be translated into one for solving any NP-problem(nondeterministic  polynomial time) problem. NP-hard therefore means "at least as hard as any NP-problem."

## **Set Cover:**

Let $U$ be a set of elements and $C = \{S_1, S_2, ..., S_n\}$ be a collection of subset $U$. A **set cover** is a subcollection $C' \subseteq C$ whose union is $U$. This gives us:
$$ \bigcup_{x \in C'} x = U$$

-----
## The Set Cover Problem: 

**Input:** A set of elements $B$. And u have sets $S_1, S_2, ..., S_m \subseteq B.$

Let: $$B = \{ 1,2,3,4,5,6,7,8\}$$
$$S_1 = \{ 1,2,3\}, \space S_2 = \{ 1,4,5,8\}, $$
$$S_1 = \{ 2,3,4\}, \space S_2 = \{ 6,7\}, $$
$$S_1 = \{ 2,4,6\}, \space S_2 = \{ 2,3,5,8\} $$

**Output:** A selection of $S_i$ whose union is $B$.
The cost accounts for number of sets picked. 

**The Greedy Approach:** Pick the set $S_i$ with the largest number of uncovered elements. Repeat this until all elements of $B$ are covered.  We observe that in this case, **Greedy Is Optimum**.

>**Greedy Algorithm for Minimum Set Cover:** \
$S \gets \phi$ <br>
**while** not all elements in the universe are covered <br>
**do** <br>
$T$ set that covers the most elements that are not yet covered by $S$ <br>
$S \gets S \cup \{T\}$ <br>
**end while** <br>
**return** S

Using the above algorithm approach, we get valid set covers such as-
1. $\{S_1,S_2,S_4,S_6\}$
2. $\{S_2,S_3,S_4\}$

Greedy is $O(log n)$. We make the claim- 

Suppose $B$ contains $n$ elements and the optimal cover consists of $k$ sets. If the optimal solution uses $k$ sets, the greedy algorithm finds a solution with at
most $k*ln(n)$ sets.


## **Proof Of Approximation:**

Let $n_t$ be the number of elements still not covered after $t$ iterations. Since the optimal solution uses k sets, there must some set that covers at least a $1/k$ fraction of the points. The algorithm chooses the set that covers the most points, so it covers at least that many. Therefore, after the first iteration of the algorithm, there are at most $n*(1 − 1/k$)
points left. 

Again, since the optimal solution uses k sets, there must some set that covers at least a $1/k$ fraction of the remainder (if we got lucky we might have chosen one of the sets used by the optimal solution and so there are actually $(k − 1)$ sets covering the remainder, but we can’t count on that necessarily happening). Again, since we choose the set that covers the most points remaining, after the second iteration, there are at most $n*(1 − 1/k)^{2}$ points left. 

More generally, after $t$ rounds, there are at most $n*(1 − 1/k)^{t}$ points left. After $t = k*ln(n)$ rounds, there are at most  $ n*(1 − 1/k)^{k*ln(n)} < n(1/e)^{ln(n)} = 1$ points left.


## **END OF WEEK 5, LECTURE 1**
-----
-----

# **Modification to the Set Cover Greedy Algorithm**

Lets implement it through an example:

**Question:** Let $X = \{a,b,c,d,e,f,g,h,i,j\}$ be the given universal set. Assume labels for given subsets as $S_1 = \{a,b,c,d,e,f\}$, $S_2 = \{a,b,c,g,h\}$, $S_3= \{d,e,f,i,j\}$, $S_4 =\{g,h,i\}$, $S_5=\{j\}$.

## **Classical Solution:** 
1. Consider a partial set $P = \{\}$. It is empty initially.
2. In first step of the classical greedy algorithm, among the five sets $S_1$ has six uncovered elements $\{a,b,c,d,e,f\}$ and is better than the coverage of sets $S_2,S_3,S_4,S_5$. So, the first step selects $S_1$ and now partial set cover $P = \{ \{a,b,c,d,e,f\}\}$.
3. In second step, $S_4$ has three uncovered elements $\{g,h,i\}$. $S_2$ has two uncovered elements $\{g,h\}$, $S_3$ has two uncovered elements $\{i,j\}$ and $S_5$ has one uncovered elements $\{j\}$ .So second step selects $S_4$ and now partial cover $P =\{\{a,b,c,d,e,f\},\{g,h,i\}\}$.
4. In third step, $S_5$ has one uncovered elements $\{j\}$. $S_2$ has no uncovered elements and $S_3$ has one element $\{j\ $. So third step selects $S_5$ or $S_3$, Let $S_5$ be the selected set and then $P=\{ \{a,b,c,d,e,f\}, \{g,h,i\},\{j\}\}$. 

>Thus we get $|P| = 3$.

## **Modified Solution:**
1. Lets take step-size to be 2. We can choose any step-size based on our preference depending on number of subsets or other such criteria. Consider a partial set $O = \{\}$. It is empty initially.
2. The algorithm in each step selects two sets such that the union of two sets contain maximum number of uncovered elements.
3. In the first step of algorithm, candidates are $(S_1,S_2) , (S_1,S_3), (S_1,S_4), (S_1,S_5), (S_2,S_3), (S_2,S_4), (S_3,S_4), (S_3,S_5) and (S_4,S_5)$, among the ten candidates $(S2,S3)$ is better than all other candidates as $S_2 \cup S_3$ has ten uncovered elements and is grater than that of other candidates. So the first step selects $(S_2,S_3)$ and now partial set cover $O = \{ \{a,b,c,g,h\}, \{d,e,f,i,j\}\}$.
4. As all elements of $X$ are covered by $O$, algorithm terminates. Finally the set over is $O = \{ \{a,b,c,g,h\} \{d,e,f,i,j\}\}$ and that $|O| = 2$. 

>$O$ is smaller than the set cover $P$ computed by the classical greedy algorithm. **Thus, this improves computationally for set cover greedy algorithms.**

# **$$END$$**
-----


