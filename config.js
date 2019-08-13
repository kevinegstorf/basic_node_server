/* 
    Create and export configuration constiables
*/

// Container for all the environments

const env = {};

// Staging {default} environment

env.staging = {
    'httpPort': 3000,
    'httpsPort': 3001,
    'envName': 'staging'
};

// Production environment
env.production = {
    'httpPort': 5000,
    'httpsPort': 5001,
    'envName': 'production'
}

// Determine which environment was passed as a command-line argument.
const currentEnvironment = typeof (process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// Check that the current environment is one of the environments above, if not, default to staging
const environmentToExport = typeof (env[currentEnvironment]) == 'object' ? env[currentEnvironment] : env.staging;

// Export module
module.exports = environmentToExport;