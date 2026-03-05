#!/usr/bin/env bash
bash scripts/version.sh

npx prettier --write src/*.ts
