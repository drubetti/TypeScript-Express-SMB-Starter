# TypeScript-Express-SMB-Starter

### Description

An example project with TypeScript, Babel and Express for connecting to an SMB shared directory.

### Requirements

- `smbclient` (on Linux) or Docker (on macOS/Windows)
- Node.js

### Setup

```shell
npm i
```

### Static Type Check

```shell
npm run type-check
```

### Run Tests

```shell
npm t
```

### Build JavaScript code

```shell
npm run build:js
```

Built code will be put in `dist` folder.

### Start App (AOT compilation)

Build JavaScript code, then run:

```shell
node dist
```

### Start App (on-the-fly compilation)

```shell
npm start
```

### Start App in Docker (AOT compilation)

Build the Docker image:

```shell
npm run docker-build
```

Once the image is built, run:

```shell
npm run docker-start
```

The Docker image must be rebuilt on code changes!

### Start App in Docker (on-the-fly compilation)

Build the Docker image:

```shell
npm run docker-build-dev
```

Once the image is built, run:

```shell
npm run docker-start-dev
```

or (for "watch" mode):

```shell
npm run docker-watch
```

The Docker image can be reused on code changes (the repository is mounted as a volume).

### Start bash in Docker

Build the Docker image:

```shell
npm run docker-build-dev
```

Once the image is built, run:

```shell
npm run docker-bash
```

### Start bash in Docker and mount SMB shared storage as a volume

Build the Docker image:

```shell
npm run docker-build-dev
```

Once the image is built, run:

```shell
npm run docker-start-privileged-dev
```

That will run the Docker image with the `--privileged` option, needed when mounting remote file systems in containers.

Then, mount SMB storage by executing `mountSMBfs.sh` script (set environment variables first, see `.env.sample`):

```shell
sh mountSMBfs.sh
```

SMB storage will be mounted to `/mnt/smbstorage`.
