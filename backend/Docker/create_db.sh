#!/bin/bash
set -e

PG="psql -v ON_ERROR_STOP=1 --username ${POSTGRES_USER}"

echo "User ${POSTGRES_USER}"
echo "Creating db: ${DEV_DB}"
$PG <<EOSQL
CREATE DATABASE ${DEV_DB} OWNER ${POSTGRES_USER};
EOSQL