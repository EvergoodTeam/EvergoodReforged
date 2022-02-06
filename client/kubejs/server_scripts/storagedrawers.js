// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true

console.info('Reloaded storagedrawers.js')

onEvent('recipes', event => {


    // Storage Drawers ----------------------------------------------------------------------
    event.replaceInput({id: 'storagedrawers:iron_storage_upgrade'}, 'storagedrawers:upgrade_template', 'storagedrawers:obsidian_storage_upgrade')
    event.replaceInput({id: 'storagedrawers:gold_storage_upgrade'}, 'storagedrawers:upgrade_template', 'storagedrawers:iron_storage_upgrade')
    event.replaceInput({id: 'storagedrawers:diamond_storage_upgrade'}, 'storagedrawers:upgrade_template', 'storagedrawers:gold_storage_upgrade')
    event.replaceInput({id: 'storagedrawers:emerald_storage_upgrade'}, 'storagedrawers:upgrade_template', 'storagedrawers:diamond_storage_upgrade')


})

onEvent('item.tags', event => {
	
})