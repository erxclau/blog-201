#!/bin/node

const filenames = process.argv.slice(2);

if (filenames.length === 0) {
  process.exit(0);
}

const postnames = filenames.filter((name) => name.startsWith("posts/"));

if (postnames.length === 0) {
  process.exit(0);
}

console.log("Validating markdown files in posts/");

import matter from "gray-matter";
import { basename } from "path";

const hasKey = (obj, key) => obj.hasOwnProperty(key) && obj[key];

let failure = false;

postnames.forEach((name) => {
  const bname = basename(name);
  console.log("-", name);
  if (!name.endsWith(".md")) {
    console.log("  ❌", bname, "does not end with .md extension");
    failure = true;
  }

  const post = matter.read(name);

  if (!hasKey(post.data, "title")) {
    console.log("  ❌", bname, "is missing a title");
    failure = true;
  }

  if (!hasKey(post.data, "date")) {
    console.log("  ❌", bname, "is missing a date");
    failure = true;
  } else if (typeof (post.data.date) !== "string") {
    console.log("  ❌", "The date in", bname, "should be of type string");
    failure = true;
  }

  if (!hasKey(post.data, "dek")) {
    console.log("  ❌", bname, "is missing a description (dek)");
    failure = true;
  }

  if (!hasKey(post.data, "slug")) {
    console.log("  ❌", bname, "is missing a slug");
    failure = true;
  } else if (`${post.data.slug}.md` !== bname) {
    console.log("  ❌", "The slug in", bname, "should be the same as the file name");
    failure = true;
  }

  if (!post.content.trim()) {
    console.log("  🟡", "There is no content in", bname)
  }

  if (!failure) {
    console.log("  ✅", "All validations passed");
  }
});

process.exit(failure ? 1 : 0);

