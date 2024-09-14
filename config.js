const MSECONDS_DAY = 86400 * 1000;

const config = {
    IPCDB_USERNAME: "postgres",
    IPCDB_PASSWORD: "nexus2020",
    IPCDB_DATABASE: "nexusdb",
    IPCDB_HOST: "127.0.0.1",
    IPCDB_PORT: 5432,

    IPCDB_WEB3_PROVIDER: "https://eth-mainnet.alchemyapi.io/v2/6fYLeoOJ3Vp6ONxoiJ0jWkEYGcR8vRIH",
    IPCDB_WEB3_CONTRACTADDR: "0x011C77fa577c500dEeDaD364b8af9e8540b808C0",
    IPCDB_WEB3_TIMEOUT: 1000,

    IPCDB_IPC_NEXTUPDATE: MSECONDS_DAY * 1
};

module.exports = config;
