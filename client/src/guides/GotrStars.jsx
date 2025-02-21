import Image from "../components/Image";

export default function ActivityPairings() {
    return <>
        <section>
          <h1>Guardians of the Rift and mining stars</h1>

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

          <p>
            In addition to those items and runecrafting experience, Guardians of the Rift will give you a large number of valuable runes (law, nature, chaos, death, and blood runes once you have the runecrafting levels and have completed the relevant quests) that can be sold to Ali Morrisane at a price which does not change with overstock (requires partial completion of <a href="https://oldschool.runescape.wiki/w/Rogue_Trader">Rogue Trader</a>)
          </p>
          

          <h2>Mining stars</h2>

          <p>
            To mine stars, get the Star Miners plugin, and join the <a href="https://discord.com/invite/starminers">Star Miners discord</a> to complete the plugin setup which involves generating a secret API token with a bot in the discord server which you configure RuneLite with. This will let you see where and on what world shooting stars are easily.
          </p>

          <p>
            Shooting stars will give you stardust which can be used to buy a celestial ring as well as charge it (up to 10,000 charges). This ring will increase the rate of mining guardian essence in GOTR which is the main reason I think it makes sense to alternate GOTR with mining stars. Excess stardust can be used to buy bags of gems for crafting experience, as well as a chance for uncut dragonstones.
          </p>

          <div className="d-flex justify-content-center">
            <Image src="/mining_stars_with_gotr_setup.png" text="Mining a shooting star near the Varrock east bank with Guardians of the Rift equipment (note the bounciness of the lost bag)." width="700px" /> 
          </div>
          
        </section>
    </>
}