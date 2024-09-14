"use strict";

const express = require("express");
const server = express();

const psql = require("./lib/psql.js");
const nx = require("./lib/nexus-lib.js");
const IPCDBLib = require("./lib/ipcdb-lib.js");

const config = require("./config.js");

server.use("/ipc", express.static("public"));

async function ipcx_template_main()
{
    let nexus = nx.nx_nexus_create();

    nexus.WEB_PATH = "";
    nexus.PAGE_TITLE = "myIPC.io";
    nexus.PAGE_DESCRIPTION = "Immortal Playable Character Explorer";
    nexus.PAGE_DIR = "";
    nexus.PAGE_CARD = "";
    
    let output = await nx.nx_load_template(nexus, "index");
    output = nx.nx_update_template(nexus, output);

    return output; 
}

server.get("/ipc", async (req, res) => {
    let output = await ipcx_template_main();
    res.send(output);
});
/*
server.get("/ipc/token_id/:token_id", async (req, res) => {

    let session = await IPCDBLib.ipcdb_connect();
    if (session == psql.PSQL_FAILED)
    {
        res.send(JSON.stringify({ 
            error_label: "PSQL_CONNECT_ERROR" }));

        return;
    }

    let token_id = req.params.token_id;
    if (token_id.match(/^\d+$/) == null)
    {
        res.send(JSON.stringify({ 
            error_label: "IPCDB_BAD_TOKENID" }));

        return;
    }

    token_id = parseInt(token_id);
    if (token_id == 0)
    {
        res.send(JSON.stringify({ 
            error_label: "IPCDB_BAD_TOKENID" }));

        return;
    }

    let ipc = await IPCDBLib.ipcdb_select_ipc(session, token_id);
    if (ipc == null)
    {
        ipc = await IPCDBLib.ipcdb_web3_adddb_ipc(session, token_id);
        if (ipc == null)
        {
            res.send(JSON.stringify({ 
                error_label: "IPCDB_IPC_NOTFOUND" }));

            return;
        }
    }
    else await IPCDBLib.ipcdb_web3_updatedb_ipc(session, ipc);

    session.client.end();
    res.send(JSON.stringify(ipc));
});
*/

server.listen(3000);
console.log("Starting IPC Database on port 3000...");

// const database = require("./backup.json");
// ipcdb_restore_database(database);

