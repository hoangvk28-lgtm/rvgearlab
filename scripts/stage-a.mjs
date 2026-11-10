// Stage A of the best-guide pipeline (zero LLM tokens).
// Usage: node scripts/stage-a.mjs <slugs-file "Cluster|slug" per line> <out-dir> [--fresh]
// For each slug: builds queries from the slug, searches Amazon (cached), filters off-topic/mismatched numbers,
// picks 6 diverse priced products not used anywhere else, and writes <out-dir>/<slug>.json containing a compact
// fact sheet + the slug's content-gap entry, so the writer only has to read ONE small file.
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from "fs";
import { resolve } from "path";

const [slugsFile, outDir] = process.argv.slice(2);
mkdirSync(outDir, { recursive: true });
const GAP = process.env.GAP || "Guide Best Plan/HardcastlesRV-P2-P3-Content-Gap.md";
const TMP = process.env.RV_TMP || (process.env.TEMP || "/tmp") + "/claude/rv";
for (const l of readFileSync(".env.local", "utf8").split("\n")) { const i = l.indexOf("="); if (i > 0 && !process.env[l.slice(0, i)]) process.env[l.slice(0, i)] = l.slice(i + 1).trim(); }
const M = "www.amazon.com", TAG = process.env.AMAZON_PAAPI_PARTNER_TAG;
const tok = (await (await fetch("https://api.amazon.com/auth/o2/token", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ grant_type: "client_credentials", client_id: process.env.AMAZON_PAAPI_ACCESS_KEY, client_secret: process.env.AMAZON_PAAPI_SECRET_KEY, scope: "creatorsapi::default" }) })).json()).access_token;
if (!tok) { console.error("token failed"); process.exit(1); }

const CL = {
  "RV Mattresses": { q: (k) => [k, k.replace(/^best /,"") + " memory foam", k.replace(/rv |camper /g,"") + " RV camper", k.replace(/^best /,"") + " short queen"], must: /mattress/i, ban: /topper|protector|cover only|sheet|pillow|frame|air pump|crib/i, req: [[/72x75/, /72 ?(x|"|in)? ?x ?75|72x75|72" x 75/i], [/72x80/, /72 ?x ?80|72x80|king/i], [/60x75/, /60 ?x ?75|60x75|short queen/i], [/42x80/, /42 ?x ?80|42x80|bunk/i], [/corner-cut/, /corner|cut/i], [/folding/, /fold/i], [/hinged/, /hinge|fold/i], [/full-mattress/, /full|54/i], [/in-a-box/, /box|roll/i], [/fiberglass-free/, /fiberglass.?free|no fiberglass/i], [/split-king/, /split/i]] },
  "RV Mattress Toppers": { q: (k) => [k, k.replace(/^best /,"") + " memory foam", k.replace("rv ","") + " short queen RV"], must: /topper|pad/i, ban: /mattress protector only|sheet|pillow|crib|bed frame/i, req: [[/firm/, /firm/i], [/soft/, /soft|plush/i], [/full/, /full|54/i], [/three-quarter/, /3\/4|three.?quarter|48/i], [/fiberglass-free/, /fiberglass.?free|no fiberglass/i]] },
  "Camping Chairs": { q: (k) => [k, k.replace(/^best /,"") + " folding outdoor", k.replace(/camping /,"camp ") + " heavy duty"], must: /chair|stool|seat/i, ban: /cushion only|cover only|replacement|kids|toddler|office|gaming|massage/i, req: [[/400-lb/, /400|450|500|600/i], [/600-lb/, /600|650|700|800/i], [/lumbar/, /lumbar|back support/i], [/hammock/, /hammock/i], [/mesh/, /mesh/i], [/padded/, /pad|cushion/i], [/swivel/, /swivel/i], [/tripod/, /tripod|stool/i]] },
  "Zero Gravity Camping Chairs": { q: (k) => [k, k.replace(/^best /,"") + " recliner patio", k.replace(/^best /,"") + " oversized"], must: /zero gravity|recliner|lounge/i, ban: /cushion only|cover only|replacement|massage|office/i, req: [[/extra-wide/, /wide|oversize|xl|large/i], [/locking/, /lock/i], [/lumbar/, /lumbar|pillow|headrest/i]] },
  "Electronic RV Levelers": { q: (k) => [k, k.replace(/^best /,"") + " camper trailer", "rv leveling system trailer", "drive on rv leveler curved"], must: /level/i, ban: /bubble only|sticker|tongue jack only|wheel chock only|stabilizer pad/i, req: [[/drive-on/, /drive.?on|curved|ramp|andersen/i], [/electric/, /electric|motor|auto/i], [/manual/, /manual|crank|block|ramp/i], [/hydraulic/, /hydraulic/i], [/triple-axle/, /triple|tandem|stack|block/i], [/uneven/, /ramp|stack|block|curved|drive/i]] },
  "RV Leveling Blocks": { q: (k) => [k, "rv leveling blocks stackable", k.replace(/^best /,"") + " camper"], must: /level|block|ramp/i, ban: /bubble only|sticker|jack pad only/i, req: [[/triple-axle/, /\d{2} ?pack|10 pack|stack|block/i], [/rubber/, /rubber/i], [/storage-bag/, /bag|case|carry/i]] },
  "RV Wheel Chocks": { q: (k) => [k, "rv wheel chocks heavy duty", k.replace(/^best /,"") + " trailer"], must: /chock|stabiliz|wheel lock/i, ban: /tire cover|lug|wheel cover|bike/i, req: [[/camper-van/, /rubber|chock/i], [/aluminum/, /alumin/i], [/folding/, /fold/i], [/motorhome/, /heavy|rubber|large/i], [/single-axle/, /single|chock/i], [/soft-ground/, /wide|base|large|heavy/i], [/steep/, /heavy|large|rubber|grip/i]] },
  "RV Covers": { q: (k) => [k, k.replace(/^best /,"") + " class a motorhome", k.replace(/^best /,"") + " waterproof breathable"], must: /cover/i, ban: /tire cover|wheel cover|propane|ac cover|vent cover|seat cover|grill|steering|mattress|tongue jack/i, req: [[/40-foot/, /40|37.?40|41/i], [/olefin/, /olefin|polypropylene/i], [/tyvek/, /tyvek/i], [/easy-to-install/, /zipper|easy|strap|panel/i], [/polyester/, /polyester/i], [/coastal/, /uv|breath|water/i], [/hot-climate/, /uv|reflect|sun/i]] },
  "Travel Trailer Covers": { q: (k) => [k, k.replace(/^best /,"") + " waterproof", "travel trailer cover breathable"], must: /cover/i, ban: /tire cover|propane|ac cover|vent cover|seat cover|tongue jack/i, req: [[/18-foot/, /18|15.?18|16.?18/i], [/38-foot/, /38|35.?38|37.?40/i], [/40-foot/, /40|37.?40|38.?40/i]] },
  "RV Vent Fans": { q: (k) => [k, k.replace(/^best /,"") + " 14x14 roof", "rv roof vent fan 14 inch", "Maxxair fan"], must: /fan|vent/i, ban: /cover only|screen only|motor only|lid only|gasket|sealant|filter only/i, req: [[/brushless/, /brushless|bldc|quiet/i], [/refrigerator/, /fridge|refrigerator/i], [/from-inside/, /inside|interior|no roof/i], [/led/, /led|light/i], [/10-speed/, /10.?speed|10 speeds/i], [/3-speed/, /3.?speed|three/i], [/low-amp/, /low|amp|efficien|brushless/i], [/range-hood/, /range|hood|kitchen/i]] },
  "RV Vent Covers": { q: (k) => [k, k.replace(/^best /,"") + " camper", "rv roof vent cover 14 inch"], must: /cover|vent|screen/i, ban: /fan only|tire|propane tank|seat|wheel/i, req: [[/metal/, /metal|steel|alumin/i], [/furnace/, /furnace/i], [/range-hood/, /range|hood|exhaust/i], [/refrigerator/, /fridge|refrigerator/i], [/hail/, /hail|impact|polycarb|metal/i], [/insect/, /insect|bug|screen|mesh/i]] },
  "RV Routers": { q: (k) => [k, k.replace(/^best /,"") + " 5G LTE", "rv cellular router dual sim", "travel router GL.iNet"], must: /router|hotspot|gateway/i, ban: /antenna only|cable only|mount only|switch only|modem only|mesh satellite node/i, req: [[/esim/, /esim|e-sim/i], [/openwrt/, /openwrt|gl.?inet/i], [/starlink/, /starlink|failover|wan/i], [/low-power/, /low power|usb|travel|mini|compact/i], [/bonding/, /bond|multi.?wan|load balanc|speedfusion/i], [/mimo/, /mimo|antenna/i], [/vpn/, /vpn|wireguard/i]] },
  "RV Cell Signal Boosters": { q: (k) => [k, "cell phone signal booster rv weboost", k.replace(/^best /,"") + " 5G"], must: /booster|amplif|repeater/i, ban: /antenna only|cable only|wifi extender|tv antenna/i, req: [[/4g-lte/, /4g|lte|5g/i], [/hotspot/, /hotspot|router|data/i], [/one-device/, /cradle|single|one device|drive reach|sleek/i]] },
  "RV Catalytic Heaters": { q: (k) => [k, "propane catalytic heater rv", "Mr Heater Buddy heater", "Wave catalytic heater"], must: /heater/i, ban: /electric|ceramic|oil filled|hose only|regulator only|thermostat only|fan only/i, req: [[/large/, /8000|12000|16000|18000|\d{5}|wave.?8|olympian/i], [/piezo/, /piezo|ignit/i], [/tip-over/, /tip.?over|tip.?switch|odin|oxygen/i]] },
  "RV Outdoor Rugs": { q: (k) => [k, k.replace(/^best /,"") + " reversible camping", "rv outdoor mat patio"], must: /rug|mat/i, ban: /door mat|bath|yoga|car mat|welcome|kitchen/i, req: [[/10x10/, /10 ?x ?10|10x10/i], [/10x20/, /10 ?x ?20|10x20/i], [/pet/, /pet|dog/i], [/quick-dry/, /quick|dry|mesh|breath/i], [/recycled/, /recycl/i], [/stakes/, /stake/i]] },
  "Inverter Generators": { q: (k) => [k, k.replace("inverter generator", "quiet inverter generator RV ready"), k.replace("inverter generator", "portable inverter generator")], must: /generator/i, ban: /adapter|cord|cover|inlet|transfer switch|lock|wheel kit|parallel kit|solar generator|power station|oil|tank/i },
  "Lithium RV Batteries": { q: (k) => [k, k.replace("lithium rv battery", "LiFePO4 battery 12V RV"), k + " LiFePO4"], must: /lifepo4|lithium/i, ban: /charger only|tester|terminal|cable|cover|monitor|isolator|switch|tray|jump starter|golf cart only/i },
  "RV Surge Protectors": { q: (k) => [k, k + " 30 amp", k + " 50 amp"], must: /surge|protector|ems|watchdog/i, ban: /cord only|extension cord|power strip|adapter only|dogbone/i },
  "RV Battery Monitors": { q: (k) => [k, k.replace("battery monitor", "battery monitor shunt"), k.replace("battery monitor", "battery monitor bluetooth")], must: /monitor|shunt|meter/i, ban: /tire|camera|car alarm|blood|heart/i },
  "RV Converters": { q: (k) => [k, k + " 12V deck mount", k.replace(/converter/, "converter charger lithium")], must: /convert|charger|power center|power supply/i, ban: /adapter|cable|fuse|breaker|inverter|extension|cover|panel|solar|generator|wire|plug/i },
  "RV Solar": { q: (k) => [k, k + " kit with charge controller", k + " monocrystalline 12V"], must: /solar|panel|pv/i, ban: /bracket|mount(?!ed)|connector|extension|cable|light|lamp|fan|battery charger only|cleaner|cover/i },
  "RV Generators": { q: (k) => [k, k.replace("rv generator", "inverter generator rv ready"), k + " 30 amp quiet", k.replace("rv generator","portable generator"), k.replace(/for (\d+) amp rv/, "generator $1 amp RV outlet").replace("best ",""), k.replace("rv generator","dual fuel generator")], must: /generator/i, ban: /adapter|cord|cover|inlet|transfer switch|tent|kit only|lock|wheel kit|parallel kit|solar generator|power station|oil|tank/i },
  "Portable Power Stations": { q: (k) => [k, k.replace("portable power station", "power station LiFePO4"), k.replace("portable power station", "solar generator"), k.replace("portable power station","power station LiFePO4 camping"), k.replace("portable power station","battery generator")], must: /power station|solar generator|portable power|powerhouse/i, ban: /air conditioner|\bAC unit|cable|cover|panel only|adapter|bag|case|expansion|accessory/i },
  "RV Batteries": { q: (k) => [k, k + " 12V", k.replace("rv battery", "battery for RV camper")], must: /batter/i, ban: /charger only|tester|terminal|cable|box|cover|monitor|isolator|switch|tray|jump starter/i },
  "RV Water Pressure Regulators": { q: (k) => [k, k.replace("rv water pressure regulator", "water pressure regulator RV brass lead free"), k.replace("rv water pressure regulator", "RV water pressure regulator with gauge adjustable"), k.replace("rv water pressure regulator", "camper water pressure reducer valve"), k + " 3/4 inch garden hose"], must: /regulat|reducer|pressure valve/i, ban: /filter cartridge only|hose only|gauge only|pump|softener|replacement filter|tank|drip|irrigation|sprinkler/i, req: [[/adjustable/, /adjust/i], [/gauge/, /gauge/i], [/lead-free/, /lead.?free/i], [/fixed/, /^(?!.*adjust)/i], [/high-flow/, /hi(gh)?.?flow/i], [/filter/, /filter/i], [/city-water-inlet/, /inlet/i]] },
  "RV Water Filters": { q: (k) => [k, k.replace("rv water filter", "RV water filter system canister"), k + " camper", k.replace(/rv |for rv/g, "") + " RV", ...(/4-stage|reverse-osmosis|portable/.test(k.replace(/ /g, "-")) ? [k.replace("rv ", "") + " system", k.replace("rv ", "RV camper ") + " canister housing", k + " travel"] : [])], must: /filter|purif|reverse osmosis/i, ban: /refill|replacement|filter set|shower|whole house|cartridges? \d+ ?pack|pitcher|fridge|refrigerator|shower ?head|aerator|straw|bottle|pool|aquarium|air filter|fuel|wrench only|replacement cartridges? only|faucet filter/i, req: [[/2-stage/, /2.?stage|two.?stage|dual/i], [/3-stage/, /3.?stage|three.?stage/i], [/4-stage/, /4.?stage|four.?stage/i], [/uv-/, /\buv\b|ultraviolet/i], [/inline/, /in.?line|hose/i], [/under-sink/, /under.?sink|undersink/i], [/canister/, /canister|housing|10"|10 inch|big blue/i], [/pressure-regulator/, /regulat/i], [/with-pump/, /pump/i], [/with-stand/, /stand|bracket|mount/i], [/reverse-osmosis/, /reverse osmosis|\bRO\b/i], [/garden-hose/, /hose/i], [/sediment/, /sediment/i], [/high-flow/, /flow/i], [/portable/, /portable/i], [/system/, /system|stage|canister|housing/i]] },
  "Trailer Brake Controllers": { q: (k) => [k, k.replace("trailer brake controller", "electric brake controller trailer"), k + " Tekonsha CURT", k.replace("trailer brake controller", "brake control wiring harness"), ...(/hydraulic/.test(k) ? ["electric over hydraulic brake controller Prodigy", "EOH trailer brake controller actuator compatible", "brake controller electric hydraulic mode"] : []), ...(/compact/.test(k) ? ["small trailer brake controller under dash", "mini electric brake controller"] : [])], must: /brake control/i, ban: /brake (pad|shoe|rotor|caliper|drum|assembly|magnet)|actuator|breakaway kit only|tester|tail ?light|led light/i, req: [[/wireless/, /wireless|bluetooth|\bapp\b/i], [/bluetooth/, /bluetooth|\bapp\b|wireless/i], [/proportional/, /proportional|inertia/i], [/time-delayed/, /time.?delay|time.?based|primus|voyager/i], [/7-pin/, /7.?(pin|way|blade)/i], [/knob/, /knob|dial|rotary/i], [/-kit/, /kit|harness|wiring/i], [/ford-f150/, /ford|f.?150/i], [/silverado/, /chevy|chevrolet|silverado|gm\b/i], [/ram-1500/, /\bram\b|dodge/i], [/jeep/, /jeep|gladiator/i], [/frontier/, /nissan|frontier/i], [/tacoma/, /toyota|tacoma/i], [/tundra/, /toyota|tundra/i], [/tesla/, /wireless|bluetooth|\bapp\b|tesla/i], [/qx80/, /infiniti|qx80|nissan/i], [/oem-style/, /oem|integrated|dash|in.?dash/i], [/compact/, /compact|mini|small|slim/i], [/1-to-4-axles/, /1.?(to|-).?4 axle|4 axle|1-4/i]] },
  "Sway Control Hitches": { q: (k) => [k, k.replace("sway control hitch", "weight distribution hitch with sway control"), k + " trailer", k.replace("sway control hitch", "friction sway control bar kit"), ...(/2 5 inch|class 5/.test(k) ? ["weight distribution hitch 2-1/2 inch shank sway control", "2.5 inch receiver weight distribution hitch", "heavy duty weight distribution hitch 2-1/2 shank 15000 lb"] : []), ...(/without weight/.test(k) ? ["friction sway control kit trailer", "trailer sway control bar", "anti sway bar trailer friction"] : [])], must: /sway|weight distribut/i, ban: /hitch pin|hitch lock|receiver cover|tow strap|bike rack|cargo carrier|sway bar link|stabilizer jack|wiper/i, req: [[/4-point/, /4.?point|four.?point/i], [/friction/, /friction|sway (bar|control) (kit|unit)/i], [/dual-cam/, /dual.?cam|cam/i], [/without-weight/, /^(?!.*weight distribut)/i], [/2-5-inch/, /2.?1\/2|2\.5|2 1\/2/i], [/class-5/, /class (v|5)|class-v|2.?1\/2|2\.5/i], [/6-inch-drop/, /6.?(in\b|inch|")|6" drop/i], [/8-inch-drop/, /8.?(in\b|inch|")|8" drop/i], [/lifted/, /drop|rise|lift|adjustable/i], [/sway-bar/, /sway (bar|control)/i]] },
  "RV Electrical Management Systems": { q: (k) => [k, k.replace("rv ems", "RV surge protector EMS"), k.replace("rv ems", "electrical management system RV") , k + " Progressive Industries"], must: /surge|\bems\b|protect|watchdog|management/i, ban: /cord only|extension cord|adapter only|dogbone|power strip|usb/i, req: [[/hardwired/, /hard.?wire|hardwire|\bhw\b/i]] },
  "RV TPMS": { q: (k) => [k, k.replace(/rv tpms|tpms/, "RV tire pressure monitoring system"), k + " trailer sensors", k.replace(/rv tpms|tpms/, "TPMS RV trailer repeater")], must: /tpms|tire pressure monitor/i, ban: /valve stem only|tool kit|inflator|compressor|gauge only|replacement battery/i, req: [[/4-sensor/, /4 sensors?|4.?pack|4 tires?|4pcs/i], [/8-sensor/, /8 sensors?|8.?pack|8 tires?|8pcs/i], [/internal/, /internal|inner|in.?tire/i], [/sensors/, /sensor/i], [/repeater/, /repeater|booster|signal/i], [/bluetooth|smartphone/, /bluetooth|\\bapp\\b|smartphone/i], [/solar/, /solar/i], [/external/, /external|cap/i], [/6-sensor/, /6 sensors?|6.?pack|6 tires?|6pcs/i], [/10-sensor/, /10 sensors?|10.?pack|10 tires?|10pcs/i], [/replaceable/, /replaceable|cr1632|battery/i], [/high-pressure/, /high pressure|2\\d\\d ?psi|1[5-9]\\d ?psi/i]] },
  "Solar Charge Controllers": { q: (k) => [k, k + " 12V 24V", k.replace("solar charge controller", "charge controller RV solar"), k.replace("solar charge controller", "solar controller regulator"), ...(/alternator/.test(k) ? ["DC to DC battery charger MPPT solar input", "Renogy DC-DC charger MPPT", "Victron Orion DC-DC charger", "dual input DC DC charger solar alternator"] : []), ...(/generator|ac input/.test(k) ? ["solar inverter charger MPPT 12V RV", "all in one inverter charger with MPPT solar controller", "hybrid solar inverter MPPT AC charger 12V"] : [])], must: /charge controller|solar controller|charge regulator|dc.?(to.?)?dc|mppt|inverter charger/i, ban: /panel kit|kit with|cable only|fuse|connector|bracket|mount|battery monitor only|light|lamp/i, req: [[/mppt/, /mppt/i], [/pwm/, /pwm/i], [/bluetooth/, /bluetooth|\bapp\b/i], [/waterproof/, /waterproof|ip6\d/i], [/dual-battery/, /dual.?batter|two batter|2 batter/i], [/all-in-one/, /inverter/i], [/alternator/, /alternator|dc.?dc|b2b|dc to dc/i], [/generator-input|ac-input/, /\bac\b|generator|inverter charger|mains/i], [/lifepo4|lithium/, /lithium|lifepo4/i], [/lead-acid/, /agm|gel|flooded|lead/i], [/compact/, /compact|mini|small/i], [/high-voltage/, /high voltage|1[05]0 ?v|2[05]0 ?v|voc/i]] },
  "Weight Distribution Hitches": { q: (k) => [k, k + " sway control", k.replace("weight distribution hitch", "WD hitch kit trailer"), k.replace("weight distribution hitch", "weight distribution hitch trunnion round bar kit"), "Equal-i-zer weight distribution hitch", "Fastway e2 weight distribution hitch", "CURT TruTrack weight distribution hitch", "Husky Centerline weight distribution hitch", "Andersen No-Sway weight distribution hitch", "Blue Ox SwayPro weight distribution", "Reese Strait-Line weight distribution", "Camco Eaz-Lift weight distribution hitch", "ProPride 3P hitch"], must: /weight distribut|\bwd hitch|equal.?i.?zer|trunnion/i, ban: /hitch pin|hitch lock|receiver cover|bike|cargo|stabilizer jack/i, req: [[/integrated-sway|with-sway/, /sway|4.?point/i], [/2-5-inch/, /2.?1\/2|2\.5|2 1\/2/i], [/3-inch/, /3"|3 inch|3-inch|3 in\b/i], [/lifted/, /drop|rise|lift|long shank|adjustable/i], [/round-bar/, /round/i], [/trunnion/, /trunnion/i], [/surge/, /surge|andersen/i], [/adjustable-weight/, /adjust/i], [/lightweight/, /light|alumin|compact|andersen/i]] },
  "Heated RV Water Hoses": { q: (k) => [k, k.replace(/^best /, "") + " RV camper", k.replace(/ rv| for rv/g, "") + " travel trailer motorhome"], must: /heated|heat tape|freeze/i, ban: /hose reel|nozzle|splitter only|cover only|y valve/i },
  "RV AC Soft Starts": { q: (k) => [k, k.replace(/^best /, "") + " RV camper", k.replace(/ rv| for rv/g, "") + " travel trailer motorhome"], must: /soft start|softstart|easystart|micro.?air/i, ban: /capacitor only|thermostat/i },
  "RV Air Conditioners": { q: (k) => [k, k.replace(/^best /, "") + " RV camper", k.replace(/ rv| for rv/g, "") + " travel trailer motorhome"], must: /air condition|\bac\b|a\/c|heat pump/i, ban: /filter|cover|thermostat only|capacitor|soft start|vent cover|portable fan|cleaner|shroud only/i, noNum: /30-amp|50-amp/, banSkip: /soft-start/ },
  "RV Cleaners": { q: (k) => [k, ...(/vacuum/.test(k) ? ["12V handheld vacuum RV camper", "cordless vacuum for RV", "wet dry shop vac compact RV"] : []), ...(/kit/.test(k) ? ["RV cleaning kit wash brush cleaner set", "RV cleaner bundle roof awning"] : []), "RV black streak remover", "RV roof cleaner rubber EPDM", "RV awning cleaner", k.replace(/^best /, "") + " RV camper", k.replace(/ rv| for rv/g, "") + " travel trailer motorhome"], must: /clean|wash|remover/i, ban: /brush|mop|pole|towel/i, req: [[/black-tank/, /enzyme|tank|bio|odor/i], [/streak/, /streak/i], [/fiberglass/, /fiberglass|gel.?coat/i], [/drain/, /drain|clog/i], [/interior/, /interior|upholster|multi.?surface|all.?purpose|fabric/i], [/roof/, /roof/i], [/vacuum/, /vacuum|vac\b/i], [/kit/, /kit|set|bundle|\d ?(pc|pcs|pack|piece)/i]], },
  "RV Fresh Water Hoses": { q: (k) => [k, k.replace(/^best /, "") + " RV camper", k.replace(/ rv| for rv/g, "") + " travel trailer motorhome"], must: /hose/i, ban: /clean.?out|black water|elbow|90 degree|sewer|heated|reel only|nozzle only|splitter|garden spray|air hose/i, banSkip: /regulator/ },
  "RV GPS & Navigation": { q: (k) => [k, k.replace(/^best /, "") + " RV camper", k.replace(/ rv| for rv/g, "") + " travel trailer motorhome"], must: /gps|navigat|navigator/i, ban: /tracker|pet|collar|dash cam only|mount only|charger only|antenna only/i },
  "RV Roof Coatings": { q: (k) => [k, k.replace(/^best /, "") + " RV camper", k.replace(/ rv| for rv/g, "") + " travel trailer motorhome"], must: /coating|roof (paint|coat)|elastomeric/i, ban: /roller only|brush only|sealant tape|caulk/i, req: [[/epdm|rubber/, /epdm|rubber/i], [/fiberglass/, /fiberglass/i], [/tpo/, /tpo/i]], },
  "RV Roof Repair Tapes": { q: (k) => [k, k.replace(/^best /, "") + " RV camper", k.replace(/ rv| for rv/g, "") + " travel trailer motorhome"], must: /tape/i, ban: /duct tape|painter|electrical tape|teflon|measuring/i },
  "RV Roof Sealants": { q: (k) => [k, k.replace(/^best /, "") + " RV camper", k.replace(/ rv| for rv/g, "") + " travel trailer motorhome"], must: /sealant|lap seal|caulk|dicor|self.?leveling/i, ban: /tape|coating gallon|caulk gun only|remover/i, req: [[/aluminum/, /alumin|metal/i], [/self-leveling/, /self.?level/i]], },
  "RV Sewer Hose Fittings": { q: (k) => [k, k.replace(/^best /, "") + " RV camper", k.replace(/ rv| for rv/g, "") + " travel trailer motorhome"], must: /sewer|elbow|fitting|adapter|bayonet|wye|valve|connector/i, ban: /hose kit|\d+ ?ft|water hose|garden|drinking/i },
  "RV Sewer Hose Supports": { q: (k) => [k, k.replace(/^best /, "") + " RV camper", k.replace(/ rv| for rv/g, "") + " travel trailer motorhome"], must: /sewer hose support|hose support|slunky|sidewinder|support/i, ban: /water hose|tent|jack/i },
  "RV Sewer Hoses": { q: (k) => [k, "RhinoFLEX sewer hose kit 20 ft", "Valterra Dominator sewer hose", "RV sewer hose kit 15 ft with fittings", k.replace(/^best /, "") + " RV camper", k.replace(/ rv| for rv/g, "") + " travel trailer motorhome"], must: /sewer hose|sewer kit|sewage hose|drain hose/i, ban: /support|carrier|tote|wye|elbow|adapter|cap\b|storage|bumper|garden|drinking|water hose|wrench/i, banSkip: /carrier|flush|removable|compact/ },
  "RV Space Heaters": { q: (k) => [k, k.replace(/^best /, "") + " RV camper", k.replace(/ rv| for rv/g, "") + " travel trailer motorhome"], must: /heater/i, ban: /engine compartment|bilge|water heater|heated hose|tank heater|blanket|hand warmer|engine block/i, req: [[/ceramic/, /ceramic/i], [/electric/, /electric/i], [/low-wattage/, /low.?watt|\b[2-9]\d\d ?w\b|energy.?saving|eco/i], [/safest/, /tip.?over|overheat|safety|\bul\b|etl/i]], noNum: /30-amp/, },
  "RV Wash & Wax": { q: (k) => [k, ...(/aluminum/.test(k) ? ["aluminum trailer wash and polish", "RV aluminum siding cleaner wax", "aluminum brightener polish trailer"] : []), ...(/fiberglass/.test(k) ? ["fiberglass RV wash and wax gelcoat", "boat RV fiberglass cleaner wax", "gelcoat restorer wax RV"] : []), k.replace(/^best /, "") + " RV camper", k.replace(/ rv| for rv/g, "") + " travel trailer motorhome"], must: /wash|wax|polish|sealant spray|ceramic/i, ban: /brush only|towel only|pole only|toilet|tank/i, req: [[/aluminum/, /alumin|metal|siding/i], [/fiberglass/, /fiberglass|gel.?coat/i]], },
  "RV Water Heaters": { q: (k) => [k, ...(/anode/.test(k) ? ["RV water heater anode rod Suburban", "magnesium anode rod RV Atwood", "aluminum anode rod RV water heater 3/4"] : []), ...(/travel trailer|camper van|propane/.test(k) ? ["Suburban RV water heater 6 gallon", "Atwood RV water heater gas electric", "propane tankless water heater RV 12V"] : []), k.replace(/^best /, "") + " RV camper", k.replace(/ rv| for rv/g, "") + " travel trailer motorhome"], must: /water heater|tankless|hot water/i, ban: /latch|door|anode|element|wrench|flush|anode only|element only|thermostat only|door only|heated hose|tank heater pad|flush wand/i, req: [[/anode/, /anode/i], [/tankless/, /tankless|on.?demand|instant/i]], banSkip: /anode/ },
  "RV Water Pump Accumulators": { q: (k) => [k, k.replace(/^best /, "") + " RV camper", k.replace(/ rv| for rv/g, "") + " travel trailer motorhome"], must: /accumulator|expansion tank|pressure tank/i, ban: /pump only|gauge only/i },
  "RV Water Pumps": { q: (k) => [k, k.replace(/^best /, "") + " RV camper", k.replace(/ rv| for rv/g, "") + " travel trailer motorhome"], must: /water pump|pump/i, ban: /accumulator|strainer only|sump|bilge|transfer pump drill|fuel|aquarium|air pump|macerator|vacuum|pump cover|pressure washer/i, req: [[/variable/, /variable|vsp|speed/i]], banSkip: /accumulator/ },
  "RV WiFi Boosters": { q: (k) => [k, k.replace(/^best /, "") + " RV camper", k.replace(/ rv| for rv/g, "") + " travel trailer motorhome"], must: /wifi|wi-fi|booster|extender|router|cellular|antenna/i, ban: /for home|sq\.? ?ft|whole home|tv antenna|fm|radio|cable only|usb wifi adapter only/i },
  "RV Inverters": { q: (k) => [k, k.replace(/rv /, "") + " pure sine wave 12V", k + " charger transfer switch"], must: /inverter/i, ban: /generator|cable|fuse|remote only|cover|solar panel kit|car inverter 150|usb/i },
};

function numTokens(slug) {
  const out = [];
  let m;
  const re = /(\d+)-(watt|amp|volt|ah)\b|(\d+)ah\b/g;
  while ((m = re.exec(slug))) out.push({ n: Number(m[1] || m[3]), u: m[2] || "ah" });
  return out;
}
function matchesNum(title, tk) {
  const t = title.toLowerCase().replace(/,/g, "");
  const { n, u } = tk;
  const pat = {
    watt: new RegExp(`\\b${n}\\s*-?\\s*(w\\b|watt)`),
    amp: new RegExp(`\\b${n}\\s*-?\\s*(a\\b|amp)`),
    volt: new RegExp(`\\b${n}\\s*-?\\s*(v\\b|volt)`),
    ah: new RegExp(`\\b${n}\\s*-?\\s*ah\\b`),
  }[u];
  return pat.test(t);
}

async function search(q) {
  const cache = resolve(TMP, "qcache");
  mkdirSync(cache, { recursive: true });
  const f = resolve(cache, Buffer.from(q).toString("hex").slice(0, 100) + ".json");
  if (existsSync(f)) return JSON.parse(readFileSync(f, "utf8"));
  let items = [];
  for (let t = 0; t < 3; t++) {
    const r = await fetch("https://creatorsapi.amazon/catalog/v1/searchItems", { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${tok}`, "x-marketplace": M }, body: JSON.stringify({ keywords: q, marketplace: M, partnerTag: TAG, itemCount: 10, resources: ["images.primary.large", "itemInfo.title", "itemInfo.features", "itemInfo.byLineInfo", "offersV2.listings.price"] }) });
    const d = await r.json();
    if (r.ok) { items = (d.searchResult?.items || []).map((i) => ({ asin: i.asin, title: i.itemInfo?.title?.displayValue, brand: i.itemInfo?.byLineInfo?.brand?.displayValue, price: i.offersV2?.listings?.[0]?.price?.money?.amount ?? null, img: i.images?.primary?.large?.url, features: i.itemInfo?.features?.displayValues || [] })); break; }
    await new Promise((s) => setTimeout(s, 1500));
  }
  writeFileSync(f, JSON.stringify(items));
  await new Promise((s) => setTimeout(s, 1100));
  return items;
}

// ASINs used anywhere already
const used = new Set();
for (const f of readdirSync("data/guides")) { if (!f.endsWith(".ts")) continue; for (const m of readFileSync("data/guides/" + f, "utf8").matchAll(/\/dp\/([A-Z0-9]{10})/g)) used.add(m[1]); }
for (const f of readdirSync("scripts/p2-content")) for (const m of readFileSync("scripts/p2-content/" + f, "utf8").matchAll(/asin: "([A-Z0-9]{10})"/g)) used.add(m[1]);

// Prior descriptions of ASINs already reviewed elsewhere, so writers can adapt them instead of starting from scratch.
const prior = {};
for (const f of readdirSync("data/guides")) { if (!f.endsWith(".ts")) continue; for (const m of readFileSync("data/guides/" + f, "utf8").matchAll(/"amazonUrl": "https:\/\/www\.amazon\.com\/dp\/([A-Z0-9]{10})[^"]*",\s*"description": "((?:[^"\\]|\\.)*)"/g)) prior[m[1]] ??= { guide: f.replace(/\.ts$/, ""), text: JSON.parse('"' + m[2] + '"').slice(0, 900) }; }
const gap = readFileSync(GAP, "utf8");
const p2 = gap.slice(gap.indexOf("# P2 articles"));
function gapEntry(slug) {
  const i = p2.indexOf("/" + slug + "/");
  if (i < 0) return "";
  const start = p2.lastIndexOf("### ", i), end = p2.indexOf("\n### ", i);
  return p2.slice(start, end < 0 ? undefined : end).split("\n").filter((l) => !/Competitor pattern|Evidence to collect|Internal-link parent/.test(l)).join("\n");
}
function clusterNote(cluster) {
  const key = cluster;
  const i = gap.indexOf("### " + key + " (");
  if (i < 0) return "";
  return gap.slice(i, gap.indexOf("\n### ", i + 5)).trim();
}

CL["RV Water Filters — Incremental"] = CL["RV Water Filters"];
CL["RV Water Pressure Regulators — Incremental"] = CL["RV Water Pressure Regulators"];
const lines = readFileSync(slugsFile, "utf8").split("\n").map((l) => l.trim()).filter(Boolean);
const taken = new Set();
for (const line of lines) {
  const [cluster, slug] = line.split("|");
  const cfg = CL[cluster];
  const kw = slug.replace(/^best-/, "").replace(/-/g, " ");
  const bestKw = "best " + kw;
  const raw = [];
  for (const q of cfg.q(kw)) raw.push(...(await search(q)));
  const seen = new Set();
  let cands = raw.filter((i) => i.asin && !seen.has(i.asin) && seen.add(i.asin) && i.price != null && i.title);
  cands = cands.filter((i) => cfg.must.test(i.title) && (cfg.banSkip?.test(slug) || !cfg.ban.test(i.title)));
  for (const [sp, tp] of cfg.req || []) if (sp.test(slug)) cands = cands.filter((i) => tp.test(process.env.LOOSE ? i.title + " " + i.features.join(" ") : i.title));
  const toks = cfg.noNum && cfg.noNum.test(slug) ? [] : numTokens(slug);
  let numOk = cands;
  if (toks.length) numOk = cands.filter((i) => toks.every((tk) => matchesNum(process.env.LOOSE ? i.title + ' ' + i.features.join(' ') : i.title, tk)));
  const usedIn = {};
  if (process.env.ALLOW_USED) for (const f of readdirSync("data/guides")) { if (!f.endsWith(".ts")) continue; for (const m of readFileSync("data/guides/" + f, "utf8").matchAll(/\/dp\/([A-Z0-9]{10})/g)) (usedIn[m[1]] ??= new Set()).add(f); }
  let pool = numOk.filter((i) => !taken.has(i.asin) && (process.env.ALLOW_USED || !used.has(i.asin)));
  if (process.env.REUSE && !process.env.ALLOW_USED) pool = [...numOk.filter((i) => used.has(i.asin) && prior[i.asin] && !taken.has(i.asin)).slice(0, 2), ...pool];
  const reuse = pool.length < 6 ? numOk.filter((i) => taken.has(i.asin) && !used.has(i.asin)).slice(0, Math.min(2, 6 - pool.length)) : [];
  pool.sort((a, b) => (used.has(a.asin) ? 1 : 0) - (used.has(b.asin) ? 1 : 0));
  // diversify: max 2 per brand, spread over price
  if (!process.env.ALLOW_USED) pool.sort((a, b) => a.price - b.price);
  const picks = [];
  const bc = {};
  const step = process.env.ALLOW_USED ? 1 : Math.max(1, Math.floor(pool.length / 6));
  for (let k = 0; k < pool.length && picks.length < 6; k += 1) {
    const it = pool[(k * step) % pool.length];
    if (picks.includes(it)) continue;
    if (process.env.ALLOW_USED && usedIn[it.asin]) { const cnt = {}; let over = false; for (const p of picks) for (const g of usedIn[p.asin] || []) cnt[g] = (cnt[g] || 0) + 1; for (const g of usedIn[it.asin]) if ((cnt[g] || 0) >= 2) over = true; if (over) continue; }
    const b = (it.brand || "x").toLowerCase();
    if ((bc[b] || 0) >= 2) continue;
    bc[b] = (bc[b] || 0) + 1; picks.push(it);
  }
  for (const it of pool) { if (picks.length >= 6) break; if (!picks.includes(it) && (bc[(it.brand || "x").toLowerCase()] || 0) < 3) { picks.push(it); bc[(it.brand || "x").toLowerCase()] = (bc[(it.brand || "x").toLowerCase()] || 0) + 1; } }
  for (const it of reuse) if (picks.length < 6) picks.push(it);
  picks.sort((a, b) => b.price - a.price);
  picks.forEach((p) => taken.add(p.asin));
  const out = {
    slug, cluster, keyword: bestKw, numericClaim: toks.map((t) => `${t.n} ${t.u}`),
    status: picks.length >= 5 ? "ok" : "THIN",
    candidatesAfterFilter: numOk.length, availableUnused: pool.length,
    gap: gapEntry(slug), clusterFinding: clusterNote(cluster),
    picks: picks.map((p) => ({ asin: p.asin, brand: p.brand, price: p.price, title: p.title.slice(0, 170), features: p.features.slice(0, 5).map((f) => f.replace(/\s+/g, " ").slice(0, 200)), ...(prior[p.asin] ? { prior: prior[p.asin] } : {}) })),
  };
  writeFileSync(resolve(outDir, slug + ".json"), JSON.stringify(out, null, 1));
  console.log(`${out.status.padEnd(4)} ${slug}  picks=${picks.length} filtered=${numOk.length} unused=${pool.length}`);
}
