---
title: Maze
layout: project
date: 2026-10-12
tags: [scratch, project]
excerpt: "Build a maze game in Scratch where the computer draws a brand new random maze every time you play."
---

<section markdown="1">

Find your way through a maze using the arrow keys! You won't draw the maze yourself - you'll teach the computer to draw it for you, so there's a brand new maze every time you play.

---

</section>
<section markdown="1">

## 🖊️ Step 1: Start a new project and add the Pen extension

Go to [scratch.mit.edu](https://scratch.mit.edu){:target="_blank" rel="noopener noreferrer"} and click **Create** to start a new project. Give it a name!

The maze is going to be drawn with a pen, so we need some extra blocks. Click the **Add Extension** button in the bottom-left corner of the screen and choose **Pen**. You should now have a set of green pen blocks.

---

</section>
<section markdown="1">

## 🔲 Step 2: Draw the border of the maze

Paint a new sprite and call it **maze**. It doesn't matter what it looks like, because we're going to hide it - it's the pen that does the drawing.

Add this code to the maze sprite. It rubs out any old drawing, chooses a pen, then draws a big rectangle around the outside of the maze:

```scratch
when green flag clicked
hide
erase all
set pen color to (#7a3ff2)
set pen size to (4)
go to x: (-200) y: (-160)
pen down
go to x: (200) y: (-160)
go to x: (200) y: (160)
go to x: (-200) y: (160)
go to x: (-200) y: (-160)
pen up
```

Click the green flag. You should see a rectangle on the stage!

Our maze is going to be a grid of squares inside this rectangle. Each square is **40** steps wide and **40** steps tall, so there's room for **10** squares across and **8** squares up.

* *Can you choose your own colour for the walls?*
* *Why do we need the **pen up** block at the end?*

---

</section>
<section markdown="1">

## 🎲 Step 3: Draw one random wall

Here's the clever trick for making a maze: go to the top-right corner of a square, then flip a coin. If it's heads, draw a wall along the **top** of the square. If it's tails, draw a wall down the **right** side of the square.

Let's try it on the square in the bottom-left corner. Add this code to the end of your script:

```scratch
go to x: (-160) y: (-120)
pen down
if <(pick random (1) to (2)) = (1)> then
    change x by (-40)
else
    change y by (-40)
end
pen up
```

Click the green flag a few times. Sometimes the wall is on the top of the square, and sometimes it's on the right.

* *Which block is flipping the coin?*
* *Which block draws the top wall, and which one draws the right wall?*

---

</section>
<section markdown="1">

## ➡️ Step 4: Draw a whole row of walls

Now we want to do the same thing for the next square along, and the next one, and the next one...

Make a variable called **col** (short for *column*). It counts how many squares along we are. Each square is **40** steps wide, so we multiply **col** by **40** to find out how far along to move.

Change the code you added in Step 3 so it looks like this:

```scratch
set [col v] to (0)
repeat (9)
    go to x: ((-160) + ((col) * (40))) y: (-120)
    pen down
    if <(pick random (1) to (2)) = (1)> then
        change x by (-40)
    else
        change y by (-40)
    end
    pen up
    change [col v] by (1)
end
```

Click the green flag. There should be a row of random walls along the bottom of the maze.

* *There are 10 squares in a row, but we only repeat 9 times. Which square gets missed out?*

---

</section>
<section markdown="1">

## ⬆️ Step 5: Draw every row

One row done - now we need to do all the others! Make another variable called **row**. It counts how many squares up we are.

Put the code from Step 4 inside another **repeat** loop, and change the **y** part of the **go to** block so that it uses **row**:

```scratch
set [row v] to (0)
repeat (7)
    set [col v] to (0)
    repeat (9)
        go to x: ((-160) + ((col) * (40))) y: ((-120) + ((row) * (40)))
        pen down
        if <(pick random (1) to (2)) = (1)> then
            change x by (-40)
        else
            change y by (-40)
        end
        pen up
        change [col v] by (1)
    end
    change [row v] by (1)
end
```

Click the green flag and watch the computer draw a maze. Click it again and you'll get a completely different one!

We leave out the top row and the right-hand column, so there's always a clear path along the top and down the right-hand side. That's what makes sure you can get to every square in the maze.

You can untick **row** and **col** in the Variables blocks so they don't cover up the maze.

---

</section>
<section markdown="1">

## 🕹️ Step 6: Add a player

Choose a sprite to be your player. You can use the cat, pick a different one, or paint your own.

The player needs to be small enough to fit through the maze, and it starts in the top-right corner. Add this code to the player sprite:

```scratch
when green flag clicked
set size to (20) %
go to x: (180) y: (140)
forever
    if <key (right arrow v) pressed?> then
        change x by (4)
    end
    if <key (left arrow v) pressed?> then
        change x by (-4)
    end
    if <key (up arrow v) pressed?> then
        change y by (4)
    end
    if <key (down arrow v) pressed?> then
        change y by (-4)
    end
end
```

Try moving around with the arrow keys.

* *Is your player too big or too small? Change the size until it's about half as wide as a square.*

---

</section>
<section markdown="1">

## 🧱 Step 7: Stop the player walking through walls

At the moment the player can walk straight through the walls! To fix this, we check whether the player is touching the wall colour straight after it moves. If it is, we move it back again. This happens so quickly that it looks like the player has just stopped.

Add an **if** block after each **change** block, so your **forever** loop looks like this:

```scratch
forever
    if <key (right arrow v) pressed?> then
        change x by (4)
        if <touching color (#7a3ff2)?> then
            change x by (-4)
        end
    end
    if <key (left arrow v) pressed?> then
        change x by (-4)
        if <touching color (#7a3ff2)?> then
            change x by (4)
        end
    end
    if <key (up arrow v) pressed?> then
        change y by (4)
        if <touching color (#7a3ff2)?> then
            change y by (-4)
        end
    end
    if <key (down arrow v) pressed?> then
        change y by (-4)
        if <touching color (#7a3ff2)?> then
            change y by (4)
        end
    end
end
```

⚠️ **Important**: the colour has to match your walls exactly. Click the colour in the **touching color** block, click the pipette at the bottom, then click on one of the walls on the stage.

---

</section>
<section markdown="1">

## ⭐ Step 8: Add a goal

Choose another sprite to be the thing your player is trying to reach, and call it **goal**. Don't pick one which has the same colour as your walls, or the player will bounce off it!

The goal sits in the bottom-left corner of the maze. Add this code to the goal sprite:

```scratch
when green flag clicked
set size to (30) %
go to x: (-180) y: (-140)
```

* *Does your goal fit inside its square? Change the size until it does.*

---

</section>
<section markdown="1">

## 🏆 Step 9: Win the game and get a new maze

When the player reaches the goal, let's celebrate, send the player back to the start, and draw a new maze.

Go back to the player sprite and put this inside the **forever** loop, underneath the last bit of code. You'll need to make a new message called **new maze**:

```scratch
if <touching (goal v)?> then
    say [You win!] for (2) seconds
    go to x: (180) y: (140)
    broadcast (new maze v)
end
```

Now go to the maze sprite. We want it to draw a maze whenever it gets the **new maze** message, not only when the green flag is clicked. Swap the **when green flag clicked** block at the top of your script for this one:

```scratch
when I receive [new maze v]
```

Then add this small new script to the maze sprite, so that a maze is still drawn when the game starts:

```scratch
when green flag clicked
broadcast (new maze v)
```

Now every time you win, you get a new maze to solve!

---

</section>
<section markdown="1">

## 🤔 Challenges

* *Can you add a **mazes** variable which counts how many mazes you have solved?*
* *Can you add a timer, so players can try to solve the maze as quickly as possible?*
* *Can you play a sound when the player reaches the goal?*
* *Swap the player and the goal over, so the player starts in the bottom-left corner. Is the maze easier or harder? Why?*
* *The maze takes a couple of seconds to draw. Can you stop the player moving until it's finished?*
* *Can you add an enemy that wanders around the maze, and sends you back to the start if it catches you?*
* *Can you make the squares smaller so there are more of them? You'll need to change quite a few numbers!*
* *What else can you think of?*

</section>
