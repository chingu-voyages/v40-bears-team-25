import nextJest from 'next/jest'
import { Config } from 'jest'

// Sync object
const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig: Config = {
	// rootDir: './__tests__',
	// Add more setup options before each test is run
	setupFilesAfterEnv: ['@testing-library/jest-dom'], // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
	moduleDirectories: ['node_modules', '<rootDir>/'],
	testEnvironment: 'node', // NOTE: this has to be 'node' instead of jsdom for mongoose to work.
}

export default createJestConfig(customJestConfig)
