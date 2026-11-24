# One-Line Robot Wedding Vows

[![make.fun](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![rank](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/upinhuy/robot-wedding-vows/rank.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![reward](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/upinhuy/robot-wedding-vows/reward.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)

Entry for the [One-Line Robot Wedding Vows](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b) bounty on [make.fun](https://make.fun/r/hv9zk8y5) — the funniest single line of wedding vows a robot couple could say, at most 160 characters.

## The vow

> I take you to be my lawfully wedded unit, in full charge and in low battery, in sickness and in health, till a firmware update do us part.

## How it works

`main.ts` (Node 22, plain TypeScript, no dependencies, no network, no environment variables) writes that one line to `/output/entry.txt`, with no trailing newline. It self-checks the competition gate first: 1–160 characters, a single line, not only white space.

```sh
node main.ts
cat /output/entry.txt
```
