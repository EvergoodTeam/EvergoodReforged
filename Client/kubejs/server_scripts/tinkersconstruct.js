// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true

console.info('Reloaded tinkersconstruct.js')

onEvent('recipes', event => {


    // Tinkers Construct ----------------------------------------------------------------------


    // Logs
    let logs = ['greenheart', 'skyroot', 'bloodshroom'];

    logs.forEach(id => {
        event.remove({output: `tconstruct:${id}_planks`})
        event.shapeless(`tconstruct:${id}_planks`, `#tconstruct:${id}_logs`)
    })


})

onEvent('item.tags', event => {
	
})