import fs, { FileHandle } from "fs/promises";
import { join } from "path";
import { glob } from "glob";
import { rimraf } from "rimraf";

/**
 * Recursively deletes files
 * older than @age in milliseconds
 */
export const oldFileRemove = async (pattern, age) => {
  const now = new Date().getTime();

  await glob(pattern, { withFileTypes: true })
    .then(files => {
      files.forEach(function(file) {
        const path = file.fullpath();

        fs.stat(path)
          .then(stat => {
            const endTime = new Date(stat.ctime).getTime() + age;
            if (now > endTime) {
              return rimraf(path);
            }
          })
          .catch(err => console.log(err));
      });
    })
    // logger not initialized yet
    .catch(err => console.log(err));
}