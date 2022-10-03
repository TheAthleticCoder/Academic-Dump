# **Week 13, Lecture 1**
## **Quantum Computing and Quantum Algorithms**
### _**Main Focus:** Qubits and other Basics_
----

## **Qubit:** 
So we have heard of bits. A bit is a building block of classical computational devices which is a two-state
system. $$0 \iff 1$$

What sets apart the quantum world from the regular computational world is that quantum mechanics tells us that any such system can exist in a superposition of states. In general, the state of a quantum bit (or qubit for short) is described by: 
$$\alpha|0\rangle + \beta|b\rangle = 1$$ 
where, $\alpha$ and $\beta$ are complex numbers, satisfying:
$$|α|^2 + |β|^2 = 1$$
A qubit may be visualised as a unit vector on the plane. In general, however, $\alpha$ and $\beta$ are complex numbers. 

Any attempt to measure the state $\alpha|0\rangle + \beta|b\rangle$ results in $|0\rangle$ with probability $|\alpha|^2$, and $|1\rangle$ with probability $|\beta|^2$. We can only extract one bit of information from the state of a qubit. 

$\alpha|0\rangle + \beta|1\rangle$ and $\alpha|0\rangle − \beta|1\rangle$ have the same probabilities for their measurement. However, they are distinct states which behave differently in terms of how they evolve. 

## **Quantum Entanglment:** 

An n-qubit system can exist in any superposition of the $2^n$ basis states. Sometimes such a state can be decomposed into the states of individual bits
$1/2(|00\rangle + |01\rangle + |10\rangle + |11\rangle) = 1√2(|0\rangle + |1\rangle) \otimes 1√2(|0\rangle + |1\rangle)$. 

When we compare the two (2-qubit) states:
1. $1/√2(|00\rangle + |01\rangle)$
2. $1√2(|00\rangle + |11\rangle)$

If we measure the first qubit in the first case, we see $|0\rangle$ with probability 1 and the state remains unchanged.
In the second case (an EPR pair), measuring the first bit gives $|0\rangle$ or $|1\rangle$ with equal probability. After this, the second qubit is also determined. 

## **Quantum Teleportation:** 
this is one of the applications of the encoding of information in quantum states. It does not rely on quantum computation as such, but the properties of information encoded in quantum states: superposition and entanglement.

Lets take two participants, Alice and Bob. The quantum teleportation protocol allows Alice to send Bob a qubit, by sending just two classical bits along a classical channel, provided they already share an entangled pair. Contrast this with the no-cloning theorem, which tells us that we cannot make a copy of a qubit. Alice has a state $|φ\rangle$ that she wishes to transmit to Bob. The two already share a pair of qubits in state $1/√2 (|00\rangle + |11\rangle)$. 

Alice conveys to Bob the result of her measurement. Say the qubit in Bob’s possession is in state $|θ\rangle$, then: 
1. If Alice measures $|00\rangle$, then $|\phi\rangle = |θ\rangle$.
2. If Alice measures $|01\rangle$, then $|\phi\rangle = X|θ\rangle$.
3. If Alice measures $|10\rangle$, then $|\phi\rangle = Z|θ\rangle$.
4. If Alice measures $|11\rangle$, then $|\phi\rangle = XZ|θ\rangle$. 

Thus, Bob performs the appropriate operation and now has a qubit whose state is exactly $|\phi\rangle$.


## **END OF WEEK 13, LECTURE 1**
-----
-----

