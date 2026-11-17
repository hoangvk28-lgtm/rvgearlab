# Watt-Hours vs mAh: Comparing Power Bank and Power Station Capacity

A milliamp-hour figure only tells you how much charge a battery holds at its own internal voltage, while a watt-hour figure tells you how much energy it holds. To compare a pocket power bank with a camping power station, convert everything to watt-hours: multiply mAh by the cell voltage (3.7 V for almost every power bank) and divide by 1,000. A 20,000 mAh bank is therefore about 74 Wh, and a 500 Wh power station holds roughly the energy of seven of them.

This matters at camp because shoppers keep meeting capacity numbers in two different languages. Phone chargers speak in mAh, power stations speak in Wh, and RV batteries speak in amp-hours at 12 V. If you cannot translate between them, you will either buy a bank that cannot finish a weekend or carry a brick that is three times heavier than the job needs. The rest of this guide gives you the formulas, the real-world losses, and a few worked camping examples.

## Why mAh alone is a misleading number

Milliamp-hours measure electric charge, not energy. Energy depends on charge multiplied by voltage, so a rating in mAh is meaningless until you know the voltage it was measured at. A 10,000 mAh battery at 3.7 V stores 37 Wh. The same 10,000 mAh at 12 V would store 120 Wh. Both are honestly "10,000 mAh", yet one holds more than three times the energy.

Marketing exploits this. Power banks are rated at the voltage of their internal lithium cells, around 3.7 V nominal, because that gives the biggest possible mAh number. Meanwhile 12 V batteries, like the ones in a camper or the lithium packs inside power stations, are usually rated in amp-hours at 12 V or 12.8 V, which gives a smaller-looking number for the same energy. A 100 Ah, 12.8 V battery is 1,280 Wh, which would be written as 346,000 mAh if it used power bank math. Nobody sells it that way, but the comparison shows why raw mAh across product categories is useless.

Watt-hours remove the problem. Every device you plug in eventually draws watts, and watts times hours is watt-hours. When you want to know how long a battery will run a load, watt-hours is the number that divides cleanly into the answer.

## The conversion formulas

Keep these two formulas handy:

- **Wh = mAh x V / 1,000.** Use 3.7 V for power banks and phone batteries, 12.8 V for a LiFePO4 battery, 12 V for lead-acid.
- **mAh = Wh x 1,000 / V.** Use this to translate a power station's Wh into the number a phone charger box would print.

| Power bank rating (mAh at 3.7 V) | Energy (Wh) | Approx. full phone charges | Fits carry-on limit? |
|---|---|---|---|
| 5,000 | 18.5 | 1 | Yes |
| 10,000 | 37 | 2 | Yes |
| 20,000 | 74 | 4 | Yes |
| 27,000 | 100 | 5 to 6 | At the limit |
| 40,000 | 148 | 8 | Needs airline approval |

The phone-charge column assumes a modern phone with a battery around 15 Wh and about a 75 percent usable yield after conversion losses. Treat it as a planning figure, not a promise.

![Two Samsung-branded power banks lying side by side, showing the printed capacity label on the case](/images/info/watt-hours-vs-mah-explained-1.webp)

## The hidden tax: conversion losses

The label on a power bank states stored energy, not delivered energy. Inside the case, the 3.7 V cells feed a boost converter that makes 5 V, or higher voltages for fast charging, and every conversion wastes some energy as heat. Common figures quoted by manufacturers and independent reviewers run around 10 to 15 percent lost at 5 V output, and the loss changes with load. At very low draw, the converter's own idle consumption can make the percentage worse.

So a 20,000 mAh bank (74 Wh) realistically delivers somewhere around 60 to 66 Wh to your phone. That is why the "four phone charges" estimate on the box tends to feel optimistic. Your phone also loses energy in its own charging circuitry, and the cable adds a little resistance. Stack these up and a rule of thumb of 65 to 75 percent of the label is more honest.

Power stations behave the same way, with one extra step. If you run a 120 V AC appliance from the outlet, the inverter inside converts DC to AC, which typically costs another 10 to 15 percent, plus a standing "idle" draw of several watts whenever the inverter is on. For anything that runs on DC, like a 12 V fridge or a USB-C laptop, you can bypass the inverter and keep more of the stored energy. That single choice often stretches a camping weekend by a day. If you want the full fridge calculation, see our walkthrough on [how long a power station runs a 12V fridge](/camp-power/how-long-will-a-power-station-run-a-fridge).

## Reading a power station spec sheet

A power station has at least four numbers worth separating:

1. **Capacity (Wh):** the energy tank. A 300 Wh unit and a 1,000 Wh unit differ by more than three times in how long they run the same load.
2. **Continuous AC output (W):** the most it can deliver steadily. Exceed it and the unit shuts down regardless of how much capacity remains.
3. **Surge output (W):** a short allowance for motor startup. Compressors and pumps can briefly draw several times their running wattage.
4. **Input (W):** how fast it recharges from a wall, car or solar panel. A big battery with a tiny input is a slow-to-refill battery.

Beginners fixate on capacity and forget the other three. A 2,000 Wh station that outputs only 600 W continuous cannot run a 1,000 W kettle, even though it holds enough energy for it many times over. The reverse also happens: a compact 1,800 W inverter attached to a small 500 Wh battery can run a hair dryer, but only for a few minutes.

If you plan to pair a station with panels, capacity and input together decide your solar recovery time. We cover the sizing math in [how to size a solar panel for camping](/camp-power/how-to-size-a-solar-panel-for-camping).

## Worked examples from real campsites

### Example 1: phone, headlamp and a speaker for a weekend

A phone at 15 Wh a day, a headlamp at 3 Wh and a small speaker at 5 Wh gives roughly 23 Wh a day, or 46 Wh over two nights. Add 30 percent for losses and you need about 60 Wh. A 20,000 mAh bank (74 Wh) does the job with a small margin. A 10,000 mAh bank (37 Wh) will not. If this is your usage, browse the [best 20,000mAh power banks](/camp-power/best-20000mah-power-banks) and skip anything bigger.

### Example 2: laptop and camera batteries for a work-from-camp day

A 60 Wh laptop battery, a phone and two camera batteries land near 100 Wh of daily charging. You will need a bank that supports USB-C Power Delivery at 65 W or more, and the capacity should be at least 150 Wh once losses are counted. That moves you out of ordinary pocket banks and into the high-output class. The [best 100W power banks](/camp-power/best-100w-power-banks) cover laptop-capable options, and the [best 40,000mAh power banks](/camp-power/best-40000mah-power-banks) show how far the large-format banks go.

### Example 3: a CPAP and a fridge for a long weekend

A CPAP draws roughly 30 to 60 W with a humidifier, so call it 8 hours at 40 W, which is 320 Wh a night. A 12 V fridge cycling at 35 percent duty with a 45 W compressor uses about 380 Wh a day. Two nights of both is well over 1,000 Wh before losses. No power bank is in this conversation. You are in power-station territory, with a solar panel to refill it. Start with the [best portable power stations with solar panels](/camp-power/best-portable-power-stations-with-solar-panels).

## Flying with batteries: the 100 Wh line

The watt-hour rating is not only a camping concept. Airline rules are written in watt-hours too. The TSA allows spare lithium-ion batteries up to 100 Wh in carry-on bags only, never in checked bags, and permits larger batteries from 101 to 160 Wh, usually two at most, with airline approval. Anything above 160 Wh is generally not allowed in the cabin at all, which is why most power stations cannot fly.

The practical effect: a 27,000 mAh bank at 3.7 V is exactly 100 Wh, so 26,800 mAh is a common "airline-safe" capacity you will see on product pages. If you are flying to a camping trip, read the Wh printed on the bank, not just the mAh, and confirm your airline's current policy before you pack. Many airlines add their own limits on how many spares you may bring.

## Capacity versus hours: simple runtime math

Runtime in hours is capacity in Wh times efficiency, divided by load in watts. Efficiency for DC loads is around 0.85 to 0.9, and for AC loads through an inverter around 0.75 to 0.85.

| Load | Typical draw | 74 Wh bank (approx. hours) | 500 Wh station, AC (approx. hours) |
|---|---|---|---|
| LED string lights | 5 W | 12 | 75 |
| Phone charging | 10 W | 6 | 45 |
| Laptop | 45 W | 1.4 | 8 |
| 12 V compressor fridge, average | 15 W | 4 | 25 |
| Electric blanket | 60 W | 1 | 6 |
| Coffee maker | 800 W | Not possible | 0.4 |

Those figures round the efficiency down to be conservative. A tidy rule: for a 12 V fridge, plan for about 300 to 500 Wh per 24 hours depending on ambient temperature and lid openings; for string lights and phone charging, the loads are small enough that capacity worries rarely arise.

## When a bigger power bank beats a small power station

There is a gap between the 40,000 mAh bank (about 150 Wh) and the smallest power stations (about 250 to 300 Wh). In that gap, buy the bank when you only need USB charging, want to carry it on a plane, or hike it in. Buy the station when you need AC outlets, a 12 V port for a fridge or pump, or solar input with MPPT built in.

Weight is a good tiebreaker. Energy density of power banks and power stations is similar, around 100 to 200 Wh per kilogram for current lithium cells at the pack level, but stations add an inverter, fans and a heavy case. A 300 Wh station typically weighs several times what a 74 Wh bank does, so the extra capacity is not free. Think about whether you will carry the unit to a campsite on your back, or lift it once from a trunk to a table.

## Solar-equipped power banks: read the fine print

Many 10,000 and 20,000 mAh banks advertise a built-in solar panel. The panels on these are tiny, often 1 to 2 W in real sun, which adds a few watt-hours across a whole day at best. They are useful as a slow trickle for emergency top-ups, not for sustained charging. If solar matters to you, choose a bank that accepts a separate folding panel through USB-C input instead. Compare the [best 10,000mAh solar power banks](/camp-power/best-10000mah-solar-power-banks) or the [best 20,000mAh solar power banks](/camp-power/best-20000mah-solar-power-banks) with that expectation in mind, and use the [best 10,000mAh power banks](/camp-power/best-10000mah-power-banks) as the baseline for sizing.

![A plain black power bank with a row of LED charge indicators on its case](/images/info/watt-hours-vs-mah-explained-2.webp)

## Reading real specifications: a short checklist

1. Find the capacity in Wh. If the product page only lists mAh, multiply by 3.7 and divide by 1,000 yourself.
2. Confirm whether the mAh figure is at 3.7 V (cell) or 5 V (output). A bank sometimes lists the output-referenced number in small print, which is lower and more honest.
3. Check the maximum output per port and combined output. A 100 W port that drops to 45 W when two ports are used behaves very differently on a camp table.
4. Check the input rating. A big bank that recharges at 18 W takes more than a day to refill from a USB-C wall plug.
5. Look for the chemistry. LiFePO4 stations tolerate far more charge cycles than standard lithium-ion, and the difference shows up in long-term ownership.
6. Compare real weight. Energy per kilogram is the easiest way to see whether a number is inflated.

## Amp-hours at 12 V: the third language

RV and van owners add a third unit to the mix. A deep-cycle or LiFePO4 house battery is sold in amp-hours at 12 V, and the same formula applies with a bigger voltage: Wh = Ah x V. A 100 Ah lithium battery at 12.8 V holds 1,280 Wh, but lead-acid batteries are different in practice because you should only use about half their rated capacity to protect their lifespan. That makes a 100 Ah lead-acid battery behave like roughly 600 Wh of usable energy, while the lithium one gives you close to 1,150 Wh or more of the 1,280 Wh.

This is why a compact lithium power station can feel surprisingly capable next to an old group-27 battery that looks much bigger. Always compare usable watt-hours, never the label. If you eventually link a power station into a larger setup, you will also want to know whether the chemistry tolerates deep discharge, how its battery management system limits current, and what happens at the low-voltage cutoff, because the cutoff decides the true floor of your capacity.

## A quick mental model for trip planning

Many campers find it easiest to think of capacity as a fuel tank and watts as the rate of fuel burn. List what you will run, estimate its daily watt-hours, add 25 to 30 percent for losses, and pick a battery whose Wh covers that total with a day of reserve for cloudy weather. If you plan to recharge with solar, divide your daily total by the realistic panel yield (usually about four effective sun hours for fixed or hand-aimed panels in summer) to find the panel wattage you need. Repeat the calculation for the worst case, such as a cold night with a heated blanket, and make sure the output limit of the unit exceeds the combined draw. Ten minutes of arithmetic before the trip is cheaper than a dead battery at camp.

## Common mistakes to avoid

- **Comparing mAh across categories.** A 20,000 mAh bank and a 20,000 mAh label on an RV battery are not equal.
- **Forgetting the conversion losses.** Plan on delivering roughly 65 to 85 percent of the label capacity, depending on what you plug in.
- **Ignoring output limits.** A battery with enough Wh can still fail to run a device that needs more watts than the inverter allows.
- **Believing "solar power bank" means it charges itself.** The built-in panel is a trickle at best.
- **Skipping inverter idle draw.** Leaving an AC outlet switched on with nothing attached can drain a small station by several watt-hours an hour.
- **Packing the wrong battery for a flight.** Check the Wh rating, carry it in the cabin and follow your airline's rules.

For anyone choosing an inverter to run sensitive gear from a battery, [pure sine wave versus modified sine wave inverters](/camp-power/pure-sine-wave-vs-modified-sine-wave-inverter) explains why the waveform matters as much as the watts.

## Frequently asked questions

### How many watt-hours is a 10,000 mAh power bank?
About 37 Wh. Multiply 10,000 by 3.7 and divide by 1,000. In practice you will get around 25 to 30 Wh delivered to a phone after conversion losses, which is why a 10,000 mAh bank usually charges a modern phone twice rather than three times.

### Can I take a 20,000 mAh power bank on a plane?
Generally yes. At 3.7 V a 20,000 mAh bank is about 74 Wh, under the 100 Wh limit that TSA applies to spare lithium-ion batteries. It must go in your carry-on, not checked luggage. Airlines can add their own rules, so check the policy before you travel.

### Is a bigger mAh number always better?
No. Voltage, output wattage, weight and efficiency matter as much. A smaller bank with USB-C Power Delivery at 65 W may be more useful than a larger one that only outputs 12 W, because it can charge a laptop and it recharges faster too.

### How do I convert a power station's Wh to mAh for comparison?
Multiply watt-hours by 1,000 and divide by 3.7 for the equivalent in power-bank terms. A 500 Wh station is roughly 135,000 mAh at 3.7 V. The result is only useful for comparison, since power stations are rated in Wh precisely to avoid this confusion.

### Does cold weather change capacity?
Yes. Lithium cells lose usable capacity in the cold, and some units refuse to charge below freezing. At about 0 degrees C expect noticeably less runtime. Keep the bank inside your jacket or sleeping bag overnight, and charge it indoors or in a warm vehicle when possible.

### How long do power banks and stations last before capacity fades?
Standard lithium-ion banks are typically rated for a few hundred full cycles before dropping to around 80 percent capacity, while LiFePO4 power stations are commonly rated for 2,000 or more cycles. Heat and keeping the battery at full charge for months both speed up fading.

## Sources & further reading
- [TSA: Lithium batteries, 100 watt-hours or less](https://tsa.gov/travel/security-screening/whatcanibring/items/lithium-batteries-100-watt-hours-or-less-device)
- [Anker: Wh to mAh conversion](https://anker.com/blogs/others/wh-to-mah)
- [Renogy: mAh to Wh conversion guide](https://www.renogy.com/blogs/buyers-guide/mah-to-wh-conversion-guide)

## Image credits
- "SAMSUNG BATTERY PACK (POWER BANK) EB-PG850" by Dinkun Chen, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:SAMSUNG_BATTERY_PACK_(POWER_BANK)_EB-PG850.jpg).
- "Itel power bank Nigeria" by Verified legend, [CC0](http://creativecommons.org/publicdomain/zero/1.0/deed.en), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Itel_power_bank_Nigeria.jpg).
