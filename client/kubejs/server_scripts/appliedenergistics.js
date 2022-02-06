// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true

console.info('Reloaded appliedenergistics.js')

onEvent('recipes', event => {


    // Applied Energistics 2 ----------------------------------------------------------------------

    // Inscriber
    event.remove({output: 'ae2:inscriber'})
    event.shaped('ae2:inscriber', [
        'IPI',
        'BGC',
        'IPI'
      ], {
        I: 'minecraft:iron_ingot',
        P: 'minecraft:sticky_piston',
        B: 'assemblylinemachines:plastic_sheet',
        C: 'createaddition:capacitor',
        G: 'minecraft:glass_pane'
    })

    // ME Controller
    event.remove({output: 'ae2:controller'})
    event.shaped('ae2:controller', [
        'SFS',
        'TPT',
        'SFS'
      ], {
        S: 'ae2:sky_stone_block',
        T: 'assemblylinemachines:attuned_titanium_plate',
        F: 'ae2:fluix_crystal',
        P: 'ae2:engineering_processor'
    })



})

onEvent('item.tags', event => {
	
})