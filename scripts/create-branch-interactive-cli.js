#!/usr/bin/env node
import { execSync } from 'child_process';
import inquirer from 'inquirer';
import { prefixes, isValidBranchName } from './branch-utils.js';

const createBranchInteractive = async () => {
  const { type } = await inquirer.prompt([
    {
      type: 'list',
      name: 'type',
      message: 'Choose the type of branch:',
      choices: prefixes,
    },
  ]);

  let name;
  while (!name || !isValidBranchName(`${type}/${name}`)) {
    ({ name } = await inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the branch:',
      },
    ]));
    if (!isValidBranchName(`${type}/${name}`)) {
      console.error(`Invalid name: ${name}`);
    }
  }

  const branchName = `${type}/${name}`;

  const { shouldCreate } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'shouldCreate',
      message: `Create branch ${branchName}?`,
      default: true,
    },
  ]);

  if (!shouldCreate) {
    console.log('Aborted branch creation.');
    return;
  }

  execSync(`git branch ${branchName}`);
  console.log(`Created branch: ${branchName}`);

  const { shouldCheckout } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'shouldCheckout',
      message: `Switch to branch ${branchName}?`,
      default: true,
    },
  ]);

  if (shouldCheckout) {
    execSync(`git checkout ${branchName}`);
    // this is logged by git anyway
    // console.log(`Switched to branch: ${branchName}`);
  } else {
    console.log('Did not switch to new branch.');
  }
};

createBranchInteractive();