#!/bin/sh

cd /home/ja/maks-tycoon
tmux new-session -d -s maks-tycoon ';' send -l 'java -jar maks-tycoon.jar' ';' send Enter

