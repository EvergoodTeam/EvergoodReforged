// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true

console.info('Reloaded mysticalagriculture.js')

onEvent('recipes', event => {


    // Mystical Agriculture ----------------------------------------------------------------------

    let essence = ['inferium', 'prudentium', 'tertium', 'imperium', 'supremium', 'insanium']

    
    
    for(let i = 0; i<essence.length; i++){
        
        // Farmland
        if(i!=0){

            if(i!=5){
                
                event.remove({output: `mysticalagriculture:${essence[i]}_farmland`})
                event.shaped(`mysticalagriculture:${essence[i]}_farmland`, [
                    ' E ',
                    'EDE',
                    ' E '
                ], {
                    E: `mysticalagriculture:${essence[i]}_essence`,
                    D: `mysticalagriculture:${essence[i-1]}_farmland`
                })
            }
            else{
                
                event.remove({output: `mysticalagradditions:${essence[i]}_farmland`})
                event.shaped(`mysticalagradditions:${essence[i]}_farmland`, [
                    ' E ',
                    'EDE',
                    ' E '
                ], {
                    E: `mysticalagradditions:${essence[i]}_essence`,
                    D: `mysticalagriculture:${essence[i-1]}_farmland`
                })
            }
            
        }

        else{

            event.remove({output: `mysticalagriculture:${essence[i]}_farmland`})
            event.shaped(`mysticalagriculture:${essence[i]}_farmland`, [
                'HE ',
                'EDE',
                ' E '
            ], {
                E: `mysticalagriculture:${essence[i]}_essence`,
                D: 'minecraft:dirt',
                H: '#forge:tools/hoe'
            })
            event.shaped(`mysticalagriculture:${essence[i]}_farmland`, [
                ' E ',
                'EDE',
                ' E '
            ], {
                E: `mysticalagriculture:${essence[i]}_essence`,
                D: 'minecraft:farmland'
            })
        }
    }

})

onEvent('item.tags', event => {
	
})