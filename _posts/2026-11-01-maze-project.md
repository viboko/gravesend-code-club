---
title: Maze
layout: project
date: 2026-11-01
tags: [scratch, project]
excerpt: "Make a maze game in Scratch, then cover it in fog so you can only see the bit of the maze right next to you!"
---

<section markdown="1">

Find your way through a maze using the arrow keys! But watch out - the maze is covered in fog, so you can only see the bit right next to you. How fast can you get to the finish?

---

</section>
<section markdown="1">

## 🧩 Step 1: Make your maze

First, you need a maze! There are four different ways to make one. Pick the one you like the sound of best.

<div class="option-list" markdown="1">
<div class="option-list__item" markdown="1">
### Use the starter project 🚀

Open the starter project at [scratch.mit.edu/projects/STARTER_PROJECT_ID](https://scratch.mit.edu/projects/STARTER_PROJECT_ID/editor){:target="_blank" rel="noopener noreferrer"} and click **Remix** to make your own copy. Don't forget to give it a new name!

The starter project already has a maze backdrop, a **player** sprite and a **fog** sprite, so you can get straight on with the code. This is the quickest way to start.
</div>

<div class="option-list__item" markdown="1">
### Draw your own maze 🎨

Go to [scratch.mit.edu](https://scratch.mit.edu){:target="_blank" rel="noopener noreferrer"} and click **Create** to start a new project. In the bottom-right corner of the screen, hover over the **Choose a Backdrop** button and click **Paint** (the paintbrush).

Use the **Rectangle** tool to draw the walls of your maze:

* Pick **one** colour for all of the walls, and don't use that colour for anything else.
* Draw a wall all the way around the outside first.
* Then add more walls inside to make the maze. Long, thin rectangles work well.
* Leave the paths nice and wide, so your player can fit through.

Then draw a **green** square where the maze starts, and a **red** square where it finishes.
</div>

<div class="option-list__item" markdown="1">
### Download a maze 💾

Go to [maze.viboko.dev](https://maze.viboko.dev){:target="_blank" rel="noopener noreferrer"}. Click **New maze** until you find one you like. You can make it bigger or smaller with the **Width** and **Height** sliders. Then click **SVG** to download it.

Go to [scratch.mit.edu](https://scratch.mit.edu){:target="_blank" rel="noopener noreferrer"} and click **Create** to start a new project. In the bottom-right corner of the screen, hover over the **Choose a Backdrop** button, click **Upload Backdrop**, and choose the maze you just downloaded.
</div>

<div class="option-list__item" markdown="1">
### Make the computer draw a random maze 🎲

Teach Scratch to draw a brand new maze every time you click the green flag! This is the trickiest way, but it's really clever. Follow [Draw a random maze in Scratch]({% link _posts/2026-11-01-random-maze-scratch.md %}), then come back here for Step 2.
</div>
</div>

Whichever way you picked, your maze has walls that are all one colour, a **green** start and a **red** finish. The rest of the project is the same for every maze.

---

</section>
<section markdown="1">

## 🕹️ Step 2: Add a player

If you're using the starter project, the **player** sprite is already there - click on it.

If not, choose a sprite to be your player. Pick something small and round, like the **Ball** or the **Beetle**, and make sure it isn't the same colour as your walls, or green, or red! Then drag it onto the green start on the stage.

Add this code to the player:

```scratch
when green flag clicked
set size to (50) %
go to [front v] layer
go to x: (210) y: (147)
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

<div class="callout callout--important" markdown="1">
Tip! The **go to x: y:** block needs to send your player to the green start. In the starter project that's **x: 210, y: 147**, and in the random maze it's **x: 180, y: 140**. For any other maze, drag your player onto the green start *before* you drag the **go to x: y:** block out - Scratch fills in the numbers with wherever your sprite is right now.
</div>

The **go to front layer** block makes sure the player is always drawn on top of everything else. You'll see why that matters later on!

Click the green flag and try moving around with the arrow keys.

* *Is your player too big to fit through the maze? Change the number in the **set size** block until it's about half as wide as the paths.*

---

</section>
<section markdown="1">

## 🧱 Step 3: Stop the player walking through walls

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

## 🏁 Step 4: Reach the finish

When the player gets to the red finish, let's tell them how long they took, then send them back to the start for another go.

Scratch has a stopwatch built in, called the **timer**. You can find it in the **Sensing** blocks. Put a **reset timer** block just above the **forever** loop, so the timer starts from 0 every time you click the green flag:

```scratch
when green flag clicked
set size to (50) %
go to [front v] layer
go to x: (210) y: (147)
reset timer
forever
```

Then add this inside the **forever** loop, underneath the last **if** block. Use the pipette again to pick the red from your finish, and use the same numbers in the **go to x: y:** block as you did in Step 2:

```scratch
if <touching color (#ef4444)?> then
    say (join [You took ] (join (round (timer)) [ seconds!])) for (2) seconds
    go to x: (210) y: (147)
    reset timer
end
```

The **round** block (in **Operators**) gets rid of all the numbers after the decimal point. After 2 seconds, the player goes back to the start and the timer starts again from 0, ready for another go.

<div class="callout callout--important" markdown="1">
Tip! Did you make the computer draw a random maze? Then you can get a brand new maze every time you reach the finish!

Add a **broadcast** block underneath **reset timer**, and make a new message called **new maze**:

```scratch
broadcast (new maze v)
```

Then click on the **maze** sprite and add this script, so it draws a new maze when it gets the message:

```scratch
when I receive [new maze v]
draw maze :: custom
```

</div>

* *What's your best time? Can anyone at your table beat it?*

---

</section>
<section markdown="1">

## 🌫️ Step 5: Add fog of war

The maze is quite easy when you can see all of it at once. Let's cover it in fog, so you can only see the bit of the maze right next to the player!

The fog is a sprite with a big black costume, with a see-through hole in the middle. If you're using the starter project, you already have the **fog** sprite (it's hidden at the moment), so you don't need to download it - just click on it.

If not, download the fog costume:

<p>
    <a href="/assets/img/maze-project/fog.svg" class="btn btn--large btn--primary" download>🌫️ Download the fog costume</a>
</p>

Then hover over the **Choose a Sprite** button, click **Upload Sprite**, and choose the **fog.svg** file you just downloaded. You'll get a new sprite called **fog**.

Add this code to the fog sprite, so that the hole follows the player wherever it goes:

```scratch
when green flag clicked
show
forever
    go to (player v)
end
```

If your player sprite has a different name, choose that name in the **go to** block instead.

The costume is twice as wide and twice as tall as the stage, so it covers the whole stage wherever the player is - even in the corners. And because the player is in front of the fog (remember the **go to front layer** block?), you can always see it.

But the finish is *behind* the fog, so now you have to go looking for it!

* *Can you make the hole bigger or smaller? Hint: try a **set size** block in the fog's code. Don't make it too small, though - if the walls next to the player are hidden by the fog, the **touching color** blocks can't see them, and the player will walk straight through!*
* *Can you make the fog start hidden, and only appear after you press a key?*

---

</section>
<section markdown="1">

## 🤔 Challenges

* *Can you play a sound when the player reaches the finish?*
* *Can you add a **mazes** variable which counts how many times you've reached the finish?*
* *Drew or downloaded your maze? Add a second maze on a new backdrop, and use **next backdrop** to go to it when you reach the finish.*
* *Can you add an enemy that wanders around the maze, and sends you back to the start if it catches you?*
* *Swap mazes with a friend. Who can get through the other person's maze fastest?*
* *What else can you think of?*

</section>
