// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true

console.info('Reloaded Server Resources')

onEvent('recipes', event => {


    // Productive Bees ----------------------------------------------------------------------
    event.remove({output: 'productivebees:centrifuge'})
    event.shaped('productivebees:centrifuge', [
        'SOS',
        'SCS',
        'SSS'
      ], {
        S: '#forge:plates/steel',
        C: 'minecraft:cauldron',
        O: 'create:cogwheel'
    })

    event.remove({output: 'productivebees:powered_centrifuge'})
    event.shaped('productivebees:powered_centrifuge', [
        'PSP',
        'RCR',
        'PAP'
      ], {
        R: 'immersiveengineering:wirecoil_redstone',
        C: 'productivebees:centrifuge',
        A: 'immersiveengineering:capacitor_lv',
        P: '#forge:plates/steel',
        S: '#forge:plates/brass'
    })

})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})