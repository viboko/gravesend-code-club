---
title: Rock! Paper! Scissors!
layout: project
date: 2026-09-02
tags: [microbit, project]
excerpt: "Turn a micro:bit into an expert Rock, Paper, Scissors player."
---

Important! Before you get started, make sure your micro:bit is connected to your computer. Follow the guide: 

What you will make

VIDEO

## Step 1: Display a countdown... 3... 2... 1... 

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

## Step 2: Make a new variable

Call the variable **choice**.

## Step 3: Set the variable to a random number

```makecode
choice = randint(1, 3)
```

## Step 4: Display the icon for the chosen thing

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

## Challenges

* Could you make a cheat mode? e.g. if you tilt the microbit to the left it always picks Scissors*
* TRICKY! *You could make the user make their choice by pressing A for Rock, B for Scissors and A+B for Paper. Can you make the micro:bit display who won?*
