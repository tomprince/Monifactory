GTCEuStartupEvents.craftingComponents(event => {

    //Make LuV+ electrolyzer wires not osmium for funsies :)
    event.modify(CraftingComponent.WIRE_ELECTRIC, {
        LuV: UnificationEntry(TagPrefix.wireGtSingle, GTMaterials.VanadiumGallium),
        ZPM: UnificationEntry(TagPrefix.wireGtSingle, GTMaterials.NaquadahAlloy),
        UV: UnificationEntry(TagPrefix.wireGtSingle, GTMaterials.get('sculk_superconductor')),
        UHV: UnificationEntry(TagPrefix.wireGtSingle, GTMaterials.get('activated_netherite')),
        UEV: UnificationEntry(TagPrefix.wireGtSingle, GTMaterials.Holmium),
        UIV: UnificationEntry(TagPrefix.wireGtSingle, GTMaterials.get('monium')),
    });

    //Omnium & Holmium for wires/cables
    let wireCableComponentPrefixes = [
        [TagPrefix.wireGtQuadruple, TagPrefix.wireGtQuadruple, CraftingComponent.WIRE_QUAD],
        [TagPrefix.wireGtOctal, TagPrefix.wireGtOctal, CraftingComponent.WIRE_OCT],
        [TagPrefix.wireGtHex, TagPrefix.wireGtHex, CraftingComponent.WIRE_HEX],
        [TagPrefix.cableGtSingle, TagPrefix.wireGtSingle, CraftingComponent.CABLE],
        [TagPrefix.cableGtDouble, TagPrefix.wireGtDouble, CraftingComponent.CABLE_DOUBLE],
        [TagPrefix.cableGtQuadruple, TagPrefix.wireGtQuadruple, CraftingComponent.CABLE_QUAD],
        [TagPrefix.cableGtOctal, TagPrefix.wireGtOctal, CraftingComponent.CABLE_OCT],
        //[TagPrefix.wireGtHex, TagPrefix.cableGtHex, CraftingComponent.CABLE_HEX] // Seems borked? Causes crashes when uncommented
    ]

    wireCableComponentPrefixes.forEach(prefixComponentPair => {
        event.modify(prefixComponentPair[2], {
            UEV: UnificationEntry(prefixComponentPair[0], GTMaterials.get('omnium')),
            UIV: UnificationEntry(prefixComponentPair[1], GTMaterials.Holmium),
        });
    });

    //Netherite, Holmium, and Monium for tier up wires/cables
    //Currently useless because GT only autogenerates transformer recipes up to UV.
    let wireCableTierUpComponentPrefixes = [
        [TagPrefix.wireGtSingle, CraftingComponent.CABLE_TIER_UP],
        [TagPrefix.wireGtDouble, CraftingComponent.CABLE_TIER_UP_DOUBLE],
        [TagPrefix.wireGtQuadruple, CraftingComponent.CABLE_TIER_UP_QUAD],
        //[TagPrefix.wireGtOctal, CraftingComponent.CABLE_TIER_UP_OCT], // Seems borked. Same here as above.
        [TagPrefix.wireGtHex, CraftingComponent.CABLE_TIER_UP_HEX]
    ]

    wireCableTierUpComponentPrefixes.forEach(prefixComponentPair => {
        event.modify(prefixComponentPair[1], {
            UHV: UnificationEntry(prefixComponentPair[0], GTMaterials.get('activated_netherite')),
            UEV: UnificationEntry(prefixComponentPair[0], GTMaterials.Holmium),
            UIV: UnificationEntry(prefixComponentPair[0], GTMaterials.get('monium')),
        });
    });

    // Pipes
    let pipeComponentPrefixes = [
        [TagPrefix.pipeNormalFluid, CraftingComponent.PIPE_NORMAL],
        [TagPrefix.pipeLargeFluid, CraftingComponent.PIPE_LARGE],
        [TagPrefix.pipeNonupleFluid, CraftingComponent.PIPE_NONUPLE]
    ]

    pipeComponentPrefixes.forEach(prefixComponentPair => {
        event.modify(prefixComponentPair[1], {
            UHV: UnificationEntry(prefixComponentPair[0], GTMaterials.Neutronium),
            UEV: UnificationEntry(prefixComponentPair[0], GTMaterials.get('activated_netherite')),
            UIV: UnificationEntry(prefixComponentPair[0], GTMaterials.Holmium),
        });
    });

    // Glass
    event.modify(CraftingComponent.GLASS, {
        UHV: Item.of('gtceu:fusion_glass'),
        UEV: Item.of('gtceu:fusion_glass'),
        UIV: Item.of('gtceu:fusion_glass'),
    });

    // Plates
    event.modifyUnificationEntry(CraftingComponent.PLATE, {
        UEV: UnificationEntry(TagPrefix.plate, GTMaterials.get('omnium')),
        UIV: UnificationEntry(TagPrefix.plate, GTMaterials.get('infinity')),
        MAX: UnificationEntry(TagPrefix.plate, GTMaterials.get('holmium')),
    });

    // Hull plates
    event.modifyUnificationEntry(CraftingComponent.HULL_PLATE, {
        UEV: UnificationEntry(TagPrefix.plate, GTMaterials.get('polyethyl_cyanoacrylate')),
        UIV: UnificationEntry(TagPrefix.plate, GTMaterials.get('polyethyl_cyanoacrylate')),
        MAX: UnificationEntry(TagPrefix.plate, GTMaterials.get('polyethyl_cyanoacrylate')),
    });

    // Rotors
    event.modifyUnificationEntry(CraftingComponent.ROTOR, {
        UHV: UnificationEntry(TagPrefix.rotor, GTMaterials.Neutronium),
        UEV: UnificationEntry(TagPrefix.rotor, GTMaterials.get('activated_netherite')),
        UIV: UnificationEntry(TagPrefix.rotor, GTMaterials.Holmium),
    });

    // TODO: Sawblades (May require making tools for the material)

    // Resistive heating wires (typically, these match the EBF coil for that tier)
    let heatingCoilComponentPrefixes = [
        [TagPrefix.wireGtDouble, CraftingComponent.COIL_HEATING],
        [TagPrefix.wireGtQuadruple, CraftingComponent.COIL_HEATING_DOUBLE],
    ]

    heatingCoilComponentPrefixes.forEach(prefixComponentPair => {
        event.modify(prefixComponentPair[1], {
            UHV: UnificationEntry(prefixComponentPair[0], GTMaterials.get('omnium')),
            UEV: UnificationEntry(prefixComponentPair[0], GTMaterials.get('omnium')),
            UIV: UnificationEntry(prefixComponentPair[0], GTMaterials.get('omnium')),
        });
    });

    // Electric Coils
    event.modifyUnificationEntry(CraftingComponent.COIL_ELECTRIC, {
        UHV: UnificationEntry(TagPrefix.wireGtHex, GTMaterials.get('sculk_superconductor')),
        UEV: UnificationEntry(TagPrefix.wireGtHex, GTMaterials.get('activated_netherite')),
        UIV: UnificationEntry(TagPrefix.wireGtHex, GTMaterials.get('holmium')),
    });

    // Magnetic Rods
    event.modifyUnificationEntry(CraftingComponent.STICK_MAGNETIC, {
        UV: UnificationEntry(TagPrefix.rodLong, GTMaterials.SamariumMagnetic),
        UHV: UnificationEntry(TagPrefix.rodLong, GTMaterials.get('magnetic_terbium')),
        UEV: UnificationEntry(TagPrefix.rodLong, GTMaterials.get('magnetic_terbium')),
        UIV: UnificationEntry(TagPrefix.rodLong, GTMaterials.get('magnetic_terbium')),
    });

    // Distillation Rods
    event.modifyUnificationEntry(CraftingComponent.STICK_DISTILLATION, {
        UHV: UnificationEntry(TagPrefix.spring, GTMaterials.Actinium),
        UEV: UnificationEntry(TagPrefix.spring, GTMaterials.get('sculk_bioalloy')),
        UIV: UnificationEntry(TagPrefix.spring, GTMaterials.get('eltz')),
    });

    // Electromagnetic Rods
    event.modifyUnificationEntry(CraftingComponent.STICK_ELECTROMAGNETIC, {
        IV: UnificationEntry(TagPrefix.rod, GTMaterials.Neodymium),
        LuV: UnificationEntry(TagPrefix.rod, GTMaterials.Samarium),
        ZPM: UnificationEntry(TagPrefix.rod, GTMaterials.Samarium),
        UV: UnificationEntry(TagPrefix.rod, GTMaterials.Samarium),
        UHV: UnificationEntry(TagPrefix.rod, GTMaterials.Terbium),
        UEV: UnificationEntry(TagPrefix.rod, GTMaterials.Terbium),
        UIV: UnificationEntry(TagPrefix.rod, GTMaterials.Terbium),
    });

    // Chem reactor pipe ingredient
    event.modifyUnificationEntry(CraftingComponent.PIPE_REACTOR, {
        UHV: UnificationEntry(TagPrefix.pipeNormalFluid, GTMaterials.Polybenzimidazole),
        UEV: UnificationEntry(TagPrefix.pipeLargeFluid, GTMaterials.Polybenzimidazole),
        UIV: UnificationEntry(TagPrefix.pipeLargeFluid, GTMaterials.Polybenzimidazole),
    });

    // PIC ingredient
    event.modifyItem(CraftingComponent.POWER_COMPONENT, {
        UEV: Item.of('kubejs:uxpic_chip'),
        UIV: Item.of('kubejs:uxpic_chip'),
    });

    // Spring
    event.modifyUnificationEntry(CraftingComponent.SPRING, {
        UEV: UnificationEntry(TagPrefix.spring, GTMaterials.get('activated_netherite')),
        UIV: UnificationEntry(TagPrefix.spring, GTMaterials.get('holmium')),
    });

    // Frame
    event.modifyUnificationEntry(CraftingComponent.FRAME, {
        UHV: UnificationEntry(TagPrefix.frameGt, GTMaterials.Neutronium),
        UEV: UnificationEntry(TagPrefix.frameGt, GTMaterials.get('omnium')),
        UIV: UnificationEntry(TagPrefix.frameGt, GTMaterials.get('infinity')),
    });
});
