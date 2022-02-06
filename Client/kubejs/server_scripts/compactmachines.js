// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true

console.info('Reloaded compactmachines.js')

onEvent('recipes', event => {

    
    // Compact Machines ----------------------------------------------------------------------


    // Personal Shrinking Device
    event.remove({output: 'compactmachines:personal_shrinking_device'})
    event.shaped('compactmachines:personal_shrinking_device', [
        'PCP',
        'NSN',
        'PZP'
      ], {
        N: 'assemblylinemachines:electrified_netherite_blend',
        P: '#forge:plates/chromium',
        Z: '#forge:plates/zinc',
        C: 'createaddition:capacitor',
        S: 'computercraft:pocket_computer_advanced'
    })


    // Compact Machines
    event.replaceInput({output: 'compactmachines:machine_tiny'}, '#minecraft:planks', 'tesseract:tesseract')
    event.replaceInput({output: 'compactmachines:machine_small'}, 'minecraft:iron_block', 'compactmachines:machine_tiny')
    event.replaceInput({output: 'compactmachines:machine_normal'}, 'minecraft:gold_block', 'compactmachines:machine_small')
    event.replaceInput({output: 'compactmachines:machine_large'}, 'minecraft:obsidian', 'compactmachines:machine_normal')    
    event.replaceInput({output: 'compactmachines:machine_giant'}, 'minecraft:diamond_block', 'compactmachines:machine_large')
    event.replaceInput({output: 'compactmachines:machine_maximum'}, 'minecraft:emerald_block', 'compactmachines:machine_giant')


})

onEvent('item.tags', event => {
	
})