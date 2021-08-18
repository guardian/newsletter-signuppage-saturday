# Interactives DCR Harness

Aims:

- provide an accurate representation of what an interactive will look like live
  in DCR
- colocate interactives together in the same repo for greater code reuse and
  also discoverability
- a fast, easy-to-use development environment
- support existing S3 upload
- easy access to Guardian design language (e.g. fonts and Source colours)

## Creating a new atom

From the root, run:

    $ esbuild generate

You will be prompted for some basic info (project name, owner) and then a
starter directory - sharing the project name - will be created.

## Commands (from project folder)

    $ esbuild start
    $ esbuild test
    $ esbuild upload // builds and pushes to s3
