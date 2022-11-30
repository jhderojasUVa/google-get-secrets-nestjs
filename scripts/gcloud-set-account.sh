#!/bin/bash

ACCOUNT=$1

if [ -z "$ACCOUNT" ]
then
    echo "You need to set an account!"
    exit 1
else
    gcloud config set account '$ACCOUNT'
fi
