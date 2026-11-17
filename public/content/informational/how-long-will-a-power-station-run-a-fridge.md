# How Long Will a Portable Power Station Run a 12V Fridge?

A typical 12 V compressor fridge uses about 250 to 500 Wh per day, so a 500 Wh power station runs one for roughly one to two days, and a 1,000 Wh unit for two to three. The exact answer depends on the fridge size, the outside temperature, how often you open the lid, and whether you power it through the DC port or through the AC inverter. A thermoelectric cooler is a different animal and can drain the same battery in half a day.

Food safety is the reason to get this right. A fridge that quietly stops at 3 a.m. on a warm night does not announce it, and the first sign is soft butter or warm chicken. The sections below show how to estimate a daily watt-hour figure from the fridge's own specs, how to adjust for heat, and how to pair the battery with solar so a long weekend turns into an indefinite one.

## Start with the fridge, not the battery

Compressor fridges list a running wattage, often 40 to 60 W for a 40 to 50 quart unit, and sometimes an "average" amp draw such as 0.8 to 1.5 A at 12 V. The fridge only draws that power while the compressor runs. Once it hits its set temperature, the compressor shuts off and the draw drops to near zero until the temperature drifts back up. The fraction of time the compressor is on is the duty cycle.

So the daily energy is: running watts x 24 hours x duty cycle. For a 45 W fridge with a 35 percent duty cycle, that is 45 x 24 x 0.35 = 378 Wh. In a hot car in July, the duty cycle can double, and the same fridge uses 700 Wh or more. In cool shade at 60 degrees F, it might drop to 20 percent, around 215 Wh.

Some fridges publish a figure in amp-hours per hour at a set ambient temperature, such as "0.6 Ah/hour at 77 degrees F (25 C)". Multiply by 12 for watts and by 24 for the daily watt-hours: 0.6 x 12 x 24 is about 173 Wh in mild weather. Treat manufacturer numbers as best-case, measured with a closed lid and a pre-chilled load.

## The duty cycle table

| Conditions | Typical duty cycle | 45 W fridge, Wh per day |
|---|---|---|
| Shaded, 60 F, rarely opened | 20 to 25 percent | 215 to 270 |
| Warm, 77 F, normal opening | 30 to 40 percent | 325 to 430 |
| Hot, 90 F, in a parked car or tent | 50 to 60 percent | 540 to 650 |
| Freezer setting (0 F), 77 F ambient | 55 to 70 percent | 600 to 760 |
| Pre-chilled load, lid shut, shaded | Under 20 percent | Under 215 |

These are planning ranges that match the physics of compressor cooling, not lab results. Your own fridge will sit somewhere inside them, and after one trip with a plug-in watt meter you will know exactly where.

![A Goal Zero Yeti 1400 lithium power station displaying its ports and a connected laptop](/images/info/how-long-will-a-power-station-run-a-fridge-1.webp)

## DC port versus AC outlet

Every power station stores energy in DC, and every fridge compressor in a 12 V fridge uses DC. If you run it from the station's 12 V car-style socket, the energy goes from battery to fridge with only small losses, typically a few percent. If you instead plug the fridge's AC adapter into the AC outlet, the energy takes a round trip: battery DC to inverter AC, then the fridge's adapter back down to DC. Each conversion costs efficiency, and the inverter also draws a standing load of roughly 10 to 25 W with nothing plugged in. With a fridge that uses an average of 16 W, a 20 W inverter idle draw doubles the real consumption.

The practical rule is simple. Use the DC port. If the station only has USB-C and AC, the fridge may need an adapter, and the efficiency penalty is a reason to prefer a station with a proper 12 V output rated for at least 8 to 10 A. A few stations also have an eco mode that turns the inverter off when the load is small, which can help but can also cause cycling problems with a compressor. If you want to understand what an inverter does and why waveform matters for a refrigerator, read [pure sine wave versus modified sine wave inverters](/camp-power/pure-sine-wave-vs-modified-sine-wave-inverter).

## Runtime math, step by step

1. **Find the usable capacity.** Multiply the label Wh by 0.85 for DC use, or 0.75 to 0.8 for AC use. A "1,000 Wh" station gives roughly 850 Wh on DC.
2. **Estimate the daily draw.** Use the table above or your own measurement.
3. **Divide.** 850 Wh usable at 380 Wh a day is 2.2 days.
4. **Add a safety margin.** Keep 15 to 20 percent in reserve, because many stations cut off at low state of charge and because cold weather reduces capacity.

| Station label (Wh) | Usable on DC (approx.) | Days at 250 Wh/day | Days at 400 Wh/day | Days at 650 Wh/day |
|---|---|---|---|---|
| 300 | 255 | 1.0 | 0.6 | 0.4 |
| 500 | 425 | 1.7 | 1.1 | 0.65 |
| 1,000 | 850 | 3.4 | 2.1 | 1.3 |
| 2,000 | 1,700 | 6.8 | 4.3 | 2.6 |

If you want the broader story on why these ratings differ between a power bank and a station, see our explainer on [watt-hours versus mAh](/camp-power/watt-hours-vs-mah-explained).

## Which fridges use more, and why

**Size and insulation.** A 25 quart fridge may use a third less than a 50 quart one. Thick walls, a tight gasket and a top-opening design all lower the duty cycle, because cold air does not spill out when you open the lid, the way it does from a front-opening door.

**Compressor type.** Variable-speed compressors with an adjustable "battery protection" level tend to sip power. Fixed-speed compressors cycle fully on or off, which means more startup surges.

**Dual-zone units.** A fridge and freezer in one body can use as much as two separate machines. The freezer zone dominates the energy bill.

**Thermoelectric coolers.** These cool by a Peltier plate, typically draw 40 to 60 W continuously while running, and only cool to about 30 to 40 degrees F below ambient. In a warm environment they run nonstop, which is 960 to 1,440 Wh per day. They are rarely compatible with a small battery for more than a night.

**Absorption fridges** in RVs use propane or electric heating and are a different topic. Do not run a 120 V absorption fridge off a small portable power station, since the heating element draws several hundred watts.

## Startup surge and why the output rating matters

A compressor draws a short surge when it starts, often two to five times its running current for a fraction of a second. A fridge that runs at 45 W may pull 150 to 250 W for an instant. A station with a 300 W AC rating usually handles it. A 100 W "emergency" unit may trip. On the DC port, the surge is usually within the limits of the fuse or the port rating (commonly 10 A, or about 120 W), but check this on cheaper units.

Voltage drop is another hidden problem. A long, thin 12 V cable between a station and a fridge loses voltage under load, and many fridges have a built-in low-voltage cutoff to protect a car battery. If your fridge shuts off at 11.5 V and the cable drops half a volt, the fridge may stop even though the battery is full. Use the short, thick cable that came with the fridge, and avoid daisy-chaining adapters.

## Tricks that cut consumption by a third or more

- **Pre-chill everything at home.** Start the fridge on household power the day before and load already-cold food. The compressor spends the trip maintaining, not cooling.
- **Fill empty space.** Water bottles frozen solid act as thermal mass. A full fridge has fewer air pockets to cool each time the lid opens.
- **Shade it.** Move the fridge out of direct sun, and give it 2 to 3 inches of breathing room around the vents so the condenser can shed heat.
- **Raise the setpoint.** Food safety guidance generally calls for 40 degrees F or below. A setpoint of 37 degrees F gives the compressor a rest compared with 32 degrees F.
- **Open less.** Plan meals so you fetch everything at once.
- **Use an insulated cover.** A fitted cover, sold for many popular models, reduces heat gain in warm weather.
- **Do not freeze what you only need cold.** Each 10 degrees F of extra cooling costs a surprising share of the daily watt-hours.

## Adding solar so the fridge never runs out

A fridge that uses 400 Wh a day needs roughly 400 divided by about four effective sun hours, or 100 W of panels, in ideal midsummer conditions. With the typical 20 to 30 percent system losses, 150 to 200 W of panels is a more realistic target to keep pace while also charging a phone and lights. On shoulder seasons, cloudy days or in forest shade, double that. The method is spelled out in our guide to [sizing a solar panel for camping](/camp-power/how-to-size-a-solar-panel-for-camping), and the products that bundle a station with panels are in the [best solar generators for camping](/camp-power/best-solar-generators-for-camping).

If you only need a battery without panels, the [best portable power stations for camping](/camp-power/best-portable-power-stations-for-camping) list helps you compare capacity classes, and the [best solar generator kits for camping](/camp-power/best-solar-generator-kit-for-camping) are worth a look when you want everything in one box.

![An Anker SOLIX C300X portable power station with its handle and port panel visible](/images/info/how-long-will-a-power-station-run-a-fridge-2.webp)

## Passthrough charging and the weekend plan

Some stations can charge and discharge at the same time, called passthrough or UPS operation. That is handy at a campsite with a hookup, but frequent charge and discharge cycles at high state of charge can wear some batteries faster. A simple pattern works well for a long weekend: run the fridge off the station, charge the station from panels during the day, and let it sit near 20 to 90 percent rather than pegged at 100 percent. At night, add up the remaining watt-hours and decide before bed whether tomorrow needs a drive to top it up. If you drive daily, a car-charging path adds meaningful energy too. A 12 V socket often limits charging to around 100 to 120 W, so an hour of driving adds about 100 Wh.

## Medical gear and shared loads

Many campers need the same battery to run a CPAP overnight and a fridge by day. Combine the numbers: a CPAP at 40 W for 8 hours is 320 Wh, which can equal a full day of fridge use. If a medical device is involved, give it priority, keep the battery above a reserve, and look at [best portable power stations for CPAP camping](/camp-power/best-portable-power-station-for-cpap-camping) for options designed with that in mind. Do not rely on any battery as the sole backup for life-critical equipment without a plan for a second power source.

## Home backup comparisons

The same arithmetic applies when the fridge is at home during an outage, with one change: a household fridge runs on AC at 100 to 200 W with a startup surge up to 1,000 W or more, and it uses 1 to 2 kWh per day. That is a different class of battery, and the [best power stations for home backup](/camp-power/best-power-station-for-home-backup) are sized for it. For a camping-size 12 V fridge, a small-to-mid station is plenty.

## Measuring your own fridge in one afternoon

Published numbers are a starting point, and a cheap plug-in watt-hour meter turns the guesswork into data. For a DC fridge, an inline 12 V power meter with a shunt does the same job. The procedure takes one day and is worth doing before any trip where food matters:

1. Pre-chill the fridge on household power until it reaches its set temperature, and load it as you would for the trip.
2. Put the meter between the power source and the fridge, and reset it to zero.
3. Leave the fridge alone for 24 hours in conditions that resemble camp, such as a garage or a shaded porch at similar temperature.
4. Read the accumulated watt-hours. That number is your daily baseline.
5. Repeat once with the lid opened five or six times to see how much your habits add.

Most owners are surprised twice: once by how low the closed-lid figure is, and once by how much a few minutes of open lid costs on a hot day. If you find the real figure is 30 percent lower than the table above, you can safely choose a smaller battery. If it is higher, you now know to buy the next capacity class instead of discovering the shortfall at a remote campsite.

## Sizing the battery against your trip length

Think of the battery as the buffer between sunny days. Without solar, divide usable watt-hours by your daily draw, and that is the number of days of cold food. With solar, the battery only needs to carry you through the night and any cloudy stretch. A common planning pattern is to size for one full day of fridge use without any charging, then add panels to refill it each day. That gives a cushion for a missed charging day without paying for a battery big enough to cover three days of overcast.

For example, a couple on a four-night trip with a 40 quart fridge at 350 Wh a day, plus 100 Wh a day for lights, phones and a fan, needs about 450 Wh daily. A 1,000 Wh station gives them about two days off the grid. Adding 200 W of panels that produce 600 to 700 Wh on a good summer day lets them hold a steady state, so the station stays near full. Without panels, they would need either a 2,000 Wh station or a drive to recharge from the car on day two.

## Warning signs that the battery is the wrong size

- The station shows a full battery in the morning and under 30 percent by mid afternoon with the fridge as the only load.
- The fridge turns off while the station still shows charge, which usually points to low-voltage cutoff or surge issues.
- The station's fan runs constantly, which suggests the inverter is carrying a load it should not be, or that ambient heat is high.
- You find yourself disabling the fridge at night to save power. That is a food-safety risk, so upsize the battery or add panels instead.

## Common mistakes to avoid

- **Plugging the fridge into the AC outlet when a DC port exists.** You lose 15 to 25 percent to the inverter and its idle draw.
- **Trusting the "runs for 40 hours" claim.** It is usually based on the lowest-draw conditions, a closed lid, and cool weather.
- **Starting with a warm fridge on battery.** Cooling 30 quarts of room-temperature food can use a third of a day's budget in an hour.
- **Ignoring the low-voltage cutoff.** A fridge that stops at 11 V while the station still shows 30 percent has a voltage drop problem, not a battery problem.
- **Letting the vents get blocked.** A blocked condenser can raise the duty cycle by tens of percent.
- **Ignoring cold-weather capacity loss.** Lithium batteries deliver less at freezing temperatures, and many refuse to charge below 32 degrees F.

## Frequently asked questions

### Can a 300 Wh power station run a fridge overnight?
Yes, with the right setup. A 40 to 50 quart compressor fridge in mild weather uses about 250 Wh a day on DC, so a 300 Wh station covers one night and a day, roughly 24 hours. It will not last two days without recharging, and an AC connection could shorten that to 18 hours or less.

### Is it better to use a 12 V fridge or a small household mini fridge on a power station?
The 12 V compressor fridge is usually better. It is designed for DC, handles low voltage, and typically uses 30 to 50 percent less energy than a household mini fridge, which often has a less efficient compressor and needs the inverter.

### Will a fridge run in a tent on a hot day?
It will run, but it will work harder. Enclosed, sun-heated spaces can reach 100 degrees F or more, which pushes duty cycle toward 60 percent. Keep the fridge in shade, with airflow, and expect to double the daily watt-hours.

### How many solar panel watts do I need to keep a fridge running indefinitely?
For a fridge using 300 to 400 Wh a day, plan on 150 to 200 W of panels in summer with decent sun, more in winter or shade. Place panels in the sun, not the fridge's shade, and angle them toward the sun for best yield.

### Does the battery chemistry matter for fridge use?
It does, indirectly. LiFePO4 stations tolerate deeper and more frequent discharge cycles and hold up better over years of daily fridge duty, while standard lithium-ion cells fade faster. For occasional weekend trips, either works. For full-time or weekly use, lean toward LiFePO4.

### Can I run a fridge and a freezer on the same station?
You can if the combined demand fits. Add both daily watt-hours, check that the output and surge ratings handle both compressors starting at once, and consider staggering startup. For a dual-zone fridge, assume the higher end of the duty cycle table.

## Sources & further reading
- [Anker: Wh to mAh conversion and capacity basics](https://anker.com/blogs/others/wh-to-mah)
- [Renogy: mAh to Wh conversion guide](https://www.renogy.com/blogs/buyers-guide/mah-to-wh-conversion-guide)

## Image credits
- "Goal Zero Yeti 1400 Lithium Portable Power Station with WiFi Battery P" by Tony Webster from Minneapolis, Minnesota, United States, [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Goal_Zero_Yeti_1400_Lithium_Portable_Power_Station_with_WiFi_Battery_Pack_with_MacBook_Pro_-_USB-C_Power_Delivery_Specification_(PD_spec)_(43467687445).jpg).
- "Anker SOLIX C300X Portable Power Station" by TaurusEmerald, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Anker_SOLIX_C300X_Portable_Power_Station.jpg).
