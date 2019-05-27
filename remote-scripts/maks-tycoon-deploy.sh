#!/bin/sh

./maks-tycoon-stop.sh
rm -rf maks-tycoon
tar -xzvf release.tgz
mv release maks-tycoon
./maks-tycoon-start.sh

