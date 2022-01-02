// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')

    let toHide = ['kubejs:dummy_fluid_item', 'ae2:facade']

    toHide.forEach(id => {event.hide(id)})

});