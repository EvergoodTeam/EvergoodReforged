// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true

console.info('Reloaded Server Resources')

onEvent('recipes', event => {

    
    // Wood ----------------------------------------------------------------------
    let logs = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak'];

    logs.forEach(id => {
        event.remove({id: `minecraft:${id}_planks`})
        event.shapeless(`minecraft:${id}_planks`, `#minecraft:${id}_logs`)
    })

    let stems = ['crimson', 'warped'];

    stems.forEach(id =>{
        event.remove({id: `minecraft:${id}_planks`})
        event.shapeless(`minecraft:${id}_planks`, `#minecraft:${id}_stems`)
    })

    event.remove({input: 'aquaculture:driftwood'})
    event.shapeless('minecraft:oak_planks', 'aquaculture:driftwood')

    event.remove({id: 'ars_nouveau:archwood_planks'})
    event.shapeless('ars_nouveau:archwood_planks', '#forge:logs/archwood')


})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})