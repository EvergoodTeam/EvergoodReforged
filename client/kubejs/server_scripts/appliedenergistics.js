// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true

console.info('Reloaded Server Resources')

onEvent('recipes', event => {


    // Applied Energistics 2 ----------------------------------------------------------------------
    event.remove({output: 'ae2:inscriber'})
    event.shaped('ae2:inscriber', [
        'IPI',
        'BGE',
        'IPI'
      ], {
        I: 'minecraft:iron_ingot',
        P: 'minecraft:sticky_piston',
        B: '#forge:plates/brass',
        E: 'create:electron_tube',
        G: 'minecraft:glass_pane'
    })


})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})