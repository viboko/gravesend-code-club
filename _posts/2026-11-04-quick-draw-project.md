---
title: Quick Draw
layout: project
date: 2026-11-04
tags: [micro:bit, project]
excerpt: "A two-player reaction game for the micro:bit. Wait for the heart, then be the first to press your button - but don't press too early!"
---

<section markdown="1">

Who has the fastest reactions? Two players share one micro:bit: **Player A** uses button **A**, and **Player B** uses button **B**. Press **A+B** to start. After a random amount of time, a heart appears, and the first player to press their button wins. But be careful - if you press too early, you lose!

<div class="callout callout--important" markdown="1">
Important! Before you get started, make sure your micro:bit is connected to your computer: [Connect your micro:bit]({% link _posts/2026-09-01-connect-microbit.md %})
</div>

---

</section>
<section markdown="1">

## 💓 Step 1: Wait for the heart

When **A+B** is pressed, we clear the screen and wait for a random amount of time, so that nobody can guess when the heart is coming. Then we show the heart:

```makecode
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.pause(randint(2000, 6000))
    basic.showIcon(IconNames.Heart)
})
```

The **pause** block counts in *milliseconds*. There are **1000** milliseconds in a second, so this waits for somewhere between **2** and **6** seconds.

Try it out in the simulator. Press **A+B**, and wait for the heart.

* *Can you make the wait longer or shorter?*
* *Can you choose a different picture instead of a heart?*

---

</section>
<section markdown="1">

## 🏁 Step 2: Who pressed first?

Make a variable called **go**. It's going to be **true** while the heart is showing and nobody has pressed their button yet, and **false** the rest of the time.

<div class="callout callout--important" markdown="1">
Tip! The **set go to** block starts off with a slot for a *number*. To put **true** or **false** in it, click **Logic**, and drag the **true** block into the slot. You can click on **true** to change it to **false**.
</div>

In the **on button A+B pressed** blocks, set **go** to **false** at the start, and to **true** just before the heart is shown:

```makecode
input.onButtonPressed(Button.AB, function () {
    go = false
    basic.clearScreen()
    basic.pause(randint(2000, 6000))
    go = true
    basic.showIcon(IconNames.Heart)
})
```

Now, when a player presses their button, we check whether **go** is **true**. If it is, they're the winner! We show an arrow pointing at them - Player A is on the left, so their arrow points left, and Player B's arrow points right:

<div class="makecode-row" markdown="1">

```makecode
input.onButtonPressed(Button.A, function () {
    if (go) {
        go = false
        basic.showArrow(ArrowNames.West)
    }
})
```

```makecode
input.onButtonPressed(Button.B, function () {
    if (go) {
        go = false
        basic.showArrow(ArrowNames.East)
    }
})
```

</div>

Why do we set **go** back to **false** straight away? So that only the *first* press counts. When the second player presses their button a moment later, **go** is already **false**, so nothing happens.

Try it with a friend!

---

</section>
<section markdown="1">

## ⚠️ Step 3: No pressing too early!

At the moment, you can keep pressing your button over and over again, and you're bound to be first when the heart appears. Let's stop that: if you press your button before the heart appears, you lose!

Make another variable called **waiting**. It's going to be **true** while we're waiting for the heart to appear. Change the **on button A+B pressed** blocks so that they look like this:

```makecode
input.onButtonPressed(Button.AB, function () {
    go = false
    waiting = true
    basic.clearScreen()
    basic.pause(randint(2000, 6000))
    if (waiting) {
        waiting = false
        go = true
        basic.showIcon(IconNames.Heart)
    }
})
```

Then change the blocks for both buttons. Click the **+** at the bottom of each **if** block to add an **else if**, so that they look like this:

<div class="makecode-row" markdown="1">

```makecode
input.onButtonPressed(Button.A, function () {
    if (go) {
        go = false
        basic.showArrow(ArrowNames.West)
    } else if (waiting) {
        waiting = false
        basic.showArrow(ArrowNames.East)
    }
})
```

```makecode
input.onButtonPressed(Button.B, function () {
    if (go) {
        go = false
        basic.showArrow(ArrowNames.East)
    } else if (waiting) {
        waiting = false
        basic.showArrow(ArrowNames.West)
    }
})
```

</div>

Here's how it works:

* If **go** is **true**, the heart is showing, so you win, just like before.
* Otherwise, if **waiting** is **true**, the heart hasn't appeared yet. You pressed too early, so the arrow points at the *other* player - they win!
* When someone presses too early, **waiting** becomes **false**. That's why there's an **if waiting** check in the **on button A+B pressed** blocks: the game is already over, so the heart shouldn't appear.

---

</section>
<section markdown="1">

## 🎵 Step 4: Add some sounds

Let's play a happy tune when someone wins fairly, and a sad one when someone presses too early. You'll find the **play melody** block in **Music**. Add one after each **show arrow** block, so that the blocks for button **A** look like this:

```makecode
input.onButtonPressed(Button.A, function () {
    if (go) {
        go = false
        basic.showArrow(ArrowNames.West)
        music.play(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
    } else if (waiting) {
        waiting = false
        basic.showArrow(ArrowNames.East)
        music.play(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.InBackground)
    }
})
```

Do the same for button **B**.

If your micro:bit has a speaker on the back, you'll hear the tunes straight away. Older micro:bits don't have a speaker, so you'll need to plug in some headphones instead - the simulator shows you how.

Download your code onto your micro:bit and challenge your friends! Press **A+B** to start each new round.

* *Can you choose different tunes?*

---

</section>
<section markdown="1">

## 🤔 Challenges

* *Can you keep score, and show a trophy when someone gets to 5 wins?*
* *Can you add a trick picture? Sometimes show a skull instead of a heart - and if you press your button on a skull, you lose!*
* *There's a sneaky way to cheat: hold your button down **before** the heart appears, and let go **after** it appears. Can you work out why this works? Hint: does the **on button pressed** block happen when you push the button down, or when you let go?*
* *Can you make a version for two micro:bits, so each player has their own, using radio?*
* *What else can you think of?*

</section>
