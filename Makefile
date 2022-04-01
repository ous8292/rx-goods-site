# Makefile for various tasks with or around the code.
#

SHELL := /bin/bash -o pipefail -o errexit


lint:              ## Run tests
	./node_modules/.bin/eslint .

enviroment:
	npm ci

build:
	npm run build --if-present