# **Week 3, Lecture 1-**
## Fast Fourier Transformations-
----

**Problem Statement:** Compute product of two $d$-degree polynomials. Here, $d$ belongs to a set of integers. 

Consider the polynomials:

$A(x)$ $=$ $a_0$ + $a_1x$ + ... + $a_dx^{d}$ 
$B(x)$ $=$ $b_0$ + $b_1x$ + ... + $b_dx^{d}$ 

On multiplying them, assume we get polynomial $C(x)$

$C(X)$ $=$ $c_0$ + $c_1x$ + ... + $c_dx^{d}$ 
where, the coefficients are represented by:

$c_k$ = $a_0b_k$ + $a_1b_{k-1}$ + ... + $a_kb_0$ = $a_ib_{k-i}$ 

> When we apply the Naive Algorithm, the **time complexity** is $O(d^{2})$. 

Alternate Representation: 
1. $Coefficient Representation$ $--Evaluation-->$ $Value Representation$.
2. $Value Representation$ $--Interpolation-->$ $Coefficient Representation$. 

## Evaluation by Divide and Conquer:

We split $d$-Degree Polynomial into two $d/2$ Degree Polynomials comprising of odd and even powers separately. 
The equation is:

$A(x)$ $=$ $A_e(x^{2})$ $+$ $x*A_o(x^{2})$ where, $A_e$ are even-numbered coefficients and $A_o$ are odd-numbered coefficients. 

**Advantage of this method:** We can evaluate the expression for both positive and negative terms of $x$. The corresponding equations for the same are:

1. $A(x_i)$ $=$ $A_e(x_i^{2})$ + $x_i$*$A_o(x_i^{2})$
2. $A(-x_i)$ $=$ $A_e(x_i^{2})$ - $x_i$*$A_o(x_i^{2})$

**Disadvatage of this approach:** $x_0^{2}$, $x_1^{2}$, ... , $x_{n/2-1}^{2}$ arent plus minus terms and hence, recursion fails after the first step. To make up for this, we use **Complex Numbers**.
More precisely, we use the **complex $n^{th}$ roots of unity**.

## **THE FFT ALGORITHM:**
-----
**function FFT(A,w):**

Input: Coefficient representation of the polynomial $A(x)$ of degree $\leq n-1$, where $n$ is power of 2 times of $w$, an $n^{th}$ root of unity.

Output: Value representation $A(w^{0}), ... , A(w^{n-1})$

if $w=1$: return $A(1)$

express $A(x)$ in the form $A_e(x_i^{2})$ + $x_i$*$A_o(x_i^{2})$

call FFT($A_e,w^{2}$) to evaluate $A_e$ at even powers of $w$.

call FFT($A_o,w^{2}$) to evaluate $A_o$ at even powers of $w$.

for $j=0$ to $n-1$:\
    compute $A(w^{j})$ $=$ $A_e(w^{2j})$ $+$ $w^{j}*A_o(w^{2j})$

return $A(w^{0}), ... , A(w^{n-1})$


### **Interpolation:**

We argued that the matrix $V_n$, whose $(i, j)$ entry is $ω_n^{ij}$, is invertible.\
In fact its inverse is almost the same as itself. Its $(i, j)$
entry is $1/n*w_n^{-ij}$.\
To check this, let’s compute the product of these two matrices. The $(i, j)$ entry of the product is: 
> $1/n * \sum\limits_{k=0}^{n-1} ({w_n^{ik} * w_n^{-kj}})$.

If $i = j$, each entry of this sum is $ω_n^{ij−ij}$ $=$ 1, and the sum is $n$. But if $i \neq j$, each entry is $ω_n^{k(i−j)}$, and these entries are an equal number of copies of each of the powers of $ω_n^{i-j}$ , which will add to zero because they are evenly spaced around the unit circle.\
The interpolation algorithm is thus very similar to the
evaluation algorithm. We need only switch the roles of
the arrays $y$ and $a$, replace each $ω_n$ with $ω_n^{-1}$, and divide the answer by n before returning it.

In terms of Matrix Representation, **Evaluation** is multiplication by $M$, while **Interpolation** is multiplication by $M^{-1}$. $M$ is matrix of coefficients of the polynomials. 

## **THE FFT ALGORITHM- MATRIX BASED:**
-----

function FFT $(a,w)$:

Input: An array $a = (a_0, a_1, ..., a_{n-1})$, for $n$ a power of 2. A primitive $n^{th}$ root of unity, $w$. \
Output: $M_n(w)*a$

if $w=1$: return a 

$(s_0,s_1,...,s_{n/2-1})$ $=$ FFT(($a_0$,$a_2$,...,$a_{n-2}$),$w^{2}$)

$(s_0^{'},s_1^{'},...,s_{n/2-1}^{'})$ $=$ FFT(($a_1$,$a_3$,...,$a_{n-1}$),$w^{2}$)

for $j=0$ to ${n/2-1}$:

$r_j$ $=$ $s_j$ $+$ $w^{j} * {s_j^{'}}$ \
$r_{j+n/2}$ $=$ $s_j$ $-$ $w^{j} * {s_j^{'}}$ 

return $(r_0,r_1,...,r_{n-1})$

-----
-----

# **Week 3, Lecture 2-**
## **GREEDY ALGORITHMS-**
-----

**Start of Minimum Spanning Tree (MSTs):**\
Input: We have an undirected graph $G=(V,E)$ with edge weights being $w_e$. 

Output: The output we get for the following is a tree $T=(V,E^{'})$, with $E^{'} \subseteq E$, that mimimizes and gives us:
> $weight(T)$ $=$ $\sum\limits_{e \in E^{'}}w_e$

To find the MST, we use a Greedy Approach named: **Krushkal's Algorithm.** The algorithm can be easily explained by saying:
_Repeatedly add the next lightest edge till it does not produce a cycle._ To prove the above, we make use of **The CUT property.** 

**NOTE:** We generally prove such theorems using induction methods, since they are comparitively more intutive. 

> Let edges $X$ be part of a minimum spanning tree of $G=(V,E)$. Then, pick any subset of nodes $S$. Ensure that $X$ does not cross between $S$ and $V-S$, which is essentially its complement. Assume edge $e$ to be the lightest edge across this pattern. Then, we can claim that $X \cup {[e]}$ is part of some MST. 

**Results of proofs:** Any connected, undirected graph $G=(V,E)$ with $|E| = |V|-1$ is a tree. Thus, a tree with $n$ nodes has $n-1$ edges. 

When we compare the weights of the the tree, $T'$ and $T$, we get the relation:

> $weight(T') = weight(T)+w(e)-w(e')$. Thus, this means that the Krushkal's Algorithm is correct. 

## **Krushkal's Algorithm Pseudocode:**
>procedure $krushkal(G,w)$:\
Input: A connected undirected graph $G=(V,E)$ with edge weights $w_e$.\
Output: A minimum spanning tree defined by the edges $X$.\
for all $u \in V$: \
makeset($u$) \
$X = []$ \
Sort all edges $E$ by weight
for all edges $[u,v] \in E$, in increasing order of weight: \
if $find(u) \ne find(v)$: \
add edge $[u,v]$ to $X$ \
union($u,v$)

-----

## **Disjoint-Set Data Structure:**
Assume that you have a set of N elements that are into further subsets and you have to track the connectivity of each element in a specific subset or connectivity of subsets with each other. You can use the union-find algorithm (disjoint set union) to achieve this.

Let’s say there are 5 people A, B, C, D, and E.
A is B's friend, B is C's friend, and D is E's friend, therefore, the following is true:

1. A, B, and C are connected to each other.
2. D and E are connected to each other.

You can use the union-find data structure to check each friend is connected to the other directly or indirectly. You can also determine the two different disconnected subsets. Here, 2 different subsets are {A, B, C} and {D, E}.

You have to perform two operations:

1. Union(A, B): Connect two elements A and B.
2. Find(A, B): Find whether the two elements A and B are connected.
-----
>$function find(x)$\
while $x \ne \pi (x)$ : $x = \pi(x)$ \
return $x$

>$procedure union (x,y)$\
$r_x = find(x)$ \
$r_y = find(y)$ \
if $r_x = r_y:$ \
return \
if $rank(r_x) > rank(r_y):$ \
$\pi(r_y) = r_x$ \
else:
$\pi(r_x) = r_y$ \
if $rank(r_x) = rank(r_y):$ \
$rank(r_y) = rank(r_y) +1$



### **Time Complexities:**
1. $|V|$ for makeset. Makeset: create a singleton set containing just $x$.
2. $2|E|$ for finding. Finding to which set $x$ belongs to.
3. $|V|-1$ for performing union operations.  

**Rank:** Rank is the height of the sub-tree below that particular node. When we merge the 2 sets, the goal is to **make root of shorter tree point to the root of the taller tree.** 

### Three properties of $Rank(x):$
1. **Property 1-** For any $x$, $rank(x) < rank( \pi (x) )$.
2. **Property 2-** Any root node of rank $k$ has atleast $2^{k}$ nodes in its tree.
3. **Property 3-** if there are $n$ elements overall, there can be at most $n/2^{k}$ nodes of rank $k$.

### **Time Complexities:**
1. $O(1)$ for makeset. Makeset: create a singleton set containing just $x$.
2. $O(logn)$ for finding. Finding to which set $x$ belongs to.
3. $O(logn)$ for performing union operations.  

**Overall time complexity:** $O((E|+|V|)log |V|)$

To improve upon it, we do _Path Compression_ where the edges of the graph are sorted. 

We modify the 'find' function. We change all pointers so that they point directly to the node. Thus, we dont go to the parent, we make the parent the root instead. When we observe it figuratively, we see that the depth of the tree reduces significantly. 

>$function find(x)$\
while $x \ne \pi (x)$ : $x = find(\pi(x))$ \
return $\pi(x)$

**NOTE:** Ranks remain unchanged. We divide them into $log*$ intervals. $[k+1,2^{k}]$ is the set containing elements of each partition.

Thus, compared to above, we observe the _time complexity_ to become: $log*n$.

Overall time for $m$ finds is $O(mlog*n)$ $+$ $2^{k} * the number of nodes with rank > k$. This is $\leq nlog*n$ for all the intervals. 

### **CONCLUSION:** Krushkal's Algorithm using Disjoint-Sets data structure with path compression runs with the complexity of:
>### Sorting $|E|$ elements $+$ $O(|E|*log*|V|)$


## **END OF WEEK 3**
-----
-----
