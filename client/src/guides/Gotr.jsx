import Image from "../components/Image";

export default function Gotr() {
    return <>
        <section>
          <h1>Guardians of the Rift</h1>

          <p>
            One of the best methods to train runecrafting as an ultimate ironperson is the <a href="https://oldschool.runescape.wiki/w/Guardians_of_the_Rift">Guardians of the Rift</a> which requires completion of The Temple of the Eye quest. This minigame requires a lot of attention, but it pairs well with mining shooting stars which is very AFK.
          </p>

          <h2>Guardians of the Rift (GOTR)</h2>

          <p>
            GOTR is more efficient with more inventory spaces so you will want to deathbank (Hespori is good at 65 farming) and bring your pickaxe, rune pouch, celestial ring, amulet of the eye (to teleport there), robes of the eye, or graceful set (depending on what you have). The rune pouch allows you to have house teleports (useful for getting to stars with house teleport portals) and also store runes that you craft. After you have done GOTR for a while, you will obtain the robes of the eye (which can be stored in the magic wardrobe and increase runecrafting experience), the amulet of the eye (which allows you to teleport to GOTR and can be retrieved from the Lumbridge guide), and rune pouches from searching the rewards rift. Rune pouches cannot be stored, so it is recommended to leave GOTR with enough reward searches so that when you return later, you can search the rift enough times to recover your pouches. In addition, the lost bag is a reward which serves no purpose but is 10/10 fashionscape, and the Ring of the Elements allows teleporting to the elemental altars (wind, water, earth, and fire) which is useful especially for Mahogany Homes (teleporting to near the Varrock sawmill).
          </p>

          <div className="d-flex flex-row column-gap-3 align-items-center justify-content-around flex-wrap">
            <Image src="/gotr-outfit.png" text="Equipment for Guardians of the Rift" width="500px" />

            <Image src="/lumbridge-guide.png" text="The Amulet of the Eye can be recovered by teleporting to Lumbridge and asking the Lumbridge guide about it." width="400px" /> 
          </div>

          <h3>Ring of the Elements</h3>

          <p>
            The Ring of the Elements is charged with elemental runes and law runes and can be used to teleport to the 4 elemental altars (wind, water, earth, fire). The ring can only be uncharged at a bank so it cannot be used as a second rune pouch. To store it in a looting bag, it must be uncharged.
          </p>
      
          <div className="d-flex flex-row column-gap-3 align-items-center justify-content-around flex-wrap">
              <Image src="/air-altar.png" text="Air altar teleport. This teleport is useful for going to Rimmington and Port Sarim, as well as the farm patches south of Falador, although the Explorer's ring teleport is better for that."    width="500px" />
              <Image src="/water-altar.png" text="Water altar teleport. This Lumbridge swamp teleport is useful for shooting stars, clue steps, and going to the Lumbridge swamp dungeon for the Tears of Guthix." width="500px" />
              <Image src="/earth-altar.png" text="Earth altar teleport. This is a very noteworthy teleport for the closeness to the Varrock sawmill, which is very useful for Mahogany homes." width="500px" />
              <Image src="/fire-altar.png" text="Fire altar teleport. This is mainly useful for getting to Ali Morrisane, but it is also useful for going to mine gold in the Al Kharid mine and shooting stars in the area." width="500px" />
          </div>

          <p>
            In addition to those items and runecrafting experience, Guardians of the Rift will give you a large number of valuable runes (law, nature, chaos, death, and blood runes once you have the runecrafting levels and have completed the relevant quests) that can be sold to Ali Morrisane at a price which does not change with overstock (requires partial completion of <a href="https://oldschool.runescape.wiki/w/Rogue_Trader">Rogue Trader</a>)
          </p>
          
        </section>
    </>
}