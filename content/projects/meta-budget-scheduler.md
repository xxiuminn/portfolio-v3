---
name: Bulk budget scheduler for Meta ads
description: Scheduling and adjusting Meta ad budgets in bulk without touching Ads Manager.
tags: ["Python", "Meta API", "Streamlit"]
# github: https://github.com
year: "2024"
---

If you are familiar with how DTC brands work, you would know that sales days can pretty much make or break your yearly target.

Black Friday, 11.11, flash sales, payday sales, and the list goes on. Brands go hard on ad spend during these windows because purchase intent is usually at its peak. Everyone is shopping, everyone is comparing, and every brand is trying to capture that last-minute demand.

Naturally, Meta knows this too.

![Budget Scheduler](https://xiuminhow.netlify.app/budget-scheduling.png)

## The problem

Meta does not let you bulk apply budget schedulers.

When I joined my current DTC company in 2024, one of the first things my predecessor told me during handover was:

> “You will need to set up the Budget Scheduler before every sale weekend. Good luck!”

Sounds simple enough.

Except we had over **100 active campaigns**.

And Meta, in all their wisdom, makes you do it campaign by campaign.

Click into the campaign.  
Open settings.  
Set the dates.  
Set the budget.  
Save.  
Move on to the next one.

Do that more than 100 times, and you are looking at over an hour of pure manual, brain-numbing clicking before every sale weekend.

And because this brand runs sales basically all the time, this was not a one-off problem. It was going to be a recurring nightmare.

I did it a few times and decided I was never going to do it again.

## Why I built a bulk version of it

So I went down the Meta API rabbit hole, read through the documentation, and built my own bulk Budget Scheduler tool in Python.

Later, I deployed it on Streamlit so that my colleagues could use it too, especially when I was on leave.

Instead of manually setting up 100+ campaigns one by one, they could upload the required inputs, click one button, and the campaigns would be scheduled in minutes.

That became our internal **Bulk Budget Scheduler Tool**.

![Bulk Budget Scheduler Tool](https://xiuminhow.netlify.app/budget-scheduler.jpg)

## What I learnt

This was my first proper build using the Meta API, and it set the tone for how I approach work now:

> If something is painful, repetitive, and manual, there is probably a way to automate it.

And you do not always need to wait for an engineering team to do it for you.
