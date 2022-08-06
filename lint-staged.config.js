module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'npm tsc --noEmit',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': (filenames) => [
    `npm eslint --fix ${filenames.join(' ')}`,
    `npm prettier --write ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON
  '**/*.(md|json)': (filenames) =>
    `npm prettier --write ${filenames.join(' ')}`,
}