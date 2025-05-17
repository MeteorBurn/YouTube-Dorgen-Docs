#!/bin/bash

find ~/repos/YouTube-Dorgen-Docs/docs -name "*.md" -exec sed -i 's/!\[\](.\([^)]*\))\{width=\([0-9]*\)px height=\([0-9]*\)px\}/<img src=".\1" width="\2" height="\3" \/>/g' {} \;

find ~/repos/YouTube-Dorgen-Docs/docs -name "*.md" -exec sed -i 's/\[image:\(.[^:]*\):::[0-9,]*:[0-9:]*:\([0-9]*\)px:\([0-9]*\)px\]/<img src="\1" width="\2" height="\3" \/>/g' {} \;
