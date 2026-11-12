---
title: Draw Your Own Maze
layout: project
date: 2026-11-01
tags: [scratch, project]
excerpt: "Draw your own maze in Scratch, then guide your player through it with the arrow keys. Touch a wall and it's back to the start!"
---

<section markdown="1">

Draw a maze, then try to get through it without touching the walls! If you touch a wall, you go all the way back to the start. How fast can you reach the finish?

---

</section>
<section markdown="1">

## 🎨 Step 1: Draw your maze

Go to [scratch.mit.edu](https://scratch.mit.edu){:target="_blank" rel="noopener noreferrer"} and click **Create** to start a new project. Give it a name!

We're going to draw the maze as the backdrop. In the bottom-right corner of the screen, hover over the **Choose a Backdrop** button and click **Paint** (the paintbrush).

Use the **Rectangle** tool to draw the walls of your maze:

* Pick **one** colour for all of the walls, and don't use that colour for anything else.
* Draw a wall all the way around the outside first.
* Then add more walls inside to make the maze. Long, thin rectangles work well.
* Leave the paths nice and wide, so your player can fit through.

When your maze is finished, draw a **green** square where the maze starts, and a **red** square where it finishes.

* *Can you get from the green square to the red square? Try it with your mouse pointer!*

---

</section>
<section markdown="1">

## 🕹️ Step 2: Add a player

We don't need the cat for this game. Right-click the cat in the sprite list and choose **delete**.

Click **Choose a Sprite** and pick something small and round to be your player, like the **Ball** or the **Beetle**. Make sure it isn't the same colour as your walls!

Drag your player onto the green square on the stage. Then add this code to the player:

```scratch
when green flag clicked
set size to (30) %
go to x: (-200) y: (150)
forever
    if <key (right arrow v) pressed?> then
        change x by (3)
    end
    if <key (left arrow v) pressed?> then
        change x by (-3)
    end
    if <key (up arrow v) pressed?> then
        change y by (3)
    end
    if <key (down arrow v) pressed?> then
        change y by (-3)
    end
end
```

<div class="callout callout--important" markdown="1">
Tip! Your green square is probably somewhere different to ours. Scratch fills in the **go to x: y:** block with wherever your sprite is right now, so if you drag your player onto the green square *before* you drag the **go to** block out, it will already have the right numbers in it.
</div>

Click the green flag and try moving around with the arrow keys.

* *Is your player too big to fit through your maze? Change the number in the **set size** block until it fits.*

---

</section>
<section markdown="1">

## 🧱 Step 3: Back to the start if you touch a wall

At the moment you can walk straight through the walls! Let's make the player go back to the start if it touches one.

Add this inside the **forever** loop, underneath the four arrow key **if** blocks. Use the same numbers in the **go to** block as you did in Step 2:

```scratch
if <touching color (#3355cc)?> then
    go to x: (-200) y: (150)
end
```

⚠️ **Important**: the colour has to match your walls exactly. Click the colour in the **touching color** block, click the pipette at the bottom, then click on one of the walls on the stage.

* *Is your maze too hard now? You can make the player smaller, or go back to the backdrop and make the paths wider.*
* *What happens if you change the **3**s to bigger numbers? Is it easier or harder?*

---

</section>
<section markdown="1">

## 🏁 Step 4: Reach the finish

When the player gets to the red square, we want it to say "You win!" and stop moving.

Add this inside the **forever** loop too, underneath the code from Step 3:

```scratch
if <touching color (#ff3333)?> then
    say [You win!]
    stop [this script v]
end
```

Use the pipette again to pick the red from your finish square.

**stop this script** stops the **forever** loop, so the arrow keys don't do anything any more. Click the green flag to play again.

---

</section>
<section markdown="1">

## ⏱️ Step 5: Add a timer

Scratch has a stopwatch built in, called the **timer**. You can find it in the **Sensing** blocks. Let's use it to see how fast you can get through the maze.

Put a **reset timer** block just above the **forever** loop, so the timer starts from 0 every time you click the green flag:

```scratch
when green flag clicked
set size to (30) %
go to x: (-200) y: (150)
reset timer
forever
```

Then change the **say** block at the finish, so it tells you how long you took:

```scratch
if <touching color (#ff3333)?> then
    say (join [You took ] (join (round (timer)) [ seconds!]))
    stop [this script v]
end
```

The **round** block (in **Operators**) gets rid of all the numbers after the decimal point.

* *What's your best time? Can anyone at your table beat it?*

---

</section>
<section markdown="1">

## 🤔 Challenges

* *Can you play a sound when you touch a wall, and a different one when you win?*
* *Can you draw a second maze on a new backdrop, and use **next backdrop** to go to it when you finish the first one?*
* *Can you add a guard sprite that moves backwards and forwards across a path, and sends you back to the start if it catches you?*
* *Can you add a key that you have to collect before the finish will let you win?*
* *Swap mazes with a friend. Who can get through the other person's maze fastest?*
* *Ready for something harder? Try the [Maze]({% link _posts/2026-11-02-maze-project.md %}) project, where the computer draws a brand new maze for you every time you play.*
* *What else can you think of?*

</section>
