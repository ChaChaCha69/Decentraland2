import { inviboxF1, inviboxF2, inviboxF3, inviboxF4, inviboxF5, inviboxF6, inviboxS} from "./Furniture";
import * as ui from '@dcl/ui-scene-utils'
import { triggerBox } from "./Warp_UI";
import * as utils from '@dcl/ecs-scene-utils'

let WatchP1 = new ui.CustomPrompt(ui.PromptStyles.LIGHT,750,400)
let WatchP2 = new ui.CustomPrompt(ui.PromptStyles.LIGHT,750,400)
let WatchP3 = new ui.CustomPrompt(ui.PromptStyles.LIGHT,750,400)
let WatchP4 = new ui.CustomPrompt(ui.PromptStyles.LIGHT,750,400)
let WatchP5 = new ui.CustomPrompt(ui.PromptStyles.LIGHT,750,400)
let WatchP6 = new ui.CustomPrompt(ui.PromptStyles.LIGHT,750,400)
let SurveyP = new ui.CustomPrompt(ui.PromptStyles.LIGHT,675,300)

WatchP1.hide()
WatchP2.hide()
WatchP3.hide()
WatchP4.hide()
WatchP5.hide()
WatchP6.hide()
SurveyP.hide()

inviboxS.addComponent(
    new utils.TriggerComponent(
        triggerBox,{
            onCameraEnter : () => {
                SurveyP.show()
                SurveyP.addText("Hi! You found us!",0,100,Color4.Black(),36)
                // SurveyP.addText("Our crypto survey is launched!",0,70,Color4.Black(),18)
                SurveyP.addText("Take just 5 minutes to share your opinion with us and",0,50,Color4.Gray(),21)
                SurveyP.addText("shape your future QNET experiences.",0,20,Color4.Gray(),21)
                SurveyP.addButton("Go",0,-80,()=>{
                    openExternalURL("https://tally.so/r/3xldv3")
                },ui.ButtonStyles.E)
            },
            onCameraExit : () => {
                SurveyP.hide()
            }
        }
    )
)

inviboxF1.addComponent(
    new utils.TriggerComponent(
        triggerBox,{
            onCameraEnter : () => {
                WatchP1.show()
                WatchP1.addIcon("images/BHM Logo2.png",120,150,200,60)
                WatchP1.addText("BERNHARD H. MAYER 150TH",140,80,Color4.FromInts(0,0,0,1),24)
                WatchP1.addText("ANNIVERSARY WATCH",140,50,Color4.FromInts(0,0,0,1),24)
                WatchP1.addText("This collection features a special commemorative",140,10,Color4.FromInts(102,102,102,1),14)
                WatchP1.addText("coin on the watch face at 3 o’clock, displaying the",140,-10,Color4.FromInts(102,102,102,1),14)
                WatchP1.addText("Mayer factory building in Pforzheim pre-World War II.",140,-30,Color4.FromInts(102,102,102,1),14)
                WatchP1.addIcon("images/BHM5.png",-200,0,375,500)
                WatchP1.addButton("Cancel",50,-140,()=>{WatchP1.hide()},ui.ButtonStyles.DARK)
                WatchP1.addButton("View",240,-140,()=>{openExternalURL("https://www.bernhardhmayer.com/150th-anniversary/")},ui.ButtonStyles.RED)
            },
            onCameraExit : () => {
                WatchP1.hide()
            }
        }
    )
    )

inviboxF2.addComponent(
    new utils.TriggerComponent(
        triggerBox,{
            onCameraEnter : () => {
                WatchP2.show()
                WatchP2.addIcon("images/BHM Logo2.png",120,150,200,60)
                WatchP2.addText("BERNHARD H. MAYER 150TH",140,80,Color4.FromInts(0,0,0,1),24)
                WatchP2.addText("ANNIVERSARY WATCH",140,50,Color4.FromInts(0,0,0,1),24)
                WatchP2.addText("This collection features a special commemorative",140,10,Color4.FromInts(102,102,102,1),14)
                WatchP2.addText("coin on the watch face at 3 o’clock, displaying the",140,-10,Color4.FromInts(102,102,102,1),14)
                WatchP2.addText("Mayer factory building in Pforzheim pre-World War II.",140,-30,Color4.FromInts(102,102,102,1),14)
                WatchP2.addIcon("images/BHM_White.png",-200,0,375,500)
                WatchP2.addButton("Cancel",50,-140,()=>{WatchP2.hide()},ui.ButtonStyles.DARK)
                WatchP2.addButton("View",240,-140,()=>{openExternalURL("https://www.bernhardhmayer.com/150th-anniversary/")},ui.ButtonStyles.RED)
            },
            onCameraExit : () => {
                WatchP2.hide()
            }
        }
    )
    )

inviboxF3.addComponent(
        new utils.TriggerComponent(
            triggerBox,{
                onCameraEnter : () => {
                    WatchP3.show()
                    WatchP3.addIcon("images/EmpireLogo.png",140,150,200,60)
                    WatchP3.addText("Bernhard H. Mayer Empire",140,80,Color4.FromInts(0,0,0,1),24)
                    WatchP3.addText("Portus Watch - Rose Gold",140,50,Color4.FromInts(0,0,0,1),24)
                    WatchP3.addText("Drafted with precision engineering, the Empire",140,10,Color4.FromInts(102,102,102,1),14)
                    WatchP3.addText("collection combines a classic style",140,-10,Color4.FromInts(102,102,102,1),14)
                    WatchP3.addText("with a contemporary, sophisticated design aesthetic.",140,-30,Color4.FromInts(102,102,102,1),14)
                    WatchP3.addIcon("images/Empire_RG.png",-200,0,375,500)
                    WatchP3.addButton("Cancel",50,-140,()=>{WatchP3.hide()},ui.ButtonStyles.DARK)
                    WatchP3.addButton("View",240,-140,()=>{openExternalURL("https://www.bernhardhmayer.com/150th-anniversary/")},ui.ButtonStyles.RED)
                },
                onCameraExit : () => {
                    WatchP3.hide()
                }
            }
        )
        )  
inviboxF4.addComponent(
    new utils.TriggerComponent(
        triggerBox,{
            onCameraEnter : () => {
                WatchP4.show()
                WatchP4.addIcon("images/EmpireLogo.png",140,150,200,60)
                WatchP4.addText("Bernhard H. Mayer Empire",140,80,Color4.FromInts(0,0,0,1),24)
                WatchP4.addText("Portus Watch - Rose Gold",140,50,Color4.FromInts(0,0,0,1),24)
                WatchP4.addText("A smart union of classic style with durability",140,10,Color4.FromInts(102,102,102,1),14)
                WatchP4.addText("and innovation. The all-steel bracelet, lugs, casing",140,-10,Color4.FromInts(102,102,102,1),14)
                WatchP4.addText("and bezel are performance engineered with brushed.",140,-30,Color4.FromInts(102,102,102,1),14)
                WatchP4.addIcon("images/Empire_Portus2.png",-200,0,375,500)
                WatchP4.addButton("Cancel",50,-140,()=>{WatchP4.hide()},ui.ButtonStyles.DARK)
                WatchP4.addButton("View",240,-140,()=>{openExternalURL("https://www.bernhardhmayer.com/150th-anniversary/")},ui.ButtonStyles.RED)
            },
            onCameraExit : () => {
                WatchP4.hide()
            }
        }
    )
)

inviboxF5.addComponent(
    new utils.TriggerComponent(
        triggerBox,{
            onCameraEnter : () => {
                WatchP5.show()
                WatchP5.addIcon("images/EmpireLogo.png",140,150,200,60)
                WatchP5.addText("Bernhard H. Mayer Empire",140,80,Color4.FromInts(0,0,0,1),24)
                WatchP5.addText("Clara Watch - Rose Gold",140,50,Color4.FromInts(0,0,0,1),24)
                WatchP5.addText("Crafted with precision engineering, the Empire",140,10,Color4.FromInts(102,102,102,1),14)
                WatchP5.addText("collection combines a classic style",140,-10,Color4.FromInts(102,102,102,1),14)
                WatchP5.addText("with a contemporary, sophisticated design aesthetic.",140,-30,Color4.FromInts(102,102,102,1),14)
                WatchP5.addIcon("images/Empire_CW.png",-200,0,375,500)
                WatchP5.addButton("Cancel",50,-140,()=>{WatchP5.hide()},ui.ButtonStyles.DARK)
                WatchP5.addButton("View",240,-140,()=>{openExternalURL("https://www.bernhardhmayer.com/150th-anniversary/")},ui.ButtonStyles.RED)
            },
            onCameraExit : () => {
                WatchP5.hide()
            }
        }
    )
)

inviboxF6.addComponent(
    new utils.TriggerComponent(
        triggerBox,{
            onCameraEnter : () => {
                WatchP6.show()
                WatchP6.addIcon("images/EmpireLogo.png",140,150,200,60)
                WatchP6.addText("Bernhard H. Mayer Empire",140,80,Color4.FromInts(0,0,0,1),24)
                WatchP6.addText("Portus Watch - Rose Gold",140,50,Color4.FromInts(0,0,0,1),24)
                WatchP6.addText("A smart union of classic style with durability",140,10,Color4.FromInts(102,102,102,1),14)
                WatchP6.addText("and innovation. The all-steel bracelet, lugs, casing",140,-10,Color4.FromInts(102,102,102,1),14)
                WatchP6.addText("and bezel are performance engineered with brushed.",140,-30,Color4.FromInts(102,102,102,1),14)
                WatchP6.addIcon("images/Empire_Portus.png",-200,0,375,500)
                WatchP6.addButton("Cancel",50,-140,()=>{WatchP6.hide()},ui.ButtonStyles.DARK)
                WatchP6.addButton("View",240,-140,()=>{openExternalURL("https://www.bernhardhmayer.com/150th-anniversary/")},ui.ButtonStyles.RED)
            },
            onCameraExit : () => {
                WatchP6.hide()
            }
        }
    )
)
