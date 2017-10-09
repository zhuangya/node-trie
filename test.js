'use strict';

const Trie = require('./');

const trie = new Trie();

trie.addWord('hope');
trie.addWord('house');
trie.addWord('horse');
trie.addWord('human');
trie.addWord('google');
trie.addWord('children');

test('trie', () => {
  expect(trie).toMatchSnapshot();
});

test('exists()', () => {
  expect(trie.exists('hope')).toBe(true);
  expect(trie.exists('hop')).toBe(false);
  expect(trie.exists('oogle')).toBe(false);
  expect(trie.exists('children')).toBe(true);
  expect(trie.exists('horse')).toBe(true);
});
