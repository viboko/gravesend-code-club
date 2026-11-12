---
title: Maze in Python
layout: project
date: 2026-11-02
tags: [python, project]
excerpt: "Write a maze game in Python with pygame. The computer makes a brand new random maze every time you play - and then hides it in fog!"
---

<section markdown="1">

<div class="callout callout--important" markdown="1">
Important! Before you get started, make sure you have Python and pygame set up on your computer: [Set up Python and pygame]({% link _posts/2026-10-03-set-up-pygame.md %})
</div>

In this project you'll make a maze game in **Python**, using a library called **pygame**. You won't design the maze yourself - you'll teach the computer how to make one, so there's a brand new maze every time you play. Then you'll find your way through it with the arrow keys.

If you've made the [Scratch version of Maze]({% link _posts/2026-11-01-maze-project.md %}), lots of this will feel familiar - it's the same game, and even the same way of making the maze, just typed instead of built from blocks.

Don't worry if you've never written Python before. Each step tells you exactly what to type, and where.

---

</section>
<section markdown="1">

## 💾 Step 1: Download the starter project

Download the starter project and unzip it:

<p>
    <a href="/assets/zip/python-maze-project/maze.zip" class="btn btn--large btn--primary">💾 Download the starter project (zip)</a>
</p>

You'll get a folder called **maze** with three files in it:

* **maze.py** - the code for the game. This is the file you'll be changing.
* **player.png** - the picture of the player.
* **goal.png** - the picture of the goal, which the player is trying to reach.

Open **maze.py** in Thonny, and click the green **Run** button (or press **F5**).

A window should open, with the player in the top-right corner and the goal in the bottom-left corner. There's no maze yet, and the player can't move - that's what you're going to code!

---

</section>
<section markdown="1">

## 🔍 Step 2: Have a look around the code

Open **maze.py** and have a read through it. Any line starting with a **#** is a *comment*. Python ignores comments - they're notes for the people reading the code.

At the top are the **settings**. The maze is a grid of squares: **CELL** is how big each square is, in pixels, and **COLUMNS** and **ROWS** are how many squares there are across and down.

Near the bottom is the **game loop**. It starts with `while running:`, and everything indented underneath it happens again and again, **60 times a second**, until the game ends. It's just like a **forever** block in Scratch.

The player and the goal are each stored as a **Rect** - short for *rectangle*. A Rect knows where something is, and how big it is. Later on, we'll use Rects to check whether the player has bumped into something.

⚠️ **Watch out**: this isn't quite the same as Scratch! In Scratch, **x: 0, y: 0** is the middle of the stage, and **y** goes *up*. In pygame, **0, 0** is the *top-left* corner of the window, and **y** goes *down*.

* *Which lines of code work out where the player and the goal go?*
* *Try changing **COLUMNS** to **15**, and run the game again. What happens to the window? Where are the player and the goal now? (Change it back to **10** afterwards.)*

---

</section>
<section markdown="1">

## 🔲 Step 3: Draw the border of the maze

We'll make the maze with a **function** called `make_maze`. A function is a set of instructions with a name, a bit like a custom block in Scratch. Our function will make a **list** of all of the walls in the maze, and give it back to us.

Find the comment that says `# (You'll write the make_maze function here.)`, and replace it with this:

```python
def make_maze():
    walls = []

    # The border around the outside of the maze.
    width = COLUMNS * CELL
    height = ROWS * CELL
    walls.append(pygame.Rect(MARGIN, MARGIN, width, WALL))
    walls.append(pygame.Rect(MARGIN, MARGIN + height, width + WALL, WALL))
    walls.append(pygame.Rect(MARGIN, MARGIN, WALL, height))
    walls.append(pygame.Rect(MARGIN + width, MARGIN, WALL, height + WALL))

    return walls
```

Each wall is a long, thin **Rect**. To make one, we tell pygame four numbers: where its **left** edge is, where its **top** edge is, how **wide** it is, and how **tall** it is. So the first wall starts at the top-left corner of the maze, is as wide as the whole maze, and is **WALL** pixels tall - that's the top of the border.

`walls = []` makes an empty list, and `walls.append(...)` adds something to the end of it. When the function has finished, `return walls` gives the list back.

Writing a function doesn't run it, though! Find the line that works out where the goal goes, near the end of the setup part, and add this underneath it:

```python
# Make the first maze.
walls = make_maze()
```

Last of all, we need to draw the walls. Find the comment that says `# Draw the goal, then the player on top.`, and add this just *above* it:

```python
    # Draw every wall in the maze.
    for wall in walls:
        pygame.draw.rect(screen, WALL_COLOUR, wall)
```

`for wall in walls:` goes through the list one wall at a time, and runs the indented code underneath for each one.

⚠️ **Important**: in Python, the spaces at the start of each line really matter! They're how Python knows which code is *inside* the game loop, or the function, or the **for** loop - a bit like the way Scratch blocks fit inside each other. Make sure your new lines are lined up with the code around them.

Run the game. You should see a rectangle around the outside of the maze!

* *Can you choose your own colour for the walls? Hint: look in the settings.*
* *Which of the four walls is which?*

---

</section>
<section markdown="1">

## 🎲 Step 4: Draw one random wall

Here's the clever trick for making a maze: for each square, flip a coin. If it's heads, put a wall along the **top** of the square. If it's tails, put a wall down the **right** side of the square.

To flip a coin, we need Python's **random** library. Add this line at the very top of the code, underneath `import pygame`:

```python
import random
```

Let's try it on just one square. In pygame, the columns are numbered from **0** on the left, and the rows are numbered from **0** at the top, so we'll pick column **0**, row **1** - the second square down on the left. Add this to the `make_maze` function, underneath the border and *above* `return walls`:

```python
    # One random wall, for one square.
    column = 0
    row = 1

    # The top-left corner of the square.
    x = MARGIN + column * CELL
    y = MARGIN + row * CELL

    # Flip a coin!
    if random.randint(1, 2) == 1:
        # A wall along the top of the square.
        walls.append(pygame.Rect(x, y, CELL + WALL, WALL))
    else:
        # A wall down the right-hand side of the square.
        walls.append(pygame.Rect(x + CELL, y, WALL, CELL + WALL))
```

`random.randint(1, 2)` picks a random whole number from **1** to **2**, just like the **pick random** block in Scratch.

Run the game a few times. Sometimes the wall is on top of the square, and sometimes it's on the right.

* *Why do you think the walls are **CELL + WALL** long, instead of just **CELL**? Hint: look closely at the corners.*

---

</section>
<section markdown="1">

## ➡️ Step 5: Draw a whole row of walls

Now we want to do the same thing for the next square along, and the next one, and the next one... That's a job for a **for** loop!

Change the line `column = 0` to this:

```python
    for column in range(COLUMNS - 1):
```

Then move `row = 1` up above the **for** loop, and add 4 extra spaces to the start of every line underneath it, so that they're all *inside* the loop. Your code should look like this:

```python
    # One random wall for each square in a row.
    row = 1
    for column in range(COLUMNS - 1):
        # The top-left corner of the square.
        x = MARGIN + column * CELL
        y = MARGIN + row * CELL

        # Flip a coin!
        if random.randint(1, 2) == 1:
            # A wall along the top of the square.
            walls.append(pygame.Rect(x, y, CELL + WALL, WALL))
        else:
            # A wall down the right-hand side of the square.
            walls.append(pygame.Rect(x + CELL, y, WALL, CELL + WALL))
```

💡 **Tip**: in Thonny, you can select lots of lines and press **Tab** to indent them all at once.

`range(COLUMNS - 1)` counts from **0** up to (but not including) **COLUMNS - 1**. There are **10** columns, so it counts **0, 1, 2 ... 8**. Each time round the loop, `column` is the next number.

Run the game. There should be a row of random walls near the top of the maze.

* *There are 10 squares in a row, but `range(COLUMNS - 1)` only gives us 9 numbers. Which square gets missed out?*

---

</section>
<section markdown="1">

## ⬇️ Step 6: Draw every row

One row done - now for all the others! Change `row = 1` into another **for** loop, and indent everything underneath it again, so the loop for the columns is *inside* the loop for the rows:

```python
    # One random wall for each square - except the top row, and the column
    # on the right.
    for row in range(1, ROWS):
        for column in range(COLUMNS - 1):
            # The top-left corner of the square.
            x = MARGIN + column * CELL
            y = MARGIN + row * CELL

            # Flip a coin!
            if random.randint(1, 2) == 1:
                # A wall along the top of the square.
                walls.append(pygame.Rect(x, y, CELL + WALL, WALL))
            else:
                # A wall down the right-hand side of the square.
                walls.append(pygame.Rect(x + CELL, y, WALL, CELL + WALL))
```

`range(1, ROWS)` starts counting at **1** instead of **0**, so it counts **1, 2, 3 ... 7**.

Run the game, and you'll see a whole maze. Run it again and you'll get a completely different one!

We leave out the top row and the right-hand column, so there's always a clear path along the top and down the right-hand side. That's what makes sure you can get to every square in the maze.

<details markdown="1">
<summary>😕 Stuck? Here's what your make_maze function should look like now</summary>

```python
def make_maze():
    walls = []

    # The border around the outside of the maze.
    width = COLUMNS * CELL
    height = ROWS * CELL
    walls.append(pygame.Rect(MARGIN, MARGIN, width, WALL))
    walls.append(pygame.Rect(MARGIN, MARGIN + height, width + WALL, WALL))
    walls.append(pygame.Rect(MARGIN, MARGIN, WALL, height))
    walls.append(pygame.Rect(MARGIN + width, MARGIN, WALL, height + WALL))

    # One random wall for each square - except the top row, and the column
    # on the right.
    for row in range(1, ROWS):
        for column in range(COLUMNS - 1):
            # The top-left corner of the square.
            x = MARGIN + column * CELL
            y = MARGIN + row * CELL

            # Flip a coin!
            if random.randint(1, 2) == 1:
                # A wall along the top of the square.
                walls.append(pygame.Rect(x, y, CELL + WALL, WALL))
            else:
                # A wall down the right-hand side of the square.
                walls.append(pygame.Rect(x + CELL, y, WALL, CELL + WALL))

    return walls
```

</details>

* *Now try changing **CELL**, **COLUMNS** and **ROWS** in the settings. Can you make a really big maze, with really small squares?*

---

</section>
<section markdown="1">

## 🕹️ Step 7: Move the player

Now let's move the player with the arrow keys. Find the comment that says `# --- 2. Update the game (move things around) ---`, and add this underneath it:

```python
    # Which keys are being held down right now?
    keys = pygame.key.get_pressed()

    # Move left or right.
    if keys[pygame.K_RIGHT]:
        player.x = player.x + 2
    if keys[pygame.K_LEFT]:
        player.x = player.x - 2

    # Move up or down.
    if keys[pygame.K_DOWN]:
        player.y = player.y + 2
    if keys[pygame.K_UP]:
        player.y = player.y - 2
```

`pygame.key.get_pressed()` checks which keys are being held down right now, a bit like the **key pressed?** block in Scratch.

Remember that **y** goes *down* in pygame - so to move **down**, we *add* to **y**, and to move **up**, we take away.

Try moving around. Uh-oh - the player can walk straight through the walls! Let's fix that next.

* *What happens if you move by **5** instead of **2**?*

---

</section>
<section markdown="1">

## 🧱 Step 8: Stop the player walking through walls

Each time the player moves, we'll check whether it's bumped into a wall. If it has, we move it straight back again. This all happens before the screen is drawn, so it looks like the player has just stopped.

Change your code from the last step so that it looks like this:

```python
    # Which keys are being held down right now?
    keys = pygame.key.get_pressed()

    # Move left or right. If the player hits a wall, move it back again.
    if keys[pygame.K_RIGHT]:
        player.x = player.x + 2
        if player.collidelist(walls) != -1:
            player.x = player.x - 2
    if keys[pygame.K_LEFT]:
        player.x = player.x - 2
        if player.collidelist(walls) != -1:
            player.x = player.x + 2

    # Move up or down, in just the same way.
    if keys[pygame.K_DOWN]:
        player.y = player.y + 2
        if player.collidelist(walls) != -1:
            player.y = player.y - 2
    if keys[pygame.K_UP]:
        player.y = player.y - 2
        if player.collidelist(walls) != -1:
            player.y = player.y + 2
```

`player.collidelist(walls)` checks the player's Rect against every wall in the list. If it's touching one of them, it tells us *which* one: **0** for the first wall in the list, **1** for the second, and so on. If it isn't touching any of them, it gives us **-1**. So `!= -1` (which means "is not equal to -1") means "the player is touching a wall".

In Scratch, we checked whether the player was touching the *colour* of the walls. Here, we're checking whether the *rectangles* overlap - the colours don't matter at all.

Now try to walk through the walls - you can't!

---

</section>
<section markdown="1">

## 🏆 Step 9: Win the game and get a new maze

When the player reaches the goal, let's say "You win!", and then start again with a brand new maze.

To write on the screen, we need a **font**. Add this to the setup part, underneath `walls = make_maze()`:

```python
# A font, for writing messages on the screen. 64 is how big the letters are.
font = pygame.font.Font(None, 64)
```

Then add this to the update part of the game loop, underneath the code that moves the player:

```python
    # Has the player reached the goal?
    if player.colliderect(goal):
        # Say "You win!" in the middle of the window, for 2 seconds.
        message = font.render("You win!", True, (255, 255, 255), WALL_COLOUR)
        screen.blit(message, message.get_rect(center=screen.get_rect().center))
        pygame.display.flip()
        pygame.time.wait(2000)

        # Then start again, with a brand new maze.
        walls = make_maze()
        player.center = PLAYER_START
```

* `player.colliderect(goal)` checks whether the player's Rect is overlapping the goal's Rect.
* `font.render(...)` turns some words into a picture, with white letters on a background the same colour as the walls.
* `pygame.time.wait(2000)` waits for **2000** milliseconds, which is **2** seconds.
* Then we make a new maze - this is why we put the maze-making code in a function, so we can use it again - and send the player back to the start.

* *Can you count how many mazes you've solved, and show it in the message?*

---

</section>
<section markdown="1">

## 🌫️ Step 10: Add fog of war

The maze is quite easy when you can see all of it at once. Let's cover it in fog, so you can only see the bit of the maze right next to the player!

The fog is a big black picture with a see-through hole in the middle. Add this to the setup part, underneath the font:

```python
# Fog of war: a black picture, twice as big as the window, with a
# see-through hole in the middle.
fog = pygame.Surface((screen.get_width() * 2, screen.get_height() * 2), pygame.SRCALPHA)
fog.fill((0, 0, 0, 255))
middle = fog.get_rect().center
for radius in range(75, 49, -1):
    # The smaller the circle, the more see-through it is.
    see_through = (radius - 50) * 10
    pygame.draw.circle(fog, (0, 0, 0, see_through), middle, radius)
```

A **Surface** is a blank picture that we can draw on. `pygame.SRCALPHA` means that it can have see-through parts.

Did you notice that the colours have **four** numbers this time? The fourth number is called **alpha**, and it's how solid the colour is: **255** is completely solid, and **0** is completely see-through.

So first we fill the whole picture with solid black. Then the **for** loop draws circles in the middle, starting with a big one and getting smaller each time: `range(75, 49, -1)` counts *down*, **75, 74, 73 ... 50**. Each circle is a bit more see-through than the last, and the smallest one, with a radius of **50**, is completely see-through. That gives us a hole with soft, fuzzy edges.

Now, to draw the fog in the right place, find the drawing code for the goal and the player, and change it to this:

```python
    # Draw the goal, then the fog, then the player on top.
    screen.blit(goal_image, goal)
    screen.blit(fog, fog.get_rect(center=player.center))
    screen.blit(player_image, player)
```

The middle of the fog is always in the same place as the middle of the player, so the hole follows the player around. The fog is twice as big as the window, so it covers everything, even when the player is in a corner. And the goal is drawn *before* the fog, so it's hidden until you get close to it!

Because we check for walls using Rects rather than colours, the fog doesn't get in the way of that at all.

* *Can you make the hole bigger or smaller?*
* *What happens if you draw the fog after the player, instead of before?*

---

</section>
<section markdown="1">

## 🤔 Challenges

* *Can you add a timer, so players can try to solve the maze as quickly as possible?*
* *Can you play a sound when the player reaches the goal? Look up `pygame.mixer.Sound` to find out how.*
* *Swap the player and the goal over, so the player starts in the bottom-left corner. Is the maze easier or harder? Why?*
* *What happens if you change `random.randint(1, 2)` to `random.randint(1, 5)`? Why?*
* *Can you add some loops to the maze, by taking a few random walls away at the end of `make_maze`? Be careful not to take away the border!*
* *Can you add an enemy that wanders around the maze, and sends you back to the start if it catches you?*
* *What else can you think of?*

</section>
