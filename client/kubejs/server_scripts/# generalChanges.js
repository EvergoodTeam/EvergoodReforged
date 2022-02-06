// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true

console.info('Reloaded generalChanges.js')

onEvent('recipes', event => {

    
    // Logs ----------------------------------------------------------------------
    event.remove({input: 'aquaculture:driftwood'})
    event.shapeless('minecraft:oak_planks', 'aquaculture:driftwood')

    event.remove({id: 'ars_nouveau:archwood_planks'})
    event.shapeless('ars_nouveau:archwood_planks', '#forge:logs/archwood')

    let logsB = ['fir', 'redwood', 'cherry', 'mahogany', 'jacaranda', 'palm', 'willow', 'dead', 'magic', 'umbran', 'hellbark'];

    logsB.forEach(id => {
        event.remove({id: `biomesoplenty:${id}_planks`})
        event.shapeless(`biomesoplenty:${id}_planks`, `#biomesoplenty:${id}_logs`)
    })


    // Iron Furnaces
    event.replaceInput({output: 'ironfurnaces:iron_furnace'}, 'minecraft:iron_ingot', 'minecraft:iron_block')
    event.replaceInput({output: 'ironfurnaces:gold_furnace'}, 'minecraft:gold_ingot', 'minecraft:gold_block')
    event.replaceInput({output: 'ironfurnaces:diamond_furnace'}, 'minecraft:diamond', 'minecraft:diamond_block')
    event.replaceInput({output: 'ironfurnaces:emerald_furnace'}, 'minecraft:emerald', 'minecraft:emerald_block')
    event.replaceInput({output: 'ironfurnaces:netherite_furnace'}, 'minecraft:netherite_ingot', 'minecraft:netherite_block')
    
    event.replaceInput({output: 'ironfurnaces:copper_furnace'}, 'minecraft:copper_ingot', 'minecraft:copper_block')
    event.replaceInput({output: 'ironfurnaces:silver_furnace'}, '#forge:ingots/silver', '#forge:sheetmetals/silver')

    
    // Tesseract
    event.remove({output: 'tesseract:tesseract'})
    event.shaped('tesseract:tesseract', [
        'EAE',
        'RHR',
        'EBE'
      ], {
        E: 'extendedcrafting:ender_ingot',
        B: 'assemblylinemachines:enhanced_battery',
        R: 'assemblylinemachines:rubber_sheet',
        H: 'assemblylinemachines:miniature_black_hole',
        A: 'assemblylinemachines:attuned_titanium_plate'
    })

})

onEvent('item.tags', event => {
	
})