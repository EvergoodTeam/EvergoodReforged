// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true

console.info('Reloaded biggerreactors.js')

onEvent('recipes', event => {


    // Bigger Reactors ----------------------------------------------------------------------

    // Graphite
    event.remove({id: 'biggerreactors:smelting/graphite_ingot'})
    event.recipes.immersiveengineeringArcFurnace(['biggerreactors:graphite_ingot'], 'immersiveengineering:dust_coke')

    // Reactor Casing
    event.remove({output: 'biggerreactors:reactor_casing'})
    event.shaped('biggerreactors:reactor_casing', [
        'GPG',
        'PUP',
        'GPG'
      ], {
        G: 'biggerreactors:graphite_ingot',
        P: 'assemblylinemachines:attuned_titanium_plate',
        U: 'biggerreactors:uranium_ingot'
    })

})

onEvent('item.tags', event => {
	
})