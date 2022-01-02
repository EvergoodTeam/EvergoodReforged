// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true

console.info(`Reloaded immersiveengineering.js`)

onEvent('recipes', event => {

    // Immersive Engineering ----------------------------------------------------------------------
    

    
    // Wires
    let immMats = ['copper', 'electrum']

    immMats.forEach(id =>{
        event.remove({output: `immersiveengineering:wirecoil_${id}`})
        event.shaped(`2x immersiveengineering:wirecoil_${id}`, [
            ' W ',
            'WSW',
            ' W '
          ], {
            W: `immersiveengineering:wire_${id}`,
            S: '#forge:rods/wooden'
        })
    })
    
    event.remove({output: 'immersiveengineering:wirecoil_steel'})
    event.shaped('2x immersiveengineering:wirecoil_steel', [
        ' W ',
        'XSX',
        ' W '
      ], {
        W: 'immersiveengineering:wire_steel',
        X: 'immersiveengineering:wire_aluminum',
        S: '#forge:rods/wooden'
    })

    event.remove({output: 'immersiveengineering:wirecoil_structure_rope'})
    event.shaped('2x immersiveengineering:wirecoil_structure_rope', [
        ' W ',
        'WSW',
        ' W '
      ], {
        W: 'immersiveengineering:hemp_fiber',
        S: '#forge:rods/wooden'
    })

    event.remove({output: 'immersiveengineering:wirecoil_structure_steel'})
    event.shaped('2x immersiveengineering:wirecoil_structure_steel', [
        ' W ',
        'WSW',
        ' W '
      ], {
        W: 'immersiveengineering:wire_steel',
        S: '#forge:rods/wooden'
    })

    event.remove({output: 'immersiveengineering:wirecoil_redstone'})
    event.shaped('2x immersiveengineering:wirecoil_redstone', [
        ' W ',
        'XSX',
        ' W '
      ], {
        W: 'immersiveengineering:wire_aluminum',
        X: 'minecraft:redstone',
        S: '#forge:rods/wooden'
    })



    // Mechanical Component
    event.remove({output: 'immersiveengineering:component_iron'})
    event.shaped('immersiveengineering:component_iron', [
        ' P ',
        'PCP',
        ' P '
      ], {
        C: 'immersiveengineering:wirecoil_copper',
        P: '#forge:plates/iron'
    })

    event.remove({output: 'immersiveengineering:component_steel'})
    event.shaped('immersiveengineering:component_steel', [
        ' P ',
        'PCP',
        ' P '
      ], {
        C: 'immersiveengineering:wirecoil_copper',
        P: '#forge:plates/steel'
    })



    // Accumulators
    event.remove({output: 'immersiveengineering:capacitor_lv'})
    event.shaped('immersiveengineering:capacitor_lv', [
        'PPP',
        'CEC',
        'TLT'
      ], {
        P: '#forge:plates/silver',
        C: 'immersiveengineering:wirecoil_copper',
        E: 'create:electron_tube',
        T: 'immersiveengineering:treated_wood_horizontal',
        L: 'immersiveengineering:light_engineering'
    })

    event.remove({output: 'immersiveengineering:capacitor_mv'})
    event.shaped('immersiveengineering:capacitor_mv', [
        'PPP',
        'CEC',
        'TLT'
      ], {
        P: '#forge:plates/constantan',
        C: 'immersiveengineering:wirecoil_electrum',
        E: 'immersiveengineering:capacitor_lv',
        T: 'immersiveengineering:treated_wood_horizontal',
        L: 'immersiveengineering:light_engineering'
    })

    event.remove({output: 'immersiveengineering:capacitor_hv'})
    event.shaped('immersiveengineering:capacitor_hv', [
        'PPP',
        'CEC',
        'TLT'
      ], {
        P: '#forge:plates/electrum',
        C: 'immersiveengineering:wirecoil_steel',
        E: 'immersiveengineering:capacitor_mv',
        T: 'immersiveengineering:treated_wood_horizontal',
        L: 'immersiveengineering:light_engineering'
    })

})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})