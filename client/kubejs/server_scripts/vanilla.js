// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true

console.info('Reloaded vanilla.js')

onEvent('recipes', event => {

    
    // Minecraft ----------------------------------------------------------------------


    // Logs
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

    
    // Misc
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
	
})