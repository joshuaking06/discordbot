const standings = [
	[ 'Aliandar', 'Mage', '2nd Battalion', 0, 1, 0 ],
	[ 'Anders', 'Shaman', '1st Battalion', 61, 22, 2.77 ],
	[ 'Anemoia', 'Warrior', 'Private', 0, 1, 0 ],
	[ 'Arcticblaze', 'Mage', '2nd Battalion', 61, 37, 1.64 ],
	[ 'Aseamos', 'Rogue', 'Private', 0, 1, 0 ],
	[ 'Ash', 'Warrior', '1st Battalion', 61, 1, 61 ],
	[ 'Ashbanker', 'Warrior', 'Private', 0, 1, 0 ],
	[ 'Autumnleaf', 'Mage', '2nd Battalion', 0, 1, 0 ],
	[ 'Bankalingur', 'Shaman', 'Private', 0, 1, 0 ],
	[ 'Bendervendor', 'Mage', 'Private', 0, 1, 0 ],
	[ 'Bipolaria', 'Priest', '1st Battalion', 54, 1, 54 ],
	[ 'Blayg', 'Warrior', '1st Battalion', 61, 27, 2.25 ],
	[ 'Broverpower', 'Warrior', '1st Battalion', 61, 54, 1.12 ],
	[ 'Bruute', 'Warrior', '1st Battalion', 61, 19, 3.21 ],
	[ 'Chiruk', 'Shaman', '2nd Battalion', 0, 1, 0 ],
	[ 'Choedankal', 'Warlock', 'Private', 0, 1, 0 ],
	[ 'Codslap', 'Warlock', '2nd Battalion', 0, 1, 0 ],
	[ 'Courage', 'Warrior', '1st Battalion', 61, 29, 2.1 ],
	[ 'Daaz', 'Priest', 'General', 61, 8, 7.62 ],
	[ 'Daazbank', 'Warrior', 'Private', 0, 1, 0 ],
	[ 'Daedrith', 'Warlock', 'General', 61, 1, 61 ],
	[ 'Dang', 'Hunter', '2nd Battalion', 0, 1, 0 ],
	[ 'Dazzlle', 'Shaman', '2nd Battalion', 0, 1, 0 ],
	[ 'Desertdust', 'Warrior', 'Private', 0, 1, 0 ],
	[ 'Dhaaz', 'Warrior', 'General', 0, 1, 0 ],
	[ 'Dhaazw', 'Warlock', 'Private', 0, 1, 0 ],
	[ 'Diffwoffa', 'Hunter', 'General', 7, 1, 7 ],
	[ 'Dishbank', 'Druid', 'Private', 0, 1, 0 ],
	[ 'Dishwãsher', 'Warrior', 'Private', 0, 1, 0 ],
	[ 'Domeroz', 'Warrior', 'Private', 0, 1, 0 ],
	[ 'Dotsandrun', 'Warlock', '1st Battalion', 54, 29, 1.86 ],
	[ 'Elegancos', 'Rogue', '1st Battalion', 61, 22, 2.77 ],
	[ 'Elu', 'Rogue', '1st Battalion', 61, 1, 61 ],
	[ 'Endlessnight', 'Rogue', '1st Battalion', 61, 16, 3.81 ],
	[ 'Erasehead', 'Warlock', '2nd Battalion', 0, 1, 0 ],
	[ 'Fallingleaf', 'Warlock', 'Private', 0, 1, 0 ],
	[ 'Finalmacht', 'Hunter', '1st Battalion', 12, 1, 12 ],
	[ 'Fionae', 'Warlock', '1st Battalion', 54, 22, 2.45 ],
	[ 'Flapcloth', 'Warlock', 'Private', 0, 1, 0 ],
	[ 'Flaptree', 'Mage', '1st Battalion', 61, 1, 61 ],
	[ 'Foxhunter', 'Hunter', 'Private', 0, 1, 0 ],
	[ 'Frozenlife', 'Mage', '2nd Battalion', 0, 1, 0 ],
	[ 'Galader', 'Priest', '1st Battalion', 61, 1, 61 ],
	[ 'Galaund', 'Warlock', '2nd Battalion', 0, 1, 0 ],
	[ 'Giltonn', 'Priest', '2nd Battalion', 0, 1, 0 ],
	[ 'Gogrim', 'Warrior', '2nd Battalion', 0, 1, 0 ],
	[ 'Herfa', 'Mage', '1st Battalion', 61, 1, 61 ],
	[ 'Hunnit', 'Warrior', '2nd Battalion', 0, 1, 0 ],
	[ 'Ixonite', 'Warlock', '1st Battalion', 0, 1, 0 ],
	[ 'Jigollo', 'Rogue', 'Private', 0, 1, 0 ],
	[ 'Jja', 'Mage', '2nd Battalion', 0, 1, 0 ],
	[ 'Kagnito', 'Shaman', '1st Battalion', 0, 1, 0 ],
	[ 'Kasul', 'Rogue', 'Private', 0, 1, 0 ],
	[ 'Killerhunt', 'Hunter', '1st Battalion', 61, 1, 61 ],
	[ 'Kimdotcom', 'Warlock', '2nd Battalion', 0, 1, 0 ],
	[ 'Lekandi', 'Priest', '2nd Battalion', 0, 1, 0 ],
	[ 'Limantra', 'Priest', 'Private', 0, 1, 0 ],
	[ 'Livjatan', 'Mage', 'Private', 0, 1, 0 ],
	[ 'Mackie', 'Rogue', 'Private', 0, 1, 0 ],
	[ 'Majiebeast', 'Shaman', '1st Battalion', 61, 18, 3.38 ],
	[ 'Mcstabbo', 'Rogue', 'General', 54, 1, 54 ],
	[ 'Mend', 'Priest', 'Private', 0, 1, 0 ],
	[ 'Mittons', 'Warrior', 'Private', 0, 1, 0 ],
	[ 'Mizar', 'Warlock', '1st Battalion', 0, 1, 0 ],
	[ 'Moolah', 'Warlock', 'Private', 0, 1, 0 ],
	[ 'Morgrum', 'Shaman', '1st Battalion', 61, 1, 61 ],
	[ 'Moridin', 'Hunter', '1st Battalion', 61, 86, 0.7 ],
	[ 'Mpc', 'Warrior', '2nd Battalion', 0, 1, 0 ],
	[ 'Mpy', 'Warrior', '1st Battalion', 61, 1, 61 ],
	[ 'Ner', 'Priest', '1st Battalion', 7, 1, 7 ],
	[ 'Oxygenre', 'Hunter', '1st Battalion', 61, 37, 1.64 ],
	[ 'Passione', 'Warrior', 'Private', 0, 1, 0 ],
	[ 'Pfruchtrah', 'Shaman', '2nd Battalion', 54, 29, 1.86 ],
	[ 'Platos', 'Mage', '1st Battalion', 61, 1, 61 ],
	[ 'Pokunda', 'Warlock', 'Private', 0, 1, 0 ],
	[ 'Pokëmon', 'Rogue', 'Private', 0, 1, 0 ],
	[ 'Polygeist', 'Mage', 'Private', 0, 1, 0 ],
	[ 'Poofimacat', 'Druid', 'General', 0, 1, 0 ],
	[ 'Putsos', 'Warlock', '1st Battalion', 61, 22, 2.77 ],
	[ 'Ragnaorc', 'Warrior', 'Private', 0, 1, 0 ],
	[ 'Raka', 'Hunter', 'Private', 0, 1, 0 ],
	[ 'Rakainai', 'Warrior', '1st Battalion', 61, 14, 4.35 ],
	[ 'Rakaínaí', 'Shaman', '2nd Battalion', 0, 1, 0 ],
	[ 'Rakkerpak', 'Priest', 'Private', 0, 1, 0 ],
	[ 'Rhosetta', 'Rogue', 'Private', 0, 1, 0 ],
	[ 'Rhoss', 'Mage', '1st Battalion', 61, 1, 61 ],
	[ 'Rickybob', 'Rogue', 'Private', 0, 1, 0 ],
	[ 'Rooftile', 'Druid', '2nd Battalion', 0, 1, 0 ],
	[ 'Rooster', 'Rogue', 'Private', 0, 1, 0 ],
	[ 'Sarthgarion', 'Mage', '1st Battalion', 61, 17, 3.58 ],
	[ 'Serrastakan', 'Mage', 'Private', 0, 1, 0 ],
	[ 'Shamplifier', 'Shaman', 'Private', 0, 1, 0 ],
	[ 'Shenkt', 'Druid', 'General', 0, 1, 0 ],
	[ 'Shivers', 'Warrior', 'General', 61, 1, 61 ],
	[ 'Shmu', 'Shaman', 'Private', 0, 1, 0 ],
	[ 'Shockmoo', 'Shaman', 'General', 7, 1, 7 ],
	[ 'Snyper', 'Hunter', 'Private', 0, 1, 0 ],
	[ 'Springbank', 'Warrior', 'Private', 0, 1, 0 ],
	[ 'Springleaf', 'Mage', 'Warlord', 54, 6, 9 ],
	[ 'Stieng', 'Shaman', 'Private', 0, 1, 0 ],
	[ 'Stylik', 'Warrior', '2nd Battalion', 0, 1, 0 ],
	[ 'Svaroon', 'Warrior', '2nd Battalion', 0, 1, 0 ],
	[ 'Thobo', 'Priest', '1st Battalion', 0, 1, 0 ],
	[ 'Trokk', 'Rogue', '2nd Battalion', 0, 1, 0 ],
	[ 'Tvl', 'Mage', '1st Battalion', 61, 1, 61 ],
	[ 'Twonkers', 'Warrior', 'Private', 0, 1, 0 ],
	[ 'Tylerblack', 'Rogue', '2nd Battalion', 0, 1, 0 ],
	[ 'Ujuh', 'Hunter', 'Private', 0, 1, 0 ],
	[ 'Unusual', 'Hunter', '2nd Battalion', 0, 1, 0 ],
	[ 'Villum', 'Warlock', '2nd Battalion', 0, 1, 0 ],
	[ 'Vilyx', 'Priest', '2nd Battalion', 0, 1, 0 ],
	[ 'Voldebag', 'Warrior', 'Private', 0, 1, 0 ],
	[ 'Wallow', 'Rogue', 'Private', 0, 1, 0 ],
	[ 'Widdowmark', 'Warlock', 'Private', 0, 1, 0 ],
	[ 'Wizur', 'Warrior', '1st Battalion', 61, 29, 2.1 ],
	[ 'Xpotion', 'Rogue', 'General', 61, 1, 61 ],
	[ 'You', 'Druid', '1st Battalion', 54, 1, 54 ],
	[ 'Zeshma', 'Warlock', 'Private', 0, 1, 0 ],
	[ 'Ziggie', 'Mage', '2nd Battalion', 0, 1, 0 ],
	[ 'Zugmar', 'Warlock', '2nd Battalion', 0, 1, 0 ],
	[ 'Zunmar', 'Druid', '1st Battalion', 61, 4, 15.25 ]
]

const raidoneofficers = [ 'Shivers', 'Daedrith', 'Daaz', 'Xpotion', 'Shockmoo', 'Springleaf' ]
const raidTwoOfficers = [ 'Shenkt', 'Diffwoffa', 'Dhaaz', 'Mcstabbo', 'Poofimacat' ]

const raidOne = standings
	.filter((char) => {
		return (
			char.includes('1st Battalion') ||
			char.includes(raidoneofficers[0]) ||
			char.includes(raidoneofficers[1]) ||
			char.includes(raidoneofficers[2]) ||
			char.includes(raidoneofficers[3]) ||
			char.includes(raidoneofficers[4]) ||
			char.includes(raidoneofficers[5])
		)
	})
	.sort((a, b) => b[5] - a[5])

const raidTwo = standings
	.filter((char) => {
		return (
			char.includes('2nd Battalion') ||
			char.includes(raidTwoOfficers[0]) ||
			char.includes(raidTwoOfficers[1]) ||
			char.includes(raidTwoOfficers[2]) ||
			char.includes(raidTwoOfficers[3]) ||
			char.includes(raidTwoOfficers[4])
		)
	})
	.sort((a, b) => b[5] - a[5])

raidOne.forEach((el) => el.splice(1, 2))
raidTwo.forEach((el) => el.splice(1, 2))

let raidOneString = 'Raid 1 EPGP STANDINGS: \n'
raidOne.forEach((el, index) => {
	raidOneString =
		raidOneString + `${index + 1}.  ${el[0]}.   EP: ${el[1]}.   GP: ${el[2]}.   PR: ${el[3]} \n`
})

let raidTwoString = 'Raid 2 EPGP STANDINGS: \n'
raidTwo.forEach((el, index) => {
	raidTwoString =
		raidTwoString + `${index + 1}.  ${el[0]}.   EP: ${el[1]}.   GP: ${el[2]}.   PR: ${el[3]} \n`
})

const raidOneStringPartOne = raidOneString.split('\n').slice(0, 25)
const raidOneStringPartTwo = raidOneString.split('\n').slice(25)
const raidTwoStringPartOne = raidTwoString.split('\n').slice(0, 25)
const raidTwoStringPartTwo = raidTwoString.split('\n').slice(25)
module.exports = {
	raidOneStringPartOne,
	raidOneStringPartTwo,
	raidTwoStringPartOne,
	raidTwoStringPartTwo
}
