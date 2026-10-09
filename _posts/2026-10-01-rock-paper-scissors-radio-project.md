---
title: Rock! Paper! Scissors! Radio!
layout: project
date: 2026-10-01
tags: [micro:bit, project]
excerpt: "Play Rock, Paper, Scissors across 2 micro:bits!"
---

<section markdown="1">

<div class="callout callout--important" markdown="1">
Important! Before you get started, make sure your micro:bit is connected to your computer: [Connect your micro:bit]({% link _posts/2026-09-01-connect-microbit.md %})
</div>

{% include microbit-embed.html id="S85490-96105-84061-18184" %}

---

</section>
<section markdown="1">

## Step 1: Pick a radio group

For micro:bits to communicate, they must be in the same **radio group**. You can pick a number between 0 and 255. 

```makecode
let other = 0
let choice = 0
radio.setGroup(1)
choice = 0
other = 0
```

You should also create two variables: one for your choice and one for the choice of the other micro:bit.

---

</section>
<section markdown="1">

## Step 2: Handle button presses for Rock, Paper and Scissors

<div class="makecode-row" markdown="1">

```makecode
function send_choice () {} // @hide
input.onButtonPressed(Button.A, function () {
    choice = 1
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    send_choice()
})
```

```makecode
function send_choice () {} // @hide
input.onButtonPressed(Button.B, function () {
    choice = 2
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    send_choice()
})
```

```makecode
function send_choice () {} // @hide
input.onButtonPressed(Button.AB, function () {
    choice = 3
    basic.showIcon(IconNames.Scissors)
    send_choice()
})
```

</div>

You'll notice that after we show each icon we call a function to send the value to the other micro:bit. We're going to write that function next...

---

</section>
<section markdown="1">

## Step 3: Send the choice to the other micro:bit

```makecode
function check_choices () {} // @hide
function send_choice () {
    radio.sendValue("other", choice)
    check_choices()
}
```

---

</section>
<section markdown="1">

## Step 4: Receive the choice from the other micro:bit

```makecode
function check_choices () {} // @hide
radio.onReceivedValue(function (name, value) {
    other = value
    check_choices()
})
```

---

</section>
<section markdown="1">

## Step 5: Check to see who won

```makecode
function check_choices () {
    if (choice == 0 || other == 0) {
        return
    } else if (choice == other) {
        basic.showIcon(IconNames.No)
    } else if (choice == other + 1) {
        basic.showIcon(IconNames.Happy)
    } else if (choice == 1 && other == 3) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    choice = 0
    other = 0
}
```

---

</section>
<section markdown="1">

## 🤔 Challenges

</section>
