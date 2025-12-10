const providers = {
    duckduckgo: 'duckduckgo',
    openai: 'openai',
}

const DEFAULT_PROVIDER = Object.keys(providers)[1]

module.exports = { providers, DEFAULT_PROVIDER }
