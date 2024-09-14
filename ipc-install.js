
const IPCDBLib = require("./ipcdb-lib.js");
const database = require("./backup.json");

IPCDBLib.ipcdb_restore_database(database);
