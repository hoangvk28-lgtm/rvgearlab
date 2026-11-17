# RV Converter vs Inverter vs Inverter-Charger

A converter changes 120 V AC from shore power or a generator into 12 V DC to run your RV's lights, pump and fans and to charge the house battery. An inverter does the opposite: it turns battery DC into 120 V AC so you can run outlets, a TV or a microwave when you are off the grid. An inverter-charger combines both jobs in one box, adding a transfer switch that passes shore power through to the outlets and charges the battery, then switches to inverter power when shore power drops. Most RVs ship with a converter only, and adding an inverter or replacing both with an inverter-charger is the usual boondocking upgrade.

The three devices are easy to confuse because they all move power between AC and DC. The key is the direction of flow and the job: converters and chargers fill the battery, inverters empty it into outlets. Below is how each works, how they fit together in an RV electrical system, how to size them, and which combination suits which rig and travel style.

## The two kinds of power in an RV

An RV runs two electrical systems in one shell.

| System | Voltage | Source | Typical loads |
|---|---|---|---|
| 12 V DC | About 12 to 14.4 V | House battery, converter, solar | Lights, water pump, furnace fan, slide motors, vent fans, control boards |
| 120 V AC | 120 V (30 or 50 A service) | Shore power, generator, inverter | Outlets, microwave, air conditioner, TV, residential fridge |

Shore power or a generator supplies the AC system directly. The battery supplies the DC system. The converter links AC to DC, and the inverter links DC to AC. Understanding which side a device runs on tells you which box matters for it.

## What a converter does

A converter (also called a power converter or converter-charger in many RVs) takes 120 V AC and outputs regulated 12 V DC. It powers the DC loads while you are plugged in, so that the battery is not drained, and it charges the battery. Most converters sit in the distribution panel in the RV's basement, often combined with fuses and breakers.

Features and numbers:

- **Output rating.** Common sizes are 30, 45, 55, 60 and 75 amps. A bigger converter charges faster and supports more DC load at once.
- **Charge stages.** Older converters used a single voltage that overcharged or undercharged batteries. Modern converters use multi-stage charging (bulk, absorption, float) for lead-acid batteries, which extends battery life.
- **Lithium compatibility.** Many older converters do not support lithium batteries, and a mismatched profile can undercharge them or hold them at an unsuitable float voltage. Some converters have a lithium mode, and others can be replaced. See [upgrading an RV converter for lithium](/power-electrical/upgrade-rv-converter-lithium) for the details.
- **Efficiency.** Converters are about 80 to 90 percent efficient, and their cooling fans can be noisy.

A converter cannot run outlets from the battery. It only works when AC power is present. That is why campers boondocking with no shore power and no generator find that their outlets are dead and their lights still work. For more on where the converter sits in the panel and how it connects, see [the RV converter and distribution panel explained](/power-electrical/rv-converter-distribution-panel).

## What an inverter does

An inverter turns battery DC into 120 V AC. It lets you run AC loads such as a TV, a laptop charger, a coffee maker or a microwave from your house battery when you are not connected to shore power.

Key points:

- **Waveform.** Pure sine wave inverters produce clean AC that is safe for electronics, motors and medical equipment. Modified sine wave inverters are cheaper but can cause problems, as explained in [pure sine versus modified sine wave inverters](/camp-power/pure-sine-wave-vs-modified-sine-wave-inverter). For an RV, pure sine is the right choice.
- **Power rating.** Sizes range from 300 W to 3,000 W or more. The rating is continuous output, with a surge allowance for motor startup.
- **Efficiency and idle draw.** Inverters are 85 to 95 percent efficient at moderate load, and they draw a few watts to a few dozen watts when switched on with no load.
- **Battery demand.** A 1,000 W load draws about 90 A from a 12 V battery. That requires thick cable, a fuse and a battery that can deliver the current.
- **Standalone versus integrated.** A standalone inverter has an AC outlet or a hardwired output and no charger. An inverter-charger adds charging and transfer.

If you want to see which loads an inverter can reasonably run, the guide to [sizing an inverter for an RV](/power-electrical/size-inverter-for-rv) walks through it. If you are installing one, [how to install an RV inverter safely](/power-electrical/install-rv-inverter-safely) covers cable size, fusing and placement.

## What an inverter-charger does

An inverter-charger is an inverter and a multi-stage battery charger in one box, with an automatic transfer switch. When shore power is present, the unit passes it through to the AC loads and uses part of it to charge the battery. When shore power fails, or when you unplug, the transfer switch moves in less than a fraction of a second, and the unit powers the AC loads from the battery through the inverter.

![Dornbirn-Inverter KACO Blue Planet PVI 1501i-TY-RS232-485-04ASD](/images/info/rv-converter-vs-inverter-vs-inverter-charger-1.webp)

Advantages:

- **Seamless transition.** Lights and electronics stay on when shore power drops or a generator stops.
- **One box.** Less wiring and space than separate units.
- **Better charging.** Many inverter-chargers have advanced charge profiles, including lithium modes and adjustable settings.
- **Generator support.** Some can combine generator and battery power to run large loads, called power assist.
- **Remote monitoring.** Many include displays or apps.

Disadvantages:

- **Cost.** More than a separate converter and inverter in some cases.
- **Single point of failure.** If it fails, you lose both functions.
- **Complexity.** Installation requires care, since the unit becomes the hub of the AC system.

Inverter-chargers also affect which circuits are powered by the inverter. A typical RV has an AC distribution panel with many circuits, including the air conditioner and the water heater, which are too large for a typical inverter. The usual solution is to wire a subpanel of selected circuits (outlets, TV, fridge, microwave) to the inverter, and leave the heavy loads on shore power only. A smaller 30 amp inverter-charger makes sense for travel trailers, as in the [best 30 amp RV inverter chargers](/power-electrical/best-30-amp-rv-inverter-charger).

## Side-by-side comparison

| Factor | Converter | Inverter | Inverter-charger |
|---|---|---|---|
| Main job | AC to DC, charges battery | DC to AC | Both, plus transfer switch |
| Works without shore power | No | Yes | Yes (as inverter) |
| Charges the battery | Yes | No | Yes |
| Powers outlets from the battery | No | Yes | Yes |
| Typical RV default | Yes | Optional | Optional |
| Cost | Low | Medium | Medium to high |
| Complexity | Low | Medium | High |
| Best for | Camping on hookups | Boondocking with a separate charger | Boondocking and hookups, with seamless transfer |

## How the pieces fit together

Imagine your RV as a small house with two electrical circuits.

1. **On shore power,** the pedestal feeds the main AC panel, which powers the outlets and the air conditioner. The converter takes some of that AC and produces 12 V DC for the lights and charges the battery.
2. **On battery only,** the house battery feeds the 12 V loads directly. With an inverter installed, the battery also feeds the outlets through the inverter.
3. **With an inverter-charger,** the inverter-charger sits between shore power and the AC panel (or subpanel). On shore power, it passes the AC through and charges the battery. On battery, it inverts DC to AC for the circuits it feeds.

Protection matters on the shore side. A surge protector or an energy management system at the pedestal guards all of these devices, as described in [how to choose an RV surge protector](/power-electrical/how-to-choose-an-rv-surge-protector). Charging from solar adds another source, and the controller that manages it is covered in [MPPT versus PWM charge controller sizing](/power-electrical/mppt-vs-pwm-charge-controller-sizing).

## Sizing the inverter

Size an inverter by the loads you want to run and by your battery.

![Inverter ATEN ALU Version 1-Suspension device AT-ALU- -1-05ASD](/images/info/rv-converter-vs-inverter-vs-inverter-charger-2.webp)

1. **List the AC loads** you want to run at the same time, with their running watts.
2. **Identify the largest startup surge,** such as a microwave or a fridge compressor.
3. **Choose an inverter** whose continuous rating exceeds the total, with a surge rating above the largest start.
4. **Check the battery.** The DC current is roughly watts divided by 10 at 12 V, with losses. A 2,000 W load draws about 170 A, which requires heavy cable and a battery capable of that output. A lithium battery handles it better than lead-acid.
5. **Consider higher voltage.** At 24 V, the current halves, and large systems often use 24 V or 48 V.

| Load | Running watts | Daily use | Daily Wh |
|---|---|---|---|
| Laptop | 60 | 4 hours | 240 |
| TV and streaming device | 80 | 3 hours | 240 |
| Microwave (1,000 W) | 1,400 | 10 minutes | 230 |
| Coffee maker | 800 | 15 minutes | 200 |
| Residential refrigerator | 100 to 150 average, surge 600 to 1,000 | 24 hours | 1,200 to 1,800 |
| Phone and tablet chargers | 30 | 3 hours | 90 |
| Total (fridge included) | | | 2,200 to 2,800 |

A residential refrigerator is the biggest daily AC load for many RVers, and it explains why some rigs need larger batteries and inverters. The [best RV inverters for residential refrigerators](/power-electrical/best-rv-inverter-for-residential-refrigerator) and the [best RV inverters for refrigerators](/power-electrical/best-rv-inverter-for-refrigerator) are chosen with that load in mind.

## Which setup for which rig

| Rig or style | Suggested setup |
|---|---|
| Weekender on hookups | Converter only, good surge protection |
| Travel trailer, occasional boondocking | Converter plus a 1,000 to 2,000 W inverter on a subpanel, or a 30 A inverter-charger |
| Fifth wheel with residential fridge | 2,000 to 3,000 W inverter-charger and a lithium battery bank |
| Motorhome with generator | Inverter-charger with generator support |
| Full-time boondocker with solar | Large inverter-charger, lithium batteries, MPPT solar |
| Budget upgrade | Standalone inverter wired to selected outlets, keep the converter |

For specific rigs, see the [best RV inverters for travel trailers](/power-electrical/best-rv-inverter-for-travel-trailer), the [best RV inverters for fifth wheels](/power-electrical/best-rv-inverter-for-fifth-wheel) and the [best RV inverters for motorhomes](/power-electrical/best-rv-inverter-for-motorhome). For off-grid use, check the [best RV inverters for boondocking](/power-electrical/best-rv-inverter-for-boondocking), and for solar-equipped rigs, the [best RV inverters for solar](/power-electrical/best-rv-inverter-for-solar).

## A worked example: a travel trailer going off grid

An owner of a 28 foot travel trailer with a 55 A converter and a single lead-acid battery wants to run a laptop, a TV, a coffee maker and the microwave while boondocking for three nights. Today, the outlets work only on shore power, and the lights run from the battery.

**Step one, the loads.** The laptop and TV use about 480 Wh a day, the coffee maker 200 Wh, the microwave 230 Wh and phone chargers 90 Wh, for roughly 1,000 Wh. Add 15 percent for inverter losses and idle draw, and the daily AC need is about 1,150 Wh, or about 96 Ah at 12 V. A lead-acid battery should only be discharged to about half, so one 100 Ah battery would be flat after a day. The owner moves to two 100 Ah lithium batteries, which provide about 2,000 Wh of usable energy.

**Step two, the inverter.** The microwave sets the peak at about 1,400 W, so a 2,000 W pure sine inverter fits. At 12 V the full microwave draw is roughly 140 A, so the owner uses 2/0 cable, a 250 A fuse near the battery and a short run. A separate subpanel feeds the outlets, and the air conditioner and water heater stay on shore power only.

**Step three, the charger.** The old converter charges lead-acid at a fixed profile and is not suited to lithium, so the owner either replaces it with a lithium-capable converter or chooses an inverter-charger that has a lithium setting and handles the transfer switch. With an inverter-charger, a generator or shore power charges the batteries, and the unit switches to battery power the moment the source disappears.

**Step four, the extras.** Solar panels through an MPPT controller refill the batteries during the day, and a surge protector at the pedestal guards the whole system on hookups. The result is outlets that work anywhere, a battery charged by three sources and no need to run a generator for coffee. The cost is considerable, which is why a standalone inverter on a subpanel is a sensible first step for light users.

## Choosing between replacing and adding

If your converter works and your batteries are lead-acid, adding a standalone inverter on a subpanel is the least disruptive path. If you are moving to lithium, plan to replace or reconfigure the charger at the same time, because the two decisions are linked. If you are building a system for full-time boondocking, an inverter-charger with generator support and solar input gives the most flexibility, and the money is better spent there than on a series of partial fixes. In every case, size the battery before the inverter, since the battery decides how long the inverter can run, and write down the loads you actually use so that you buy for real needs.

![Meltec car power inverter SIV-300.](/images/info/rv-converter-vs-inverter-vs-inverter-charger-3.webp)

## Maintenance and what to watch

Check the converter's fan and vents each season, since dust and a blocked vent make it run hot and shorten its life. Listen for a fan that runs constantly, which can mean a failing battery or an overloaded DC circuit. Inspect battery terminals and cable lugs for corrosion or heat marks, and retorque them to the manufacturer's value. For an inverter-charger, test the transfer switch by unplugging shore power with a light on and confirming that the lights stay lit. Review the charge settings after any battery change, because a wrong profile quietly ruins a battery over months.

## Installation and safety

Inverters and inverter-chargers carry high currents, and installation errors cause fires.

- **Use correctly sized cable.** Follow the manual for gauge and length, and keep runs short.
- **Fuse the battery connection** with a fuse close to the battery, rated for the inverter's maximum current.
- **Ventilate the unit.** Inverters produce heat and need airflow.
- **Mount it securely** on a non-flammable surface, away from moisture.
- **Use proper connectors** and torque terminals to specification.
- **Keep AC and DC wiring separate** and properly labeled.
- **Do not backfeed.** An inverter-charger must be wired with the correct transfer arrangement, so that it never feeds AC back to shore power or the generator.
- **Consider professional help** for complex installations or if you are unsure.

## Common mistakes to avoid

- **Expecting a converter to run outlets off the battery.** It does not.
- **Wiring the whole panel to a small inverter.** Air conditioners and water heaters overload it.
- **Using a modified sine inverter for sensitive devices.** Choose pure sine.
- **Ignoring battery capacity.** A big inverter needs a big battery.
- **Skipping the fuse.** A short at 12 V is dangerous.
- **Using a lead-acid charge profile on lithium.** It can shorten battery life or fail to charge.
- **Underestimating idle draw.** An inverter left on drains the battery.
- **Overlooking surge protection.** Protect the whole system at the pedestal.

## Frequently asked questions

### Do I need an inverter if I only camp with hookups?
No. A converter handles the DC system on shore power, and the outlets run directly from the pedestal. An inverter becomes useful when you want AC power without shore power or a generator.

### Can I replace my converter with an inverter-charger?
In many RVs, yes. The inverter-charger provides the battery charging that the converter did, and it feeds the AC system. The DC loads need a separate DC supply from the battery, and wiring depends on the RV, so follow the manufacturer's guidance and consider professional installation.

### Is a pure sine inverter necessary in an RV?
For sensitive electronics, CPAP machines, motors and many appliances, yes. A pure sine inverter is the safe default and costs only a bit more than a modified sine unit.

### How big an inverter do I need for a microwave?
A 1,000 W microwave draws about 1,400 W from the outlet. A 2,000 W inverter handles it, and the battery must supply about 140 A at 12 V for the duration. Short use is fine, but the battery and cables must be adequate.

### Can an inverter run my air conditioner?
Most RV air conditioners draw 1,300 to 1,800 W with a high startup surge, which needs a 3,000 W or larger inverter, a large battery bank and often a soft-start device. Even then, runtime is short without a large battery, so many RVers use a generator or shore power.

### What happens to the converter when I install an inverter-charger?
It may be removed, bypassed or left in place, depending on how you wire the system. Two chargers feeding one battery can conflict, so only one should charge at a time. Follow the manufacturers' instructions.

## Sources & further reading
- [RV Travel: RV electricity and surge protector types](https://www.rvtravel.com/rv-electricity-surge-protector-types/)
- [Renogy: Solar charge controller sizing and how to choose one](https://www.renogy.com/blog/solar-charge-controller-sizing-and-how-to-choose-one-/)
- [Battery University: How to prolong lithium-based batteries](https://batteryuniversity.com/article/bu-808-how-to-prolong-lithium-based-batteries)

## Image credits
- "Dornbirn-Inverter KACO Blue Planet PVI 1501i-TY-RS232-485-04ASD" by Asurnipal, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Dornbirn-Inverter_KACO_Blue_Planet_PVI_1501i-TY-RS232-485-04ASD.jpg).
- "Inverter ATEN ALU 4600TL Version 1-Suspension device AT-ALU-4600TL-1-05ASD" by Asurnipal, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Inverter_ATEN_ALU_4600TL_Version_1-Suspension_device_AT-ALU-4600TL-1-05ASD.jpg).
- "Meltec car power inverter SIV-300" by photo: Qurren (talk) Taken with Canon PowerShot G9 X, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Meltec_car_power_inverter_SIV-300.jpg).
