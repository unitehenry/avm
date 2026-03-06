#!/usr/bin/env bash

scripts/version.sh

# Start ngrok in background
ngrok http 3000 &
NGROK_PID=$!

# Wait for ngrok to be ready
sleep 2

# Start serve in background
if command -v nohup >/dev/null 2>&1; then
    nohup scripts/serve.sh > log.txt
    SERVE_PID=$!
else
    scripts/serve.sh &
    SERVE_PID=$!
fi

# Trap to kill background processes on script exit
trap "kill $NGROK_PID $SERVE_PID" EXIT

# Wait for background processes
wait $NGROK_PID $SERVE_PID
