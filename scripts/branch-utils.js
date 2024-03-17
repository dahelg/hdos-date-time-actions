import { execSync } from 'child_process';

export const prefixes = ['feature', 'bugfix', 'hotfix'];
export const separator = '/';
export const allowedLetters = '(?!-)[a-z0-9-]+(?<!-)';
export const disallowedNames = [
  'feature',
  'bugfix',
  'hotfix',
  'main',
  'undefined',
  'null',
];

// export const isValidBranchName = (branchName) =>
//   new RegExp(`^(${prefixes.join('|')})${separator}${allowedLetters}$`).test(
//     branchName
//   );

export const isValidBranchName = (branchName) => {
  const nameParts = branchName.split(separator);
  const name = nameParts[nameParts.length - 1];

  if (disallowedNames.includes(name)) {
    return false;
  }

  return new RegExp(
    `^(${prefixes.join('|')})${separator}${allowedLetters}$`
  ).test(branchName);
};

export const getBranchName = () =>
  execSync('git branch --show-current').toString().trim();
