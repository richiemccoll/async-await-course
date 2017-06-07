const Bluebird = require("bluebird");

async function main() {
    console.log("working...");
    await Bluebird.delay(2000);
    console.log('Done');
}

main();