import { promisify } from "util";
import { pipeline } from "stream";
import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { readdir } from "fs/promises";
import { glob } from "glob";
import { join } from "path";
import { rimraf } from "rimraf";

const pipe = promisify(pipeline)

export const fileCompress = async (input, output) => {
  const gzip = createGzip();
  const source = createReadStream(input);
  const destination = createWriteStream(output);
  await pipe(source, gzip, destination);
}

/**
 * Compresses the files with gzip with the @files
 * parameter that will only compress the
 * files that match the specified pattern
 */
export const fileCompressDirectory = async (pattern) => {
  await glob(pattern, { withFileTypes: true })
    .then(files => {
      files.forEach(function(file) {
        const path = file.fullpath();

        fileCompress(path, path + ".gz");
        rimraf(path);
      });
    })
    .catch(err => console.log(err));
}