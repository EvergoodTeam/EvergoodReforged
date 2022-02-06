// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true

console.info('Reloaded extendedcrafting.js')

onEvent('recipes', event => {


    // Extended Crafting ----------------------------------------------------------------------

    // Black Iron
    event.remove({id: 'extendedcrafting:black_iron_ingot'})
    event.shaped('extendedcrafting:black_iron_ingot', [
        ' O ',
        'GIG',
        ' O '
      ], {
        I: 'minecraft:iron_ingot',
        G: 'immersiveengineering:dust_hop_graphite',
        O: 'occultism:burnt_otherstone'
    })


    // Black Iron Frame
    event.replaceInput({output: 'extendedcrafting:frame'}, 'extendedcrafting:black_iron_slate', 'assemblylinemachines:miniature_black_hole')

    // Luminessence
    event.remove({id: 'extendedcrafting:luminessence'})
    event.shaped('extendedcrafting:luminessence', [
        'GB ',
        'RP ',
        '   '
      ], {
        R: 'minecraft:redstone',
        G: 'minecraft:glowstone_dust',
        P: 'minecraft:gunpowder',
        B: 'malum:blazing_quartz'
    })

    // Basic Component
    event.replaceInput({output: 'extendedcrafting:basic_component'}, 'minecraft:iron_ingot', 'assemblylinemachines:pure_titanium')

    // Advanced Component
    event.replaceInput({output: 'extendedcrafting:advanced_component'}, 'minecraft:gold_ingot', 'assemblylinemachines:pure_gold')

    // Basic Crafting Table
    event.replaceInput({output: 'extendedcrafting:basic_table'}, 'minecraft:iron_block', 'extendedcrafting:frame')

    // Elite Crafting Table
    event.remove({output: 'extendedcrafting:elite_table'})
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            'ABCBA',
            'DEFED',
            'GHIHG',
            'DEFED',
            'ABDBA'
        ],
        key: {
            A: {
                item: 'tconstruct:slimesteel_nugget'
            },
            B: {
                item: 'extendedcrafting:black_iron_slate'
            },
            C: {
                item: 'extendedcrafting:elite_catalyst'
            },
            D: {
                item: 'extendedcrafting:elite_component'
            },
            E: {
                item: 'assemblylinemachines:attuned_titanium_plate'
            },
            F: {
                item: 'assemblylinemachines:electrified_netherite_blend'
            },
            G: {
                item: 'biggerreactors:cyanite_ingot'
            },
            H: {
                item: 'extendedcrafting:advanced_table'
            },
            I: {
                item: 'ae2:engineering_processor'
            }
        },
        result: {
            item: 'extendedcrafting:elite_table'
        }
    })

    // Ultimate Crafting Table
    event.remove({output: 'extendedcrafting:ultimate_table'})
    event.custom({
        type: "extendedcrafting:shaped_table",
        pattern: [
          "ABCDCBA",
          "BEFGFEB",
          "CHIJKHC",
          "DALMLAD",
          "CHKJIHC",
          "BEFAFEB",
          "ABCDCBA"
        ],
        key: {
          A: {
            item: "extendedcrafting:black_iron_slate"
          },
          B: {
            item: "extendedcrafting:ultimate_component"
          },
          C: {
            item: "createaddition:capacitor"
          },
          D: {
            item: "assemblylinemachines:flerovium_plate"
          },
          E: {
            item: "aquaculture:neptunium_nugget"
          },
          F: {
            item: "beyond_earth:compressed_ostrum"
          },
          G: {
            item: "extendedcrafting:ultimate_catalyst"
          },
          H: {
            item: "assemblylinemachines:overclocked_conduction_component"
          },
          I: {
            item: "malum:hex_ash"
          },
          J: {
            item: "ae2:molecular_assembler"
          },
          K: {
            item: "assemblylinemachines:prismatic_dust"
          },
          L: {
            item: "extendedcrafting:elite_table"
          },
          M: {
            type: "forge:nbt",
            item: "malum:ceaseless_impetus",
            count: 1,
            nbt: "{Damage:0}"
          }
        },
        result: {
          item: 'extendedcrafting:ultimate_table'
        }
      })



})

onEvent('item.tags', event => {
	
})