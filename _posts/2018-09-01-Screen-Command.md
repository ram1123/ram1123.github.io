---
layout: post
title: "Terminal multiplexer (screen/tmux)"
date: 2018-09-01
categories: programming
tags: screen tmux
giscus_comments: true
description: "Using GNU Screen and tmux to manage persistent terminal sessions on remote machines."
---

# Table of Contents
{: .no_toc}

* TOC
{:toc}

------------------------------------

A terminal multiplexer is a software tool that allows multiple terminal sessions to run within a single terminal window, or within a single instance of a terminal emulator. Terminal multiplexers provide a way to manage multiple terminal sessions more efficiently, and can be especially useful for users who work with many terminal windows at once, or who need to maintain terminal sessions after disconnecting from a remote server.

Some of the features provided by terminal multiplexers include:

- `Split-screen mode`: allows us to divide the terminal window into multiple panes, each running a separate terminal session.
- `Session management`: enables us to switch between terminal sessions, or detach from a session and resume it later.
- `Window management`: provides a way to organize terminal windows into different workspaces, or tabs, for easy switching between them.
- `Copy-and-paste`: allows us to copy and paste text between terminal sessions, or between different applications running on the same machine.

Two popular terminal multiplexers are `screen` and `tmux`. Both provide similar functionality, and both have their own unique features and customization options. The choice between screen and tmux is largely a matter of personal preference, and both are widely used in the Unix/Linux community.

# TMUX

## What is tmux?

## How to use

- To start a new session just type `tmux` on terminal:

  ```bash=
  tmux
  ```

  you should see a green menu bar at the bottom of terminal. This means that the `tmux` session started.

- To detach the tmux session type:

  ```bash=
  tmux detach
  ```

  or, you can also use a short-cut command: press **_CTRL+b_** release the two keys and then press **_d_**.

- To attach the tmux session type:

  ```bash=
  tmux attach
  ```

- Save log of tmux session:

  - To go in the command mode of tmux session use `CTRL+b`. Then type

  ```bash
  :pipe-pane "cat > tmux.log"
  ```

  To turn off the log run:

  ```bash
  :pipe-pane
  ```

- Scroll inside the `tmux` session:
  - Press `CTRL+B` then immediately press `[.
    - Then one can use the normal navigation key to scroll around.

Reference:

1. [https://www.linode.com/docs/networking/ssh/persistent-terminal-sessions-with-tmux/](https://www.linode.com/docs/networking/ssh/persistent-terminal-sessions-with-tmux/)
2. [https://hyperpolyglot.org/multiplexers](https://hyperpolyglot.org/multiplexers)

# SCREEN

## What is screen?

## How to use screen?

- To create a new screen just type `screen` on terminal

  ```bash=
  $screen
  ```

- This will open a new screen (say new terminal)

- Then start working....

- If you are working on lxplus then you have set set CMSSW environment again after going into screen.

- If you want to save a log file, i.e., whatever you are doing after type the screen command then instead of simple `screen` type `screen -L`

- To detach screen

  ```bash
  (ctrl A)+d
  ```

- To reattach screen

  ```bash
  screen -r
  ```

- To leave the screen

  ```bash
  $(ctrl A)+K   # to kill the screen
  ```

- How to scroll

  - Step 1: Press “Ctrl-A” on the keyboard and press “Esc.”
  - Step 2: Press the “Up” and “Down” arrow keys or the “PgUp” and “PgDn” keys to scroll through previous output.
  - Step 3: Press “Esc” to exit scrollback mode.

- Create a screen session and submit job without actually opening the session

  ```bash
  screen -dmS <screen name>
  screen -S <screen name> -X stuff '<CMD>\n'
  ```

  In last command `\n` is important, else it will just write command and wait for pressing `Enter`.
  Reference: [https://serverfault.com/a/243170](https://serverfault.com/a/243170)

## Use screen command on lxplus

https://hsf-training.github.io/analysis-essentials/shell-extras/persistent-screen.html

### Old Instructions

```bash
# log into lxplus
krenew -b -t -- screen -D -m
screen
```

# Difference between tmux and screen?
