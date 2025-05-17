#!/bin/bash

find ~/repos/YouTube-Dorgen-Docs/docs -name "*.md" -exec sed -i 's/\[video:https:\/\/youtu\.be\/\([a-zA-Z0-9_-]*\)(:)?\]/<YouTubeEmbed videoId="\1" \/>/g' {} \;
