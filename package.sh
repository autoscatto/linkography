#!/bin/sh
zip -r linkography.xpi * --exclude ${0##*/} --exclude .git/\* --exclude logo.svg