#!/usr/bin/env bash

# Start ngrok in background
ngrok http 3000 &
NGROK_PID=$!

# Wait for ngrok to be ready
sleep 2

# Start serve in background
scripts/serve.sh &
SERVE_PID=$!

# Trap to kill background processes on script exit
trap "kill $NGROK_PID $SERVE_PID" EXIT

# Wait for background processes
wait $NGROK_PID $SERVE_PID
