'use strict';

{
  const button = document.querySelector('button');
  const target = document.querySelector('p');

  document.querySelector('button').addEventListener ('click', () => {
    if (target.textContent === 'quintessence') {    
      document.querySelector('p').textContent = '真髄';
      document.querySelector('button').textContent = 'Translate';
    } else {
      document.querySelector('p').textContent = 'quintessence';
      document.querySelector('button').textContent = '翻訳';
    }
  });
}