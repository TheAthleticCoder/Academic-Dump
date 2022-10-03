# **Week 7, Lecture 1**
## **Dynamic Programming**
### _**Main Focus:** Shortest Reliable Path, Floyd-Warshal Algorithm, Independent Set in Trees_
----

## **All Pairs Shortest Path Problem:**

We are given a weighted directed graph $G = (V,E)$, where $V = \{1,2,...,n\}$. We have to find the shortest path between any nodes in the graph. For the benefit of quick dynammic programming, we let the weights be represented in the matrix $C[V][V]$, where $C[i][j]$ indicates the weight between the nodes $i$ and $j$. 

**NOTE:** $C[i][j] = -1$ if there is no path from node $i$ to node $j$. 

**Floyd - Warshall Algorithm:** This algorithm uses matrix $A[1...n][1...n]$ to compute the lengths of the shortest paths. Initially, 

$$A[i,j] = C[i,j] \quad if \quad i \ne j$$
$$A[i,j] = 0 \quad if \quad i = j$$

From the defenition, $C[i,j] = -1$ if there is no path from $i$ to $j$. The algorithm makes $n$ passes over $A$. Let $A_0,A_1,...,A_n$ be values of $A$ on the $n$ passes, with $A_0$ being the initial value. 

Just after the ${k-1}^{th}$ iteration, $A_{k-1}[i,j] = $ smallest length of any path from vertex $i$ to vertex $j$ that does not pass through vertices $\{k+1,k+2,...,n\}$. That means, it passes through the vertices possibly through $\{1,2,3,...,k-1\}$. 

In each iteration, the value $A[i][j]$ is updated with minimum of $A_{k-1}[i,j]$ and $A_{k-1}[i,k]+A_{k-1}[k,j].$

$$A[i,j] = min\{A_{k-1}[i,j] \newline \quad A_{k-1}[i,k]+A_{k-1}[k,j]\}
$$

The $k^{th}$ pass explores whether the vertex $k$ lies on an optimal path from $i$ to $j$, for all $i,j$. 

```c++
void Floyd-Warshall(int C[][], int A[][], int n)
{
    int i,j,k;
    for(i=0; i<=n-1;i++){
        for(j=0;j<=n-1;j++){
            A[i][j] = C[i][j];
        }
    }
    for(i=0; i<=n-1;i++){
        A[i][j]=0;
    }
    for(k=0; k<=n-1;k++){
        for(i=0;i<=n-1;i++){
            for(j=0;j<=n-1;j++){
                if(A[i][k] + A[k][j] < A[i][j]){
                    A[i][j] = A[i][k] + A[k][j];
                }
            }
        }
    }
}
```

**Time Complexity:** $O(n^3)$

-----

## **Independent Set In Trees:**

Trees provide another structure where we can frequently bound the number of subproblems. Consider a rooted tree $T$ with $n$ vertices. How many subtrees does T have? Since each subtree consists of all the descendants of a particular vertex in $T$, there are as many subtrees as number of vertices in $T$. i.e. $n$ in all.  

The following dynamic programming algorithm explains the same:

Given a graph $G(V,E)$, the maximum independent set in $G$ is a subset $I \subseteq V$ such that no two vertices in $I$ are adjacent in $G$, and such that $I$ is as large as possible. It is immensely difficult to solve this problem in general. Indeed, it is one of the NP-complete problems (a class of problems we will talk about later in the semester.
We will show that if the given graph $G(V,E)$ is a tree, then using dynamic programming, the maximum independent set problem can be solved in linear time. The algorithm proceeds:


Root the tree at an arbitrary vertex. Now each vertex defines a subtree (the one hanging from it). Dynamic programming proceeds, as always, from smaller to larger subproblems- that is to say, bottom-up in the rooted tree. Suppose that we know the size of the largest
independent set of all subtrees below a node $j$. 

The maximum independent set in the subtree hanging from $j$ has two cases: 
1. Either $j$ is in the maximum independent set
2. It is not. If it is not, then the maximum independent set is simply the union of the maximum independent sets of the subtrees of the children of $j$. 

If $j$ is in the maximum independent set, then the maximum independent set consists of $j$, plus the union of the maximum independent sets of the subtrees of the grandchildren of $j$. 

The recursive equation is now easy to write: Let $I(j)$ be the size of the maximum independent set in the subtree rooted at vertex $j$. 

> $$I(j) := max\{ \sum\limits_{k child of j}I(k), \quad 1+ \sum\limits_{k grandchild of j}I(k)\}$$

It might seem at first that the complexity of this algorithm is $O(n^2)$, since there are $n$ entries to be filled in, and the maximum time to compute an entry can be as large as $O(n)$ (since a vertex $j$ might have $O(n)$ grandchildren). However, there is a clever argument showing that the total number of steps is only $O(n)$: For each vertex, the algorithm only looks at its children and its grandchildren; hence, each vertex $j$ is looked at only three times: when the algorithm is processing vertex $j$, when it is processing $j's$ parent, and when it is processing $j's$ grandparent. 

**Total Iterations:** Since, each vertex is looked at only a constant number of times, the total number of steps is $O(n)$. There are $n-1$ edges in a tree on $n$ nodes.

## **END OF WEEK 7, LECTURE 1**
-----
-----

