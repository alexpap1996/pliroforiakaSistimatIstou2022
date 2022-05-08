/*
    TEMP FILE BECAUSE THERE IS NOT DB YET
    WILL BE DELETED LATER
*/
import water from "./resources/water.jpg";
import evoia from "./resources/evoia.jpg";
import bitcoin from "./resources/bitcoin.jpg";
import gardening from "./resources/gardening.png";
import solarenergy from "./resources/solar-energy.png";

class User {
    constructor (username, firstname, lastname, role, password, id) {
        this.username = username
        this.firstname = firstname
        this.lastname = lastname
        this.role = role
        this.password = password
        this.id = id
        this.articleIds = []
    }

    pushArticle (articleId) {
        this.articleIds.push(articleId)
    }
}
 
class Article {
    constructor (title, body, imgUrl, authorId, dateCreated, articleId) {
        this.title = title
        this.body = body
        this.imgUrl = imgUrl
        this.authorId = authorId
        this.dateCreated = dateCreated ?? Date.now()
        this.articleId = articleId
        this.articleDescription = 'Article Description'
    }
}

const users = []
const articleArray = []

users.push(new User('alexpap', 'Alex', 'Pap', 'Admin', 'password', 1))
users.push(new User('jimgal', 'Dimitris', 'Galanis', 'Admin', 'password', 2))
users.push(new User('triant', 'Triantafillos', 'Example', 'Admin', 'password', 3))
users.push(new User('jdoe', 'Jane', 'Doe', 'User', 'password', 4))

articleArray.push(new Article(
    'Protect your groundwater',
    `Groundwater is water found in geological formations of rocks called aquifers. Ninety-nine percent of liquid freshwater is just beneath the surface, hiding in the sand and gravel, and recharged by rain and snowfall. Without groundwater, much of the world would be uninhabitable. Arid regions depend on groundwater for drinking, food production, sanitation and industry. Worldwide, almost half of people’s drinking water comes from groundwater, and it provides about 40% of the water necessary for irrigated agriculture. Groundwater also feeds rivers, wetlands, lakes and streams.

    Despite its importance, a lot of people don’t understand groundwater or know how to access it and keep it safe. Climate variability and human activities are putting dangerous pressure on groundwater resources, depleting and polluting them. This year’s World Water Day focus is intended to help people understand why they need to take better care of groundwater.
    
    Different parts of the world face different groundwater issues. Asia and the Pacific region have the world’s lowest per capita water availability. By 2050, groundwater use may increase by 30% to solve this need. European and North American groundwater suffers from nitrate and pesticide infiltration. In fact, 20% of Europe groundwater bodies are so polluted by agriculture that they exceed Europe standards. Around the world, people have to learn how to manage their groundwater by not extracting more than the rain and snow can recharge.
    What can we do to protect groundwater?
    At home, we need to think about waste disposal. If you dump chemicals down your drain, they’ll end up in the water supply. Avoid having underground fuel tanks. It’s safer to keep them above ground where you can keep an eye on them. If you must have an underground fuel tank, test it for leaks. People with on-site wells should test them regularly for pollution.
    
    If you work with any hazardous materials, be sure to safely store and handle them. Check your wastewater discharge connections. Plug any holes in dumpsters and keep them covered. Be extra careful when it rains, as chemicals and waste get washed right down storm drains. Use pesticides and deicing salt sparingly.
    
    Water is something that people often take for granted. Until it’s scarce. If you’re lucky enough to live somewhere with an adequate water supply, work to keep it that way, and to help others who aren’t so fortunate.`,
    water,
    1,
    undefined,
    1
))
articleArray.push(new Article(
    'Fire Hazard Protection',
    `The importance of wildfire prevention is best illustrated with overwhelming statistics. According to the US Forest Service, nearly 7.5 million acres are lost to wildfires across the United States yearly, with a risk of damage to every state. Sadly, the anthropogenic factor is by far the main culprit of the catastrophic losses, which demands various wildfire prevention strategies.

    Among the numerous strategies of how to prevent wildfires from spreading, the most effective one is never to let it happen. Forest fire prevention and control are possible with effective agricultural and forest management plans, alongside public awareness, responsibility, and concern.
    
    Weather Conditions: Posed Danger & Wildfire Prevention
    Certain weather causes forest fires by itself, but human activities aggravate the situation even more. For example, typical natural forces setting forests on fire are as follows:
    
    -high temperatures raise the flammability of dry grass, leaves, trunks, or pine tar;
    -strong winds speed up wildfire spreading;
    -climate change and droughts intensify and prolong forest fire seasons, particularly, in the Amazon basin;
    -lightning provokes ignition in dry forest trees.
    Preventing Wildfires Hazard From Vehicles
    Driving off-road in nature, within the proximity of dry crop residue and forests, demands extreme caution in terms of wildfire prevention. Exhaust temperature is often high enough to set dry grass or straw on fire, with potential danger to nearby forests. In fact, exhausts can be as hot as 1200 degrees F. A mere sparkle from the overheated engine, poorly greased bearings, dragging safety chains, or worn-out tires can lead to wildfires, too. Thus, to prevent wildfires, it is essential to:
    
    -undertake technical checkups regularly;
    -have properly functioning spark arrestors;
    -never park near dry grass, especially, close to forests;
    -have a shovel and a fire-extinguisher;
    -carry a bucket or anything suitable to fill with water;
    -store a reservoir with water or sand`,
    evoia,
    1,
    undefined,
    2
))

articleArray.push(new Article(
    'Bitcoin under pressure to adopt more sustainable practices',
    `Several environmental advocacy groups have launched a campaign to pressure bitcoin miners to change their coding and reduce energy consumption. Led by Environmental Working Group and Greenpeace USA, the campaign claims the massive amount of energy miners use could decrease by 99% with a coding style change. 

    “Coal plants which were dormant or slated to be closed are now being revived and solely dedicated to bitcoin mining. Gas plants, which in many cases were increasingly economically uncompetitive, are also now being dedicated to bitcoin mining. We are seeing this all across the country,” said Michael Brune, campaign director and former executive director of Sierra Club. Miners call Bitcoin’s software code “proof of work.” It uses immense energy due to the amount of computer power needed to validate transactions.
    
    In contrast, Ethereum (Bitcoin’s closest rival cryptocurrency) is shifting to a different system known as “proof of stake.” In this system, the miners pledge coins to verify transactions and are penalized for inaccuracies. Etherium officials say this approach could reduce energy use by 99% compared to the proof of work approach. Change the Code Not the Climate campaigners are encouraging Bitcoin to adopt a similar system.
    
    Without change, “there’s no way we can reach our climate goals.” Since China’s 2021 cryptocurrency mining crackdown, the U.S. leads the world in cryptocurrency mining. “It’s particularly painful to see [Bitcoin encouraging fossil fuel use] in the electric sector because that is precisely the place where the US has made most of its progress in the last decade.” 
    Though bitcoin‘s value may rise and fall dramatically, the energy required to produce bitcoins seems to be ever on the rise. Researchers estimate that the bitcoin network may consume as much as 7.7 gigawatts of energy, the equivalent of the electricity required to power Austria. If the value of bitcoin continues to rise, the entire bitcoin network may one day consume up to five percent of the world’s energy.`,
    bitcoin,
    1,
    undefined,
    3
))

articleArray.push(new Article(
    'Eco friendly gardening',
    `Choose native plants
    Native species will be better adapted to dryer climates and less susceptible to disease. The Lady Bird Johnson Wildflower Center website can help you determine which plants are best for your region and soil quality.
    
    Fertilize organically
    Synthetic fertilizers made from harsh chemicals can be harmful to the environment and the local water supply. Instead, use organic fertilizers made from plant or animal matter, which naturally improve the water capacity of soil and plant health.
    
    Plant a tree
    According to the Arbor Day Foundation, a mature tree can absorb more than 48 pounds of carbon dioxide from the atmosphere annually, and release oxygen in exchange. Plant a tree in your yard and the environment will benefit for years to come.
    
    Use a rain barrel
    Conserve H2O by collecting rain from your downspouts in a rain barrel. You can use this supply to sustainably water your plants instead of going straight for the hose.
    
    Control pests and weeds naturally
    Choose plants that are naturally pest-resistant, and encourage helpful insects that prey on pests by planting nectar or pollen flowers and use perennial ground coverings. To prevent weeds from taking root, keep your grass at a higher length.
    
    Start a compost pile
    Put your vegetable peelings, fruit waste, grass cuttings and leaves to use by composting them. You can then use that rich compost to give your garden a boost.
    
    Water responsibly
    The EPA estimates that as much as 50% of the water we use outdoors is lost due to wind, evaporation, and runoff. Reduce this waste by watering in the early morning and adding mulch around gardens and shrubs.`,
    gardening,
    1,
    undefined,
    4
))

articleArray.push(new Article(
    'Solar Energy',
    `When we say solar energy, we’re talking about capturing the sun’s light (photons) and converting it to electricity (voltage) through a process called “the photovoltaic effect,” or PV. Solar energy that’s captured using PV technology can power everything from homes, businesses, cars and aircraft to small appliances like calculators, portable power stations and more. 

    Solar energy has been one of the fastest-growing sources of new energy in the world for many years now. As of 2020, the United States has a total installed solar capacity of 97.7 gigawatts (GW). That’s enough to power nearly 17.7 million homes!* And thanks to improved technology, more affordable materials and increased customer demand, solar continues to become more affordable. For many homeowners, that means rooftop solar now makes economic sense and can provide long-term savings.
    
    Is solar energy renewable or nonrenewable?
    Renewable energy is defined as energy that comes from a source that can naturally replenish itself on a human timescale. Suffice to say, the sun won’t be going away for a long, long, long time. And as long as the sun shines, we can use it to heat, cool and light our homes and businesses without polluting our precious planet with carbon dioxide (CO2) emissions.
    
    How we use solar energy today.
    When multiple solar panels are wired together, they form what’s called a solar array. The more panels you have, the more electricity you’ll generate. And depending on how big your array is, the solar energy that you capture has three applications: utility, commercial, and residential.
    
    What are the benefits of solar energy?
    Clean and good for the Earth
    More affordable to produce
    Good for the economy
    Profitable
    A domestic energy source
    Good for business
    Sustainable`,
    solarenergy,
    1,
    undefined,
    5
))

const articles = articleArray.reduce((acc, curr) => {
    const article = { [curr.articleId]: curr }
    acc = { ...acc, ...article }
    return acc
}, {})

const exportObj = {
    users,
    articles,
}

export default exportObj