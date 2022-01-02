// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true

console.info('Reloaded Server Resources')

onEvent('recipes', event => {

    
    // Minecraft ----------------------------------------------------------------------
    event.replaceInput({id: 'minecraft:flint_and_steel'}, 'minecraft:iron_ingot', '#forge:ingots/steel')
    event.replaceInput({output: 'minecraft:furnace'}, '#forge:cobblestone', 'cyclic:compressed_cobblestone')
    event.replaceInput({id: 'minecraft:bucket'}, 'minecraft:iron_ingot', '#forge:plates/iron')

    event.shaped('16x minecraft:stick', [
        'L  ',
        'L  ',
        '   '
      ], {
        L: '#minecraft:logs'
    })
    

})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})