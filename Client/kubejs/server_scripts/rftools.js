// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true

console.info('Reloaded rftools.js')

onEvent('recipes', event => {

    
    // RFTools ----------------------------------------------------------------------


    // Machine Frame
    event.remove({output: 'rftoolsbase:machine_frame'})
    event.shaped('rftoolsbase:machine_frame', [
        'SES',
        'ULU',
        'SCS'
      ], {
        S: '#forge:ingots/steel',
        E: 'create:electron_tube',
        U: '#forge:ingots/uranium',
        L: 'ae2:logic_processor',
        C: 'assemblylinemachines:empowered_conduction_component'
    })

})

onEvent('item.tags', event => {
	
})