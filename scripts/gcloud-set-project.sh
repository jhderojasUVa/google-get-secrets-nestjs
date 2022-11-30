#!/bin/bash

PROJECT=$1

if [ -z "$PROJECT" ]
then
    echo "You need to set a project"
    exit 1
else
    gcloud config set project "$PROJECT"
fi
