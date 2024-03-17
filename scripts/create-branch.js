#!/usr/bin/env node
import { execSync } from 'child_process';
import { prefixes, allowedLetters } from './branch-utils.js';

const createBranch = (type, name) => {
  if (!prefixes.includes(type)) {
    console.error(`Invalid type: ${type}`);
    console.error(
      `Type should be one of the following: "${prefixes.join('", "')}"`
    );
    process.exit(1);
  }

  if (!new RegExp(`^${allowedLetters}$`).test(name)) {
    console.error(`Invalid name: ${name}`);
    console.error(
      'Name should consist of lowercase letters, numbers and hyphens only. Hyphens are not allowed at the beginning or the end of the name.'
    );
    process.exit(1);
  }

  const branchName = `${type}/${name}`;
  execSync(`git checkout -b ${branchName}`);
  console.log(`Created and switched to new branch: ${branchName}`);
};

const [type, name] = process.argv.slice(2);
createBranch(type, name);
