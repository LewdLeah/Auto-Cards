// Your "Library" tab should look like this
globalThis.text ??= "\n";
globalThis.stop ??= false;
const replacements = [
    [/ho[- ]*oh/gi, "Ho-oh"],
    [/mime[- ]*jr/gi, "Mime-Jr"],
    [/porygon[- ]*z/gi, "Porygon-Z"],
    [/type[- ]*null/gi, "Type-Null"],
    [/jangmo[- ]*o/gi, "Jangmo-o"],
    [/hakamo[- ]*o/gi, "Hakamo-o"],
    [/kommo[- ]*o/gi, "Kommo-o"],
    [/tapu[- ]*koko/gi, "Tapu-Koko"],
    [/tapu[- ]*lele/gi, "Tapu-Lele"],
    [/tapu[- ]*bulu/gi, "Tapu-Bulu"],
    [/tapu[- ]*fini/gi, "Tapu-Fini"],
    [/great[- ]*tusk/gi, "Great-Tusk"],
    [/scream[- ]*tail/gi, "Scream-Tail"],
    [/brute[- ]*bonnet/gi, "Brute-Bonnet"],
    [/flutter[- ]*mane/gi, "Flutter-Mane"],
    [/slither[- ]*wing/gi, "Slither-Wing"],
    [/sandy[- ]*shocks/gi, "Sandy-Shocks"],
    [/iron[- ]*treads/gi, "Iron-Treads"],
    [/iron[- ]*bundle/gi, "Iron-Bundle"],
    [/iron[- ]*hands/gi, "Iron-Hands"],
    [/iron[- ]*jugulis/gi, "Iron-Jugulis"],
    [/iron[- ]*moth/gi, "Iron-Moth"],
    [/iron[- ]*thorns/gi, "Iron-Thorns"],
    [/wo[- ]*chien/gi, "Wo-Chien"],
    [/chien[- ]*pao/gi, "Chien-Pao"],
    [/ting[- ]*lu/gi, "Ting-Lu"],
    [/chi[- ]*yu/gi, "Chi-Yu"],
    [/roaring[- ]*moon/gi, "Roaring-Moon"],
    [/iron[- ]*valiant/gi, "Iron-Valiant"],
    [/walking[- ]*wake/gi, "Walking-Wake"],
    [/iron[- ]*leaves/gi, "Iron-Leaves"],
    [/gouging[- ]*fire/gi, "Gouging-Fire"],
    [/raging[- ]*bolt/gi, "Raging-Bolt"],
    [/iron[- ]*boulder/gi, "Iron-Boulder"],
    [/iron[- ]*crown/gi, "Iron-Crown"],
    [/pokemon[- ]*beach/gi, "Pokemon-Beach"],
    [/pokemon[- ]*garden/gi, "Pokemon-Garden"],
    [/pokemon[- ]*square/gi, "Pokemon-Square"],
    [/pokemon[- ]*village/gi, "Pokemon-Village"],
    [/shiver[- ]*camp/gi, "Shiver-Camp"],
    [/cabo[- ]*poco/gi, "Cabo-Poco"],
    [/cinnabar[- ]*island/gi, "Cinnabar-Island"],
    [/diamond[- ]*settlement/gi, "Diamond-Settlement"],
    [/ever[- ]*grande/gi, "Ever-Grande"],
    [/fight[- ]*area/gi, "Fight-Area"],
    [/five[- ]*island/gi, "Five-Island"],
    [/four[- ]*island/gi, "Four-Island"],
    [/frontier[- ]*access/gi, "Frontier-Access"],
    [/hammerlocke[- ]*hills/gi, "Hammerlocke-Hills"],
    [/los[- ]*platos/gi, "Los-Platos"],
    [/new[- ]*bark/gi, "New-Bark"],
    [/one[- ]*island/gi, "One-Island"],
    [/pearl[- ]*settlement/gi, "Pearl-Settlement"],
    [/porto[- ]*marinada/gi, "Porto-Marinada"],
    [/resort[- ]*area/gi, "Resort-Area"],
    [/safari[- ]*zone[- ]*gate/gi, "Safari-Zone-Gate"],
    [/seven[- ]*island/gi, "Seven-Island"],
    [/six[- ]*island/gi, "Six-Island"],
    [/stow[- ]*on[- ]*side/gi, "Stow-on-Side"],
    [/survival[- ]*area/gi, "Survival-Area"],
    [/three[- ]*island/gi, "Three-Island"],
    [/two[- ]*island/gi, "Two-Island"],
    [/white[- ]*forest/gi, "White-Forest"],
    [/gateon[- ]*port/gi, "Gateon-Port"],
    [/the[- ]*under/gi, "The-Under"],
    [/aqua[- ]*resort/gi, "Aqua-Resort"],
    [/10,000,000[- ]*volt[- ]*thunderbolt/gi, "10,000,000-Volt-Thunderbolt"],
    [/acid[- ]*armor/gi, "Acid-Armor"],
    [/acid[- ]*downpour/gi, "Acid-Downpour"],
    [/acid[- ]*spray/gi, "Acid-Spray"],
    [/aerial[- ]*ace/gi, "Aerial-Ace"],
    [/after[- ]*you/gi, "After-You"],
    [/air[- ]*cutter/gi, "Air-Cutter"],
    [/air[- ]*slash/gi, "Air-Slash"],
    [/all[- ]*out[- ]*pummeling/gi, "All-Out-Pummeling"],
    [/alluring[- ]*voice/gi, "Alluring-Voice"],
    [/ally[- ]*switch/gi, "Ally-Switch"],
    [/anchor[- ]*shot/gi, "Anchor-Shot"],
    [/ancient[- ]*power/gi, "Ancient-Power"],
    [/apple[- ]*acid/gi, "Apple-Acid"],
    [/aqua[- ]*cutter/gi, "Aqua-Cutter"],
    [/aqua[- ]*jet/gi, "Aqua-Jet"],
    [/aqua[- ]*ring/gi, "Aqua-Ring"],
    [/aqua[- ]*step/gi, "Aqua-Step"],
    [/aqua[- ]*tail/gi, "Aqua-Tail"],
    [/arm[- ]*thrust/gi, "Arm-Thrust"],
    [/armor[- ]*cannon/gi, "Armor-Cannon"],
    [/aromatic[- ]*mist/gi, "Aromatic-Mist"],
    [/astral[- ]*barrage/gi, "Astral-Barrage"],
    [/attack[- ]*order/gi, "Attack-Order"],
    [/aura[- ]*sphere/gi, "Aura-Sphere"],
    [/aura[- ]*wheel/gi, "Aura-Wheel"],
    [/aurora[- ]*beam/gi, "Aurora-Beam"],
    [/aurora[- ]*veil/gi, "Aurora-Veil"],
    [/axe[- ]*kick/gi, "Axe-Kick"],
    [/baby[- ]*doll[- ]*eyes/gi, "Baby-Doll-Eyes"],
    [/baddy[- ]*bad/gi, "Baddy-Bad"],
    [/baneful[- ]*bunker/gi, "Baneful-Bunker"],
    [/barb[- ]*barrage/gi, "Barb-Barrage"],
    [/baton[- ]*pass/gi, "Baton-Pass"],
    [/beak[- ]*blast/gi, "Beak-Blast"],
    [/beat[- ]*up/gi, "Beat-Up"],
    [/behemoth[- ]*bash/gi, "Behemoth-Bash"],
    [/behemoth[- ]*blade/gi, "Behemoth-Blade"],
    [/belly[- ]*drum/gi, "Belly-Drum"],
    [/bitter[- ]*blade/gi, "Bitter-Blade"],
    [/bitter[- ]*malice/gi, "Bitter-Malice"],
    [/black[- ]*hole[- ]*eclipse/gi, "Black-Hole-Eclipse"],
    [/blast[- ]*burn/gi, "Blast-Burn"],
    [/blaze[- ]*kick/gi, "Blaze-Kick"],
    [/blazing[- ]*torque/gi, "Blazing-Torque"],
    [/bleakwind[- ]*storm/gi, "Bleakwind-Storm"],
    [/blood[- ]*moon/gi, "Blood-Moon"],
    [/bloom[- ]*doom/gi, "Bloom-Doom"],
    [/blue[- ]*flare/gi, "Blue-Flare"],
    [/body[- ]*press/gi, "Body-Press"],
    [/body[- ]*slam/gi, "Body-Slam"],
    [/bolt[- ]*beak/gi, "Bolt-Beak"],
    [/bolt[- ]*strike/gi, "Bolt-Strike"],
    [/bone[- ]*club/gi, "Bone-Club"],
    [/bone[- ]*rush/gi, "Bone-Rush"],
    [/bouncy[- ]*bubble/gi, "Bouncy-Bubble"],
    [/branch[- ]*poke/gi, "Branch-Poke"],
    [/brave[- ]*bird/gi, "Brave-Bird"],
    [/breaking[- ]*swipe/gi, "Breaking-Swipe"],
    [/breakneck[- ]*blitz/gi, "Breakneck-Blitz"],
    [/brick[- ]*break/gi, "Brick-Break"],
    [/brutal[- ]*swing/gi, "Brutal-Swing"],
    [/bubble[- ]*beam/gi, "Bubble-Beam"],
    [/bug[- ]*bite/gi, "Bug-Bite"],
    [/bug[- ]*buzz/gi, "Bug-Buzz"],
    [/bulk[- ]*up/gi, "Bulk-Up"],
    [/bullet[- ]*punch/gi, "Bullet-Punch"],
    [/bullet[- ]*seed/gi, "Bullet-Seed"],
    [/burn[- ]*up/gi, "Burn-Up"],
    [/burning[- ]*bulwark/gi, "Burning-Bulwark"],
    [/burning[- ]*jealousy/gi, "Burning-Jealousy"],
    [/buzzy[- ]*buzz/gi, "Buzzy-Buzz"],
    [/calm[- ]*mind/gi, "Calm-Mind"],
    [/ceaseless[- ]*edge/gi, "Ceaseless-Edge"],
    [/charge[- ]*beam/gi, "Charge-Beam"],
    [/chilling[- ]*water/gi, "Chilling-Water"],
    [/chilly[- ]*reception/gi, "Chilly-Reception"],
    [/chip[- ]*away/gi, "Chip-Away"],
    [/circle[- ]*throw/gi, "Circle-Throw"],
    [/clanging[- ]*scales/gi, "Clanging-Scales"],
    [/clangorous[- ]*soul/gi, "Clangorous-Soul"],
    [/clangorous[- ]*soulblaze/gi, "Clangorous-Soulblaze"],
    [/clear[- ]*smog/gi, "Clear-Smog"],
    [/close[- ]*combat/gi, "Close-Combat"],
    [/collision[- ]*course/gi, "Collision-Course"],
    [/combat[- ]*torque/gi, "Combat-Torque"],
    [/comet[- ]*punch/gi, "Comet-Punch"],
    [/confuse[- ]*ray/gi, "Confuse-Ray"],
    [/continental[- ]*crush/gi, "Continental-Crush"],
    [/conversion[- ]*2/gi, "Conversion-2"],
    [/core[- ]*enforcer/gi, "Core-Enforcer"],
    [/corkscrew[- ]*crash/gi, "Corkscrew-Crash"],
    [/corrosive[- ]*gas/gi, "Corrosive-Gas"],
    [/cosmic[- ]*power/gi, "Cosmic-Power"],
    [/cotton[- ]*guard/gi, "Cotton-Guard"],
    [/cotton[- ]*spore/gi, "Cotton-Spore"],
    [/court[- ]*change/gi, "Court-Change"],
    [/crafty[- ]*shield/gi, "Crafty-Shield"],
    [/cross[- ]*chop/gi, "Cross-Chop"],
    [/cross[- ]*poison/gi, "Cross-Poison"],
    [/crush[- ]*claw/gi, "Crush-Claw"],
    [/crush[- ]*grip/gi, "Crush-Grip"],
    [/dark[- ]*pulse/gi, "Dark-Pulse"],
    [/dark[- ]*void/gi, "Dark-Void"],
    [/darkest[- ]*lariat/gi, "Darkest-Lariat"],
    [/dazzling[- ]*gleam/gi, "Dazzling-Gleam"],
    [/defend[- ]*order/gi, "Defend-Order"],
    [/defense[- ]*curl/gi, "Defense-Curl"],
    [/destiny[- ]*bond/gi, "Destiny-Bond"],
    [/devastating[- ]*drake/gi, "Devastating-Drake"],
    [/diamond[- ]*storm/gi, "Diamond-Storm"],
    [/dire[- ]*claw/gi, "Dire-Claw"],
    [/disarming[- ]*voice/gi, "Disarming-Voice"],
    [/dizzy[- ]*punch/gi, "Dizzy-Punch"],
    [/doom[- ]*desire/gi, "Doom-Desire"],
    [/double[- ]*hit/gi, "Double-Hit"],
    [/double[- ]*iron[- ]*bash/gi, "Double-Iron-Bash"],
    [/double[- ]*kick/gi, "Double-Kick"],
    [/double[- ]*shock/gi, "Double-Shock"],
    [/double[- ]*slap/gi, "Double-Slap"],
    [/double[- ]*team/gi, "Double-Team"],
    [/double[- ]*edge/gi, "Double-Edge"],
    [/draco[- ]*meteor/gi, "Draco-Meteor"],
    [/dragon[- ]*ascent/gi, "Dragon-Ascent"],
    [/dragon[- ]*breath/gi, "Dragon-Breath"],
    [/dragon[- ]*cheer/gi, "Dragon-Cheer"],
    [/dragon[- ]*claw/gi, "Dragon-Claw"],
    [/dragon[- ]*dance/gi, "Dragon-Dance"],
    [/dragon[- ]*darts/gi, "Dragon-Darts"],
    [/dragon[- ]*energy/gi, "Dragon-Energy"],
    [/dragon[- ]*hammer/gi, "Dragon-Hammer"],
    [/dragon[- ]*pulse/gi, "Dragon-Pulse"],
    [/dragon[- ]*rage/gi, "Dragon-Rage"],
    [/dragon[- ]*rush/gi, "Dragon-Rush"],
    [/dragon[- ]*tail/gi, "Dragon-Tail"],
    [/drain[- ]*punch/gi, "Drain-Punch"],
    [/draining[- ]*kiss/gi, "Draining-Kiss"],
    [/dream[- ]*eater/gi, "Dream-Eater"],
    [/drill[- ]*peck/gi, "Drill-Peck"],
    [/drill[- ]*run/gi, "Drill-Run"],
    [/drum[- ]*beating/gi, "Drum-Beating"],
    [/dual[- ]*chop/gi, "Dual-Chop"],
    [/dual[- ]*wingbeat/gi, "Dual-Wingbeat"],
    [/dynamax[- ]*cannon/gi, "Dynamax-Cannon"],
    [/dynamic[- ]*punch/gi, "Dynamic-Punch"],
    [/earth[- ]*power/gi, "Earth-Power"],
    [/echoed[- ]*voice/gi, "Echoed-Voice"],
    [/eerie[- ]*impulse/gi, "Eerie-Impulse"],
    [/eerie[- ]*spell/gi, "Eerie-Spell"],
    [/egg[- ]*bomb/gi, "Egg-Bomb"],
    [/electric[- ]*terrain/gi, "Electric-Terrain"],
    [/electro[- ]*ball/gi, "Electro-Ball"],
    [/electro[- ]*drift/gi, "Electro-Drift"],
    [/electro[- ]*shot/gi, "Electro-Shot"],
    [/energy[- ]*ball/gi, "Energy-Ball"],
    [/esper[- ]*wing/gi, "Esper-Wing"],
    [/expanding[- ]*force/gi, "Expanding-Force"],
    [/extreme[- ]*evoboost/gi, "Extreme-Evoboost"],
    [/extreme[- ]*speed/gi, "Extreme-Speed"],
    [/fairy[- ]*lock/gi, "Fairy-Lock"],
    [/fairy[- ]*wind/gi, "Fairy-Wind"],
    [/fake[- ]*out/gi, "Fake-Out"],
    [/fake[- ]*tears/gi, "Fake-Tears"],
    [/false[- ]*surrender/gi, "False-Surrender"],
    [/false[- ]*swipe/gi, "False-Swipe"],
    [/feather[- ]*dance/gi, "Feather-Dance"],
    [/feint[- ]*attack/gi, "Feint-Attack"],
    [/fell[- ]*stinger/gi, "Fell-Stinger"],
    [/fickle[- ]*beam/gi, "Fickle-Beam"],
    [/fiery[- ]*dance/gi, "Fiery-Dance"],
    [/fiery[- ]*wrath/gi, "Fiery-Wrath"],
    [/fillet[- ]*away/gi, "Fillet-Away"],
    [/final[- ]*gambit/gi, "Final-Gambit"],
    [/fire[- ]*blast/gi, "Fire-Blast"],
    [/fire[- ]*fang/gi, "Fire-Fang"],
    [/fire[- ]*lash/gi, "Fire-Lash"],
    [/fire[- ]*pledge/gi, "Fire-Pledge"],
    [/fire[- ]*punch/gi, "Fire-Punch"],
    [/fire[- ]*spin/gi, "Fire-Spin"],
    [/first[- ]*impression/gi, "First-Impression"],
    [/fishious[- ]*rend/gi, "Fishious-Rend"],
    [/flame[- ]*burst/gi, "Flame-Burst"],
    [/flame[- ]*charge/gi, "Flame-Charge"],
    [/flame[- ]*wheel/gi, "Flame-Wheel"],
    [/flare[- ]*blitz/gi, "Flare-Blitz"],
    [/flash[- ]*cannon/gi, "Flash-Cannon"],
    [/fleur[- ]*cannon/gi, "Fleur-Cannon"],
    [/flip[- ]*turn/gi, "Flip-Turn"],
    [/floaty[- ]*fall/gi, "Floaty-Fall"],
    [/floral[- ]*healing/gi, "Floral-Healing"],
    [/flower[- ]*shield/gi, "Flower-Shield"],
    [/flower[- ]*trick/gi, "Flower-Trick"],
    [/flying[- ]*press/gi, "Flying-Press"],
    [/focus[- ]*blast/gi, "Focus-Blast"],
    [/focus[- ]*energy/gi, "Focus-Energy"],
    [/focus[- ]*punch/gi, "Focus-Punch"],
    [/follow[- ]*me/gi, "Follow-Me"],
    [/force[- ]*palm/gi, "Force-Palm"],
    [/forest[- ]*curse/gi, "Forest-Curse"],
    [/foul[- ]*play/gi, "Foul-Play"],
    [/freeze[- ]*shock/gi, "Freeze-Shock"],
    [/freeze[- ]*dry/gi, "Freeze-Dry"],
    [/freezing[- ]*glare/gi, "Freezing-Glare"],
    [/freezy[- ]*frost/gi, "Freezy-Frost"],
    [/frenzy[- ]*plant/gi, "Frenzy-Plant"],
    [/frost[- ]*breath/gi, "Frost-Breath"],
    [/fury[- ]*attack/gi, "Fury-Attack"],
    [/fury[- ]*cutter/gi, "Fury-Cutter"],
    [/fury[- ]*swipes/gi, "Fury-Swipes"],
    [/fusion[- ]*bolt/gi, "Fusion-Bolt"],
    [/fusion[- ]*flare/gi, "Fusion-Flare"],
    [/future[- ]*sight/gi, "Future-Sight"],
    [/g[- ]*max[- ]*befuddle/gi, "G-Max-Befuddle"],
    [/g[- ]*max[- ]*cannonade/gi, "G-Max-Cannonade"],
    [/g[- ]*max[- ]*centiferno/gi, "G-Max-Centiferno"],
    [/g[- ]*max[- ]*chi[- ]*strike/gi, "G-Max-Chi-Strike"],
    [/g[- ]*max[- ]*cuddle/gi, "G-Max-Cuddle"],
    [/g[- ]*max[- ]*depletion/gi, "G-Max-Depletion"],
    [/g[- ]*max[- ]*drum[- ]*solo/gi, "G-Max-Drum-Solo"],
    [/g[- ]*max[- ]*finale/gi, "G-Max-Finale"],
    [/g[- ]*max[- ]*fireball/gi, "G-Max-Fireball"],
    [/g[- ]*max[- ]*foam[- ]*burst/gi, "G-Max-Foam-Burst"],
    [/g[- ]*max[- ]*gold[- ]*rush/gi, "G-Max-Gold-Rush"],
    [/g[- ]*max[- ]*gravitas/gi, "G-Max-Gravitas"],
    [/g[- ]*max[- ]*hydrosnipe/gi, "G-Max-Hydrosnipe"],
    [/g[- ]*max[- ]*malodor/gi, "G-Max-Malodor"],
    [/g[- ]*max[- ]*meltdown/gi, "G-Max-Meltdown"],
    [/g[- ]*max[- ]*one[- ]*blow/gi, "G-Max-One-Blow"],
    [/g[- ]*max[- ]*rapid[- ]*flow/gi, "G-Max-Rapid-Flow"],
    [/g[- ]*max[- ]*replenish/gi, "G-Max-Replenish"],
    [/g[- ]*max[- ]*resonance/gi, "G-Max-Resonance"],
    [/g[- ]*max[- ]*sandblast/gi, "G-Max-Sandblast"],
    [/g[- ]*max[- ]*smite/gi, "G-Max-Smite"],
    [/g[- ]*max[- ]*snooze/gi, "G-Max-Snooze"],
    [/g[- ]*max[- ]*steelsurge/gi, "G-Max-Steelsurge"],
    [/g[- ]*max[- ]*stonesurge/gi, "G-Max-Stonesurge"],
    [/g[- ]*max[- ]*stun[- ]*shock/gi, "G-Max-Stun-Shock"],
    [/g[- ]*max[- ]*sweetness/gi, "G-Max-Sweetness"],
    [/g[- ]*max[- ]*tartness/gi, "G-Max-Tartness"],
    [/g[- ]*max[- ]*terror/gi, "G-Max-Terror"],
    [/g[- ]*max[- ]*vine[- ]*lash/gi, "G-Max-Vine-Lash"],
    [/g[- ]*max[- ]*volcalith/gi, "G-Max-Volcalith"],
    [/g[- ]*max[- ]*volt[- ]*crash/gi, "G-Max-Volt-Crash"],
    [/g[- ]*max[- ]*wildfire/gi, "G-Max-Wildfire"],
    [/g[- ]*max[- ]*wind[- ]*rage/gi, "G-Max-Wind-Rage"],
    [/gastro[- ]*acid/gi, "Gastro-Acid"],
    [/gear[- ]*grind/gi, "Gear-Grind"],
    [/gear[- ]*up/gi, "Gear-Up"],
    [/genesis[- ]*supernova/gi, "Genesis-Supernova"],
    [/giga[- ]*drain/gi, "Giga-Drain"],
    [/giga[- ]*impact/gi, "Giga-Impact"],
    [/gigaton[- ]*hammer/gi, "Gigaton-Hammer"],
    [/gigavolt[- ]*havoc/gi, "Gigavolt-Havoc"],
    [/glacial[- ]*lance/gi, "Glacial-Lance"],
    [/glaive[- ]*rush/gi, "Glaive-Rush"],
    [/glitzy[- ]*glow/gi, "Glitzy-Glow"],
    [/grass[- ]*knot/gi, "Grass-Knot"],
    [/grass[- ]*pledge/gi, "Grass-Pledge"],
    [/grass[- ]*whistle/gi, "Grass-Whistle"],
    [/grassy[- ]*glide/gi, "Grassy-Glide"],
    [/grassy[- ]*terrain/gi, "Grassy-Terrain"],
    [/grav[- ]*apple/gi, "Grav-Apple"],
    [/guard[- ]*split/gi, "Guard-Split"],
    [/guard[- ]*swap/gi, "Guard-Swap"],
    [/guardian[- ]*of[- ]*alola/gi, "Guardian-of-Alola"],
    [/gunk[- ]*shot/gi, "Gunk-Shot"],
    [/gyro[- ]*ball/gi, "Gyro-Ball"],
    [/hammer[- ]*arm/gi, "Hammer-Arm"],
    [/happy[- ]*hour/gi, "Happy-Hour"],
    [/hard[- ]*press/gi, "Hard-Press"],
    [/head[- ]*charge/gi, "Head-Charge"],
    [/head[- ]*smash/gi, "Head-Smash"],
    [/headlong[- ]*rush/gi, "Headlong-Rush"],
    [/heal[- ]*bell/gi, "Heal-Bell"],
    [/heal[- ]*block/gi, "Heal-Block"],
    [/heal[- ]*order/gi, "Heal-Order"],
    [/heal[- ]*pulse/gi, "Heal-Pulse"],
    [/healing[- ]*wish/gi, "Healing-Wish"],
    [/heart[- ]*stamp/gi, "Heart-Stamp"],
    [/heart[- ]*swap/gi, "Heart-Swap"],
    [/heat[- ]*crash/gi, "Heat-Crash"],
    [/heat[- ]*wave/gi, "Heat-Wave"],
    [/heavy[- ]*slam/gi, "Heavy-Slam"],
    [/helping[- ]*hand/gi, "Helping-Hand"],
    [/hidden[- ]*power/gi, "Hidden-Power"],
    [/high[- ]*horsepower/gi, "High-Horsepower"],
    [/high[- ]*jump[- ]*kick/gi, "High-Jump-Kick"],
    [/hold[- ]*back/gi, "Hold-Back"],
    [/hold[- ]*hands/gi, "Hold-Hands"],
    [/hone[- ]*claws/gi, "Hone-Claws"],
    [/horn[- ]*attack/gi, "Horn-Attack"],
    [/horn[- ]*drill/gi, "Horn-Drill"],
    [/horn[- ]*leech/gi, "Horn-Leech"],
    [/hydro[- ]*cannon/gi, "Hydro-Cannon"],
    [/hydro[- ]*pump/gi, "Hydro-Pump"],
    [/hydro[- ]*steam/gi, "Hydro-Steam"],
    [/hydro[- ]*vortex/gi, "Hydro-Vortex"],
    [/hyper[- ]*beam/gi, "Hyper-Beam"],
    [/hyper[- ]*drill/gi, "Hyper-Drill"],
    [/hyper[- ]*fang/gi, "Hyper-Fang"],
    [/hyper[- ]*voice/gi, "Hyper-Voice"],
    [/hyperspace[- ]*fury/gi, "Hyperspace-Fury"],
    [/hyperspace[- ]*hole/gi, "Hyperspace-Hole"],
    [/ice[- ]*ball/gi, "Ice-Ball"],
    [/ice[- ]*beam/gi, "Ice-Beam"],
    [/ice[- ]*burn/gi, "Ice-Burn"],
    [/ice[- ]*fang/gi, "Ice-Fang"],
    [/ice[- ]*hammer/gi, "Ice-Hammer"],
    [/ice[- ]*punch/gi, "Ice-Punch"],
    [/ice[- ]*shard/gi, "Ice-Shard"],
    [/ice[- ]*spinner/gi, "Ice-Spinner"],
    [/icicle[- ]*crash/gi, "Icicle-Crash"],
    [/icicle[- ]*spear/gi, "Icicle-Spear"],
    [/icy[- ]*wind/gi, "Icy-Wind"],
    [/infernal[- ]*parade/gi, "Infernal-Parade"],
    [/inferno[- ]*overdrive/gi, "Inferno-Overdrive"],
    [/ion[- ]*deluge/gi, "Ion-Deluge"],
    [/iron[- ]*defense/gi, "Iron-Defense"],
    [/iron[- ]*head/gi, "Iron-Head"],
    [/iron[- ]*tail/gi, "Iron-Tail"],
    [/ivy[- ]*cudgel/gi, "Ivy-Cudgel"],
    [/jaw[- ]*lock/gi, "Jaw-Lock"],
    [/jet[- ]*punch/gi, "Jet-Punch"],
    [/jump[- ]*kick/gi, "Jump-Kick"],
    [/jungle[- ]*healing/gi, "Jungle-Healing"],
    [/karate[- ]*chop/gi, "Karate-Chop"],
    [/king[- ]*shield/gi, "King-Shield"],
    [/knock[- ]*off/gi, "Knock-Off"],
    [/kowtow[- ]*cleave/gi, "Kowtow-Cleave"],
    [/land[- ]*wrath/gi, "Land-Wrath"],
    [/laser[- ]*focus/gi, "Laser-Focus"],
    [/lash[- ]*out/gi, "Lash-Out"],
    [/last[- ]*resort/gi, "Last-Resort"],
    [/last[- ]*respects/gi, "Last-Respects"],
    [/lava[- ]*plume/gi, "Lava-Plume"],
    [/leaf[- ]*blade/gi, "Leaf-Blade"],
    [/leaf[- ]*storm/gi, "Leaf-Storm"],
    [/leaf[- ]*tornado/gi, "Leaf-Tornado"],
    [/leech[- ]*life/gi, "Leech-Life"],
    [/leech[- ]*seed/gi, "Leech-Seed"],
    [/lets[- ]*snuggle[- ]*forever/gi, "Lets-Snuggle-Forever"],
    [/life[- ]*dew/gi, "Life-Dew"],
    [/light[- ]*of[- ]*ruin/gi, "Light-of-Ruin"],
    [/light[- ]*screen/gi, "Light-Screen"],
    [/light[- ]*that[- ]*burns[- ]*the[- ]*sky/gi, "Light-That-Burns-the-Sky"],
    [/lock[- ]*on/gi, "Lock-On"],
    [/lovely[- ]*kiss/gi, "Lovely-Kiss"],
    [/low[- ]*kick/gi, "Low-Kick"],
    [/low[- ]*sweep/gi, "Low-Sweep"],
    [/lucky[- ]*chant/gi, "Lucky-Chant"],
    [/lumina[- ]*crash/gi, "Lumina-Crash"],
    [/lunar[- ]*blessing/gi, "Lunar-Blessing"],
    [/lunar[- ]*dance/gi, "Lunar-Dance"],
    [/luster[- ]*purge/gi, "Luster-Purge"],
    [/mach[- ]*punch/gi, "Mach-Punch"],
    [/magic[- ]*coat/gi, "Magic-Coat"],
    [/magic[- ]*powder/gi, "Magic-Powder"],
    [/magic[- ]*room/gi, "Magic-Room"],
    [/magical[- ]*leaf/gi, "Magical-Leaf"],
    [/magical[- ]*torque/gi, "Magical-Torque"],
    [/magma[- ]*storm/gi, "Magma-Storm"],
    [/magnet[- ]*bomb/gi, "Magnet-Bomb"],
    [/magnet[- ]*rise/gi, "Magnet-Rise"],
    [/magnetic[- ]*flux/gi, "Magnetic-Flux"],
    [/make[- ]*it[- ]*rain/gi, "Make-It-Rain"],
    [/malicious[- ]*moonsault/gi, "Malicious-Moonsault"],
    [/malignant[- ]*chain/gi, "Malignant-Chain"],
    [/mat[- ]*block/gi, "Mat-Block"],
    [/matcha[- ]*gotcha/gi, "Matcha-Gotcha"],
    [/max[- ]*airstream/gi, "Max-Airstream"],
    [/max[- ]*darkness/gi, "Max-Darkness"],
    [/max[- ]*flare/gi, "Max-Flare"],
    [/max[- ]*flutterby/gi, "Max-Flutterby"],
    [/max[- ]*geyser/gi, "Max-Geyser"],
    [/max[- ]*guard/gi, "Max-Guard"],
    [/max[- ]*hailstorm/gi, "Max-Hailstorm"],
    [/max[- ]*knuckle/gi, "Max-Knuckle"],
    [/max[- ]*lightning/gi, "Max-Lightning"],
    [/max[- ]*mindstorm/gi, "Max-Mindstorm"],
    [/max[- ]*ooze/gi, "Max-Ooze"],
    [/max[- ]*overgrowth/gi, "Max-Overgrowth"],
    [/max[- ]*phantasm/gi, "Max-Phantasm"],
    [/max[- ]*quake/gi, "Max-Quake"],
    [/max[- ]*rockfall/gi, "Max-Rockfall"],
    [/max[- ]*starfall/gi, "Max-Starfall"],
    [/max[- ]*steelspike/gi, "Max-Steelspike"],
    [/max[- ]*strike/gi, "Max-Strike"],
    [/max[- ]*wyrmwind/gi, "Max-Wyrmwind"],
    [/me[- ]*first/gi, "Me-First"],
    [/mean[- ]*look/gi, "Mean-Look"],
    [/mega[- ]*drain/gi, "Mega-Drain"],
    [/mega[- ]*kick/gi, "Mega-Kick"],
    [/mega[- ]*punch/gi, "Mega-Punch"],
    [/menacing[- ]*moonraze[- ]*maelstrom/gi, "Menacing-Moonraze-Maelstrom"],
    [/metal[- ]*burst/gi, "Metal-Burst"],
    [/metal[- ]*claw/gi, "Metal-Claw"],
    [/metal[- ]*sound/gi, "Metal-Sound"],
    [/meteor[- ]*assault/gi, "Meteor-Assault"],
    [/meteor[- ]*beam/gi, "Meteor-Beam"],
    [/meteor[- ]*mash/gi, "Meteor-Mash"],
    [/mighty[- ]*cleave/gi, "Mighty-Cleave"],
    [/milk[- ]*drink/gi, "Milk-Drink"],
    [/mind[- ]*blown/gi, "Mind-Blown"],
    [/mind[- ]*reader/gi, "Mind-Reader"],
    [/miracle[- ]*eye/gi, "Miracle-Eye"],
    [/mirror[- ]*coat/gi, "Mirror-Coat"],
    [/mirror[- ]*move/gi, "Mirror-Move"],
    [/mirror[- ]*shot/gi, "Mirror-Shot"],
    [/mist[- ]*ball/gi, "Mist-Ball"],
    [/misty[- ]*explosion/gi, "Misty-Explosion"],
    [/misty[- ]*terrain/gi, "Misty-Terrain"],
    [/moongeist[- ]*beam/gi, "Moongeist-Beam"],
    [/morning[- ]*sun/gi, "Morning-Sun"],
    [/mortal[- ]*spin/gi, "Mortal-Spin"],
    [/mountain[- ]*gale/gi, "Mountain-Gale"],
    [/mud[- ]*bomb/gi, "Mud-Bomb"],
    [/mud[- ]*shot/gi, "Mud-Shot"],
    [/mud[- ]*sport/gi, "Mud-Sport"],
    [/mud[- ]*slap/gi, "Mud-Slap"],
    [/muddy[- ]*water/gi, "Muddy-Water"],
    [/multi[- ]*attack/gi, "Multi-Attack"],
    [/mystical[- ]*fire/gi, "Mystical-Fire"],
    [/mystical[- ]*power/gi, "Mystical-Power"],
    [/nasty[- ]*plot/gi, "Nasty-Plot"],
    [/natural[- ]*gift/gi, "Natural-Gift"],
    [/nature[- ]*power/gi, "Nature-Power"],
    [/nature[- ]*madness/gi, "Nature-Madness"],
    [/needle[- ]*arm/gi, "Needle-Arm"],
    [/never[- ]*ending[- ]*nightmare/gi, "Never-Ending-Nightmare"],
    [/night[- ]*daze/gi, "Night-Daze"],
    [/night[- ]*shade/gi, "Night-Shade"],
    [/night[- ]*slash/gi, "Night-Slash"],
    [/no[- ]*retreat/gi, "No-Retreat"],
    [/noble[- ]*roar/gi, "Noble-Roar"],
    [/noxious[- ]*torque/gi, "Noxious-Torque"],
    [/oblivion[- ]*wing/gi, "Oblivion-Wing"],
    [/oceanic[- ]*operetta/gi, "Oceanic-Operetta"],
    [/odor[- ]*sleuth/gi, "Odor-Sleuth"],
    [/ominous[- ]*wind/gi, "Ominous-Wind"],
    [/order[- ]*up/gi, "Order-Up"],
    [/origin[- ]*pulse/gi, "Origin-Pulse"],
    [/pain[- ]*split/gi, "Pain-Split"],
    [/parabolic[- ]*charge/gi, "Parabolic-Charge"],
    [/parting[- ]*shot/gi, "Parting-Shot"],
    [/pay[- ]*day/gi, "Pay-Day"],
    [/perish[- ]*song/gi, "Perish-Song"],
    [/petal[- ]*blizzard/gi, "Petal-Blizzard"],
    [/petal[- ]*dance/gi, "Petal-Dance"],
    [/phantom[- ]*force/gi, "Phantom-Force"],
    [/photon[- ]*geyser/gi, "Photon-Geyser"],
    [/pika[- ]*papow/gi, "Pika-Papow"],
    [/pin[- ]*missile/gi, "Pin-Missile"],
    [/plasma[- ]*fists/gi, "Plasma-Fists"],
    [/play[- ]*nice/gi, "Play-Nice"],
    [/play[- ]*rough/gi, "Play-Rough"],
    [/poison[- ]*fang/gi, "Poison-Fang"],
    [/poison[- ]*gas/gi, "Poison-Gas"],
    [/poison[- ]*jab/gi, "Poison-Jab"],
    [/poison[- ]*powder/gi, "Poison-Powder"],
    [/poison[- ]*sting/gi, "Poison-Sting"],
    [/poison[- ]*tail/gi, "Poison-Tail"],
    [/pollen[- ]*puff/gi, "Pollen-Puff"],
    [/population[- ]*bomb/gi, "Population-Bomb"],
    [/powder[- ]*snow/gi, "Powder-Snow"],
    [/power[- ]*gem/gi, "Power-Gem"],
    [/power[- ]*shift/gi, "Power-Shift"],
    [/power[- ]*split/gi, "Power-Split"],
    [/power[- ]*swap/gi, "Power-Swap"],
    [/power[- ]*trick/gi, "Power-Trick"],
    [/power[- ]*trip/gi, "Power-Trip"],
    [/power[- ]*whip/gi, "Power-Whip"],
    [/power[- ]*up[- ]*punch/gi, "Power-Up-Punch"],
    [/precipice[- ]*blades/gi, "Precipice-Blades"],
    [/prismatic[- ]*laser/gi, "Prismatic-Laser"],
    [/psych[- ]*up/gi, "Psych-Up"],
    [/psychic[- ]*fangs/gi, "Psychic-Fangs"],
    [/psychic[- ]*noise/gi, "Psychic-Noise"],
    [/psychic[- ]*terrain/gi, "Psychic-Terrain"],
    [/psycho[- ]*boost/gi, "Psycho-Boost"],
    [/psycho[- ]*cut/gi, "Psycho-Cut"],
    [/psycho[- ]*shift/gi, "Psycho-Shift"],
    [/psyshield[- ]*bash/gi, "Psyshield-Bash"],
    [/pulverizing[- ]*pancake/gi, "Pulverizing-Pancake"],
    [/pyro[- ]*ball/gi, "Pyro-Ball"],
    [/quick[- ]*attack/gi, "Quick-Attack"],
    [/quick[- ]*guard/gi, "Quick-Guard"],
    [/quiver[- ]*dance/gi, "Quiver-Dance"],
    [/rage[- ]*fist/gi, "Rage-Fist"],
    [/rage[- ]*powder/gi, "Rage-Powder"],
    [/raging[- ]*bull/gi, "Raging-Bull"],
    [/raging[- ]*fury/gi, "Raging-Fury"],
    [/rain[- ]*dance/gi, "Rain-Dance"],
    [/rapid[- ]*spin/gi, "Rapid-Spin"],
    [/razor[- ]*leaf/gi, "Razor-Leaf"],
    [/razor[- ]*shell/gi, "Razor-Shell"],
    [/razor[- ]*wind/gi, "Razor-Wind"],
    [/reflect[- ]*type/gi, "Reflect-Type"],
    [/relic[- ]*song/gi, "Relic-Song"],
    [/revelation[- ]*dance/gi, "Revelation-Dance"],
    [/revival[- ]*blessing/gi, "Revival-Blessing"],
    [/rising[- ]*voltage/gi, "Rising-Voltage"],
    [/roar[- ]*of[- ]*time/gi, "Roar-of-Time"],
    [/rock[- ]*blast/gi, "Rock-Blast"],
    [/rock[- ]*climb/gi, "Rock-Climb"],
    [/rock[- ]*polish/gi, "Rock-Polish"],
    [/rock[- ]*slide/gi, "Rock-Slide"],
    [/rock[- ]*smash/gi, "Rock-Smash"],
    [/rock[- ]*throw/gi, "Rock-Throw"],
    [/rock[- ]*tomb/gi, "Rock-Tomb"],
    [/rock[- ]*wrecker/gi, "Rock-Wrecker"],
    [/role[- ]*play/gi, "Role-Play"],
    [/rolling[- ]*kick/gi, "Rolling-Kick"],
    [/sacred[- ]*fire/gi, "Sacred-Fire"],
    [/sacred[- ]*sword/gi, "Sacred-Sword"],
    [/salt[- ]*cure/gi, "Salt-Cure"],
    [/sand[- ]*attack/gi, "Sand-Attack"],
    [/sand[- ]*tomb/gi, "Sand-Tomb"],
    [/sandsear[- ]*storm/gi, "Sandsear-Storm"],
    [/sappy[- ]*seed/gi, "Sappy-Seed"],
    [/savage[- ]*spin[- ]*out/gi, "Savage-Spin-Out"],
    [/scale[- ]*shot/gi, "Scale-Shot"],
    [/scary[- ]*face/gi, "Scary-Face"],
    [/scorching[- ]*sands/gi, "Scorching-Sands"],
    [/searing[- ]*shot/gi, "Searing-Shot"],
    [/searing[- ]*sunraze[- ]*smash/gi, "Searing-Sunraze-Smash"],
    [/secret[- ]*power/gi, "Secret-Power"],
    [/secret[- ]*sword/gi, "Secret-Sword"],
    [/seed[- ]*bomb/gi, "Seed-Bomb"],
    [/seed[- ]*flare/gi, "Seed-Flare"],
    [/seismic[- ]*toss/gi, "Seismic-Toss"],
    [/self[- ]*destruct/gi, "Self-Destruct"],
    [/shadow[- ]*ball/gi, "Shadow-Ball"],
    [/shadow[- ]*bone/gi, "Shadow-Bone"],
    [/shadow[- ]*claw/gi, "Shadow-Claw"],
    [/shadow[- ]*force/gi, "Shadow-Force"],
    [/shadow[- ]*punch/gi, "Shadow-Punch"],
    [/shadow[- ]*sneak/gi, "Shadow-Sneak"],
    [/shattered[- ]*psyche/gi, "Shattered-Psyche"],
    [/shed[- ]*tail/gi, "Shed-Tail"],
    [/sheer[- ]*cold/gi, "Sheer-Cold"],
    [/shell[- ]*side[- ]*arm/gi, "Shell-Side-Arm"],
    [/shell[- ]*smash/gi, "Shell-Smash"],
    [/shell[- ]*trap/gi, "Shell-Trap"],
    [/shift[- ]*gear/gi, "Shift-Gear"],
    [/shock[- ]*wave/gi, "Shock-Wave"],
    [/shore[- ]*up/gi, "Shore-Up"],
    [/signal[- ]*beam/gi, "Signal-Beam"],
    [/silk[- ]*trap/gi, "Silk-Trap"],
    [/silver[- ]*wind/gi, "Silver-Wind"],
    [/simple[- ]*beam/gi, "Simple-Beam"],
    [/sinister[- ]*arrow[- ]*raid/gi, "Sinister-Arrow-Raid"],
    [/sizzly[- ]*slide/gi, "Sizzly-Slide"],
    [/skill[- ]*swap/gi, "Skill-Swap"],
    [/skitter[- ]*smack/gi, "Skitter-Smack"],
    [/skull[- ]*bash/gi, "Skull-Bash"],
    [/sky[- ]*attack/gi, "Sky-Attack"],
    [/sky[- ]*drop/gi, "Sky-Drop"],
    [/sky[- ]*uppercut/gi, "Sky-Uppercut"],
    [/slack[- ]*off/gi, "Slack-Off"],
    [/sleep[- ]*powder/gi, "Sleep-Powder"],
    [/sleep[- ]*talk/gi, "Sleep-Talk"],
    [/sludge[- ]*bomb/gi, "Sludge-Bomb"],
    [/sludge[- ]*wave/gi, "Sludge-Wave"],
    [/smack[- ]*down/gi, "Smack-Down"],
    [/smart[- ]*strike/gi, "Smart-Strike"],
    [/smelling[- ]*salts/gi, "Smelling-Salts"],
    [/snap[- ]*trap/gi, "Snap-Trap"],
    [/snipe[- ]*shot/gi, "Snipe-Shot"],
    [/soft[- ]*boiled/gi, "Soft-Boiled"],
    [/solar[- ]*beam/gi, "Solar-Beam"],
    [/solar[- ]*blade/gi, "Solar-Blade"],
    [/sonic[- ]*boom/gi, "Sonic-Boom"],
    [/soul[- ]*stealing[- ]*7[- ]*star[- ]*strike/gi, "Soul-Stealing-7-Star-Strike"],
    [/spacial[- ]*rend/gi, "Spacial-Rend"],
    [/sparkling[- ]*aria/gi, "Sparkling-Aria"],
    [/sparkly[- ]*swirl/gi, "Sparkly-Swirl"],
    [/spectral[- ]*thief/gi, "Spectral-Thief"],
    [/speed[- ]*swap/gi, "Speed-Swap"],
    [/spicy[- ]*extract/gi, "Spicy-Extract"],
    [/spider[- ]*web/gi, "Spider-Web"],
    [/spike[- ]*cannon/gi, "Spike-Cannon"],
    [/spiky[- ]*shield/gi, "Spiky-Shield"],
    [/spin[- ]*out/gi, "Spin-Out"],
    [/spirit[- ]*break/gi, "Spirit-Break"],
    [/spirit[- ]*shackle/gi, "Spirit-Shackle"],
    [/spit[- ]*up/gi, "Spit-Up"],
    [/splintered[- ]*stormshards/gi, "Splintered-Stormshards"],
    [/splishy[- ]*splash/gi, "Splishy-Splash"],
    [/springtide[- ]*storm/gi, "Springtide-Storm"],
    [/stealth[- ]*rock/gi, "Stealth-Rock"],
    [/steam[- ]*eruption/gi, "Steam-Eruption"],
    [/steel[- ]*beam/gi, "Steel-Beam"],
    [/steel[- ]*roller/gi, "Steel-Roller"],
    [/steel[- ]*wing/gi, "Steel-Wing"],
    [/sticky[- ]*web/gi, "Sticky-Web"],
    [/stoked[- ]*sparksurfer/gi, "Stoked-Sparksurfer"],
    [/stomping[- ]*tantrum/gi, "Stomping-Tantrum"],
    [/stone[- ]*axe/gi, "Stone-Axe"],
    [/stone[- ]*edge/gi, "Stone-Edge"],
    [/stored[- ]*power/gi, "Stored-Power"],
    [/storm[- ]*throw/gi, "Storm-Throw"],
    [/strange[- ]*steam/gi, "Strange-Steam"],
    [/strength[- ]*sap/gi, "Strength-Sap"],
    [/string[- ]*shot/gi, "String-Shot"],
    [/struggle[- ]*bug/gi, "Struggle-Bug"],
    [/stuff[- ]*cheeks/gi, "Stuff-Cheeks"],
    [/stun[- ]*spore/gi, "Stun-Spore"],
    [/subzero[- ]*slammer/gi, "Subzero-Slammer"],
    [/sucker[- ]*punch/gi, "Sucker-Punch"],
    [/sunny[- ]*day/gi, "Sunny-Day"],
    [/sunsteel[- ]*strike/gi, "Sunsteel-Strike"],
    [/super[- ]*fang/gi, "Super-Fang"],
    [/supercell[- ]*slam/gi, "Supercell-Slam"],
    [/supersonic[- ]*skystrike/gi, "Supersonic-Skystrike"],
    [/surging[- ]*strikes/gi, "Surging-Strikes"],
    [/sweet[- ]*kiss/gi, "Sweet-Kiss"],
    [/sweet[- ]*scent/gi, "Sweet-Scent"],
    [/swords[- ]*dance/gi, "Swords-Dance"],
    [/syrup[- ]*bomb/gi, "Syrup-Bomb"],
    [/tachyon[- ]*cutter/gi, "Tachyon-Cutter"],
    [/tail[- ]*glow/gi, "Tail-Glow"],
    [/tail[- ]*slap/gi, "Tail-Slap"],
    [/tail[- ]*whip/gi, "Tail-Whip"],
    [/take[- ]*down/gi, "Take-Down"],
    [/take[- ]*heart/gi, "Take-Heart"],
    [/tar[- ]*shot/gi, "Tar-Shot"],
    [/tearful[- ]*look/gi, "Tearful-Look"],
    [/techno[- ]*blast/gi, "Techno-Blast"],
    [/tectonic[- ]*rage/gi, "Tectonic-Rage"],
    [/teeter[- ]*dance/gi, "Teeter-Dance"],
    [/temper[- ]*flare/gi, "Temper-Flare"],
    [/tera[- ]*blast/gi, "Tera-Blast"],
    [/tera[- ]*starstorm/gi, "Tera-Starstorm"],
    [/terrain[- ]*pulse/gi, "Terrain-Pulse"],
    [/thousand[- ]*arrows/gi, "Thousand-Arrows"],
    [/thousand[- ]*waves/gi, "Thousand-Waves"],
    [/throat[- ]*chop/gi, "Throat-Chop"],
    [/thunder[- ]*cage/gi, "Thunder-Cage"],
    [/thunder[- ]*fang/gi, "Thunder-Fang"],
    [/thunder[- ]*punch/gi, "Thunder-Punch"],
    [/thunder[- ]*shock/gi, "Thunder-Shock"],
    [/thunder[- ]*wave/gi, "Thunder-Wave"],
    [/thunderous[- ]*kick/gi, "Thunderous-Kick"],
    [/tidy[- ]*up/gi, "Tidy-Up"],
    [/topsy[- ]*turvy/gi, "Topsy-Turvy"],
    [/torch[- ]*song/gi, "Torch-Song"],
    [/toxic[- ]*spikes/gi, "Toxic-Spikes"],
    [/toxic[- ]*thread/gi, "Toxic-Thread"],
    [/tri[- ]*attack/gi, "Tri-Attack"],
    [/trick[- ]*room/gi, "Trick-Room"],
    [/trick[- ]*or[- ]*treat/gi, "Trick-or-Treat"],
    [/triple[- ]*arrows/gi, "Triple-Arrows"],
    [/triple[- ]*axel/gi, "Triple-Axel"],
    [/triple[- ]*dive/gi, "Triple-Dive"],
    [/triple[- ]*kick/gi, "Triple-Kick"],
    [/trop[- ]*kick/gi, "Trop-Kick"],
    [/trump[- ]*card/gi, "Trump-Card"],
    [/twin[- ]*beam/gi, "Twin-Beam"],
    [/twinkle[- ]*tackle/gi, "Twinkle-Tackle"],
    [/u[- ]*turn/gi, "U-turn"],
    [/upper[- ]*hand/gi, "Upper-Hand"],
    [/v[- ]*create/gi, "V-create"],
    [/vacuum[- ]*wave/gi, "Vacuum-Wave"],
    [/veevee[- ]*volley/gi, "Veevee-Volley"],
    [/venom[- ]*drench/gi, "Venom-Drench"],
    [/victory[- ]*dance/gi, "Victory-Dance"],
    [/vine[- ]*whip/gi, "Vine-Whip"],
    [/vise[- ]*grip/gi, "Vise-Grip"],
    [/vital[- ]*throw/gi, "Vital-Throw"],
    [/volt[- ]*switch/gi, "Volt-Switch"],
    [/volt[- ]*tackle/gi, "Volt-Tackle"],
    [/wake[- ]*up[- ]*slap/gi, "Wake-Up-Slap"],
    [/water[- ]*gun/gi, "Water-Gun"],
    [/water[- ]*pledge/gi, "Water-Pledge"],
    [/water[- ]*pulse/gi, "Water-Pulse"],
    [/water[- ]*shuriken/gi, "Water-Shuriken"],
    [/water[- ]*sport/gi, "Water-Sport"],
    [/water[- ]*spout/gi, "Water-Spout"],
    [/wave[- ]*crash/gi, "Wave-Crash"],
    [/weather[- ]*ball/gi, "Weather-Ball"],
    [/wicked[- ]*blow/gi, "Wicked-Blow"],
    [/wicked[- ]*torque/gi, "Wicked-Torque"],
    [/wide[- ]*guard/gi, "Wide-Guard"],
    [/wild[- ]*charge/gi, "Wild-Charge"],
    [/wildbolt[- ]*storm/gi, "Wildbolt-Storm"],
    [/will[- ]*o[- ]*wisp/gi, "Will-O-Wisp"],
    [/wing[- ]*attack/gi, "Wing-Attack"],
    [/wonder[- ]*room/gi, "Wonder-Room"],
    [/wood[- ]*hammer/gi, "Wood-Hammer"],
    [/work[- ]*up/gi, "Work-Up"],
    [/worry[- ]*seed/gi, "Worry-Seed"],
    [/wring[- ]*out/gi, "Wring-Out"],
    [/x[- ]*scissor/gi, "X-Scissor"],
    [/zap[- ]*cannon/gi, "Zap-Cannon"],
    [/zen[- ]*headbutt/gi, "Zen-Headbutt"],
    [/zing[- ]*zap/gi, "Zing-Zap"],
    [/zippy[- ]*zap/gi, "Zippy-Zap"]
];
text = ((typeof text === "string") && text) || "\n";
text = text.replaceAll("é", "e");
for (const [pattern, replacement] of replacements) {
    text = text.replace(pattern, replacement);
}
const species = {
    "Bulbasaur": "A Grass/Poison-type Pokemon that starts with a plant bulb on its back, which grows as it evolves",
    "Ivysaur": "The evolved form of Bulbasaur; its plant begins to bloom and it gains strength",
    "Venusaur": "Final form of Bulbasaur; a massive Pokemon with a fully bloomed flower on its back",
    "Charmander": "A Fire-type lizard Pokemon with a flame on its tail that reflects its health",
    "Charmeleon": "Charmander's aggressive middle evolution with greater fire power",
    "Charizard": "Final evolution of Charmander; a Fire/Flying dragon-like Pokemon with powerful flames",
    "Squirtle": "A small Water-type turtle Pokemon known for its shell and water attacks",
    "Wartortle": "Squirtle's evolved form; gains fluffy tail and ears, showing its maturing power",
    "Blastoise": "Final form of Squirtle; has water cannons on its shell and great defensive power",
    "Caterpie": "A small Bug-type caterpillar Pokemon that evolves quickly",
    "Metapod": "Caterpie's cocoon-like evolution, preparing to become Butterfree",
    "Butterfree": "A butterfly Pokemon that uses powders and wind-based moves",
    "Weedle": "A Bug/Poison-type larva Pokemon with a sharp stinger",
    "Kakuna": "Weedle's cocoon stage before evolving into Beedrill",
    "Beedrill": "A fierce Bug/Poison-type with stingers on its arms and high speed",
    "Pidgey": "A common Normal/Flying-type bird Pokemon known for gusts and agility",
    "Pidgeotto": "Pidgey's evolved form; a larger and more powerful bird",
    "Pidgeot": "Final form of Pidgey; a majestic bird known for speed and aerial dominance",
    "Rattata": "A fast and aggressive Normal-type rodent Pokemon with sharp teeth",
    "Raticate": "Evolved Rattata with even stronger biting power and larger size",
    "Spearow": "A small, aggressive bird Pokemon known for its pecking and speed",
    "Fearow": "Spearow's evolution; a long-necked bird with fast and strong aerial attacks",
    "Ekans": "A purple snake Pokemon that coils around prey to immobilize them",
    "Arbok": "Ekans' evolved form; a powerful cobra Pokemon with an intimidating hood pattern",
    "Pikachu": "An Electric-type mouse Pokemon and franchise mascot known for its thunderbolt attacks",
    "Raichu": "The evolved form of Pikachu with enhanced electric power and speed",
    "Sandshrew": "A Ground-type armadillo Pokemon known for burrowing and curling up defensively",
    "Sandslash": "Sandshrew's evolution; uses sharp claws for slashing attacks",
    "Nidoran": "A small Poison-type Pokemon with gender differences; males and females evolve differently",
    "Nidorina": "Female Nidoran's second stage; calmer and more defensive",
    "Nidoqueen": "Final female Nidoran evolution; a bulky Poison/Ground-type with great defense",
    "Nidorino": "Male Nidoran's second stage; more aggressive and power-focused",
    "Nidoking": "Final male Nidoran evolution; a Poison/Ground powerhouse with a horn-based arsenal",
    "Clefairy": "A Fairy-type Pokemon that loves the moon and has magical, healing powers",
    "Clefable": "Evolved Clefairy; a mystical Pokemon with graceful movements and strong special abilities",
    "Vulpix": "A Fire-type fox Pokemon with six tails that curl as it matures",
    "Ninetales": "Vulpix's evolution; a majestic fox with mystical powers and a long lifespan",
    "Jigglypuff": "A round, pink Pokemon known for singing enemies to sleep",
    "Wigglytuff": "Jigglypuff's evolution; has a stretchy, soft body and strong vocal abilities",
    "Zubat": "A bat Pokemon that uses echolocation; often found in caves",
    "Golbat": "Zubat's evolved form; a larger bat with a loud screech and draining bite",
    "Oddish": "A Grass/Poison-type that resembles a walking plant bulb",
    "Gloom": "Oddish's evolution; emits a foul odor but has potent plant attacks",
    "Vileplume": "Final form of Oddish; has a large flower that releases sleep-inducing pollen",
    "Paras": "A Bug/Grass Pokemon with mushrooms growing on its back",
    "Parasect": "Evolved Paras; completely overtaken by the fungus it hosts",
    "Venonat": "A fuzzy Bug/Poison Pokemon with large eyes for night vision",
    "Venomoth": "Venonat's evolution; a moth Pokemon that scatters toxic powders",
    "Diglett": "A small Ground-type Pokemon that lives underground and pops up unexpectedly",
    "Dugtrio": "Three Digletts acting as one; known for digging at incredible speeds",
    "Meowth": "A cunning Normal-type feline known for its love of shiny things and ability to speak in the anime",
    "Persian": "Meowth's sleek evolution; a fast and elegant feline Pokemon",
    "Psyduck": "A Water-type duck Pokemon plagued by constant headaches that trigger psychic powers",
    "Golduck": "Psyduck's evolution; a sleek, strong swimmer with psychic abilities",
    "Mankey": "A Fighting-type monkey Pokemon known for its temper and agility",
    "Primeape": "Mankey's evolution; even more aggressive and faster in combat",
    "Growlithe": "A loyal Fire-type puppy Pokemon that protects its territory bravely",
    "Arcanine": "Growlithe's evolution; a majestic and powerful legendary-like Fire-type",
    "Poliwag": "A tadpole Pokemon with a swirl pattern on its belly and strong swimming skills",
    "Poliwhirl": "Poliwag's evolution; gains arms and more combat readiness",
    "Poliwrath": "Final Poliwag form; a Water/Fighting-type with muscular strength",
    "Abra": "A Psychic-type Pokemon that teleports away from danger instantly",
    "Kadabra": "Abra's evolution; stronger psychic powers and uses a spoon to channel them",
    "Alakazam": "Final form of Abra; has immense psychic power and a high intellect",
    "Machop": "A Fighting-type Pokemon with great potential strength",
    "Machoke": "Machop's evolution; muscular and often used in heavy labor",
    "Machamp": "Final form of Machop; has four arms and overwhelming combat power",
    "Bellsprout": "A Grass/Poison Pokemon with a flexible body and vine-based attacks",
    "Weepinbell": "Bellsprout's evolution; has a bell-shaped head that sprays acid",
    "Victreebel": "Final form of Bellsprout; uses its body to trap and digest prey",
    "Tentacool": "A jellyfish-like Water/Poison Pokemon with toxic tentacles",
    "Tentacruel": "Tentacool's evolution; has many tentacles and excels in aquatic combat",
    "Geodude": "A Rock/Ground Pokemon that looks like a floating rock with arms",
    "Graveler": "Geodude's evolution; bulkier and rolls down slopes to move",
    "Golem": "Final form of Geodude; a powerful, boulder-like Pokemon with explosive moves",
    "Ponyta": "A Fire-type horse Pokemon with a flaming mane",
    "Rapidash": "Ponyta's evolution; faster and more majestic with full body flames",
    "Slowpoke": "A Water/Psychic Pokemon known for its extremely slow reflexes",
    "Slowbro": "Slowpoke's evolution; gains enhanced psychic power from a Shellder on its tail",
    "Magnemite": "An Electric/Steel Pokemon that floats using magnetism",
    "Magneton": "Three Magnemite combined; amplifies electromagnetic power",
    "Farfetch'd": "A duck Pokemon with a leek used as a weapon and tool",
    "Doduo": "A two-headed bird Pokemon that can't fly but runs fast",
    "Dodrio": "Doduo's evolution; gains a third head and exceptional speed",
    "Seel": "A Water-type Pokemon with a horn on its head and smooth swimming",
    "Dewgong": "Seel's evolution; elegant and adapted for icy waters",
    "Grimer": "A Poison-type sludge Pokemon born from industrial waste",
    "Muk": "Grimer's evolution; even more toxic and amorphous",
    "Shellder": "A bivalve Water-type Pokemon that clamps onto things tightly",
    "Cloyster": "Shellder's evolution; has an impenetrable shell and strong ice attacks",
    "Gastly": "A Ghost/Poison Pokemon composed of gas; known for mischievous tricks",
    "Haunter": "Gastly's evolution; uses its hands and tongue to scare prey",
    "Gengar": "Final form of Gastly; a mischievous and dangerous Ghost-type",
    "Onix": "A massive Rock/Ground serpent Pokemon that tunnels underground",
    "Drowzee": "A Psychic-type Pokemon that eats dreams and induces sleep",
    "Hypno": "Drowzee's evolution; uses a pendulum to hypnotize targets",
    "Krabby": "A small Water-type crab Pokemon with strong pincers",
    "Kingler": "Krabby's evolution; has a massive claw and brute strength",
    "Voltorb": "A ball-shaped Electric-type Pokemon that resembles a Poke Ball and can explode",
    "Electrode": "Voltorb's evolution; even faster and more volatile when using self-destruct",
    "Exeggcute": "A group of six Psychic/Grass-type eggs that communicate telepathically",
    "Exeggutor": "Evolved Exeggcute; a walking tree with multiple psychic coconut heads",
    "Cubone": "A Ground-type Pokemon that wears its deceased mother's skull",
    "Marowak": "Cubone's evolution; a bone-wielding warrior with strong emotional resilience",
    "Hitmonlee": "A Fighting-type Pokemon with stretchy legs and powerful kicks",
    "Hitmonchan": "A Fighting-type Pokemon that punches rapidly like a boxer",
    "Lickitung": "A Normal-type Pokemon known for its incredibly long and sticky tongue",
    "Koffing": "A Poison-type gas ball that floats and emits toxic fumes",
    "Weezing": "Koffing's evolution; a dual-headed Poison-type that releases deadly gas",
    "Rhyhorn": "A Rock/Ground-type rhinoceros Pokemon with high physical power",
    "Rhydon": "Rhyhorn's evolution; a bipedal, armored powerhouse with a horn drill",
    "Chansey": "A rare Normal-type that carries a healing egg and aids the sick",
    "Tangela": "A Grass-type Pokemon covered in blue vines that constantly grow",
    "Kangaskhan": "A Normal-type Pokemon with a baby in its pouch; fiercely protective",
    "Horsea": "A Water-type seahorse Pokemon that shoots ink and swims skillfully",
    "Seadra": "Horsea's evolution; more aggressive with sharp spines and strong currents",
    "Goldeen": "A Water-type fish with a horn on its head and elegant swimming",
    "Seaking": "Goldeen's evolution; stronger and more territorial during mating season",
    "Staryu": "A star-shaped Water-type Pokemon with a glowing core",
    "Starmie": "Evolved Staryu; has psychic powers and a mysterious, colorful core",
    "Mime": "A Psychic/Fairy-type Pokemon that uses miming to create invisible walls",
    "Scyther": "A Bug/Flying-type Pokemon with scythe arms and lightning-fast slashes",
    "Jynx": "An Ice/Psychic-type humanoid Pokemon known for dance and psychic moves",
    "Electabuzz": "An Electric-type Pokemon that generates electricity with its body",
    "Magmar": "A Fire-type Pokemon with a flaming body and volatile temper",
    "Pinsir": "A Bug-type Pokemon with massive pincers used to crush foes",
    "Tauros": "A Normal-type bull Pokemon known for rampaging with three whipping tails",
    "Magikarp": "A weak Water-type fish that flops around, known for sudden powerful evolution",
    "Gyarados": "Magikarp's evolution; a ferocious Water/Flying serpentine Pokemon",
    "Lapras": "A gentle Water/Ice-type that ferries people across water and sings",
    "Ditto": "A Normal-type blob that can transform into any other Pokemon",
    "Eevee": "A Normal-type Pokemon with unstable genetics allowing multiple evolutions",
    "Vaporeon": "Water-type evolution of Eevee; has a sleek, aquatic body",
    "Jolteon": "Electric-type Eevee evolution with sharp fur charged with electricity",
    "Flareon": "Fire-type Eevee evolution with a fiery mane and high heat output",
    "Porygon": "A digital Pokemon made entirely of programming code with conversion powers",
    "Omanyte": "A revived Rock/Water fossil Pokemon resembling an ancient ammonite",
    "Omastar": "Omanyte's evolution; has deadly tentacles and a tough shell",
    "Kabuto": "A Rock/Water fossil Pokemon resembling a prehistoric horseshoe crab",
    "Kabutops": "Kabuto's evolution; a bipedal fossil predator with blade arms",
    "Aerodactyl": "A revived Rock/Flying fossil Pokemon that once ruled the skies",
    "Snorlax": "A massive Normal-type that sleeps constantly and only wakes to eat",
    "Articuno": "An Ice/Flying Legendary Bird with snowstorm wings and calming presence",
    "Zapdos": "An Electric/Flying Legendary Bird that creates thunderclouds when flying",
    "Moltres": "A Fire/Flying Legendary Bird that brings early spring with fiery wings",
    "Dratini": "A rare Dragon-type serpent Pokemon that sheds its skin regularly",
    "Dragonair": "Dratini's evolution; elegant and emits a mystical aura",
    "Dragonite": "Final Dragon evolution; a kind-hearted but powerful Dragon/Flying-type",
    "Mewtwo": "A genetically-engineered Psychic-type with immense power and intellect",
    "Mew": "A mythical Psychic-type with the DNA of all Pokemon and playful demeanor",
    "Chikorita": "A Grass-type starter Pokemon with a leafy head and calm nature",
    "Bayleef": "Chikorita's evolution; has a spicy-scented leaf and healing presence",
    "Meganium": "Final Chikorita evolution; emits a calming aroma and heals life",
    "Cyndaquil": "A timid Fire-type starter that ignites flames on its back when scared",
    "Quilava": "Cyndaquil's evolution; faster and more skilled in controlling fire",
    "Typhlosion": "Final Cyndaquil evolution; erupts in explosive fire when enraged",
    "Totodile": "A Water-type starter with a playful bite and strong jaw",
    "Croconaw": "Totodile's evolution; bulkier and uses its powerful bite in combat",
    "Feraligatr": "Final Totodile evolution; a massive, ferocious crocodile with crushing jaws",
    "Sentret": "A Normal-type scout Pokemon that stands upright to spot danger",
    "Furret": "Sentret's evolution; a long, fast-moving Pokemon that fits in tight spaces",
    "Hoothoot": "A Normal/Flying-type owl Pokemon with excellent timing and dual legs",
    "Noctowl": "Hoothoot's evolution; a nocturnal flyer with enhanced vision and psychic traits",
    "Ledyba": "A Bug/Flying-type ladybug Pokemon that thrives in groups",
    "Ledian": "Ledyba's evolution; uses its fists and shines like a star at night",
    "Spinarak": "A Bug/Poison spider Pokemon that spins intricate webs to trap prey",
    "Ariados": "Spinarak's evolution; uses thread to ensnare and disable foes",
    "Crobat": "Zubat's final evolution; a swift, four-winged bat with silent flight",
    "Chinchou": "A Water/Electric Pokemon with antennae that emit light and electricity",
    "Lanturn": "Chinchou's evolution; called the 'Light Pokemon' for its glowing lure",
    "Pichu": "Baby Electric-type; Pikachu's pre-evolution that shocks when excited",
    "Cleffa": "A baby Fairy-type that dances joyfully under starlight",
    "Igglybuff": "Jigglypuff's baby form; sings softly and has an extremely bouncy body",
    "Togepi": "A small Fairy-type that stores happiness and spreads joy",
    "Togetic": "Togepi's evolution; spreads happiness and flies using small wings",
    "Natu": "A small Psychic/Flying bird that gazes steadily and predicts movements",
    "Xatu": "Natu's evolution; can see past and future simultaneously",
    "Mareep": "An Electric-type sheep Pokemon with static-charged wool",
    "Flaaffy": "Mareep's evolution; wool sheds for better electricity control",
    "Ampharos": "Final Mareep evolution; emits a bright beacon light from its tail",
    "Bellossom": "Oddish's alternate evolution; a cheerful, dancing Grass-type",
    "Marill": "A Water/Fairy mouse Pokemon with a buoyant tail",
    "Azumarill": "Marill's evolution; uses water power and has a huge defense boost",
    "Sudowoodo": "A Rock-type disguised as a tree to avoid detection",
    "Politoed": "A Poliwag alternate evolution; a frog Pokemon that leads others by croaking",
    "Hoppip": "A Grass/Flying Pokemon that drifts with the wind using its cotton-like body",
    "Skiploom": "Hoppip's evolution; blooms in warm sunlight and floats around",
    "Jumpluff": "Final Hoppip evolution; uses cotton spores to travel great distances",
    "Aipom": "A mischievous Normal-type monkey with a hand-like tail",
    "Sunkern": "A Grass-type seed Pokemon that absorbs sunlight but is very weak",
    "Sunflora": "Sunkern's evolution; blooms in sunlight and converts rays into energy",
    "Yanma": "A Bug/Flying dragonfly Pokemon with rapid wingbeats and sharp vision",
    "Wooper": "A Water/Ground amphibian Pokemon with a carefree smile",
    "Quagsire": "Wooper's evolution; a laid-back Water/Ground-type with high endurance",
    "Espeon": "Psychic-type Eevee evolution; elegant and highly intelligent",
    "Umbreon": "Dark-type Eevee evolution; glows at night and strikes stealthily",
    "Murkrow": "A Dark/Flying Pokemon that resembles a witch and brings bad luck",
    "Slowking": "A Slowpoke evolution with enhanced intelligence from a Shellder bite",
    "Misdreavus": "A Ghost-type Pokemon that feeds on fear and enjoys scaring others",
    "Unown": "A mysterious Psychic-type shaped like letters; has hidden powers",
    "Wobbuffet": "A Psychic-type Pokemon that counters attacks with powerful reflections using its tail",
    "Girafarig": "A Normal/Psychic giraffe-like Pokemon with a head on its tail that has its own mind",
    "Pineco": "A Bug-type conifer cone Pokemon that silently waits to explode",
    "Forretress": "Pineco's evolution; a Bug/Steel fortress with a sturdy shell and spiked defense",
    "Dunsparce": "A Normal-type serpentine Pokemon with drill-like tail and elusive behavior",
    "Gligar": "A Ground/Flying scorpion-like Pokemon that glides silently at night",
    "Steelix": "An Steel/Ground metal serpent; evolution of Onix hardened by trade",
    "Snubbull": "A Fairy-type bulldog Pokemon with fierce appearance but loving heart",
    "Granbull": "Snubbull's evolution; larger and stronger, protects loved ones fiercely",
    "Qwilfish": "A Water/Poison pufferfish Pokemon that inflates and spreads toxic spikes",
    "Scizor": "A Bug/Steel scorpion-like evolution of Scyther with powerful pincers and armor",
    "Shuckle": "A Bug/Rock turtle Pokemon that stores berries to produce juice in its shell",
    "Heracross": "A Bug/Fighting rhinoceros beetle Pokemon known for charging with its horn",
    "Sneasel": "A Dark/Ice weasel Pokemon that strikes silently with claws and speed",
    "Teddiursa": "A small Normal-type bear cub that collects honey from trees",
    "Ursaring": "Teddiursa's evolution; a powerful bear with devastating strength and instincts",
    "Slugma": "A Fire-type magma slug Pokemon that drips molten lava",
    "Magcargo": "Slugma's evolution; a Fire/Rock Pokemon with a cooling yet still-hot shell",
    "Swinub": "A small Ground/Ice boar Pokemon that roots through snow with its snout",
    "Piloswine": "Swinub's evolution; large and shaggy, it uses tusks to dig through ice",
    "Corsola": "A dual Water/Rock coral Pokemon that thrives in warm coastal waters",
    "Remoraid": "A Water-type fish Pokemon that shoots high-pressure water from its mouth",
    "Octillery": "Remoraid's evolution; an octopus Pokemon that fires ink and water bombs",
    "Delibird": "A Ice/Flying penguin-like Pokemon that delivers food in its tail sack",
    "Mantine": "A Water/Flying manta ray Pokemon that glides gracefully in groups",
    "Skarmory": "A Steel/Flying metallic bird Pokemon with razor-sharp wings",
    "Houndour": "A Dark/Fire puppy Pokemon that hunts in packs and uses fire bones",
    "Houndoom": "Houndour's evolution; a Dark/Fire canine with infernal breath and horns",
    "Kingdra": "A Water/Dragon seahorse Pokemon that evolves from Horsea line in seas",
    "Phanpy": "A small Ground-type elephant Pokemon with adorable trunk and playful nature",
    "Donphan": "Phanpy's evolution; a tank-like Ground-type with rolling attacks and armor",
    "Porygon2": "A digitally enhanced Normal-type evolution of Porygon with upgraded code",
    "Stantler": "A Normal-type deer Pokemon with antlers that manipulate space via beams",
    "Smeargle": "A Normal-type painter Pokemon that uses tail to sketch unique moves",
    "Tyrogue": "A Fighting-type baby Pokemon that evolves into one of the fighting trio",
    "Hitmontop": "A Fighting-type Pokemon that spins on its head and pivots to strike",
    "Smoochum": "A Baby Ice/Psychic Pokemon and pre-evolution of Jynx that practices kisses",
    "Elekid": "An Electric-type baby Pokemon that sparks with high-voltage generators",
    "Magby": "A Fire-type baby Pokemon that breathes hot flames from its navel",
    "Miltank": "A Normal-type cow Pokemon that produces nutritious milk and strong kicks",
    "Blissey": "A Normal-type evolution of Chansey; extremely caring, emits healing aura",
    "Raikou": "A Legendary Electric-type tiger that represents sudden storms and lightning",
    "Entei": "A Legendary Fire-type canine that embodies volcanic eruptions and courage",
    "Suicune": "A Legendary Water-type feline that purifies water and roams gracefully",
    "Larvitar": "A Rock/Ground larva Pokemon that eats rocks and grows fiercely",
    "Pupitar": "Larvitar's cocoon stage; a Rock/Ground pup wrapped in hard shell",
    "Tyranitar": "Final evolution of Larvitar; a Rock/Dark powerhouse wrecking landscapes",
    "Lugia": "A Legendary Psychic/Flying guardian of seas and master of storms",
    "Ho-oh": "A Legendary Fire/Flying phoenix-like Pokemon that revives others with rainbow flames",
    "Celebi": "A Mythical Psychic/Grass time-traveling Pokemon that heals forests",
    "Treecko": "A Grass-type gecko starter with sticky tail and forest agility",
    "Grovyle": "Treecko's evolution; slender and fast, fights with sword-like tail",
    "Sceptile": "Final Treecko evolution; sharp leaf blades and climbing speed",
    "Torchic": "A Fire-type chick starter with warm feathers and combat spirit",
    "Combusken": "Torchic's evolution; fighting-fire hybrid that kicks with burning force",
    "Blaziken": "Final Torchic evolution; a Fire/Fighting phoenix that leaps in blasts",
    "Mudkip": "A Water-type starter amphibian known for strong tidal arms",
    "Marshtomp": "Mudkip's evolution; Water/Ground type that thrives in mud",
    "Swampert": "Final Mudkip evolution; a Water/Ground behemoth with seismic might",
    "Poochyena": "A Normal-type hyena pup Pokemon that travels in pack shadows",
    "Mightyena": "Poochyena's evolution; a pack leader with menacing howl",
    "Zigzagoon": "A Normal-type raccoon Pokemon that zigzags and scavenges",
    "Linoone": "Zigzagoon's evolution; fast and sleek, excellent at parcel delivery",
    "Wurmple": "A Bug-type larva Pokemon that evolves unpredictably based on lineage",
    "Silcoon": "Wurmple's silken cocoon stage preparing for butterfly form",
    "Beautifly": "A Bug/Flying evolution of Wurmple line; flutters with toxic powder",
    "Cascoon": "Wurmple's alternate cocoon stage before evolving into Dustox",
    "Dustox": "A Bug/Poison moth Pokemon; flutters under moonlight with powder defence",
    "Lotad": "A Water/Grass lily pad Pokemon that floats atop still lakes",
    "Lombre": "Lotad's evolution; Water/Grass type that dances in swamps",
    "Ludicolo": "Final Lotad evolution; cheerful Water/Grass Pokemon with rhythm moves",
    "Seedot": "A Grass-type acorn Pokemon that enjoys collecting sunlight on trees",
    "Nuzleaf": "Seedot's evolution; a Grass/Dark forest trickster with a leaf hat",
    "Shiftry": "Final Seedot evolution; Grass/Dark ninja-like with fan leaf fans",
    "Taillow": "A Normal/Flying swallow Pokemon that migrates in flocks",
    "Swellow": "Taillow's evolution; fast and fearless aerial attacker",
    "Wingull": "A Water/Flying gull Pokemon that glides above sea in pairs",
    "Pelipper": "Wingull's evolution; a seafaring gull that carries prey in its beak pouch",
    "Ralts": "A Psychic/Fairy youth Pokemon that senses emotions in the air",
    "Kirlia": "Ralts's evolution; graceful Psychic/Fairy dancing partner",
    "Gardevoir": "Final Ralts evolution; Psychic/Fairy that protects with powerful aura",
    "Surskit": "A Bug/Water mosquito-like Pokemon that skates on water",
    "Masquerain": "Surskit's evolution; Bug/Flying with ornate wings and hypnotic gaze",
    "Shroomish": "A Grass-type mushroom Pokemon that emits spores around itself",
    "Breloom": "Final Shroomish evolution; Grass/Fighting that delivers spore punches",
    "Slakoth": "A Normal-type sloth Pokemon that sleeps up to 20 hours a day",
    "Vigoroth": "Slakoth's evolution; hyperactive and energetic, never stops moving",
    "Slaking": "Final Slakoth evolution; incredibly lazy yet extremely powerful",
    "Nincada": "A Bug/Ground nymph that lives underground and sheds shell to evolve",
    "Ninjask": "Nincada's evolution; Bug/Flying ninja Pokemon with amazing speed",
    "Shedinja": "An empty shell left by Nincada; Bug/Ghost with strange shell-based life",
    "Whismur": "A timid Normal-type mouse Pokemon that whispers loudly when startled",
    "Loudred": "Whismur's evolution; uses its large ears to emit powerful sound blasts",
    "Exploud": "Final Whismur evolution; Normal-type with sonar boom mouth for explosive sound attacks",
    "Makuhita": "A Fighting-type child wrestler Pokemon that trains by lifting logs",
    "Hariyama": "Makuhita's evolution; a massive sumo wrestler Pokemon with heavy slaps",
    "Azurill": "A baby Normal/Fairy mouse Pokemon with a water-filled tail bubble",
    "Nosepass": "A Rock-type Pokemon based on compass needle with magnetic nose",
    "Skitty": "A playful Normal-type kitten Pokemon that loves to dance",
    "Delcatty": "Skitty's evolution; a graceful feline with calm aura and stretchy tail",
    "Sableye": "A Dark/Ghost-type Pokemon that lives in caves, feeds on gems, with mischievous grin",
    "Mawile": "A Steel/Fairy-type with a huge jaw on its head that snaps up attackers",
    "Aron": "A Rock/Steel-type baby Pokemon with a strong iron armor shell",
    "Lairon": "Aron's evolution; heavily armored Rock/Steel-type that charges with horns",
    "Aggron": "Final Aron line evolution; towering Rock/Steel guardian with immense strength",
    "Meditite": "A Fighting/Psychic-type that trains its body and spirit through meditation",
    "Medicham": "Meditite's evolution; uses meditation to enhance both physical and psychic power",
    "Electrike": "An Electric-type puppy Pokemon that generates sparks on its fur",
    "Manectric": "Electrike's evolution; swift Electric-type with a mane that channels electricity",
    "Plusle": "An Electric-type ‘cheering' Pokemon that energizes others with positive charge",
    "Minun": "An Electric-type counterpart to Plusle that supports teammates with negative charge",
    "Volbeat": "A Bug-type firefly Pokemon that guides lights to attract friends",
    "Illumise": "A Bug-type companion to Volbeat that uses lights to court and guide others",
    "Roselia": "A Poison/Grass-type with floral arms that release toxic pollen",
    "Gulpin": "A Poison-type blob Pokemon that swallows anything, using a filtering organ",
    "Swalot": "Gulpin's evolution; a larger Poison-type that absorbs prey whole",
    "Carvanha": "A Water/Dark piranha-like Pokemon that bites prey aggressively",
    "Sharpedo": "Carvanha's evolution; a torpedo-like Water/Dark shark with deadly speed",
    "Wailmer": "A large Water-type whale Pokemon that floats and spouts water joyfully",
    "Wailord": "Wailmer's evolution; the massive whale Pokemon that creates huge waves",
    "Numel": "A Fire/Ground camel Pokemon with a volcano erupting on its hump",
    "Camerupt": "Numel's evolution; a giant Fire/Ground volcano-hump Pokemon with dual peaks",
    "Torkoal": "A Fire-type turtle Pokemon that creates heavy smoke from its shell vents",
    "Spoink": "A Psychic-type pig that bounces to keep its heart beating",
    "Grumpig": "Spoink's evolution; uses its pearl and psychic power to control emotions",
    "Spinda": "A Normal-type Pokemon with dizzying, unique swirly spot patterns",
    "Trapinch": "A Ground-type antlion larva that digs traps to catch prey",
    "Vibrava": "Trapinch's evolution; Ground/Dragon that uses vibrating wings to attack",
    "Flygon": "Final Trapinch evolution; a Dragon/Ground 'desert dragon' that flutters silently",
    "Cacnea": "A Grass-type cactus Pokemon that stores water in its body and attacks with needles",
    "Cacturne": "Cacnea's evolution; a Grass/Dark-type cactus that hunts at night",
    "Swablu": "A Normal/Flying fluffy bird Pokemon that looks like a cotton ball",
    "Altaria": "Swablu's evolution; a Dragon/Flying Pokemon with cloud-like wings and melodic voice",
    "Zangoose": "A Normal-type mongoose Pokemon that battles Seviper fiercely with claw slash",
    "Seviper": "A Poison-type snake Pokemon with blade-like tail, rivals Zangoose",
    "Lunatone": "A Rock/Psychic moon-shaped Pokemon that appears during the night",
    "Solrock": "A Rock/Psychic sun-shaped Pokemon that radiates heat and light",
    "Barboach": "A Water/Ground fish Pokemon with whiskers that senses currents",
    "Whiscash": "Barboach's evolution; a Water/Ground catfish with seismic wave ability",
    "Corphish": "A Water-type lobster Pokemon that fights with powerful claws",
    "Crawdaunt": "Corphish's evolution; Water/Dark crab Pokemon with star on its head",
    "Baltoy": "A Ground/Psychic clay doll Pokemon that spins to move and levitate",
    "Claydol": "Baltoy's evolution; a multi-limbed Psychic UFO doll that levitates mysteriously",
    "Lileep": "A Rock/Grass fossil Pokemon resembling a sea lily that filters plankton",
    "Cradily": "Lileep's evolution; a tentacled Rock/Grass fossil that anchors to seabeds",
    "Anorith": "A Rock/Bug fossil Pokemon resembling an ancient sand crab",
    "Armaldo": "Anorith's evolution; Rock/Bug predator with powerful claws and shell",
    "Feebas": "A weak-looking Water-type fish that often hides in murky waters",
    "Milotic": "Feebas's evolution; a beautiful Water-type serpent known for calming power",
    "Castform": "A Normal-type weather Pokemon that changes form depending on weather",
    "Kecleon": "A Normal-type chameleon Pokemon that changes color to blend in",
    "Shuppet": "A Ghost-type puppet Pokemon that gathers energy to haunt",
    "Banette": "A Ghost-type doll Pokemon possessed by a grudge-filled spirit",
    "Duskull": "A Ghost-type skull-masked Pokemon that roams quietly through shadows",
    "Dusclops": "Duskull's evolution; a Ghost-type with a singular eye and hollow torso",
    "Tropius": "A Grass/Flying dinosaur-like Pokemon with fruit growing on its neck",
    "Chimecho": "A Psychic-type chime bell Pokemon that resonates tunes in the wind",
    "Absol": "A Dark-type disaster-predicting Pokemon with a white mane and scythe tail",
    "Wynaut": "A Baby Psychic-type that loves to upset foes with Mirror Coat",
    "Snorunt": "An Ice-type Pokemon that thrives in snowy mountains and hides its face",
    "Glalie": "Snorunt's evolution; a floating Ice-type with a hardened frozen body",
    "Spheal": "A round Water/Ice seal Pokemon that claps its flippers happily",
    "Sealeo": "Spheal's evolution; larger and sings loudly in icy habitats",
    "Walrein": "Final Spheal line evolution; massive Water/Ice walrus Pokemon with tusks",
    "Clamperl": "A Water-type bivalve Pokemon that transforms over time inside shell",
    "Huntail": "A Clamperl evolution; a Water-type deep-sea predator with lure tail",
    "Gorebyss": "Clamperl's alternate evolution; a slender Water-type that swims gracefully",
    "Relicanth": "A Rock/Water ancient fish Pokemon unchanged for millions of years",
    "Luvdisc": "A Water-type heart-shaped fish known for spreading love in hearts",
    "Bagon": "A Dragon-type rock-solid Pokemon that dreams of flying",
    "Shelgon": "Bagon's evolution; a rock-armored Dragon-type preparing to take flight",
    "Salamence": "Final Bagon line evolution; a Dragon/Flying powerhouse with majestic wings",
    "Beldum": "A Steel/Psychic alien Pokemon with a magnet on its head and a single eye",
    "Metang": "Beldum's evolution; a Steel/Psychic twin-bodied trainer Pokemon",
    "Metagross": "Final Beldum line evolution; a Steel/Psychic supercomputer-like behemoth",
    "Regirock": "A Legendary Rock golem sealed in desert temple using Braille dots",
    "Regice": "A Legendary Ice golem preserved in glaciers with incredible cold",
    "Registeel": "A Legendary Steel golem hidden in forest mountain, virtually indestructible",
    "Latias": "A Psychic/Dragon Legendary that can telepathically communicate and fly with speed",
    "Latios": "Complementary to Latias; Psychic/Dragon Legendary with telepathic prowess and swift flight",
    "Kyogre": "A Legendary Water whale that expands seas and controls oceanic storms",
    "Groudon": "A Legendary Ground-dinosaur that expands lands and dries seas",
    "Rayquaza": "A Legendary Dragon/Flying sky serpent that calms Kyogre and Groudon in ozone layer",
    "Jirachi": "A Mythical Steel/Psychic wish-granting Pokemon that awakens for a week per millennium",
    "Deoxys": "A Mythical Psychic-type with multiple forms representing DNA-based extraterrestrial power",
    "Turtwig": "A Grass-type turtle starter that creates soil and sprouts plant on its head",
    "Grotle": "Turtwig's evolution; larger Grass-type with shrubs growing on its back",
    "Torterra": "Final Turtwig line evolution; Grass/Ground turtle with forest on its shell",
    "Chimchar": "A Fire-type monkey starter with flame on its tail and playful spirit",
    "Monferno": "Chimchar's evolution; Fire/Fighting monkey with fiery limb attacks",
    "Infernape": "Final Chimchar line evolution; Fire/Fighting ape with blazing martial arts",
    "Piplup": "A Water-type penguin starter known for pride and powerful water moves",
    "Prinplup": "Piplup's evolution; regal Water-type with improved swimming prowess",
    "Empoleon": "Final Piplup line evolution; Water/Steel emperor penguin Pokemon with trident wings",
    "Starly": "A Normal/Flying bird starter with bold attitude and high chirp",
    "Staravia": "Starly's evolution; Rowdy bird Pokemon that fights in flocks",
    "Staraptor": "Final Starly line evolution; fierce Normal/Flying raptor with powerful attacks",
    "Bidoof": "A Normal-type beaver Pokemon that builds dams and acts cheerfully",
    "Bibarel": "Bidoof's evolution; Normal/Water builder with strong jaws and flattened tail",
    "Kricketot": "A Bug-type cricket Pokemon that chirps rhythmically from its horns",
    "Kricketune": "A Bug-type cricket Pokemon with musical antennae used to create rhythmic chirps",
    "Shinx": "An Electric-type kitten Pokemon whose sparks glow brighter as it grows stronger",
    "Luxio": "Shinx's evolution; an Electric-type feline that recklessly attacks with charged claws",
    "Luxray": "Final Luxio evolution; an Electric-type lion with sight through opaque objects",
    "Budew": "A small Grass/Poison flower bud Pokemon that blooms in clean air",
    "Roserade": "Roserade; a Grass/Poison rose Pokemon that attacks with poison-tipped bouquet",
    "Cranidos": "A Rock-type fossil dinosaur Pokemon with a hard skull used for headbutts",
    "Rampardos": "Cranidos's evolution; a Rock-type powerhouse with the hardest skull ever measured",
    "Shieldon": "A Rock/Steel fossil Pokemon that uses a shielded face to block attacks",
    "Bastiodon": "Shieldon's evolution; a Rock/Steel defensive wall with a heavy plated head",
    "Burmy": "A small Bug-type cloak Pokemon that changes form based on its environment",
    "Wormadam": "Burmy's evolution; a Bug/Grass or Bug/Steel cloak Pokemon adapting to habitat",
    "Mothim": "Male Burmy's evolution; a Bug/Flying moth Pokemon attracted to bright lights",
    "Combee": "A small Bug/Flying bee Pokemon with three hexagonal bodies and honeycomb pattern",
    "Vespiquen": "Queen of the Combee; a Bug/Flying hive commander with territorial stinger swarms",
    "Pachirisu": "An Electric-type squirrel Pokemon known for its energetic tail and bolt-shaped mark",
    "Buizel": "An Electric/Water weasel Pokemon with flotation collar that aids swimming",
    "Floatzel": "Buizel's evolution; a sleek Water-type swimmer with floating collar and agility",
    "Cherubi": "A small Grass-type cherry Pokemon with two fruit on its stem",
    "Cherrim": "Cherubi's evolution; changes form under the sun to display a sunny petal cloak",
    "Shellos": "A Water-type sea slug Pokemon with two regional forms, east and west coast",
    "Gastrodon": "Shellos's evolution; a Water/Ground sea slug with slug-like, dual-region appearances",
    "Ambipom": "A Normal-type monkey Pokemon with two tails used like extra hands",
    "Drifloon": "A Ghost/Flying balloon Pokemon that carries children away with ghostly strings",
    "Drifblim": "Drifloon's evolution; a giant ghost balloon that drifts through the sky",
    "Buneary": "A Normal-type rabbit Pokemon with fluffy ears and a hopping combat style",
    "Lopunny": "Buneary's evolution; a Normal-type elegant rabbit that fights with strong kicks",
    "Mismagius": "A Ghost-type witch-like Pokemon that casts curses and mystical chants",
    "Honchkrow": "A Dark/Flying crow Pokemon leading murkrow flocks and controlling the skies",
    "Glameow": "A Normal-type cat Pokemon boasting stylish fur and competitive temperament",
    "Purugly": "Glameow's evolution; a bulky feline Pokemon self-confident and physically powerful",
    "Chingling": "A baby Psychic-type bell Pokemon that resonates based on emotions and sound",
    "Stunky": "A Poison/Dark skunk Pokemon that sprays a foul-smelling fluid in defense",
    "Skuntank": "Stunky's evolution; a larger Poison/Dark skunk with more potent spray and aggression",
    "Bronzor": "A Steel/Psychic metal disc Pokemon that floats and uses ancient chakra energy",
    "Bronzong": "Bronzor's evolution; a Steel/Psychic bell-shaped Pokemon that summons wind and rain",
    "Bonsly": "A Rock-type baby bonsai tree mimic that feigns crying to trick others",
    "Mime-Jr": "A Baby Psychic/Fairy that mimics gestures and practices pantomime",
    "Happiny": "A Baby Normal-type Pokemon that loves stones and carries an egg in its pouch",
    "Chatot": "A Normal/Flying parrot Pokemon that copies speech and melody perfectly",
    "Spiritomb": "A Ghost/Dark amalgam of 108 spirits bound to a keystone",
    "Gible": "A Dragon/Ground shark-like Pokemon that burrows and seeks strong opponents",
    "Gabite": "Gible's evolution; faster and more aggressive with sharp claws and glider wings",
    "Garchomp": "Final Gible line; a Dragon/Ground pseudo-legendary with supersonic flight capability",
    "Munchlax": "A Normal-type baby Pokemon with insatiable appetite that becomes Snorlax evolution",
    "Riolu": "A Fighting-type baby Pokemon that gains aura powers under loving training",
    "Lucario": "Riolu's evolution; a Fighting/Steel aural detector that reads thoughts and energy",
    "Hippopotas": "A Ground-type hippo Pokemon that burrows in sand to stay cool",
    "Hippowdon": "Hippopotas's evolution; a massive Ground-type that creates sandstorms",
    "Skorupi": "A Poison/Bug scorpion Pokemon that lives in deserts and marshes",
    "Drapion": "Skorupi's evolution; a Poison/Dark scorpion with armored body and fierce pincers",
    "Croagunk": "A Poison/Fighting frog Pokemon that damages with poisonous sacs on cheeks",
    "Toxicroak": "Croagunk's evolution; a Poison/Fighting fighter with sharp toxin-lacing fangs",
    "Carnivine": "A Grass-type carnivorous plant Pokemon that snaps prey with vine jaws",
    "Finneon": "A Water-type flashy fish Pokemon with glowing fin patterns",
    "Lumineon": "Finneon's evolution; Water-type with graceful fins that glow in deep sea",
    "Mantyke": "A Water/Flying manta ray baby Pokemon that evolves under friendship with Remoraid",
    "Snover": "A Grass/Ice alpine tree Pokemon that spreads snow with its pollen",
    "Abomasnow": "Snover's evolution; a Grass/Ice mountain Pokemon that brings blizzard to land",
    "Weavile": "A Dark/Ice evolution of Sneasel; sleek, fast, and strikes with razor claws",
    "Magnezone": "Magneton's evolution; a Steel/Electric UFO-like Pokemon using magnetic force",
    "Lickilicky": "Lickitung's evolution; Normal-type with extendable tongue and strong licks",
    "Rhyperior": "Rhydon's evolution; a Rock/Ground colossus with drill-tipped hands and armor",
    "Tangrowth": "Tangela's evolution; a Grass-type monster covered in vines that crush foes",
    "Electivire": "Electabuzz's evolution; an Electric-type powerhouse with twin electrified tails",
    "Magmortar": "Magmar's evolution; a Fire-type with arm-mounted flame cannons",
    "Togekiss": "Togetic's evolution; a Fairy/Flying dove of joy that blesses allies",
    "Yanmega": "Yanma's evolution; a Bug/Flying mega dragonfly with swift aerial strikes",
    "Leafeon": "Grass-type Eevee evolution; leaf-bladed fur and solar energy booster",
    "Glaceon": "Ice-type Eevee evolution; crystalline fur that chills the air around it",
    "Gliscor": "Flying/Ground evolution of Gligar; a bat-scorpion hybrid with gliding wings",
    "Mamoswine": "Ice/Ground evolution of Piloswine; massive and charges through blizzards",
    "Porygon-Z": "Porygon2's digital evolution; glitches and thrives in cyberspace distortions",
    "Gallade": "Psychic/Fighting evolution of Kirlia; wields arm-blades to protect others",
    "Probopass": "Nosepass line's evolution; a Rock/Steel with magnetic mustache and fortress head",
    "Dusknoir": "Dusclops's evolution; a Ghost-type grim reaper that guides lost spirits",
    "Froslass": "Snow/Ghost evolution of Snorunt; a graceful yet chilling phantom",
    "Rotom": "An Electric/Ghost Pokemon that inhabits appliances and changes form accordingly",
    "Uxie": "A Psychic Lake guardian; represents knowledge and awakens minds",
    "Mesprit": "A Psychic Lake guardian; represents emotion and inspires feeling",
    "Azelf": "A Psychic Lake guardian; represents willpower and drives determination",
    "Dialga": "Legendary Steel/Dragon that controls time and distorts space",
    "Palkia": "Legendary Water/Dragon that governs space and dimensions",
    "Heatran": "Legendary Fire/Steel mutant that lives in volcanic caves and controls magma",
    "Regigigas": "Legendary Normal colossus that towed continents with intangible arms",
    "Giratina": "Legendary Ghost/Dragon that rules the Distortion World with antimatter power",
    "Cresselia": "Legendary Psychic Swan that brings pleasant dreams and lunar light",
    "Phione": "A Water Mythical Pokemon born from breeding Manaphy; sails seas with elegance",
    "Manaphy": "A Mythical Water Pokemon that bonds with others and grants them power",
    "Darkrai": "A Mythical Dark-type that induces nightmares and dwells in shadow",
    "Shaymin": "A mountaintop sanctuary in the Mystery Dungeon world, home to Sky Peak and Sky Jumps",
    "Arceus": "The Original Mythical Normal deity that created the Pokemon universe",
    "Victini": "A Mythical Psychic/Fire bringer of victory that grants energy to others",
    "Snivy": "A Grass serpent starter; fast and regal with vine tail for precise strikes",
    "Servine": "Snivy's evolution; swift Grass snake Pokemon skilled in tactical leaf strikes",
    "Serperior": "Final Snivy form; majestic Grass serpent with regal vines and superiority",
    "Tepig": "A Fire pig starter that snorts fiery embers when excited",
    "Pignite": "Tepig's evolution; a Fire/Fighting hog with spirited flame belt",
    "Emboar": "Final Tepig form; a Fire/Fighting boar with blazing chest and brute power",
    "Oshawott": "A Water otter starter; uses a scalchop shell as a weapon for combat",
    "Dewott": "A Water-type otter Pokemon with dual scalchops, practicing blade techniques",
    "Samurott": "Final evolution of Dewott; a regal Water-type sea-otter with a samurai horn blade",
    "Patrat": "A Normal-type lookout rodent with ringed tail and sharp incisors",
    "Watchog": "Evolved Patrat; a vigilant Normal-type with rings for night vision and alert calls",
    "Lillipup": "A small Normal-type puppy known for loyalty and sharp hearing",
    "Herdier": "Lillipup's evolution; a courageous Normal-type dog with protective instincts",
    "Stoutland": "Final Herdier form; a large, fluffy Normal-type guardian with strong sense of direction",
    "Purrloin": "A sly Normal-type kitten Pokemon that deceives with its charm",
    "Liepard": "Purrloin's evolution; a sleek, stealthy Normal-type feline assassin",
    "Pansage": "A Grass-type monkey that carries a sprout and energizes with leaf-based moves",
    "Simisage": "Pansage evolved; a Grass-type with vine whip and spirited fighting style",
    "Pansear": "A Fire-type monkey with a flame tuft used to heat and battle",
    "Simisear": "Pansear's evolution; a fiery monkey that punches with blazing fists",
    "Panpour": "A Water-type monkey that drizzles moisture from its head to cool surroundings",
    "Simipour": "Panpour's evolution; a Water-type with powerful hydro fists and spirited attitude",
    "Munna": "A Psychic-type dream eater that floats and feeds on dreams' essence",
    "Musharna": "Munna's evolution; manifests dream mist and induces healing dreams",
    "Pidove": "A Normal/Flying pigeon Pokemon often seen in flocks around cities",
    "Tranquill": "Pidove's evolution; a calmer bird with a sense of unity and flight coordination",
    "Unfezant": "Final Pidove form; a proud Normal/Flying bird with crest and aerial dominance",
    "Blitzle": "An Electric-type zebra foal with lightning stripes that glow with excitement",
    "Zebstrika": "Blitzle's evolution; a sleek Electric-type steed that races at high speed",
    "Roggenrola": "A Rock-type ore Pokemon with a single eye and mineral-rich body",
    "Boldore": "Roggenrola's evolution; a rugged Rock-type with crystalline blasts",
    "Gigalith": "Final Boldore form; a massive Rock-type fortress powered by solar energy",
    "Woobat": "A Psychic/Flying bat that uses heart-shaped nose to sense emotions",
    "Swoobat": "Woobat evolved; a Psychic/Flying bat that flutters with heart-powered sonar",
    "Drilbur": "A Ground-type mole Pokemon with steel claws for tunneling",
    "Excadrill": "Drilbur's evolution; a Steel/Ground digger with powerful drills on hands",
    "Audino": "A Normal-type caring Pokemon known for healing others with its heart sensors",
    "Timburr": "A Fighting-type toddler Pokemon that carries wooden beams",
    "Gurdurr": "Timburr's evolution; a brawny Fighting-type that uses steel girders",
    "Conkeldurr": "Final Gurdurr form; a powerhouse that lifts concrete pillars in battle",
    "Tympole": "A Water-type tadpole Pokemon whose cheeks fill with air to sing",
    "Palpitoad": "Tympole's evolution; a Water/Ground type with vibrating body waves",
    "Seismitoad": "Final Palpitoad form; a bulky Water/Ground Pokemon that causes seismic quakes",
    "Throh": "A Fighting-type judoka that grapples opponents with expert throws",
    "Sawk": "A Fighting-type karateka with discipline and precision kicking",
    "Sewaddle": "A Bug/Grass caterpillar that spins leaves into clothing as a cocoon",
    "Swadloon": "Evolved Sewaddle; a Bug/Grass stage hidden in its leaf cloak",
    "Leavanny": "Final Swadloon form; a Bug/Grass tailor Pokemon that dresses friends in leaf clothes",
    "Venipede": "A Bug/Poison millipede Pokemon with swift, segmented movement",
    "Whirlipede": "Venipede's evolution; a Bug/Poison armor-spinner with defensive posture",
    "Scolipede": "Final Venipede line; a Bug/Poison centipede with fierce speed and pincers",
    "Cottonee": "A Grass/Fairy cotton puff Pokemon that drifts on wind with seeds",
    "Whimsicott": "Cottonee's evolution; a playful Grass/Fairy that hides in cotton clouds",
    "Petilil": "A Grass-type bulb Pokemon that stores sunlight in its leaf bud",
    "Lilligant": "Petilil's evolution; an elegant Grass-type dancer blooming in spring",
    "Basculin": "A Water-type aggressive fish with bold stripes and fin battles",
    "Sandile": "A Ground/Dark crocodile pup that lurks in deserts and rivers",
    "Krokorok": "Sandile's evolution; a sneaky Ground/Dark croc with hardened eyelids",
    "Krookodile": "Final Sandile form; a Ground/Dark croc with powerful jaws and desert dominance",
    "Darumaka": "A Fire-type round Pokemon with fiery pouch that stores heated energy",
    "Darmanitan": "Darumaka's evolution; a powerhouse Fire-type that enters Zen Mode occasionally",
    "Maractus": "A Grass-type cactus Pokemon that dances rhythmically in desert heat",
    "Dwebble": "A Bug/Rock crab Pokemon that carries a stone shell home",
    "Crustle": "Dwebble's evolution; a Bug/Rock hermit-crab with boulder shell and pincers",
    "Scraggy": "A Dark/Fighting reptilian Pokemon with baggy skin and bold attitude",
    "Scrafty": "Scraggy's evolution; street-skulled Dark/Fighting type with hooded style",
    "Sigilyph": "A Psychic/Flying ancient guardian Pokemon etched in cave art",
    "Yamask": "A Ghost-type wraith carrying mask of its past human life",
    "Cofagrigus": "Yamask's evolution; a Ghost-type sarcophagus that traps souls in its arms",
    "Tirtouga": "A Rock/Water ancient turtle fossil that swims with sturdy flippers",
    "Carracosta": "Tirtouga's evolution; a Rock/Water shell-dinosaur with crushing jaws",
    "Archen": "A Rock/Flying fossil raptor with eagerness to learn to fly",
    "Archeops": "Archen's evolution; a Rock/Flying bird with powerful prehistoric wings",
    "Trubbish": "A Poison-type trash bag Pokemon filled with toxic sludge",
    "Garbodor": "Trubbish's evolution; a Poison-type heap of toxic waste held by bands",
    "Zorua": "A Dark-type fox that creates illusions to protect itself",
    "Zoroark": "Zorua's evolution; a Dark-type illusionist that disguises surroundings",
    "Minccino": "A Normal-type chinchilla Pokemon that grooms fur obsessively",
    "Cinccino": "Minccino's evolution; a Normal-type soft-furred bard that fights with hair ribbons",
    "Gothita": "A Psychic-type doll Pokemon that senses auras with big eyes",
    "Gothorita": "Gothita's evolution; a Psychic-type that balances on head, sensing feelings",
    "Gothitelle": "Final Gothita line; a Psychic-type that predicts futures with aura",
    "Solosis": "A Psychic-type floating cell Pokemon contained in an energy membrane",
    "Duosion": "Solosis's evolution; a Psychic-type that connects through cells to form telepathy",
    "Reuniclus": "Final Solosis line; a Psychic-type brain-cell creature that controls others",
    "Ducklett": "A Water/Flying duckling with downy blue feathers and gentle demeanor",
    "Swanna": "Ducklett's evolution; a graceful Water/Flying swan with elegant wingspan",
    "Vanillite": "An Ice-type snowflake Pokemon that grows icicle horns on its head",
    "Vanillish": "Vanillite's evolution; a larger Ice-type with frosted body and cooler aura",
    "Vanilluxe": "Final Ice-type form; two-headed snowcone Pokemon spouting frosty breath",
    "Deerling": "A Normal/Grass deer that changes coat pattern with the seasons",
    "Sawsbuck": "Deerling's evolution; a majestic Normal/Grass stag with seasonal antlers",
    "Emolga": "An Electric/Flying squirrel glider that zaps and soars between trees",
    "Karrablast": "A Bug-type stag beetle Pokemon that evolves through shell trade",
    "Escavalier": "Karrablast's evolution; a Bug/Steel knight Pokemon clad in armor",
    "Foongus": "A Grass/Poison mushroom Pokemon disguised as a Poke Ball cap",
    "Amoonguss": "Foongus's evolution; a Grass/Poison mushroom that lures prey with hat motif",
    "Frillish": "A Water/Ghost jellyfish Pokemon that drifts with eerie tentacles",
    "Jellicent": "Final Frillish form; a Water/Ghost phantom jellyfish queen of the seas",
    "Alomomola": "A Water-type heartfish that heals wounded Pokemon with its body",
    "Joltik": "A Bug/Electric micro-spider that attaches to larger Pokemon to drain energy",
    "Galvantula": "Joltik's evolution; a Bug/Electric tarantula that spins electrified webs",
    "Ferroseed": "A Steel/Grass seed Pokemon with needle-like spines and magnetic core",
    "Ferrothorn": "Ferroseed's evolution; a Steel/Grass fortress vine Pokemon with spiky traps",
    "Klink": "A Steel-type gear pair that generates electricity when they mesh teeth",
    "Klang": "Klink's evolution; a trio of gears generating stronger electrical currents",
    "Klinklang": "Final Klink line; a Steel-type gear wheel Pokemon whose rotations boost power",
    "Tynamo": "An Electric-type eel that generates tiny sparks from its body",
    "Eelektrik": "An evolved Electric-type eel with electric sacs along its body",
    "Eelektross": "Final Eelektrik form; a powerful Electric-only eel with no weaknesses",
    "Elgyem": "A Psychic-type small alien with a single eye and mysterious origins",
    "Beheeyem": "Evolved Elgyem; an intelligent Psychic alien with telepathic powers",
    "Litwick": "A Ghost/Fire candle Pokemon that drains life energy with its flame",
    "Lampent": "Litwick's evolution; a lamp Pokemon wandering and guiding lost spirits",
    "Chandelure": "Final Litwick line; a chandelier Ghost/Fire that burns souls with ghost flames",
    "Axew": "A Dragon-type tusked cub Pokemon learning to bite and grow",
    "Fraxure": "Axew's evolution; a brawny Dragon-type with axe-like tusks",
    "Haxorus": "Final Axew form; a Dragon-type with powerful axing jaws",
    "Cubchoo": "An Ice-type cub with a constantly running nose that freezes its emotions",
    "Beartic": "Cubchoo's evolution; a massive bear Pokemon that stomps thick ice with cold breath",
    "Cryogonal": "An Ice-type snowflake Pokemon that forms crystalline bodies to freeze foes",
    "Shelmet": "A Bug-type shelled Pokemon that retreats into its protective armor",
    "Accelgor": "Shelmet's speedy Bug-type evolution stripped of shell for agility",
    "Stunfisk": "A Ground/Electric flat Pokemon that lies in wait to zap prey",
    "Mienfoo": "A Fighting-type martial arts fox cub that trains with disciplined moves",
    "Mienshao": "Mienfoo's evolution; a swift Fighting-type with graceful staff-like arms",
    "Druddigon": "A Dragon-type cave-dweller with rugged scales and fierce claws",
    "Golett": "A Ground/Ghost animated clay golem that walks in search of purpose",
    "Golurk": "Golett's evolution; a towering Ground/Ghost golem with ancient powers",
    "Pawniard": "A Dark/Steel knight-like cub wielding sharp blade-arms",
    "Bisharp": "Pawniard's evolution; leads Blade Steel-types with honor and cold tactics",
    "Bouffalant": "A Normal-type buffalo Pokemon that charges with giant afro horns",
    "Rufflet": "A Normal/Flying eaglet with prideful nature and fledgling skill",
    "Braviary": "Rufflet's evolution; a patriotic eagle Pokemon known for courage",
    "Vullaby": "A Dark/Flying vulture chick that nests in discarded armor",
    "Mandibuzz": "Vullaby's evolution; a Dark/Flying vulture that protects young scavengers",
    "Heatmor": "A Fire-type anteater that uses burning tongue to melt hard-shelled prey",
    "Durant": "A Bug/Steel ant Pokemon that constructs tunnels and works in colonies",
    "Deino": "A Dark/Dragon puppy Pokemon that bites others to learn strength",
    "Zweilous": "Deino's evolution; bipl-headed Dark/Dragon that fights with dual bites",
    "Hydreigon": "Final Deino form; a three-headed Dark/Dragon with overwhelming power",
    "Larvesta": "A Bug/Fire larva moth that glows warmly at night",
    "Volcarona": "Final Larvesta evolution; a Fire/Bug moth with wings of radiant flame",
    "Cobalion": "A Steel/Fighting Legendary unicorn; leads Swords of Justice with courage",
    "Terrakion": "A Rock/Fighting Legendary bull; champion of justice and rampaging strength",
    "Virizion": "A Grass/Fighting Legendary deer; swift protector of forests",
    "Tornadus": "A Flying-type Legendary genie of wind, free in the skies",
    "Thundurus": "An Electric/Flying genie of thunder that wields storms",
    "Reshiram": "A Dragon/Fire Legendary embodying truth with fiery breath",
    "Zekrom": "A Dragon/Electric Legendary embodying ideals with thunderous power",
    "Landorus": "A Ground/Flying genie of the land; controls fertility and storms",
    "Kyurem": "A Dragon/Ice Legendary embodying icy emptiness and frigid power",
    "Keldeo": "A Water/Fighting Legendary colt that swims and battles in style",
    "Meloetta": "A Mythical Normal/Psychic or Normal/Fighting singer whose melody moves hearts",
    "Genesect": "A Mythical Bug/Steel ancient Pokemon modified with high-tech cannon",
    "Chespin": "A Grass-type hedgehog starter with nut shell helmet and cheeky spirit",
    "Quilladin": "Chespin's evolution; an armored Grass-type that protects itself from foes",
    "Chesnaught": "Final Chespin form; a Grass/Fighting guardian with knuckle armor spines",
    "Fennekin": "A Fire-type fox starter with flame fur that senses emotions",
    "Braixen": "Fennekin's evolution; a Fire-type fox that swishes a fiery stick in its tail",
    "Delphox": "Final Fennekin form; a Fire/Psychic fox wizard wielding psychic flame",
    "Froakie": "A Water-type frog starter with bubble foam and agile jumps",
    "Frogadier": "Froakie's evolution; a sleek Water-type frog ninja in training",
    "Greninja": "Final Froakie form; a Water/Dark ninja frog with water-shuriken attacks",
    "Bunnelby": "A Normal-type rabbit with powerful ears used for digging",
    "Diggersby": "Bunnelby's evolution; a Ground/Normal digger with jackhammer ears",
    "Fletchling": "A Normal/Flying robin chick that sings to assert territory",
    "Fletchinder": "Fletchling's evolution; a Fire/Flying bird that darts through branches",
    "Talonflame": "Final Fletchling form; a fiery hawk that blazes down on opponents",
    "Scatterbug": "A Bug-type caterpillar that flits and spins silk trails",
    "Spewpa": "Scatterbug's chrysalid stage; rests and prepares inside its silk shell",
    "Vivillon": "Final Scatterbug evolution; a Bug/Flying butterfly with region-specific wing patterns",
    "Litleo": "A Fire/Normal lion cub with a fiery tuft and majestic roar",
    "Pyroar": "Final Litleo form; a Fire/Normal lion with regal mane and vocal power",
    "Flabebe": "A tiny Fairy-type that carries a flower; color varies by clover color",
    "Floette": "Flabebe's evolution; a Fairy flower guardian with floating bloom",
    "Florges": "Final Flabebe line; a Fairy flower protector with garden-like frill",
    "Skiddo": "A Grass-type goat Pokemon that grazes and bonds with its rider",
    "Gogoat": "Final Skiddo form; a Grass-type steed goat that charges through hills",
    "Pancham": "A Fighting-type panda cub carrying a leaf for courage",
    "Pangoro": "Pancham's evolution; a Dark/Fighting panda that mentors others",
    "Furfrou": "A Normal-type poodle Pokemon that can be groomed into many forms",
    "Espurr": "A Psychic-type kitten with lurking psychic power hidden behind its eyes",
    "Meowstic": "Espurr's evolution; a Psychic cat that controls energy with ear fur",
    "Honedge": "A Steel/Ghost sword that houses a spirit blade",
    "Doublade": "Two Honedge combined; a twin-blade ghostly weapon in armor",
    "Aegislash": "Final Honedge line; a Steel/Ghost sword with form-changing sacred blade",
    "Spritzee": "A Fairy-type bird that collects fragrances to produce soothing aroma",
    "Aromatisse": "Spritzee's evolution; a Fairy perfumer that emits calming scents",
    "Swirlix": "A Fairy-type fluff ball that tastes delicious and soft",
    "Slurpuff": "Swirlix's evolution; a Fairy gourmand that bakes with scent for taste",
    "Inkay": "A Dark/Psychic cephalopod that controls others when it looks overhead",
    "Malamar": "Inkay's evolution; a Dark/Psychic squid that manipulates minds with tentacles",
    "Binacle": "A Rock/Water crab Pokemon with two-headed form growing on its back",
    "Barbaracle": "Binacle's evolution; a Rock/Water barnacle colony with many limbs",
    "Skrelp": "A Poison/Water seahorse Pokemon that camouflages among kelp",
    "Dragalge": "Skrelp's evolution; a Poison/Dragon seaweed-covered serpent",
    "Clauncher": "A Water-type pincer Pokemon that fires water blasts from its claw",
    "Clawitzer": "Clauncher's evolution; a Water-type sniper crab firing pressurized water",
    "Helioptile": "An Electric/Normal lizard that collects solar energy with ear frills",
    "Heliolisk": "Helioptile's evolution; an Electric/Normal frill-necked lizard that converts sunlight to power",
    "Tyrunt": "A Rock/Dragon fossil Pokemon resembling a tiny tyrannosaur",
    "Tyrantrum": "Tyrunt's evolution; a Rock/Dragon tyrannosaur king roaring with force",
    "Amaura": "A Rock/Ice fossil Pokemon that glows in moonlight with crystalline horns",
    "Aurorus": "Amaura's evolution; a Rock/Ice plesiosaur with aurora-forming sails",
    "Sylveon": "A Fairy-type Eevee evolution that charms foes with ribbon-like feelers",
    "Hawlucha": "A Fighting/Flying luchador bird Pokemon that performs aerial wrestling",
    "Dedenne": "An Electric/Fairy rodent that stores electricity in its whiskers and cheeks",
    "Carbink": "A Rock/Fairy gem Pokemon born from crystallization deep underground",
    "Goomy": "A tiny Dragon-type slug with gooey, slippery body and timid nature",
    "Sliggoo": "Goomy's evolution; a Dragon-type slimy slug that stores moisture in its body",
    "Goodra": "Final Goomy line; a Dragon-type gooey powerhouse with sticky, elastic body",
    "Klefki": "A Steel/Fairy keyring Pokemon that collects metallic keys to protect its Trainer",
    "Phantump": "A Ghost/Grass tree stump haunted by the spirit of a lost child",
    "Trevenant": "Phantump's evolution; a Ghost/Grass guardian tree that traps wandering souls",
    "Pumpkaboo": "A Ghost/Grass jack-o'-lantern Pokemon with variable sizes and playful spirit",
    "Gourgeist": "Pumpkaboo's evolution; a Ghost/Grass pumpkin Pokemon with mischievous candy sack",
    "Bergmite": "An Ice-type iceberg Pokemon that clings to cliffs with its icy shell",
    "Avalugg": "Bergmite's evolution; a massive Ice-type iceberg backbearer with glacial armor",
    "Noibat": "A small Flying/Dragon bat Pokemon that uses ultrasonic waves to echolocate",
    "Noivern": "Noibat's evolution; a Flying/Dragon bat with powerful sonic booms from its wings",
    "Xerneas": "A Fairy-type Legendary deer that shares life energy and brings vitality",
    "Yveltal": "A Dark/Flying Legendary bird that absorbs life force and spreads destruction",
    "Zygarde": "A Dragon/Ground Legendary sentinel that monitors ecosystem balance in multiple forms",
    "Diancie": "A Rock/Fairy Mythical Pokemon that can create diamonds from its body",
    "Hoopa": "A Psychic/Ghost Mythical that manipulates space by summoning through rings",
    "Volcanion": "A Fire/Water Mythical steam engine Pokemon that can cloak steam explosions",
    "Rowlet": "A Grass/Flying owl starter that flies silently with seed-covered wings",
    "Dartrix": "Rowlet's evolution; a Grass/Flying stealth archer owl with leafy cloaks",
    "Decidueye": "Final Rowlet form; a Grass/Ghost archer owl that strikes unseen with feather arrows",
    "Litten": "A Fire-type kitten starter with fiery whiskers and intense stare",
    "Torracat": "Litten's evolution; a Fire-type feline that stores fire in its bell collar",
    "Incineroar": "Final Litten form; a Fire/Dark wrestling tiger that battles with fiery flair",
    "Popplio": "A Water-type seal pup starter that plays with water balloons and acrobatics",
    "Brionne": "Popplio's evolution; a Water-type performer that dances with bubble displays",
    "Primarina": "Final Popplio form; a Water/Fairy sea lion diva singing powerful melodies",
    "Pikipek": "A Normal/Flying woodpecker Pokemon that drills trunks with its beak",
    "Trumbeak": "Pikipek's evolution; a Normal/Flying bird with long beak that hammers fruit",
    "Toucannon": "Final Pikipek line; a Normal/Flying toucan Pokemon with cannon-like beak blasts",
    "Yungoos": "A Normal-type mongoose puppy that lives near habitats and forages in family groups",
    "Gumshoos": "Yungoos's evolution; a Normal-type mongoose sheriff Pokemon tracking intruders all day",
    "Grubbin": "A Bug-type larva ant Pokemon that eats wood to build powerful mandibles",
    "Charjabug": "Grubbin's evolution; an Electric/Bug battery-bug sealed to conserve power",
    "Vikavolt": "Final Grubbin form; a Bug/Electric stag-beetle Pokemon with flash-fire cannon jaws",
    "Crabrawler": "A Fighting-type crab that boxes with powerful pincers",
    "Crabominable": "Crabrawler's evolution; a Fighting/Ice yeti-crab with frost-hammer claws",
    "Oricorio": "A Flying-type bird that dances in four styles, depending on nectar drunk",
    "Cutiefly": "A Bug/Fairy pollinating fly that seeks out floral scent and emits sparkles",
    "Ribombee": "Cutiefly's evolution; a Bug/Fairy pixie bee that delivers healing pollen",
    "Rockruff": "A Rock-type pup with evolving howls and close bond to its Trainer",
    "Lycanroc": "Rockruff's evolution with style-based forms; a Rock-type loyal wolf at high speed",
    "Wishiwashi": "A Water-type fish that becomes extraordinarily powerful when schooling",
    "Mareanie": "A Poison/Water starfish Pokemon that sticks velvety poison spray on prey",
    "Toxapex": "Mareanie's evolution; a Poison/Water tank that deploys poisonous spikes and coats",
    "Mudbray": "A Ground-type donkey Pokemon that stomps using thick hooves",
    "Mudsdale": "Mudbray's evolution; a Ground-type draft-horse that pulls heavy loads with quake kicks",
    "Dewpider": "A Water/Bug bubble-spider Pokemon that lives on surface tension of water",
    "Araquanid": "Dewpider's evolution; a Water/Bug spider that uses bubble armor to trap prey",
    "Fomantis": "A Grass-type praying mantis sapling that stalks prey in foliage quietly",
    "Lurantis": "Fomantis's evolution; a Grass-type floral mantis that performs dance-like attacks",
    "Morelull": "A Grass/Fairy mushroom Pokemon that scatters sleepy spores in moonlight",
    "Shiinotic": "Morelull's evolution; a Grass/Fairy lamp mushroom that glows soothingly to lull foes",
    "Salandit": "A Poison/Fire lizard Pokemon whose female emits toxic fumes to attract mates",
    "Salazzle": "Salandit's evolution; a Poison/Fire queen lizard that manipulates heat and toxic gas",
    "Stufful": "A Normal/Fighting teddy-bear Pokemon that practices punching with determination",
    "Bewear": "Stufful's evolution; a Normal/Fighting koala-bear powerhouse with crushing hugs",
    "Bounsweet": "A Grass-type fruit Pokemon that ripens with sweetness and charms Trainers",
    "Steenee": "Bounsweet's evolution; a Grass-type fruit dancer that hops with energy",
    "Tsareena": "Final Bounsweet form; a Grass-type queen with regal kicks and crown-like top",
    "Comfey": "A Fairy garland Pokemon that weaves flowers into bracelets to comfort others",
    "Oranguru": "A Normal/Psychic orangutan sage that gives advice while meditating in trees",
    "Passimian": "A Fighting-type lemur-like leader that throws berries as team tactics",
    "Wimpod": "A Bug/Water timid isopod that flees in packs at first sign of danger",
    "Golisopod": "Wimpod's evolution; a Bug/Water samurai isopod with armor and first-strike tactics",
    "Sandygast": "A Ghost/Ground sand-tower Pokemon animated by restless spirits",
    "Palossand": "Sandygast's evolution; a Ghost/Ground haunted sandcastle that consumes life force",
    "Pyukumuku": "A Water-type sea cucumber that ejects its internal organs to scare enemies",
    "Type-Null": "A Normal-type artificial chimera Pokemon created to counter Ultra Beasts",
    "Silvally": "Type: Null's evolution; a Normal-type synthetic guardian that adapts with memory disc",
    "Minior": "A Rock/Flying meteor Pokemon that breaks apart, revealing inner core",
    "Komala": "A Normal-type koala that never wakes from its perpetual sleep",
    "Turtonator": "A Fire/Dragon turtle Pokemon with explosive shell ridges",
    "Togedemaru": "An Electric/Steel round hedgehog Pokemon that rolls into spines for attack",
    "Mimikyu": "A Ghost/Fairy masked Pokemon that disguises to look like Pikachu",
    "Bruxish": "A Water/Psychic fish with colorful teeth known for loud braying",
    "Drampa": "A Normal/Dragon elder dragon Pokemon with a gentle and laid-back aura",
    "Dhelmise": "A Ghost/Grass anchor-and-seaweed Pokemon haunted by shipwreck spirit",
    "Jangmo-o": "A Dragon-type baby draconic Pokemon covered in scale armor",
    "Hakamo-o": "Jangmo-o's evolution; a Dragon/Fighting scaled brawler that practices in packs",
    "Kommo-o": "Final Jangmo-o form; a Dragon/Fighting scale-armored samurai leader with angry roar",
    "Tapu-Koko": "An Electric/Fairy guardian of Melemele Island that delivers electric shocks",
    "Tapu-Lele": "A Psychic/Fairy healer guardian of Akala Island that soothes with scales",
    "Tapu-Bulu": "A Grass/Fairy guardian of Ula'ula Island that calms forests with its aura",
    "Tapu-Fini": "A Water/Fairy guardian of Poni Island that purifies oceans and mists",
    "Cosmog": "A Psychic starter nebula Pokemon that travels the cosmos in its gaseous form",
    "Cosmoem": "Cosmog's evolution; a Psychic cocoon of compressed stellar matter",
    "Solgaleo": "A Psychic/Steel Sunne Legendary lion that bursts forth as sun's emissary",
    "Lunala": "A Psychic/Ghost Moone Legendary bat that sails night skies and absorbs moonlight",
    "Nihilego": "A Rock/Poison Ultra Beast jelly-like parasite that came through Ultra Wormhole",
    "Buzzwole": "An Ultra Beast Bug/Fighting muscular mosquito that flexes its bulk",
    "Pheromosa": "An Ultra Beast Bug/Fighting slender insectoid known for graceful terror",
    "Xurkitree": "An Ultra Beast Electric wiry creature that glows with high-voltage filaments",
    "Celesteela": "An Ultra Beast Steel/Flying rocket-like Pokemon that fell to Earth",
    "Kartana": "An Ultra Beast Grass/Steel origami warrior nearly as sharp as paper",
    "Guzzlord": "An Ultra Beast Dark/Dragon gluttonous monster with black, gaping maw",
    "Necrozma": "A Psychic Legendary prism Pokemon that absorbs light to become powerful",
    "Magearna": "A Steel/Fairy Mythical automaton crafted 500 years ago to feel human emotions",
    "Marshadow": "A Fighting/Ghost Mythical Pokemon that hides in shadows and mimics opponents",
    "Poipole": "A Poison-type Ultra Beast baby that absorbs toxins and drips venom",
    "Naganadel": "Final Poipole form; a Poison/Dragon Ultra Beast with missile-like tail",
    "Stakataka": "A Rock/Steel Ultra Beast composed of fortress-like stone blocks",
    "Blacephalon": "A Fire/Ghost Ultra Beast clown-like Pokemon that explodes with fireworks",
    "Zeraora": "A Mythical Electric-type cat that moves at lightning speed and attacks with claws",
    "Meltan": "A small Steel-type Pokemon made of liquid metal and a hex nut head",
    "Melmetal": "Final Meltan form; a giant Steel-type golem forged from molten metal",
    "Grookey": "A Grass-type chimp starter that taps its stick to create nature's rhythms",
    "Thwackey": "Grookey's evolution; a Grass-type drumming monkey with rhythmic branches",
    "Rillaboom": "Final Grookey form; a Grass-type gorilla drummer commanding forest energy",
    "Scorbunny": "A Fire-type rabbit starter with blazing kicks and fiery energy",
    "Raboot": "Scorbunny's evolution; a Fire-type rabbit that amps up its fiery footwork",
    "Cinderace": "Final Scorbunny form; a Fire-type soccer-style striker kicking flaming balls",
    "Sobble": "A Water-type lizard starter that cries to camouflage and evade threats",
    "Drizzile": "Sobble's evolution; a Water-type ninja lizard that uses ink for stealth tactics",
    "Inteleon": "Final Sobble form; a Water-type spy lizard with sharpshooter precision",
    "Skwovet": "A Normal-type squirrel that hoards berries in spacious cheek pouches",
    "Greedent": "Skwovet's evolution; a plump Normal-type glutton that guards its stash",
    "Rookidee": "A Normal/Flying rookie crow Pokemon with eager flight potential",
    "Corvisquire": "Rookidee's evolution; a Normal/Flying crow with sharpened wings and wisdom",
    "Corviknight": "Final Corvisquire form; a Steel/Flying knight crow that ferries trainers",
    "Blipbug": "A small Bug-type larva that sticks on leaves and grows gradually",
    "Dottler": "Blipbug's evolution; a Bug/Psychic cocoon-type preparing for psychic bloom",
    "Orbeetle": "Final Blipbug line; a Bug/Psychic beetle with telepathy and mind shield",
    "Nickit": "A Dark-type fox cub that uses cunning to steal from unaware targets",
    "Thievul": "Nickit's evolution; a sly Dark-type fox thief with shadow cloak tactics",
    "Gossifleur": "A Grass-type flower puff that drifts on breezes to spread spores",
    "Eldegoss": "Gossifleur's evolution; a Grass-type cotton dandelion that heals with fluff",
    "Wooloo": "A Normal-type fluffy sheep that rolls around playfully in flocks",
    "Dubwool": "Wooloo's evolution; a sturdy Normal-type ram with wool armor",
    "Chewtle": "A Water-type snapping turtle with strong jaw and stubborn bite",
    "Drednaw": "Chewtle's evolution; a Water/Rock turtle with a crushing jaw shell",
    "Yamper": "An Electric-type corgi that charges its cheeks and wags infectious energy",
    "Boltund": "Yamper's evolution; a speedy Electric-type dog with lightning-paced runs",
    "Rolycoly": "A Rock-type coal nugget Pokemon that absorbs heat underground",
    "Carkol": "Rolycoly's evolution; a Rock/Fire coal car with burning coals inside",
    "Coalossal": "Final Rolycoly line; a Rock/Fire boiler-on-legs spewing magma clouds",
    "Applin": "A Grass/Dragon apple core Pokemon that hides in fruit to ambush foes",
    "Flapple": "Applin evolution; a Grass/Dragon fuzz-winged apple that glides on seeds",
    "Appletun": "Alternate Applin form; a Grass/Dragon pancake-like dragon custard fruit",
    "Silicobra": "A Ground-type snake that burrows in sand to store moisture",
    "Sandaconda": "Silicobra's evolution; a Ground-type anaconda with sand-mantle coils",
    "Cramorant": "A Water/Flying bird that catches fish in its stretchy throat pouch",
    "Arrokuda": "A fast Water-type barracuda fish that darts through water with speed",
    "Barraskewda": "Arrokuda's evolution; a Water-type spear fish with quick charge attacks",
    "Toxel": "An Electric/Poison baby Pokemon whose shock intensity depends on emotions",
    "Toxtricity": "Toxel's evolution; an Electric/Poison rocker Pokemon that amps attacks on stage",
    "Sizzlipede": "A Fire/Bug centipede that heats its segments to burn tracks",
    "Centiskorch": "Sizzlipede's evolution; a Fire/Bug giant centipede that blazes a fiery trail",
    "Clobbopus": "A Fighting-type octopus that fights with its suction-cup limbs",
    "Grapploct": "Clobbopus's evolution; a Fighting-type grappling octopus with strength strikes",
    "Sinistea": "A Ghost-type haunted teacup that changes flavor over brewing time",
    "Polteageist": "Sinistea's evolution; a Ghost-type teapot full of cursed tea essence",
    "Hatenna": "A Psychic-type fairy that senses emotions to produce soothing aroma",
    "Hattrem": "Hatenna's evolution; a Psychic-type that channels emotions into calming power",
    "Hatterene": "Final Hatenna form; a Psychic/Fairy witch that protects with emotion-based magic",
    "Impidimp": "A Dark/Fairy imp that pranks relentlessly using mischievous illusions",
    "Morgrem": "Impidimp's evolution; a Dark/Fairy mischief maker with cunning pranks",
    "Grimmsnarl": "Final Impidimp line; a Dark/Fairy sneering troll that traps foes with hair",
    "Obstagoon": "A Dark/Normal evolution of Linoone; a rebellious brawler with Galarian swagger",
    "Perrserker": "A Dark/Steel evolution of Galarian Meowth; a fierce Viking cat warrior",
    "Cursola": "A Ghost-type evolved Galarian Corsola; a coral spirit that drains life energy",
    "Sirfetch'd": "A Fighting-type Galarian Farfetch'd; a gallant duck wielding leek lance and shield",
    "Rime": "An Ice/Psychic evolution of Galarian Mr. Rime; a chill psychic performer with frosted hands",
    "Runerigus": "A Ghost/Ground evolution of Galarian Yamask; a cursed mural embodying vengeful spirits",
    "Milcery": "A Fairy confection Pokemon that generates cream sweetness according to trainer care",
    "Alcremie": "Final Milcery form; a Fairy dessert Pokemon with swirled cream body and various flavors",
    "Falinks": "A Fighting-type troop of spear-wielding warriors that march in formation",
    "Pincurchin": "An Electric-type sea urchin Pokemon covered in battery-like spines",
    "Snom": "An Ice/Bug larva covered in frost that grows slowly in cold climates",
    "Frosmoth": "Snom's evolution; an Ice/Bug moth with powdery wings and chilly aura",
    "Stonjourner": "A Rock-type standing stone Pokemon that forms monolith formations",
    "Eiscue": "An Ice-type penguin that wears an ice cube on its head to modulate emotion",
    "Indeedee": "A Psychic/Normal gender-dual helper that enhances training with empathy",
    "Morpeko": "An Electric/Dark hamster with hunger-driven moods shifting between modes",
    "Cufant": "A Steel-type baby elephant whose trunk absorbs electricity and drums rhythmically",
    "Copperajah": "Cufant's evolution; a massive Steel elephant Pokemon with iron body strength",
    "Dracozolt": "A Electric/Dragon fossil Pokemon assembled with mismatched prehistoric parts",
    "Arctozolt": "An Electric/Ice fossil Pokemon built from disjointed ancient limbs",
    "Dracovish": "A Water/Dragon fossil Pokemon pieced together from mismatched bones",
    "Arctovish": "A Water/Ice fossil Pokemon assembled from disparate ancient parts",
    "Duraludon": "A Steel/Dragon skyscraper-like Pokemon that grows stronger with skyscraper-scale metal",
    "Dreepy": "A Dragon/Ghost larva that rides on a childless dragon spirit in its head",
    "Drakloak": "Dreepy's evolution; a Dragon/Ghost stealthy spirit rider knocking out foes",
    "Dragapult": "Final Dreepy line; a Dragon/Ghost stealth attacker launching spirit darts",
    "Zacian": "A Fairy/Steel Legendary sword-wielding wolf destined to protect Galar",
    "Zamazenta": "A Fighting/Steel Legendary shield-wielding wolf guardian of Galar",
    "Eternatus": "A Poison/Dragon Legendary cosmic entity that powers Dynamax energy",
    "Kubfu": "A Fighting-type cubic martial artist Pokemon trained in remote tower trials",
    "Urshifu": "Final Kubfu form; a Fighting/Dark or Fighting/Water wrestler capable of Rapid Strike or Single Strike style",
    "Zarude": "A Dark/Grass mythical ape that raises children and protects jungle freely",
    "Regieleki": "An Electric Legendary golem made of lightning-fast rods and boundless energy",
    "Regidrago": "A Dragon Legendary golem filled with draconic energy and fierce presence",
    "Glastrier": "A Legendary Ice steed with frozen fury and chilling frost mane",
    "Spectrier": "A Legendary Ghost steed that gallops through shadows with haunting speed",
    "Calyrex": "A Psychic/Grass Legendary king riding steed variants that control mind and nature",
    "Wyrdeer": "A Normal/Psychic evolution of Stantler; deer with psychic antlers that sense anomalies",
    "Kleavor": "A Rock/Bug evolution of Scyther in Hisuian region; axes arms carved from ore",
    "Ursaluna": "A Ground/Normal Hisuian evolution of Ursaring; a massive bear revived by moonglade rituals",
    "Basculegion": "A Water/Ghost salmon Pokemon riding currents with spectral warrior form",
    "Sneasler": "A Fighting/Dark clawed evolution of Sneasel with swift martial prowess",
    "Overqwil": "A Dark/Poison evolvable Qwilfish with spiky armor and toxic aura",
    "Enamorus": "A Fairy/Flying guardian of love and fertility, often depicted in pairs",
    "Sprigatito": "A Grass-type starter kitten that uses vines to play and pounce",
    "Floragato": "Grass-type evolved Sprigatito; swift feline with leaf-tipped tail strikes",
    "Meowscarada": "Final Sprigatito line; Grass/Dark ninja cat with masked acrobatics",
    "Fuecoco": "A Fire-type crocodile starter with spicy bite and fiery demeanor",
    "Crocalor": "Fire-type mid evolution; a hot-tempered croc with blazing jaws",
    "Skeledirge": "Final Fuecoco form; Fire/Ghost skeletal dino that commands embers",
    "Quaxly": "A Water-type duckling starter with disciplined swimming posture",
    "Quaxwell": "Water-type evolved Quaxly; a dapper duck with hydrodynamic grace",
    "Quaquaval": "Final Quaxly form; Water/Fighting duck with dancing aquatic moves",
    "Lechonk": "A Normal-type piglet known for hearty grunts and rooting snout",
    "Oinkologne": "Hefty Lechonk evolution; odor-packed boar with sonic oinks",
    "Tarountula": "A Bug-type tarantula Pokemon that hides in traps to ensnare prey",
    "Spidops": "Final Tarountula form; a bulky Bug-type spider with shielded body",
    "Nymble": "A Bug-type nimble antlion that gathers scraps with speed",
    "Lokix": "Bug/Dark evolved Nymble; a stealthy assassin with scythe-like limbs",
    "Pawmi": "An Electric-type mouse Pokemon that stores charge in its paws",
    "Pawmo": "Electric/Fighting evolved Pawmi; agile sparrer with charged punches",
    "Pawmot": "Final Pawmi form; Electric/Fighting pugilist with rapid lightning blows",
    "Tandemaus": "A Normal-type twin mouse duo that hold paws when excited",
    "Maushold": "Evolved Tandemaus; a family of mice living in houses cooperatively",
    "Fidough": "A Fairy/Dog-shaped dough Pokemon with soft, kneadable body",
    "Dachsbun": "Final Fidough form; a bouncy Fairy-type sausage dog beloved for charm",
    "Smoliv": "A Grass/Normal olive sprout Pokemon that stores oil in its fruit",
    "Dolliv": "Grass/Normal evolved Smoliv; a sapling with clustered olive branch buds",
    "Arboliva": "Final Smoliv line; a Grass/Normal druid tree with healing olive powers",
    "Squawkabilly": "A Normal/Flying parrot with punk hair and squawking battle calls",
    "Nacli": "A Rock-type salt crystal Pokemon that shields itself on beaches",
    "Naclstack": "Rock evolved Nacli; stacked crystal columns that harden under the sun",
    "Garganacl": "Final Nacli line; Rock-type golem charged with salty geomancy",
    "Charcadet": "A Fire-type cadet Pokemon training with determined ember blows",
    "Armarouge": "Fire/Psychic jousting knight clad in heat-resistant armor",
    "Ceruledge": "Fire/Ghost sword-wielder that embers its blade with spectral flame",
    "Tadbulb": "A Water/Electric tadpole Pokemon generating currents in its tail",
    "Bellibolt": "Water/Electric frog Pokemon with electric sac that rings like a bell",
    "Wattrel": "An Electric/Flying seabird that charges using wing-generated sparks",
    "Kilowattrel": "Evolved Wattrel; a swift Electric/Flying gull that creates lightning jets",
    "Maschiff": "A Dark/Normal puppy Pokemon that protects Trainer with fierce bark",
    "Mabosstiff": "Final Maschiff form; a Dark/Normal mastiff guard with intimidating bite",
    "Shroodle": "A Normal/Poison mouse that forms clouds of nauseating odor",
    "Grafaiai": "Poison/Normal evolved Shroodle; a cunning sloth-like graffiti tagger",
    "Bramblin": "A Grass/Ghost walking bramble ball that roams under moonlight",
    "Brambleghast": "Final Brambolin form; Grass/Ghost ghastly walking cactus with blazing visage",
    "Toedscool": "A dual Ground/Poison toad with clumsy walk and spore-laden hands",
    "Toedscruel": "Evolved Toedscool; Ground/Poison grub-master who cultivates mushrooms",
    "Klawf": "A Rock-type crab Pokemon with one huge claw ideal for smashing",
    "Capsakid": "A Grass-type pepper seed Pokemon that grows spicy fruits",
    "Scovillain": "Evolved Capsakid; Grass/Fire pepper pod that emits scorching scent",
    "Rellor": "Bug-type ant Pokemon that forms marching lines and carries heavy loads",
    "Rabsca": "Final Rellor form; Bug/Psychic colony leader with psychic coordination",
    "Flittle": "A Fairy/Flying hummingbird Pokemon gathering nectar with tiny wings",
    "Espathra": "Fairy/Psychic moth-butterfly guardian that dances with telepathic grace",
    "Tinkatink": "A Fairy/Steel tinkering pixie that carries tiny hammer tools",
    "Tinkatuff": "Evolved Tinkatink; Fairy/Steel soldering sprite forging small inventions",
    "Tinkaton": "Final Tinkatink line; Fairy/Steel inventor wielding a giant hammer",
    "Wiglett": "A Water-type sand-dwelling worm that pops from the surf for prey",
    "Wugtrio": "Evolved Wiglett; Water-type triple worm with synchronized popping",
    "Bombirdier": "A Dark/Flying condor Pokemon cherishes explosive poop bombs",
    "Finizen": "A Water-type dolphin-like calf that practices bubble dancing",
    "Palafin": "Final Finizen form; Water-type hero whale with superhuman strength in Hero Mode",
    "Varoom": "Dark/Steel wheeled robot Pokemon with gear-shifting arms",
    "Revavroom": "Evolved Varoom; Dark/Steel speedster with turbocharged drill grip",
    "Cyclizar": "A Dragon/Normal saddle-dragon Pokemon that carries Trainers on its back",
    "Orthworm": "A Steel/Ground underground drilling worm made of segmented steel",
    "Glimmet": "A Rock/Poison glittering stone Pokemon that sparkles when hit",
    "Glimmora": "Final Glimmet form; Rock/Poison stalactite Pokemon studded with gems",
    "Greavard": "A Ghost-type dog Pokemon bound to a grave and wanders near tombstones",
    "Houndstone": "Evolved Greavard; a Ghost-type spectral judge that enforces graveyard order",
    "Flamigo": "A Flying/Fighting flamingo dancer that balances on one leg to strike",
    "Cetoddle": "An Ice-type beluga-like calf that plays in icy floods",
    "Cetitan": "Evolved Cetoddle; a massive Ice-type pachyderm that stomps with glacier strength",
    "Veluza": "A Water/Psychic eel Pokemon that senses currents and glows in deep seas",
    "Dondozo": "A Water-type giant catfish that carries Wishiwashi schools on its back",
    "Tatsugiri": "A Water/Dragon trio of drifting drake mushrooms with suction-cup bodies",
    "Annihilape": "A Fighting/Ghost evolved Primeape; rage-fueled spirit wielding phantom fists",
    "Clodsire": "A Water/Ground evolved Wooper; a relaxed swamp monster with mud armor",
    "Farigiraf": "A Normal/Psychic evolved Girafarig with antenna horns that sense emotional resonance",
    "Dudunsparce": "A Normal-type ray-winged serpentine and somewhat insectoid segmented burrower",
    "Kingambit": "A Dark/Steel evolved Bisharp; armored king leading blade-arm legion",
    "Great-Tusk": "A Ground/Fighting Paradox Pokemon resembling ancient mammoth warrior with tusks",
    "Scream-Tail": "A Fairy/Psychic Paradox Pokemon that screams psychic lullabies to paralyze foes",
    "Brute-Bonnet": "A Grass/Dark Paradox Pokemon mushroom warrior with maniacal strength",
    "Flutter-Mane": "A Ghost/Fairy Paradox Pokemon reminiscent of ancient spectral feline grace",
    "Slither-Wing": "A Bug/Fighting Paradox Pokemon centipede flier with slashing mandibles",
    "Sandy-Shocks": "An Electric/Ground Paradox Pokemon that buries in sand to ambush with volts",
    "Iron-Treads": "A Ground/Steel Paradox Pokemon tank-like worm with iron coils",
    "Iron-Bundle": "An Ice/Electric Paradox Pokemon swift arctic bird with storm tactics",
    "Iron-Hands": "A Fighting/Electric Paradox Pokemon with massive iron fists and explosive punches",
    "Iron-Jugulis": "A Dark/Flying Paradox Pokemon monstrous bat with iron-plated wings",
    "Iron-Moth": "A Bug/Fire Paradox Pokemon blazing moth igniting trails of embers",
    "Iron-Thorns": "A Rock/Electric Paradox Pokemon thorn-armored tank that generates shockwaves",
    "Frigibax": "An Ice/Dragon fossil hatchling with icy fangs and snowy carapace",
    "Arctibax": "Evolved Frigibax; an Ice/Dragon juvenile with strengthened frost armor",
    "Baxcalibur": "Final Frigibax line; an Ice/Dragon draconic knight with glacier sword horns",
    "Gimmighoul": "A Ghost-type coin sprite that hides among treasure to guard secrets",
    "Gholdengo": "Evolved Gimmighoul; a Ghost/Steel treasure chest Pokemon holding golden coins",
    "Wo-Chien": "A Dark/Grass Tao trio canine that wards off killers with frightful bark",
    "Chien-Pao": "A Dark/Ice Legendary tiger Pokemon known for its swift, stealthy strikes",
    "Ting-Lu": "A Dark/Ground Legendary Pokemon with a massive, armored body and burial powers",
    "Chi-Yu": "A Dark/Fire Legendary fox Pokemon embodying intense flames and curses",
    "Roaring-Moon": "A Dragon/Dark Paradox Pokemon with ferocious speed and power",
    "Iron-Valiant": "A Fairy/Fighting Paradox Pokemon combining grace and combat prowess",
    "Koraidon": "A Fighting/Dragon Legendary Pokemon representing ancient primal strength",
    "Miraidon": "An Electric/Dragon Legendary Pokemon symbolizing futuristic technology",
    "Walking-Wake": "A Water/Dragon Paradox Pokemon with serpentine, flowing aquatic form",
    "Iron-Leaves": "A Grass/Psychic Paradox Pokemon resembling a sharp-edged metallic leaf",
    "Dipplin": "A Grass/Ghost Pokemon shaped like an apple with a hidden ghost inside",
    "Poltchageist": "A Ghost/Grass Pokemon with a haunted core",
    "Sinistcha": "Evolved Poltchageist; Ghost/Grass Pokemon with eerie apple lantern appearance",
    "Okidogi": "A Fighting-type dog Pokemon with lively, loyal spirit and strong jaws",
    "Munkidori": "A numble Fighting-type monkey Pokemon skilled in combat",
    "Fezandipiti": "Final Okidogi line; a Fighting-type agile, masked monkey with feathery tail",
    "Ogerpon": "A Fairy-type masked Pokemon with mystic dance powers and ancient charm",
    "Archaludon": "A Dragon/Steel Pokemon resembling a colossal armored dragon",
    "Hydrapple": "A Water/Dragon Paradox apple Pokemon with serpentine hydra features",
    "Gouging-Fire": "A Fire/Dragon Paradox Pokemon with fierce fiery dragon traits",
    "Raging-Bolt": "An Electric/Dragon Paradox Pokemon embodying fierce lightning energy",
    "Iron-Boulder": "A Rock/Steel Paradox Pokemon resembling a massive iron-clad boulder",
    "Iron-Crown": "A Steel/Dragon Paradox Pokemon crowned with sharp metallic spikes",
    "Terapagos": "A Legendary Pokemon with multiple forms and ancient terra powers",
    "Pecharunt": "A small, playful Fighting/Dragon dinosaur-like Pokemon, ancestor to Koraidon"
};
const locations = {
    "Haruba": "A desert settlement in Almia, known for its proximity to the Haruba Desert and the Capture Arena",
    "Lively": "A bustling settlement in the Mystery Dungeon world, known for being near Serene",
    "Mintale": "A rarely seen location, likely in Kanto, featured in the Pokemon Puzzle League anime intro",
    "Noe": "A peaceful locale in the Mystery Dungeon world, with limited known details",
    "Northerly": "A snowy region in Toyland, connected to the Frozen Tundra in Pokemon Rumble World",
    "Pokemon-Beach": "A scenic shoreline in the Mystery Dungeon world, often used as a resting place for Pokemon",
    "Pokemon-Garden": "A tranquil area in the Mystery Dungeon world, appearing in some spin-off titles",
    "Pokemon-Square": "The central hub in Pokemon Mystery Dungeon: Red and Blue Rescue Team, where rescue teams gather",
    "Pokemon-Village": "A hidden refuge for Pokemon in the Mystery Dungeon world, protected from human interference",
    "Post": "A major town in Pokemon Mystery Dungeon: Gates to Infinity, central to the player's journey",
    "Pueltown": "The largest city in Almia, featuring Altru Inc. and many mission hubs in Pokemon Ranger: Shadows of Almia",
    "Puzzle": "A never-released location from the canceled Pokemon Puzzle game for the Game Boy Color",
    "Ringtown": "The starting point in Pokemon Ranger, home of the Ranger Base and Lyra Forest",
    "Ryme": "A high-tech urban setting featured in Detective Pikachu, with both human and Pokemon cohabitation",
    "Sahra": "A desert-themed area in the Mystery Dungeon world with minimal canonical information",
    "Serene": "A peaceful village in Pokemon Super Mystery Dungeon, where the player begins their journey",
    "Shiver-Camp": "A snowy base in Almia near Hia Valley, essential for missions in frigid climates",
    "Shivre": "A wintry, high-tech city on Aeos Island featured in Pokemon UNITE",
    "Summerland": "A tropical port town in Fiore, known for its marine activities and access to Olive Jungle",
    "Tilt": "A slanted village in Oblivia from Pokemon Ranger: Guardian Signs, linked to Mitonga Road",
    "Toyland": "",
    "Treasure": "A coastal settlement in the Mystery Dungeon world, near Wigglytuff's Guild and Sharpedo Bluff",
    "Vientown": "A mid-sized town in Almia, home to the Ranger School and multiple mission paths",
    "Westerly": "A wild west-themed town in Toyland, neighboring the rugged flats in Pokemon Rumble World",
    "Wintown": "A snow-covered locale in Fiore, important in missions involving the Sekra Range",
    "Accumula": "A peaceful settlement in Unova, known for its overlook and Team Plasma's early appearances",
    "Alfornada": "A remote Paldean location, home to Psychic-type Gym Leader Tulip and surrounded by caves",
    "Ambrette": "A coastal area in Kalos known for its aquarium and nearby fossil restoration lab",
    "Anistar": "A mystical Kalos locale featuring a giant sundial and a Psychic-type Gym",
    "Anville": "Located in Unova, known for its train yard and weekend item trades",
    "Aquacorde": "A riverside starting point in Kalos, known for its quaint cafes and shops",
    "Artazon": "A vibrant, art-themed area in Paldea, home to Gym Leader Brassius",
    "Aspertia": "A large Unovan settlement featuring a Pokemon Gym and scenic overlook; the player's hometown in B2W2",
    "Azalea": "A Johto location famous for its Slowpoke Well and Kurt the Poke Ball craftsman",
    "Ballonlea": "A Galarian fairy tale-like forest hamlet, home to Fairy-type Gym Leader Opal",
    "Black": "A modern, technology-driven area in Unova accessible in Pokemon Black",
    "Blackthorn": "Located in Johto, known for its Dragon-type Gym and the Dragon's Den",
    "Cabo-Poco": "A small seaside community in Paldea, where the protagonist begins their journey in SV",
    "Camphrier": "A rustic Kalos locale known for Shabboneau Castle and nearby berry fields",
    "Canalave": "A port settlement in Sinnoh, featuring a library rich in Pokemon lore and a Steel-type Gym",
    "Cascarrafa": "A stylish Paldean location built around waterfalls, home to Water-type Gym Leader Kofu",
    "Castelia": "A sprawling Unova metropolis with a harbor, piers, and the Bug-type Gym",
    "Celadon": "A major Kanto commercial hub, known for its department store and Erika's Grass-type Gym",
    "Celestic": "An ancient Sinnoh locale with ruins related to the Legendary Pokemon and Sinnoh mythology",
    "Cerulean": "A Kanto destination with a Water-type Gym and access to Nugget Bridge and Cerulean Cave",
    "Cherrygrove": "A quaint coastal place in Johto, serving as one of the player's early stops",
    "Cianwood": "A beachside location in Johto known for its pharmacy and Fighting-type Gym",
    "Circhester": "An icy Galarian town with a hot spring and a Gym specializing in Ice or Rock types, version-dependent",
    "Cinnabar-Island": "A volcanic island in Kanto with a Fire-type Gym and a closed Pokemon Lab",
    "Cortondo": "A floral-themed location in Paldea, featuring Bug-type Gym Leader Katy",
    "Coumarine": "A split-level Kalos harbor city connected by a monorail and home to the Grass-type Gym",
    "Couriway": "A scenic Kalos stopover known for its waterfalls and railway station",
    "Cyllage": "A coastal Kalos destination with a Rock-type Gym and cliffside cycling roads",
    "Dendemille": "A chilly area in Kalos known for its Miltank farm and proximity to Frost Cavern",
    "Dewford": "A small island locale in Hoenn known for Granite Cave and the Fighting-type Gym",
    "Diamond-Settlement": "An ancient Hisuian settlement in the Crimson Mirelands, home to the Diamond Clan",
    "Driftveil": "A bustling Unova port area with a market and Clay's Ground-type Gym",
    "Ecruteak": "A historic Johto city featuring the Burned Tower, Bell Tower, and a Ghost-type Gym",
    "Eterna": "A Sinnoh city with a Grass-type Gym and Team Galactic's old headquarters",
    "Ever-Grande": "The final destination in Hoenn, home to the Pokemon League and Victory Road",
    "Fallarbor": "A volcanic ash-covered location in Hoenn with a contest hall and professor's lab",
    "Fight-Area": "A Battle Zone location in Sinnoh where powerful trainers gather post-game",
    "Five-Island": "One of the Sevii Islands, known for the Rocket Warehouse and Memorial Pillar",
    "Floaroma": "A serene Sinnoh settlement known for its flower fields and connection to Eterna Forest",
    "Floccesy": "A snowy Unova village surrounded by snowy mountains and home to a small Pokemon Center",
    "Fortree": "A treehouse-style Hoenn community known for its Flying-type Gym and canopy walkways",
    "Four-Island": "One of the Sevii Islands featuring the Battle Factory and challenging post-game facilities",
    "Freezington": "An icy town in Paldea with a large thermal spring and the Ice-type Gym led by Greta",
    "Frontier-Access": "A post-game Sinnoh area granting access to the Battle Frontier facilities",
    "Fuchsia": "A colorful Kanto location with a Safari Zone and a Poison-type Gym",
    "Geosenge": "A mysterious Hoenn town known for its ancient meteor crater and psychic phenomena",
    "Goldenrod": "A large Johto metropolis featuring a Radio Tower, department store, and Normal-type Gym",
    "Hammerlocke": "A historic Galar city with a stone tower Gym and the base of Champion Leon",
    "Hammerlocke-Hills": "The surrounding rural area near Hammerlocke, rich in wild Pokemon and natural scenery",
    "Hau'oli": "A sunny Alola coastal city with a bustling market and the Island Challenge starting point",
    "Heahea": "A peaceful Alola town known for its lighthouse and traditional culture",
    "Hearthome": "A Sinnoh city famous for its contests, Amity Park, and the Gym specializing in Normal types",
    "Hulbury": "A seaside Galar town with a strong fishing tradition and the Water-type Gym",
    "Humilau": "A small Hoenn harbor town featured in Pokemon Emerald, known for rare Pokemon encounters",
    "Icirrus": "A chilly Unova town near a snowy mountain range, home to the Ice-type Gym Leader Brycen",
    "Iki": "A remote island in Alola with rich traditions and the location of the Battle Royal Dome",
    "Jubilife": "A bustling Sinnoh city housing the Global Terminal and numerous shops",
    "Kiloude": "A Galar town known for the Battle Tower and the location where the player trains post-game",
    "Konikoni": "A lively Alola marketplace town known for its shopping district and rare item vendors",
    "Lacunosa": "A Paldean town near the lake with scenic views and a local Gym focused on Ice types",
    "Lavaridge": "A volcanic Hoenn town with hot springs and the Fire-type Gym",
    "Lavender": "A mysterious Kanto town famous for its Pokemon Tower and ghostly legends",
    "Laverre": "A quaint Kalos town known for its fairy-tale ambiance and Fairy-type Gym",
    "Lentimas": "A newly developed area in Paldea, hosting the Futaba Gym and unique technological sites",
    "Levincia": "A modern, bustling Paldean city famous for its skating culture and Bug-type Gym",
    "Littleroot": "The small Hoenn starting village surrounded by forest and home to Professor Birch's lab",
    "Lilycove": "A coastal Hoenn city with a large department store, contest hall, and a harbor",
    "Los-Platos": "A small coastal village in Paldea, known for its calm beaches and fishing culture",
    "Lumiose": "A large, vibrant Kalos metropolis known for its iconic Prism Tower and diverse culture",
    "Mahogany": "A Johto town near the Pokemon Lake with a dark history and the Ice Path entrance",
    "Malie": "An Alola coastal town on Akala Island, known for its traditional architecture and fishing port",
    "Mauville": "A bustling Hoenn city famous for its Game Corner and electric-type Gym",
    "Medali": "A futuristic Paldea city with advanced technology and the Electric-type Gym",
    "Mesagoza": "A large Paldea urban center, known for its stadiums and cultural landmarks",
    "Mistralton": "A windy Unova city featuring an Electric-type Gym and proximity to the Skyarrow Bridge",
    "Montenevera": "A scenic Paldea town perched on cliffs, famous for its tranquility and hiking trails",
    "Mossdeep": "A Hoenn island city hosting the Space Center and dual Psychic-type Gym",
    "Mossui": "A small settlement in Sinnoh known for its traditional houses and proximity to natural springs",
    "Motostoke": "An industrial Galar city blending old-world charm with modern factories and the Steel-type Gym",
    "Nacrene": "A cultural Unova city featuring an Art Museum and the Normal-type Gym",
    "New-Bark": "The Johto starting village where trainers receive their first Pokemon and begin their journey",
    "Nimbasa": "A lively Unova city with a large amusement park and the Electric-type Gym",
    "Nuvema": "A quiet Unova village where the player's Pokemon adventure begins",
    "Oldale": "A small Hoenn community surrounded by forests, known for its relaxed atmosphere",
    "Olivine": "A Johto port town famous for its lighthouse and Steel-type Gym",
    "One-Island": "The first of the Sevii Islands, featuring beaches and the Battle Factory",
    "Opelucid": "A unique Unova city with futuristic and traditional architectural styles, home to the Dragon-type Gym",
    "Oreburgh": "A Sinnoh mining town known for its rugged terrain and Rock-type Gym",
    "Pacifidlog": "A Hoenn town built on interconnected floating logs in a vast lagoon",
    "Pallet": "The iconic Kanto starting point where trainers receive their first Pokemon",
    "Paniola": "A ranching town in Alola known for its large pastures and traditional values",
    "Pastoria": "A Sinnoh town surrounded by wetlands and home to the Great Marsh and Water-type Gym",
    "Pearl-Settlement": "The Sinnoh wilderness base camp used for exploration and research",
    "Petalburg": "A Hoenn town with a strong forestry presence and the Home Gym of Norman",
    "Pewter": "A historic Kanto city known for its Rock-type Gym and proximity to Mt. Moon",
    "Porto-Marinada": "A scenic Paldea coastal town known for its fishing industry and charming harbor",
    "Marinade": "A calm Paldea settlement famed for its waterside views and peaceful lifestyle",
    "Postwick": "The Galar region's quaint starting village where trainers begin their adventure",
    "Resort-Area": "A Sinnoh leisure spot featuring hot springs, inns, and relaxation facilities",
    "Rustboro": "A modern Hoenn city famous for its technological development and the Rock-type Gym",
    "Safari-Zone-Gate": "The entrance to the Johto Safari Zone, where rare Pokemon can be caught",
    "Saffron": "A major Kanto metropolis known for its Silph Co. headquarters and Psychic-type Gym",
    "Sandgem": "The Sinnoh region's starting point and home to Professor Rowan's lab",
    "Santalune": "A lively Kalos town known for its natural springs and the Bug-type Gym",
    "Seafolk": "A Hoenn island community inhabited by the mysterious Seafolk tribe",
    "Seven-Island": "The final Sevii Island, featuring lush landscapes and unique Pokemon habitats",
    "Shalour": "A Kalos town known for its Fighting Dojo and the Tower of Mastery",
    "Six-Island": "A Sevii Island featuring varied terrain and wild Pokemon encounters",
    "Slateport": "A bustling Hoenn port city known for its marketplace and the Oceanic Museum",
    "Stow-on-Side": "A lively Galar market town famous for its marketplace and unique culture",
    "Snowbelle": "A Sinnoh city covered in snow year-round, home to the Fighting-type Gym",
    "Snowpoint": "A snowy Sinnoh city known for its ancient temple and Ice-type Gym",
    "Solaceon": "A Sinnoh village famous for its Pokemon Day Care and peaceful atmosphere",
    "Sootopolis": "A Hoenn city located inside a crater, home to the Water-type Gym and legendary lore",
    "Spikemuth": "A dark-themed Galar town known for its Poison-type Gym and gothic style",
    "Striaton": "An Unova city where trainers choose their first starter Pokemon, hosting a multi-type Gym",
    "Sunyshore": "A bright Sinnoh city known for its lighthouse and Electric-type Gym",
    "Survival-Area": "A remote Paldea wilderness area used for Pokemon survival training and challenges",
    "Tapu": "A secretive Alola village tied to the guardian deities of the islands",
    "Three-Island": "The third Sevii Island, featuring ruins and diverse Pokemon habitats",
    "Turffield": "A Hoenn city famous for its large Grass-type Gym and farming community",
    "Twinleaf": "A Sinnoh starting village known for its close-knit community and Professor Rowan's lab",
    "Two-Island": "The second Sevii Island, offering a nature preserve and unique Pokemon encounters",
    "Undella": "An Unova coastal town known for its beaches and hot springs",
    "Vaniville": "A Kalos starting village surrounded by meadows and a friendly community",
    "Veilstone": "A Sinnoh city known for its large department store and Fighting-type Gym",
    "Verdanturf": "A quiet Hoenn town known for its clean air and nearby routes filled with wild Pokemon",
    "Vermilion": "A Kanto port city famous for its harbor and Electric-type Gym",
    "Violet": "A Paldea city known for its cultural landmarks and diverse Pokemon habitats",
    "Virbank": "An industrial Unova city housing the Poison-type Gym and biotech companies",
    "Viridian": "A historic Kanto city with a traditional Gym and the entrance to the Viridian Forest",
    "Wedgehurst": "A Galar starting village known for its welcoming atmosphere and nearby forests",
    "White-Forest": "A hidden Sinnoh forest area inhabited by rare Pokemon and mysterious phenomena",
    "Wyndon": "The Galar region's bustling city, home to the Pokemon League and Dragon-type Gym",
    "Zapapico": "A vibrant Paldea settlement known for its industrial background and lively markets",
    "Agate": "A coastal Paldea village with a fishing culture and beautiful beaches",
    "Gateon-Port": "A bustling Unova harbor town known for its port facilities and trade",
    "Phenac": "An ancient Sinnoh town filled with ruins and historical significance",
    "Phenace": "A mysterious location in the Orre region, known from Pokemon Colosseum",
    "Pyrite": "A small Orre town characterized by its mining heritage and rugged surroundings",
    "The-Under": "An underground area beneath Pyrite Town in the Orre region",
    "White": "A Johto city famous for its snowy climate and the Ice-type Gym",
    "Aqua-Resort": "A relaxing Oblivia resort known for its hot springs and scenic views",
    "Axle": "A Toyland town centered around the World Axle and its amusement attractions",
    "Baram": "A settlement in the Pokemon Mystery Dungeon world known for its rugged terrain",
    "Boyleland": "An Almia region area featuring volcanic caves and surrounding villages",
    "Capim": "A location in the Pokemon Mystery Dungeon world with tropical features",
    "Centra": "A Pasio city known for its central location and urban environment",
    "Chicole": "An Almia village known for its peaceful paths and Partner Farm",
    "Cocona": "An Oblivia village surrounded by forest and near Lapras Beach",
    "Easterly": "A Toyland town known for its sunny climate and Sun-Dappled Bank"
};
const moves = {
    "10000000-Volt-Thunderbolt": "Pikachu-exclusive Z-Move. High critical hit ratio",
    "Absorb": "User recovers half the HP inflicted on opponent",
    "Accelerock": "User attacks first",
    "Acid": "May lower opponent's Special Defense",
    "Acid-Armor": "Sharply raises user's Defense",
    "Acid-Downpour": "Poison type Z-Move",
    "Acid-Spray": "Sharply lowers opponent's Special Defense",
    "Acrobatics": "Stronger when the user does not have a held item",
    "Acupressure": "Sharply raises a random stat",
    "Aerial-Ace": "Ignores Accuracy and Evasiveness",
    "Aeroblast": "High critical hit ratio",
    "After-You": "Gives target priority in the next turn",
    "Agility": "Sharply raises user's Speed",
    "Air-Cutter": "High critical hit ratio",
    "Air-Slash": "May cause flinching",
    "All-Out-Pummeling": "Fighting type Z-Move",
    "Alluring-Voice": "",
    "Ally-Switch": "User switches with opposite teammate",
    "Amnesia": "Sharply raises user's Special Defense",
    "Anchor-Shot": "The user entangles the target with its anchor chain while attacking. The target becomes unable to flee",
    "Ancient-Power": "May raise all user's stats at once",
    "Apple-Acid": "Lowers target's Special Defense",
    "Aqua-Cutter": "High critical hit ratio",
    "Aqua-Jet": "User attacks first",
    "Aqua-Ring": "Restores a little HP each turn",
    "Aqua-Step": "Raises user's Speed",
    "Aqua-Tail": "",
    "Arm-Thrust": "Hits 2-5 times in one turn",
    "Armor-Cannon": "Lowers user's Defense and Special Defense",
    "Aromatherapy": "Cures all status problems in your party",
    "Aromatic-Mist": "Raises Special Defense of an ally",
    "Assist": "User performs a move known by its allies at random",
    "Assurance": "Power doubles if opponent already took damage in the same turn",
    "Astonish": "May cause flinching",
    "Astral-Barrage": "The user attacks by sending a frightful amount of small ghosts at opposing Pokemon",
    "Attack-Order": "High critical hit ratio",
    "Attract": "If opponent is the opposite gender, it's less likely to attack",
    "Aura-Sphere": "Ignores Accuracy and Evasiveness",
    "Aura-Wheel": "Changes type based on Morpeko's Mode",
    "Aurora-Beam": "May lower opponent's Attack",
    "Aurora-Veil": "Halves damage from Physical and Special attacks for five turns",
    "Autotomize": "Reduces weight and sharply raises Speed",
    "Avalanche": "Power doubles if user took damage first",
    "Axe-Kick": "May confuse opponent. If it misses, the user loses HP",
    "Baby-Doll-Eyes": "Always goes first. Lowers the target's attack",
    "Baddy-Bad": "Reduces damage from Physical attacks",
    "Baneful-Bunker": "Protects the user and poisons opponent on contact",
    "Barb-Barrage": "May poison opponent; inflicts double damage if the target is already poisoned",
    "Barrage": "Hits 2-5 times in one turn",
    "Barrier": "Sharply raises user's Defense",
    "Baton-Pass": "User switches out and gives stat changes to the incoming Pokemon",
    "Beak-Blast": "The user first heats up its beak, and then it attacks the target. Making direct contact with the Pokemon while it's heating up its beak results in a burn",
    "Beat-Up": "Each Pokemon in user's party attacks",
    "Behemoth-Bash": "Damage doubles if target is Dynamaxed",
    "Behemoth-Blade": "Damage doubles if target is Dynamaxed",
    "Belch": "User must have consumed a Berry",
    "Belly-Drum": "User loses 50% of its max HP, but Attack raises to maximum",
    "Bestow": "Gives the user's held item to the target",
    "Bide": "User takes damage for two turns then strikes back double",
    "Bind": "Traps opponent, damaging them for 4-5 turns",
    "Bite": "May cause flinching",
    "Bitter-Blade": "User recovers half the HP inflicted on opponent",
    "Bitter-Malice": "Lowers opponent's Attack",
    "Black-Hole-Eclipse": "Dark type Z-Move",
    "Blast-Burn": "User must recharge next turn",
    "Blaze-Kick": "High critical hit ratio. May burn opponent",
    "Blazing-Torque": "May burn the opponent",
    "Bleakwind-Storm": "May lower opponent's Speed",
    "Blizzard": "May freeze opponent",
    "Block": "Opponent cannot flee or switch",
    "Blood-Moon": "Cannot be used twice in a row",
    "Bloom-Doom": "Grass type Z-Move",
    "Blue-Flare": "May burn opponent",
    "Body-Press": "The higher the user's Defense, the stronger the attack",
    "Body-Slam": "May paralyze opponent",
    "Bolt-Beak": "If the user attacks before the target, the power of this move is doubled",
    "Bolt-Strike": "May paralyze opponent",
    "Bone-Club": "May cause flinching",
    "Bone-Rush": "Hits 2-5 times in one turn",
    "Bonemerang": "Hits twice in one turn",
    "Boomburst": "Hits all adjacent Pokemon",
    "Bounce": "Springs up on first turn, attacks on second. May paralyze opponent",
    "Bouncy-Bubble": "User recovers half the HP inflicted on opponent",
    "Branch-Poke": "",
    "Brave-Bird": "User receives recoil damage",
    "Breaking-Swipe": "Hits multiple opponents and lowers their attack",
    "Breakneck-Blitz": "Normal type Z-Move",
    "Brick-Break": "Breaks through Reflect and Light Screen barriers",
    "Brine": "Power doubles if opponent's HP is less than 50%",
    "Brutal-Swing": "The user swings its body around violently to inflict damage on everything in its vicinity",
    "Bubble": "May lower opponent's Speed",
    "Bubble-Beam": "May lower opponent's Speed",
    "Bug-Bite": "Receives the effect from the opponent's held berry",
    "Bug-Buzz": "May lower opponent's Special Defense",
    "Bulk-Up": "Raises user's Attack and Defense",
    "Bulldoze": "Lowers opponent's Speed",
    "Bullet-Punch": "User attacks first",
    "Bullet-Seed": "Hits 2-5 times in one turn",
    "Burn-Up": "To inflict massive damage, the user burns itself out. After using this move, the user will no longer be Fire type",
    "Burning-Bulwark": "",
    "Burning-Jealousy": "Hits all opponents, and burns any that have had their stats boosted",
    "Buzzy-Buzz": "Paralyzes the opponent",
    "Calm-Mind": "Raises user's Special Attack and Special Defense",
    "Camouflage": "Changes user's type according to the location",
    "Captivate": "Sharply lowers opponent's Special Attack if opposite gender",
    "Catastropika": "Pikachu-exclusive Z-Move",
    "Ceaseless-Edge": "Sets up Spikes",
    "Celebrate": "The Pokemon congratulates you on your special day. No battle effect",
    "Charge": "Raises user's Special Defense and next Electric move's power increases",
    "Charge-Beam": "May raise user's Special Attack",
    "Charm": "Sharply lowers opponent's Attack",
    "Chatter": "Confuses opponent",
    "Chilling-Water": "Lowers opponent's Attack",
    "Chilly-Reception": "Switches out and summons a snowstorm lasting 5 turns",
    "Chip-Away": "Ignores opponent's stat changes",
    "Chloroblast": "User receives recoil damage",
    "Circle-Throw": "In battles, the opponent switches. In the wild, the Pokemon runs",
    "Clamp": "Traps opponent, damaging them for 4-5 turns",
    "Clanging-Scales": "Lowers user's Defense",
    "Clangorous-Soul": "Raises all user's stats but loses HP",
    "Clangorous-Soulblaze": "Kommo-o exclusive Z-Move",
    "Clear-Smog": "Removes all of the target's stat changes",
    "Close-Combat": "Lowers user's Defense and Special Defense",
    "Coaching": "Boosts Attack and Defense of a teammate",
    "Coil": "Raises user's Attack, Defense and Accuracy",
    "Collision-Course": "Boosted even more if it's super-effective",
    "Combat-Torque": "May paralyze the opponent",
    "Comet-Punch": "Hits 2-5 times in one turn",
    "Comeuppance": "Deals more damage to the opponent that last inflicted damage on it",
    "Confide": "Lowers opponent's Special Attack",
    "Confuse-Ray": "Confuses opponent",
    "Confusion": "May confuse opponent",
    "Constrict": "May lower opponent's Speed by one stage",
    "Continental-Crush": "Rock type Z-Move",
    "Conversion": "Changes user's type to that of its first move",
    "Conversion-2": "User changes type to become resistant to opponent's last move",
    "Copycat": "Copies opponent's last move",
    "Core-Enforcer": "Suppresses the target's ability if the target has already moved",
    "Corkscrew-Crash": "Steel type Z-Move",
    "Corrosive-Gas": "Removes opponent's items",
    "Cosmic-Power": "Raises user's Defense and Special Defense",
    "Cotton-Guard": "Drastically raises user's Defense",
    "Cotton-Spore": "Sharply lowers opponent's Speed",
    "Counter": "When hit by a Physical Attack, user strikes back with 2x power",
    "Court-Change": "Swaps the effects on either side of the field",
    "Covet": "Opponent's item is stolen by the user",
    "Crabhammer": "High critical hit ratio",
    "Crafty-Shield": "Protects the Pokemon from status moves",
    "Cross-Chop": "High critical hit ratio",
    "Cross-Poison": "High critical hit ratio. May poison opponent",
    "Crunch": "May lower opponent's Defense",
    "Crush-Claw": "May lower opponent's Defense",
    "Crush-Grip": "More powerful when opponent has higher HP",
    "Curse": "Ghosts lose 50% of max HP and curse the opponent; Non-Ghosts raise Attack, Defense and lower Speed",
    "Cut": "",
    "Dark-Pulse": "May cause flinching",
    "Dark-Void": "Puts all adjacent opponents to sleep",
    "Darkest-Lariat": "Ignores opponent's stat changes",
    "Dazzling-Gleam": "Hits all adjacent opponents",
    "Decorate": "Sharply raises target's Attack and Special Attack",
    "Defend-Order": "Raises user's Defense and Special Defense",
    "Defense-Curl": "Raises user's Defense",
    "Defog": "Lowers opponent's Evasiveness and clears fog",
    "Destiny-Bond": "If the user faints, the opponent also faints",
    "Detect": "Protects the user, but may fail if used consecutively",
    "Devastating-Drake": "Dragon type Z-Move",
    "Diamond-Storm": "May sharply raise user's Defense",
    "Dig": "Digs underground on first turn, attacks on second. Can also escape from caves",
    "Dire-Claw": "May poison, paralyze or put the opponent to sleep",
    "Disable": "Opponent can't use its last attack for a few turns",
    "Disarming-Voice": "Ignores Accuracy and Evasiveness",
    "Discharge": "May paralyze opponent",
    "Dive": "Dives underwater on first turn, attacks on second turn",
    "Dizzy-Punch": "May confuse opponent",
    "Doodle": "Changes the abilities of the user and its teammates to that of the target",
    "Doom-Desire": "Damage occurs 2 turns later",
    "Double-Hit": "Hits twice in one turn",
    "Double-Iron-Bash": "Hits twice in one turn; may cause flinching",
    "Double-Kick": "Hits twice in one turn",
    "Double-Shock": "After using this move, the user will no longer be Electric type",
    "Double-Slap": "Hits 2-5 times in one turn",
    "Double-Team": "Raises user's Evasiveness",
    "Double-Edge": "User receives recoil damage",
    "Draco-Meteor": "Sharply lowers user's Special Attack",
    "Dragon-Ascent": "Lowers user's Defense and Special Defense",
    "Dragon-Breath": "May paralyze opponent",
    "Dragon-Cheer": "",
    "Dragon-Claw": "",
    "Dragon-Dance": "Raises user's Attack and Speed",
    "Dragon-Darts": "User attacks twice",
    "Dragon-Energy": "The higher the user's HP, the higher the power",
    "Dragon-Hammer": "The user uses its body like a hammer to attack the target and inflict damage",
    "Dragon-Pulse": "",
    "Dragon-Rage": "Always inflicts 40 HP",
    "Dragon-Rush": "May cause flinching",
    "Dragon-Tail": "In battles, the opponent switches. In the wild, the Pokemon runs",
    "Drain-Punch": "User recovers half the HP inflicted on opponent",
    "Draining-Kiss": "User recovers most the HP inflicted on opponent",
    "Dream-Eater": "User recovers half the HP inflicted on a sleeping opponent",
    "Drill-Peck": "",
    "Drill-Run": "High critical hit ratio",
    "Drum-Beating": "Lowers opponent's Speed",
    "Dual-Chop": "Hits twice in one turn",
    "Dual-Wingbeat": "The user slams the target with its wings. The target is hit twice in a row",
    "Dynamax-Cannon": "Damage doubles if opponent is Dynamaxed",
    "Dynamic-Punch": "Confuses opponent",
    "Earth-Power": "May lower opponent's Special Defense",
    "Earthquake": "Power is doubled if opponent is underground from using Dig",
    "Echoed-Voice": "Power increases each turn",
    "Eerie-Impulse": "Sharply lowers opponent's Special Attack",
    "Eerie-Spell": "Deals damage and reduces opponent's PP",
    "Egg-Bomb": "",
    "Electric-Terrain": "Prevents all Pokemon from falling asleep for 5 turns",
    "Electrify": "Changes the target's move to Electric type",
    "Electro-Ball": "The faster the user, the stronger the attack",
    "Electro-Drift": "Boosted even more if it's super-effective",
    "Electro-Shot": "Charges on first turn, attacks on second",
    "Electroweb": "Lowers opponent's Speed",
    "Embargo": "Opponent cannot use items",
    "Ember": "May burn opponent",
    "Encore": "Forces opponent to keep using its last move for 3 turns",
    "Endeavor": "Reduces opponent's HP to same as user's",
    "Endure": "Always left with at least 1 HP, but may fail if used consecutively",
    "Energy-Ball": "May lower opponent's Special Defense",
    "Entrainment": "Makes target's ability same as user's",
    "Eruption": "Stronger when the user's HP is higher",
    "Esper-Wing": "High critical hit ratio. Raises user's Speed",
    "Eternabeam": "User can't move on the next turn",
    "Expanding-Force": "Increases power and hits all opponents on Psychic Terrain",
    "Explosion": "User faints",
    "Extrasensory": "May cause flinching",
    "Extreme-Evoboost": "Eevee-exclusive Z-Move. Sharply raises all stats",
    "Extreme-Speed": "User attacks first",
    "Facade": "Power doubles if user is burned, poisoned, or paralyzed",
    "Fairy-Lock": "Prevents fleeing in the next turn",
    "Fairy-Wind": "",
    "Fake-Out": "User attacks first, foe flinches. Only usable on first turn",
    "Fake-Tears": "Sharply lowers opponent's Special Defense",
    "False-Surrender": "Ignores Accuracy and Evasiveness",
    "False-Swipe": "Always leaves opponent with at least 1 HP",
    "Feather-Dance": "Sharply lowers opponent's Attack",
    "Feint": "Only hits if opponent uses Protect or Detect in the same turn",
    "Feint-Attack": "Ignores Accuracy and Evasiveness",
    "Fell-Stinger": "Drastically raises user's Attack if target is KO'd",
    "Fickle-Beam": "May deal double damage",
    "Fiery-Dance": "May raise user's Special Attack",
    "Fiery-Wrath": "May cause flinching",
    "Fillet-Away": "Lowers HP but sharply boosts Attack, Special Attack, and Speed",
    "Final-Gambit": "Inflicts damage equal to the user's remaining HP. User faints",
    "Fire-Blast": "May burn opponent",
    "Fire-Fang": "May cause flinching and/or burn opponent",
    "Fire-Lash": "The user strikes the target with a burning lash. This also lowers the target's Defense stat",
    "Fire-Pledge": "Added effects appear if combined with Grass Pledge or Water Pledge",
    "Fire-Punch": "May burn opponent",
    "Fire-Spin": "Traps opponent, damaging them for 4-5 turns",
    "First-Impression": "Although this move has great power, it only works the first turn the user is in battle",
    "Fishious-Rend": "If the user attacks before the target, the power of this move is doubled",
    "Fissure": "One-Hit-KO, if it hits",
    "Flail": "The lower the user's HP, the higher the power",
    "Flame-Burst": "May also injure nearby Pokemon",
    "Flame-Charge": "Raises user's Speed",
    "Flame-Wheel": "May burn opponent",
    "Flamethrower": "May burn opponent",
    "Flare-Blitz": "User receives recoil damage. May burn opponent",
    "Flash": "Lowers opponent's Accuracy",
    "Flash-Cannon": "May lower opponent's Special Defense",
    "Flatter": "Confuses opponent, but raises its Special Attack",
    "Fleur-Cannon": "Sharply lowers user's Special Attack",
    "Fling": "Power depends on held item",
    "Flip-Turn": "After making its attack, the user rushes back to switch places with a party Pokemon in waiting",
    "Floaty-Fall": "May cause flinching",
    "Floral-Healing": "The user restores the target's HP by up to half of its max HP. It restores more HP when the terrain is grass",
    "Flower-Shield": "Sharply raises Defense of all Grass-type Pokemon on the field",
    "Flower-Trick": "Never misses; always results in a critical hit",
    "Fly": "Flies up on first turn, attacks on second turn",
    "Flying-Press": "Deals Fighting and Flying type damage",
    "Focus-Blast": "May lower opponent's Special Defense",
    "Focus-Energy": "Increases critical hit ratio",
    "Focus-Punch": "If the user is hit before attacking, it flinches instead",
    "Follow-Me": "In Double Battle, the user takes all the attacks",
    "Force-Palm": "May paralyze opponent",
    "Foresight": "Resets opponent's Evasiveness, and allows Normal- and Fighting-type attacks to hit Ghosts",
    "Forest-Curse": "Adds Grass type to opponent",
    "Foul-Play": "Uses the opponent's Attack stat",
    "Freeze-Shock": "Charges on first turn, attacks on second. May paralyze opponent",
    "Freeze-Dry": "May freeze opponent. Super-effective against Water types",
    "Freezing-Glare": "May freeze opponent",
    "Freezy-Frost": "Resets all stat changes",
    "Frenzy-Plant": "User must recharge next turn",
    "Frost-Breath": "Always results in a critical hit",
    "Frustration": "Power decreases with higher Friendship",
    "Fury-Attack": "Hits 2-5 times in one turn",
    "Fury-Cutter": "Power increases each turn",
    "Fury-Swipes": "Hits 2-5 times in one turn",
    "Fusion-Bolt": "Power increases if Fusion Flare is used in the same turn",
    "Fusion-Flare": "Power increases if Fusion Bolt is used in the same turn",
    "Future-Sight": "Damage occurs 2 turns later",
    "G-Max-Befuddle": "Poisons, paralyzes, or puts opponent to sleep",
    "G-Max-Cannonade": "Damages non-Water types for 4 turns",
    "G-Max-Centiferno": "Traps opponents for 4-5 turns",
    "G-Max-Chi-Strike": "Increases critical hit ratio",
    "G-Max-Cuddle": "Infatuates opponents",
    "G-Max-Depletion": "Reduces opponent's PP",
    "G-Max-Drum-Solo": "Ignores target's ability",
    "G-Max-Finale": "Heals the user's team",
    "G-Max-Fireball": "Ignores target's ability",
    "G-Max-Foam-Burst": "Harshly lowers opponents' Speed",
    "G-Max-Gold-Rush": "Confuses opponents and earns more money",
    "G-Max-Gravitas": "Summons Gravity for 5 turns",
    "G-Max-Hydrosnipe": "Ignores target's ability",
    "G-Max-Malodor": "Poisons opponents",
    "G-Max-Meltdown": "Prevents opponents using the same move twice in a row",
    "G-Max-One-Blow": "Strikes through Max Guard and Protect",
    "G-Max-Rapid-Flow": "Strikes through Max Guard and Protect",
    "G-Max-Replenish": "Recycles Berries",
    "G-Max-Resonance": "Reduces damage for 5 turns",
    "G-Max-Sandblast": "Traps opponents for 4-5 turns",
    "G-Max-Smite": "Confuses opponents",
    "G-Max-Snooze": "Makes opponents drowsy",
    "G-Max-Steelsurge": "Sets up Spikes on the field",
    "G-Max-Stonesurge": "Sets up Stealth Rock",
    "G-Max-Stun-Shock": "Poisons or paralyzes opponents",
    "G-Max-Sweetness": "Heals status conditions of user's team",
    "G-Max-Tartness": "Reduces opponents' evasiveness",
    "G-Max-Terror": "Prevents opponent from switching out",
    "G-Max-Vine-Lash": "Damages non-Grass types for 4 turns",
    "G-Max-Volcalith": "Deals damage for 4 turns",
    "G-Max-Volt-Crash": "Paralyzes opponents",
    "G-Max-Wildfire": "Damages non-Fire types for 4 turns",
    "G-Max-Wind-Rage": "Removes battlefield hazards",
    "Gastro-Acid": "Cancels out the effect of the opponent's Ability",
    "Gear-Grind": "Hits twice in one turn",
    "Gear-Up": "The user engages its gears to raise the Attack and Sp. Atk stats of ally Pokemon with the Plus or Minus Ability",
    "Genesis-Supernova": "Mew-exclusive Z-Move",
    "Geomancy": "Charges on first turn, sharply raises user's Sp. Attack, Sp. Defense and Speed on the second",
    "Giga-Drain": "User recovers half the HP inflicted on opponent",
    "Giga-Impact": "User must recharge next turn",
    "Gigaton-Hammer": "Cannot be used twice in a row",
    "Gigavolt-Havoc": "Electric type Z-Move",
    "Glacial-Lance": "The user attacks by hurling a blizzard-cloaked icicle lance at opposing Pokemon",
    "Glaciate": "Lowers opponent's Speed",
    "Glaive-Rush": "Attacks from opposing Pokemon during the next turn cannot miss and will inflict double damage",
    "Glare": "Paralyzes opponent",
    "Glitzy-Glow": "Reduces damage from Special attacks",
    "Grass-Knot": "The heavier the opponent, the stronger the attack",
    "Grass-Pledge": "Added effects appear if preceded by Water Pledge or succeeded by Fire Pledge",
    "Grass-Whistle": "Puts opponent to sleep",
    "Grassy-Glide": "High priority during Grassy Terrain",
    "Grassy-Terrain": "Restores a little HP of all Pokemon for 5 turns",
    "Grav-Apple": "Lowers the opponent's Defense stat",
    "Gravity": "Prevents moves like Fly and Bounce and the Ability Levitate for 5 turns",
    "Growl": "Lowers opponent's Attack",
    "Growth": "Raises user's Attack and Special Attack",
    "Grudge": "If the user faints after using this move, the PP for the opponent's last move is depleted",
    "Guard-Split": "Averages Defense and Special Defense with the target",
    "Guard-Swap": "User and opponent swap Defense and Special Defense",
    "Guardian-of-Alola": "Tapu-exclusive Z-move. Cuts opponent's HP by 75%",
    "Guillotine": "One-Hit-KO, if it hits",
    "Gunk-Shot": "May poison opponent",
    "Gust": "Hits Pokemon using Fly/Bounce/Sky Drop with double power",
    "Gyro-Ball": "The slower the user, the stronger the attack",
    "Hail": "Non-Ice types are damaged for 5 turns",
    "Hammer-Arm": "Lowers user's Speed",
    "Happy-Hour": "Doubles prize money from trainer battles",
    "Hard-Press": "",
    "Harden": "Raises user's Defense",
    "Haze": "Resets all stat changes",
    "Head-Charge": "User receives recoil damage",
    "Head-Smash": "User receives recoil damage",
    "Headbutt": "May cause flinching",
    "Headlong-Rush": "Lowers user's Defense",
    "Heal-Bell": "Heals the user's party's status conditions",
    "Heal-Block": "Prevents the opponent from restoring HP for 5 turns",
    "Heal-Order": "User recovers half its max HP",
    "Heal-Pulse": "Restores half the target's max HP",
    "Healing-Wish": "The user faints and the next Pokemon released is fully healed",
    "Heart-Stamp": "May cause flinching",
    "Heart-Swap": "Stat changes are swapped with the opponent",
    "Heat-Crash": "The heavier the user, the stronger the attack",
    "Heat-Wave": "May burn opponent",
    "Heavy-Slam": "The heavier the user, the stronger the attack",
    "Helping-Hand": "In Double Battles, boosts the power of the partner's move",
    "Hex": "Inflicts more damage if the target has a status condition",
    "Hidden-Power": "Type and power depends on user's IVs",
    "High-Horsepower": "The user fiercely attacks the target using its entire body",
    "High-Jump-Kick": "If it misses, the user loses half their HP",
    "Hold-Back": "Always leaves opponent with at least 1 HP",
    "Hold-Hands": "Makes the user and an ally very happy",
    "Hone-Claws": "Raises user's Attack and Accuracy",
    "Horn-Attack": "",
    "Horn-Drill": "One-Hit-KO, if it hits",
    "Horn-Leech": "User recovers half the HP inflicted on opponent",
    "Howl": "Raises Attack of allies",
    "Hurricane": "May confuse opponent",
    "Hydro-Cannon": "User must recharge next turn",
    "Hydro-Pump": "",
    "Hydro-Steam": "Power increases in harsh sunlight",
    "Hydro-Vortex": "Water type Z-Move",
    "Hyper-Beam": "User must recharge next turn",
    "Hyper-Drill": "Can strike through Protect/Detect",
    "Hyper-Fang": "May cause flinching",
    "Hyper-Voice": "",
    "Hyperspace-Fury": "Lowers user's Defense. Can strike through Protect/Detect",
    "Hyperspace-Hole": "Can strike through Protect/Detect",
    "Hypnosis": "Sleep, mind control, and permanent suggestions",
    "Ice-Ball": "Doubles in power each turn for 5 turns",
    "Ice-Beam": "May freeze opponent",
    "Ice-Burn": "Charges on first turn, attacks on second. May burn opponent",
    "Ice-Fang": "May cause flinching and/or freeze opponent",
    "Ice-Hammer": "The user swings and hits with its strong, heavy fist. It lowers the user's Speed, however",
    "Ice-Punch": "May freeze opponent",
    "Ice-Shard": "User attacks first",
    "Ice-Spinner": "Removes effects of Terrain",
    "Icicle-Crash": "May cause flinching",
    "Icicle-Spear": "Hits 2-5 times in one turn",
    "Icy-Wind": "Lowers opponent's Speed",
    "Imprison": "Opponent is unable to use moves that the user also knows",
    "Incinerate": "Destroys the target's held berry",
    "Infernal-Parade": "Inflicts double damage if the target has a status condition",
    "Inferno": "Burns opponent",
    "Inferno-Overdrive": "Fire type Z-Move",
    "Infestation": "Traps opponent, damaging them for 4-5 turns",
    "Ingrain": "User restores HP each turn. User cannot escape/switch",
    "Instruct": "Allows an ally to use a move instead",
    "Ion-Deluge": "Changes Normal-type moves to Electric-type",
    "Iron-Defense": "Sharply raises user's Defense",
    "Iron-Head": "May cause flinching",
    "Iron-Tail": "May lower opponent's Defense",
    "Ivy-Cudgel": "High critical hit ratio. Type changes based on form",
    "Jaw-Lock": "Prevents user and opponent from switching out",
    "Jet-Punch": "Always goes first",
    "Judgment": "Type depends on the Arceus Plate being held",
    "Jump-Kick": "If it misses, the user loses half their HP",
    "Jungle-Healing": "Restores team's HP and cures status conditions",
    "Karate-Chop": "High critical hit ratio",
    "Kinesis": "Lowers opponent's Accuracy",
    "King-Shield": "Protects the user and lowers opponent's Attack on contact",
    "Knock-Off": "Removes opponent's held item for the rest of the battle",
    "Kowtow-Cleave": "Always hits",
    "Land-Wrath": "",
    "Laser-Focus": "User's next attack is guaranteed to result in a critical hit",
    "Lash-Out": "Double power if stats were lowered during the turn",
    "Last-Resort": "Can only be used after all other moves are used",
    "Last-Respects": "Damages increases the more party Pokemon have been defeated",
    "Lava-Plume": "May burn opponent",
    "Leaf-Blade": "High critical hit ratio",
    "Leaf-Storm": "Sharply lowers user's Special Attack",
    "Leaf-Tornado": "May lower opponent's Accuracy",
    "Leafage": "Strikes opponent with leaves",
    "Leech-Life": "User recovers half the HP inflicted on opponent",
    "Leech-Seed": "Drains HP from opponent each turn",
    "Leer": "Lowers opponent's Defense",
    "Lets-Snuggle-Forever": "Mimikyu-exclusive Z-Move",
    "Lick": "May paralyze opponent",
    "Life-Dew": "User and teammates recover HP",
    "Light-of-Ruin": "User receives recoil damage",
    "Light-Screen": "Halves damage from Special attacks for 5 turns",
    "Light-That-Burns-the-Sky": "Ultra Necrozma-exclusive Z-Move. Ignores target's ability; uses highest Attack stat",
    "Liquidation": "May lower opponent's Defense",
    "Lock-On": "User's next attack is guaranteed to hit",
    "Lovely-Kiss": "Puts opponent to sleep",
    "Low-Kick": "The heavier the opponent, the stronger the attack",
    "Low-Sweep": "Lowers opponent's Speed",
    "Lucky-Chant": "Opponent cannot land critical hits for 5 turns",
    "Lumina-Crash": "Harshly lowers target's Special Defense",
    "Lunar-Blessing": "Heals user's status conditions and recovers HP",
    "Lunar-Dance": "The user faints but the next Pokemon released is fully healed",
    "Lunge": "The user makes a lunge at the target, attacking with full force. This also lowers the target's Attack stat",
    "Luster-Purge": "May lower opponent's Special Defense",
    "Mach-Punch": "User attacks first",
    "Magic-Coat": "Reflects moves that cause status conditions back to the attacker",
    "Magic-Powder": "Changes target's type to Psychic",
    "Magic-Room": "Suppresses the effects of held items for five turns",
    "Magical-Leaf": "Ignores Accuracy and Evasiveness",
    "Magical-Torque": "May confuse the opponent",
    "Magma-Storm": "Traps opponent, damaging them for 4-5 turns",
    "Magnet-Bomb": "Ignores Accuracy and Evasiveness",
    "Magnet-Rise": "User becomes immune to Ground-type moves for 5 turns",
    "Magnetic-Flux": "Raises Defense and Sp. Defense of Plus/Minus Pokemon",
    "Magnitude": "Hits with random power",
    "Make-It-Rain": "Lowers user's Special Attack. Money is earned after the battle",
    "Malicious-Moonsault": "Incineroar-exclusive Z-Move",
    "Malignant-Chain": "May poison the opponent",
    "Mat-Block": "Protects teammates from damaging moves",
    "Matcha-Gotcha": "Deals damage, restores HP, may burn opponent",
    "Max-Airstream": "Flying type Dynamax move. Raises the team's Speed",
    "Max-Darkness": "Dark type Dynamax move. Lowers the target's Special Defense",
    "Max-Flare": "Fire type Dynamax move. Summons harsh sunlight",
    "Max-Flutterby": "Bug type Dynamax move. Lowers the target's Special Attack",
    "Max-Geyser": "Water type Dynamax move. Summons heavy rain",
    "Max-Guard": "Status category Dynamax move. Protects the user",
    "Max-Hailstorm": "Ice type Dynamax move. Summons hail",
    "Max-Knuckle": "Fighting type Dynamax move. Increases the team's Attack",
    "Max-Lightning": "Electric type Dynamax move. Summons Electric Terrain",
    "Max-Mindstorm": "Psychic type Dynamax move. Summons Psychic Terrain",
    "Max-Ooze": "Poison type Dynamax move. Increases the team's Special Attack",
    "Max-Overgrowth": "Grass type Dynamax move. Summons Grassy Terrain",
    "Max-Phantasm": "Ghost type Dynamax move. Lowers the target's Defense",
    "Max-Quake": "Ground type Dynamax move. Increases the team's Special Defense",
    "Max-Rockfall": "Rock type Dynamax move. Summons a sandstorm",
    "Max-Starfall": "Fairy type Dynamax move. Summons Misty Terrain",
    "Max-Steelspike": "Steel type Dynamax move. Raises the team's Defense",
    "Max-Strike": "Normal type Dynamax move. Lowers the target's Speed",
    "Max-Wyrmwind": "Dragon type Dynamax move. Lowers the target's Attack",
    "Me-First": "User copies the opponent's attack with 1.5× power",
    "Mean-Look": "Opponent cannot flee or switch",
    "Meditate": "Raises user's Attack",
    "Mega-Drain": "User recovers half the HP inflicted on opponent",
    "Mega-Kick": "",
    "Mega-Punch": "",
    "Megahorn": "",
    "Memento": "User faints, sharply lowers opponent's Attack and Special Attack",
    "Menacing-Moonraze-Maelstrom": "Lunala-exclusive Z-Move",
    "Metal-Burst": "Deals damage equal to 1.5x opponent's attack",
    "Metal-Claw": "May raise user's Attack",
    "Metal-Sound": "Sharply lowers opponent's Special Defense",
    "Meteor-Assault": "User must recharge next turn",
    "Meteor-Beam": "User gathers space power and boosts its Sp. Atk stat, then attacks the target on the next turn",
    "Meteor-Mash": "May raise user's Attack",
    "Metronome": "User performs almost any move in the game at random",
    "Mighty-Cleave": "",
    "Milk-Drink": "User recovers half its max HP",
    "Mimic": "Copies the opponent's last move",
    "Mind-Blown": "User receives recoil damage",
    "Mind-Reader": "User's next attack is guaranteed to hit",
    "Minimize": "Sharply raises user's Evasiveness",
    "Miracle-Eye": "Resets opponent's Evasiveness, removes Dark's Psychic immunity",
    "Mirror-Coat": "When hit by a Special Attack, user strikes back with 2x power",
    "Mirror-Move": "User performs the opponent's last move",
    "Mirror-Shot": "May lower opponent's Accuracy",
    "Mist": "User's stats cannot be changed for a period of time",
    "Mist-Ball": "May lower opponent's Special Attack",
    "Misty-Explosion": "Power increases on Misty Terrain",
    "Misty-Terrain": "Protects the field from status conditions for 5 turns",
    "Moonblast": "May lower opponent's Special Attack",
    "Moongeist-Beam": "Ignores the target's ability",
    "Moonlight": "User recovers HP. Amount varies with the weather",
    "Morning-Sun": "User recovers HP. Amount varies with the weather",
    "Mortal-Spin": "Removes entry hazards and trap move effects, and poisons opposing Pokemon",
    "Mountain-Gale": "Lowers user's Speed",
    "Mud-Bomb": "May lower opponent's Accuracy",
    "Mud-Shot": "Lowers opponent's Speed",
    "Mud-Sport": "Weakens the power of Electric-type moves",
    "Mud-Slap": "Lowers opponent's Accuracy",
    "Muddy-Water": "May lower opponent's Accuracy",
    "Multi-Attack": "Type matches Memory item held",
    "Mystical-Fire": "Lowers opponent's Special Attack",
    "Mystical-Power": "Raises user's Special Attack",
    "Nasty-Plot": "Sharply raises user's Special Attack",
    "Natural-Gift": "Power and type depend on the user's held berry",
    "Nature-Power": "Uses a certain move based on the current terrain",
    "Nature-Madness": "Halves the foe's HP",
    "Needle-Arm": "May cause flinching",
    "Never-Ending-Nightmare": "Ghost type Z-Move",
    "Night-Daze": "May lower opponent's Accuracy",
    "Night-Shade": "Inflicts damage equal to user's level",
    "Night-Slash": "High critical hit ratio",
    "Nightmare": "The sleeping opponent loses 25% of its max HP each turn",
    "No-Retreat": "Raises all stats but user cannot switch out",
    "Noble-Roar": "Lowers opponent's Attack and Special Attack",
    "Noxious-Torque": "May poison the opponent",
    "Nuzzle": "Paralyzes opponent",
    "Oblivion-Wing": "User recovers most of the HP inflicted on opponent",
    "Obstruct": "Protects the user and sharply lowers Defence on contact",
    "Oceanic-Operetta": "Primarina-exclusive Z-Move",
    "Octazooka": "May lower opponent's Accuracy",
    "Octolock": "Lowers opponent's Defense and Special Defense every turn, and they cannot flee or switch out",
    "Odor-Sleuth": "Resets opponent's Evasiveness, and allows Normal- and Fighting-type attacks to hit Ghosts",
    "Ominous-Wind": "May raise all user's stats at once",
    "Order-Up": "Boosts Attack/Defense/Speed depending on ally Tatsugiri",
    "Origin-Pulse": "Hits all adjacent opponents",
    "Outrage": "User attacks for 2-3 turns but then becomes confused",
    "Overdrive": "Hits all adjacent opponents",
    "Overheat": "Sharply lowers user's Special Attack",
    "Pain-Split": "The user's and opponent's HP becomes the average of both",
    "Parabolic-Charge": "User recovers half the HP inflicted on opponent",
    "Parting-Shot": "Lowers opponent's Attack and Special Attack then switches out",
    "Pay-Day": "Money is earned after the battle",
    "Payback": "Power doubles if the user was attacked first",
    "Peck": "",
    "Perish-Song": "Any Pokemon in play when this attack is used faints in 3 turns",
    "Petal-Blizzard": "Hits all adjacent Pokemon",
    "Petal-Dance": "User attacks for 2-3 turns but then becomes confused",
    "Phantom-Force": "Disappears on first turn, attacks on second. Can strike through Protect/Detect",
    "Photon-Geyser": "Uses Attack or Special Attack stat, whichever is higher",
    "Pika-Papow": "Power increases when player's bond is stronger",
    "Pin-Missile": "Hits 2-5 times in one turn",
    "Plasma-Fists": "Changes Normal-type moves to Electric-type moves",
    "Play-Nice": "Lowers opponent's Attack. Always hits",
    "Play-Rough": "May lower opponent's Attack",
    "Pluck": "If the opponent is holding a berry, its effect is stolen by user",
    "Poison-Fang": "May badly poison opponent",
    "Poison-Gas": "Poisons opponent",
    "Poison-Jab": "May poison the opponent",
    "Poison-Powder": "Poisons opponent",
    "Poison-Sting": "May poison the opponent",
    "Poison-Tail": "High critical hit ratio. May poison opponent",
    "Pollen-Puff": "Deals damage to opponent or restores HP of teammate",
    "Poltergeist": "Fails if the target doesn't have an item",
    "Population-Bomb": "Hits 1-10 times in a row",
    "Pounce": "Lowers opponent's Speed",
    "Pound": "",
    "Powder": "Damages Pokemon using Fire type moves",
    "Powder-Snow": "May freeze opponent",
    "Power-Gem": "",
    "Power-Shift": "Switches Attack and Defense stats",
    "Power-Split": "Averages Attack and Special Attack with the target",
    "Power-Swap": "User and opponent swap Attack and Special Attack",
    "Power-Trick": "User's own Attack and Defense switch",
    "Power-Trip": "The user boasts its strength and attacks the target. The more the user's stats are raised, the greater the move's power",
    "Power-Whip": "",
    "Power-Up-Punch": "Raises Attack",
    "Precipice-Blades": "Hits all adjacent opponents",
    "Present": "Either deals damage or heals",
    "Prismatic-Laser": "The user shoots powerful lasers using the power of a prism. The user can't move on the next turn",
    "Protect": "Protects the user, but may fail if used consecutively",
    "Psybeam": "May confuse opponent",
    "Psyblade": "Power increases on Electric Terrain",
    "Psych-Up": "Copies the opponent's stat changes",
    "Psychic": "May lower opponent's Special Defense",
    "Psychic-Fangs": "The user bites the target with its psychic capabilities. This can also destroy Light Screen and Reflect",
    "Psychic-Noise": "Deals damage and prevents target from healing",
    "Psychic-Terrain": "Prevents priority moves from being used for 5 turns",
    "Psycho-Boost": "Sharply lowers user's Special Attack",
    "Psycho-Cut": "High critical hit ratio",
    "Psycho-Shift": "Transfers user's status condition to the opponent",
    "Psyshield-Bash": "Raises user's Defense and Special Defense",
    "Psyshock": "Inflicts damage based on the target's Defense, not Special Defense",
    "Psystrike": "Inflicts damage based on the target's Defense, not Special Defense",
    "Psywave": "Inflicts damage 50-150% of user's level",
    "Pulverizing-Pancake": "Snorlax-exclusive Normal type Z-Move",
    "Punishment": "Power increases when opponent's stats have been raised",
    "Purify": "The user heals the target's status condition. If the move succeeds, it also restores the user's own HP",
    "Pursuit": "Double power if the opponent is switching out",
    "Pyro-Ball": "May burn opponent",
    "Quash": "Makes the target act last this turn",
    "Quick-Attack": "User attacks first",
    "Quick-Guard": "Protects the user's team from high-priority moves",
    "Quiver-Dance": "Raises user's Special Attack, Special Defense and Speed",
    "Rage": "Raises user's Attack when hit",
    "Rage-Fist": "The more times the user has been hit by attacks, the greater the move's power",
    "Rage-Powder": "Forces attacks to hit user, not team-mates",
    "Raging-Bull": "Type depends on the user's form. Breaks through Reflect and Light Screen barriers",
    "Raging-Fury": "User attacks for 2-3 turns but then becomes confused",
    "Rain-Dance": "Makes it rain for 5 turns",
    "Rapid-Spin": "Raises user's Speed and removes entry hazards and trap move effects",
    "Razor-Leaf": "High critical hit ratio",
    "Razor-Shell": "May lower opponent's Defense",
    "Razor-Wind": "Charges on first turn, attacks on second. High critical hit ratio",
    "Recover": "User recovers half its max HP",
    "Recycle": "User's used hold item is restored",
    "Reflect": "Halves damage from Physical attacks for 5 turns",
    "Reflect-Type": "User becomes the target's type",
    "Refresh": "Cures paralysis, poison, and burns",
    "Relic-Song": "May put the target to sleep",
    "Rest": "User sleeps for 2 turns, but user is fully healed",
    "Retaliate": "Inflicts double damage if a teammate fainted on the last turn",
    "Return": "Power increases with higher Friendship",
    "Revelation-Dance": "Type changes based on Oricorio's form",
    "Revenge": "Power increases if user was hit first",
    "Reversal": "The lower the user's HP, the higher the power",
    "Revival-Blessing": "Revives a fainted party Pokemon to half HP",
    "Rising-Voltage": "Power doubles on Electric Terrain",
    "Roar": "In battles, the opponent switches. In the wild, the Pokemon runs",
    "Roar-of-Time": "User must recharge next turn",
    "Rock-Blast": "Hits 2-5 times in one turn",
    "Rock-Climb": "May confuse opponent",
    "Rock-Polish": "Sharply raises user's Speed",
    "Rock-Slide": "May cause flinching",
    "Rock-Smash": "May lower opponent's Defense",
    "Rock-Throw": "",
    "Rock-Tomb": "Lowers opponent's Speed",
    "Rock-Wrecker": "User must recharge next turn",
    "Role-Play": "User copies the opponent's Ability",
    "Rolling-Kick": "May cause flinching",
    "Rollout": "Doubles in power each turn for 5 turns",
    "Roost": "User recovers half of its max HP and loses the Flying type temporarily",
    "Rototiller": "Raises Attack and Special Attack of Grass-types",
    "Round": "Power increases if teammates use it in the same turn",
    "Ruination": "Halves the opponent's HP",
    "Sacred-Fire": "May burn opponent",
    "Sacred-Sword": "Ignores opponent's stat changes",
    "Safeguard": "The user's party is protected from status conditions",
    "Salt-Cure": "Deals damage each turn; Steel and Water types are more affected",
    "Sand-Attack": "Lowers opponent's Accuracy",
    "Sand-Tomb": "Traps opponent, damaging them for 4-5 turns",
    "Sandsear-Storm": "May burn target",
    "Sandstorm": "Creates a sandstorm for 5 turns",
    "Sappy-Seed": "Drains HP from opponent each turn",
    "Savage-Spin-Out": "Bug type Z-Move",
    "Scald": "May burn opponent",
    "Scale-Shot": "Hits 2-5 times in one turn. Boosts user's Speed but lowers its Defense",
    "Scary-Face": "Sharply lowers opponent's Speed",
    "Scorching-Sands": "May burn the target",
    "Scratch": "",
    "Screech": "Sharply lowers opponent's Defense",
    "Searing-Shot": "May burn opponent",
    "Searing-Sunraze-Smash": "Solgaleo-exclusive Z-Move",
    "Secret-Power": "Effects of the attack vary with the location",
    "Secret-Sword": "Inflicts damage based on the target's Defense, not Special Defense",
    "Seed-Bomb": "",
    "Seed-Flare": "May lower opponent's Special Defense",
    "Seismic-Toss": "Inflicts damage equal to user's level",
    "Self-Destruct": "User faints",
    "Shadow-Ball": "May lower opponent's Special Defense",
    "Shadow-Bone": "May lower opponent's Defense",
    "Shadow-Claw": "High critical hit ratio",
    "Shadow-Force": "Disappears on first turn, attacks on second. Can strike through Protect/Detect",
    "Shadow-Punch": "Ignores Accuracy and Evasiveness",
    "Shadow-Sneak": "User attacks first",
    "Sharpen": "Raises user's Attack",
    "Shattered-Psyche": "Psychic type Z-Move",
    "Shed-Tail": "Creates a substitute, then swaps places with a party Pokemon in waiting",
    "Sheer-Cold": "One-Hit-KO, if it hits",
    "Shell-Side-Arm": "May poison opponent. Inflicts either Special or Physical damage, whichever is better",
    "Shell-Smash": "Sharply raises user's Attack, Special Attack and Speed but lowers Defense and Special Defense",
    "Shell-Trap": "Deals more damage to opponent if hit by a Physical move",
    "Shelter": "Raises user's Defense",
    "Shift-Gear": "Raises user's Attack and sharply raises Speed",
    "Shock-Wave": "Ignores Accuracy and Evasiveness",
    "Shore-Up": "The user regains up to half of its max HP. It restores more HP in a sandstorm",
    "Signal-Beam": "May confuse opponent",
    "Silk-Trap": "Protects the user and lowers opponent's Speed on contact",
    "Silver-Wind": "May raise all stats of user at once",
    "Simple-Beam": "Changes target's ability to Simple",
    "Sing": "Puts opponent to sleep",
    "Sinister-Arrow-Raid": "Decidueye-exclusive Z-Move",
    "Sizzly-Slide": "Burns the opponent",
    "Sketch": "Permanently copies the opponent's last move",
    "Skill-Swap": "The user swaps Abilities with the opponent",
    "Skitter-Smack": "Lowers opponent's Sp. Attack",
    "Skull-Bash": "Raises Defense on first turn, attacks on second",
    "Sky-Attack": "Charges on first turn, attacks on second. May cause flinching. High critical hit ratio",
    "Sky-Drop": "Takes opponent into the air on first turn, drops them on second turn",
    "Sky-Uppercut": "Hits the opponent, even during Fly",
    "Slack-Off": "User recovers half its max HP",
    "Slam": "",
    "Slash": "High critical hit ratio",
    "Sleep-Powder": "Puts opponent to sleep",
    "Sleep-Talk": "User performs one of its own moves while sleeping",
    "Sludge": "May poison opponent",
    "Sludge-Bomb": "May poison opponent",
    "Sludge-Wave": "May poison opponent",
    "Smack-Down": "Makes Flying-type Pokemon vulnerable to Ground moves",
    "Smart-Strike": "The user stabs the target with a sharp horn. This attack never misses",
    "Smelling-Salts": "Power doubles if opponent is paralyzed, but cures it",
    "Smog": "May poison opponent",
    "Smokescreen": "Lowers opponent's Accuracy",
    "Snap-Trap": "Traps opponent, damaging them for 4-5 turns",
    "Snarl": "Lowers opponent's Special Attack",
    "Snatch": "Steals the effects of the opponent's next move",
    "Snipe-Shot": "Ignores moves and abilities that draw in moves. High critical hit ratio",
    "Snore": "Can only be used if asleep. May cause flinching",
    "Snowscape": "Raises Defense of Ice types for 5 turns",
    "Soak": "Changes the target's type to water",
    "Soft-Boiled": "User recovers half its max HP",
    "Solar-Beam": "Charges on first turn, attacks on second",
    "Solar-Blade": "Charges on first turn, attacks on second",
    "Sonic-Boom": "Always inflicts 20 HP",
    "Soul-Stealing-7-Star-Strike": "Marshadow-exclusive Z-Move",
    "Spacial-Rend": "High critical hit ratio",
    "Spark": "May paralyze opponent",
    "Sparkling-Aria": "Heals the burns of its target",
    "Sparkly-Swirl": "Cures all status problems in the party Pokemon",
    "Spectral-Thief": "The user hides in the target's shadow, steals the target's stat boosts, and then attacks",
    "Speed-Swap": "The user exchanges Speed stats with the target",
    "Spicy-Extract": "Harshly lowers the opponent's Defense and sharply raises their Attack",
    "Spider-Web": "Opponent cannot escape/switch",
    "Spike-Cannon": "Hits 2-5 times in one turn",
    "Spikes": "Damages opponents switching into battle",
    "Spiky-Shield": "Protects the user and inflicts damage on contact",
    "Spin-Out": "Harshly lowers user's Speed",
    "Spirit-Break": "Lowers opponent's Special Attack",
    "Spirit-Shackle": "Prevents the opponent from switching out",
    "Spit-Up": "Power depends on how many times the user performed Stockpile",
    "Spite": "The opponent's last move loses 2-5 PP",
    "Splash": "Doesn't do ANYTHING",
    "Splintered-Stormshards": "Lycanroc-exclusive Z-Move",
    "Splishy-Splash": "May paralyze opponent",
    "Spore": "Puts opponent to sleep",
    "Spotlight": "The user shines a spotlight on the target so that only the target will be attacked during the turn",
    "Springtide-Storm": "Boosts user's stats in Incarnate Forme, or lowers opponent's stats in Therian Forme",
    "Stealth-Rock": "Damages opponents switching into battle",
    "Steam-Eruption": "May burn opponent",
    "Steamroller": "May cause flinching",
    "Steel-Beam": "User loses 50% of its HP",
    "Steel-Roller": "Fails if no Terrain in effect",
    "Steel-Wing": "May raise user's Defense",
    "Sticky-Web": "Lowers opponent's Speed when switching into battle",
    "Stockpile": "Stores energy for use with Spit Up and Swallow",
    "Stoked-Sparksurfer": "Alolan Raichu-exclusive Electric type Z-Move",
    "Stomp": "May cause flinching",
    "Stomping-Tantrum": "Driven by frustration, the user attacks the target. If the user's previous move has failed, the power of this move doubles",
    "Stone-Axe": "Sets up Stealth Rock",
    "Stone-Edge": "High critical hit ratio",
    "Stored-Power": "Power increases when user's stats have been raised",
    "Storm-Throw": "Always results in a critical hit",
    "Strange-Steam": "May confuse opponent",
    "Strength": "",
    "Strength-Sap": "The user restores its HP by the same amount as the target's Attack stat. It also lowers the target's Attack stat",
    "String-Shot": "Sharply lowers opponent's Speed",
    "Struggle": "Only usable when all PP are gone. Hurts the user",
    "Struggle-Bug": "Lowers opponent's Special Attack",
    "Stuff-Cheeks": "The user eats its held Berry, then sharply raises its Defense stat",
    "Stun-Spore": "Paralyzes opponent",
    "Submission": "User receives recoil damage",
    "Substitute": "Uses HP to creates a decoy that takes hits",
    "Subzero-Slammer": "Ice type Z-Move",
    "Sucker-Punch": "User attacks first, but only works if opponent is readying an attack",
    "Sunny-Day": "Makes it sunny for 5 turns",
    "Sunsteel-Strike": "Ignores the target's ability",
    "Super-Fang": "Always takes off half of the opponent's HP",
    "Supercell-Slam": "",
    "Superpower": "Lowers user's Attack and Defense",
    "Supersonic": "Confuses opponent",
    "Supersonic-Skystrike": "Flying type Z-Move",
    "Surf": "Hits all adjacent Pokemon",
    "Surging-Strikes": "Always results in a critical hit and ignores stat changes",
    "Swagger": "Confuses opponent, but sharply raises its Attack",
    "Swallow": "The more times the user has performed Stockpile, the more HP is recovered",
    "Sweet-Kiss": "Confuses opponent",
    "Sweet-Scent": "Lowers opponent's Evasiveness",
    "Swift": "Ignores Accuracy and Evasiveness",
    "Switcheroo": "Swaps held items with the opponent",
    "Swords-Dance": "Sharply raises user's Attack",
    "Synchronoise": "Hits any Pokemon that shares a type with the user",
    "Synthesis": "User recovers HP. Amount varies with the weather",
    "Syrup-Bomb": "Lowers opponent's Speed each turn for 3 turns",
    "Tachyon-Cutter": "Guaranteed to hit twice in a row",
    "Tackle": "",
    "Tail-Glow": "Drastically raises user's Special Attack",
    "Tail-Slap": "Hits 2-5 times in one turn",
    "Tail-Whip": "Lowers opponent's Defense",
    "Tailwind": "Doubles Speed for 4 turns",
    "Take-Down": "User receives recoil damage",
    "Take-Heart": "Heals user's status conditions and raises its stats",
    "Tar-Shot": "Lowers the opponent's Speed and makes them weaker to Fire-type moves",
    "Taunt": "Opponent can only use moves that attack",
    "Tearful-Look": "The user gets teary eyed to make the target lose its combative spirit. This lowers the target's Attack and Sp. Atk stats",
    "Teatime": "Forces all Pokemon on the field to eat their berries",
    "Techno-Blast": "Type depends on the Drive being held",
    "Tectonic-Rage": "Ground type Z-Move",
    "Teeter-Dance": "Confuses all Pokemon",
    "Telekinesis": "Ignores opponent's Evasiveness for three turns, add Ground immunity",
    "Teleport": "Allows user to flee wild battles; also warps player to last PokeCenter",
    "Temper-Flare": "",
    "Tera-Blast": "Changes type when the user has Terastallized",
    "Tera-Starstorm": "",
    "Terrain-Pulse": "Type and power change depending on the Terrain in effect",
    "Thief": "Also steals opponent's held item",
    "Thousand-Arrows": "Makes Flying-type Pokemon vulnerable to Ground moves",
    "Thousand-Waves": "Opponent cannot flee or switch",
    "Thrash": "User attacks for 2-3 turns but then becomes confused",
    "Throat-Chop": "Prevents use of sound moves for two turns",
    "Thunder": "May paralyze opponent",
    "Thunder-Cage": "Deals damage and traps opponent, damaging them for 4-5 turns",
    "Thunder-Fang": "May cause flinching and/or paralyze opponent",
    "Thunder-Punch": "May paralyze opponent",
    "Thunder-Shock": "May paralyze opponent",
    "Thunder-Wave": "Paralyzes opponent",
    "Thunderbolt": "May paralyze opponent",
    "Thunderclap": "Strikes before a target's move",
    "Thunderous-Kick": "Lowers opponent's Defense",
    "Tickle": "Lowers opponent's Attack and Defense",
    "Tidy-Up": "Removes the effects of entry hazards and Substitute, and boosts user's Attack and Speed",
    "Topsy-Turvy": "Reverses stat changes of opponent",
    "Torch-Song": "Raises user's Special Attack",
    "Torment": "Opponent cannot use the same move in a row",
    "Toxic": "Badly poisons opponent",
    "Toxic-Spikes": "Poisons opponents switching into battle",
    "Toxic-Thread": "Poisons opponent and lowers its Speed",
    "Trailblaze": "Raises user's Speed",
    "Transform": "User takes on the form and attacks of the opponent",
    "Tri-Attack": "May paralyze, burn or freeze opponent",
    "Trick": "Swaps held items with the opponent",
    "Trick-Room": "Slower Pokemon move first in the turn for 5 turns",
    "Trick-or-Treat": "Adds Ghost type to opponent",
    "Triple-Arrows": "High critical hit ratio. May lower opponent's Defense or cause them to flinch",
    "Triple-Axel": "Attacks thrice with more power each time",
    "Triple-Dive": "Hits 3 times in a row",
    "Triple-Kick": "Hits thrice in one turn at increasing power",
    "Trop-Kick": "Lowers opponent's Attack",
    "Trump-Card": "The lower the PP, the higher the power",
    "Twin-Beam": "Hits twice in one turn",
    "Twineedle": "Hits twice in one turn. May poison opponent",
    "Twinkle-Tackle": "Fairy type Z-Move",
    "Twister": "May cause flinching. Hits Pokemon using Fly/Bounce with double power",
    "U-turn": "User switches out immediately after attacking",
    "Upper-Hand": "Strikes before a target's priority move",
    "Uproar": "User attacks for 3 turns and prevents sleep",
    "V-create": "Lowers user's Defense, Special Defense and Speed",
    "Vacuum-Wave": "User attacks first",
    "Veevee-Volley": "Power increases when player's bond is stronger",
    "Venom-Drench": "Lowers poisoned opponent's Special Attack and Speed",
    "Venoshock": "Inflicts double damage if the target is poisoned",
    "Victory-Dance": "Raises Attack and Defense",
    "Vine-Whip": "",
    "Vise-Grip": "",
    "Vital-Throw": "User attacks last, but ignores Accuracy and Evasiveness",
    "Volt-Switch": "User must switch out after attacking",
    "Volt-Tackle": "User receives recoil damage. May paralyze opponent",
    "Wake-Up-Slap": "Power doubles if opponent is asleep, but wakes it up",
    "Water-Gun": "",
    "Water-Pledge": "Added effects appear if preceded by Fire Pledge or succeeded by Grass Pledge",
    "Water-Pulse": "May confuse opponent",
    "Water-Shuriken": "Hits 2-5 times in one turn",
    "Water-Sport": "Weakens the power of Fire-type moves",
    "Water-Spout": "The higher the user's HP, the higher the damage caused",
    "Waterfall": "May cause flinching",
    "Wave-Crash": "User receives recoil damage",
    "Weather-Ball": "Move's power and type changes with the weather",
    "Whirlpool": "Traps opponent, damaging them for 4-5 turns",
    "Whirlwind": "In battles, the opponent switches. In the wild, the Pokemon runs",
    "Wicked-Blow": "Always results in a critical hit and ignores stat changes",
    "Wicked-Torque": "May put opponent to sleep",
    "Wide-Guard": "Protects the user's team from multi-target attacks",
    "Wild-Charge": "User receives recoil damage",
    "Wildbolt-Storm": "May paralyze target",
    "Will-O-Wisp": "Burns opponent",
    "Wing-Attack": "",
    "Wish": "The user recovers HP in the following turn",
    "Withdraw": "Raises user's Defense",
    "Wonder-Room": "Swaps every Pokemon's Defense and Special Defense for 5 turns",
    "Wood-Hammer": "User receives recoil damage",
    "Work-Up": "Raises user's Attack and Special Attack",
    "Worry-Seed": "Changes the opponent's Ability to Insomnia",
    "Wrap": "Traps opponent, damaging them for 4-5 turns",
    "Wring-Out": "The higher the opponent's HP, the higher the damage",
    "X-Scissor": "",
    "Yawn": "Puts opponent to sleep in the next turn",
    "Zap-Cannon": "Paralyzes opponent",
    "Zen-Headbutt": "May cause flinching",
    "Zing-Zap": "May cause flinching",
    "Zippy-Zap": "Always results in a critical hit"
};
(() => {
    if (state.inhibit) {
        return;
    }
    state.inhibit = true;
    if (state.end) {
        for (const card of storyCards) {
            if (card.title.includes("-") && (card.type !== "class")) {
                card.keys = card.title;
            }
        }
        return;
    }
    if ((() => {
        for (const card of storyCards) {
            if ((card.type === "class") && card.title.includes("Critical")) {
                return true;
            }
        }
        return false;
    })()) {
        return;
    }
    const allPairs = [
        ["race", species],
        ["location", locations],
        ["faction", moves]
    ];
    state.completed ??= [];
    for (const [type, pairs] of allPairs) {
        for (const title in pairs) {
            if (state.completed.includes(title)) {
                continue;
            }
            AutoCards().API.generateCard({
                type,
                title,
                entryPromptDetails: ((type === "faction") ? "Information for the following pokemon move: " : "") + pairs[title]
            });
            state.completed.push(title);
            return;
        }
    }
    const pending = [];
    for (const title of state.completed) {
        if ((() => {
            for (const card of storyCards) {
                if ((card.type !== "class") && (title === card.title)) {
                    return false;
                }
            }
            return true;
        })()) {
            pending.splice(Math.floor(Math.random() * (pending.length + 1)), 0, title);
        }
    }
    for (const title of pending) {
        const [type, details] = (() => {
            for (const [type, pairs] of allPairs) {
                if (title in pairs) {
                    return [type, pairs[title]];
                }
            }
            return ["character", ""];
        })();
        if (AutoCards().API.generateCard({
            type,
            title,
            entryPromptDetails: ((type === "faction") ? "Pokemon move: " : "") + details
        })) {
            return;
        }
        log("FAILURE: " + title);
    }
    state.end = true;
    return;
})();
/*
Auto-Cards (Pokemon Safari bulk card generator version)
Made by LewdLeah on June 9, 2025
This AI Dungeon script automatically creates and updates plot-relevant story cards while you play
General-purpose usefulness and compatibility with other scenarios/scripts were my design priorities
Auto-Cards is fully open-source, please copy for use within your own projects! ❤️
*/
function AutoCards(inHook, inText, inStop) {
    "use strict";
    /*
    Default Auto-Cards settings
    Feel free to change these settings to customize your scenario's default gameplay experience
    The default values for your scenario are specified below:
    */

    // Is Auto-Cards already enabled when the adventure begins?
    const DEFAULT_DO_AC = true
    // (true or false)

    // Pin the "Configure Auto-Cards" story card at the top of the player's story cards list?
    const DEFAULT_PIN_CONFIGURE_CARD = true
    // (true or false)

    // Minimum number of turns in between automatic card generation events?
    const DEFAULT_CARD_CREATION_COOLDOWN = 9999
    // (0 to 9999)

    // Use a bulleted list format for newly generated card entries?
    const DEFAULT_USE_BULLETED_LIST_MODE = true
    // (true or false)

    // Maximum allowed length for newly generated story card entries?
    const DEFAULT_GENERATED_ENTRY_LIMIT = 750
    // (200 to 2000)

    // Do newly generated cards have memory updates enabled by default?
    const DEFAULT_NEW_CARDS_DO_MEMORY_UPDATES = true
    // (true or false)

    // Default character limit before the card's memory bank is summarized?
    const DEFAULT_NEW_CARDS_MEMORY_LIMIT = 2750
    // (1750 to 9900)

    // Approximately how much shorter should recently compressed memories be? (ratio = 10 * old / new)
    const DEFAULT_MEMORY_COMPRESSION_RATIO = 25
    // (20 to 1250)

    // Ignore all-caps during title candidate detection?
    const DEFAULT_IGNORE_ALL_CAPS_TITLES = true
    // (true or false)

    // Should player input actions (Do/Say/Story) be considered during title detection?
    const DEFAULT_DETECT_TITLES_FROM_INPUTS = false
    // (true or false)

    // How many (minimum) actions in the past does Auto-Cards look for named entities?
    const DEFAULT_MINIMUM_LOOK_BACK_DISTANCE = 5
    // (2 to 88)

    // Is Live Script Interface v2 enabled?
    const DEFAULT_DO_LSI_V2 = false
    // (true or false)

    // Should the "Debug Data" story card be visible?
    const DEFAULT_SHOW_DEBUG_DATA = false
    // (true or false)

    // AI prompt used to generate new story card entries?
    const DEFAULT_CARD_GENERATION_PROMPT = prose(
        "-----",
        "",
        "<SYSTEM>",
        "# You are a Pokemon expert. Write a brief and coherent informational entry for %{title} following these instructions:",
        "- Write only third-person pure prose information about %{title} using complete sentences with correct punctuation",
        "- Focus on plot-significant information",
        "- Prioritize story-relevant details about %{title} first to ensure seamless integration with later fanfiction",
        "- Adhere to the Pokemon canon at all times",
        "- Mention %{title} in every sentence",
        "- Use semicolons if needed",
        "- Avoid meta media information; this entry is for fictional writing",
        "- Add additional details about %{title} beneath incomplete entries",
        "- Be concise and grounded",
        "</SYSTEM>",
        "Continue the Pokemon entry for %{title} below while avoiding repetition:",
        "%{entry}"
    ); // (mimic this multi-line "text" format)

    // AI prompt used to summarize a given story card's memory bank?
    const DEFAULT_CARD_MEMORY_COMPRESSION_PROMPT = prose(
        "-----",
        "",
        "<SYSTEM>",
        "# Stop the story and ignore previous instructions. Summarize and condense the given paragraph into a narrow and focused memory passage while following these guidelines:",
        "- Ensure the passage retains the core meaning and most essential details",
        "- Use the third-person perspective",
        "- Prioritize information-density, accuracy, and completeness",
        "- Remain brief and concise",
        "- Write firmly in the past tense",
        "- The paragraph below pertains to old events from far earlier in the story",
        "- Integrate %{title} naturally within the memory; however, only write about the events as they occurred",
        "- Only reference information present inside the paragraph itself, be specific",
        "</SYSTEM>",
        "Write a summarized old memory passage for %{title} based only on the following paragraph:",
        "\"\"\"",
        "%{memory}",
        "\"\"\"",
        "Summarize below:"
    ); // (mimic this multi-line "text" format)

    // Titles banned from future card generation attempts?
    const DEFAULT_BANNED_TITLES_LIST = (
        "North, East, South, West, Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, January, February, March, April, May, June, July, August, September, October, November, December"
    ); // (mimic this comma-list "text" format)

    // Default story card "type" used by Auto-Cards? (does not matter)
    const DEFAULT_CARD_TYPE = "class"
    // ("text")

    // Should titles mentioned in the "opening" plot component be banned from future card generation by default?
    const DEFAULT_BAN_TITLES_FROM_OPENING = true
    // (true or false)

    //—————————————————————————————————————————————————————————————————————————————————

    /*
    Useful API functions for coders (otherwise ignore)
    Here's what each one does in plain terms:

    AutoCards().API.postponeEvents();
    Pauses Auto-Cards activity for n many turns

    AutoCards().API.emergencyHalt();
    Emergency stop or resume

    AutoCards().API.suppressMessages();
    Hides Auto-Cards toasts by preventing assignment to state.message

    AutoCards().API.debugLog();
    Writes to the debug log card

    AutoCards().API.toggle();
    Turns Auto-Cards on/off

    AutoCards().API.generateCard();
    Initiates AI generation of the requested card

    AutoCards().API.redoCard();
    Regenerates an existing card

    AutoCards().API.setCardAsAuto();
    Flags or unflags a card as automatic

    AutoCards().API.addCardMemory();
    Adds a memory to a specific card

    AutoCards().API.eraseAllAutoCards();
    Deletes all auto-cards

    AutoCards().API.getUsedTitles();
    Lists all current card titles

    AutoCards().API.getBannedTitles();
    Shows your current banned titles list

    AutoCards().API.setBannedTitles();
    Replaces the banned titles list with a new list

    AutoCards().API.buildCard();
    Makes a new card from scratch, using exact parameters

    AutoCards().API.getCard();
    Finds cards that match a filter

    AutoCards().API.eraseCard();
    Deletes cards matching a filter
    */

    /*** Postpones internal Auto-Cards events for a specified number of turns
    * 
    * @function
    * @param {number} turns A non-negative integer representing the number of turns to postpone events
    * @returns {Object} An object containing cooldown values affected by the postponement
    * @throws {Error} If turns is not a non-negative integer
    */
    // AutoCards().API.postponeEvents();

    /*** Sets or clears the emergency halt flag to pause Auto-Cards operations
    * 
    * @function
    * @param {boolean} shouldHalt A boolean value indicating whether to engage (true) or disengage (false) emergency halt
    * @returns {boolean} The value that was set
    * @throws {Error} If called from within isolateLSIv2 scope or with a non-boolean argument
    */
    // AutoCards().API.emergencyHalt();

    /*** Enables or disables state.message assignments from Auto-Cards
    * 
    * @function
    * @param {boolean} shouldSuppress If true, suppresses all Auto-Cards messages; false enables them
    * @returns {Array} The current pending messages after setting suppression
    * @throws {Error} If shouldSuppress is not a boolean
    */
    // AutoCards().API.suppressMessages();

    /*** Logs debug information to the "Debug Log card console
    * 
    * @function
    * @param {...any} args Arguments to log for debugging purposes
    * @returns {any} The story card object reference
    */
    // AutoCards().API.debugLog();

    /*** Toggles Auto-Cards behavior or sets it directly
    * 
    * @function
    * @param {boolean|null|undefined} toggleType If undefined, toggles the current state. If boolean or null, sets the state accordingly
    * @returns {boolean|null|undefined} The state that was set or inferred
    * @throws {Error} If toggleType is not a boolean, null, or undefined
    */
    // AutoCards().API.toggle();

    /*** Generates a new card using optional prompt details or a card request object
    * 
    * This function supports two usage modes:
    * 
    * 1. Object Mode:
    *    Pass a single object containing card request parameters. The only mandatory property is "title"
    *    All other properties are optional and customize the card generation
    * 
    *    Example:
    *    AutoCards().API.generateCard({
    *      type: "character",         // The category or type of the card; defaults to "class" if omitted
    *      title: "Leah the Lewd",    // The card's title (required)
    *      keysStart: "Lewd,Leah",    // Optional trigger keywords associated with the card
    *      entryStart: "You are a woman named Leah.", // Existing content to prepend to the AI-generated entry
    *      entryPrompt: "",           // Global prompt guiding AI content generation
    *      entryPromptDetails: "Focus on Leah's works of artifice and ingenuity", // Additional prompt info
    *      entryLimit: 750,           // Target character length for the AI-generated entry
    *      description: "Player character!", // Freeform notes
    *      memoryStart: "Leah purchased a new sweater.", // Existing memory content
    *      memoryUpdates: true,       // Whether the card's memory bank will update on its own
    *      memoryLimit: 2750          // Preferred memory bank size before summarization/compression
    *    });
    * 
    * 2. String Mode:
    *    Pass a string as the title and optionally two additional strings to specify prompt details
    *    This mode is shorthand for quick card generation without an explicit card request object
    * 
    *    Examples:
    *    AutoCards().API.generateCard("Leah the Lewd");
    *    AutoCards().API.generateCard("Leah the Lewd", "Focus on Leah's works of artifice and ingenuity");
    *    AutoCards().API.generateCard(
    *      "Leah the Lewd",
    *      "Focus on Leah's works of artifice and ingenuity",
    *      "You are a woman named Leah."
    *    );
    * 
    * @function
    * @param {Object|string} request Either a fully specified card request object or a string title
    * @param {string} [extra1] Optional detailed prompt text when using string mode
    * @param {string} [extra2] Optional entry start text when using string mode
    * @returns {boolean} Returns true if the generation attempt succeeded, false otherwise
    * @throws {Error} Throws if called with invalid arguments or missing a required title property
    */
    // AutoCards().API.generateCard();

    /*** Regenerates a card by title or object reference, optionally preserving or modifying its input info
    *
    * @function
    * @param {Object|string} request Either a fully specified card request object or a string title for the card to be regenerated
    * @param {boolean} [useOldInfo=true] If true, preserves old info in the new generation; false omits it
    * @param {string} [newInfo=""] Additional info to append to the generation prompt
    * @returns {boolean} True if regeneration succeeded; false otherwise
    * @throws {Error} If the request format is invalid, or if the second or third parameters are the wrong types
    */
    // AutoCards().API.redoCard();

    /*** Flags or unflags a card as an auto-card, controlling its automatic generation behavior
    *
    * @function
    * @param {Object|string} targetCard The card object or title to mark/unmark as an auto-card
    * @param {boolean} [setOrUnset=true] If true, marks the card as an auto-card; false removes the flag
    * @returns {boolean} True if the operation succeeded; false if the card was invalid or already matched the target state
    * @throws {Error} If the arguments are invalid types
    */
    // AutoCards().API.setCardAsAuto();

    /*** Appends a memory to a story card's memory bank
    *
    * @function
    * @param {Object|string} targetCard A card object reference or title string
    * @param {string} newMemory The memory text to add
    * @returns {boolean} True if the memory was added; false if it was empty, already present, or the card was not found
    * @throws {Error} If the inputs are not a string or valid card object reference
    */
    // AutoCards().API.addCardMemory();

    /*** Removes all previously generated auto-cards and resets various states
    *
    * @function
    * @returns {number} The number of cards that were removed
    */
    // AutoCards().API.eraseAllAutoCards();

    /*** Retrieves an array of titles currently used by the adventure's story cards
    *
    * @function
    * @returns {Array<string>} An array of strings representing used titles
    */
    // AutoCards().API.getUsedTitles();

    /*** Retrieves an array of banned titles
    *
    * @function
    * @returns {Array<string>} An array of banned title strings
    */
    // AutoCards().API.getBannedTitles();

    /*** Sets the banned titles array, replacing any previously banned titles
    *
    * @function
    * @param {string|Array<string>} titles A comma-separated string or array of strings representing titles to ban
    * @returns {Object} An object containing oldBans and newBans arrays
    * @throws {Error} If the input is neither a string nor an array of strings
    */
    // AutoCards().API.setBannedTitles();

    /*** Creates a new story card with the specified parameters
    *
    * @function
    * @param {string|Object} title Card title string or full card template object containing all fields
    * @param {string} [entry] The entry text for the card
    * @param {string} [type] The card type (e.g., "character", "location")
    * @param {string} [keys] The keys (triggers) for the card
    * @param {string} [description] The notes or memory bank of the card
    * @param {number} [insertionIndex] Optional index to insert the card at a specific position within storyCards
    * @returns {Object|null} The created card object reference, or null if creation failed
    */
    // AutoCards().API.buildCard();

    /*** Finds and returns story cards satisfying a user-defined condition
    * Example:
    * const leahCard = AutoCards().API.getCard(card => (card.title === "Leah"));
    *
    * @function
    * @param {Function} predicate A function which takes a card and returns true if it matches
    * @param {boolean} [getAll=false] If true, returns all matching cards; otherwise returns the first match
    * @returns {Object|Array<Object>|null} A single card object reference, an array of cards, or null if no match is found
    * @throws {Error} If the predicate is not a function or getAll is not a boolean
    */
    // AutoCards().API.getCard();

    /*** Removes story cards based on a user-defined condition or by direct reference
    * Example:
    * AutoCards().API.eraseCard(card => (card.title === "Leah"));
    *
    * @function
    * @param {Function|Object} predicate A predicate function or a card object reference
    * @param {boolean} [eraseAll=false] If true, removes all matching cards; otherwise removes the first match
    * @returns {boolean|number} True if a single card was removed, false if none matched, or the number of cards erased
    * @throws {Error} If the inputs are not a valid predicate function, card object, or boolean
    */
    // AutoCards().API.eraseCard();

    //—————————————————————————————————————————————————————————————————————————————————

    /*
    To everyone who helped, thank you:

    AHotHamster22
    Most extensive testing, feedback, ideation, and kindness

    BinKompliziert
    UI feedback

    Boo
    Discord communication

    bottledfox
    API ideas for alternative card generation use-cases

    Bruno
    Most extensive testing, feedback, ideation, and kindness
    https://play.aidungeon.com/profile/Azuhre

    Burnout
    Implementation improvements, algorithm ideas, script help, and LSIv2 inspiration

    bweni
    Testing

    DebaczX
    Most extensive testing, feedback, ideation, and kindness

    Dirty Kurtis
    Card entry generation prompt engineering

    Dragranis
    Provided the memory dataset used for boundary calibration

    effortlyss
    Data, testing, in-game command ideas, config settings, and other UX improvements

    Hawk
    Grammar and special-cased proper nouns

    Idle Confusion
    Testing
    https://play.aidungeon.com/profile/Idle%20Confusion

    ImprezA
    Most extensive testing, feedback, ideation, and kindness
    https://play.aidungeon.com/profile/ImprezA

    Kat-Oli
    Title parsing, grammar, and special-cased proper nouns

    KryptykAngel
    LSIv2 ideas
    https://play.aidungeon.com/profile/KryptykAngel

    Mad19pumpkin
    API ideas
    https://play.aidungeon.com/profile/Mad19pumpkin

    Magic
    Implementation and syntax improvements
    https://play.aidungeon.com/profile/MagicOfLolis

    Mirox80
    Testing, feedback, and scenario integration ideas
    https://play.aidungeon.com/profile/Mirox80

    Nathaniel Wyvern
    Testing
    https://play.aidungeon.com/profile/NathanielWyvern

    NobodyIsUgly
    All-caps title parsing feedback

    OnyxFlame
    Card memory bank implementation ideas and special-cased proper nouns

    Purplejump
    API ideas for deep integration with other AID scripts

    Randy Viosca
    Context injection and card memory bank structure
    https://play.aidungeon.com/profile/Random_Variable

    RustyPawz
    API ideas for simplified card interaction
    https://play.aidungeon.com/profile/RustyPawz

    sinner
    Testing

    Sleepy pink
    Testing and feedback
    https://play.aidungeon.com/profile/Pinkghost

    Vutinberg
    Memory compression ideas and prompt engineering

    Wilmar
    Card entry generation and memory summarization prompt engineering

    Yi1i1i
    Idea for the redoCard API function and "/ac redo" in-game command

    A note to future individuals:
    If you fork or modify Auto-Cards... Go ahead and put your name here too! Yay! 🥰
    */

    //—————————————————————————————————————————————————————————————————————————————————

    /*
    The code below implements Auto-Cards
    Enjoy! ❤️
    */

    // My class definitions are hoisted by wrapper functions because it's less ugly (lol)
    const Const = hoistConst();
    const O = hoistO();
    const Words = hoistWords();
    const StringsHashed = hoistStringsHashed();
    const Internal = hoistInternal();
    // AutoCards has an explicitly immutable domain: HOOK, TEXT, and STOP
    const HOOK = inHook;
    const TEXT = ((typeof inText === "string") && inText) || "\n";
    const STOP = (inStop === true);
    // AutoCards returns a pseudoimmutable codomain which is initialized only once before being read and returned
    const CODOMAIN = new Const().declare();
    // Transient sets for high-performance lookup
    const [used, bans, auto, forenames, surnames] = Array.from({ length: 5 }, () => new Set());
    // Holds a reference to the data card singleton, remains unassigned unless required
    let data = null;
    // Container for the persistent state of AutoCards
    const AC = (function () {
        if (state.LSIv2) {
            // The Auto-Cards external API is also available from within the inner scope of LSIv2
            // Call with AutoCards().API.nameOfFunction(yourArguments);
            return state.LSIv2;
        } else if (state.AutoCards) {
            // state.AutoCards is prioritized for performance
            const ac = state.AutoCards;
            delete state.AutoCards;
            return ac;
        }
        const dataVariants = getDataVariants();
        data = getSingletonCard(false, O.f({ ...dataVariants.critical }), O.f({ ...dataVariants.debug }));
        // Deserialize the state of Auto-Cards from the data card
        const ac = (function () {
            try {
                return JSON.parse(data?.description);
            } catch {
                return null;
            }
        })();
        // If the deserialized state fails to match the following structure, fallback to defaults
        if (validate(ac, O.f({
            config: [
                "doAC", "deleteAllAutoCards", "pinConfigureCard", "addCardCooldown", "bulletedListMode", "defaultEntryLimit", "defaultCardsDoMemoryUpdates", "defaultMemoryLimit", "memoryCompressionRatio", "ignoreAllCapsTitles", "readFromInputs", "minimumLookBackDistance", "LSIv2", "showDebugData", "generationPrompt", "compressionPrompt", "defaultCardType"
            ],
            signal: [
                "emergencyHalt", "forceToggle", "overrideBans", "swapControlCards", "recheckRetryOrErase", "maxChars", "outputReplacement", "upstreamError"
            ],
            generation: [
                "cooldown", "completed", "permitted", "workpiece", "pending"
            ],
            compression: [
                "completed", "titleKey", "vanityTitle", "responseEstimate", "lastConstructIndex", "oldMemoryBank", "newMemoryBank"
            ],
            message: [
                "previous", "suppress", "pending", "event"
            ],
            chronometer: [
                "turn", "step", "amnesia", "postpone"
            ],
            database: {
                titles: [
                    "used", "banned", "candidates", "lastActionParsed", "lastTextHash", "pendingBans", "pendingUnbans"
                ],
                memories: [
                    "associations", "duplicates"
                ]
            }
        }))) {
            // The deserialization was a success
            return ac;
        }
        function validate(obj, finalKeys) {
            if ((typeof obj !== "object") || (obj === null)) {
                return false;
            } else {
                return Object.entries(finalKeys).every(([key, value]) => {
                    if (!(key in obj)) {
                        return false;
                    } else if (Array.isArray(value)) {
                        return value.every(finalKey => {
                            return (finalKey in obj[key]);
                        });
                    } else {
                        return validate(obj[key], value);
                    }
                });
            }
        }
        // AC is malformed, reinitialize with default values
        return {
            // In-game configurable parameters
            config: getDefaultConfig(),
            // Collection of various short-term signals passed forward in time
            signal: {
                // API: Suspend nearly all Auto-Cards processes
                emergencyHalt: false,
                // API: Forcefully toggle Auto-Cards on or off
                forceToggle: null,
                // API: Banned titles were externally overwritten
                overrideBans: 0,
                // Signal the construction of the opposite control card during the upcoming onOutput hook
                swapControlCards: false,
                // Signal a limited recheck of recent title candidates following a retry or erase
                recheckRetryOrErase: false,
                // Signal an upcoming onOutput text replacement
                outputReplacement: "",
                // info.maxChars is only defined onContext but must be accessed during other hooks too
                maxChars: Math.abs(info?.maxChars || 3200),
                // An error occured within the isolateLSIv2 scope during an earlier hook
                upstreamError: ""
            },
            // Moderates the generation of new story card entries
            generation: {
                // Number of story progression turns between card generations
                cooldown: validateCooldown(underQuarterInteger(validateCooldown(DEFAULT_CARD_CREATION_COOLDOWN))),
                // Continues prompted so far
                completed: 0,
                // Upper limit on consecutive continues
                permitted: 34,
                // Properties of the incomplete story card
                workpiece: O.f({}),
                // Pending card generations
                pending: [],
            },
            // Moderates the compression of story card memories
            compression: {
                // Continues prompted so far
                completed: 0,
                // A title header reference key for this auto-card
                titleKey: "",
                // The full and proper title
                vanityTitle: "",
                // Response length estimate used to compute # of outputs remaining
                responseEstimate: 1400,
                // Indices [0, n] of oldMemoryBank memories used to build the current memory construct
                lastConstructIndex: -1,
                // Bank of card memories awaiting compression
                oldMemoryBank: [],
                // Incomplete bank of newly compressed card memories
                newMemoryBank: [],
            },
            // Prevents incompatibility issues borne of state.message modification
            message: {
                // Last turn's state.message
                previous: getStateMessage(),
                // API: Allow Auto-Cards to post messages?
                suppress: false,
                // Pending Auto-Cards message(s)
                pending: (function () {
                    if (DEFAULT_DO_AC !== false) {
                        const startupMessage = "Enabled! You may now edit the \"Configure Auto-Cards\" story card";
                        logEvent(startupMessage);
                        return [startupMessage];
                    } else {
                        return [];
                    }
                })(),
                // Counter to track all Auto-Cards message events
                event: 0
            },
            // Timekeeper used for temporal events
            chronometer: {
                // Previous turn's measurement of info.actionCount
                turn: getTurn(),
                // Whether or not various turn counters should be stepped (falsified by retry actions)
                step: true,
                // Number of consecutive turn interruptions
                amnesia: 0,
                // API: Postpone Auto-Cards externalities for n many turns
                postpone: 0,
            },
            // Scalable atabase to store dynamic game information
            database: {
                // Words are pale shadows of forgotten names. As names have power, words have power
                titles: {
                    // A transient array of known titles parsed from card titles, entry title headers, and trigger keywords
                    used: [],
                    // Titles banned from future card generation attempts and various maintenance procedures
                    banned: getDefaultConfigBans(),
                    // Potential future card titles and their turns of occurrence
                    candidates: [],
                    // Helps avoid rechecking the same action text more than once, generally
                    lastActionParsed: -1,
                    // Ensures weird combinations of retry/erase events remain predictable
                    lastTextHash: "%@%",
                    // Newly banned titles which will be added to the config card
                    pendingBans: [],
                    // Currently banned titles which will be removed from the config card
                    pendingUnbans: []
                },
                // Memories are parsed from context and handled by various operations (basically magic)
                memories: {
                    // Dynamic store of 'story card -> memory' conceptual relations
                    associations: {},
                    // Serialized hashset of the 2000 most recent near-duplicate memories purged from context
                    duplicates: "%@%"
                }
            }
        };
    })();
    O.f(AC);
    O.s(AC.config);
    O.s(AC.signal);
    O.s(AC.generation);
    O.s(AC.generation.workpiece);
    AC.generation.pending.forEach(request => O.s(request));
    O.s(AC.compression);
    O.s(AC.message);
    O.s(AC.chronometer);
    O.f(AC.database);
    O.s(AC.database.titles);
    O.s(AC.database.memories);
    if (!HOOK) {
        AC.signal.maxChars = Math.abs(info?.maxChars || AC.signal.maxChars);
        if (HOOK === null) {
            if (/Recent\s*Story\s*:/i.test(text)) {
                // AutoCards(null) is always invoked once after being declared within the shared library
                // Context must be cleaned before passing text to the context modifier
                // This measure is taken to ensure compatability with other scripts
                // First, remove all command, continue, and comfirmation messages from the context window
                text = (text
                    // Hide the guide
                    .replace(/\s*>>>\s*Detailed\s*Guide\s*:[\s\S]*?<<<\s*/gi, "\n\n")
                    // Excise all /AC command messages
                    .replace(/\s*>>>\s*Auto-Cards\s*has\s*been\s*enabled!\s*<<<\s*/gi, " ")
                    .replace(/^.*\/\s*A\s*C.*$/gmi, "%@%")
                    .replace(/\s*%@%\s*/g, " ")
                    // Consolidate all consecutive continue messages into placeholder substrings
                    .replace(/(?:(?:\s*>>>\s*please\s*select\s*"continue"\s*\([\s\S]*?\)\s*<<<\s*)+)/gi, message => {
                        // Replace all continue messages with %@+%-patterned substrings
                        return (
                            // The # of "@" symbols corresponds with the # of consecutive continue messages
                            "%" + "@".repeat(
                                // Count the number of consecutive continue message occurrences
                                (message.match(/>>>\s*please\s*select\s*"continue"\s*\([\s\S]*?\)\s*<<</gi) || []).length
                            ) + "%"
                        );
                    })
                    // Situationally replace all placeholder substrings with either spaces or double newlines
                    .replace(/%@+%/g, (match, matchIndex, intermediateText) => {
                        // Check the case of the next char following the match to decide how to replace it
                        let i = matchIndex + match.length;
                        let nextChar = intermediateText[i];
                        if (nextChar === undefined) {
                            return " ";
                        } else if (/^[A-Z]$/.test(nextChar)) {
                            // Probably denotes a new sentence/paragraph
                            return "\n\n";
                        } else if (/^[a-z]$/.test(nextChar)) {
                            return " ";
                        }
                        // The first nextChar was a weird punctuation char, find the next non-whitespace char
                        do {
                            i++;
                            nextChar = intermediateText[i];
                            if (nextChar === undefined) {
                                return " ";
                            }
                        } while (/\s/.test(nextChar));
                        if (nextChar === nextChar.toUpperCase()) {
                            // Probably denotes a new sentence/paragraph
                            return "\n\n";
                        }
                        // Returning " " probably indicates a previous output's incompleteness
                        return " ";
                    })
                    // Remove all comfirmation requests and responses
                    .replace(/\s*\n*.*CONFIRM\s*DELETE.*\n*\s*/gi, confirmation => {
                        if (confirmation.includes("<<<")) {
                            return " ";
                        } else {
                            return "";
                        }
                    })
                    // Remove dumb memories from the context window
                    // (Latitude, if you're reading this, please give us memoryBank read/write access 😭)
                    .replace(/(Memories\s*:)\s*([\s\S]*?)\s*(Recent\s*Story\s*:|$)/i, (_, left, memories, right) => {
                        return (left + "\n" + (memories
                            .split("\n")
                            .filter(memory => {
                                const lowerMemory = memory.toLowerCase();
                                return !(
                                    (lowerMemory.includes("select") && lowerMemory.includes("continue"))
                                    || lowerMemory.includes(">>>") || lowerMemory.includes("<<<")
                                    || lowerMemory.includes("lsiv2")
                                );
                            })
                            .join("\n")
                        ) + (function () {
                            if (right !== "") {
                                return "\n\n" + right;
                            } else {
                                return "";
                            }
                        })());
                    })
                    // Remove LSIv2 error messages
                    .replace(/(?:\s*>>>[\s\S]*?<<<\s*)+/g, " ")
                );
                if (!shouldProceed()) {
                    // Whenever Auto-Cards is inactive, remove auto card title headers from contextualized story card entries
                    text = (text
                        .replace(/\s*{\s*titles?\s*:[\s\S]*?}\s*/gi, "\n\n")
                        .replace(/World\s*Lore\s*:\s*/i, "World Lore:\n")
                    );
                    // Otherwise, implement a more complex version of this step within the (HOOK === "context") scope of AutoCards
                }
            }
            CODOMAIN.initialize(null);
        } else {
            // AutoCards was (probably) called without arguments, return an external API to allow other script creators to programmatically govern the behavior of Auto-Cards from elsewhere within their own scripts
            CODOMAIN.initialize({
                API: O.f(Object.fromEntries(Object.entries({
                    // Call these API functions like so: AutoCards().API.nameOfFunction(argumentsOfFunction)
                    /*** Postpones internal Auto-Cards events for a specified number of turns
                    * 
                    * @function
                    * @param {number} turns A non-negative integer representing the number of turns to postpone events
                    * @returns {Object} An object containing cooldown values affected by the postponement
                    * @throws {Error} If turns is not a non-negative integer
                    */
                    postponeEvents: function (turns) {
                        if (Number.isInteger(turns) && (0 <= turns)) {
                            AC.chronometer.postpone = turns;
                        } else {
                            throw new Error(
                                "Invalid argument: \"" + turns + "\" -> AutoCards().API.postponeEvents() must be be called with a non-negative integer"
                            );
                        }
                        return {
                            postponeAllCooldown: turns,
                            addCardRealCooldown: AC.generation.cooldown,
                            addCardNextCooldown: AC.config.addCardCooldown
                        };
                    },
                    /*** Sets or clears the emergency halt flag to pause Auto-Cards operations
                    * 
                    * @function
                    * @param {boolean} shouldHalt A boolean value indicating whether to engage (true) or disengage (false) emergency halt
                    * @returns {boolean} The value that was set
                    * @throws {Error} If called from within isolateLSIv2 scope or with a non-boolean argument
                    */
                    emergencyHalt: function (shouldHalt) {
                        const scopeRestriction = new Error();
                        if (scopeRestriction.stack && scopeRestriction.stack.includes("isolateLSIv2")) {
                            throw new Error(
                                "Scope restriction: AutoCards().API.emergencyHalt() cannot be called from within LSIv2 (prevents deadlock) but you're more than welcome to use AutoCards().API.postponeEvents() instead!"
                            );
                        } else if (typeof shouldHalt === "boolean") {
                            AC.signal.emergencyHalt = shouldHalt;
                        } else {
                            throw new Error(
                                "Invalid argument: \"" + shouldHalt + "\" -> AutoCards().API.emergencyHalt() must be called with a boolean true or false"
                            );
                        }
                        return shouldHalt;
                    },
                    /*** Enables or disables state.message assignments from Auto-Cards
                    * 
                    * @function
                    * @param {boolean} shouldSuppress If true, suppresses all Auto-Cards messages; false enables them
                    * @returns {Array} The current pending messages after setting suppression
                    * @throws {Error} If shouldSuppress is not a boolean
                    */
                    suppressMessages: function (shouldSuppress) {
                        if (typeof shouldSuppress === "boolean") {
                            AC.message.suppress = shouldSuppress;
                        } else {
                            throw new Error(
                                "Invalid argument: \"" + shouldSuppress + "\" -> AutoCards().API.suppressMessages() must be called with a boolean true or false"
                            );
                        }
                        return AC.message.pending;
                    },
                    /*** Logs debug information to the "Debug Log" console card
                    * 
                    * @function
                    * @param {...any} args Arguments to log for debugging purposes
                    * @returns {any} The story card object reference
                    */
                    debugLog: function (...args) {
                        return Internal.debugLog(...args);
                    },
                    /*** Toggles Auto-Cards behavior or sets it directly
                    * 
                    * @function
                    * @param {boolean|null|undefined} toggleType If undefined, toggles the current state. If boolean or null, sets the state accordingly
                    * @returns {boolean|null|undefined} The state that was set or inferred
                    * @throws {Error} If toggleType is not a boolean, null, or undefined
                    */
                    toggle: function (toggleType) {
                        if (toggleType === undefined) {
                            if (AC.signal.forceToggle !== null) {
                                AC.signal.forceToggle = !AC.signal.forceToggle;
                            } else if (AC.config.doAC) {
                                AC.signal.forceToggle = false;
                            } else {
                                AC.signal.forceToggle = true;
                            }
                        } else if ((toggleType === null) || (typeof toggleType === "boolean")) {
                            AC.signal.forceToggle = toggleType;
                        } else {
                            throw new Error(
                                "Invalid argument: \"" + toggleType + "\" -> AutoCards().API.toggle() must be called with either A) a boolean true or false, B) a null argument, or C) no arguments at all (undefined)"
                            );
                        }
                        return toggleType;
                    },
                    /*** Generates a new card using optional prompt details or a request object
                    * 
                    * @function
                    * @param {Object|string} request A request object with card parameters or a string representing the title
                    * @param {string} [extra1] Optional entryPromptDetails if using string mode
                    * @param {string} [extra2] Optional entryStart if using string mode
                    * @returns {boolean} Did the generation attempt succeed or fail
                    * @throws {Error} If the request is not valid or missing a title
                    */
                    generateCard: function (request, extra1, extra2) {
                        // Function call guide:
                        // AutoCards().API.generateCard({
                        //     // All properties except 'title' are optional
                        //     type: "card type, defaults to 'class' for ease of filtering",
                        //     title: "card title",
                        //     keysStart: "preexisting card triggers",
                        //     entryStart: "preexisting card entry",
                        //     entryPrompt: "prompt the AI will use to complete this entry",
                        //     entryPromptDetails: "extra details to include with this card's prompt",
                        //     entryLimit: 750, // target character count for the generated entry
                        //     description: "card notes",
                        //     memoryStart: "preexisting card memory",
                        //     memoryUpdates: true, // card updates when new relevant memories are formed
                        //     memoryLimit: 2750, // max characters before the card memory is compressed
                        // });
                        if (typeof request === "string") {
                            request = { title: request };
                            if (typeof extra1 === "string") {
                                request.entryPromptDetails = extra1;
                                if (typeof extra2 === "string") {
                                    request.entryStart = extra2;
                                }
                            }
                        } else if (!isTitleInObj(request)) {
                            throw new Error(
                                "Invalid argument: \"" + request + "\" -> AutoCards().API.generateCard() must be called with either 1, 2, or 3 strings OR a correctly formatted card generation object"
                            );
                        }
                        O.f(request);
                        Internal.getUsedTitles(true);
                        return Internal.generateCard(request);
                    },
                    /*** Regenerates a card by title or object reference, optionally preserving or modifying its input info
                    *
                    * @function
                    * @param {Object|string} request A card object reference or title string for the card to be regenerated
                    * @param {boolean} [useOldInfo=true] If true, preserves old info in the new generation; false omits it
                    * @param {string} [newInfo=""] Additional info to append to the generation prompt
                    * @returns {boolean} True if regeneration succeeded; false otherwise
                    * @throws {Error} If the request format is invalid, or if the second or third parameters are the wrong types
                    */
                    redoCard: function (request, useOldInfo = true, newInfo = "") {
                        if (typeof request === "string") {
                            request = { title: request };
                        } else if (!isTitleInObj(request)) {
                            throw new Error(
                                "Invalid argument: \"" + request + "\" -> AutoCards().API.redoCard() must be called with a string or correctly formatted card generation object"
                            );
                        }
                        if (typeof useOldInfo !== "boolean") {
                            throw new Error(
                                "Invalid argument: \"" + request + ", " + useOldInfo + "\" -> AutoCards().API.redoCard() requires a boolean as its second argument"
                            );
                        } else if (typeof newInfo !== "string") {
                            throw new Error(
                                "Invalid argument: \"" + request + ", " + useOldInfo + ", " + newInfo + "\" -> AutoCards().API.redoCard() requires a string for its third argument"
                            );
                        }
                        return Internal.redoCard(request, useOldInfo, newInfo);
                    },
                    /*** Flags or unflags a card as an auto-card, controlling its automatic generation behavior
                    *
                    * @function
                    * @param {Object|string} targetCard The card object or title to mark/unmark as an auto-card
                    * @param {boolean} [setOrUnset=true] If true, marks the card as an auto-card; false removes the flag
                    * @returns {boolean} True if the operation succeeded; false if the card was invalid or already matched the target state
                    * @throws {Error} If the arguments are invalid types
                    */
                    setCardAsAuto: function (targetCard, setOrUnset = true) {
                        if (isTitleInObj(targetCard)) {
                            targetCard = targetCard.title;
                        } else if (typeof targetCard !== "string") {
                            throw new Error(
                                "Invalid argument: \"" + targetCard + "\" -> AutoCards().API.setCardAsAuto() must be called with a string or card object"
                            );
                        }
                        if (typeof setOrUnset !== "boolean") {
                            throw new Error(
                                "Invalid argument: \"" + targetCard + ", " + setOrUnset + "\" -> AutoCards().API.setCardAsAuto() requires a boolean as its second argument"
                            );
                        }
                        const [card, isAuto] = getIntendedCard(targetCard);
                        if (card === null) {
                            return false;
                        }
                        if (setOrUnset) {
                            if (checkAuto()) {
                                return false;
                            }
                            card.description = "{title:}";
                            Internal.getUsedTitles(true);
                            return card.entry.startsWith("{title: ");
                        } else if (!checkAuto()) {
                            return false;
                        }
                        card.entry = removeAutoProps(card.entry);
                        card.description = removeAutoProps(card.description.replace((
                            /\s*Auto(?:-|\s*)Cards\s*will\s*contextualize\s*these\s*memories\s*:\s*/gi
                        ), ""));
                        function checkAuto() {
                            return (isAuto || /{updates: (?:true|false), limit: \d+}/.test(card.description));
                        }
                        return true;
                    },
                    /*** Appends a memory to a story card's memory bank
                    *
                    * @function
                    * @param {Object|string} targetCard A card object reference or title string
                    * @param {string} newMemory The memory text to add
                    * @returns {boolean} True if the memory was added; false if it was empty, already present, or the card was not found
                    * @throws {Error} If the inputs are not a string or valid card object reference
                    */
                    addCardMemory: function (targetCard, newMemory) {
                        if (isTitleInObj(targetCard)) {
                            targetCard = targetCard.title;
                        } else if (typeof targetCard !== "string") {
                            throw new Error(
                                "Invalid argument: \"" + targetCard + "\" -> AutoCards().API.addCardMemory() must be called with a string or card object"
                            );
                        }
                        if (typeof newMemory !== "string") {
                            throw new Error(
                                "Invalid argument: \"" + targetCard + ", " + newMemory + "\" -> AutoCards().API.addCardMemory() requires a string for its second argument"
                            );
                        }
                        newMemory = newMemory.trim().replace(/\s+/g, " ").replace(/^-+\s*/, "");
                        if (newMemory === "") {
                            return false;
                        }
                        const [card, isAuto, titleKey] = getIntendedCard(targetCard);
                        if (
                            (card === null)
                            || card.description.replace(/\s+/g, " ").toLowerCase().includes(newMemory.toLowerCase())
                        ) {
                            return false;
                        } else if (card.description !== "") {
                            card.description += "\n";
                        }
                        card.description += "- " + newMemory;
                        if (titleKey in AC.database.memories.associations) {
                            AC.database.memories.associations[titleKey][1] = (StringsHashed
                                .deserialize(AC.database.memories.associations[titleKey][1], 65536)
                                .remove(newMemory)
                                .add(newMemory)
                                .latest(3500)
                                .serialize()
                            );
                        } else if (isAuto) {
                            AC.database.memories.associations[titleKey] = [999, (new StringsHashed(65536)
                                .add(newMemory)
                                .serialize()
                            )];
                        }
                        return true;
                    },
                    /*** Removes all previously generated auto-cards and resets various states
                    *
                    * @function
                    * @returns {number} The number of cards that were removed
                    */
                    eraseAllAutoCards: function () {
                        return Internal.eraseAllAutoCards();
                    },
                    /*** Retrieves an array of titles currently used by the adventure's story cards
                    *
                    * @function
                    * @returns {Array<string>} An array of strings representing used titles
                    */
                    getUsedTitles: function () {
                        return Internal.getUsedTitles(true);
                    },
                    /*** Retrieves an array of banned titles
                    *
                    * @function
                    * @returns {Array<string>} An array of banned title strings
                    */
                    getBannedTitles: function () {
                        return Internal.getBannedTitles();
                    },
                    /*** Sets the banned titles array, replacing any previously banned titles
                    *
                    * @function
                    * @param {string|Array<string>} titles A comma-separated string or array of strings representing titles to ban
                    * @returns {Object} An object containing oldBans and newBans arrays
                    * @throws {Error} If the input is neither a string nor an array of strings
                    */
                    setBannedTitles: function (titles) {
                        const codomain = { oldBans: AC.database.titles.banned };
                        if (Array.isArray(titles) && titles.every(title => (typeof title === "string"))) {
                            assignBannedTitles(titles);
                        } else if (typeof titles === "string") {
                            if (titles.includes(",")) {
                                assignBannedTitles(titles.split(","));
                            } else {
                                assignBannedTitles([titles]);
                            }
                        } else {
                            throw new Error(
                                "Invalid argument: \"" + titles + "\" -> AutoCards().API.setBannedTitles() must be called with either a string or an array of strings"
                            );
                        }
                        codomain.newBans = AC.database.titles.banned;
                        function assignBannedTitles(titles) {
                            Internal.setBannedTitles(uniqueTitlesArray(titles), false);
                            AC.signal.overrideBans = 3;
                            return;
                        }
                        return codomain;
                    },
                    /*** Creates a new story card with the specified parameters
                    *
                    * @function
                    * @param {string|Object} title Card title string or full card template object containing all fields
                    * @param {string} [entry] The entry text for the card
                    * @param {string} [type] The card type (e.g., "character", "location")
                    * @param {string} [keys] The keys (triggers) for the card
                    * @param {string} [description] The notes or memory bank of the card
                    * @param {number} [insertionIndex] Optional index to insert the card at a specific position within storyCards
                    * @returns {Object|null} The created card object reference, or null if creation failed
                    */
                    buildCard: function (title, entry, type, keys, description, insertionIndex) {
                        if (isTitleInObj(title)) {
                            type = title.type ?? type;
                            keys = title.keys ?? keys;
                            entry = title.entry ?? entry;
                            description = title.description ?? description;
                            title = title.title;
                        }
                        title = cast(title);
                        const card = constructCard(O.f({
                            type: cast(type, AC.config.defaultCardType),
                            title,
                            keys: cast(keys, buildKeys("", title)),
                            entry: cast(entry),
                            description: cast(description)
                        }), boundInteger(0, insertionIndex, storyCards.length, newCardIndex()));
                        if (notEmptyObj(card)) {
                            return card;
                        }
                        function cast(value, fallback = "") {
                            if (typeof value === "string") {
                                return value;
                            } else {
                                return fallback;
                            }
                        }
                        return null;
                    },
                    /*** Finds and returns story cards satisfying a user-defined condition
                    *
                    * @function
                    * @param {Function} predicate A function which takes a card and returns true if it matches
                    * @param {boolean} [getAll=false] If true, returns all matching cards; otherwise returns the first match
                    * @returns {Object|Array<Object>|null} A single card object reference, an array of cards, or null if no match is found
                    * @throws {Error} If the predicate is not a function or getAll is not a boolean
                    */
                    getCard: function (predicate, getAll = false) {
                        if (typeof predicate !== "function") {
                            throw new Error(
                                "Invalid argument: \"" + predicate + "\" -> AutoCards().API.getCard() must be called with a function"
                            );
                        } else if (typeof getAll !== "boolean") {
                            throw new Error(
                                "Invalid argument: \"" + predicate + ", " + getAll + "\" -> AutoCards().API.getCard() requires a boolean as its second argument"
                            );
                        }
                        return Internal.getCard(predicate, getAll);
                    },
                    /*** Removes story cards based on a user-defined condition or by direct reference
                    *
                    * @function
                    * @param {Function|Object} predicate A predicate function or a card object reference
                    * @param {boolean} [eraseAll=false] If true, removes all matching cards; otherwise removes the first match
                    * @returns {boolean|number} True if a single card was removed, false if none matched, or the number of cards erased
                    * @throws {Error} If the inputs are not a valid predicate function, card object, or boolean
                    */
                    eraseCard: function (predicate, eraseAll = false) {
                        if (isTitleInObj(predicate) && storyCards.includes(predicate)) {
                            return eraseCard(predicate);
                        } else if (typeof predicate !== "function") {
                            throw new Error(
                                "Invalid argument: \"" + predicate + "\" -> AutoCards().API.eraseCard() must be called with a function or card object"
                            );
                        } else if (typeof eraseAll !== "boolean") {
                            throw new Error(
                                "Invalid argument: \"" + predicate + ", " + eraseAll + "\" -> AutoCards().API.eraseCard() requires a boolean as its second argument"
                            );
                        } else if (eraseAll) {
                            // Erase all cards which satisfy the given condition
                            let cardsErased = 0;
                            for (const [index, card] of storyCards.entries()) {
                                if (predicate(card)) {
                                    removeStoryCard(index);
                                    cardsErased++;
                                }
                            }
                            return cardsErased;
                        }
                        // Erase the first card which satisfies the given condition
                        for (const [index, card] of storyCards.entries()) {
                            if (predicate(card)) {
                                removeStoryCard(index);
                                return true;
                            }
                        }
                        return false;
                    }
                }).map(([key, fn]) => [key, function (...args) {
                    const result = fn.apply(this, args);
                    if (data) {
                        data.description = JSON.stringify(AC);
                    }
                    return result;
                }])))
            });
            function isTitleInObj(obj) {
                return (
                    (typeof obj === "object")
                    && (obj !== null)
                    && ("title" in obj)
                    && (typeof obj.title === "string")
                );
            }
        }
    } else if (AC.signal.emergencyHalt) {
        switch (HOOK) {
            case "context": {
                // AutoCards was called within the context modifier
                advanceChronometer();
                break;
            }
            case "output": {
                // AutoCards was called within the output modifier
                concludeEmergency();
                const previousAction = readPastAction(0);
                if (isDoSayStory(previousAction.type) && /escape\s*emergency\s*halt/i.test(previousAction.text)) {
                    AC.signal.emergencyHalt = false;
                }
                break;
            }
        }
        CODOMAIN.initialize(TEXT);
    } else if ((AC.config.LSIv2 !== null) && AC.config.LSIv2) {
        // Silly recursion shenanigans
        state.LSIv2 = AC;
        AC.config.LSIv2 = false;
        const LSI_DOMAIN = AutoCards(HOOK, TEXT, STOP);
        // Is this lazy loading mechanism overkill? Yes. But it's fun!
        const factories = O.f({
            library: () => ({
                name: Words.reserved.library,
                entry: prose(
                    "// Your adventure's Shared Library code goes here",
                    "// Example Library code:",
                    "state.promptDragon ??= false;",
                    "state.mind ??= 0;",
                    "state.willStop ??= false;",
                    "function formatMessage(message, space = \" \") {",
                    "    let leadingNewlines = \"\";",
                    "    let trailingNewlines = \"\\n\\n\";",
                    "    if (text.startsWith(\"\\n> \")) {",
                    "        // We don't want any leading/trailing newlines for Do/Say",
                    "        trailingNewlines = \"\";",
                    "    } else if (history && (0 < history.length)) {",
                    "        // Decide leading newlines based on the previous action",
                    "        const action = history[history.length - 1];",
                    "        if ((action.type === \"continue\") || (action.type === \"story\")) {",
                    "            if (!action.text.endsWith(\"\\n\")) {",
                    "                leadingNewlines = \"\\n\\n\";",
                    "            } else if (!action.text.endsWith(\"\\n\\n\")) {",
                    "                leadingNewlines = \"\\n\";",
                    "            }",
                    "        }",
                    "    }",
                    "    return leadingNewlines + \"{>\" + space + (message",
                    "        .replace(/(?:\\s*(?:{>|<})\\s*)+/g, \" \")",
                    "        .trim()",
                    "    ) + space + \"<}\" + trailingNewlines;",
                    "}"),
                description:
                    "// You may also continue your Library code below",
                singleton: false,
                position: 2
            }),
            input: () => ({
                name: Words.reserved.input,
                entry: prose(
                    "// Your adventure's Input Modifier code goes here",
                    "// Example Input code:",
                    "const minds = [",
                    "\"kind and gentle\",",
                    "\"curious and eager\",",
                    "\"cruel and evil\"",
                    "];",
                    "// Type any of these triggers into a Do/Say/Story action",
                    "const commands = new Map([",
                    "[\"encounter dragon\", () => {",
                    "    AutoCards().API.postponeEvents(1);",
                    "    state.promptDragon = true;",
                    "    text = formatMessage(\"You encounter a dragon!\");",
                    "    log(\"A dragon appears!\");",
                    "}],",
                    "[\"summon leah\", () => {",
                    "    alterMind();",
                    "    const success = AutoCards().API.generateCard({",
                    "        title: \"Leah\",",
                    "        entryPromptDetails: (",
                    "            \"Leah is an exceptionally \" +",
                    "            minds[state.mind] +",
                    "            \" woman\"",
                    "        ),",
                    "        entryStart: \"Leah is your magically summoned assistant.\"",
                    "    });",
                    "    if (success) {",
                    "        text = formatMessage(\"You begin summoning Leah!\");",
                    "        log(\"Attempting to summon Leah\");",
                    "    } else {",
                    "        text = formatMessage(\"You failed to summon Leah...\");",
                    "        log(\"Leah could not be summoned\");",
                    "    }",
                    "}],",
                    "[\"alter leah\", () => {",
                    "    alterMind();",
                    "    const success = AutoCards().API.redoCard(\"Leah\", true, (",
                    "        \"You subjected Leah to mind-altering magic\\n\" +",
                    "        \"Therefore she is now entirely \" +",
                    "        minds[state.mind] +",
                    "        \", utterly captivated by your will\"",
                    "    ));",
                    "    if (success) {",
                    "        text = formatMessage(",
                    "            \"You proceed to alter Leah's mind!\"",
                    "        );",
                    "        log(\"Attempting to alter Leah\");",
                    "    } else {",
                    "        text = formatMessage(\"You failed to alter Leah...\");",
                    "        log(\"Leah could not be altered\");",
                    "    }",
                    "}],",
                    "[\"show api\", () => {",
                    "    state.showAPI = true;",
                    "    text = formatMessage(\"Displaying the Auto-Cards API below\");",
                    "}],",
                    "[\"force stop\", () => {",
                    "    state.willStop = true;",
                    "}]",
                    "]);",
                    "const lowerText = text.toLowerCase();",
                    "for (const [trigger, implement] of commands) {",
                    "    if (lowerText.includes(trigger)) {",
                    "        implement();",
                    "        break;",
                    "    }",
                    "}",
                    "function alterMind() {",
                    "    state.mind = (state.mind + 1) % minds.length;",
                    "    return;",
                    "}"),
                description:
                    "// You may also continue your Input code below",
                singleton: false,
                position: 3
            }),
            context: () => ({
                name: Words.reserved.context,
                entry: prose(
                    "// Your adventure's Context Modifier code goes here",
                    "// Example Context code:",
                    "text = text.replace(/\\s*{>[\\s\\S]*?<}\\s*/gi, \"\\n\\n\");",
                    "if (state.willStop) {",
                    "    state.willStop = false;",
                    "    // Assign true to prevent the onOutput hook",
                    "    // This can only be done onContext",
                    "    stop = true;",
                    "} else if (state.promptDragon) {",
                    "    state.promptDragon = false;",
                    "    text = (",
                    "        text.trimEnd() +",
                    "        \"\\n\\nA cute little dragon softly lands upon your head. \"",
                    "    );",
                    "}"),
                description:
                    "// You may also continue your Context code below",
                singleton: false,
                position: 4
            }),
            output: () => ({
                name: Words.reserved.output,
                entry: prose(
                    "// Your adventure's Output Modifier code goes here",
                    "// Example Output code:",
                    "if (state.showAPI) {",
                    "    state.showAPI = false;",
                    "    const apiKeys = (Object.keys(AutoCards().API)",
                    "        .map(key => (\"AutoCards().API.\" + key + \"()\"))",
                    "    );",
                    "    text = formatMessage(apiKeys.join(\"\\n\"), \"\\n\");",
                    "    log(apiKeys);",
                    "}"),
                description:
                    "// You may also continue your Output code below",
                singleton: false,
                position: 5
            }),
            guide: () => ({
                name: Words.reserved.guide,
                entry: prose(
                    "Any valid JavaScript code you write within the Shared Library or Input/Context/Output Modifier story cards will be executed from top to bottom; Live Script Interface v2 closely emulates AI Dungeon's native scripting environment, even if you aren't the owner of the original scenario. Furthermore, I've provided full access to the Auto-Cards scripting API. Please note that disabling LSIv2 via the \"Configure Auto-Cards\" story card will reset your LSIv2 adventure scripts!",
                    "",
                    "If you aren't familiar with scripting in AI Dungeon, please refer to the official guidebook page:",
                    "https://help.aidungeon.com/scripting",
                    "",
                    "I've included an example script with the four aforementioned code cards, to help showcase some of my fancy schmancy Auto-Cards API functions. Take a look, try some of my example commands, inspect the Console Log, and so on... It's a ton of fun! ❤️",
                    "",
                    "If you ever run out of space in your Library, Input, Context, or Output code cards, simply duplicate whichever one(s) you need and then perform an in-game turn before writing any more code. (emphasis on \"before\") Doing so will signal LSIv2 to convert your duplicated code card(s) into additional auxiliary versions.",
                    "",
                    "Auxiliary code cards are numbered, and any code written within will be appended in sequential order. For example:",
                    "// Shared Library (entry)",
                    "// Shared Library (notes)",
                    "// Shared Library 2 (entry)",
                    "// Shared Library 2 (notes)",
                    "// Shared Library 3 (entry)",
                    "// Shared Library 3 (notes)",
                    "// Input Modifier (entry)",
                    "// Input Modifier (notes)",
                    "// Input Modifier 2 (entry)",
                    "// Input Modifier 2 (notes)",
                    "// And so on..."),
                description:
                    "",
                singleton: true,
                position: 0
            }),
            state: () => ({
                name: Words.reserved.state,
                entry:
                    "Your adventure's full state object is displayed in the Notes section below.",
                description:
                    "",
                singleton: true,
                position: 6
            }),
            log: () => ({
                name: Words.reserved.log,
                entry:
                    "Please refer to the Notes section below to view the full log history for LSIv2. Console log entries are ordered from most recent to oldest. LSIv2 error messages will be recorded here, alongside the outputs of log and console.log function calls within your adventure scripts.",
                description:
                    "",
                singleton: true,
                position: 1
            })
        });
        const cache = {};
        const templates = new Proxy({}, {
            get(_, key) {
                return cache[key] ??= O.f(factories[key]());
            }
        });
        if (AC.config.LSIv2 !== null) {
            switch (HOOK) {
                case "input": {
                    // AutoCards was called within the input modifier
                    const [libraryCards, inputCards, logCard] = collectCards(
                        templates.library,
                        templates.input,
                        templates.log
                    );
                    const [error, newText] = isolateLSIv2(parseCode(libraryCards, inputCards), callbackLog(logCard), LSI_DOMAIN);
                    handleError(logCard, error);
                    if (hadError()) {
                        CODOMAIN.initialize(getStoryError());
                        AC.signal.upstreamError = "\n";
                    } else {
                        CODOMAIN.initialize(newText);
                    }
                    break;
                }
                case "context": {
                    // AutoCards was called within the context modifier
                    const [libraryCards, contextCards, logCard] = collectCards(
                        templates.library,
                        templates.context,
                        templates.log,
                        templates.input
                    );
                    if (hadError()) {
                        endContextLSI(LSI_DOMAIN);
                        break;
                    }
                    const [error, ...newCodomain] = (([error, newText, newStop]) => [error, newText, (newStop === true)])(
                        isolateLSIv2(parseCode(libraryCards, contextCards), callbackLog(logCard), LSI_DOMAIN[0], LSI_DOMAIN[1])
                    );
                    handleError(logCard, error);
                    endContextLSI(newCodomain);
                    function endContextLSI(newCodomain) {
                        CODOMAIN.initialize(newCodomain);
                        if (!newCodomain[1]) {
                            return;
                        }
                        const [guideCard, stateCard] = collectCards(
                            templates.guide,
                            templates.state,
                            templates.output
                        );
                        AC.message.pending = [];
                        concludeLSI(guideCard, stateCard, logCard);
                        return;
                    }
                    break;
                }
                case "output": {
                    // AutoCards was called within the output modifier
                    const [libraryCards, outputCards, guideCard, stateCard, logCard] = collectCards(
                        templates.library,
                        templates.output,
                        templates.guide,
                        templates.state,
                        templates.log
                    );
                    if (hadError()) {
                        endOutputLSI(true, LSI_DOMAIN);
                        break;
                    }
                    const [error, newText] = isolateLSIv2(parseCode(libraryCards, outputCards), callbackLog(logCard), LSI_DOMAIN);
                    handleError(logCard, error);
                    endOutputLSI(hadError(), newText);
                    function endOutputLSI(displayError, newText) {
                        if (displayError) {
                            if (AC.signal.upstreamError === "\n") {
                                CODOMAIN.initialize("\n");
                            } else {
                                CODOMAIN.initialize(getStoryError() + "\n");
                            }
                            AC.message.pending = [];
                        } else {
                            CODOMAIN.initialize(newText);
                        }
                        concludeLSI(guideCard, stateCard, logCard);
                        return;
                    }
                    break;
                }
                case "initialize": {
                    collectAll();
                    logToCard(Internal.getCard(card => (card.title === templates.log.name)), "LSIv2 startup -> Success!");
                    CODOMAIN.initialize(null);
                    break;
                }
            }
            AC.config.LSIv2 = true;
            function parseCode(...args) {
                return (args
                    .flatMap(cardset => [cardset.primary, ...cardset.auxiliaries])
                    .flatMap(card => [card.entry, card.description])
                    .join("\n")
                );
            }
            function callbackLog(logCard) {
                return function (...args) {
                    logToCard(logCard, ...args);
                    return;
                }
            }
            function handleError(logCard, error) {
                if (!error) {
                    return;
                }
                O.f(error);
                AC.signal.upstreamError = (
                    "LSIv2 encountered an error during the on" + HOOK[0].toUpperCase() + HOOK.slice(1) + " hook"
                );
                if (error.message) {
                    AC.signal.upstreamError += ":\n";
                    if (error.stack) {
                        const stackMatch = error.stack.match(/AutoCards[\s\S]*?:\s*(\d+)\s*:\s*(\d+)/i);
                        if (stackMatch) {
                            AC.signal.upstreamError += (
                                (error.name ?? "Error") + ": " + error.message + "\n" +
                                "(line #" + stackMatch[1] + " column #" + stackMatch[2] + ")"
                            );
                        } else {
                            AC.signal.upstreamError += error.stack;
                        }
                    } else {
                        AC.signal.upstreamError += (error.name ?? "Error") + ": " + error.message;
                    }
                    AC.signal.upstreamError = cleanSpaces(AC.signal.upstreamError.trimEnd());
                }
                logToCard(logCard, AC.signal.upstreamError);
                if (getStateMessage() === AC.signal.upstreamError) {
                    state.message = AC.signal.upstreamError + " ";
                } else {
                    state.message = AC.signal.upstreamError;
                }
                return;
            }
            function hadError() {
                return (AC.signal.upstreamError !== "");
            }
            function getStoryError() {
                return getPrecedingNewlines() + ">>>\n" + AC.signal.upstreamError + "\n<<<\n";
            }
            function concludeLSI(guideCard, stateCard, logCard) {
                AC.signal.upstreamError = "";
                guideCard.description = templates.guide.description;
                guideCard.entry = templates.guide.entry;
                stateCard.entry = templates.state.entry;
                logCard.entry = templates.log.entry;
                postMessages();
                const simpleState = { ...state };
                delete simpleState.LSIv2;
                stateCard.description = limitString(stringifyObject(simpleState).trim(), 999999).trimEnd();
                return;
            }
        } else {
            const cardsets = collectAll();
            for (const cardset of cardsets) {
                if ("primary" in cardset) {
                    killCard(cardset.primary);
                    for (const card of cardset.auxiliaries) {
                        killCard(card);
                    }
                } else {
                    killCard(cardset);
                }
                function killCard(card) {
                    unbanTitle(card.title);
                    eraseCard(card);
                }
            }
            AC.signal.upstreamError = "";
            CODOMAIN.initialize(LSI_DOMAIN);
        }
        // This measure ensures the Auto-Cards external API is equally available from within the inner scope of LSIv2
        // As before, call with AutoCards().API.nameOfFunction(yourArguments);
        deepMerge(AC, state.LSIv2);
        delete state.LSIv2;
        function deepMerge(target, source) {
            for (const key in source) {
                if (!source.hasOwnProperty(key)) {
                    continue;
                } else if (
                    (typeof source[key] === "object")
                    && (source[key] !== null)
                    && !Array.isArray(source[key])
                    && (typeof target[key] === "object")
                    && (target[key] !== null)
                    && (key !== "workpiece")
                    && (key !== "associations")
                ) {
                    // Recursively merge static objects
                    deepMerge(target[key], source[key]);
                } else {
                    // Directly replace values
                    target[key] = source[key];
                }
            }
            return;
        }
        function collectAll() {
            return collectCards(...Object.keys(factories).map(key => templates[key]));
        }
        // collectCards constructs, validates, repairs, retrieves, and organizes all LSIv2 script cards associated with the given arguments by iterating over the storyCards array only once! Returned elements are easily handled via array destructuring assignment
        function collectCards(...args) {
            // args: [{name: string, entry: string, description: string, singleton: boolean, position: integer}]
            const collections = O.f(args.map(({ name, entry, description, singleton, position }) => {
                const collection = {
                    template: O.f({
                        type: AC.config.defaultCardType,
                        title: name,
                        keys: name,
                        entry,
                        description
                    }),
                    singleton,
                    position,
                    primary: null,
                    excess: [],
                };
                if (!singleton) {
                    collection.auxiliaries = [];
                    collection.occupied = new Set([0, 1]);
                }
                return O.s(collection);
            }));
            for (const card of storyCards) {
                O.s(card);
                for (const collection of collections) {
                    if (
                        !card.title.toLowerCase().includes(collection.template.title.toLowerCase())
                        && !card.keys.toLowerCase().includes(collection.template.title.toLowerCase())
                    ) {
                        // No match, swipe left
                        continue;
                    }
                    if (collection.singleton) {
                        setPrimary();
                        break;
                    }
                    const [extensionA, extensionB] = [card.title, card.keys].map(name => {
                        const extensionMatch = name.replace(/[^a-zA-Z0-9]/g, "").match(/\d+$/);
                        if (extensionMatch) {
                            return parseInt(extensionMatch[0], 10);
                        } else {
                            return -1;
                        }
                    });
                    if (-1 < extensionA) {
                        if (-1 < extensionB) {
                            if (collection.occupied.has(extensionA)) {
                                setAuxiliary(extensionB);
                            } else {
                                setAuxiliary(extensionA, true);
                            }
                        } else {
                            setAuxiliary(extensionA);
                        }
                    } else if (-1 < extensionB) {
                        setAuxiliary(extensionB);
                    } else {
                        setPrimary();
                    }
                    function setAuxiliary(extension, preChecked = false) {
                        if (preChecked || !collection.occupied.has(extension)) {
                            addAuxiliary(card, collection, extension);
                        } else {
                            card.title = card.keys = collection.template.title;
                            collection.excess.push(card);
                        }
                        return;
                    }
                    function setPrimary() {
                        card.title = card.keys = collection.template.title;
                        if (collection.primary === null) {
                            collection.primary = card;
                        } else {
                            collection.excess.push(card);
                        }
                        return;
                    }
                    break;
                }
            }
            for (const collection of collections) {
                banTitle(collection.template.title);
                if (collection.singleton) {
                    if (collection.primary === null) {
                        constructPrimary();
                    } else if (hasExs()) {
                        for (const card of collection.excess) {
                            eraseCard(card);
                        }
                    }
                    continue;
                } else if (collection.primary === null) {
                    if (hasExs()) {
                        collection.primary = collection.excess.shift();
                        if (hasExs() || hasAux()) {
                            applyComment(collection.primary);
                        } else {
                            collection.primary.entry = collection.template.entry;
                            collection.primary.description = collection.template.description;
                            continue;
                        }
                    } else {
                        constructPrimary();
                        if (hasAux()) {
                            applyComment(collection.primary);
                        } else {
                            continue;
                        }
                    }
                }
                if (hasExs()) {
                    for (const card of collection.excess) {
                        let extension = 2;
                        while (collection.occupied.has(extension)) {
                            extension++;
                        }
                        applyComment(card);
                        addAuxiliary(card, collection, extension);
                    }
                }
                if (hasAux()) {
                    collection.auxiliaries.sort((a, b) => {
                        return a.extension - b.extension;
                    });
                }
                function hasExs() {
                    return (0 < collection.excess.length);
                }
                function hasAux() {
                    return (0 < collection.auxiliaries.length);
                }
                function applyComment(card) {
                    card.entry = card.description = "// You may continue writing your code here";
                    return;
                }
                function constructPrimary() {
                    collection.primary = constructCard(collection.template, newCardIndex());
                    // I like my LSIv2 cards to display in the proper order once initialized uwu
                    const templateKeys = Object.keys(factories);
                    const cards = templateKeys.map(key => O.f({
                        card: Internal.getCard(card => (card.title === templates[key].name)),
                        position: templates[key].position
                    })).filter(pair => (pair.card !== null));
                    if (cards.length < templateKeys.length) {
                        return;
                    }
                    const fullCardset = cards.sort((a, b) => (a.position - b.position)).map(pair => pair.card);
                    for (const card of fullCardset) {
                        eraseCard(card);
                        card.title = card.keys;
                    }
                    storyCards.splice(newCardIndex(), 0, ...fullCardset);
                    return;
                }
            }
            function addAuxiliary(card, collection, extension) {
                collection.occupied.add(extension);
                card.title = card.keys = collection.template.title + " " + extension;
                collection.auxiliaries.push({ card, extension });
                return;
            }
            return O.f(collections.map(({ singleton, primary, auxiliaries }) => {
                if (singleton) {
                    return primary;
                } else {
                    return O.f({ primary, auxiliaries: O.f(auxiliaries.map(({ card }) => card)) });
                }
            }));
        }
    } else if (AC.config.doAC) {
        // Auto-Cards is currently enabled
        // "text" represents the original text which was present before any scripts were executed
        // "TEXT" represents the script-modified version of "text" which AutoCards was called with
        // This dual scheme exists to ensure Auto-Cards is safely compatible with other scripts
        switch (HOOK) {
            case "input": {
                // AutoCards was called within the input modifier
                if ((AC.config.deleteAllAutoCards === false) && /CONFIRM\s*DELETE/i.test(TEXT)) {
                    CODOMAIN.initialize("CONFIRM DELETE -> Success!");
                } else if (/\/\s*A\s*C/i.test(text)) {
                    CODOMAIN.initialize(doPlayerCommands(text));
                } else if (TEXT.startsWith(" ") && readPastAction(0).text.endsWith("\n")) {
                    // Just a simple little formatting bugfix for regular AID story actions
                    CODOMAIN.initialize(getPrecedingNewlines() + TEXT.replace(/^\s+/, ""));
                } else {
                    CODOMAIN.initialize(TEXT);
                }
                break;
            }
            case "context": {
                // AutoCards was called within the context modifier
                advanceChronometer();
                // Get or construct the "Configure Auto-Cards" story card
                const configureCardTemplate = getConfigureCardTemplate();
                const configureCard = getSingletonCard(true, configureCardTemplate);
                banTitle(configureCardTemplate.title);
                pinAndSortCards(configureCard);
                const bansOverwritten = (0 < AC.signal.overrideBans);
                if ((configureCard.description !== configureCardTemplate.description) || bansOverwritten) {
                    const descConfigPatterns = (getConfigureCardDescription()
                        .split(Words.delimiter)
                        .slice(1)
                        .map(descPattern => (descPattern
                            .slice(0, descPattern.indexOf(":"))
                            .trim()
                            .replace(/\s+/g, "\\s*")
                        ))
                        .map(descPattern => (new RegExp("^\\s*" + descPattern + "\\s*:", "i")))
                    );
                    const descConfigs = configureCard.description.split(Words.delimiter).slice(1);
                    if (
                        (descConfigs.length === descConfigPatterns.length)
                        && descConfigs.every((descConfig, index) => descConfigPatterns[index].test(descConfig))
                    ) {
                        // All description config headers must be present and well-formed
                        let cfg = extractDescSetting(0);
                        if (AC.config.generationPrompt !== cfg) {
                            notify("Changes to your card generation prompt were successfully saved");
                            AC.config.generationPrompt = cfg;
                        }
                        cfg = extractDescSetting(1);
                        if (AC.config.compressionPrompt !== cfg) {
                            notify("Changes to your card memory compression prompt were successfully saved");
                            AC.config.compressionPrompt = cfg;
                        }
                        if (bansOverwritten) {
                            overrideBans();
                        } else if ((0 < AC.database.titles.pendingBans.length) || (0 < AC.database.titles.pendingUnbans.length)) {
                            const pendingBans = AC.database.titles.pendingBans.map(pair => pair[0]);
                            const pendingRewrites = new Set(
                                lowArr([...pendingBans, ...AC.database.titles.pendingUnbans.map(pair => pair[0])])
                            );
                            Internal.setBannedTitles([...pendingBans, ...extractDescSetting(2)
                                .split(",")
                                .filter(newBan => !pendingRewrites.has(newBan.toLowerCase().replace(/\s+/, " ").trim()))
                            ], true);
                        } else {
                            Internal.setBannedTitles(extractDescSetting(2).split(","), true);
                        }
                        function extractDescSetting(index) {
                            return descConfigs[index].replace(descConfigPatterns[index], "").trim();
                        }
                    } else if (bansOverwritten) {
                        overrideBans();
                    }
                    configureCard.description = getConfigureCardDescription();
                    function overrideBans() {
                        Internal.setBannedTitles(AC.database.titles.pendingBans.map(pair => pair[0]), true);
                        AC.signal.overrideBans = 0;
                        return;
                    }
                }
                if (configureCard.entry !== configureCardTemplate.entry) {
                    const oldConfig = {};
                    const settings = O.f((function () {
                        const userSettings = extractSettings(configureCard.entry);
                        if (userSettings.resetallconfigsettingsandprompts !== true) {
                            return userSettings;
                        }
                        // Reset all config settings and display state change notifications only when appropriate
                        Object.assign(oldConfig, AC.config);
                        Object.assign(AC.config, getDefaultConfig());
                        AC.config.deleteAllAutoCards = oldConfig.deleteAllAutoCards;
                        AC.config.LSIv2 = oldConfig.LSIv2;
                        AC.config.defaultCardType = oldConfig.defaultCardType;
                        AC.database.titles.banned = getDefaultConfigBans();
                        configureCard.description = getConfigureCardDescription();
                        configureCard.entry = getConfigureCardEntry();
                        const defaultSettings = extractSettings(configureCard.entry);
                        if ((DEFAULT_DO_AC === false) || (userSettings.disableautocards === true)) {
                            defaultSettings.disableautocards = true;
                        }
                        notify("Restoring all settings and prompts to their default values");
                        return defaultSettings;
                    })());
                    O.f(oldConfig);
                    if ((settings.deleteallautomaticstorycards === true) && (AC.config.deleteAllAutoCards === null)) {
                        AC.config.deleteAllAutoCards = true;
                    } else if (settings.showdetailedguide === true) {
                        AC.signal.outputReplacement = Words.guide;
                    }
                    let cfg;
                    if (parseConfig("pinthisconfigcardnearthetop", false, "pinConfigureCard")) {
                        if (cfg) {
                            pinAndSortCards(configureCard);
                            notify("The settings config card will now be pinned near the top of your story cards list");
                        } else {
                            const index = storyCards.indexOf(configureCard);
                            if (index !== -1) {
                                storyCards.splice(index, 1);
                                storyCards.push(configureCard);
                            }
                            notify("The settings config card will no longer be pinned near the top of your story cards list");
                        }
                    }
                    if (parseConfig("minimumturnscooldownfornewcards", true, "addCardCooldown")) {
                        const oldCooldown = AC.config.addCardCooldown;
                        AC.config.addCardCooldown = validateCooldown(cfg);
                        if (!isPendingGeneration() && !isAwaitingGeneration() && (0 < AC.generation.cooldown)) {
                            const quarterCooldown = validateCooldown(underQuarterInteger(AC.config.addCardCooldown));
                            if ((AC.config.addCardCooldown < oldCooldown) && (quarterCooldown < AC.generation.cooldown)) {
                                // Reduce the next generation's cooldown counter by a factor of 4
                                // But only if the new cooldown config is lower than it was before
                                // And also only if quarter cooldown is less than the current next gen cooldown
                                // (Just a random little user experience improvement)
                                AC.generation.cooldown = quarterCooldown;
                            } else if (oldCooldown < AC.config.addCardCooldown) {
                                if (oldCooldown === AC.generation.cooldown) {
                                    AC.generation.cooldown = AC.config.addCardCooldown;
                                } else {
                                    AC.generation.cooldown = validateCooldown(boundInteger(
                                        0,
                                        AC.generation.cooldown + quarterCooldown,
                                        AC.config.addCardCooldown
                                    ));
                                }
                            }
                        }
                        switch (AC.config.addCardCooldown) {
                            case 9999: {
                                notify(
                                    "You have disabled automatic card generation. To re-enable, simply set your cooldown config to any number lower than 9999. Or use the \"/ac\" in-game command to manually direct the card generation process"
                                );
                                break;
                            }
                            case 1: {
                                notify(
                                    "A new card will be generated during alternating game turns, but only if your story contains available titles"
                                );
                                break;
                            }
                            case 0: {
                                notify(
                                    "New cards will be immediately generated whenever valid titles exist within your recent story"
                                );
                                break;
                            }
                            default: {
                                notify(
                                    "A new card will be generated once every " + AC.config.addCardCooldown + " turns, but only if your story contains available titles"
                                );
                                break;
                            }
                        }
                    }
                    if (parseConfig("newcardsuseabulletedlistformat", false, "bulletedListMode")) {
                        if (cfg) {
                            notify("New card entries will be generated using a bulleted list format");
                        } else {
                            notify("New card entries will be generated using a pure prose format");
                        }
                    }
                    if (parseConfig("maximumentrylengthfornewcards", true, "defaultEntryLimit")) {
                        AC.config.defaultEntryLimit = validateEntryLimit(cfg);
                        notify(
                            "New card entries will be limited to " + AC.config.defaultEntryLimit + " characters of generated text"
                        );
                    }
                    if (parseConfig("newcardsperformmemoryupdates", false, "defaultCardsDoMemoryUpdates")) {
                        if (cfg) {
                            notify("Newly constructed cards will begin with memory updates enabled by default");
                        } else {
                            notify("Newly constructed cards will begin with memory updates disabled by default");
                        }
                    }
                    if (parseConfig("cardmemorybankpreferredlength", true, "defaultMemoryLimit")) {
                        AC.config.defaultMemoryLimit = validateMemoryLimit(cfg);
                        notify(
                            "Newly constructed cards will begin with their memory bank length preference set to " + AC.config.defaultMemoryLimit + " characters of text"
                        );
                    }
                    if (parseConfig("memorysummarycompressionratio", true, "memoryCompressionRatio")) {
                        AC.config.memoryCompressionRatio = validateMemCompRatio(cfg);
                        notify(
                            "Freshly summarized card memory banks will be approximately " + (AC.config.memoryCompressionRatio / 10) + "x shorter than their originals"
                        );
                    }
                    if (parseConfig("excludeallcapsfromtitledetection", false, "ignoreAllCapsTitles")) {
                        if (cfg) {
                            notify("All-caps text will be ignored during title detection to help prevent bad cards");
                        } else {
                            notify("All-caps text may be considered during title detection processes");
                        }
                    }
                    if (parseConfig("alsodetecttitlesfromplayerinputs", false, "readFromInputs")) {
                        if (cfg) {
                            notify("Titles may be detected from player Do/Say/Story action inputs");
                        } else {
                            notify("Title detection will skip player Do/Say/Story action inputs for grammatical leniency");
                        }
                    }
                    if (parseConfig("minimumturnsagefortitledetection", true, "minimumLookBackDistance")) {
                        AC.config.minimumLookBackDistance = validateMinLookBackDist(cfg);
                        notify(
                            "Titles and names mentioned in your story may become eligible for future card generation attempts once they are at least " + AC.config.minimumLookBackDistance + " actions old"
                        );
                    }
                    cfg = settings.uselivescriptinterfacev2;
                    if (typeof cfg === "boolean") {
                        if (AC.config.LSIv2 === null) {
                            if (cfg) {
                                AC.config.LSIv2 = true;
                                state.LSIv2 = AC;
                                AutoCards("initialize");
                                notify("Live Script Interface v2 is now embedded within your adventure!");
                            }
                        } else {
                            if (!cfg) {
                                AC.config.LSIv2 = null;
                                notify("Live Script Interface v2 has been removed from your adventure");
                            }
                        }
                    }
                    if (parseConfig("logdebugdatainaseparatecard", false, "showDebugData")) {
                        if (data === null) {
                            if (cfg) {
                                notify("State may now be viewed within the \"Debug Data\" story card");
                            } else {
                                notify("The \"Debug Data\" story card has been removed");
                            }
                        } else if (cfg) {
                            notify("Debug data will be shared with the \"Critical Data\" story card to conserve memory");
                        } else {
                            notify("Debug mode has been disabled");
                        }
                    }
                    if ((settings.disableautocards === true) && (AC.signal.forceToggle !== true)) {
                        disableAutoCards();
                        break;
                    } else {
                        // Apply the new card entry and proceed to implement Auto-Cards onContext
                        configureCard.entry = getConfigureCardEntry();
                    }
                    function parseConfig(settingsKey, isNumber, configKey) {
                        cfg = settings[settingsKey];
                        if (isNumber) {
                            return checkConfig("number");
                        } else if (!checkConfig("boolean")) {
                            return false;
                        }
                        AC.config[configKey] = cfg;
                        function checkConfig(type) {
                            return ((typeof cfg === type) && (
                                (notEmptyObj(oldConfig) && (oldConfig[configKey] !== cfg))
                                || (AC.config[configKey] !== cfg)
                            ));
                        }
                        return true;
                    }
                }
                if (AC.signal.forceToggle === false) {
                    disableAutoCards();
                    break;
                }
                AC.signal.forceToggle = null;
                if (0 < AC.chronometer.postpone) {
                    CODOMAIN.initialize(TEXT);
                    break;
                }
                // Fully implement Auto-Cards onContext
                const forceStep = AC.signal.recheckRetryOrErase;
                const currentTurn = getTurn();
                const nearestUnparsedAction = boundInteger(0, currentTurn - AC.config.minimumLookBackDistance);
                if (AC.signal.recheckRetryOrErase || (nearestUnparsedAction <= AC.database.titles.lastActionParsed)) {
                    // The player erased or retried an unknown number of actions
                    // Purge recent candidates and perform a safety recheck
                    if (nearestUnparsedAction <= AC.database.titles.lastActionParsed) {
                        AC.signal.recheckRetryOrErase = true;
                    } else {
                        AC.signal.recheckRetryOrErase = false;
                    }
                    AC.database.titles.lastActionParsed = boundInteger(-1, nearestUnparsedAction - 8);
                    for (let i = AC.database.titles.candidates.length - 1; 0 <= i; i--) {
                        const candidate = AC.database.titles.candidates[i];
                        for (let j = candidate.length - 1; 0 < j; j--) {
                            if (AC.database.titles.lastActionParsed < candidate[j]) {
                                candidate.splice(j, 1);
                            }
                        }
                        if (candidate.length <= 1) {
                            AC.database.titles.candidates.splice(i, 1);
                        }
                    }
                }
                const pendingCandidates = new Map();
                if ((0 < nearestUnparsedAction) && (AC.database.titles.lastActionParsed < nearestUnparsedAction)) {
                    const actions = [];
                    for (
                        let actionToParse = AC.database.titles.lastActionParsed + 1;
                        actionToParse <= nearestUnparsedAction;
                        actionToParse++
                    ) {
                        // I wrote this whilst sleep-deprived, somehow it works
                        const lookBack = currentTurn - actionToParse - (function () {
                            if (isDoSayStory(readPastAction(0).type)) {
                                // Inputs count as 2 actions instead of 1, conditionally offset lookBack by 1
                                return 0;
                            } else {
                                return 1;
                            }
                        })();
                        if (history.length <= lookBack) {
                            // history cannot be indexed with a negative integer
                            continue;
                        }
                        const action = readPastAction(lookBack);
                        const thisTextHash = new StringsHashed(4096).add(action.text).serialize();
                        if (actionToParse === nearestUnparsedAction) {
                            if (AC.signal.recheckRetryOrErase || (thisTextHash === AC.database.titles.lastTextHash)) {
                                // Additional safety to minimize duplicate candidate additions during retries or erases
                                AC.signal.recheckRetryOrErase = true;
                                break;
                            } else {
                                // Action parsing will proceed
                                AC.database.titles.lastActionParsed = nearestUnparsedAction;
                                AC.database.titles.lastTextHash = thisTextHash;
                            }
                        } else if (
                            // Special case where a consecutive retry>erase>continue cancels out
                            AC.signal.recheckRetryOrErase
                            && (actionToParse === (nearestUnparsedAction - 1))
                            && (thisTextHash === AC.database.titles.lastTextHash)
                        ) {
                            AC.signal.recheckRetryOrErase = false;
                        }
                        actions.push([action, actionToParse]);
                    }
                    if (!AC.signal.recheckRetryOrErase) {
                        for (const [action, turn] of actions) {
                            if (
                                (action.type === "see")
                                || (action.type === "unknown")
                                || (!AC.config.readFromInputs && isDoSayStory(action.type))
                                || /^[^\p{Lu}]*$/u.test(action.text)
                                || action.text.includes("<<<")
                                || /\/\s*A\s*C/i.test(action.text)
                                || /CONFIRM\s*DELETE/i.test(action.text)
                            ) {
                                // Skip see actions
                                // Skip input actions (only if input title detection has been disabled in the config)
                                // Skip strings without capital letters
                                // Skip utility actions
                                continue;
                            }
                            const words = (prettifyEmDashes(action.text)
                                // Nuh uh
                                .replace(/[“”]/g, "\"").replace(/[‘’]/g, "'").replaceAll("´", "`")
                                .replaceAll("。", ".").replaceAll("？", "?").replaceAll("！", "!")
                                // Replace special clause opening punctuation with colon ":" terminators
                                .replace(/(^|\s+)["'`]\s*/g, ": ").replace(/\s*[\(\[{]\s*/g, ": ")
                                // Likewise for end-quotes (curbs a common AI grammar mistake)
                                .replace(/\s*,?\s*["'`](?:\s+|$)/g, ": ")
                                // Replace funky wunky symbols with regular spaces
                                .replace(/[؟،«»¿¡„“…§，、\*_~><\)\]}#"`\s]/g, " ")
                                // Replace some mid-sentence punctuation symbols with a placeholder word
                                .replace(/\s*[—;,\/\\]\s*/g, " %@% ")
                                // Replace "I", "I'm", "I'd", "I'll", and "I've" with a placeholder word
                                .replace(/(?:^|\s+|-)I(?:'(?:m|d|ll|ve))?(?:\s+|-|$)/gi, " %@% ")
                                // Remove "'s" only if not followed by a letter
                                .replace(/'s(?![a-zA-Z])/g, "")
                                // Replace "s'" with "s" only if preceded but not followed by a letter
                                .replace(/(?<=[a-zA-Z])s'(?![a-zA-Z])/g, "s")
                                // Remove apostrophes not between letters (preserve contractions like "don't")
                                .replace(/(?<![a-zA-Z])'(?![a-zA-Z])/g, "")
                                // Remove a leading bullet
                                .replace(/^\s*-+\s*/, "")
                                // Replace common honorifics with a placeholder word
                                .replace(buildKiller(Words.honorifics), " %@% ")
                                // Remove common abbreviations
                                .replace(buildKiller(Words.abbreviations), " ")
                                // Fix end punctuation
                                .replace(/\s+\.(?![a-zA-Z])/g, ".").replace(/\.\.+/g, ".")
                                .replace(/\s+\?(?![a-zA-Z])/g, "?").replace(/\?\?+/g, "?")
                                .replace(/\s+!(?![a-zA-Z])/g, "!").replace(/!!+/g, "!")
                                .replace(/\s+:(?![a-zA-Z])/g, ":").replace(/::+/g, ":")
                                // Colons are treated as substitute end-punctuation, apply the capitalization rule
                                .replace(/:\s+(\S)/g, (_, next) => ": " + next.toUpperCase())
                                // Condense consecutive whitespace
                                .trim().replace(/\s+/g, " ")
                            ).split(" ");
                            if (!Array.isArray(words) || (words.length < 2)) {
                                continue;
                            }
                            const titles = [];
                            const incompleteTitle = [];
                            let previousWordTerminates = true;
                            for (let i = 0; i < words.length; i++) {
                                let word = words[i];
                                if (startsWithTerminator()) {
                                    // This word begins on a terminator, push the preexisting incomplete title to titles and proceed with the next sentence's beginning
                                    pushTitle();
                                    previousWordTerminates = true;
                                    // Ensure no leading terminators remain
                                    while ((word !== "") && startsWithTerminator()) {
                                        word = word.slice(1);
                                    }
                                }
                                if (word === "") {
                                    continue;
                                } else if (previousWordTerminates) {
                                    // We cannot detect titles from sentence beginnings due to sentence capitalization rules. The previous sentence was recently terminated, implying the current series of capitalized words (plus lowercase minor words) occurs near the beginning of the current sentence
                                    if (endsWithTerminator()) {
                                        continue;
                                    } else if (startsWithUpperCase()) {
                                        if (isMinorWord(word)) {
                                            // Special case where a capitalized minor word precedes a named entity, clear the previous termination status
                                            previousWordTerminates = false;
                                        }
                                        // Otherwise, proceed without clearing
                                    } else if (!isMinorWord(word) && !/^(?:and|&)(?:$|[\.\?!:]$)/.test(word)) {
                                        // Previous sentence termination status is cleared by the first new non-minor lowercase word encountered during forward iteration through the action text's words
                                        previousWordTerminates = false;
                                    }
                                    continue;
                                }
                                // Words near the beginning of this sentence have been skipped, proceed with named entity detection using capitalization rules. An incomplete title will be pushed to titles if A) a non-minor lowercase word is encountered, B) three consecutive minor words occur in a row, C) a terminator symbol is encountered at the end of a word. Otherwise, continue pushing words to the incomplete title
                                if (endsWithTerminator()) {
                                    previousWordTerminates = true;
                                    while ((word !== "") && endsWithTerminator()) {
                                        word = word.slice(0, -1);
                                    }
                                    if (word === "") {
                                        pushTitle();
                                        continue;
                                    }
                                }
                                if (isMinorWord(word)) {
                                    if (0 < incompleteTitle.length) {
                                        // Titles cannot start with a minor word
                                        if (
                                            (2 < incompleteTitle.length) && !(isMinorWord(incompleteTitle[incompleteTitle.length - 1]) && isMinorWord(incompleteTitle[incompleteTitle.length - 2]))
                                        ) {
                                            // Titles cannot have 3 or more consecutive minor words in a row
                                            pushTitle();
                                            continue;
                                        } else {
                                            // Titles may contain minor words in their middles. Ex: "Ace of Spades"
                                            incompleteTitle.push(word.toLowerCase());
                                        }
                                    }
                                } else if (startsWithUpperCase()) {
                                    // Add this proper noun to the incomplete title
                                    incompleteTitle.push(word);
                                } else {
                                    // The full title has a non-minor lowercase word to its immediate right
                                    pushTitle();
                                    continue;
                                }
                                if (previousWordTerminates) {
                                    pushTitle();
                                }
                                function pushTitle() {
                                    while (
                                        (1 < incompleteTitle.length)
                                        && isMinorWord(incompleteTitle[incompleteTitle.length - 1])
                                    ) {
                                        incompleteTitle.pop();
                                    }
                                    if (0 < incompleteTitle.length) {
                                        titles.push(incompleteTitle.join(" "));
                                        // Empty the array
                                        incompleteTitle.length = 0;
                                    }
                                    return;
                                }
                                function isMinorWord(testWord) {
                                    return Words.minor.includes(testWord.toLowerCase());
                                }
                                function startsWithUpperCase() {
                                    return /^\p{Lu}/u.test(word);
                                }
                                function startsWithTerminator() {
                                    return /^[\.\?!:]/.test(word);
                                }
                                function endsWithTerminator() {
                                    return /[\.\?!:]$/.test(word);
                                }
                            }
                            for (let i = titles.length - 1; 0 <= i; i--) {
                                titles[i] = formatTitle(titles[i]).newTitle;
                                if (titles[i] === "" || (
                                    AC.config.ignoreAllCapsTitles
                                    && (2 < titles[i].replace(/[^a-zA-Z]/g, "").length)
                                    && (titles[i] === titles[i].toUpperCase())
                                )) {
                                    titles.splice(i, 1);
                                }
                            }
                            // Remove duplicates
                            const uniqueTitles = [...new Set(titles)];
                            if (uniqueTitles.length === 0) {
                                continue;
                            } else if (
                                // No reason to keep checking long past the max lookback distance
                                (currentTurn < 256)
                                && (action.type === "start")
                                // This is only used here so it doesn't need its own AC.config property or validation
                                && (DEFAULT_BAN_TITLES_FROM_OPENING !== false)
                            ) {
                                // Titles in the opening prompt are banned by default, hopefully accounting for the player character's name and other established setting details
                                uniqueTitles.forEach(title => banTitle(title));
                            } else {
                                // Schedule new titles for later insertion within the candidates database
                                for (const title of uniqueTitles) {
                                    const pendingHashKey = title.toLowerCase();
                                    if (pendingCandidates.has(pendingHashKey)) {
                                        // Consolidate pending candidates with matching titles but different turns
                                        pendingCandidates.get(pendingHashKey).turns.push(turn);
                                    } else {
                                        pendingCandidates.set(pendingHashKey, O.s({ title, turns: [turn] }));
                                    }
                                }
                            }
                            function buildKiller(words) {
                                return (new RegExp(("(?:^|\\s+|-)(?:" + (words
                                    .map(word => word.replace(".", "\\."))
                                    .join("|")
                                ) + ")(?:\\s+|-|$)"), "gi"));
                            }
                        }
                    }
                }
                // Measure the minimum and maximum turns of occurance for all title candidates
                let minTurn = currentTurn;
                let maxTurn = 0;
                for (let i = AC.database.titles.candidates.length - 1; 0 <= i; i--) {
                    const candidate = AC.database.titles.candidates[i];
                    const title = candidate[0];
                    if (isUsedOrBanned(title) || isNamed(title)) {
                        // Retroactively ensure AC.database.titles.candidates contains no used / banned titles
                        AC.database.titles.candidates.splice(i, 1);
                    } else {
                        const pendingHashKey = title.toLowerCase();
                        if (pendingCandidates.has(pendingHashKey)) {
                            // This candidate title matches one of the pending candidates, collect the pending turns
                            candidate.push(...pendingCandidates.get(pendingHashKey).turns);
                            // Remove this pending candidate
                            pendingCandidates.delete(pendingHashKey);
                        }
                        if (2 < candidate.length) {
                            // Ensure all recorded turns of occurance are unique for this candidate
                            // Sort the turns from least to greatest
                            const sortedTurns = [...new Set(candidate.slice(1))].sort((a, b) => (a - b));
                            if (625 < sortedTurns.length) {
                                sortedTurns.splice(0, sortedTurns.length - 600);
                            }
                            candidate.length = 1;
                            candidate.push(...sortedTurns);
                        }
                        setCandidateTurnBounds(candidate);
                    }
                }
                for (const pendingCandidate of pendingCandidates.values()) {
                    // Insert any remaining pending candidates (validity has already been ensured)
                    const newCandidate = [pendingCandidate.title, ...pendingCandidate.turns];
                    setCandidateTurnBounds(newCandidate);
                    AC.database.titles.candidates.push(newCandidate);
                }
                const isCandidatesSorted = (function () {
                    if (425 < AC.database.titles.candidates.length) {
                        // Sorting a large title candidates database is computationally expensive
                        sortCandidates();
                        AC.database.titles.candidates.splice(400);
                        // Flag this operation as complete for later consideration
                        return true;
                    } else {
                        return false;
                    }
                })();
                Internal.getUsedTitles();
                for (const titleKey in AC.database.memories.associations) {
                    if (isAuto(titleKey)) {
                        // Reset the lifespan counter
                        AC.database.memories.associations[titleKey][0] = 999;
                    } else if (AC.database.memories.associations[titleKey][0] < 1) {
                        // Forget this set of memory associations
                        delete AC.database.memories.associations[titleKey];
                    } else if (!isAwaitingGeneration()) {
                        // Decrement the lifespan counter
                        AC.database.memories.associations[titleKey][0]--;
                    }
                }
                // This copy of TEXT may be mutated
                let context = TEXT;
                const titleHeaderPatternGlobal = /\s*{\s*titles?\s*:\s*([\s\S]*?)\s*}\s*/gi;
                // Card events govern the parsing of memories from raw context as well as card memory bank injection
                const cardEvents = (function () {
                    // Extract memories from the initial text (not TEXT as called from within the context modifier!)
                    const contextMemories = (function () {
                        const memoriesMatch = text.match(/Memories\s*:\s*([\s\S]*?)\s*(?:Recent\s*Story\s*:|$)/i);
                        if (!memoriesMatch) {
                            return new Set();
                        }
                        const uniqueMemories = new Set(isolateMemories(memoriesMatch[1]));
                        if (uniqueMemories.size === 0) {
                            return uniqueMemories;
                        }
                        const duplicatesHashed = StringsHashed.deserialize(AC.database.memories.duplicates, 65536);
                        const duplicateMemories = new Set();
                        const seenMemories = new Set();
                        for (const memoryA of uniqueMemories) {
                            if (duplicatesHashed.has(memoryA)) {
                                // Remove to ensure the insertion order for this duplicate changes
                                duplicatesHashed.remove(memoryA);
                                duplicateMemories.add(memoryA);
                            } else if ((function () {
                                for (const memoryB of seenMemories) {
                                    if (0.42 < similarityScore(memoryA, memoryB)) {
                                        // This memory is too similar to another memory
                                        duplicateMemories.add(memoryA);
                                        return false;
                                    }
                                }
                                return true;
                            })()) {
                                seenMemories.add(memoryA);
                            }
                        }
                        if (0 < duplicateMemories.size) {
                            // Add each near duplicate's hashcode to AC.database.memories.duplicates
                            // Then remove duplicates from uniqueMemories and the context window
                            for (const duplicate of duplicateMemories) {
                                duplicatesHashed.add(duplicate);
                                uniqueMemories.delete(duplicate);
                                context = context.replaceAll("\n" + duplicate, "");
                            }
                            // Only the 2000 most recent duplicate memory hashcodes are remembered
                            AC.database.memories.duplicates = duplicatesHashed.latest(2000).serialize();
                        }
                        return uniqueMemories;
                    })();
                    const leftBoundary = "^|\\s|\"|'|—|\\(|\\[|{";
                    const rightBoundary = "\\s|\\.|\\?|!|,|;|\"|'|—|\\)|\\]|}|$";
                    // Murder, homicide if you will, nothing to see here
                    const theKiller = new RegExp("(?:" + leftBoundary + ")the[\\s\\S]*$", "i");
                    const peerageKiller = new RegExp((
                        "(?:" + leftBoundary + ")(?:" + Words.peerage.join("|") + ")(?:" + rightBoundary + ")"
                    ), "gi");
                    const events = new Map();
                    for (const contextMemory of contextMemories) {
                        for (const titleKey of auto) {
                            if (!(new RegExp((
                                "(?<=" + leftBoundary + ")" + (titleKey
                                    .replace(theKiller, "")
                                    .replace(peerageKiller, "")
                                    .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
                                ) + "(?=" + rightBoundary + ")"
                            ), "i")).test(contextMemory)) {
                                continue;
                            }
                            // AC card titles found in active memories will promote card events
                            if (events.has(titleKey)) {
                                events.get(titleKey).pendingMemories.push(contextMemory);
                                continue;
                            }
                            events.set(titleKey, O.s({
                                pendingMemories: [contextMemory],
                                titleHeader: ""
                            }));
                        }
                    }
                    const titleHeaderMatches = [...context.matchAll(titleHeaderPatternGlobal)];
                    for (const [titleHeader, title] of titleHeaderMatches) {
                        if (!isAuto(title)) {
                            continue;
                        }
                        // Unique title headers found in context will promote card events
                        const titleKey = title.toLowerCase();
                        if (events.has(titleKey)) {
                            events.get(titleKey).titleHeader = titleHeader;
                            continue;
                        }
                        events.set(titleKey, O.s({
                            pendingMemories: [],
                            titleHeader: titleHeader
                        }));
                    }
                    return events;
                })();
                // Remove auto card title headers from active story card entries and contextualize their respective memory banks
                // Also handle the growth and maintenance of card memory banks
                let isRemembering = false;
                for (const card of storyCards) {
                    // Iterate over each card to handle pending card events and forenames/surnames
                    const titleHeaderMatcher = /^{title: \s*([\s\S]*?)\s*}/;
                    let breakForCompression = isPendingCompression();
                    if (breakForCompression) {
                        break;
                    } else if (!card.entry.startsWith("{title: ")) {
                        continue;
                    } else if (exceedsMemoryLimit()) {
                        const titleHeaderMatch = card.entry.match(titleHeaderMatcher);
                        if (titleHeaderMatch && isAuto(titleHeaderMatch[1])) {
                            prepareMemoryCompression(titleHeaderMatch[1].toLowerCase());
                            break;
                        }
                    }
                    // Handle card events
                    const lowerEntry = card.entry.toLowerCase();
                    for (const titleKey of cardEvents.keys()) {
                        if (!lowerEntry.startsWith("{title: " + titleKey + "}")) {
                            continue;
                        }
                        const cardEvent = cardEvents.get(titleKey);
                        if (
                            (0 < cardEvent.pendingMemories.length)
                            && /{\s*updates?\s*:\s*true\s*,\s*limits?\s*:[\s\S]*?}/i.test(card.description)
                        ) {
                            // Add new card memories
                            const associationsHashed = (function () {
                                if (titleKey in AC.database.memories.associations) {
                                    return StringsHashed.deserialize(AC.database.memories.associations[titleKey][1], 65536);
                                } else {
                                    AC.database.memories.associations[titleKey] = [999, ""];
                                    return new StringsHashed(65536);
                                }
                            })();
                            const oldMemories = isolateMemories(extractCardMemories().text);
                            for (let i = 0; i < cardEvent.pendingMemories.length; i++) {
                                if (associationsHashed.has(cardEvent.pendingMemories[i])) {
                                    // Remove first to alter the insertion order
                                    associationsHashed.remove(cardEvent.pendingMemories[i]);
                                } else if (!oldMemories.some(oldMemory => (
                                    (0.8 < similarityScore(oldMemory, cardEvent.pendingMemories[i]))
                                ))) {
                                    // Ensure no near-duplicate memories are appended
                                    card.description += "\n- " + cardEvent.pendingMemories[i];
                                }
                                associationsHashed.add(cardEvent.pendingMemories[i]);
                            }
                            AC.database.memories.associations[titleKey][1] = associationsHashed.latest(3500).serialize();
                            if (associationsHashed.size() === 0) {
                                delete AC.database.memories.associations[titleKey];
                            }
                            if (exceedsMemoryLimit()) {
                                breakForCompression = prepareMemoryCompression(titleKey);
                                break;
                            }
                        }
                        if (cardEvent.titleHeader !== "") {
                            // Replace this card's title header in context
                            const cardMemoriesText = extractCardMemories().text;
                            if (cardMemoriesText === "") {
                                // This card contains no card memories to contextualize
                                context = context.replace(cardEvent.titleHeader, "\n\n");
                            } else {
                                // Insert card memories within context and ensure they occur uniquely
                                const cardMemories = cardMemoriesText.split("\n").map(cardMemory => cardMemory.trim());
                                for (const cardMemory of cardMemories) {
                                    if (25 < cardMemory.length) {
                                        context = (context
                                            .replaceAll(cardMemory, "<#>")
                                            .replaceAll(cardMemory.replace(/^-+\s*/, ""), "<#>")
                                        );
                                    }
                                }
                                context = context.replace(cardEvent.titleHeader, (
                                    "\n\n{%@MEM@%" + cardMemoriesText + "%@MEM@%}\n"
                                ));
                                isRemembering = true;
                            }
                        }
                        cardEvents.delete(titleKey);
                        break;
                    }
                    if (breakForCompression) {
                        break;
                    }
                    // Simplify auto-card titles which contain an obvious surname
                    const titleHeaderMatch = card.entry.match(titleHeaderMatcher);
                    if (!titleHeaderMatch) {
                        continue;
                    }
                    const [oldTitleHeader, oldTitle] = titleHeaderMatch;
                    if (!isAuto(oldTitle)) {
                        continue;
                    }
                    const surname = isNamed(oldTitle, true);
                    if (typeof surname !== "string") {
                        continue;
                    }
                    const newTitle = oldTitle.replace(" " + surname, "");
                    const [oldTitleKey, newTitleKey] = [oldTitle, newTitle].map(title => title.toLowerCase());
                    if (oldTitleKey === newTitleKey) {
                        continue;
                    }
                    // Preemptively mitigate some global state considered within the formatTitle scope
                    clearTransientTitles();
                    AC.database.titles.used = ["%@%"];
                    [used, forenames, surnames].forEach(nameset => nameset.add("%@%"));
                    // Premature optimization is the root of all evil
                    const newKey = formatTitle(newTitle).newKey;
                    clearTransientTitles();
                    if (newKey === "") {
                        Internal.getUsedTitles();
                        continue;
                    }
                    if (oldTitleKey in AC.database.memories.associations) {
                        AC.database.memories.associations[newTitleKey] = AC.database.memories.associations[oldTitleKey];
                        delete AC.database.memories.associations[oldTitleKey];
                    }
                    if (AC.compression.titleKey === oldTitleKey) {
                        AC.compression.titleKey = newTitleKey;
                    }
                    card.entry = card.entry.replace(oldTitleHeader, oldTitleHeader.replace(oldTitle, newTitle));
                    card.keys = buildKeys(card.keys.replaceAll(" " + surname, ""), newKey);
                    Internal.getUsedTitles();
                    function exceedsMemoryLimit() {
                        return ((function () {
                            const memoryLimitMatch = card.description.match(/limits?\s*:\s*(\d+)\s*}/i);
                            if (memoryLimitMatch) {
                                return validateMemoryLimit(parseInt(memoryLimitMatch[1], 10));
                            } else {
                                return AC.config.defaultMemoryLimit;
                            }
                        })() < (function () {
                            const cardMemories = extractCardMemories();
                            if (cardMemories.missing) {
                                return card.description;
                            } else {
                                return cardMemories.text;
                            }
                        })().length);
                    }
                    function prepareMemoryCompression(titleKey) {
                        AC.compression.oldMemoryBank = isolateMemories(extractCardMemories().text);
                        if (AC.compression.oldMemoryBank.length === 0) {
                            return false;
                        }
                        AC.compression.completed = 0;
                        AC.compression.titleKey = titleKey;
                        AC.compression.vanityTitle = cleanSpaces(card.title.trim());
                        AC.compression.responseEstimate = (function () {
                            const responseEstimate = estimateResponseLength();
                            if (responseEstimate === -1) {
                                return 1400
                            } else {
                                return responseEstimate;
                            }
                        })();
                        AC.compression.lastConstructIndex = -1;
                        AC.compression.newMemoryBank = [];
                        return true;
                    }
                    function extractCardMemories() {
                        const memoryHeaderMatch = card.description.match(
                            /(?<={\s*updates?\s*:[\s\S]*?,\s*limits?\s*:[\s\S]*?})[\s\S]*$/i
                        );
                        if (memoryHeaderMatch) {
                            return O.f({ missing: false, text: cleanSpaces(memoryHeaderMatch[0].trim()) });
                        } else {
                            return O.f({ missing: true, text: "" });
                        }
                    }
                }
                // Remove repeated memories plus any remaining title headers
                context = (context
                    .replace(/(\s*<#>\s*)+/g, "\n")
                    .replace(titleHeaderPatternGlobal, "\n\n")
                    .replace(/World\s*Lore\s*:\s*/i, "World Lore:\n")
                    .replace(/Memories\s*:\s*(?=Recent\s*Story\s*:|$)/i, "")
                );
                // Prompt the AI to generate a new card entry, compress an existing card's memories, or continue the story
                let isGenerating = false;
                let isCompressing = false;
                if (isPendingGeneration()) {
                    promptGeneration();
                } else if (isAwaitingGeneration()) {
                    AC.generation.workpiece = AC.generation.pending.shift();
                    promptGeneration();
                } else if (isPendingCompression()) {
                    promptCompression();
                } else if (AC.signal.recheckRetryOrErase) {
                    // Do nothing 😜
                } else if ((AC.generation.cooldown <= 0) && (0 < AC.database.titles.candidates.length)) {
                    // Prepare to automatically construct a new plot-relevant story card by selecting a title
                    let selectedTitle = (function () {
                        if (AC.database.titles.candidates.length === 1) {
                            return AC.database.titles.candidates[0][0];
                        } else if (!isCandidatesSorted) {
                            sortCandidates();
                        }
                        const mostRelevantTitle = AC.database.titles.candidates[0][0];
                        if ((AC.database.titles.candidates.length < 16) || (Math.random() < 0.6667)) {
                            // Usually, 2/3 of the time, the most relevant title is selected
                            return mostRelevantTitle;
                        }
                        // Occasionally (1/3 of the time once the candidates databases has at least 16 titles) make a completely random selection between the top 4 most recently occuring title candidates which are NOT the top 2 most relevant titles. Note that relevance !== recency
                        // This gives non-character titles slightly better odds of being selected for card generation due to the relevance sorter's inherent bias towards characters; they tend to appear far more often in prose
                        return (AC.database.titles.candidates
                            // Create a shallow copy to avoid modifying AC.database.titles.candidates itself
                            // Add index to preserve original positions whenever ties occur during sorting
                            .map((candidate, index) => ({ candidate, index }))
                            // Sort by each candidate's most recent turn
                            .sort((a, b) => {
                                const turnDiff = b.candidate[b.candidate.length - 1] - a.candidate[a.candidate.length - 1];
                                if (turnDiff === 0) {
                                    // Don't change indices in the case of a tie
                                    return (a.index - b.index);
                                } else {
                                    // No tie here, sort by recency
                                    return turnDiff;
                                }
                            })
                            // Get the top 6 most recent titles (4 + 2 because the top 2 relevant titles may be present)
                            .slice(0, 6)
                            // Extract only the title names
                            .map(element => element.candidate[0])
                            // Exclude the top 2 most relevant titles
                            .filter(title => ((title !== mostRelevantTitle) && (title !== AC.database.titles.candidates[1][0])))
                            // Ensure only 4 titles remain
                            .slice(0, 4)
                        )[Math.floor(Math.random() * 4)];
                    })();
                    while (!Internal.generateCard(O.f({ title: selectedTitle }))) {
                        // This is an emergency precaution, I don't expect the interior of this while loop to EVER execute
                        // That said, it's crucial for the while condition be checked at least once, because Internal.generateCard appends an element to AC.generation.pending as a side effect
                        const lowerSelectedTitle = formatTitle(selectedTitle).newTitle.toLowerCase();
                        const index = AC.database.titles.candidates.findIndex(candidate => {
                            return (formatTitle(candidate[0]).newTitle.toLowerCase() === lowerSelectedTitle);
                        });
                        if (index === -1) {
                            // Should be impossible
                            break;
                        }
                        AC.database.titles.candidates.splice(index, 1);
                        if (AC.database.titles.candidates.length === 0) {
                            break;
                        }
                        selectedTitle = AC.database.titles.candidates[0][0];
                    }
                    if (isAwaitingGeneration()) {
                        // Assign the workpiece so card generation may fully commence!
                        AC.generation.workpiece = AC.generation.pending.shift();
                        promptGeneration();
                    } else if (isPendingCompression()) {
                        promptCompression();
                    }
                } else if (
                    (AC.chronometer.step || forceStep)
                    && (0 < AC.generation.cooldown)
                    && (AC.config.addCardCooldown !== 9999)
                ) {
                    AC.generation.cooldown--;
                }
                if (shouldTrimContext()) {
                    // Truncate context based on AC.signal.maxChars, begin by individually removing the oldest sentences from the recent story portion of the context window
                    const recentStoryPattern = /Recent\s*Story\s*:\s*([\s\S]*?)(%@GEN@%|%@COM@%|\s\[\s*Author's\s*note\s*:|$)/i;
                    const recentStoryMatch = context.match(recentStoryPattern);
                    if (recentStoryMatch) {
                        const recentStory = recentStoryMatch[1];
                        let sentencesJoined = recentStory;
                        // Split by the whitespace chars following each sentence (without consuming)
                        const sentences = splitBySentences(recentStory);
                        // [minimum num of story sentences] = ([max chars for context] / 6) / [average chars per sentence]
                        const sentencesMinimum = Math.ceil(
                            (AC.signal.maxChars / 6) / (
                                boundInteger(1, context.length) / boundInteger(1, sentences.length)
                            )
                        ) + 1;
                        do {
                            if (sentences.length < sentencesMinimum) {
                                // A minimum of n many recent story sentences must remain
                                // Where n represents a sentence count equal to roughly 16.7% of the full context chars
                                break;
                            }
                            // Remove the first (oldest) recent story sentence
                            sentences.shift();
                            // Check if the total length exceeds the AC.signal.maxChars limit
                            sentencesJoined = sentences.join("");
                        } while (AC.signal.maxChars < (context.length - recentStory.length + sentencesJoined.length + 3));
                        // Rebuild the context with the truncated recentStory
                        context = context.replace(recentStoryPattern, "Recent Story:\n" + sentencesJoined + recentStoryMatch[2]);
                    }
                    if (isRemembering && shouldTrimContext()) {
                        // Next remove loaded card memories (if any) with top-down priority, one card at a time
                        do {
                            // This matcher relies on its case-sensitivity
                            const cardMemoriesMatch = context.match(/{%@MEM@%([\s\S]+?)%@MEM@%}/);
                            if (!cardMemoriesMatch) {
                                break;
                            }
                            context = context.replace(cardMemoriesMatch[0], (cardMemoriesMatch[0]
                                .replace(cardMemoriesMatch[1], "")
                                // Set the MEM tags to lowercase to avoid repeated future matches
                                .toLowerCase()
                            ));
                        } while (AC.signal.maxChars < (context.length + 3));
                    }
                    if (shouldTrimContext()) {
                        // If the context is still too long, just trim from the beginning I guess 🤷‍♀️
                        context = context.slice(context.length - AC.signal.maxChars + 1);
                    }
                }
                if (isRemembering) {
                    // Card memory flags serve no further purpose
                    context = (context
                        // Case-insensitivity is crucial here
                        .replace(/(?<={%@MEM@%)\s*/gi, "")
                        .replace(/\s*(?=%@MEM@%})/gi, "")
                        .replace(/{%@MEM@%%@MEM@%}\s?/gi, "")
                        .replaceAll("{%@MEM@%", "{ Memories:\n")
                        .replaceAll("%@MEM@%}", " }")
                    );
                }
                if (isGenerating) {
                    // Likewise for the card entry generation delimiter
                    context = context.replaceAll("%@GEN@%", "");
                } else if (isCompressing) {
                    // Or the (mutually exclusive) card memory compression delimiter
                    context = context.replaceAll("%@COM@%", "");
                }
                CODOMAIN.initialize(context);
                function isolateMemories(memoriesText) {
                    return (memoriesText
                        .split("\n")
                        .map(memory => cleanSpaces(memory.trim().replace(/^-+\s*/, "")))
                        .filter(memory => (memory !== ""))
                    );
                }
                function isAuto(title) {
                    return auto.has(title.toLowerCase());
                }
                function promptCompression() {
                    isGenerating = false;
                    const cardEntryText = (function () {
                        const card = getAutoCard(AC.compression.titleKey);
                        if (card === null) {
                            return null;
                        }
                        const entryLines = formatEntry(card.entry).trimEnd().split("\n");
                        if (Object.is(entryLines[0].trim(), "")) {
                            return "";
                        }
                        for (let i = 0; i < entryLines.length; i++) {
                            entryLines[i] = entryLines[i].trim();
                            if (/[a-zA-Z]$/.test(entryLines[i])) {
                                entryLines[i] += ".";
                            }
                            entryLines[i] += " ";
                        }
                        return entryLines.join("");
                    })();
                    if (cardEntryText === null) {
                        // Safety measure
                        resetCompressionProperties();
                        return;
                    }
                    repositionAN();
                    // The "%COM%" substring serves as a temporary delimiter for later context length trucation
                    context = context.trimEnd() + "\n\n" + cardEntryText + (
                        [...AC.compression.newMemoryBank, ...AC.compression.oldMemoryBank].join(" ")
                    ) + "%@COM@%\n\n" + (function () {
                        const memoryConstruct = (function () {
                            if (AC.compression.lastConstructIndex === -1) {
                                for (let i = 0; i < AC.compression.oldMemoryBank.length; i++) {
                                    AC.compression.lastConstructIndex = i;
                                    const memoryConstruct = buildMemoryConstruct();
                                    if ((
                                        (AC.config.memoryCompressionRatio / 10) * AC.compression.responseEstimate
                                    ) < memoryConstruct.length) {
                                        return memoryConstruct;
                                    }
                                }
                            } else {
                                // The previous card memory compression attempt produced a bad output
                                AC.compression.lastConstructIndex = boundInteger(
                                    0, AC.compression.lastConstructIndex + 1, AC.compression.oldMemoryBank.length - 1
                                );
                            }
                            return buildMemoryConstruct();
                        })();
                        // Fill all %{title} placeholders
                        const precursorPrompt = insertTitle(AC.config.compressionPrompt, AC.compression.vanityTitle).trim();
                        const memoryPlaceholderPattern = /(?:[%\$]+\s*|[%\$]*){+\s*memor(y|ies)\s*}+/gi;
                        if (memoryPlaceholderPattern.test(precursorPrompt)) {
                            // Fill all %{memory} placeholders with a selection of pending old memories
                            return precursorPrompt.replace(memoryPlaceholderPattern, memoryConstruct);
                        } else {
                            // Append the partial entry to the end of context
                            return precursorPrompt + "\n\n" + memoryConstruct;
                        }
                    })() + "\n\n";
                    isCompressing = true;
                    return;
                }
                function promptGeneration() {
                    repositionAN();
                    // All %{title} placeholders were already filled during this workpiece's initialization
                    // The "%GEN%" substring serves as a temporary delimiter for later context length trucation
                    context = context.trimEnd() + "%@GEN@%\n\n" + (function () {
                        // For context only, remove the title header from this workpiece's partially completed entry
                        const partialEntry = formatEntry(AC.generation.workpiece.entry);
                        const entryPlaceholderPattern = /(?:[%\$]+\s*|[%\$]*){+\s*entry\s*}+/gi;
                        if (entryPlaceholderPattern.test(AC.generation.workpiece.prompt)) {
                            // Fill all %{entry} placeholders with the partial entry
                            return AC.generation.workpiece.prompt.replace(entryPlaceholderPattern, partialEntry);
                        } else {
                            // Append the partial entry to the end of context
                            return AC.generation.workpiece.prompt.trimEnd() + "\n\n" + partialEntry;
                        }
                    })();
                    isGenerating = true;
                    return;
                }
                function repositionAN() {
                    // Move the Author's Note further back in context during card generation (should still be considered)
                    const authorsNotePattern = /\s*(\[\s*Author's\s*note\s*:[\s\S]*\])\s*/i;
                    const authorsNoteMatch = context.match(authorsNotePattern);
                    if (!authorsNoteMatch) {
                        return;
                    }
                    const leadingSpaces = context.match(/^\s*/)[0];
                    context = context.replace(authorsNotePattern, " ").trimStart();
                    const recentStoryPattern = /\s*Recent\s*Story\s*:\s*/i;
                    if (recentStoryPattern.test(context)) {
                        // Remove author's note from its original position and insert above "Recent Story:\n"
                        context = (context
                            .replace(recentStoryPattern, "\n\n" + authorsNoteMatch[1] + "\n\nRecent Story:\n")
                            .trimStart()
                        );
                    } else {
                        context = authorsNoteMatch[1] + "\n\n" + context;
                    }
                    context = leadingSpaces + context;
                    return;
                }
                function sortCandidates() {
                    if (AC.database.titles.candidates.length < 2) {
                        return;
                    }
                    const turnRange = boundInteger(1, maxTurn - minTurn);
                    const recencyExponent = Math.log10(turnRange) + 1.85;
                    // Sort the database of available title candidates by relevance
                    AC.database.titles.candidates.sort((a, b) => {
                        return relevanceScore(b) - relevanceScore(a);
                    });
                    function relevanceScore(candidate) {
                        // weight = (((turn - minTurn) / (maxTurn - minTurn)) + 1)^(log10(maxTurn - minTurn) + 1.85)
                        return candidate.slice(1).reduce((sum, turn) => {
                            // Apply exponential scaling to give far more weight to recent turns
                            return sum + Math.pow((
                                // The recency weight's exponent scales by log10(turnRange) + 1.85
                                // Shhh don't question it 😜
                                ((turn - minTurn) / turnRange) + 1
                            ), recencyExponent);
                        }, 0);
                    }
                    return;
                }
                function shouldTrimContext() {
                    return (AC.signal.maxChars <= context.length);
                }
                function setCandidateTurnBounds(candidate) {
                    // candidate: ["Example Title", 0, 1, 2, 3]
                    minTurn = boundInteger(0, minTurn, candidate[1]);
                    maxTurn = boundInteger(candidate[candidate.length - 1], maxTurn);
                    return;
                }
                function disableAutoCards() {
                    AC.signal.forceToggle = null;
                    // Auto-Cards has been disabled
                    AC.config.doAC = false;
                    // Deconstruct the "Configure Auto-Cards" story card
                    unbanTitle(configureCardTemplate.title);
                    eraseCard(configureCard);
                    // Signal the construction of "Edit to enable Auto-Cards" during the next onOutput hook
                    AC.signal.swapControlCards = true;
                    // Post a success message
                    notify("Disabled! Use the \"Edit to enable Auto-Cards\" story card to undo");
                    CODOMAIN.initialize(TEXT);
                    return;
                }
                break;
            }
            case "output": {
                // AutoCards was called within the output modifier
                const output = prettifyEmDashes(TEXT);
                if (0 < AC.chronometer.postpone) {
                    // Do not capture or replace any outputs during this turn
                    promoteAmnesia();
                    if (permitOutput()) {
                        CODOMAIN.initialize(output);
                    }
                } else if (AC.signal.swapControlCards) {
                    if (permitOutput()) {
                        CODOMAIN.initialize(output);
                    }
                } else if (isPendingGeneration()) {
                    const textClone = prettifyEmDashes(text);
                    AC.chronometer.amnesia = 0;
                    AC.generation.completed++;
                    const generationsRemaining = (function () {
                        if (
                            textClone.includes("\"")
                            || /(?<=^|\s|—|\(|\[|{)sa(ys?|id)(?=\s|\.|\?|!|,|;|—|\)|\]|}|$)/i.test(textClone)
                        ) {
                            // Discard full outputs containing "say" or quotations
                            // To build coherent entries, the AI must not attempt to continue the story
                            return skip(estimateRemainingGens());
                        }
                        const oldSentences = (splitBySentences(formatEntry(AC.generation.workpiece.entry))
                            .map(sentence => sentence.trim())
                            .filter(sentence => (2 < sentence.length))
                        );
                        const seenSentences = new Set();
                        const entryAddition = splitBySentences(textClone
                            .replace(/[\*_~]/g, "")
                            .replace(/:+/g, "#")
                            .replace(/\s+/g, " ")
                        ).map(sentence => (sentence
                            .trim()
                            .replace(/^-+\s*/, "")
                        )).filter(sentence => (
                            // Remove empty strings
                            (sentence !== "")
                            // Remove colon ":" headers or other stinky symbols because me no like 😠
                            && !/[#><@]/.test(sentence)
                            // Remove previously repeated sentences
                            && !oldSentences.some(oldSentence => (0.75 < similarityScore(oldSentence, sentence)))
                            // Remove repeated sentences from within entryAddition itself
                            && ![...seenSentences].some(seenSentence => (0.75 < similarityScore(seenSentence, sentence)))
                            // Simply ensure this sentence is henceforth unique
                            && seenSentences.add(sentence)
                        )).join(" ").trim() + " ";
                        if (entryAddition === " ") {
                            return skip(estimateRemainingGens());
                        } else if (
                            /^{title:[\s\S]*?}$/.test(AC.generation.workpiece.entry.trim())
                            && (AC.generation.workpiece.entry.length < 111)
                        ) {
                            AC.generation.workpiece.entry += "\n" + entryAddition;
                        } else {
                            AC.generation.workpiece.entry += entryAddition;
                        }
                        if (AC.generation.workpiece.limit < AC.generation.workpiece.entry.length) {
                            let exit = false;
                            let truncatedEntry = AC.generation.workpiece.entry.trimEnd();
                            const sentences = splitBySentences(truncatedEntry);
                            for (let i = sentences.length - 1; 0 <= i; i--) {
                                if (!sentences[i].includes("\n")) {
                                    sentences.splice(i, 1);
                                    truncatedEntry = sentences.join("").trimEnd();
                                    if (truncatedEntry.length <= AC.generation.workpiece.limit) {
                                        break;
                                    }
                                    continue;
                                }
                                // Lines only matter for initial entries provided via AutoCards().API.generateCard
                                const lines = sentences[i].split("\n");
                                for (let j = lines.length - 1; 0 <= j; j--) {
                                    lines.splice(j, 1);
                                    sentences[i] = lines.join("\n");
                                    truncatedEntry = sentences.join("").trimEnd();
                                    if (truncatedEntry.length <= AC.generation.workpiece.limit) {
                                        // Exit from both loops
                                        exit = true;
                                        break;
                                    }
                                }
                                if (exit) {
                                    break;
                                }
                            }
                            if (truncatedEntry.length < 150) {
                                // Disregard the previous sentence/line-based truncation attempt
                                AC.generation.workpiece.entry = limitString(
                                    AC.generation.workpiece.entry, AC.generation.workpiece.limit
                                );
                                // Attempt to remove the last word/fragment
                                truncatedEntry = AC.generation.workpiece.entry.replace(/\s*\S+$/, "");
                                if (150 <= truncatedEntry) {
                                    AC.generation.workpiece.entry = truncatedEntry;
                                }
                            } else {
                                AC.generation.workpiece.entry = truncatedEntry;
                            }
                            return 0;
                        } else if ((AC.generation.workpiece.limit - 50) <= AC.generation.workpiece.entry.length) {
                            AC.generation.workpiece.entry = AC.generation.workpiece.entry.trimEnd();
                            return 0;
                        }
                        function skip(remaining) {
                            if (AC.generation.permitted <= AC.generation.completed) {
                                AC.generation.workpiece.entry = AC.generation.workpiece.entry.trimEnd();
                                return 0;
                            }
                            return remaining;
                        }
                        function estimateRemainingGens() {
                            const responseEstimate = estimateResponseLength();
                            if (responseEstimate === -1) {
                                return 1;
                            }
                            const remaining = boundInteger(1, Math.round(
                                (150 + AC.generation.workpiece.limit - AC.generation.workpiece.entry.length) / responseEstimate
                            ));
                            if (AC.generation.permitted === 34) {
                                AC.generation.permitted = boundInteger(6, Math.floor(3.5 * remaining), 32);
                            }
                            return remaining;
                        }
                        return skip(estimateRemainingGens());
                    })();
                    postOutputMessage(textClone, AC.generation.completed / Math.min(
                        AC.generation.permitted,
                        AC.generation.completed + generationsRemaining
                    ));
                    if (generationsRemaining <= 0) {
                        notify("\"" + AC.generation.workpiece.title + "\" was successfully added to your story cards!");
                        constructCard(O.f({
                            type: AC.generation.workpiece.type,
                            title: AC.generation.workpiece.title,
                            keys: AC.generation.workpiece.keys,
                            entry: (function () {
                                if (!AC.config.bulletedListMode) {
                                    return AC.generation.workpiece.entry;
                                }
                                const sentences = splitBySentences(
                                    formatEntry(
                                        AC.generation.workpiece.entry.replace(/\s+/g, " ")
                                    ).replace(/:+/g, "#")
                                ).map(sentence => {
                                    sentence = (sentence
                                        .replaceAll("#", ":")
                                        .trim()
                                        .replace(/^-+\s*/, "")
                                    );
                                    if (sentence.length < 12) {
                                        return sentence;
                                    } else {
                                        return "\n- " + sentence.replace(/\s*[\.\?!]+$/, "");
                                    }
                                });
                                const titleHeader = "{title: " + AC.generation.workpiece.title + "}";
                                if (sentences.every(sentence => (sentence.length < 12))) {
                                    const sentencesJoined = sentences.join(" ").trim();
                                    if (sentencesJoined === "") {
                                        return titleHeader;
                                    } else {
                                        return limitString(titleHeader + "\n" + sentencesJoined, 2000);
                                    }
                                }
                                for (let i = sentences.length - 1; 0 <= i; i--) {
                                    const bulletedEntry = cleanSpaces(titleHeader + sentences.join(" ")).trimEnd();
                                    if (bulletedEntry.length <= 2000) {
                                        return bulletedEntry;
                                    }
                                    if (sentences.length === 1) {
                                        break;
                                    }
                                    sentences.splice(i, 1);
                                }
                                return limitString(AC.generation.workpiece.entry, 2000);
                            })(),
                            description: AC.generation.workpiece.description,
                        }), newCardIndex());
                        AC.generation.cooldown = AC.config.addCardCooldown;
                        AC.generation.completed = 0;
                        AC.generation.permitted = 34;
                        AC.generation.workpiece = O.f({});
                        clearTransientTitles();
                    }
                } else if (isPendingCompression()) {
                    const textClone = prettifyEmDashes(text);
                    AC.chronometer.amnesia = 0;
                    AC.compression.completed++;
                    const compressionsRemaining = (function () {
                        const newMemory = (textClone
                            // Remove some dumb stuff
                            .replace(/^[\s\S]*:/g, "")
                            .replace(/[\*_~#><@\[\]{}`\\]/g, " ")
                            // Remove bullets
                            .trim().replace(/^-+\s*/, "").replace(/\s*-+$/, "").replace(/\s*-\s+/g, " ")
                            // Condense consecutive whitespace
                            .replace(/\s+/g, " ")
                        );
                        if ((AC.compression.oldMemoryBank.length - 1) <= AC.compression.lastConstructIndex) {
                            // Terminate this compression cycle; the memory construct cannot grow any further
                            AC.compression.newMemoryBank.push(newMemory);
                            return 0;
                        } else if ((newMemory.trim() !== "") && (newMemory.length < buildMemoryConstruct().length)) {
                            // Good output, preserve and then proceed onwards
                            AC.compression.oldMemoryBank.splice(0, AC.compression.lastConstructIndex + 1);
                            AC.compression.lastConstructIndex = -1;
                            AC.compression.newMemoryBank.push(newMemory);
                        } else {
                            // Bad output, discard and then try again
                            AC.compression.responseEstimate += 200;
                        }
                        return boundInteger(1, joinMemoryBank(AC.compression.oldMemoryBank).length) / AC.compression.responseEstimate;
                    })();
                    postOutputMessage(textClone, AC.compression.completed / (AC.compression.completed + compressionsRemaining));
                    if (compressionsRemaining <= 0) {
                        const card = getAutoCard(AC.compression.titleKey);
                        if (card === null) {
                            notify(
                                "Failed to apply summarized memories for \"" + AC.compression.vanityTitle + "\" due to a missing or invalid AC card title header!"
                            );
                        } else {
                            const memoryHeaderMatch = card.description.match(
                                /(?<={\s*updates?\s*:[\s\S]*?,\s*limits?\s*:[\s\S]*?})[\s\S]*$/i
                            );
                            if (memoryHeaderMatch) {
                                // Update the card memory bank
                                notify("Memories for \"" + AC.compression.vanityTitle + "\" were successfully summarized!");
                                card.description = card.description.replace(memoryHeaderMatch[0], (
                                    "\n" + joinMemoryBank(AC.compression.newMemoryBank)
                                ));
                            } else {
                                notify(
                                    "Failed to apply summarizes memories for \"" + AC.compression.vanityTitle + "\" due to a missing or invalid AC card memory header!"
                                );
                            }
                        }
                        resetCompressionProperties();
                    } else if (AC.compression.completed === 1) {
                        notify("Summarizing excess memories for \"" + AC.compression.vanityTitle + "\"");
                    }
                    function joinMemoryBank(memoryBank) {
                        return cleanSpaces("- " + memoryBank.join("\n- "));
                    }
                } else if (permitOutput()) {
                    CODOMAIN.initialize(output);
                }
                concludeOutputBlock((function () {
                    if (AC.signal.swapControlCards) {
                        return getConfigureCardTemplate();
                    } else {
                        return null;
                    }
                })())
                function postOutputMessage(textClone, ratio) {
                    if (!permitOutput()) {
                        // Do nothing
                    } else if (0.5 < similarityScore(textClone, output)) {
                        // To improve Auto-Cards' compatability with other scripts, I only bother to replace the output text when the original and new output texts have a similarity score above a particular threshold. Otherwise, I may safely assume the output text has already been replaced by another script and thus skip this step.
                        CODOMAIN.initialize(
                            getPrecedingNewlines() + ">>> please select \"continue\" (" + Math.round(ratio * 100) + "%) <<<\n\n"
                        );
                    } else {
                        CODOMAIN.initialize(output);
                    }
                    return;
                }
                break;
            }
            default: {
                CODOMAIN.initialize(TEXT);
                break;
            }
        }
        // Get an individual story card reference via titleKey
        function getAutoCard(titleKey) {
            return Internal.getCard(card => card.entry.toLowerCase().startsWith("{title: " + titleKey + "}"));
        }
        function buildMemoryConstruct() {
            return (AC.compression.oldMemoryBank
                .slice(0, AC.compression.lastConstructIndex + 1)
                .join(" ")
            );
        }
        // Estimate the average AI response char count based on recent continue outputs
        function estimateResponseLength() {
            if (!Array.isArray(history) || (history.length === 0)) {
                return -1;
            }
            const charCounts = [];
            for (let i = 0; i < history.length; i++) {
                const action = readPastAction(i);
                if ((action.type === "continue") && !action.text.includes("<<<")) {
                    charCounts.push(action.text.length);
                }
            }
            if (charCounts.length < 7) {
                if (charCounts.length === 0) {
                    return -1;
                } else if (charCounts.length < 4) {
                    return boundInteger(350, charCounts[0]);
                }
                charCounts.splice(3);
            }
            return boundInteger(175, Math.floor(
                charCounts.reduce((sum, charCount) => {
                    return sum + charCount;
                }, 0) / charCounts.length
            ));
        }
        // Evalute how similar two strings are on the range [0, 1]
        function similarityScore(strA, strB) {
            if (strA === strB) {
                return 1;
            }
            // Normalize both strings for further comparison purposes
            const [cleanA, cleanB] = [strA, strB].map(str => limitString((str
                .replace(/[0-9\s]/g, " ")
                .trim()
                .replace(/  +/g, " ")
                .toLowerCase()
            ), 1400));
            if (cleanA === cleanB) {
                return 1;
            }
            // Compute the Levenshtein distance
            const [lengthA, lengthB] = [cleanA, cleanB].map(str => str.length);
            // I love DP ❤️ (dynamic programming)
            const dp = Array(lengthA + 1).fill(null).map(() => Array(lengthB + 1).fill(0));
            for (let i = 0; i <= lengthA; i++) {
                dp[i][0] = i;
            }
            for (let j = 0; j <= lengthB; j++) {
                dp[0][j] = j;
            }
            for (let i = 1; i <= lengthA; i++) {
                for (let j = 1; j <= lengthB; j++) {
                    if (cleanA[i - 1] === cleanB[j - 1]) {
                        // No cost if chars match, swipe right 😎
                        dp[i][j] = dp[i - 1][j - 1];
                    } else {
                        dp[i][j] = Math.min(
                            // Deletion
                            dp[i - 1][j] + 1,
                            // Insertion
                            dp[i][j - 1] + 1,
                            // Substitution
                            dp[i - 1][j - 1] + 1
                        );
                    }
                }
            }
            // Convert distance to similarity score (1 - (distance / maxLength))
            return 1 - (dp[lengthA][lengthB] / Math.max(lengthA, lengthB));
        }
        function splitBySentences(prose) {
            // Don't split sentences on honorifics or abbreviations such as "Mr.", "Mrs.", "etc."
            return (prose
                .replace(new RegExp("(?<=\\s|\"|\\(|—|\\[|'|{|^)(?:" + ([...Words.honorifics, ...Words.abbreviations]
                    .map(word => word.replace(".", ""))
                    .join("|")
                ) + ")\\.", "gi"), "$1%@%")
                .split(/(?<=[\.\?!:]["\)'\]}]?\s+)(?=[^\p{Ll}\s])/u)
                .map(sentence => sentence.replaceAll("%@%", "."))
            );
        }
        function formatEntry(partialEntry) {
            const cleanedEntry = cleanSpaces(partialEntry
                .replace(/^{title:[\s\S]*?}/, "")
                .replace(/[#><@*_~]/g, "")
                .trim()
            ).replace(/(?<=^|\n)-+\s*/g, "");
            if (cleanedEntry === "") {
                return "";
            } else {
                return cleanedEntry + " ";
            }
        }
        // Resolve malformed em dashes (common AI cliche)
        function prettifyEmDashes(str) {
            return str.replace(/(?<!^\s*)(?: - | ?– ?)(?!\s*$)/g, "—");
        }
        function getConfigureCardTemplate() {
            const names = getControlVariants().configure;
            return O.f({
                type: AC.config.defaultCardType,
                title: names.title,
                keys: names.keys,
                entry: getConfigureCardEntry(),
                description: getConfigureCardDescription()
            });
        }
        function getConfigureCardEntry() {
            return prose(
                "> Auto-Cards automatically creates and updates plot-relevant story cards while you play. You may configure the following settings by replacing \"false\" with \"true\" (and vice versa) or by adjusting numbers for the appropriate settings.",
                "> Disable Auto-Cards: false",
                "> Show detailed guide: false",
                "> Delete all automatic story cards: false",
                "> Reset all config settings and prompts: false",
                "> Pin this config card near the top: " + AC.config.pinConfigureCard,
                "> Minimum turns cooldown for new cards: " + AC.config.addCardCooldown,
                "> New cards use a bulleted list format: " + AC.config.bulletedListMode,
                "> Maximum entry length for new cards: " + AC.config.defaultEntryLimit,
                "> New cards perform memory updates: " + AC.config.defaultCardsDoMemoryUpdates,
                "> Card memory bank preferred length: " + AC.config.defaultMemoryLimit,
                "> Memory summary compression ratio: " + AC.config.memoryCompressionRatio,
                "> Exclude all-caps from title detection: " + AC.config.ignoreAllCapsTitles,
                "> Also detect titles from player inputs: " + AC.config.readFromInputs,
                "> Minimum turns age for title detection: " + AC.config.minimumLookBackDistance,
                "> Use Live Script Interface v2: " + (AC.config.LSIv2 !== null),
                "> Log debug data in a separate card: " + AC.config.showDebugData
            );
        }
        function getConfigureCardDescription() {
            return limitString(O.v(prose(
                Words.delimiter,
                "> AI prompt to generate new cards:",
                limitString(AC.config.generationPrompt.trim(), 4350).trimEnd(),
                Words.delimiter,
                "> AI prompt to summarize card memories:",
                limitString(AC.config.compressionPrompt.trim(), 4350).trimEnd(),
                Words.delimiter,
                "> Titles banned from new card creation:",
                AC.database.titles.banned.join(", ")
            )), 9850);
        }
    } else {
        // Auto-Cards is currently disabled
        switch (HOOK) {
            case "input": {
                if (/\/\s*A\s*C/i.test(text)) {
                    CODOMAIN.initialize(doPlayerCommands(text));
                } else {
                    CODOMAIN.initialize(TEXT);
                }
                break;
            }
            case "context": {
                // AutoCards was called within the context modifier
                advanceChronometer();
                // Get or construct the "Edit to enable Auto-Cards" story card
                const enableCardTemplate = getEnableCardTemplate();
                const enableCard = getSingletonCard(true, enableCardTemplate);
                banTitle(enableCardTemplate.title);
                pinAndSortCards(enableCard);
                if (AC.signal.forceToggle) {
                    enableAutoCards();
                } else if (enableCard.entry !== enableCardTemplate.entry) {
                    if ((extractSettings(enableCard.entry)?.enableautocards === true) && (AC.signal.forceToggle !== false)) {
                        // Use optional chaining to check the existence of enableautocards before accessing its value
                        enableAutoCards();
                    } else {
                        // Repair the damaged card entry
                        enableCard.entry = enableCardTemplate.entry;
                    }
                }
                AC.signal.forceToggle = null;
                CODOMAIN.initialize(TEXT);
                function enableAutoCards() {
                    // Auto-Cards has been enabled
                    AC.config.doAC = true;
                    // Deconstruct the "Edit to enable Auto-Cards" story card
                    unbanTitle(enableCardTemplate.title);
                    eraseCard(enableCard);
                    // Signal the construction of "Configure Auto-Cards" during the next onOutput hook
                    AC.signal.swapControlCards = true;
                    // Post a success message
                    notify("Enabled! You may now edit the \"Configure Auto-Cards\" story card");
                    return;
                }
                break;
            }
            case "output": {
                // AutoCards was called within the output modifier
                promoteAmnesia();
                if (permitOutput()) {
                    CODOMAIN.initialize(TEXT);
                }
                concludeOutputBlock((function () {
                    if (AC.signal.swapControlCards) {
                        return getEnableCardTemplate();
                    } else {
                        return null;
                    }
                })());
                break;
            }
            default: {
                CODOMAIN.initialize(TEXT);
                break;
            }
        }
        function getEnableCardTemplate() {
            const names = getControlVariants().enable;
            return O.f({
                type: AC.config.defaultCardType,
                title: names.title,
                keys: names.keys,
                entry: prose(
                    "> Auto-Cards automatically creates and updates plot-relevant story cards while you play. To enable this system, simply edit the \"false\" below to say \"true\" instead!",
                    "> Enable Auto-Cards: false"),
                description: "Perform any Do/Say/Story/Continue action within your adventure to apply this change!"
            });
        }
    }
    function hoistConst() {
        return (class Const {
            // This helps me debug stuff uwu
            #constant;
            constructor(...args) {
                if (args.length !== 0) {
                    this.constructor.#throwError([[(args.length === 1), "Const cannot be instantiated with a parameter"], ["Const cannot be instantiated with parameters"]]);
                } else {
                    O.f(this);
                    return this;
                }
            }
            declare(...args) {
                if (args.length !== 0) {
                    this.constructor.#throwError([[(args.length === 1), "Instances of Const cannot be declared with a parameter"], ["Instances of Const cannot be declared with parameters"]]);
                } else if (this.#constant === undefined) {
                    this.#constant = null;
                    return this;
                } else if (this.#constant === null) {
                    this.constructor.#throwError("Instances of Const cannot be redeclared");
                } else {
                    this.constructor.#throwError("Instances of Const cannot be redeclared after initialization");
                }
            }
            initialize(...args) {
                if (args.length !== 1) {
                    this.constructor.#throwError([[(args.length === 0), "Instances of Const cannot be initialized without a parameter"], ["Instances of Const cannot be initialized with multiple parameters"]]);
                } else if (this.#constant === null) {
                    this.#constant = [args[0]];
                    return this;
                } else if (this.#constant === undefined) {
                    this.constructor.#throwError("Instances of Const cannot be initialized before declaration");
                } else {
                    this.constructor.#throwError("Instances of Const cannot be reinitialized");
                }
            }
            read(...args) {
                if (args.length !== 0) {
                    this.constructor.#throwError([[(args.length === 1), "Instances of Const cannot be read with a parameter"], ["Instances of Const cannot read with any parameters"]]);
                } else if (Array.isArray(this.#constant)) {
                    return this.#constant[0];
                } else if (this.#constant === null) {
                    this.constructor.#throwError("Despite prior declaration, instances of Const cannot be read before initialization");
                } else {
                    this.constructor.#throwError("Instances of Const cannot be read before initialization");
                }
            }
            // An error condition is paired with an error message [condition, message], call #throwError with an array of pairs to throw the message corresponding with the first true condition [[cndtn1, msg1], [cndtn2, msg2], [cndtn3, msg3], ...] The first conditionless array element always evaluates to true ('else')
            static #throwError(...args) {
                // Look, I thought I was going to use this more at the time okay
                const [conditionalMessagesTable] = args;
                const codomain = new Const().declare();
                const error = O.f(new Error((function () {
                    const codomain = new Const().declare();
                    if (Array.isArray(conditionalMessagesTable)) {
                        const chosenPair = conditionalMessagesTable.find(function (...args) {
                            const [pair] = args;
                            const codomain = new Const().declare();
                            if (Array.isArray(pair)) {
                                if ((pair.length === 1) && (typeof pair[0] === "string")) {
                                    codomain.initialize(true);
                                } else if (
                                    (pair.length === 2)
                                    && (typeof pair[0] === "boolean")
                                    && (typeof pair[1] === "string")
                                ) {
                                    codomain.initialize(pair[0]);
                                } else {
                                    Const.#throwError("Const.#throwError encountered an invalid array element of conditionalMessagesTable");
                                }
                            } else {
                                Const.#throwError("Const.#throwError encountered a non-array element within conditionalMessagesTable");
                            }
                            return codomain.read();
                        });
                        if (Array.isArray(chosenPair)) {
                            if (chosenPair.length === 1) {
                                codomain.initialize(chosenPair[0]);
                            } else {
                                codomain.initialize(chosenPair[1]);
                            }
                        } else {
                            codomain.initialize("Const.#throwError was not called with any true conditions");
                        }
                    } else if (typeof conditionalMessagesTable === "string") {
                        codomain.initialize(conditionalMessagesTable);
                    } else {
                        codomain.initialize("Const.#throwError could not parse the given argument");
                    }
                    return codomain.read();
                })()));
                if (error.stack) {
                    codomain.initialize(error.stack
                        .replace(/\(<isolated-vm>:/gi, "(")
                        .replace(/Error:|at\s*(?:#throwError|Const.(?:declare|initialize|read)|new\s*Const)\s*\(\d+:\d+\)/gi, "")
                        .replace(/AutoCards\s*\((\d+):(\d+)\)\s*at\s*<isolated-vm>:\d+:\d+\s*$/i, "AutoCards ($1:$2)")
                        .trim()
                        .replace(/\s+/g, " ")
                    );
                } else {
                    codomain.initialize(error.message);
                }
                throw codomain.read();
            }
        });
    }
    function hoistO() {
        return (class O {
            // Some Object class methods are annoyingly verbose for how often I use them 👿
            static f(obj) {
                return Object.freeze(obj);
            }
            static v(base) {
                return see(Words.copy) + base;
            }
            static s(obj) {
                return Object.seal(obj);
            }
        });
    }
    function hoistWords() {
        return (class Words {
            static #cache = {}; static {
                // Each word list is initialized only once before being cached!
                const wordListInitializers = {
                    // Special-cased honorifics which are excluded from titles and ignored during split-by-sentences operations
                    honorifics: () => [
                        "mr.", "ms.", "mrs.", "dr."
                    ],
                    // Other special-cased abbreviations used to reformat titles and split-by-sentences
                    abbreviations: () => [
                        "sr.", "jr.", "etc.", "st.", "ex.", "inc."
                    ],
                    // Lowercase minor connector words which may exist within titles
                    minor: () => [
                        "&", "the", "for", "of", "le", "la", "el"
                    ],
                    // Removed from shortened titles for improved memory detection and trigger keword assignments
                    peerage: () => [
                        "sir", "lord", "lady", "king", "queen", "majesty", "duke", "duchess", "noble", "royal", "emperor", "empress", "great", "prince", "princess", "count", "countess", "baron", "baroness", "archduke", "archduchess", "marquis", "marquess", "viscount", "viscountess", "consort", "grand", "sultan", "sheikh", "tsar", "tsarina", "czar", "czarina", "viceroy", "monarch", "regent", "imperial", "sovereign", "president", "prime", "minister", "nurse", "doctor", "saint", "general", "private", "commander", "captain", "lieutenant", "sergeant", "admiral", "marshal", "baronet", "emir", "chancellor", "archbishop", "bishop", "cardinal", "abbot", "abbess", "shah", "maharaja", "maharani", "councillor", "squire", "lordship", "ladyship", "monseigneur", "mayor", "princeps", "chief", "chef", "their", "my", "his", "him", "he'd", "her", "she", "she'd", "you", "your", "yours", "you'd", "you've", "you'll", "yourself", "mine", "myself", "highness", "excellency", "farmer", "sheriff", "officer", "detective", "investigator", "miss", "mister", "colonel", "professor", "teacher", "agent", "heir", "heiress", "master", "mistress", "headmaster", "headmistress", "principal", "papa", "mama", "mommy", "daddy", "mother", "father", "grandma", "grandpa", "aunt", "auntie", "aunty", "uncle", "cousin", "sister", "brother", "holy", "holiness", "almighty", "senator", "congressman"
                    ],
                    // Common named entities represent special-cased INVALID card titles. Because these concepts are already abundant within the AI's training data, generating story cards for any of these would be both annoying and superfluous. Therefore, Words.entities is accessed during banned titles initialization to prevent their appearance
                    entities: () => [
                        // Seasons
                        "spring", "summer", "autumn", "fall", "winter",
                        // Holidays
                        "halloween", "christmas", "thanksgiving", "easter", "hanukkah", "passover", "ramadan", "eid", "diwali", "new year", "new year eve", "valentine day", "oktoberfest",
                        // People terms
                        "mom", "dad", "child", "grandmother", "grandfather", "ladies", "gentlemen", "gentleman", "slave",
                        // Capitalizable pronoun thingys
                        "his", "him", "he'd", "her", "she", "she'd", "you", "your", "yours", "you'd", "you've", "you'll", "you're", "yourself", "mine", "myself", "this", "that",
                        // Religious figures & deities
                        "god", "jesus", "buddha", "allah", "christ",
                        // Religious texts & concepts
                        "bible", "holy bible", "qur'an", "quran", "hadith", "tafsir", "tanakh", "talmud", "torah", "vedas", "vatican", "paganism", "pagan",
                        // Religions & belief systems
                        "hindu", "hinduism", "christianity", "islam", "jew", "judaism", "taoism", "buddhist", "buddhism", "catholic", "baptist",
                        // Common locations
                        "earth", "moon", "sun", "new york city", "london", "paris", "tokyo", "beijing", "mumbai", "sydney", "berlin", "moscow", "los angeles", "san francisco", "chicago", "miami", "seattle", "vancouver", "toronto", "ottawa", "mexico city", "rio de janeiro", "cape town", "sao paulo", "bangkok", "delhi", "amsterdam", "seoul", "shanghai", "new delhi", "atlanta", "jerusalem", "africa", "north america", "south america", "central america", "asia", "north africa", "south africa", "boston", "rome", "america", "siberia", "new england", "manhattan", "bavaria", "catalonia", "greenland", "hong kong", "singapore",
                        // Countries & political entities
                        "china", "india", "japan", "germany", "france", "spain", "italy", "canada", "australia", "brazil", "south africa", "russia", "north korea", "south korea", "iran", "iraq", "syria", "saudi arabia", "afghanistan", "pakistan", "uk", "britain", "england", "scotland", "wales", "northern ireland", "usa", "united states", "united states of america", "mexico", "turkey", "greece", "portugal", "poland", "netherlands", "belgium", "sweden", "norway", "finland", "denmark",
                        // Organizations & unions
                        "united nations", "european union", "state", "nato", "nfl", "nba", "fbi", "cia", "harvard", "yale", "princeton", "ivy league", "little league", "nasa", "nsa", "noaa", "osha", "nascar", "daytona 500", "grand prix", "wwe", "mba", "superbowl",
                        // Currencies
                        "dollar", "euro", "pound", "yen", "rupee", "peso", "franc", "dinar", "bitcoin", "ethereum", "ruble", "won", "dirham",
                        // Landmarks
                        "sydney opera house", "eiffel tower", "statue of liberty", "big ben", "great wall of china", "taj mahal", "pyramids of giza", "grand canyon", "mount everest",
                        // Events
                        "world war i", "world war 1", "wwi", "wwii", "world war ii", "world war 2", "wwii", "ww2", "cold war", "brexit", "american revolution", "french revolution", "holocaust", "cuban missile crisis",
                        // Companies
                        "google", "microsoft", "apple", "amazon", "facebook", "tesla", "ibm", "intel", "samsung", "sony", "coca-cola", "nike", "ford", "chevy", "pontiac", "chrysler", "volkswagen", "lambo", "lamborghini", "ferrari", "pizza hut", "taco bell", "ai dungeon", "openai", "mcdonald", "mcdonalds", "kfc", "burger king", "disney",
                        // Nationalities & languages
                        "english", "french", "spanish", "german", "italian", "russian", "chinese", "japanese", "korean", "arabic", "portuguese", "hindi", "american", "canadian", "mexican", "brazilian", "indian", "australian", "egyptian", "greek", "swedish", "norwegian", "danish", "dutch", "turkish", "iranian", "ukraine", "asian", "british", "european", "polish", "thai", "vietnamese", "filipino", "malaysian", "indonesian", "finnish", "estonian", "latvian", "lithuanian", "czech", "slovak", "hungarian", "romanian", "bulgarian", "serbian", "croatian", "bosnian", "slovenian", "albanian", "georgian", "armenian", "azerbaijani", "kazakh", "uzbek", "mongolian", "hebrew", "persian", "pashto", "urdu", "bengali", "tamil", "telugu", "marathi", "gujarati", "swahili", "zulu", "xhosa", "african", "north african", "south african", "north american", "south american", "central american", "colombian", "argentinian", "chilean", "peruvian", "venezuelan", "ecuadorian", "bolivian", "paraguayan", "uruguayan", "cuban", "dominican", "arabian", "roman", "haitian", "puerto rican", "moroccan", "algerian", "tunisian", "saudi", "emirati", "qatarian", "bahraini", "omani", "yemeni", "syrian", "lebanese", "iraqi", "afghan", "pakistani", "sri lankan", "burmese", "laotian", "cambodian", "hawaiian", "victorian",
                        // Fantasy stuff
                        "elf", "elves", "elven", "dwarf", "dwarves", "dwarven", "human", "man", "men", "mankind", "humanity",
                        // IPs
                        "pokemon", "pokémon", "minecraft", "beetles", "band-aid", "bandaid", "band aid", "big mac", "gpt", "chatgpt", "gpt-2", "gpt-3", "gpt-4", "gpt-4o", "mixtral", "mistral", "linux", "windows", "mac", "happy meal", "disneyland", "disneyworld",
                        // US states
                        "alabama", "alaska", "arizona", "arkansas", "california", "colorado", "connecticut", "delaware", "florida", "georgia", "hawaii", "idaho", "illinois", "indiana", "iowa", "kansas", "kentucky", "louisiana", "maine", "massachusetts", "michigan", "minnesota", "mississippi", "missouri", "nebraska", "nevada", "new hampshire", "new jersey", "new mexico", "new york", "north carolina", "north dakota", "ohio", "oklahoma", "oregon", "pennsylvania", "rhode island", "south carolina", "south dakota", "tennessee", "texas", "utah", "vermont", "west virginia", "wisconsin", "wyoming",
                        // Canadian Provinces & Territories
                        "british columbia", "manitoba", "new brunswick", "labrador", "nova scotia", "ontario", "prince edward island", "quebec", "saskatchewan", "northwest territories", "nunavut", "yukon", "newfoundland",
                        // Australian States & Territories
                        "new south wales", "queensland", "south australia", "tasmania", "western australia", "australian capital territory",
                        // idk
                        "html", "javascript", "python", "java", "c++", "php", "bluetooth", "json", "sql", "word", "dna", "icbm", "npc", "usb", "rsvp", "omg", "brb", "lol", "rofl", "smh", "ttyl", "rubik", "adam", "t-shirt", "tshirt", "t shirt", "led", "leds", "laser", "lasers", "qna", "q&a", "vip", "human resource", "human resources", "llm", "llc", "ceo", "cfo", "coo", "office", "blt", "suv", "suvs", "ems", "emt", "cbt", "cpr", "ferris wheel", "toy", "pet", "plaything", "m o"
                    ],
                    // Unwanted values
                    undesirables: () => [
                        [343332, 451737, 323433, 377817], [436425, 356928, 363825, 444048], [323433, 428868, 310497, 413952], [350097, 66825, 436425, 413952, 406593, 444048], [316932, 330000, 436425, 392073], [444048, 356928, 323433], [451737, 444048, 363825], [330000, 310497, 392073, 399300]
                    ],
                    delimiter: () => (
                        "———————————————————————————"
                    ),
                    // Source code location
                    copy: () => [
                        126852, 33792, 211200, 384912, 336633, 310497, 436425, 336633, 33792, 459492, 363825, 436425, 363825, 444048, 33792, 392073, 483153, 33792, 139425, 175857, 33792, 152592, 451737, 399300, 350097, 336633, 406593, 399300, 33792, 413952, 428868, 406593, 343332, 363825, 384912, 336633, 33792, 135168, 190608, 336633, 467313, 330000, 190608, 336633, 310497, 356928, 33792, 310497, 399300, 330000, 33792, 428868, 336633, 310497, 330000, 33792, 392073, 483153, 33792, 316932, 363825, 406593, 33792, 343332, 406593, 428868, 33792, 436425, 363825, 392073, 413952, 384912, 336633, 33792, 363825, 399300, 436425, 444048, 428868, 451737, 323433, 444048, 363825, 406593, 399300, 436425, 33792, 406593, 399300, 33792, 310497, 330000, 330000, 363825, 399300, 350097, 33792, 139425, 451737, 444048, 406593, 66825, 148137, 310497, 428868, 330000, 436425, 33792, 444048, 406593, 33792, 483153, 406593, 451737, 428868, 33792, 436425, 323433, 336633, 399300, 310497, 428868, 363825, 406593, 436425, 35937, 33792, 3355672848, 139592360193, 3300, 3300, 356928, 444048, 444048, 413952, 436425, 111012, 72897, 72897, 413952, 384912, 310497, 483153, 69828, 310497, 363825, 330000, 451737, 399300, 350097, 336633, 406593, 399300, 69828, 323433, 406593, 392073, 72897, 413952, 428868, 406593, 343332, 363825, 384912, 336633, 72897, 190608, 336633, 467313, 330000, 190608, 336633, 310497, 356928, 3300, 3300, 126852, 33792, 139425, 451737, 444048, 406593, 66825, 148137, 310497, 428868, 330000, 436425, 33792, 459492, 79233, 69828, 76032, 69828, 76032, 33792, 363825, 436425, 33792, 310497, 399300, 33792, 406593, 413952, 336633, 399300, 66825, 436425, 406593, 451737, 428868, 323433, 336633, 33792, 436425, 323433, 428868, 363825, 413952, 444048, 33792, 343332, 406593, 428868, 33792, 139425, 175857, 33792, 152592, 451737, 399300, 350097, 336633, 406593, 399300, 33792, 392073, 310497, 330000, 336633, 33792, 316932, 483153, 33792, 190608, 336633, 467313, 330000, 190608, 336633, 310497, 356928, 69828, 33792, 261393, 406593, 451737, 33792, 356928, 310497, 459492, 336633, 33792, 392073, 483153, 33792, 343332, 451737, 384912, 384912, 33792, 413952, 336633, 428868, 392073, 363825, 436425, 436425, 363825, 406593, 399300, 33792, 444048, 406593, 33792, 451737, 436425, 336633, 33792, 139425, 451737, 444048, 406593, 66825, 148137, 310497, 428868, 330000, 436425, 33792, 467313, 363825, 444048, 356928, 363825, 399300, 33792, 483153, 406593, 451737, 428868, 33792, 413952, 336633, 428868, 436425, 406593, 399300, 310497, 384912, 33792, 406593, 428868, 33792, 413952, 451737, 316932, 384912, 363825, 436425, 356928, 336633, 330000, 33792, 436425, 323433, 336633, 399300, 310497, 428868, 363825, 406593, 436425, 35937, 3300, 126852, 33792, 261393, 406593, 451737, 50193, 428868, 336633, 33792, 310497, 384912, 436425, 406593, 33792, 467313, 336633, 384912, 323433, 406593, 392073, 336633, 33792, 444048, 406593, 33792, 336633, 330000, 363825, 444048, 33792, 444048, 356928, 336633, 33792, 139425, 175857, 33792, 413952, 428868, 406593, 392073, 413952, 444048, 436425, 33792, 310497, 399300, 330000, 33792, 444048, 363825, 444048, 384912, 336633, 33792, 336633, 475200, 323433, 384912, 451737, 436425, 363825, 406593, 399300, 436425, 33792, 413952, 428868, 406593, 459492, 363825, 330000, 336633, 330000, 33792, 316932, 336633, 384912, 406593, 467313, 69828, 33792, 175857, 33792, 436425, 363825, 399300, 323433, 336633, 428868, 336633, 384912, 483153, 33792, 356928, 406593, 413952, 336633, 33792, 483153, 406593, 451737, 33792, 336633, 399300, 370788, 406593, 483153, 33792, 483153, 406593, 451737, 428868, 33792, 310497, 330000, 459492, 336633, 399300, 444048, 451737, 428868, 336633, 436425, 35937, 33792, 101128769412, 106046468352, 3300
                    ],
                    // Card interface names reserved for use within LSIv2
                    reserved: () => ({
                        library: "Shared Library", input: "Input Modifier", context: "Context Modifier", output: "Output Modifier", guide: "LSIv2 Guide", state: "State Display", log: "Console Log"
                    }),
                    // Acceptable config settings which are coerced to true
                    trues: () => [
                        "true", "t", "yes", "y", "on"
                    ],
                    // Acceptable config settings which are coerced to false
                    falses: () => [
                        "false", "f", "no", "n", "off"
                    ],
                    guide: () => prose(
                        ">>> Detailed Guide:",
                        "Auto-Cards was made by LewdLeah ❤️",
                        "",
                        Words.delimiter,
                        "",
                        "💡 What is Auto-Cards?",
                        "Auto-Cards is a plug-and-play script for AI Dungeon that watches your story and automatically writes plot-relevant story cards during normal gameplay. A forgetful AI breaks my immersion, therefore my primary goal was to address the \"object permanence problem\" by extending story cards and memories with deeper automation. Auto-Cards builds a living reference of your adventure's world as you go. For your own convenience, all of this stuff is handled in the background. Though you're certainly welcome to customize various settings or use in-game commands for more precise control",
                        "",
                        Words.delimiter,
                        "",
                        " 📌 Main Features",
                        "- Detects named entities from your story and periodically writes new cards",
                        "- Smart long-term memory updates and summaries for important cards",
                        "- Fully customizable AI card generation and memory summarization prompts",
                        "- Optional in-game commands to manually direct the card generation process",
                        "- Free and open source for anyone to use within their own projects",
                        "- Compatible with other scripts and includes an external API",
                        "- Optional in-game scripting interface (LSIv2)",
                        "",
                        Words.delimiter,
                        "",
                        "⚙️ Config Settings",
                        "You may, at any time, fine-tune your settings in-game by editing their values within the config card's entry section. Simply swap true/false or tweak numbers where appropriate",
                        "",
                        "> Disable Auto-Cards:",
                        "Turns the whole system off if true",
                        "",
                        "> Show detailed guide:",
                        "If true, shows this player guide in-game",
                        "",
                        "> Delete all automatic story cards:",
                        "Removes every auto-card present in your adventure",
                        "",
                        "> Reset all config settings and prompts:",
                        "Restores all settings and prompts to their original default values",
                        "",
                        "> Pin this config card near the top:",
                        "Keeps the config card pinned high on your cards list",
                        "",
                        "> Minimum turns cooldown for new cards:",
                        "How many turns (minimum) to wait between generating new cards. Using 9999 will pause periodic card generation while still allowing card memory updates to continue",
                        "",
                        "> New cards use a bulleted list format:",
                        "If true, new entries will use bullet points instead of pure prose",
                        "",
                        "> Maximum entry length for new cards:",
                        "Caps how long newly generated card entries can be (in characters)",
                        "",
                        "> New cards perform memory updates:",
                        "If true, new cards will automatically experience memory updates over time",
                        "",
                        "> Card memory bank preferred length:",
                        "Character count threshold before card memories are summarized to save space",
                        "",
                        "> Memory summary compression ratio:",
                        "Controls how much to compress when summarizing long card memory banks",
                        "(ratio = 10 * old / new ... such that 25 -> 2.5x shorter)",
                        "",
                        "> Exclude all-caps from title detection:",
                        "Prevents all-caps words like \"RUN\" from being parsed as viable titles",
                        "",
                        "> Also detect titles from player inputs:",
                        "Allows your typed Do/Say/Story action inputs to help suggest new card topics. Set to false if you have bad grammar, or if you're German (due to idiosyncratic noun capitalization habits)",
                        "",
                        "> Minimum turns age for title detection:",
                        "How many actions back the script looks when parsing recent titles from your story",
                        "",
                        "> Use Live Script Interface v2:",
                        "Enables LSIv2 for extra scripting magic and advanced control via arbitrary code execution",
                        "",
                        "> Log debug data in a separate card:",
                        "Shows a debug card if set to true",
                        "",
                        Words.delimiter,
                        "",
                        "✏️ AI Prompts",
                        "You may specify how the AI handles story card processes by editing either of these two prompts within the config card's notes section",
                        "",
                        "> AI prompt to generate new cards:",
                        "Used when Auto-Cards writes a new card entry. It tells the AI to focus on important plot stuff, avoid fluff, and write in a consistent, polished style. I like to add some personal preferences here when playing my own adventures. \"%{title}\" and \"%{entry}\" are dynamic placeholders for their namesakes",
                        "",
                        "> AI prompt to summarize card memories:",
                        "Summarizes older details within card memory banks to keep everything concise and neat over the long-run. Maintains only the most important details, written in the past tense. \"%{title}\" and \"%{memory}\" are dynamic placeholders for their namesakes",
                        "",
                        Words.delimiter,
                        "",
                        "⛔ Banned Titles List",
                        "This list prevents new cards from being created for super generic or unhelpful titles such as North, Tuesday, or December. You may edit these at the bottom of the config card's notes section. Capitalization and plural/singular forms are handled for you, so no worries about that",
                        "",
                        "> Titles banned from automatic new card generation:",
                        "North, East, South, West, and so on...",
                        "",
                        Words.delimiter,
                        "",
                        "🔑 In-Game Commands (/ac)",
                        "Use these commands to manually interact with Auto-Cards, simply type them into a Do/Say/Story input action",
                        "",
                        "/ac",
                        "Sets your actual cooldown to 0 and immediately attempts to generate a new card for the most relevant unused title from your story (if one exists)",
                        "",
                        "/ac Your Title Goes Here",
                        "Will immediately begin generating a new story card with the given title",
                        "Example use: \"/ac Leah\"",
                        "",
                        "/ac Your Title Goes Here / Your extra prompt details go here",
                        "Similar to the previous case, but with additional context to include with the card generation prompt",
                        "Example use: \"/ac Leah / Focus on Leah's works of artifice and ingenuity\"",
                        "",
                        "/ac Your Title Goes Here / Your extra prompt details go here / Your starter entry goes here",
                        "Again, similar to the previous case, but with an initial card entry for the generator to build upon",
                        "Example use: \"/ac Leah / Focus on Leah's works of artifice and ingenuity / You are a woman named Leah.\"",
                        "",
                        "/ac redo Your Title Goes Here",
                        "Rewrites your chosen story card, using the old card entry, memory bank, and story context for inspiration. Useful for recreating cards after important character development has occurred",
                        "Example use: \"/ac redo Leah\"",
                        "",
                        "/ac redo Your Title Goes Here / New info goes here",
                        "Similar to the previous case, but with additional info provided to guide the rewrite according to your additional specifications",
                        "Example use: \"/ac redo Leah / Leah recently achieved immortality\"",
                        "",
                        "/ac redo all",
                        "Recreates every single auto-card in your adventure. I must warn you though: This is very risky",
                        "",
                        "Extra Info:",
                        "- Invalid titles will fail. It's a technical limitation, sorry 🤷‍♀️",
                        "- Titles must be unique, unless you're attempting to use \"/ac redo\" for an existing card",
                        "- You may submit multiple commands using a single input to queue up a chained sequence of requests",
                        "- Capitalization doesn't matter, titles will be reformatted regardless",
                        "",
                        Words.delimiter,
                        "",
                        "🔧 External API Functions (quick summary)",
                        "These are mainly for other JavaScript programmers to use, so feel free to ignore this section if that doesn't apply to you. Anyway, here's what each one does in plain terms, though please do refer to my source code for the full documentation",
                        "",
                        "AutoCards().API.postponeEvents();",
                        "Pauses Auto-Cards activity for n many turns",
                        "",
                        "AutoCards().API.emergencyHalt();",
                        "Emergency stop or resume",
                        "",
                        "AutoCards().API.suppressMessages();",
                        "Hides Auto-Cards toasts by preventing assignment to state.message",
                        "",
                        "AutoCards().API.debugLog();",
                        "Writes to the debug log card",
                        "",
                        "AutoCards().API.toggle();",
                        "Turns Auto-Cards on/off",
                        "",
                        "AutoCards().API.generateCard();",
                        "Initiates AI generation of the requested card",
                        "",
                        "AutoCards().API.redoCard();",
                        "Regenerates an existing card",
                        "",
                        "AutoCards().API.setCardAsAuto();",
                        "Flags or unflags a card as automatic",
                        "",
                        "AutoCards().API.addCardMemory();",
                        "Adds a memory to a specific card",
                        "",
                        "AutoCards().API.eraseAllAutoCards();",
                        "Deletes all auto-cards",
                        "",
                        "AutoCards().API.getUsedTitles();",
                        "Lists all current card titles and keys",
                        "",
                        "AutoCards().API.getBannedTitles();",
                        "Shows your current banned titles list",
                        "",
                        "AutoCards().API.setBannedTitles();",
                        "Replaces the banned titles list with a new list",
                        "",
                        "AutoCards().API.buildCard();",
                        "Makes a new card from scratch, using exact parameters",
                        "",
                        "AutoCards().API.getCard();",
                        "Finds cards that match a filter",
                        "",
                        "AutoCards().API.eraseCard();",
                        "Deletes cards matching a filter",
                        "",
                        "These API functions also work from within the LSIv2 scope, by the way",
                        "",
                        Words.delimiter,
                        "",
                        "❤️ Special Thanks",
                        "This project flourished due to the incredible help, feedback, and encouragement from the AI Dungeon community. Your ideas, bug reports, testing, and support made Auto-Cards smarter, faster, and more fun for all. Please refer to my source code to learn more about everyone's specific contributions",
                        "",
                        "AHotHamster22, BinKompliziert, Boo, bottledfox, Bruno, Burnout, bweni, DebaczX, Dirty Kurtis, Dragranis, effortlyss, Hawk, Idle Confusion, ImprezA, Kat-Oli, KryptykAngel, Mad19pumpkin, Magic, Mirox80, Nathaniel Wyvern, NobodyIsUgly, OnyxFlame, Purplejump, Randy Viosca, RustyPawz, sinner, Sleepy pink, Vutinberg, Wilmar, Yi1i1i",
                        "",
                        Words.delimiter,
                        "",
                        "🎴 Random Tips",
                        "- The default setup works great out of the box, just play normally and watch your world build itself",
                        "- Enable AI Dungeon's built-in memory system for the best results",
                        "- Gameplay -> AI Models -> Memory System -> Memory Bank -> Toggle-ON to enable",
                        "- \"t\" and \"f\" are valid shorthand for \"true\" and \"false\" inside the config card",
                        "- If Auto-Cards goes overboard with new cards, you can pause it by setting the cooldown config to 9999",
                        "- Write \"{title:}\" anywhere within a regular story card's entry to transform it into an automatic card",
                        "- Feel free to import/export entire story card decks at any time",
                        "- Please copy my source code from here: https://play.aidungeon.com/profile/LewdLeah",
                        "",
                        Words.delimiter,
                        "",
                        "Happy adventuring! ❤️",
                        "Please erase before continuing! <<<"
                    )
                };
                for (const wordList in wordListInitializers) {
                    // Define a lazy getter for every word list
                    Object.defineProperty(Words, wordList, {
                        configurable: false,
                        enumerable: true,
                        get() {
                            // If not already in cache, initialize and store the word list
                            if (!(wordList in Words.#cache)) {
                                Words.#cache[wordList] = O.f(wordListInitializers[wordList]());
                            }
                            return Words.#cache[wordList];
                        }
                    });
                }
            }
        });
    }
    function hoistStringsHashed() {
        return (class StringsHashed {
            // Used for information-dense past memory recognition
            // Strings are converted to (reasonably) unique hashcodes for efficient existence checking
            static #defaultSize = 65536;
            #size;
            #store;
            constructor(size = StringsHashed.#defaultSize) {
                this.#size = size;
                this.#store = new Set();
                return this;
            }
            static deserialize(serialized, size = StringsHashed.#defaultSize) {
                const stringsHashed = new StringsHashed(size);
                stringsHashed.#store = new Set(serialized.split(","));
                return stringsHashed;
            }
            serialize() {
                return Array.from(this.#store).join(",");
            }
            has(str) {
                return this.#store.has(this.#hash(str));
            }
            add(str) {
                this.#store.add(this.#hash(str));
                return this;
            }
            remove(str) {
                this.#store.delete(this.#hash(str));
                return this;
            }
            size() {
                return this.#store.size;
            }
            latest(keepLatestCardinality) {
                if (this.#store.size <= keepLatestCardinality) {
                    return this;
                }
                const excess = this.#store.size - keepLatestCardinality;
                const iterator = this.#store.values();
                for (let i = 0; i < excess; i++) {
                    // The oldest hashcodes are removed first (insertion order matters!)
                    this.#store.delete(iterator.next().value);
                }
                return this;
            }
            #hash(str) {
                let hash = 0;
                for (let i = 0; i < str.length; i++) {
                    hash = ((31 * hash) + str.charCodeAt(i)) % this.#size;
                }
                return hash.toString(36);
            }
        });
    }
    function hoistInternal() {
        return (class Internal {
            // Some exported API functions are internally reused by AutoCards
            // Recursively calling AutoCards().API is computationally wasteful
            // AutoCards uses this collection of static methods as an internal proxy
            static generateCard(request, predefinedPair = ["", ""]) {
                // Method call guide:
                // Internal.generateCard({
                //     // All properties except 'title' are optional
                //     type: "card type, defaults to 'class' for ease of filtering",
                //     title: "card title",
                //     keysStart: "preexisting card triggers",
                //     entryStart: "preexisting card entry",
                //     entryPrompt: "prompt the AI will use to complete this entry",
                //     entryPromptDetails: "extra details to include with this card's prompt",
                //     entryLimit: 750, // target character count for the generated entry
                //     description: "card notes",
                //     memoryStart: "preexisting card memory",
                //     memoryUpdates: true, // card updates when new relevant memories are formed
                //     memoryLimit: 2750, // max characters before the card memory is compressed
                // });
                const titleKeyPair = formatTitle((request.title ?? "").toString());
                const title = predefinedPair[0] || titleKeyPair.newTitle;
                if (
                    (title === "")
                    || (("title" in AC.generation.workpiece) && (title === AC.generation.workpiece.title))
                    || (isAwaitingGeneration() && (AC.generation.pending.some(pendingWorkpiece => (
                        ("title" in pendingWorkpiece) && (title === pendingWorkpiece.title)
                    ))))
                ) {
                    logEvent("The title '" + request.title + "' is invalid or unavailable for card generation", true);
                    return false;
                }
                AC.generation.pending.push(O.s({
                    title: title,
                    type: limitString((request.type || AC.config.defaultCardType).toString().trim(), 100),
                    keys: predefinedPair[1] || buildKeys((request.keysStart ?? "").toString(), titleKeyPair.newKey),
                    entry: limitString("{title: " + title + "}" + cleanSpaces((function () {
                        const entry = (request.entryStart ?? "").toString().trim();
                        if (entry === "") {
                            return "";
                        } else {
                            return ("\n" + entry + (function () {
                                if (/[a-zA-Z]$/.test(entry)) {
                                    return ".";
                                } else {
                                    return "";
                                }
                            })() + " ");
                        }
                    })()), 2000),
                    description: limitString((
                        (function () {
                            const description = limitString((request.description ?? "").toString().trim(), 9900);
                            if (description === "") {
                                return "";
                            } else {
                                return description + "\n\n";
                            }
                        })() + "Auto-Cards will contextualize these memories:\n{updates: " + (function () {
                            if (typeof request.memoryUpdates === "boolean") {
                                return request.memoryUpdates;
                            } else {
                                return AC.config.defaultCardsDoMemoryUpdates;
                            }
                        })() + ", limit: " + validateMemoryLimit(
                            parseInt((request.memoryLimit || AC.config.defaultMemoryLimit), 10)
                        ) + "}" + (function () {
                            const cardMemoryBank = cleanSpaces((request.memoryStart ?? "").toString().trim());
                            if (cardMemoryBank === "") {
                                return "";
                            } else {
                                return "\n" + cardMemoryBank.split("\n").map(memory => addBullet(memory)).join("\n");
                            }
                        })()
                    ), 10000),
                    prompt: (function () {
                        let prompt = insertTitle((
                            (request.entryPrompt ?? "").toString().trim() || AC.config.generationPrompt.trim()
                        ), title);
                        let promptDetails = insertTitle((
                            cleanSpaces((request.entryPromptDetails ?? "").toString().trim())
                        ), title);
                        if (promptDetails !== "") {
                            const spacesPrecedingTerminalEntryPlaceholder = (function () {
                                const terminalEntryPlaceholderPattern = /(?:[%\$]+\s*|[%\$]*){+\s*entry\s*}+$/i;
                                if (terminalEntryPlaceholderPattern.test(prompt)) {
                                    prompt = prompt.replace(terminalEntryPlaceholderPattern, "");
                                    const trailingSpaces = prompt.match(/(\s+)$/);
                                    if (trailingSpaces) {
                                        prompt = prompt.trimEnd();
                                        return trailingSpaces[1];
                                    } else {
                                        return "\n\n";
                                    }
                                } else {
                                    return "";
                                }
                            })();
                            switch (prompt[prompt.length - 1]) {
                                case "]": { encapsulateBothPrompts("[", true, "]"); break; }
                                case ">": { encapsulateBothPrompts(null, false, ">"); break; }
                                case "}": { encapsulateBothPrompts("{", true, "}"); break; }
                                case ")": { encapsulateBothPrompts("(", true, ")"); break; }
                                case "/": { encapsulateBothPrompts("/", true, "/"); break; }
                                case "#": { encapsulateBothPrompts("#", true, "#"); break; }
                                case "-": { encapsulateBothPrompts(null, false, "-"); break; }
                                case ":": { encapsulateBothPrompts(":", true, ":"); break; }
                                case "<": { encapsulateBothPrompts(">", true, "<"); break; }
                            };
                            if (promptDetails.includes("\n")) {
                                const lines = promptDetails.split("\n");
                                for (let i = 0; i < lines.length; i++) {
                                    lines[i] = addBullet(lines[i].trim());
                                }
                                promptDetails = lines.join("\n");
                            } else {
                                promptDetails = addBullet(promptDetails);
                            }
                            prompt += "\n" + promptDetails + (function () {
                                if (spacesPrecedingTerminalEntryPlaceholder !== "") {
                                    // Prompt previously contained a terminal %{entry} placeholder, re-append it
                                    return spacesPrecedingTerminalEntryPlaceholder + "%{entry}";
                                }
                                return "";
                            })();
                            function encapsulateBothPrompts(leftSymbol, slicesAtMiddle, rightSymbol) {
                                if (slicesAtMiddle) {
                                    prompt = prompt.slice(0, -1).trim();
                                    if (promptDetails.startsWith(leftSymbol)) {
                                        promptDetails = promptDetails.slice(1).trim();
                                    }
                                }
                                if (!promptDetails.endsWith(rightSymbol)) {
                                    promptDetails += rightSymbol;
                                }
                                return;
                            }
                        }
                        return limitString(prompt, Math.floor(0.8 * AC.signal.maxChars));
                    })(),
                    limit: validateEntryLimit(parseInt((request.entryLimit || AC.config.defaultEntryLimit), 10))
                }));
                notify("Generating card for \"" + title + "\"");
                function addBullet(str) {
                    return "- " + str.replace(/^-+\s*/, "");
                }
                return true;
            }
            static redoCard(request, useOldInfo, newInfo) {
                const card = getIntendedCard(request.title)[0];
                const oldCard = O.f({ ...card });
                if (!eraseCard(card)) {
                    return false;
                } else if (newInfo !== "") {
                    request.entryPromptDetails = (request.entryPromptDetails ?? "").toString() + "\n" + newInfo;
                }
                O.f(request);
                Internal.getUsedTitles(true);
                if (!Internal.generateCard(request) && !Internal.generateCard(request, [
                    (oldCard.entry.match(/^{title: ([\s\S]*?)}/)?.[1] || request.title.replace(/\w\S*/g, word => (
                        word[0].toUpperCase() + word.slice(1).toLowerCase()
                    ))), oldCard.keys
                ])) {
                    constructCard(oldCard, newCardIndex());
                    Internal.getUsedTitles(true);
                    return false;
                } else if (!useOldInfo) {
                    return true;
                }
                AC.generation.pending[AC.generation.pending.length - 1].prompt = ((
                    removeAutoProps(oldCard.entry) + "\n\n" +
                    removeAutoProps(isolateNotesAndMemories(oldCard.description)[1])
                ).trimEnd() + "\n\n" + AC.generation.pending[AC.generation.pending.length - 1].prompt).trim();
                return true;
            }
            // Sometimes it's helpful to log information elsewhere during development
            // This log card is separate and distinct from the LSIv2 console log
            static debugLog(...args) {
                const debugCardName = "Debug Log";
                banTitle(debugCardName);
                const card = getSingletonCard(true, O.f({
                    type: AC.config.defaultCardType,
                    title: debugCardName,
                    keys: debugCardName,
                    entry: "The debug console log will print to the notes section below.",
                    description: Words.delimiter + "\nBEGIN DEBUG LOG"
                }));
                logToCard(card, ...args);
                return card;
            }
            static eraseAllAutoCards() {
                const cards = [];
                Internal.getUsedTitles(true);
                for (const card of storyCards) {
                    if (card.entry.startsWith("{title: ")) {
                        cards.push(card);
                    }
                }
                for (const card of cards) {
                    eraseCard(card);
                }
                auto.clear();
                forgetStuff();
                clearTransientTitles();
                AC.generation.pending = [];
                AC.database.memories.associations = {};
                if (AC.config.deleteAllAutoCards) {
                    AC.config.deleteAllAutoCards = null;
                }
                return cards.length;
            }
            static getUsedTitles(isExternal = false) {
                if (isExternal) {
                    bans.clear();
                    isBanned("", true);
                } else if (0 < AC.database.titles.used.length) {
                    return AC.database.titles.used;
                }
                // All unique used titles and keys encountered during this iteration
                const seen = new Set();
                auto.clear();
                clearTransientTitles();
                AC.database.titles.used = ["%@%"];
                for (const card of storyCards) {
                    // Perform some common-sense maintenance while we're here
                    card.type = card.type.trim();
                    card.title = card.title.trim();
                    // card.keys should be left as-is
                    card.entry = card.entry.trim();
                    card.description = card.description.trim();
                    if (isExternal) {
                        O.s(card);
                    } else if (!shouldProceed()) {
                        checkRemaining();
                        continue;
                    }
                    // An ideal auto-card's entry starts with "{title: Example of Greatness}" (example)
                    // An ideal auto-card's description contains "{updates: true, limit: 2750}" (example)
                    if (checkPlurals(denumberName(card.title.replace("\n", "")), t => isBanned(t))) {
                        checkRemaining();
                        continue;
                    } else if (!card.keys.includes(",")) {
                        const cleanKeys = denumberName(card.keys.trim());
                        if ((2 < cleanKeys.length) && checkPlurals(cleanKeys, t => isBanned(t))) {
                            checkRemaining();
                            continue;
                        }
                    }
                    // Detect and repair malformed auto-card properties in a fault-tolerant manner
                    const traits = [card.entry, card.description].map((str, i) => {
                        // Absolute abomination uwu
                        const hasUpdates = /updates?\s*:[\s\S]*?(?:(?:title|limit)s?\s*:|})/i.test(str);
                        const hasLimit = /limits?\s*:[\s\S]*?(?:(?:title|update)s?\s*:|})/i.test(str);
                        return [(function () {
                            if (hasUpdates || hasLimit) {
                                if (/titles?\s*:[\s\S]*?(?:(?:limit|update)s?\s*:|})/i.test(str)) {
                                    return 2;
                                }
                                return false;
                            } else if (/titles?\s*:[\s\S]*?}/i.test(str)) {
                                return 1;
                            } else if (!(
                                (i === 0)
                                && /{[\s\S]*?}/.test(str)
                                && (str.match(/{/g)?.length === 1)
                                && (str.match(/}/g)?.length === 1)
                            )) {
                                return false;
                            }
                            const badTitleHeaderMatch = str.match(/{([\s\S]*?)}/);
                            if (!badTitleHeaderMatch) {
                                return false;
                            }
                            const inferredTitle = badTitleHeaderMatch[1].split(",")[0].trim();
                            if (
                                (2 < inferredTitle.length)
                                && (inferredTitle.length <= 100)
                                && (badTitleHeaderMatch[0].length < str.length)
                            ) {
                                // A rare case where the title's existence should be inferred from the enclosing {curly brackets}
                                return inferredTitle;
                            }
                            return false;
                        })(), hasUpdates, hasLimit];
                    }).flat();
                    if (traits.every(trait => !trait)) {
                        // This card contains no auto-card traits, not even malformed ones
                        checkRemaining();
                        continue;
                    }
                    const [
                        hasEntryTitle,
                        hasEntryUpdates,
                        hasEntryLimit,
                        hasDescTitle,
                        hasDescUpdates,
                        hasDescLimit
                    ] = traits;
                    // Handle all story cards which belong to the Auto-Cards ecosystem
                    // May flag this damaged auto-card for later repairs
                    // May flag this duplicate auto-card for deformatting (will become a regular story card)
                    let repair = false;
                    let release = false;
                    const title = (function () {
                        let title = "";
                        if (typeof hasEntryTitle === "string") {
                            repair = true;
                            title = formatTitle(hasEntryTitle).newTitle;
                            if (hasDescTitle && bad()) {
                                title = parseTitle(false);
                            }
                        } else if (hasEntryTitle) {
                            title = parseTitle(true);
                            if (hasDescTitle) {
                                repair = true;
                                if (bad()) {
                                    title = parseTitle(false);
                                }
                            } else if (1 < card.entry.match(/titles?\s*:/gi)?.length) {
                                repair = true;
                            }
                        } else if (hasDescTitle) {
                            repair = true;
                            title = parseTitle(false);
                        }
                        if (bad()) {
                            repair = true;
                            title = formatTitle(card.title).newTitle;
                            if (bad()) {
                                release = true;
                            } else {
                                seen.add(title);
                                auto.add(title.toLowerCase());
                            }
                        } else {
                            seen.add(title);
                            auto.add(title.toLowerCase());
                            const titleHeader = "{title: " + title + "}";
                            if (!repair && !((card.entry === titleHeader) || card.entry.startsWith(titleHeader + "\n"))) {
                                repair = true;
                            }
                        }
                        function bad() {
                            return ((title === "") || checkPlurals(title, t => auto.has(t)));
                        }
                        function parseTitle(fromEntry) {
                            const [sourceType, sourceText] = (function () {
                                if (fromEntry) {
                                    return [hasEntryTitle, card.entry];
                                } else {
                                    return [hasDescTitle, card.description];
                                }
                            })()
                            switch (sourceType) {
                                case 1: {
                                    return formatTitle(isolateProperty(
                                        sourceText,
                                        /titles?\s*:[\s\S]*?}/i,
                                        /(?:titles?\s*:|})/gi
                                    )).newTitle;
                                }
                                case 2: {
                                    return formatTitle(isolateProperty(
                                        sourceText,
                                        /titles?\s*:[\s\S]*?(?:(?:limit|update)s?\s*:|})/i,
                                        /(?:(?:title|update|limit)s?\s*:|})/gi
                                    )).newTitle;
                                }
                                default: {
                                    return "";
                                }
                            }
                        }
                        return title;
                    })();
                    if (release) {
                        // Remove Auto-Cards properties from this incompatible story card
                        safeRemoveProps();
                        card.description = (card.description
                            .replace(/\s*Auto(?:-|\s*)Cards\s*will\s*contextualize\s*these\s*memories\s*:\s*/gi, "")
                            .replaceAll("%@%", "\n\n")
                            .trim()
                        );
                        seen.delete(title);
                        checkRemaining();
                        continue;
                    }
                    const memoryProperties = "{updates: " + (function () {
                        let updates = null;
                        if (hasDescUpdates) {
                            updates = parseUpdates(false);
                            if (hasEntryUpdates) {
                                repair = true;
                                if (bad()) {
                                    updates = parseUpdates(true);
                                }
                            } else if (1 < card.description.match(/updates?\s*:/gi)?.length) {
                                repair = true;
                            }
                        } else if (hasEntryUpdates) {
                            repair = true;
                            updates = parseUpdates(true);
                        }
                        if (bad()) {
                            repair = true;
                            updates = AC.config.defaultCardsDoMemoryUpdates;
                        }
                        function bad() {
                            return (updates === null);
                        }
                        function parseUpdates(fromEntry) {
                            const updatesText = (isolateProperty(
                                (function () {
                                    if (fromEntry) {
                                        return card.entry;
                                    } else {
                                        return card.description;
                                    }
                                })(),
                                /updates?\s*:[\s\S]*?(?:(?:title|limit)s?\s*:|})/i,
                                /(?:(?:title|update|limit)s?\s*:|})/gi
                            ).toLowerCase().replace(/[^a-z]/g, ""));
                            if (Words.trues.includes(updatesText)) {
                                return true;
                            } else if (Words.falses.includes(updatesText)) {
                                return false;
                            } else {
                                return null;
                            }
                        }
                        return updates;
                    })() + ", limit: " + (function () {
                        let limit = -1;
                        if (hasDescLimit) {
                            limit = parseLimit(false);
                            if (hasEntryLimit) {
                                repair = true;
                                if (bad()) {
                                    limit = parseLimit(true);
                                }
                            } else if (1 < card.description.match(/limits?\s*:/gi)?.length) {
                                repair = true;
                            }
                        } else if (hasEntryLimit) {
                            repair = true;
                            limit = parseLimit(true);
                        }
                        if (bad()) {
                            repair = true;
                            limit = AC.config.defaultMemoryLimit;
                        } else {
                            limit = validateMemoryLimit(limit);
                        }
                        function bad() {
                            return (limit === -1);
                        }
                        function parseLimit(fromEntry) {
                            const limitText = (isolateProperty(
                                (function () {
                                    if (fromEntry) {
                                        return card.entry;
                                    } else {
                                        return card.description;
                                    }
                                })(),
                                /limits?\s*:[\s\S]*?(?:(?:title|update)s?\s*:|})/i,
                                /(?:(?:title|update|limit)s?\s*:|})/gi
                            ).replace(/[^0-9]/g, ""));
                            if ((limitText === "")) {
                                return -1;
                            } else {
                                return parseInt(limitText, 10);
                            }
                        }
                        return limit.toString();
                    })() + "}";
                    if (!repair && (new RegExp("(?:^|\\n)" + memoryProperties + "(?:\\n|$)")).test(card.description)) {
                        // There are no serious repairs to perform
                        card.entry = cleanSpaces(card.entry);
                        const [notes, memories] = isolateNotesAndMemories(card.description);
                        const pureMemories = cleanSpaces(memories.replace(memoryProperties, "").trim());
                        rejoinDescription(notes, memoryProperties, pureMemories);
                        checkRemaining();
                        continue;
                    }
                    // Damage was detected, perform an adaptive repair on this auto-card's configurable properties
                    card.description = card.description.replaceAll("%@%", "\n\n");
                    safeRemoveProps();
                    card.entry = limitString(("{title: " + title + "}\n" + card.entry).trimEnd(), 2000);
                    const [left, right] = card.description.split("%@%");
                    rejoinDescription(left, memoryProperties, right);
                    checkRemaining();
                    function safeRemoveProps() {
                        if (typeof hasEntryTitle === "string") {
                            card.entry = card.entry.replace(/{[\s\S]*?}/g, "");
                        }
                        card.entry = removeAutoProps(card.entry);
                        const [notes, memories] = isolateNotesAndMemories(card.description);
                        card.description = notes + "%@%" + removeAutoProps(memories);
                        return;
                    }
                    function rejoinDescription(notes, memoryProperties, memories) {
                        card.description = limitString((notes + (function () {
                            if (notes === "") {
                                return "";
                            } else if (notes.endsWith("Auto-Cards will contextualize these memories:")) {
                                return "\n";
                            } else {
                                return "\n\n";
                            }
                        })() + memoryProperties + (function () {
                            if (memories === "") {
                                return "";
                            } else {
                                return "\n";
                            }
                        })() + memories), 10000);
                        return;
                    }
                    function isolateProperty(sourceText, propMatcher, propCleaner) {
                        return ((sourceText.match(propMatcher)?.[0] || "")
                            .replace(propCleaner, "")
                            .split(",")[0]
                            .trim()
                        );
                    }
                    // Observe literal card titles and keys
                    function checkRemaining() {
                        const literalTitles = [card.title, ...card.keys.split(",")];
                        for (let i = 0; i < literalTitles.length; i++) {
                            // The pre-format set inclusion check helps avoid superfluous formatTitle calls
                            literalTitles[i] = (literalTitles[i]
                                .replace(/["\.\?!;\(\):\[\]—{}]/g, " ")
                                .trim()
                                .replace(/\s+/g, " ")
                                .replace(/^'\s*/, "")
                                .replace(/\s*'$/, "")
                            );
                            if (seen.has(literalTitles[i])) {
                                continue;
                            }
                            literalTitles[i] = formatTitle(literalTitles[i]).newTitle;
                            if (literalTitles[i] !== "") {
                                seen.add(literalTitles[i]);
                            }
                        }
                        return;
                    }
                    function denumberName(name) {
                        if (2 < (name.match(/[^\d\s]/g) || []).length) {
                            // Important for identifying LSIv2 auxiliary code cards when banned
                            return name.replace(/\s*\d+$/, "");
                        } else {
                            return name;
                        }
                    }
                }
                clearTransientTitles();
                AC.database.titles.used = [...seen];
                return AC.database.titles.used;
            }
            static getBannedTitles() {
                // AC.database.titles.banned is an array, not a set; order matters
                return AC.database.titles.banned;
            }
            static setBannedTitles(newBans, isFinalAssignment) {
                AC.database.titles.banned = [];
                AC.database.titles.pendingBans = [];
                AC.database.titles.pendingUnbans = [];
                for (let i = newBans.length - 1; 0 <= i; i--) {
                    banTitle(newBans[i], isFinalAssignment);
                }
                return AC.database.titles.banned;
            }
            static getCard(predicate, getAll) {
                if (getAll) {
                    // Return an array of card references which satisfy the given condition
                    const collectedCards = [];
                    for (const card of storyCards) {
                        if (predicate(card)) {
                            O.s(card);
                            collectedCards.push(card);
                        }
                    }
                    return collectedCards;
                }
                // Return a reference to the first card which satisfies the given condition
                for (const card of storyCards) {
                    if (predicate(card)) {
                        return O.s(card);
                    }
                }
                return null;
            }
        });
    }
    function validateCooldown(cooldown) {
        return boundInteger(0, cooldown, 9999, 22);
    }
    function validateEntryLimit(entryLimit) {
        return boundInteger(200, entryLimit, 2000, 750);
    }
    function validateMemoryLimit(memoryLimit) {
        return boundInteger(1750, memoryLimit, 9900, 2750);
    }
    function validateMemCompRatio(memCompressRatio) {
        return boundInteger(20, memCompressRatio, 1250, 25);
    }
    function validateMinLookBackDist(minLookBackDist) {
        return boundInteger(2, minLookBackDist, 88, 7);
    }
    function getDefaultConfig() {
        function check(value, fallback = true, type = "boolean") {
            if (typeof value === type) {
                return value;
            } else {
                return fallback;
            }
        }
        return O.s({
            // Is Auto-Cards enabled?
            doAC: check(DEFAULT_DO_AC),
            // Delete all previously generated story cards?
            deleteAllAutoCards: null,
            // Pin the configuration interface story card near the top?
            pinConfigureCard: check(DEFAULT_PIN_CONFIGURE_CARD),
            // Minimum number of turns in between automatic card generation events?
            addCardCooldown: validateCooldown(DEFAULT_CARD_CREATION_COOLDOWN),
            // Use bulleted list mode for newly generated card entries?
            bulletedListMode: check(DEFAULT_USE_BULLETED_LIST_MODE),
            // Maximum allowed length for newly generated story card entries?
            defaultEntryLimit: validateEntryLimit(DEFAULT_GENERATED_ENTRY_LIMIT),
            // Do newly generated cards have memory updates enabled by default?
            defaultCardsDoMemoryUpdates: check(DEFAULT_NEW_CARDS_DO_MEMORY_UPDATES),
            // Default character limit before the card's memory bank is summarized?
            defaultMemoryLimit: validateMemoryLimit(DEFAULT_NEW_CARDS_MEMORY_LIMIT),
            // Approximately how much shorter should recently compressed memories be? (ratio = 10 * old / new)
            memoryCompressionRatio: validateMemCompRatio(DEFAULT_MEMORY_COMPRESSION_RATIO),
            // Ignore all-caps during title candidate detection?
            ignoreAllCapsTitles: check(DEFAULT_IGNORE_ALL_CAPS_TITLES),
            // Should player input actions (Do/Say/Story) be considered for future named entity detection?
            readFromInputs: check(DEFAULT_DETECT_TITLES_FROM_INPUTS),
            // How many (minimum) actions in the past does Auto-Cards look for named entities?
            minimumLookBackDistance: validateMinLookBackDist(DEFAULT_MINIMUM_LOOK_BACK_DISTANCE),
            // Is Live Script Interface v2 enabled?
            LSIv2: (function () {
                if (DEFAULT_DO_LSI_V2 === true) {
                    return true;
                } else {
                    // Intrepret "false" as null, both here and for later config card reads
                    return null;
                }
            })(),
            // Should the debug data card be visible?
            showDebugData: check(DEFAULT_SHOW_DEBUG_DATA, false),
            // How should the AI be prompted when generating new story card entries?
            generationPrompt: check(DEFAULT_CARD_GENERATION_PROMPT, prose(
                "-----",
                "",
                "<SYSTEM>",
                "# Stop the story and ignore previous instructions. Write a brief and coherent informational entry for %{title} following these instructions:",
                "- Write only third-person pure prose information about %{title} using complete sentences with correct punctuation",
                "- Avoid short-term temporary details or appearances, instead focus on plot-significant information",
                "- Prioritize story-relevant details about %{title} first to ensure seamless integration with the previous plot",
                "- Create new information based on the context and story direction",
                "- Mention %{title} in every sentence",
                "- Use semicolons if needed",
                "- Add additional details about %{title} beneath incomplete entries",
                "- Be concise and grounded",
                "- Imitate the story's writing style and infer the reader's preferences",
                "</SYSTEM>",
                "Continue the entry for %{title} below while avoiding repetition:",
                "%{entry}"
            ), "string"),
            // How should the AI be prompted when summarizing memories for a given story card?
            compressionPrompt: check(DEFAULT_CARD_MEMORY_COMPRESSION_PROMPT, prose(
                "-----",
                "",
                "<SYSTEM>",
                "# Stop the story and ignore previous instructions. Summarize and condense the given paragraph into a narrow and focused memory passage while following these guidelines:",
                "- Ensure the passage retains the core meaning and most essential details",
                "- Use the third-person perspective",
                "- Prioritize information-density, accuracy, and completeness",
                "- Remain brief and concise",
                "- Write firmly in the past tense",
                "- The paragraph below pertains to old events from far earlier in the story",
                "- Integrate %{title} naturally within the memory; however, only write about the events as they occurred",
                "- Only reference information present inside the paragraph itself, be specific",
                "</SYSTEM>",
                "Write a summarized old memory passage for %{title} based only on the following paragraph:",
                "\"\"\"",
                "%{memory}",
                "\"\"\"",
                "Summarize below:"
            ), "string"),
            // All cards constructed by AC will inherit this type by default
            defaultCardType: check(DEFAULT_CARD_TYPE, "class", "string")
        });
    }
    function getDefaultConfigBans() {
        if (typeof DEFAULT_BANNED_TITLES_LIST === "string") {
            return uniqueTitlesArray(DEFAULT_BANNED_TITLES_LIST.split(","));
        } else {
            return [
                "North", "East", "South", "West", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
            ];
        }
    }
    function uniqueTitlesArray(titles) {
        const existingTitles = new Set();
        return (titles
            .map(title => title.trim().replace(/\s+/g, " "))
            .filter(title => {
                if (title === "") {
                    return false;
                }
                const lowerTitle = title.toLowerCase();
                if (existingTitles.has(lowerTitle)) {
                    return false;
                } else {
                    existingTitles.add(lowerTitle);
                    return true;
                }
            })
        );
    }
    function boundInteger(lowerBound, value, upperBound, fallback) {
        if (!Number.isInteger(value)) {
            if (!Number.isInteger(fallback)) {
                throw new Error("Invalid arguments: value and fallback are not integers");
            }
            value = fallback;
        }
        if (Number.isInteger(lowerBound) && (value < lowerBound)) {
            if (Number.isInteger(upperBound) && (upperBound < lowerBound)) {
                throw new Error("Invalid arguments: The inequality (lowerBound <= upperBound) must be satisfied");
            }
            return lowerBound;
        } else if (Number.isInteger(upperBound) && (upperBound < value)) {
            return upperBound;
        } else {
            return value;
        }
    }
    function limitString(str, lengthLimit) {
        if (lengthLimit < str.length) {
            return str.slice(0, lengthLimit).trim();
        } else {
            return str;
        }
    }
    function cleanSpaces(unclean) {
        return (unclean
            .replace(/\s*\n\s*/g, "\n")
            .replace(/\t/g, " ")
            .replace(/  +/g, " ")
        );
    }
    function isolateNotesAndMemories(str) {
        const bisector = str.search(/\s*(?:{|(?:title|update|limit)s?\s*:)\s*/i);
        if (bisector === -1) {
            return [str, ""];
        } else {
            return [str.slice(0, bisector), str.slice(bisector)];
        }
    }
    function removeAutoProps(str) {
        return cleanSpaces(str
            .replace(/\s*{([\s\S]*?)}\s*/g, (bracedMatch, enclosedProperties) => {
                if (enclosedProperties.trim().length < 150) {
                    return "\n";
                } else {
                    return bracedMatch;
                }
            })
            .replace((
                /\s*(?:{|(?:title|update|limit)s?\s*:)(?:[\s\S]{0,150}?)(?=(?:title|update|limit)s?\s*:|})\s*/gi
            ), "\n")
            .replace(/\s*(?:{|(?:title|update|limit)s?\s*:|})\s*/gi, "\n")
            .trim()
        );
    }
    function insertTitle(prompt, title) {
        return prompt.replace((
            /(?:[%\$]+\s*|[%\$]*){+\s*(?:titles?|names?|characters?|class(?:es)?|races?|locations?|factions?)\s*}+/gi
        ), title);
    }
    function prose(...args) {
        return args.join("\n");
    }
    function buildKeys(keys, key) {
        key = key.trim().replace(/\s+/g, " ");
        const keyset = [];
        if (key === "") {
            return keys;
        } else if (keys.trim() !== "") {
            keyset.push(...keys.split(","));
            const lowerKey = key.toLowerCase();
            for (let i = keyset.length - 1; 0 <= i; i--) {
                const preKey = keyset[i].trim().replace(/\s+/g, " ").toLowerCase();
                if ((preKey === "") || preKey.includes(lowerKey)) {
                    keyset.splice(i, 1);
                }
            }
        }
        if (key.length < 6) {
            keyset.push(...[
                " " + key + " ", " " + key + "'", "\"" + key + " ", " " + key + ".", " " + key + "?", " " + key + "!", " " + key + ";", "'" + key + " ", "(" + key + " ", " " + key + ")", " " + key + ":", " " + key + "\"", "[" + key + " ", " " + key + "]", "—" + key + " ", " " + key + "—", "{" + key + " ", " " + key + "}"
            ]);
        } else if (key.length < 9) {
            keyset.push(...[
                key + " ", " " + key, key + "'", "\"" + key, key + ".", key + "?", key + "!", key + ";", "'" + key, "(" + key, key + ")", key + ":", key + "\"", "[" + key, key + "]", "—" + key, key + "—", "{" + key, key + "}"
            ]);
        } else {
            keyset.push(key);
        }
        keys = keyset[0] || key;
        let i = 1;
        while ((i < keyset.length) && ((keys.length + 1 + keyset[i].length) < 101)) {
            keys += "," + keyset[i];
            i++;
        }
        return keys;
    }
    // Returns the template-specified singleton card (or secondary varient) after:
    // 1) Erasing all inferior duplicates
    // 2) Repairing damaged titles and keys
    // 3) Constructing a new singleton card if it doesn't exist
    function getSingletonCard(allowConstruction, templateCard, secondaryCard) {
        let singletonCard = null;
        const excessCards = [];
        for (const card of storyCards) {
            O.s(card);
            if (singletonCard === null) {
                if ((card.title === templateCard.title) || (card.keys === templateCard.keys)) {
                    // The first potentially valid singleton card candidate to be found
                    singletonCard = card;
                }
            } else if (card.title === templateCard.title) {
                if (card.keys === templateCard.keys) {
                    excessCards.push(singletonCard);
                    singletonCard = card;
                } else {
                    eraseInferiorDuplicate();
                }
            } else if (card.keys === templateCard.keys) {
                eraseInferiorDuplicate();
            }
            function eraseInferiorDuplicate() {
                if ((singletonCard.title === templateCard.title) && (singletonCard.keys === templateCard.keys)) {
                    excessCards.push(card);
                } else {
                    excessCards.push(singletonCard);
                    singletonCard = card;
                }
                return;
            }
        }
        if (singletonCard === null) {
            if (secondaryCard) {
                // Fallback to a secondary card template
                singletonCard = getSingletonCard(false, secondaryCard);
            }
            // No singleton card candidate exists
            if (allowConstruction && (singletonCard === null)) {
                // Construct a new singleton card from the given template
                singletonCard = constructCard(templateCard);
            }
        } else {
            if (singletonCard.title !== templateCard.title) {
                // Repair any damage to the singleton card's title
                singletonCard.title = templateCard.title;
            } else if (singletonCard.keys !== templateCard.keys) {
                // Repair any damage to the singleton card's keys
                singletonCard.keys = templateCard.keys;
            }
            for (const card of excessCards) {
                // Erase all excess singleton card candidates
                eraseCard(card);
            }
            if (secondaryCard) {
                // A secondary card match cannot be allowed to persist
                eraseCard(getSingletonCard(false, secondaryCard));
            }
        }
        return singletonCard;
    }
    // Erases the given story card
    function eraseCard(badCard) {
        if (badCard === null) {
            return false;
        }
        badCard.title = "%@%";
        for (const [index, card] of storyCards.entries()) {
            if (card.title === "%@%") {
                removeStoryCard(index);
                return true;
            }
        }
        return false;
    }
    // Constructs a new story card from a standardized story card template object
    // {type: "", title: "", keys: "", entry: "", description: ""}
    // Returns a reference to the newly constructed card
    function constructCard(templateCard, insertionIndex = 0) {
        addStoryCard("%@%");
        for (const [index, card] of storyCards.entries()) {
            if (card.title !== "%@%") {
                continue;
            }
            card.type = templateCard.type;
            card.title = templateCard.title;
            card.keys = templateCard.keys;
            card.entry = templateCard.entry;
            card.description = templateCard.description;
            if (index !== insertionIndex) {
                // Remove from the current position and reinsert at the desired index
                storyCards.splice(index, 1);
                storyCards.splice(insertionIndex, 0, card);
            }
            return O.s(card);
        }
        return {};
    }
    function newCardIndex() {
        return +AC.config.pinConfigureCard;
    }
    function getIntendedCard(targetCard) {
        Internal.getUsedTitles(true);
        const titleKey = targetCard.trim().replace(/\s+/g, " ").toLowerCase();
        const autoCard = Internal.getCard(card => (card.entry
            .toLowerCase()
            .startsWith("{title: " + titleKey + "}")
        ));
        if (autoCard !== null) {
            return [autoCard, true, titleKey];
        }
        return [Internal.getCard(card => ((card.title
            .replace(/\s+/g, " ")
            .toLowerCase()
        ) === titleKey)), false, titleKey];
    }
    function doPlayerCommands(input) {
        let result = "";
        for (const command of (
            (function () {
                if (/^\n> [\s\S]*? says? "[\s\S]*?"\n$/.test(input)) {
                    return input.replace(/\s*"\n$/, "");
                } else {
                    return input.trimEnd();
                }
            })().split(/(?=\/\s*A\s*C)/i)
        )) {
            const prefixPattern = /^\/\s*A\s*C/i;
            if (!prefixPattern.test(command)) {
                continue;
            }
            const [requestTitle, requestDetails, requestEntry] = (command
                .replace(/(?:{\s*)|(?:\s*})/g, "")
                .replace(prefixPattern, "")
                .replace(/(?:^\s*\/*\s*)|(?:\s*\/*\s*$)/g, "")
                .split("/")
                .map(requestArg => requestArg.trim())
                .filter(requestArg => (requestArg !== ""))
            );
            if (!requestTitle) {
                // Request with no args
                AC.generation.cooldown = 0;
                result += "/AC -> Success!\n\n";
                logEvent("/AC");
            } else {
                const request = { title: requestTitle.replace(/\s*[\.\?!:]+$/, "") };
                const redo = (function () {
                    const redoPattern = /^(?:redo|retry|rewrite|remake)[\s\.\?!:,;"'—\)\]]+\s*/i;
                    if (redoPattern.test(request.title)) {
                        request.title = request.title.replace(redoPattern, "");
                        if (/^(?:all|every)(?:\s|\.|\?|!|:|,|;|"|'|—|\)|\]|$)/i.test(request.title)) {
                            return [];
                        } else {
                            return true;
                        }
                    } else {
                        return false;
                    }
                })();
                if (Array.isArray(redo)) {
                    // Redo all auto cards
                    Internal.getUsedTitles(true);
                    const titleMatchPattern = /^{title: ([\s\S]*?)}/;
                    redo.push(...Internal.getCard(card => (
                        titleMatchPattern.test(card.entry)
                        && /{updates: (?:true|false), limit: \d+}/.test(card.description)
                    ), true));
                    let count = 0;
                    for (const card of redo) {
                        const titleMatch = card.entry.match(titleMatchPattern);
                        if (titleMatch && Internal.redoCard(O.f({ title: titleMatch[1] }), true, "")) {
                            count++;
                        }
                    }
                    const parsed = "/AC redo all";
                    result += parsed + " -> ";
                    if (count === 0) {
                        result += "There were no valid auto-cards to redo";
                    } else {
                        result += "Success!";
                        if (1 < count) {
                            result += " Proceed to redo " + count + " cards";
                        }
                    }
                    logEvent(parsed);
                } else if (!requestDetails) {
                    // Request with only title
                    submitRequest("");
                } else if (!requestEntry || redo) {
                    // Request with title and details
                    request.entryPromptDetails = requestDetails;
                    submitRequest(" / {" + requestDetails + "}");
                } else {
                    // Request with title, details, and entry
                    request.entryPromptDetails = requestDetails;
                    request.entryStart = requestEntry;
                    submitRequest(" / {" + requestDetails + "} / {" + requestEntry + "}");
                }
                result += "\n\n";
                function submitRequest(extra) {
                    O.f(request);
                    const [type, success] = (function () {
                        if (redo) {
                            return [" redo", Internal.redoCard(request, true, "")];
                        } else {
                            Internal.getUsedTitles(true);
                            return ["", Internal.generateCard(request)];
                        }
                    })();
                    const left = "/AC" + type + " {";
                    const right = "}" + extra;
                    if (success) {
                        const parsed = left + AC.generation.pending[AC.generation.pending.length - 1].title + right;
                        result += parsed + " -> Success!";
                        logEvent(parsed);
                    } else {
                        const parsed = left + request.title + right;
                        result += parsed + " -> \"" + request.title + "\" is invalid or unavailable";
                        logEvent(parsed);
                    }
                    return;
                }
            }
            if (isPendingGeneration() || isAwaitingGeneration() || isPendingCompression()) {
                if (AC.config.doAC) {
                    AC.signal.outputReplacement = "";
                } else {
                    AC.signal.forceToggle = true;
                    AC.signal.outputReplacement = ">>> please select \"continue\" (0%) <<<";
                }
            } else if (AC.generation.cooldown === 0) {
                if (0 < AC.database.titles.candidates.length) {
                    if (AC.config.doAC) {
                        AC.signal.outputReplacement = "";
                    } else {
                        AC.signal.forceToggle = true;
                        AC.signal.outputReplacement = ">>> please select \"continue\" (0%) <<<";
                    }
                } else if (AC.config.doAC) {
                    result = result.trimEnd() + "\n";
                    AC.signal.outputReplacement = "\n";
                } else {
                    AC.signal.forceToggle = true;
                    AC.signal.outputReplacement = ">>> Auto-Cards has been enabled! <<<";
                }
            } else {
                result = result.trimEnd() + "\n";
                AC.signal.outputReplacement = "\n";
            }
        }
        return getPrecedingNewlines() + result;
    }
    function advanceChronometer() {
        const currentTurn = getTurn();
        if (Math.abs(history.length - currentTurn) < 2) {
            // The two measures are within ±1, thus history hasn't been truncated yet
            AC.chronometer.step = !(history.length < currentTurn);
        } else {
            // history has been truncated, fallback to a (slightly) worse step detection technique
            AC.chronometer.step = (AC.chronometer.turn < currentTurn);
        }
        AC.chronometer.turn = currentTurn;
        return;
    }
    function concludeEmergency() {
        promoteAmnesia();
        endTurn();
        AC.message.pending = [];
        AC.message.previous = getStateMessage();
        return;
    }
    function concludeOutputBlock(templateCard) {
        if (AC.config.deleteAllAutoCards !== null) {
            // A config-initiated event to delete all previously generated story cards is in progress
            if (AC.config.deleteAllAutoCards) {
                // Request in-game confirmation from the player before proceeding
                AC.config.deleteAllAutoCards = false;
                CODOMAIN.initialize(getPrecedingNewlines() + ">>> please submit the message \"CONFIRM DELETE\" using a Do, Say, or Story action to permanently delete all previously generated story cards <<<\n\n");
            } else {
                // Check for player confirmation
                const previousAction = readPastAction(0);
                if (isDoSayStory(previousAction.type) && /CONFIRM\s*DELETE/i.test(previousAction.text)) {
                    let successMessage = "Confirmation Success: ";
                    const numCardsErased = Internal.eraseAllAutoCards();
                    if (numCardsErased === 0) {
                        successMessage += "However, there were no previously generated story cards to delete!";
                    } else {
                        successMessage += numCardsErased + " generated story card";
                        if (numCardsErased === 1) {
                            successMessage += " was";
                        } else {
                            successMessage += "s were";
                        }
                        successMessage += " deleted";
                    }
                    notify(successMessage);
                } else {
                    notify("Confirmation Failure: No story cards were deleted");
                }
                AC.config.deleteAllAutoCards = null;
                CODOMAIN.initialize("\n");
            }
        } else if (AC.signal.outputReplacement !== "") {
            const output = AC.signal.outputReplacement.trim();
            if (output === "") {
                CODOMAIN.initialize("\n");
            } else {
                CODOMAIN.initialize(getPrecedingNewlines() + output + "\n\n");
            }
        }
        if (templateCard) {
            // Auto-Cards was enabled or disabled during the previous onContext hook
            // Construct the replacement control card onOutput
            banTitle(templateCard.title);
            getSingletonCard(true, templateCard);
            AC.signal.swapControlCards = false;
        }
        endTurn();
        if (AC.config.LSIv2 === null) {
            postMessages();
        }
        return;
    }
    function endTurn() {
        AC.database.titles.used = [];
        AC.signal.outputReplacement = "";
        [AC.database.titles.pendingBans, AC.database.titles.pendingUnbans].map(pending => decrementAll(pending));
        if (0 < AC.signal.overrideBans) {
            AC.signal.overrideBans--;
        }
        function decrementAll(pendingArray) {
            if (pendingArray.length === 0) {
                return;
            }
            for (let i = pendingArray.length - 1; 0 <= i; i--) {
                if (0 < pendingArray[i][1]) {
                    pendingArray[i][1]--;
                } else {
                    pendingArray.splice(i, 1);
                }
            }
            return;
        }
        return;
    }
    // Example usage: notify("Message text goes here");
    function notify(message) {
        if (typeof message === "string") {
            AC.message.pending.push(message);
            logEvent(message);
        } else if (Array.isArray(message)) {
            message.forEach(element => notify(element));
        } else if (message instanceof Set) {
            notify([...message]);
        } else {
            notify(message.toString());
        }
        return;
    }
    function logEvent(message, uncounted) {
        if (uncounted) {
            log("Auto-Cards event: " + message);
        } else {
            log("Auto-Cards event #" + (function () {
                try {
                    AC.message.event++;
                    return AC.message.event;
                } catch {
                    return 0;
                }
            })() + ": " + message.replace(/"/g, "'"));
        }
        return;
    }
    // Provide the story card object which you wish to log info within as the first argument
    // All remaining arguments represent anything you wish to log
    function logToCard(logCard, ...args) {
        // logEvent(args.map(arg => {
        //     if ((typeof arg === "object") && (arg !== null)) {
        //         return JSON.stringify(arg);
        //     } else {
        //         return String(arg);
        //     }
        // }).join(", "), true);
        if (logCard === null) {
            return;
        }
        let desc = logCard.description.trim();
        const turnDelimiter = Words.delimiter + "\nAction #" + getTurn() + ":\n";
        let header = turnDelimiter;
        if (!desc.startsWith(turnDelimiter)) {
            desc = turnDelimiter + desc;
        }
        const scopesTable = [
            ["input", "Input Modifier"],
            ["context", "Context Modifier"],
            ["output", "Output Modifier"],
            [null, "Shared Library"],
            [undefined, "External API"],
            [Symbol("default"), "Unknown Scope"]
        ];
        const callingScope = (function () {
            const pair = scopesTable.find(([condition]) => (condition === HOOK));
            if (pair) {
                return pair[1];
            } else {
                return scopesTable[scopesTable.length - 1][1];
            }
        })();
        const hookDelimiterLeft = callingScope + " @ ";
        if (desc.startsWith(turnDelimiter + hookDelimiterLeft)) {
            const hookDelimiterOld = desc.match(new RegExp((
                "^" + turnDelimiter + "(" + hookDelimiterLeft + "\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z:\n)"
            ).replaceAll("\n", "\\n")));
            if (hookDelimiterOld) {
                header += hookDelimiterOld[1];
            } else {
                const hookDelimiter = getNewHookDelimiter();
                desc = desc.replace(hookDelimiterLeft, hookDelimiter);
                header += hookDelimiter;
            }
        } else {
            if ((new RegExp("^" + turnDelimiter.replaceAll("\n", "\\n") + "(" + (scopesTable
                .map(pair => pair[1])
                .filter(scope => (scope !== callingScope))
                .join("|")
            ) + ") @ ")).test(desc)) {
                desc = desc.replace(turnDelimiter, turnDelimiter + "—————————\n");
            }
            const hookDelimiter = getNewHookDelimiter();
            desc = desc.replace(turnDelimiter, turnDelimiter + hookDelimiter);
            header += hookDelimiter;
        }
        const logDelimiter = (function () {
            let logDelimiter = "Log #";
            if (desc.startsWith(header + logDelimiter)) {
                desc = desc.replace(header, header + "———\n");
                const logCounter = desc.match(/Log #(\d+)/);
                if (logCounter) {
                    logDelimiter += (parseInt(logCounter[1], 10) + 1).toString();
                }
            } else {
                logDelimiter += "0";
            }
            return logDelimiter + ": ";
        })();
        logCard.description = limitString(desc.replace(header, header + logDelimiter + args.map(arg => {
            if ((typeof arg === "object") && (arg !== null)) {
                return stringifyObject(arg);
            } else {
                return String(arg);
            }
        }).join(",\n") + "\n").trim(), 999999);
        // The upper limit is actually closer to 3985621, but I think 1 million is reasonable enough as-is
        function getNewHookDelimiter() {
            return hookDelimiterLeft + (new Date().toISOString()) + ":\n";
        }
        return;
    }
    // Makes nested objects not look like cancer within interface cards
    function stringifyObject(obj) {
        const seen = new WeakSet();
        // Each indentation is 4 spaces
        return JSON.stringify(obj, (_key, value) => {
            if ((typeof value === "object") && (value !== null)) {
                if (seen.has(value)) {
                    return "[Circular]";
                }
                seen.add(value);
            }
            switch (typeof value) {
                case "function": {
                    return "[Function]";
                }
                case "undefined": {
                    return "[Undefined]";
                }
                case "symbol": {
                    return "[Symbol]";
                }
                default: {
                    return value;
                }
            }
        }, 4);
    }
    // Implement state.message toasts without interfering with the operation of other possible scripts
    function postMessages() {
        const preMessage = getStateMessage();
        if ((preMessage === AC.message.previous) && (AC.message.pending.length !== 0)) {
            // No other scripts are attempting to update state.message during this turn
            // One or more pending Auto-Cards messages exist
            if (!AC.message.suppress) {
                // Message suppression is off
                let newMessage = "Auto-Cards:\n";
                if (AC.message.pending.length === 1) {
                    newMessage += AC.message.pending[0];
                } else {
                    newMessage += AC.message.pending.map(
                        (messageLine, index) => ("#" + (index + 1) + ": " + messageLine)
                    ).join("\n");
                }
                if (preMessage === newMessage) {
                    // Introduce a minor variation to facilitate repetition of the previous message toast
                    newMessage = newMessage.replace("Auto-Cards:\n", "Auto-Cards: \n");
                }
                state.message = newMessage;
            }
            // Clear the pending messages queue after posting or suppressing messages
            AC.message.pending = [];
        }
        AC.message.previous = getStateMessage();
        return;
    }
    function getStateMessage() {
        return state.message ?? "";
    }
    function getPrecedingNewlines() {
        const previousAction = readPastAction(0);
        if (isDoSay(previousAction.type)) {
            return "";
        } else if (previousAction.text.endsWith("\n")) {
            if (previousAction.text.endsWith("\n\n")) {
                return "";
            } else {
                return "\n";
            }
        } else {
            return "\n\n";
        }
    }
    // Call with lookBack 0 to read the most recent action in history (or n many actions back)
    function readPastAction(lookBack) {
        const action = (function () {
            if (Array.isArray(history)) {
                return (history[(function () {
                    const index = history.length - 1 - Math.abs(lookBack);
                    if (index < 0) {
                        return 0;
                    } else {
                        return index;
                    }
                })()]);
            } else {
                return O.f({});
            }
        })();
        return O.f({
            text: action?.text ?? (action?.rawText ?? ""),
            type: action?.type ?? "unknown"
        });
    }
    // Forget ongoing card generation/compression after passing or postponing completion over many consecutive turns
    // Also decrement AC.chronometer.postpone regardless of retries or erases
    function promoteAmnesia() {
        // Decrement AC.chronometer.postpone in all cases
        if (0 < AC.chronometer.postpone) {
            AC.chronometer.postpone--;
        }
        if (!AC.chronometer.step) {
            // Skip known retry/erase turns
            return;
        }
        if (AC.chronometer.amnesia++ < boundInteger(16, (2 * AC.config.addCardCooldown), 64)) {
            return;
        }
        AC.generation.cooldown = validateCooldown(underQuarterInteger(AC.config.addCardCooldown));
        forgetStuff();
        AC.chronometer.amnesia = 0;
        return;
    }
    function forgetStuff() {
        AC.generation.completed = 0;
        AC.generation.permitted = 34;
        AC.generation.workpiece = O.f({});
        // AC.generation.pending is not forgotten
        resetCompressionProperties();
        return;
    }
    function resetCompressionProperties() {
        AC.compression.completed = 0;
        AC.compression.titleKey = "";
        AC.compression.vanityTitle = "";
        AC.compression.responseEstimate = 1400;
        AC.compression.lastConstructIndex = -1;
        AC.compression.oldMemoryBank = [];
        AC.compression.newMemoryBank = [];
        return;
    }
    function underQuarterInteger(someNumber) {
        return Math.floor(someNumber / 4);
    }
    function getTurn() {
        if (Number.isInteger(info?.actionCount)) {
            // "But Leah, surely info.actionCount will never be negative?"
            // You have no idea what nightmares I've seen...
            return Math.abs(info.actionCount);
        } else {
            return 0;
        }
    }
    // Constructs a JSON representation of various properties/settings pulled from raw text
    // Used to parse the "Configure Auto-Cards" and "Edit to enable Auto-Cards" control card entries
    function extractSettings(settingsText) {
        const settings = {};
        // Lowercase everything
        // Remove all non-alphanumeric characters (aside from ":" and ">")
        // Split into an array of strings delimited by the ">" character
        const settingLines = settingsText.toLowerCase().replace(/[^a-z0-9:>]+/g, "").split(">");
        for (const settingLine of settingLines) {
            // Each setting line is preceded by ">" and bisected by ":"
            const settingKeyValue = settingLine.split(":");
            if ((settingKeyValue.length !== 2) || settings.hasOwnProperty(settingKeyValue[0])) {
                // The bisection failed or this setting line's key already exists
                continue;
            }
            // Parse boolean and integer setting values
            if (Words.falses.includes(settingKeyValue[1])) {
                // This setting line's value is false
                settings[settingKeyValue[0]] = false;
            } else if (Words.trues.includes(settingKeyValue[1])) {
                // This setting line's value is true
                settings[settingKeyValue[0]] = true;
            } else if (/^\d+$/.test(settingKeyValue[1])) {
                // This setting line's value is an integer
                // Negative integers are parsed as being positive (because "-" characters were removed)
                settings[settingKeyValue[0]] = parseInt(settingKeyValue[1], 10);
            }
        }
        // Return the settings object for later analysis
        return settings;
    }
    // Ensure the given singleton card is pinned near the top of the player's list of story cards
    function pinAndSortCards(pinnedCard) {
        if (!storyCards || (storyCards.length < 2)) {
            return;
        }
        storyCards.sort((cardA, cardB) => {
            return readDate(cardB) - readDate(cardA);
        });
        if (!AC.config.pinConfigureCard) {
            return;
        }
        const index = storyCards.indexOf(pinnedCard);
        if (0 < index) {
            storyCards.splice(index, 1);
            storyCards.unshift(pinnedCard);
        }
        function readDate(card) {
            if (card && card.updatedAt) {
                const timestamp = Date.parse(card.updatedAt);
                if (!isNaN(timestamp)) {
                    return timestamp;
                }
            }
            return 0;
        }
        return;
    }
    function see(arr) {
        return String.fromCharCode(...arr.map(n => Math.sqrt(n / 33)));
    }
    function formatTitle(title) {
        title = title.trim();
        const failureCase = O.f({ newTitle: "", newKey: "" });
        if (short()) {
            // This is an abundantly called function, return as early as possible to ensure superior performance
            return failureCase;
        }
        title = (title
            // Begone!
            .replace(/[–。？！´“”؟،«»¿¡„“…§，、\*_~><\(\)\[\]{}#"`:!—;\.\?,\s\\]/g, " ")
            .replace(/[‘’]/g, "'").replace(/\s+'/g, " ")
            // Remove the words "I", "I'm", "I'd", "I'll", and "I've"
            .replace(/(?<=^|\s)(?:I|I'm|I'd|I'll|I've)(?=\s|$)/gi, "")
            // Remove "'s" only if not followed by a letter
            .replace(/'s(?![a-zA-Z])/g, "")
            // Replace "s'" with "s" only if preceded but not followed by a letter
            .replace(/(?<=[a-zA-Z])s'(?![a-zA-Z])/g, "s")
            // Remove apostrophes not between letters (preserve contractions like "don't")
            .replace(/(?<![a-zA-Z])'(?![a-zA-Z])/g, "")
            // Eliminate fake em dashes and terminal/leading dashes
            .replace(/\s-\s/g, " ")
            // Condense consecutive whitespace
            .trim().replace(/\s+/g, " ")
            // Remove a leading or trailing bullet
            .replace(/^-+\s*/, "").replace(/\s*-+$/, "")
        );
        if (short()) {
            return failureCase;
        }
        // Special-cased words
        const minorWordsJoin = Words.minor.join("|");
        const leadingMinorWordsKiller = new RegExp("^(?:" + minorWordsJoin + ")\\s", "i");
        const trailingMinorWordsKiller = new RegExp("\\s(?:" + minorWordsJoin + ")$", "i");
        // Ensure the title is not bounded by any outer minor words
        title = enforceBoundaryCondition(title);
        if (short()) {
            return failureCase;
        }
        // Ensure interior minor words are lowercase and excise all interior honorifics/abbreviations
        const honorAbbrevsKiller = new RegExp("(?:^|\\s|-|\\/)(?:" + (
            [...Words.honorifics, ...Words.abbreviations]
        ).map(word => word.replace(".", "")).join("|") + ")(?=\\s|-|\\/|$)", "gi");
        title = (title
            // Capitalize the first letter of each word
            .replace(/(?<=^|\s|-|\/)(?:\p{L})/gu, word => word.toUpperCase())
            // Lowercase minor words properly
            .replace(/(?<=^|\s|-|\/)(?:\p{L}+)(?=\s|-|\/|$)/gu, word => {
                const lowerWord = word.toLowerCase();
                if (Words.minor.includes(lowerWord)) {
                    return lowerWord;
                } else {
                    return word;
                }
            })
            // Remove interior honorifics/abbreviations
            .replace(honorAbbrevsKiller, "")
            .trim()
        );
        if (short()) {
            return failureCase;
        }
        let titleWords = title.split(" ");
        while ((2 < title.length) && (98 < title.length) && (1 < titleWords.length)) {
            titleWords.pop();
            title = titleWords.join(" ").trim();
            const unboundedLength = title.length;
            title = enforceBoundaryCondition(title);
            if (unboundedLength !== title.length) {
                titleWords = title.split(" ");
            }
        }
        if (isUsedOrBanned(title) || isNamed(title)) {
            return failureCase;
        }
        // Procedurally generated story card trigger keywords exclude certain words and patterns which are otherwise permitted in titles
        let key = title;
        const peerage = new Set(Words.peerage);
        if (titleWords.some(word => ((word === "the") || peerage.has(word.toLowerCase())))) {
            if (titleWords.length < 2) {
                return failureCase;
            }
            key = enforceBoundaryCondition(
                titleWords.filter(word => !peerage.has(word.toLowerCase())).join(" ")
            );
            if (key.includes(" the ")) {
                key = enforceBoundaryCondition(key.split(" the ")[0]);
            }
            if (isUsedOrBanned(key)) {
                return failureCase;
            }
        }
        function short() {
            return (title.length < 3);
        }
        function enforceBoundaryCondition(str) {
            while (leadingMinorWordsKiller.test(str)) {
                str = str.replace(/^\S+\s+/, "");
            }
            while (trailingMinorWordsKiller.test(str)) {
                str = str.replace(/\s+\S+$/, "");
            }
            return str;
        }
        return O.f({ newTitle: title, newKey: key });
    }
    // I really hate english grammar
    function checkPlurals(title, predicate) {
        function check(t) { return ((t.length < 3) || (100 < t.length) || predicate(t)); }
        const t = title.toLowerCase();
        if (check(t)) { return true; }
        // s>p : singular -> plural : p>s: plural -> singular
        switch (t[t.length - 1]) {
            // p>s : s -> _ : Birds -> Bird
            case "s": if (check(t.slice(0, -1))) { return true; }
            case "x":
            // s>p : s, x, z -> ses, xes, zes : Mantis -> Mantises
            case "z": if (check(t + "es")) { return true; }
                break;
            // s>p : o -> oes, os : Gecko -> Geckoes, Geckos
            case "o": if (check(t + "es") || check(t + "s")) { return true; }
                break;
            // p>s : i -> us : Cacti -> Cactus
            case "i": if (check(t.slice(0, -1) + "us")) { return true; }
            // s>p : i, y -> ies : Kitty -> Kitties
            case "y": if (check(t.slice(0, -1) + "ies")) { return true; }
                break;
            // s>p : f -> ves : Wolf -> Wolves
            case "f": if (check(t.slice(0, -1) + "ves")) { return true; }
            // s>p : !(s, x, z, i, y) -> +s : Turtle -> Turtles
            default: if (check(t + "s")) { return true; }
                break;
        } switch (t.slice(-2)) {
            // p>s : es -> _ : Foxes -> Fox
            case "es": if (check(t.slice(0, -2))) { return true; } else if (
                (t.endsWith("ies") && (
                    // p>s : ies -> y : Bunnies -> Bunny
                    check(t.slice(0, -3) + "y")
                    // p>s : ies -> i : Ravies -> Ravi
                    || check(t.slice(0, -2))
                    // p>s : es -> is : Crises -> Crisis
                )) || check(t.slice(0, -2) + "is")) { return true; }
                break;
            // s>p : us -> i : Cactus -> Cacti
            case "us": if (check(t.slice(0, -2) + "i")) { return true; }
                break;
            // s>p : is -> es : Thesis -> Theses
            case "is": if (check(t.slice(0, -2) + "es")) { return true; }
                break;
            // s>p : fe -> ves : Knife -> Knives
            case "fe": if (check(t.slice(0, -2) + "ves")) { return true; }
                break;
            case "sh":
            // s>p : sh, ch -> shes, ches : Fish -> Fishes
            case "ch": if (check(t + "es")) { return true; }
                break;
        } return false;
    }
    function isUsedOrBanned(title) {
        function isUsed(lowerTitle) {
            if (used.size === 0) {
                const usedTitles = Internal.getUsedTitles();
                for (let i = 0; i < usedTitles.length; i++) {
                    used.add(usedTitles[i].toLowerCase());
                }
                if (used.size === 0) {
                    // Add a placeholder so compute isn't wasted on additional checks during this hook
                    used.add("%@%");
                }
            }
            return used.has(lowerTitle);
        }
        return checkPlurals(title, t => (isUsed(t) || isBanned(t)));
    }
    function isBanned(lowerTitle, getUsedIsExternal) {
        if (bans.size === 0) {
            // In order to save space, implicit bans aren't listed within the UI
            const controlVariants = getControlVariants();
            const dataVariants = getDataVariants();
            const bansToAdd = [...lowArr([
                ...Internal.getBannedTitles(),
                controlVariants.enable.title.replace("\n", ""),
                controlVariants.enable.keys,
                controlVariants.configure.title.replace("\n", ""),
                controlVariants.configure.keys,
                dataVariants.debug.title,
                dataVariants.debug.keys,
                dataVariants.critical.title,
                dataVariants.critical.keys,
                ...Object.values(Words.reserved)
            ]), ...(function () {
                if (shouldProceed() || getUsedIsExternal) {
                    // These proper nouns are way too common to waste card generations on; they already exist within the AI training data so this would be pointless
                    return [...Words.entities, ...Words.undesirables.map(undesirable => see(undesirable))];
                } else {
                    return [];
                }
            })()];
            for (let i = 0; i < bansToAdd.length; i++) {
                bans.add(bansToAdd[i]);
            }
        }
        return bans.has(lowerTitle);
    }
    function isNamed(title, returnSurname) {
        const peerage = new Set(Words.peerage);
        const minorWords = new Set(Words.minor);
        if ((forenames.size === 0) || (surnames.size === 0)) {
            const usedTitles = Internal.getUsedTitles();
            for (let i = 0; i < usedTitles.length; i++) {
                const usedTitleWords = divideTitle(usedTitles[i]);
                if (
                    (usedTitleWords.length === 2)
                    && (2 < usedTitleWords[0].length)
                    && (2 < usedTitleWords[1].length)
                ) {
                    forenames.add(usedTitleWords[0]);
                    surnames.add(usedTitleWords[1]);
                } else if (
                    (usedTitleWords.length === 1)
                    && (2 < usedTitleWords[0].length)
                ) {
                    forenames.add(usedTitleWords[0]);
                }
            }
            if (forenames.size === 0) {
                forenames.add("%@%");
            }
            if (surnames.size === 0) {
                surnames.add("%@%");
            }
        }
        const titleWords = divideTitle(title);
        if (
            returnSurname
            && (titleWords.length === 2)
            && (3 < titleWords[0].length)
            && (3 < titleWords[1].length)
            && forenames.has(titleWords[0])
            && surnames.has(titleWords[1])
        ) {
            return (title
                .split(" ")
                .find(casedTitleWord => (casedTitleWord.toLowerCase() === titleWords[1]))
            );
        } else if (
            (titleWords.length === 2)
            && (2 < titleWords[0].length)
            && (2 < titleWords[1].length)
            && forenames.has(titleWords[0])
        ) {
            return true;
        } else if (
            (titleWords.length === 1)
            && (2 < titleWords[0].length)
            && (forenames.has(titleWords[0]) || surnames.has(titleWords[0]))
        ) {
            return true;
        }
        function divideTitle(undividedTitle) {
            const titleWords = undividedTitle.toLowerCase().split(" ");
            if (titleWords.some(word => minorWords.has(word))) {
                return [];
            } else {
                return titleWords.filter(word => !peerage.has(word));
            }
        }
        return false;
    }
    function shouldProceed() {
        return (AC.config.doAC && !AC.signal.emergencyHalt && (AC.chronometer.postpone < 1));
    }
    function isDoSayStory(type) {
        return (isDoSay(type) || (type === "story"));
    }
    function isDoSay(type) {
        return ((type === "do") || (type === "say"));
    }
    function permitOutput() {
        return ((AC.config.deleteAllAutoCards === null) && (AC.signal.outputReplacement === ""));
    }
    function isAwaitingGeneration() {
        return (0 < AC.generation.pending.length);
    }
    function isPendingGeneration() {
        return notEmptyObj(AC.generation.workpiece);
    }
    function isPendingCompression() {
        return (AC.compression.titleKey !== "");
    }
    function notEmptyObj(obj) {
        return (obj && (0 < Object.keys(obj).length));
    }
    function clearTransientTitles() {
        AC.database.titles.used = [];
        [used, forenames, surnames].forEach(nameset => nameset.clear());
        return;
    }
    function banTitle(title, isFinalAssignment) {
        title = limitString(title.replace(/\s+/g, " ").trim(), 100);
        const lowerTitle = title.toLowerCase();
        if (bans.size !== 0) {
            bans.add(lowerTitle);
        }
        if (!lowArr(Internal.getBannedTitles()).includes(lowerTitle)) {
            AC.database.titles.banned.unshift(title);
            if (isFinalAssignment) {
                return;
            }
            AC.database.titles.pendingBans.unshift([title, 3]);
            const index = AC.database.titles.pendingUnbans.findIndex(pair => (pair[0].toLowerCase() === lowerTitle));
            if (index !== -1) {
                AC.database.titles.pendingUnbans.splice(index, 1);
            }
        }
        return;
    }
    function unbanTitle(title) {
        title = title.replace(/\s+/g, " ").trim();
        const lowerTitle = title.toLowerCase();
        if (used.size !== 0) {
            bans.delete(lowerTitle);
        }
        let index = lowArr(Internal.getBannedTitles()).indexOf(lowerTitle);
        if (index !== -1) {
            AC.database.titles.banned.splice(index, 1);
            AC.database.titles.pendingUnbans.unshift([title, 3]);
            index = AC.database.titles.pendingBans.findIndex(pair => (pair[0].toLowerCase() === lowerTitle));
            if (index !== -1) {
                AC.database.titles.pendingBans.splice(index, 1);
            }
        }
        return;
    }
    function lowArr(arr) {
        return arr.map(str => str.toLowerCase());
    }
    function getControlVariants() {
        return O.f({
            configure: O.f({
                title: "Configure \nAuto-Cards",
                keys: "Edit the entry above to adjust your story card automation settings",
            }),
            enable: O.f({
                title: "Edit to enable \nAuto-Cards",
                keys: "Edit the entry above to enable story card automation",
            }),
        });
    }
    function getDataVariants() {
        return O.f({
            debug: O.f({
                title: "Debug Data",
                keys: "You may view the debug state in the notes section below",
            }),
            critical: O.f({
                title: "Critical Data",
                keys: "Never modify or delete this story card",
            }),
        });
    }
    // Prepare to export the codomain
    const codomain = CODOMAIN.read();
    const [stopPackaged, lastCall] = (function () {
        // Tbh I don't know why I even bothered going through the trouble of implementing "stop" within LSIv2
        switch (HOOK) {
            case "context": {
                const haltStatus = [];
                if (Array.isArray(codomain)) {
                    O.f(codomain);
                    haltStatus.push(true, codomain[1]);
                } else {
                    haltStatus.push(false, STOP);
                }
                if ((AC.config.LSIv2 !== false) && (haltStatus[1] === true)) {
                    // AutoCards will return [text, (stop === true)] onContext
                    // The onOutput lifecycle hook will not be executed during this turn
                    concludeEmergency();
                }
                return haltStatus;
            }
            case "output": {
                // AC.config.LSIv2 being either true or null implies (lastCall === true)
                return [null, AC.config.LSIv2 ?? true];
            }
            default: {
                return [null, null];
            }
        }
    })();
    // Repackage AC to propagate its state forward in time
    if (state.LSIv2) {
        // Facilitates recursive calls of AutoCards
        // The Auto-Cards external API is accessible through the LSIv2 scope
        state.LSIv2 = AC;
    } else {
        const memoryOverflow = (38000 < (JSON.stringify(state).length + JSON.stringify(AC).length));
        if (memoryOverflow) {
            // Memory overflow is imminent
            const dataVariants = getDataVariants();
            if (lastCall) {
                unbanTitle(dataVariants.debug.title);
                banTitle(dataVariants.critical.title);
            }
            setData(dataVariants.critical, dataVariants.debug);
            if (state.AutoCards) {
                // Decouple state for safety
                delete state.AutoCards;
            }
        } else {
            if (lastCall) {
                const dataVariants = getDataVariants();
                unbanTitle(dataVariants.critical.title);
                if (AC.config.showDebugData) {
                    // Update the debug data card
                    banTitle(dataVariants.debug.title);
                    setData(dataVariants.debug, dataVariants.critical);
                } else {
                    // There should be no data card
                    unbanTitle(dataVariants.debug.title);
                    if (data === null) {
                        data = getSingletonCard(false, O.f({ ...dataVariants.debug }), O.f({ ...dataVariants.critical }));
                    }
                    eraseCard(data);
                    data = null;
                }
            } else if (AC.config.showDebugData && (HOOK === undefined)) {
                const dataVariants = getDataVariants();
                setData(dataVariants.debug, dataVariants.critical);
            }
            // Save a backup image to state
            state.AutoCards = AC;
        }
        function setData(primaryVariant, secondaryVariant) {
            const dataCardTemplate = O.f({
                type: AC.config.defaultCardType,
                title: primaryVariant.title,
                keys: primaryVariant.keys,
                entry: (function () {
                    const mutualEntry = (
                        "If you encounter an Auto-Cards bug or otherwise wish to help me improve this script by sharing your configs and game data, please send me the notes text found below. You may ping me @LewdLeah through the official AI Dungeon Discord server. Please ensure the content you share is appropriate for the server, otherwise DM me instead. 😌"
                    );
                    if (memoryOverflow) {
                        return (
                            "Seeing this means Auto-Cards detected an imminent memory overflow event. But fear not! As an emergency fallback, the full state of Auto-Cards' data has been serialized and written to the notes section below. This text will be deserialized during each lifecycle hook, therefore it's absolutely imperative that you avoid editing this story card!"
                        ) + (function () {
                            if (AC.config.showDebugData) {
                                return "\n\n" + mutualEntry;
                            } else {
                                return "";
                            }
                        })();
                    } else {
                        return (
                            "This story card displays the full serialized state of Auto-Cards. To remove this card, simply set the \"log debug data\" setting to false within your \"Configure\" card. "
                        ) + mutualEntry;
                    }
                })(),
                description: JSON.stringify(AC)
            });
            if (data === null) {
                data = getSingletonCard(true, dataCardTemplate, O.f({ ...secondaryVariant }));
            }
            for (const propertyName of ["title", "keys", "entry", "description"]) {
                if (data[propertyName] !== dataCardTemplate[propertyName]) {
                    data[propertyName] = dataCardTemplate[propertyName];
                }
            }
            const index = storyCards.indexOf(data);
            if ((index !== -1) && (index !== (storyCards.length - 1))) {
                // Ensure the data card is always at the bottom of the story cards list
                storyCards.splice(index, 1);
                storyCards.push(data);
            }
            return;
        }
    }
    // This is the only return point within the parent scope of AutoCards
    if (stopPackaged === false) {
        return [codomain, STOP];
    } else {
        return codomain;
    }
} AutoCards(null); function isolateLSIv2(code, log, text, stop) { const console = Object.freeze({ log }); try { eval(code); return [null, text, stop]; } catch (error) { return [error, text, stop]; } }
