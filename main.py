while True:
    print("light_level:" + input.light_level())
    if input.light_level() > 40:
        light.clear()
    elif input.light_level() >= 8:
        light.set_all(light.rgb(255,255,255))
        