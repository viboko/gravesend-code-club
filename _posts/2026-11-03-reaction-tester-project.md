---
title: Reaction Tester
layout: project
date: 2026-11-03
tags: [micro:bit, project]
excerpt: "How fast are your reactions? Turn your micro:bit into a reaction tester that times how quickly you can press the right button."
---

<section markdown="1">

How fast are your reactions? Press **A+B** to start. After a random amount of time, your micro:bit shows the letter **A** or **B**, and you have to press that button as quickly as you can. It does this three times, and then tells you your average time. Challenge your friends to beat it!

<div class="callout callout--important" markdown="1">
Important! Before you get started, make sure your micro:bit is connected to your computer: [Connect your micro:bit]({% link _posts/2026-09-01-connect-microbit.md %})
</div>

---

</section>
<section markdown="1">

## 🎲 Step 1: Show a random letter

Make a variable called **letter**. It's going to remember which button the player needs to press: **"A"**, **"B"**, or **""** (nothing at all) when there's nothing to press.

When **A+B** is pressed, we clear the screen and wait for a random amount of time, so that the player can't guess when the letter is coming. Then we flip a coin to choose **A** or **B**, and show it:

```makecode
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.pause(randint(1000, 5000))
    if (randint(1, 2) == 1) {
        letter = "A"
    } else {
        letter = "B"
    }
    basic.showString(letter)
})
```

<div class="callout callout--important" markdown="1">
Tip! The **set letter to** block starts off with a slot for a *number*, and typing **A** into it won't work, even with quote marks. To put text in it, click **Advanced**, then **Text**, and drag the first block (the one that looks like **" "**) into the slot. Then type **A** inside it. You'll need to do the same thing every time this project uses a letter, or an empty **""**.
</div>

The **pause** block counts in *milliseconds*. There are **1000** milliseconds in a second, so this waits for somewhere between **1** and **5** seconds.

Try it out in the simulator. Press **A+B**, wait, and a letter should appear.

* *Can you make the wait longer or shorter?*

---

</section>
<section markdown="1">

## ⏱️ Step 2: Start the timer

To find out how quick the player is, we need to know *when* the letter appeared. Make a variable called **start**, and add this block just *before* the **show string** block:

```makecode
start = input.runningTime()
```

You'll find **running time (ms)** in **Input**, under **more**. It's how many milliseconds have gone by since the micro:bit was switched on - like a stopwatch that's always running. We'll check it again when the button is pressed, and the difference between the two is the player's reaction time.

---

</section>
<section markdown="1">

## 👀 Step 3: Watch for the right button

Make a variable called **time**. Then add this new **forever** loop, which keeps checking whether the player is pressing the right button:

```makecode
basic.forever(function () {
    if (letter == "A" && input.buttonIsPressed(Button.A)) {
        time = input.runningTime() - start
        letter = ""
    }
    if (letter == "B" && input.buttonIsPressed(Button.B)) {
        time = input.runningTime() - start
        letter = ""
    }
})
```

Remember to use a **Text** block for the **"A"** and **"B"** in the **=** blocks, and for the empty **""** in **set letter to**.

If the letter is **A** and button **A** is being pressed, we work out the reaction time: what the stopwatch says now, take away what it said when the letter appeared. Then we set **letter** to **""**, because there's nothing left to press. It's the same for **B**.

Why not just check the buttons straight after the **show string** block? It's because **show string** is a bit sneaky! When it shows just one letter, it waits for nearly a second afterwards before the next block can run. A quick player would already have pressed the button by then, and we'd miss it. The **forever** loop runs *at the same time* as the rest of the code, so it doesn't have to wait.

Pressing the wrong button doesn't do anything - the micro:bit just keeps waiting for the right one.

---

</section>
<section markdown="1">

## 🏁 Step 4: Show the time

Back in the **on button A+B pressed** blocks, we need to wait until the player has pressed the right button, then show their time. Add this underneath the **show string** block:

```makecode
while (letter != "") {
    basic.pause(10)
}
basic.showNumber(time)
```

The **while** loop keeps going round and round as long as **letter** isn't **""**. As soon as the **forever** loop sees the right button and sets **letter** to **""**, the **while** loop stops, and we show the time.

The **pause (ms) 10** inside the loop is really important! It gives the **forever** loop a chance to run. Without it, the micro:bit would be so busy going round the **while** loop that it would never get round to checking the buttons.

Try it out! The number is your reaction time in milliseconds. If it says **350**, you took **350** thousandths of a second, which is about a third of a second.

* *What's the fastest time you can get?*

---

</section>
<section markdown="1">

## 🔁 Step 5: Have three goes and work out the average

One go isn't a very fair test - you might have been lucky! Let's have three goes, and then work out the **average**.

Make one more variable, called **total**. Then put everything in the **on button A+B pressed** blocks inside a **repeat 3 times** loop, and add the blocks for **total**, so it looks like this:

```makecode
input.onButtonPressed(Button.AB, function () {
    total = 0
    for (let index = 0; index < 3; index++) {
        basic.clearScreen()
        basic.pause(randint(1000, 5000))
        if (randint(1, 2) == 1) {
            letter = "A"
        } else {
            letter = "B"
        }
        start = input.runningTime()
        basic.showString(letter)
        while (letter != "") {
            basic.pause(10)
        }
        total += time
        basic.showNumber(time)
    }
    basic.showString("Average")
    basic.showNumber(Math.round(total / 3))
})
```

**total** starts at **0**, and each go adds its time on. To find the average, we share the total out equally between the three goes - in other words, divide it by **3**. The **round** block gets rid of any decimals.

Download your code onto your micro:bit, and see who in your group has the fastest reactions! When it's finished, press **A+B** again to have another go.

---

</section>
<section markdown="1">

## 🤔 Challenges

* *At the moment, you can cheat by holding down **A** and **B** all the time! Can you stop that from working? Hint: what if the player is already pressing a button when the letter appears?*
* *Can you show a cross, and play a sad sound, if the player presses the wrong button?*
* *Can you remember the best average anyone has got, and show a trophy when someone beats it?*
* *Can you show the average in seconds instead of milliseconds?*
* *Can you make a two-player version, where two micro:bits race each other using radio?*
* *What else can you think of?*

</section>
