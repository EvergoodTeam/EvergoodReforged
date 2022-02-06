// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true

console.info('Reloaded productivebees.js')

onEvent('recipes', event => {


    // Productive Bees ----------------------------------------------------------------------
    event.remove({output: 'productivebees:centrifuge'})
    event.shaped('productivebees:centrifuge', [
        'SRS',
        'CMC',
        'SBS'
      ], {
        S: '#forge:plates/steel',
        R: 'createaddition:redstone_relay',
        M: 'create:mechanical_mixer',
        B: 'create:basin',
        C: 'create:cogwheel'
    })

    event.remove({output: 'productivebees:powered_centrifuge'})
    event.shaped('productivebees:powered_centrifuge', [
        'PSP',
        'RCR',
        'PAP'
      ], {
        R: 'create:electron_tube',
        C: 'productivebees:centrifuge',
        A: 'immersiveengineering:capacitor_lv',
        P: '#forge:plates/steel',
        S: 'immersiveengineering:wirecoil_redstone'
    })

})

onEvent('item.tags', event => {
	
})