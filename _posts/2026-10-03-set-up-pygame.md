---
title: Set up Python and pygame
layout: post
date: 2026-10-03
tags: [python, how-to]
excerpt: "How to install Python, Thonny and pygame, ready to start making games in Python."
---

To work on any of the [Python projects](/tags/python) on this site, you will first need **Python** itself, plus a library called **pygame** that helps with drawing pictures, playing sounds and reading the keyboard and mouse.

The easiest way to get both is [Thonny](https://thonny.org){:target="_blank" rel="noopener noreferrer"}, a code editor made for people learning Python. It comes with Python built in, so there's nothing else to install first.

## 💻 Step 1: Install Thonny

Go to [thonny.org](https://thonny.org){:target="_blank" rel="noopener noreferrer"}, download the installer for your computer (Windows, Mac or Linux), and run it. Then open Thonny.

## 📦 Step 2: Install pygame

In Thonny, click **Tools** > **Manage packages...**, search for **pygame** and click **Install**. When it's finished, close the window.

You only need to do this once - pygame will still be there next time you open Thonny.

## 🧪 Step 3: Quick test

To test that everything is working, click **File** > **New**, and type in this program:

```python
import pygame

pygame.init()
screen = pygame.display.set_mode((400, 300))
screen.fill("skyblue")
pygame.display.flip()

# Wait until the window is closed.
while pygame.event.wait().type != pygame.QUIT:
    pass

pygame.quit()
```

Click the green **Run** button (or press **F5**). Thonny will ask you to save the file first - call it something like **test.py**.

A window should open, filled with blue. Close it to end the program. If it worked, you're ready to go!

## 📂 Step 4: Open a project

Each project comes with a starter project to download. Unzip it, then in Thonny click **File** > **Open...** and open the **.py** file inside the project's folder. Click **Run** (or press **F5**) to run it.

⚠️ **Watch out**: keep the **.py** file in the same folder as the pictures that came with it, or the game won't be able to find them!

<div class="callout callout--important" markdown="1">
Already have Python installed and like using the terminal? Install pygame with `python3 -m pip install pygame` (on Windows, `py -m pip install pygame`), then run a project from inside its folder with `python3 <file>.py` (or `py <file>.py`).
</div>
