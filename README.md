# TSDS (Typescript Data Structures)

This package contains a few data structures that don't have a native implementation in javascript.  All structures are compatible with Typescript and are designed to accept generics. 

## Getting Started
Pretty simple, just run 
```
npm i
```
and then you should be good to start developing on top of it. 

## Helpful Scripts
I added in a few other scripts for development.
1. compile - runs the tsc compiler
2. rc - stands for recompile.  Removes the dist folder and recompiles the typescript source files.
3. test - runs the rc command and then uses node to run the index.js file.  You can put tests in the index.ts file, and they will get compiled and automatically run in the index.js file.

## Using the Library
I've included the following classes - 
- Stack (Stack)
- Queue (Queue)
- Linked List (LinkedList)
  - ListNode
- Doubly Linked List (DblLinkedList)
  - DblListNode
- Binary Search Tree (BinarySearchTree)
  - TreeNode
- Avl Tree (AVLTree)
  - AVLTreeNode

The Linked List and Doubly Linked List have supporting classes that must be used in conjunction with their respective structure.

The Binary Search Tree and AVL Tree have supporting classes they are dependent on called TreeNode and AVLTreeNode, respectively.  
Each of these supporting classes have a value property - this value must be able to be compared, so keep that in mind.  You should be able to extend these classes to store more data if needed. 
