#!/usr/bin/env node
import { execSync } from 'child_process';
import readline from 'readline';
import { prefixes, allowedLetters, isValidBranchName } from './branch-utils.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (question) => new Promise((resolve) => rl.question(question, resolve));

const createBranchInteractive = async () => {
  let type;
  while (!type || !prefixes.includes(type)) {
    type = await askQuestion(`Enter the type of branch (${prefixes.join(', ')}): `);
    if (!prefixes.includes(type)) {
      console.error(`Invalid type: ${type}`);
    }
  }

  let name;
  while (!name || !isValidBranchName(`${type}/${name}`)) {
    name = await askQuestion('Enter the name of the branch: ');
    if (!isValidBranchName(`${type}/${name}`)) {
      console.error(`Invalid name: ${name}`);
    }
  }

  const branchName = `${type}/${name}`;
  execSync(`git checkout -b ${branchName}`);
  console.log(`Created and switched to new branch: ${branchName}`);

  rl.close();
};

createBranchInteractive();