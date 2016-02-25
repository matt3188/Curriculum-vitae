#!/bin/bash

rm -rf out || exit 0;
mkdir out;

GH_REPO="@github.com:matt3188/Curriculum-vitae.git"

FULL_REPO="https://$GH_TOKEN$GH_REPO"

set -o errexit -o nounset

if [ "$TRAVIS_BRANCH" != "master" ]
then
  echo "This commit was made against the $TRAVIS_BRANCH and not the master! No deploy!"
  exit 0
fi

rev=$(git rev-parse --short HEAD)

cd out

git init
git config user.name "Travis CI"
git config user.email "hello@matt-coleman.co.uk"

git add .
git commit -m "Deploy to Github Pages at ${rev}"
git push --force --quiet $FULL_REPO master:gh-pages
