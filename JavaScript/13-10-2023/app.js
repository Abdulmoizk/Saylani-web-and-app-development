var cars = {
    civic: {
        name: "H"
    }
}

for (var key in cars){
    for (var key2 in cars[key])
    console.log(key)
}