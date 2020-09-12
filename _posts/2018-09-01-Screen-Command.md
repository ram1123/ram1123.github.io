---
layout: post
title: "Screen Command"
date: 2018-09-01
categories: bash screen tmux
---
* Do not remove this line (it will not be displayed)
{:toc}

# TMUX

## What is tmux?


## How to use

- To start a new session just type `tmux` on terminal:
   ```bash=
   tmux
   ```
   you should see a green menu bar at the bottom of terminal. This means that the `tmux` session started.
- To detatch the tmux session type:
   ```bash=
   tmux detach
   ```
   or, you can also use a short-cut command: press ***CTRL+b*** release the two keys and then press ***d***.
- To attach the tmux session type:
   ```bash=
   tmux attach
   ```
- **To go in the command mode of tmux session use "CTRL+b"**.
- Save log of tmux session:
   ```bash
   :pipe-pane "cat > tmux.log"
   ```
   To turn off the log run:
   ```bash
   :pipe-pane
   ```

Refernce: 
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

# Difference between tmux and screen?
