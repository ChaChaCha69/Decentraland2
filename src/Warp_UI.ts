import { movePlayerTo } from '@decentraland/RestrictedActions'
import * as ui from '@dcl/ui-scene-utils'
import * as utils from '@dcl/ecs-scene-utils'
import { invibox1, invibox2, invibox3  } from './Warp_Component'

export let triggerBox = new utils.TriggerBoxShape()

let WarpPrompt = new ui.CustomPrompt(ui.PromptStyles.LIGHT,675,300)
let WarpPrompt2 = new ui.CustomPrompt(ui.PromptStyles.LIGHT,675,300)
WarpPrompt.hide()
WarpPrompt2.hide()

invibox1.addComponent(
    new utils.TriggerComponent(
        triggerBox,{
            onCameraEnter : () => {
                WarpPrompt.show()
                WarpPrompt.addText("2nd Floor",-185,100,Color4.Black(),36)
                WarpPrompt.addText("Product Showcases",-180,80,Color4.Black(),18)
                WarpPrompt.addText("Visit our product showcases",-160,40,Color4.Gray(),15)
                WarpPrompt.addText("and shops",-225,20,Color4.Gray(),15)

                WarpPrompt.addText("3rd Floor",165,100,Color4.Black(),36)
                WarpPrompt.addText("Knowledge Centre",170,80,Color4.Black(),18)
                WarpPrompt.addText("Seminar room and watch",175,40,Color4.Gray(),15)
                WarpPrompt.addText("academy.",120,20,Color4.Gray(),15)

                WarpPrompt.addButton("Go",-180,-80,()=>{
                    movePlayerTo({x:7.3, y:6,z:6.25},{x:2,y:8,z:4}),
                    WarpPrompt.hide(),
                    ui.displayAnnouncement("2nd Floor: BHM Showcase",3,Color4.Yellow(),50,true)
                },ui.ButtonStyles.E)
                WarpPrompt.addButton("Coming Soon",170,-80,()=>{
                    // movePlayerTo({x:10, y:11,z:7}),
                    // WarpPrompt.hide(),
                    // ui.displayAnnouncement("Floor 3:",3,Color4.Yellow(),50,true)
                })
            },
            onCameraExit : () => {
                WarpPrompt.hide()
            }
        }
    )
)

invibox1.addComponent(
    new OnPointerDown(
        (e) => {
            log("Click invi1")
        },
        {button: ActionButton.POINTER, hoverText: 'Warp point'}
    )
)

invibox2.addComponent(
    new utils.TriggerComponent(
        triggerBox,{
            onCameraEnter : () => {
                WarpPrompt2.show()
                WarpPrompt2.addText("1st Floor",-185,100,Color4.Black(),36)
                WarpPrompt2.addText("Ground Floor",-195,80,Color4.Black(),18)
                WarpPrompt2.addText("Welcome to BHM Lobby",-170,40,Color4.Gray(),15)
                

                WarpPrompt2.addText("3rd Floor",165,100,Color4.Black(),36)
                WarpPrompt2.addText("Knowledge Centre",170,80,Color4.Black(),18)
                WarpPrompt2.addText("Seminar room and watch",175,40,Color4.Gray(),15)
                WarpPrompt2.addText("academy.",120,20,Color4.Gray(),15)

                WarpPrompt2.addButton("Go",-180,-80,()=>{
                    movePlayerTo({x:7, y:1,z:6},{x:2,y:8,z:4}),
                    WarpPrompt2.hide(),
                    ui.displayAnnouncement("1st Floor: Ground Floor",3,Color4.Yellow(),50,true)
                },ui.ButtonStyles.E)
                WarpPrompt2.addButton("Coming Soon",170,-80,()=>{
                    // movePlayerTo({x:10, y:11,z:7}),
                    // WarpPrompt.hide(),
                    // ui.displayAnnouncement("Floor 3:",3,Color4.Yellow(),50,true)
                })
                // WarpPrompt.addText("Floor 1",-300,120,Color4.Black(),24)
                // WarpPrompt.addText("Floor 3",300,120,Color4.Black(),24)
                // WarpPrompt.addButton("Go to First",-250,0,()=>{
                //     movePlayerTo({x:7, y:1,z:6}),
                //     WarpPrompt.hide(),
                //     ui.displayAnnouncement("Floor 1: BHM History",3,Color4.Yellow(),50,true)
                // },ui.ButtonStyles.RED)
                // WarpPrompt.addButton("Go to Third",250,0,()=>{
                //     movePlayerTo({x:10, y:11,z:7}),
                //     WarpPrompt.hide(),
                //     ui.displayAnnouncement("Floor 3:",3,Color4.Yellow(),50,true)
                // },ui.ButtonStyles.RED)
                // WarpPrompt.addButton("Cancel",0,-120,()=>{WarpPrompt.hide()},ui.ButtonStyles.DARK)
            },
            onCameraExit : () => {
                WarpPrompt2.hide()
            }
        }
    )
)
  
invibox2.addComponent(
    new OnPointerDown(
        (e) => {                
        },{hoverText: 'Warp Point'}
    )
)

// invibox3.addComponent(
//     new utils.TriggerComponent(
//         triggerBox,{
//             onCameraEnter : () => {
//                 WarpPrompt.show()
//                 WarpPrompt.addText("Floor 1",-300,120,Color4.Black(),24)
//                 WarpPrompt.addText("Floor 2",300,120,Color4.Black(),24)
//                 WarpPrompt.addButton("Go to First",-250,0,()=>{
//                     movePlayerTo({x:7, y:1,z:7}),
//                     WarpPrompt.hide(),
//                     ui.displayAnnouncement("Floor 1: BHM History",3,Color4.Yellow(),50,true)
//                 },ui.ButtonStyles.RED)
//                 WarpPrompt.addButton("Go to Second",250,0,()=>{
//                     movePlayerTo({x:8, y:6,z:7}),
//                     WarpPrompt.hide(),
//                     ui.displayAnnouncement("Floor 2: 150th BHM",3,Color4.Yellow(),50,true)
//                 },ui.ButtonStyles.RED)
//                 WarpPrompt.addButton("Cancel",0,-120,()=>{WarpPrompt.hide()},ui.ButtonStyles.DARK)
//             },
//             onCameraExit : () => {
//                 WarpPrompt.hide()
//             }
//         }
//     )
// )

invibox3.addComponent(
    new OnPointerDown(
        (e) => {},
        {hoverText: 'Warp Point'}
    )
)
