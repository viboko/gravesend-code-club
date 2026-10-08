---
title: Racecar
layout: project
date: 2026-10-01
tags: [scratch, project]
excerpt: ""
---

<section markdown="1">

{% include scratch-embed.html id="1389454497" %}

---

</section>
<section markdown="1">

## 🔄 Step 1: Remix the Starter Pack

Follow the link: [scratch.mit.edu/projects/1389467381/editor/](https://scratch.mit.edu/projects/1389467381/editor/).

Next tap **Remix**. When the project loads, give it a new name. Have a look around the project.

</section>
<section markdown="1">

* *What sprites do you have available?*
* *What costumes do the sprites have?*
* *Is there any code already?*

---

</section>
<section markdown="1">

## Step 2: Create a background

You can use the existing background, or create your own one at [racetrack.viboko.dev](https://racetrack.viboko.dev).

---

</section>
<section markdown="1">

## Step 3: Create a speed variable

First, add a new variable called **speed**.

When the game starts you should set the speed to **zero**, position the car at the start line, pointing in the right direction, and start a **forever** loop. Add this code to the car sprite:

```scratch
when green flag clicked
set [speed v] to (0)
go to x: (-66) y: (147)
point in direction (90)
forever
    move (speed) steps
end
```

For now, the speed is always zero, so the car won't move yet.

---

</section>
<section markdown="1">

## Step 4: Make the car accelerate up to a top speed

Put this if block in the **forever** loop:

```scratch
if <key (up arrow v) pressed?> then
    if <(speed) < (5)> then
        change [speed v] by (1)
    end
end
```

In this example, the top speed is 5.

---

</section>
<section markdown="1">

## Step 5: Make the car decelerate

Put this next in the **forever** loop:

```scratch
if <key (down arrow v) pressed?> then
    if <(speed) > (-3)> then
        change [speed v] by (-1)
    end
end
```

In this example, the top reverse speed is 3.

---

</section>
<section markdown="1">

## Step 6: Make the car turn

Put this next in the **forever** loop:

```scratch
if <key (left arrow v) pressed?> then
    turn left (5) degrees
end
if <key (right arrow v) pressed?> then
    turn right (5) degrees
end
```

---

</section>
<section markdown="1">

## Step 7: Make the car hit the sides of the track

If you make the car size 100, you'll see that there is a purple bumper at the front. You can use this to detect the edges of the track.

Put this next in the **forever** loop:

```scratch
if <<color (#8f5bff) is touching (#ffffff)?> or <color (#8f5bff) is touching (#ff0000)?>> then
    set [speed v] to (0)
end
```

---

</section>
<section markdown="1">

## Step 8: Add a lap counter

Add a new variable called **laps**. You'll want to set it to **zero** when the game starts: 

```scratch
set [laps v] to (0)
```

Inside the **forever** loop, check to see if the car bumper touches the yellow on the finish line:

```scratch
if <color (#8f5bff) is touching (#eec200)?> then
    change [laps v] by (1)
end
```

If you test it now, you'll see that the lap counter goes up too fast and you can easily cheat by reversing back over the finish line! Let's fix it by adding a checkpoint...

---

</section>
<section markdown="1">

## Step 9: Add a checkpoint

Add a new sprite about half way around the track. It should just be a coloured rectangle, something like this: 

CHECKPOINT IMAGE HERE

Inside the new checkpoint sprite, add the following code so that you can't see the sprite... but don't hide it otherwise it won't work! 

```scratch
when green flag clicked
set [ghost v] effect to (100)
```

---

</section>
<section markdown="1">

## Step 10: Add a checkpoint variable

Now add a new variable called **checkpoint** which starts off as **zero**:

```scratch
set [checkpoint v] to (0)
```

Change the code you added in step 8 like this:

```scratch
if <<color (#8f5bff) is touching (#eec200)?> and <(checkpoint) = (1)>> then
    set [checkpoint v] to (0)
    change [laps v] by (1)
end
if <touching (checkpoint v)?> then
    set [checkpoint v] to (1)
end
```

---

</section>
<section markdown="1">

## 🤔 Challenges

* **

</section>
