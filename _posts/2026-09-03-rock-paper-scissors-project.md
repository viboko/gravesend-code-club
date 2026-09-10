---
title: Rock! Paper! Scissors!
layout: project
date: 2026-09-03
tags: [micro:bit, project]
excerpt: "Turn your micro:bit into an expert Rock, Paper, Scissors player."
---

<section markdown="1">

<div class="callout callout--important" markdown="1">
Important! Before you get started, make sure your micro:bit is connected to your computer: [Connect your micro:bit]({% link _posts/2026-09-01-connect-microbit.md %})
</div>

## 🎮 What you will make

{% include microbit-embed.html id="_gAg42F0RuVm4" ratio="145%" %}

---

</section>
<section markdown="1">

## ⏱️ Step 1: Display a countdown... 3... 2... 1

```makecode
input.onButtonPressed(Button.A, function () {
    basic.showString("3")
    basic.pause(1000)
    basic.showString("2")
    basic.pause(1000)
    basic.showString("1")
    basic.pause(1000)
})
```

* *How do you make the countdown faster or slower?*
* *Can you play a musical tone every time a number is displayed?*
* *Instead of repeating the commands, can you make this work with a loop?*

---

</section>
<section markdown="1">

## 🎚️ Step 2: Make a new variable

Call the variable **choice**.

---

</section>
<section markdown="1">

## 🎲 Step 3: Set the variable to a random number

Add this command to the code you already have:

```makecode
choice = randint(1, 3)
```

---

</section>
<section markdown="1">

## ✊✋✌️ Step 4: Display the icon for the chosen thing

Finally, add this:

```makecode
if (choice == 1) {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
}
if (choice == 2) {
    basic.showIcon(IconNames.Square)
}
if (choice == 3) {
    basic.showIcon(IconNames.Scissors)
}
```

* *Can you play a different sound when each icon is shown?*
* *Can you make the chosen icon flash on the display?*

---

</section>
<section markdown="1">

## 🤔 Challenges

* Could you make a cheat mode? e.g. if you tilt the microbit to the left it always picks Scissors*
* *You could make the user make their choice by pressing A for Rock, B for Scissors and A+B for Paper. Can you make the micro:bit display who won?* **TRICKY** 🤔

</section>
