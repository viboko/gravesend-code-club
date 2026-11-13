---
title: Draw a random maze in Scratch
layout: post
date: 2026-11-01
tags: [scratch, how-to]
excerpt: "How to use the Pen extension to make Scratch draw a brand new random maze every time you click the green flag."
---

This how-to shows you how to make Scratch draw a maze for you, using the **Pen** extension. Every time you click the green flag, you get a brand new random maze!

The maze has purple walls, a green start spot in the top-right corner and a red finish spot in the bottom-left corner, so it works with the rest of the [Maze]({% link _posts/2026-11-01-maze-project.md %}) project.

## 🖊️ Add the Pen extension and a maze sprite

Go to [scratch.mit.edu](https://scratch.mit.edu){:target="_blank" rel="noopener noreferrer"} and click **Create** to start a new project. Give it a name!

The maze is going to be drawn with a pen, so we need some extra blocks. Click the **Add Extension** button in the bottom-left corner of the screen and choose **Pen**. You should now have a set of green pen blocks.

Paint a new sprite and call it **maze**. It doesn't matter what it looks like, because we're going to hide it - it's the pen that does the drawing.

## 🧩 Make a draw maze block

We're going to put all of the maze drawing code inside a block of our own, called **draw maze**. That keeps it tidy, and it means we can make the maze draw super-fast at the end.

Click **My Blocks**, then **Make a Block**, and call it **draw maze**. Leave **Run without screen refresh** unticked for now, and click **OK**.

You'll get a pink **define draw maze** block. All of the code in the next few steps goes underneath it.

Add this script too, so the maze gets drawn when the green flag is clicked:

```scratch
when green flag clicked
draw maze :: custom
```

## 🔲 Draw the border and the start and finish

Add this code under **define draw maze**. It rubs out any old drawing, draws a big green spot for the start and a big red spot for the finish, then draws a rectangle around the outside of the maze:

```scratch
define draw maze
hide
erase all
set pen size to (30)
set pen color to (#22c55e)
go to x: (180) y: (140)
pen down
pen up
set pen color to (#ef4444)
go to x: (-180) y: (-140)
pen down
pen up
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

Putting the pen down and straight back up again draws a dot. With a big pen size, the dot is a big spot!

Click the green flag. You should see a rectangle with a green spot in the top-right corner and a red spot in the bottom-left corner.

Our maze is going to be a grid of squares inside this rectangle. Each square is **40** steps wide and **40** steps tall, so there's room for **10** squares across and **8** squares up.

## 🎲 Draw one random wall

Here's the clever trick for making a maze: go to the top-right corner of a square, then flip a coin. If it's heads, draw a wall along the **top** of the square. If it's tails, draw a wall down the **right** side of the square.

Let's try it on the square in the bottom-left corner. Add this code to the end of the **define draw maze** script:

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

## ➡️ Draw a whole row of walls

Now we want to do the same thing for the next square along, and the next one, and the next one...

Make a variable called **col** (short for *column*). It counts how many squares along we are. Each square is **40** steps wide, so we multiply **col** by **40** to find out how far along to move.

Change the code you just added so it looks like this:

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

## ⬆️ Draw every row

One row done - now we need to do all the others! Make another variable called **row**. It counts how many squares up we are.

Put the code from the last step inside another **repeat** loop, and change the **y** part of the **go to** block so that it uses **row**:

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

We leave out the top row and the right-hand column, so there's always a clear path along the top and down the right-hand side. That's what makes sure you can get to every square in the maze - and to the finish.

You can untick **row** and **col** in the Variables blocks so they don't cover up the maze.

## ⚡ Draw the maze in a flash

Watching the maze being drawn is fun the first time, but waiting for it soon gets boring. Let's make it draw instantly.

Right-click the **define draw maze** block and choose **Edit**. Tick **Run without screen refresh**, then click **OK**. Now click the green flag - the maze appears all at once!

**Run without screen refresh** means Scratch runs the whole **draw maze** block before it redraws the screen.

You might know about **Turbo Mode**, which makes Scratch run *all* of your code as fast as it can. That would draw the maze instantly too, but it also makes your player's **forever** loop run lots of times before the screen is redrawn, so the player would shoot off down the corridor and smack into the next wall! **Run without screen refresh** only speeds up the **draw maze** block, so the player carries on at its normal speed.

## 🕹️ Back to the Maze project

Your maze is ready! Go back to the [Maze]({% link _posts/2026-11-01-maze-project.md %}) project and carry on from **Step 2**.

When you add the player, its start spot is at **x: 180, y: 140**.
