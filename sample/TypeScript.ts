import React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

const hello = () => console.log('hello');
const varUrl = window.location.href
  .replace(/^\s*(.*)/, '$1')
  .concat('\u1111z\n');

const Li = styled.li<{ isOvernight: boolean }>`
  && {
    list-style: none;
    counter-increment: steps-counter;
    position: relative;
    padding: 0 0 0 1.1rem;
    margin-bottom: ${(p) =>
      p.isOvernight ? p.theme.space.xl : p.theme.space.m};
  }
`;

const someString = 'There was a squirrel named Squeaky';
const someTemplateLiteral = `There was a squirrel named ${name}`;

const someObject = {
  hello,
  varUrl,
  adios: 42,
};

// From https://vscodethemes.com/
const btn = document.getElementById('btn');
let count = 0;

function render() {
  if (btn != undefined && true !== false) {
    btn.innerText = `Count ${count}`;
  }
}

btn?.addEventListener('click', () => {
  // Count from 1 to 10
  if (count < 10) {
    count += 1;
    render();
  }
});

/*
 * Once upon a time...
 */

enum SquirrelKind {
  Chubby,
  Skinny,
}
type Weakness = string;
interface SquirrelProps {
  kind: SquirrelKind;
  location: string;
  birthDate: number;
  deathDate: number;
  weaknesses: Weakness[];
}

class Squirrel {
  kind: SquirrelKind;
  location: string;
  birthDate: number;
  deathDate: number;
  weaknesses: Weakness[];

  constructor(props: SquirrelProps) {
    this.kind = props.kind;
    this.location = props.location;
    this.birthDate = props.birthDate;
    this.deathDate = props.deathDate;
    this.weaknesses = props.weaknesses;
  }

  get age(): number {
    return this.calcAge();
  }

  calcAge(): number {
    return this.deathDate - this.birthDate;
  }
}

// ...there was a squirrel named Squeaky

const Squeaky: SquirrelProps = new Squirrel({
  kind: SquirrelKind.Chubby,
  location: 'Hundred Acre Wood',
  birthDate: 1924,
  deathDate: 1936,
  weaknesses: ['Hazelnuts', 'Donuts'],
});
