const fs = require("fs").promises;
const path = require("path");

async function addRepo(filepath) {
  
    const repoPath = path.resolve(process.cwd(), ".apnaGit");
    const stagingPath = path.join(repoPath, "staging");

    try {
        await fs.mkdir(stagingPath,{recursive:true});
        const fileName = path.basename(filepath);
        await fs.copyFile(filepath, path.join(stagingPath,fileName));
        console.log(`File ${fileName} added to the staging area!`);
    } catch (err) {
        console.log("Error adding file: ", err);
    }
}

module.exports ={addRepo}