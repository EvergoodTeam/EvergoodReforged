// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true

console.info('Reloaded create.js')

onEvent('recipes', event => {


    // Create ----------------------------------------------------------------------



    // Create Crafts & Additions ----------------------------------------------------------------------

    // Capacitor
    event.remove({output: 'createaddition:capacitor'})
    event.shaped('createaddition:capacitor', [
        ' Z ',
        'IEI',
        ' C '
      ], {
        I: '#forge:plates/iron',
        Z: '#forge:plates/zinc',
        E: 'create:electron_tube',
        C: '#forge:plates/copper'
    })
    event.shaped('createaddition:capacitor', [
        ' C ',
        'IEI',
        ' Z '
      ], {
        I: '#forge:plates/iron',
        Z: '#forge:plates/zinc',
        E: 'create:electron_tube',
        C: '#forge:plates/copper'
    })


})

onEvent('item.tags', event => {
	
})