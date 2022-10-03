# **Week 6, Lecture 1**
## **Dynamic Programming**
### _**Main Focus:** Edit Distance Computation_
----

**Problem Statement:** Two strings $A$ of length $m$ and $B$ of length $n$, transform $A$ into $B$ with minimum number of operations. The operations are: 
1. Delete a character from $A$.
2. Insert a character into $A$.
3. Change some character in $A$ into a new character. 

The minimum number of such transformations is called the **edit distance**.

**Dynammic Programming Solution:** 

**Input:** Two text strings $A$ of length $m$ and $B$ of length $n$.

Before going to a solution, let us consider the possible operations for converting $A$ into $B$. 
1. If $m>n$, we need to remove some characters of $A$.
2. If $m==n$, we need to convert some characters of $A$.
3. If $m<n$, we need to insert some characters in $A$.  

Now, lets assume the **cost of operations**: 
1. Insertion of a character: $c_i$
2. Replacement of a character: $c_r$
3. Deletion of a character: $c_d$

We generate the recursive formulation of the problem. Let, $T(i,j)$ represents the minimum cost required to transform first $i$ characters of $A$ to first $j$ cahracters of $B$. That means, $A[1 ... i]$ to $B[1 ... j]$

>$T(i,j) = min\{c_d+T(i-1,j); \quad T(i,j-1)+c_i; \quad T(i-1,j-1) [if A[i]==B[j]]; \quad T(i-1,j-1)+c_r [if A[i]\ne B[j]] \}$.

Based on the above discussion we have the following cases:
1. If we delete $i^{th}$ character from $A$, then we have to convert remaining $i-1$ characters of $A$ to $j$ characters of $B$.
2. If we insert $i^{th}$ character in $A$, then convert these $i$ characters of $A$ to $j-1$ characters of $B$.
3. If $A[i]==B[j]$, then we have to convert the remaining $i-1$ characters of $A$ to $j-1$ characters of $B$.
4. If $A[i] \ne B[j]$, then we have to replace $i^{th}$ character of $A$ to $j^{th}$ character of $B$ and convert remaining $i-1$ characters of $A$ to $j-1$ characters of $B$.

**How many subproblems are computed:** In the above formula, $i$ can range from 1 to $m$ and $j$ can range from 1 to $n$. This gives $mn$ subproblems and each one takes $O(1)$ and the **time complexity** is $O(mn)$. 

**Space Complexity:** $O(mn)$ where $m$ is number of rows and $n$ is number of columns in the given matrix. 

## **END OF WEEK 6, LECTURE 1**
-----
-----

