// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true

console.info('Reloaded beyondearth.js')

onEvent('recipes', event => {


    // Beyond Earth ----------------------------------------------------------------------
    event.remove({id: 'beyond_earth:steel_ingot_blasting'})


    // NASA Workbench
    event.remove({output: 'beyond_earth:nasa_workbench'})
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            'ABCDCBA',
            'BEBFBEB',
            'CGAHAGC',
            'DIJKJID',
            'CGAHAGC',
            'BEBFBEB',
            'ABCDCBA'
        ],
        key: {
            A: {
                item: 'biggerreactors:graphite_ingot'
            },
            B: {
                item: 'beyond_earth:compressed_steel'
            },
            C: {
                item: 'assemblylinemachines:energized_gold_plate'
            },
            D: {
                item: 'createaddition:capacitor'
            },
            E: {
                item: 'createaddition:connector'
            },
            F: {
                item: 'assemblylinemachines:graphene_rod'
            },
            G: {
                item: 'assemblylinemachines:empowered_convection_component'
            },
            H: {
                item: 'malum:blazing_quartz'
            },
            I: {
                item: 'extendedcrafting:redstone_ingot'
            },
            J: {
                item: 'assemblylinemachines:microprocessor'
            },
            K: {
                item: 'extendedcrafting:advanced_table'
            }
        },
        result: {
            item: 'beyond_earth:nasa_workbench'
        }
    })

})

onEvent('item.tags', event => {
	
})