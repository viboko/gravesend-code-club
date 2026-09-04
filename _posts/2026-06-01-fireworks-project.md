---
title: Fireworks
layout: project
date: 2026-06-01
tags: [scratch, project]
excerpt: "Build a fireworks display in Scratch using colourful particle effects that launch and explode on the stage."
---

<section markdown="1">

These steps are available at [bit.ly/fireworks-steps](https://bit.ly/fireworks-steps).

{% include scratch-embed.html id="1328023584" %}

---

</section>
<section markdown="1">

## 🔄 Step 1: Remix the Starter Pack

Follow the link: [bit.ly/fireworks-starter](https://bit.ly/fireworks-starter).

Next tap **Remix**. When the project loads, give it a new name. Have a look around the project.

</section>
<section markdown="1">

* *What sprites do you have available?*
* *What costumes do the sprites have?*
* *What sounds do you have available?*
* *Is there any code already?*

---

</section>
<section markdown="1">

## 🎨 Step 2: Choose or draw a background

Where do you want your fireworks display to take place? Maybe you could draw a background or generate one using AI!

---

</section>
<section markdown="1">

## 🖱️ Step 3: Wait for user to press the mouse

In the rocket sprite check when the mouse button is pressed tell it to launch.

This will not actually make the rocket appear. Instead it makes a clone (or copy) of the sprite and the next script will launch it.

```scratch
when green flag clicked
hide
switch costume to (rocket v)
forever
    if <mouse down?> then
        create clone of (myself v)
    end
end
```

---

</section>
<section markdown="1">

## 🎆 Step 4: Animate the firework

```scratch
when I start as a clone
go to x: (0) y: (-180)
point towards (mouse-pointer v)
glide (1) secs to (mouse pointer v)
delete this clone
```

* *Can you make the firework make a noise as it flies upwards?*
* *Can you make the firework move slower or faster?*
* *Can you make the firework start from a random position along the bottom of the screen?*

---

</section>
<section markdown="1">

## 🚀 Step 5: Make only one rocket appear at a time

Have you noticed that if you hold the mouse button down, you will make lots of fireworks appear at once? If you want to fix this, you can add this right after you create the clone:

```scratch
wait until <not <mouse down?>>
```

---

</section>
<section markdown="1">

## 💥 Step 6: Make the firework explode

Add this code right before we delete the clone:

```scratch
repeat (3)
    next costume
    wait (0.2) seconds
end
```

* *What is a good sound to play when the firework explodes?*
* *Can you make the explosion animation last longer?*
* *Can you change the colour of the explosion?*

---

</section>
<section markdown="1">

## 🤔 Challenges

* *Can you add different types of fireworks?*
* *Can you add fireworks that spin around?*

</section>
