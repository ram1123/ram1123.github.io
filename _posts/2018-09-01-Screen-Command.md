---
layout: post
title: "Screen Command"
date: 2018-09-01
categories: bash
---
* Do not remove this line (it will not be displayed)
{:toc}

# What is tmux?

Refernce: [https://www.linode.com/docs/networking/ssh/persistent-terminal-sessions-with-tmux/](https://www.linode.com/docs/networking/ssh/persistent-terminal-sessions-with-tmux/)
# What is screen?

## How to use screen?

    ```bash
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


