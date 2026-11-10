#!/bin/bash
# usage: r4-reg.sh <batchfile> "<commit msg>"
cd "$TEMP/hcrv"
HOLD=$(cat "$TEMP/claude/rv/r4redo.txt" "$TEMP/claude/rv/r4cat.txt" 2>/dev/null)
BF="$TEMP/claude/rv/$1"; [ -s "$BF" ] || { echo "no batch file $BF"; exit 1; }
S=$(grep -vxF -f <(echo "$HOLD") "$BF" | while read s; do [ -f scripts/p2-content/$s.mjs ] && echo $s; done | paste -sd,)
[ -n "$S" ] || { echo "empty slug list"; exit 1; }
for h in $HOLD; do rm -f data/guides/$h.ts; [ -f scripts/p2-content/$h.mjs ] && mv -f scripts/p2-content/$h.mjs scripts/p3-hold/; done
MINP=1 ONLY=$S node scripts/gen-p2-batch.mjs "$TEMP/claude/rv/pools" scripts/p2-content --register 2>&1 | grep -v 'guides written' | tail -8
node scripts/generate-guides-index.mjs >/dev/null
npx tsc --noEmit 2>&1 | tail -3
f=0; for s in ${S//,/ }; do grep -q "slug: \"$s\"" data/guides.ts || { echo UNREG $s; continue; }; c=$(curl -sL -o /dev/null -w '%{http_code}' --max-time 300 http://localhost:3100/guide/$s); [ "$c" = 200 ] || { echo FAIL $s $c; f=1; }; done; echo "fails=$f"
git checkout -- AGENTS.md package-lock.json 2>/dev/null
git add data/guides data/guides.ts data/guides-index.generated.ts scripts/p2-content
git -c user.email="hoanglt@skycorporation.com" commit -q -m "$2

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>" 2>&1 | grep -v warning
git push -q origin main 2>&1 | tail -1; git log --oneline -1
