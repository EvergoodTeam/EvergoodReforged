// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true

console.info('Reloaded assemblylinemachines.js')

onEvent('recipes', event => {


    // Assembly Lines ----------------------------------------------------------------------


    // Logs
    let logs = ['chaosbark'];

    logs.forEach(id => {
        event.remove({output: `assemblylinemachines:${id}_planks`})
        event.shapeless(`assemblylinemachines:${id}_planks`, `#assemblylinemachines:${id}_logs`)
    })
    

    // Gearbox
    event.remove({output: 'assemblylinemachines:gearbox'})
    event.shaped('assemblylinemachines:gearbox', [
        'PGP',
        'GCG',
        'PLP'
      ], {
        P: '#forge:plates/iron',
        G: '#assemblylinemachines:crafting/gears/all',
        C: 'assemblylinemachines:empowered_coal',
        L: 'immersiveengineering:light_engineering'
    })

    // Simple Fluid Mixer
    event.remove({output: 'assemblylinemachines:simple_fluid_mixer'})
    event.shaped('assemblylinemachines:simple_fluid_mixer', [
        'SVS',
        'RFR',
        'III'
      ], {
        I: 'minecraft:iron_ingot',
        S: '#forge:plates/steel',
        R: '#forge:rods/steel',
        V: 'immersiveengineering:electron_tube',
        F: 'assemblylinemachines:fluid_bath'
    })

    // Simple Grinder
    event.remove({output: 'assemblylinemachines:simple_grinder'})
    event.shaped('assemblylinemachines:simple_grinder', [
        'SVS',
        'CGC',
        'III'
      ], {
        I: 'minecraft:iron_ingot',
        S: '#forge:plates/steel',
        C: 'immersiveengineering:wirecoil_redstone',
        V: 'immersiveengineering:electron_tube',
        G: 'assemblylinemachines:hand_grinder'
    })

    // Quantum Link
    event.remove({output: 'assemblylinemachines:quantum_link'})



})

onEvent('item.tags', event => {
	
})