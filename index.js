'use strict';

class Trie {
  constructor(letter = '', eow = false) {
    this.letter = letter;

    this.isEndOfWord = false;
    this.eow = eow;
    this.children = {};

    this.addChild = this.addChild.bind(this);
    this.addWord = this.addWord.bind(this);

    Object.defineProperty(this, 'letter', {
      writable: false,
      enumerable: true,
    });
    Object.defineProperty(this, 'addChild', { enumerable: false });
    Object.defineProperty(this, 'addWord', { enumerable: false });
  }

  set eow(flag) {
    this.isEndOfWord = this.isEndOfWord || flag;
  }

  addChild(letter, eow) {
    let target = null;
    if (this.children[letter]) {
      target = this.children[letter];
      this.children[letter].eow = eow;
    } else {
      target = new Trie(letter, eow);
      this.children[letter] = target;
    }

    return target;
  }

  addWord(word) {
    const l = word.length;
    let to = this;
    [...word].forEach((c, i) => {
      to = to.addChild(c, i === l - 1);
    });
  }

  exists(query) {
    let stop = this;
    for (let i = 0, l = query.length; i < l; i++) {
      if (stop.children && stop.children[query[i]]) {
        stop = stop.children[query[i]];
        continue;
      } else {
        return false;
      }
    }

    return stop.isEndOfWord;
  }
}

module.exports = Trie;
