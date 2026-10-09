---
title: Rock! Paper! Scissors! Radio!
layout: project
date: 2026-10-02
tags: [micro:bit, project]
excerpt: "Challenge a friend to Rock, Paper, Scissors! Your micro:bits send their choices to each other by radio and work out who won."
---

<section markdown="1">

Team up with a friend and play Rock, Paper, Scissors - using radio! Each of you picks rock, paper or scissors on your own micro:bit, it sends your choice to the other micro:bit, and then both micro:bits show who won. You'll need **two micro:bits** - one each.

<div class="callout callout--important" markdown="1">
Important! Before you get started, make sure your micro:bit is connected to your computer: [Connect your micro:bit]({% link _posts/2026-09-01-connect-microbit.md %})
</div>

{% include microbit-embed.html id="S85490-96105-84061-18184" %}

---

</section>
<section markdown="1">

## 📻 Step 1: Pick a radio group

micro:bits can only hear each other if they're in the same **radio group**, which is a number between **0** and **255**. Agree on a number with your partner - if other pairs nearby are playing too, make sure each pair picks a different number, or your games will get mixed up!

```makecode
let other = 0
let choice = 0
radio.setGroup(1)
choice = 0
other = 0
```

Make two variables: **choice**, to remember what you picked, and **other**, to remember what the other micro:bit picked. Set them both to **0** when the micro:bit starts - **0** means "nothing picked yet".

* *Can you show a picture or scroll a message when the micro:bit starts, so players know it's ready?*

---

</section>
<section markdown="1">

## ✊✋✌️ Step 2: Pick Rock, Paper or Scissors

Each choice gets its own button, and its own number:

* **A** is rock (**1**)
* **B** is paper (**2**)
* **A+B** together is scissors (**3**)

When a button is pressed, we store the number in **choice** and show the matching picture:

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

Did you spot the **call send_choice** block at the end of each one? That's a **function** - a set of blocks with a name, which we can use again and again. All three buttons need to send their choice to the other micro:bit in the same way, so we'll write those blocks once, in a function, rather than three times. Let's write it next...

* *Can you design your own pictures for rock, paper and scissors?*

---

</section>
<section markdown="1">

## 📤 Step 3: Send your choice to the other micro:bit

Click **Advanced**, then **Functions**, then **Make a Function...**, and call it **send_choice**. Then add these blocks inside it:

```makecode
function check_choices () {} // @hide
function send_choice () {
    radio.sendValue("other", choice)
    check_choices()
}
```

This sends a message over the radio with the name **"other"** and your choice as its value. After that, it calls another function, **check_choices**, to see whether anyone has won yet. Don't worry that it doesn't exist yet - we'll write it in Step 5.

---

</section>
<section markdown="1">

## 📥 Step 4: Receive the other micro:bit's choice

When a message arrives over the radio, we store its value in **other**, then check whether anyone has won:

```makecode
function check_choices () {} // @hide
radio.onReceivedValue(function (name, value) {
    other = value
    check_choices()
})
```

Notice that we call **check_choices** both when we send our choice *and* when we receive the other one. That's because we don't know which player will press their button first!

---

</section>
<section markdown="1">

## 🏆 Step 5: Find out who won

Now for the clever bit! Make a function called **check_choices**, and add these blocks to it:

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

Here's how it works:

* If either **choice** or **other** is still **0**, someone hasn't picked yet, so we stop and wait.
* If both players picked the same thing, it's a draw ❌.
* Paper (**2**) beats rock (**1**), and scissors (**3**) beats paper (**2**). In both cases, our number is exactly **1 more** than the other player's, so we win 😀.
* Rock (**1**) beats scissors (**3**) too, so that gets its own check.
* Anything else means the other player won 🙁.

Finally, we set both variables back to **0**, ready for the next round. Download your code onto both micro:bits and challenge your friend!

* *Can you show a different picture for a draw, a win and a loss?*
* *Can you play a happy tune when you win, and a sad one when you lose?*

---

</section>
<section markdown="1">

## 🤔 Challenges

* *Can you show what the other player picked before showing who won?*
* *Can you keep score, and show it when the micro:bit is shaken?*
* *Can you make the game "best of 3", showing a trophy when someone wins 2 rounds?*
* *Can you add a countdown... 3... 2... 1... before the result is shown, to build up the suspense?*
* *What else can you think of?*

</section>
