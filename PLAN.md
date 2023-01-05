**note**: this is not a complete plan, nor is it set in stone. i just put together what i thought sounded like a decent strategy game, an' we can hammer the details out. <br>
i have intentionally left the cost of the units undetermined as that's not important (yet). <br>
each civilization will start out with alotted cities an' resources.

# overview
strategy game. player attempts to beat CPU an' control the entire map.
## map
the grand map shows the entire board with all of the cities. this is where the user mainly controls their civilization with menus for civ improvements an' surveyin' enemy territory an' controlled cities. there are three types of tiles [five if i had multiplayer, but we'll wait for that]: occupied, enemy, an' unclaimed. <br>
the player can select individual cities an' use the menus associated with those cities to begin local actions such as spawnin' citizens an' military, creatin' resources buildin's, an' improvin' the local economy.
## battlefield
the battlefield is where the troops fight an' is the only real time aspect of the game. units from both sides will engage in battle. we will need to decide how much user input we will allow as previous experience [when ski tried to make a gigantic RTS, but found that his PC couldn't run the calculations every frame] tells me that selectin' a group of units an' tellin' 'em to attack a certain unit or move to a certain area is not an easy feat.
## cities
all resources an' troops are local to a city an' not available to other cities. <br>
therefore, troops built in a city must be built from resources from that city.
## unclaimed territory
a player must send a settler to unclaimed territory to spawn a city on that territory. <br>
a scout may be used to determine the resources in the territory. <br>
it is worth notin' that enemy cites that are overtaken automatically become the player's cities an' do not need a settler.


# economy
the resources that are gathered are food, wood, gold, an' metal.
## units
- citizens - gathers resources from specific buildin's that contribute to the resource stockpile locally of a city
- architects - decrease the build time of buildin's
- scouts - reveal resources/climate in undiscovered territory an' troops in enemy territory.
## buildin's
- farm - produces varying resources dependent upon the crop selected by the user.
- lumber camp - produces wood. [gather rate is higher in cold climates]
- mine - produces metal or gold. can only produce one resource at a time. build limit two per city. [gather rate is higher in cold climates]

# military
## infantry
- swordsman: heavy infantry that has a melee attack
- gunner: light infantry that has a ranged attack
## calvary
- hobelar: fast, light calvary (med-high HP & med attack)
- cavalier: slower, heavy calvary (high HP & attack)
## artillery
- cannon: artillery unit particularly adept at destroyin' infantry
- flamethrower: close-range artillery unit that deals heavy damage over time


# improvements
## economy
all economic improvements will be made locally at each city except for crop improvements [see crops in miscellaneous]. <br>
CROP:
- wheat: controlled climate increases gather rates by 20%
- cotton: controlled climate increases gather rates by 20%
- corn: controlled climate increases gather rates by 20%
- rice: controlled climate increases gather rates by 20%
- sugar cane: controlled climate increases gather rates by 20%
LOCAL:
- plow: improves farm gather rates by 15%
- windmill: improves farm gather rates by 25%
- pickaxe: improves mine gather rates by 15%
- drill: improves mine gather rates by 25%
- axe: improves lumber camp gather rates by 15%
- chainsaw: improves lumber camp gather rates by 25%
- horses: scouts produced from that city will have their speed increased by 100%
## military
all military improvements are made for the whole civilization. each of the followin' improvements must be made for each unit.
- bronze: 25% upgrade to all unit HP an' attack
- silver: 50% upgrade to all unit HP & attack [+1 range to all ranged infantry]
- gold: 75% upgrade to all unit HP & attack [+1 range to all ranged infantry]
- diamond: 100% upgrade to all unit HP & attack [+2 range to all ranged infantry]

# miscellaneous
## queue for buildin's an' improvements
all improvements within each city an' civilization are worked on at the same time. <br>
some improvements take longer than one turn to complete, so there will need to be improvements waitin' in a queue to be completed.
## unit/resource transport
all units/resources can be transported to another occupied territory. <br>
scouts, military units, an' settlers can only be transported to unclaimed territory. <br>
only military units an' scouts can be transported to enemy territory.
## crops
while a civ can research a crop improvement for the entire civ, crops will only grow in suitable climates which are native to each city. <br>
ideas for crops are below, their respective resources, an' their respective climates are below. [all climates are true to reality] <br>
- wheat (semi-humid, warm climate): food
- cotton (semi-arid, warm climate): gold
- corn (humid, warm climate): food
- rice (humid, warm climate): food
- sugar cane (humid, warm climate): gold
## special units/improvments
each civ will have 2 units an' 3-4 improvements that are unique to that civ. this is probs the last detail we should work out.

# CPU
the CPU must fulfill the followin' roles. the difficulties for creatin' a CPU that adequately plays game are listed as well in italics. <br>
<br>
first, the CPU needs to forecast its later needs 'fore any actions are taken.
## economy
the CPU needs to adjust its economy for later military needs determined in its forecast. actions will be taken accordin' to the forecast.
## military
the CPU needs to understand each territories individual position in relation to enemy territories. 
## improvements
the CPU should always save a certain 'mount for improvements. the improvements the CPU researches will be based on the current state of the player.
## miscellaneous
not sure how the CPU will play to the special units/improvements nor what triggers will need to be in place for the CPU to settle new cities.

# issuez
## scope of units
units will need to have their own specific data unique to each civilization, but also be used in a global array on the battlefield. how will units maintain their unique data for each civilization an' continue to be stored in a global array?
## no man's land
when units are bein' transferred from one city to another, but can't reach the next city by the time the turn ends are stuck in no man's land. <br>
example: a city is 4 units away from a unit that has a speed of 3 units/turn is 4 units away from a target city
## pathfindin' algorithm
when units/resources are transported from one city to the next, there will need to be a pathfindin' algorithm to determine the shortest possible path from the city the units/resources are currently in to the target city/territory. the algorithm will need to avoid enemy territory. distance between cities will need to be ignored. use either BFS or A* algorithm.
## map gen
maps may need to be generated with a noise-like algorithm, so climates an' landscapes are more realistic. not entirely sure how this would work, so i'll fall back onto manual map data if this doesn't work.
