// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true

console.info('Reloaded malum.js')

onEvent('recipes', event => {

    
    // Malum ----------------------------------------------------------------------


    // Logs
    let logs = ['runewood', 'soulwood'];

    logs.forEach(id => {
        event.remove({id: `malum:${id}_planks`})
        event.shapeless(`malum:${id}_planks`, `#malum:${id}_logs`)
    })

})

onEvent('item.tags', event => {
	
})