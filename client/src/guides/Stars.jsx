import Image from "../components/Image";

export default function ActivityPairings() {
    return <>
        <section>

            <h2>Mining stars</h2>

            <p>
                To mine stars, get the Star Miners plugin, and join the <a href="https://discord.com/invite/starminers">Star Miners discord</a> to complete the plugin setup which involves generating a secret API token with a bot in the discord server which you configure RuneLite with. This will let you see where and on what world shooting stars are easily.
            </p>

            <div className="d-flex justify-content-center column-gap-3 flex-wrap align-items-center">
                <Image src="/mining_stars_with_gotr_setup.png" text="Mining a shooting star near the Varrock east bank with Guardians of the Rift equipment (note the bounciness of the lost bag)." width="700px" />
                <Image src="/star-miners-runelite-menu.png" text="Star Miners" width="200px" />
            </div>

            <p>
                Shooting stars will give you stardust which can be used to buy a celestial ring as well as charge it (up to 10,000 charges). This ring will increase the rate of mining guardian essence in GOTR which is the main reason I think it makes sense to alternate GOTR with mining stars. Excess stardust can be used to buy bags of gems for crafting experience, as well as a chance for uncut dragonstones.
            </p>

            <h3>What to do if a star does not show</h3>

            <p>If you run to the location of a star and then hop worlds while within render distance, you may need to leave and go back to where the star is to see it.</p>
        </section>
    </>;
}