class Node {
    constructor() {
        this.children = {};
        this.isTerminal = false;
    }
}

class Trie {
   constructor() {
       this.root = new Node();
   }

   insertRecur(word, startIdx = 0, root = this.root) {
       const letter = word[startIdx];

       if (!(letter in root.children)) {
           root.children[letter] = new Node();
       }

       if (startIdx === word.length - 1) {
           root.children[letter].isTerminal = true;
       } else {
           this.insertRecur(word, startIdx + 1, root.children[letter]);
       }
   }

   insertIter(word) {
       let currNode = this.root;

       for (let i = 0; i < word.length; i++) {
           const letter = word[i];

           if (!(letter in currNode.children)) {
               currNode.children[letter] = new Node();
           }

           currNode = currNode.children[letter];
       }

       currNode.isTerminal = true;
   }

   searchRecur(word, startIdx = 0, root = this.root) {
       const letter = word[startIdx];

       if (startIdx > word.length - 1) {
           return root.isTerminal ? true : false;
       }

       return (letter in root.children) ? 
            this.searchRecur(word, startIdx + 1, root.children[letter]) 
            : false;
   }

   searchIter(word) {
       let currNode = this.root;
       for (let i = 0; i < word.length; i++) {
           const letter = word[i];
           if (!(letter in currNode.children)) return false;
           currNode = currNode.children[letter];
       }
       return currNode.isTerminal;
   }

   wordsWithPrefix(prefix, root = this.root) {
       const words = [];

       let currNode = this.root;
       for (let i = 0; i < prefix.length; i++) {
           const letter = prefix[i];
           if (!(letter in currNode.children)) return [];
           currNode = currNode.children[letter];
       }

       if (currNode.isTerminal) words.push(prefix);
       for (let letter in currNode.children) {
           const newWords = this.wordsWithPrefix(prefix + letter, currNode.children[letter]);
           words.push(...newWords);
       }

       return words;
   }
}

module.exports = {
    Node,
    Trie
};