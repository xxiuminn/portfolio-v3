---
name: Bulk budget scheduler for Meta ads
description: Scheduling and adjusting Meta ad budgets in bulk without touching Ads Manager.
tags: ["Python", "Meta API", "Streamlit"]
# github: https://github.com
year: "2024"
---

If you are familiar with how DTC brands work, you would know that sales days probably break or make your yearly target. Black Friday, 11.11, flash sales, and the list goes on. Brands go hard on ad spend during those windows, capitalising on last-minute shopping demand when purchase intent is at its peak..

## What budget scheduler does

![Budget Scheduler](https://xiuminhow.netlify.app/budget-scheduling.png)

And Meta was smart. In 2023, they introduced a feature called budget scheduler. Budget scheduler lets you pre schedule sharp, short-term budget increases, specifically for high traffic periods to encourage brands to spend more. It's different from Meta's auto rules: 

- Regular budget edits can trigger the learning phase reset, disrupting performance
- Budget scheduling is designed for short-term, controlled budget spikes
- It allows campaigns to scale spend without destabilizing performance

## Why I built a bulk version of it

When I joined my current DTC company back in 2024, one of the first things my predecessor told me during handover was _"You will need to set up the Budget scheduler before every sale weekend"_. Sounds simple.

Except we had over 100 active campaigns.

And Meta, in all their wisdom, doesn't let you bulk apply budget schedulers. You go into each campaign, one by one. Click into the settings, set your dates, set your amounts, save, and move on. Multiply that by 100 and you are looking at over an hour of pure manual, brain-numbing clicking, every single sale weekend. As this brand runs sales basically constantly, this was going to be a recurring nightmare.

I did it a few times, and I told myself I was never going to do it again.

So I went down the Meta API rabbit hole, read through their documentations, and built my own bulk scheduler tool in Python. It was subsequently deployed on Streamlit so that when I go on leave, my colleagues would be able to use it. With just one button click, all the campaigns are scheduled, done in minutes.

![Bulk Budget Scheduler Tool](https://xiuminhow.netlify.app/budget-scheduler.jpg)

## What I learnt

It was my first build on the Meta API and it sets the pattern for how I work:
if something is painful, repetitive, and manual, it can always be solved. Don't wait for your engineering team to do it for you.
