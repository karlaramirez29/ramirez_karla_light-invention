while (true) {
    console.log("light_level:" + input.lightLevel())
    if (input.lightLevel() > 40) {
        light.clear()
    } else if (input.lightLevel() >= 8) {
        light.setAll(light.rgb(255, 255, 255))
    }
    
}
