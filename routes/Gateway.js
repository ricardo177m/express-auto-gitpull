const express = require("express");
const router = express.Router();
const { config } = require("../config/config");
const { canWrite } = require("../utils/utils");
const { exec } = require("child_process");

router.post("/", async (req, res) => {
  console.log("[i] Received gateway request");

  const repo = config.repos.find(
    (repo) => repo.repoFullName == req.body.repository.full_name
  );

  if (repo === undefined) {
    console.log("[!] Repository not registered.");
    return res.status(400).json({
      message: "Repository not registered.",
      success: false,
    });
  }

  // if (
  //   repo.secret !== undefined &&
  //   req.body.config.secret === undefined &&
  //   req.body.config.secret !== repo.secret
  // ) {
  //   console.log("[!] Invalid secret.");
  //   return res.status(400).json({
  //     message: "Invalid secret.",
  //     success: false,
  //   });
  // }

  const isWritable = await canWrite(repo.path);

  if (!isWritable) {
    console.log("[!] Repository path is not writable.");
    return res.status(500).json({
      message: "Repository path is not writable.",
      success: false,
    });
  }

  exec(
    config.updateCommand.replace("<PATH>", repo.path),
    (error, stdout, stderr) => {
      if (error) {
        console.log(error.message);
        res.status(500).json({
          message: "Internal Server Error",
          success: false,
        });
      }

      if (stderr) {
        console.log(stderr);
        res.status(500).json({
          message: "Internal Server Error",
          success: false,
        });
      }

      console.log(stdout);
      res.status(200).json({
        message: "OK",
        success: true,
      });
    }
  );
});

module.exports = router;
