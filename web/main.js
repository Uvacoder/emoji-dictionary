import copy from 'clipboard-copy';
import App from './App.svelte';
import words from '../output.txt';

import 'spectre.css';

const emojiHash = {
	"id": "đ",
	"a": "đ°ī¸",
	"b": "đąī¸",
	"ab": "đ",
	"cl": "đ",
	"o": "đžī¸",
	"sos": "đ",
	"x": "â",
	"m": "âī¸",
	"atm": "đ§",
	"wc": "đž",
	"p": "đŋī¸",
	"i": "âšī¸",
	"abc": "đ¤",
	"ng": "đ",
	"ok": "đ",
	"up": "đ",
	"cool": "đ",
	"new": "đ",
	"free": "đ",
	"tm": "âĸī¸",
	"c": "ÂŠī¸",
	"r": "ÂŽī¸",
	"end": "đ",
	"back": "đ",
	"on": "đ",
	"top": "đ",
	"soon": "đ"
};

const sortedKeys = Object.keys(emojiHash).sort((a,b) => b.length - a.length);
const regexKeys = sortedKeys.map(key => new RegExp(key, 'g'));

const convertToEmoji = (word) => {
	let emojified = String(word);
	regexKeys.forEach((key, i) => emojified = emojified.replace(key, emojiHash[sortedKeys[i]]));
	return emojified;
}

function emojify(word) {
	let emojified = String(word);
	do {
		emojified = convertToEmoji(emojified);
	} while (emojified.split('').some(e => /^[a-zA-Z]+$/.test(e)));
	return emojified;
};

const app = new App({
	target: document.body,
	props: {
		copy,
		emoji: Object.values(emojiHash),
		sort: 'default',
		words: words.split('\n').map(emojify)
	}
});

window.app = app;

export default app;