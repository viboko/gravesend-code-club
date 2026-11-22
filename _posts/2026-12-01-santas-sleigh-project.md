---
title: Santa's Sleigh
layout: project
date: 2026-12-01
tags: [scratch, project]
excerpt: "Help Santa deliver his presents in Scratch! Fly the sleigh over the rooftops and drop presents down the chimneys - but miss, and they go KA-BOOM!"
---

<section markdown="1">

It's Christmas Eve, and Santa needs your help! His sleigh is flying over the rooftops. Press **space** (or click the mouse) to drop a present. Get it down a chimney to score a point - but if you miss, the present goes **KA-BOOM** when it hits the ground! How many presents can you deliver in a minute?

{% include scratch-embed.html id="1443101639" %}

---

</section>
<section markdown="1">

## 🔄 Step 1: Remix the starter project

Open the starter project at [scratch.mit.edu/projects/1443101362](https://scratch.mit.edu/projects/1443101362/editor){:target="_blank" rel="noopener noreferrer"} and click **Remix** to make your own copy. Don't forget to give it a new name!

Before you start coding, have a look around the project:

* *What sprites are there?*
* *What costumes do the **Sleigh** and **Present** sprites have?*
* *How many backdrops are there? Can you see how they join together?*
* *What sounds are there?*
* *What colour are the chimneys?*

---

</section>
<section markdown="1">

## 🦌 Step 2: Make the sleigh fly

We want the sleigh to fly across the sky from left to right. When it goes off the right-hand side of the stage, it should come back on the left - and we'll switch to the next backdrop, so it looks like Santa has flown on to the next street.

Add this code to the **Sleigh** sprite:

```scratch
when green flag clicked
switch backdrop to (street 1 v)
go to x: (-265) y: (105)
forever
    change x by (3)
    if <(x position) > (265)> then
        set x to (-265)
        next backdrop
    end
end
```

Click the green flag and watch Santa fly from street to street!

<div class="callout callout--important" markdown="1">
Tip! Why **265** and not **240**, where the edge of the stage is? Scratch won't let a sprite go *all* the way off the stage - it always keeps a little bit showing. Using **265** means the sleigh has nearly disappeared before it jumps back to the other side.
</div>

* *Can you make the sleigh fly faster or slower?*
* *Can you make the sleigh fly higher or lower?*

---

</section>
<section markdown="1">

## 🎈 Step 3: Bring the sleigh to life

Flying in a perfectly straight line looks a bit boring. Let's make the sleigh bob gently up and down, as if it's floating on the wind.

Add a **second** script to the **Sleigh** sprite. Both scripts start when the green flag is clicked, so they run at the same time:

```scratch
when green flag clicked
forever
    repeat (20)
        change y by (0.5)
    end
    repeat (20)
        change y by (-0.5)
    end
end
```

The first **repeat** moves the sleigh up a tiny bit 20 times, and the second moves it back down again.

The **Sleigh** sprite has two costumes. In one, the reindeer is stretching its legs out and Santa is waving. In the other, its legs are tucked in. Switching between them makes the reindeer gallop! Add a **third** script:

```scratch
when green flag clicked
forever
    next costume
    wait (0.5) seconds
end
```

* *Can you make the sleigh bob up and down further?*
* *Can you make the reindeer gallop faster?*

---

</section>
<section markdown="1">

## 🎁 Step 4: Drop a present

Santa needs to be able to drop lots of presents, so just like the fireworks project, we're going to use **clones**. The **Present** sprite itself stays hidden, and makes a clone every time you press **space** or click the mouse.

Click on the **Present** sprite and add this code:

```scratch
when green flag clicked
hide
forever
    if <<key (space v) pressed?> or <mouse down?>> then
        create clone of (myself v)
        wait until <not <<key (space v) pressed?> or <mouse down?>>>
    end
end
```

The **wait until** block stops Santa dropping a whole pile of presents if you hold the button down. You have to let go before you can drop another one.

Now add a second script to the **Present** sprite, to tell each clone what to do. It picks a colour, starts at the sleigh, then falls down until it reaches the bottom of the stage:

```scratch
when I start as a clone
switch costume to (pick random (1) to (6))
go to (Sleigh v)
show
repeat until <(y position) < (-160)>
    change y by (-6)
end
delete this clone
```

Have a look at the **Present** sprite's costumes. Costumes **1** to **6** are presents in different colours, so **pick random 1 to 6** gives every present a random colour. (Costume **7** is the explosion - we'll need that next!) To make the **pick random** block fit, drag it from **Operators** and drop it straight into the **switch costume to** block.

Click the green flag and try dropping some presents.

* *Can you make the presents fall faster or slower?*

---

</section>
<section markdown="1">

## 💥 Step 5: KA-BOOM!

At the moment, the presents just disappear when they get to the bottom. It's much more fun if they explode!

Add these three blocks just above **delete this clone**. The **boom** costume is the explosion:

```scratch
when I start as a clone
switch costume to (pick random (1) to (6))
go to (Sleigh v)
show
repeat until <(y position) < (-160)>
    change y by (-6)
end
switch costume to (boom v)
start sound (Boom v)
wait (0.5) seconds
delete this clone
```

* *Can you make the explosion last longer?*
* *Can you make the explosion grow bigger before it disappears? Hint: try a **repeat** loop with a **change size by** block inside.*

---

</section>
<section markdown="1">

## 🏠 Step 6: Down the chimney!

Now for the important bit - getting the presents down the chimneys! Each time a present goes down a chimney, we'll give you a point.

Click **Variables**, then **Make a Variable**, and call it **score**. Then click on the **Sleigh** sprite and add a **set score to 0** block to the top of the first script, so the score starts at 0 every time you click the green flag:

```scratch
when green flag clicked
set [score v] to (0)
switch backdrop to (street 1 v)
go to x: (-265) y: (105)
```

Click back on the **Present** sprite. The present needs to stop falling when it touches a chimney *or* reaches the bottom. Then, if it's touching a chimney, you get a point. If not, it explodes! Change the clone's script so it looks like this:

```scratch
when I start as a clone
switch costume to (pick random (1) to (6))
go to (Sleigh v)
show
repeat until <<touching color (#e47c38)?> or <(y position) < (-160)>>
    change y by (-6)
end
if <touching color (#e47c38)?> then
    change [score v] by (1)
    start sound (Ding v)
else
    switch costume to (boom v)
    start sound (Boom v)
    wait (0.5) seconds
end
delete this clone
```

⚠️ **Important**: the colour in both **touching color** blocks has to match the chimneys exactly. Click the colour, click the pipette at the bottom, then click on one of the chimneys on the stage.

Click the green flag. Can you get a present down every chimney?

* *Can you make the sleigh say something when you get a present down a chimney? Hint: you'll need to use a **broadcast**.*

---

</section>
<section markdown="1">

## ⏱️ Step 7: Beat the clock

Santa has a lot of houses to visit tonight, so he can't stay here forever! Let's give you one minute to deliver as many presents as you can.

Scratch has a stopwatch built in, called the **timer**. You can find it in the **Sensing** blocks. Add a **third** script to the **Sleigh** sprite:

```scratch
when green flag clicked
reset timer
wait until <(timer) > (60)>
say (join [Ho ho ho! You delivered ] (join (score) [ presents!])) for (3) seconds
stop [all v]
```

The **join** blocks (in **Operators**) stick bits of writing together, so Santa can tell you your score.

* *What's your best score? Can anyone at your table beat it?*
* *Can you give yourself more time, or less?*

---

</section>
<section markdown="1">

## 🤔 Challenges

* *Can you make the sleigh speed up every time you score a point?*
* *Can you make the presents speed up as they fall, like real things do when you drop them? Hint: you'll need a variable for the speed, and it needs to be **For this sprite only**, so each clone has its own.*
* *Can you add lives, so the game ends after 3 explosions?*
* *Can you add a third street? Draw a new backdrop with your own houses, and remember to keep the chimneys exactly the same colour!*
* *What else can you think of?*

</section>
