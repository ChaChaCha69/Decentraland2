import { RotateTransformComponent, ScaleTransformComponent } from "@dcl/ecs-scene-utils"
import { inviMat } from "./Warp_Component"

export const inviboxF1 = new Entity()
export const inviboxF2 = new Entity()
export const inviboxF3 = new Entity()
export const inviboxF4 = new Entity()
export const inviboxF5 = new Entity()
export const inviboxF6 = new Entity()
export const inviboxS = new Entity()

let spark4 = new Entity()

spark4.addComponent(new GLTFShape("model/spark.glb"))
spark4.addComponent(new Transform({
    position : new Vector3(7.5,6.5,13.5),
    scale : new Vector3(1,1,1)
}))

let spark5 = new Entity()

spark5.addComponent(new GLTFShape("model/spark.glb"))
spark5.addComponent(new Transform({
    position : new Vector3(7.5,6.5,2.3),
    scale : new Vector3(1,1,1)
}))


//#1
const myVideoClip = new VideoClip("https://bafybeib2wplfimj4rszwsnd3chhesj4pminmszutqlsqvdfgzhjjek5dcm.ipfs.dweb.link/BHM_Video.mp4")

//#2
const myVideoTex = new VideoTexture(myVideoClip)

//#3
const myVideoMat = new Material()
myVideoMat.albedoTexture = myVideoTex
myVideoMat.specularIntensity = 1
myVideoMat.roughness = 0.5
myVideoMat.metallic = 0.5

//#4
const screen = new Entity()
screen.addComponent(new PlaneShape())
screen.addComponent(
    new Transform({
        position: new Vector3(11.9,7,8),
        scale: new Vector3(4.375,2.5,4.375),
        rotation: new Quaternion(0,-1,0)

    })
)
screen.addComponent(myVideoMat)
screen.addComponent(
    new OnPointerDown(()=>{
        myVideoTex.playing = !myVideoTex.playing
    },{
        hoverText : "Play & Pause"
    })
)
engine.addEntity(screen)

myVideoTex.play()
myVideoTex.loop = true
myVideoTex.volume = 1

// Survey
inviboxS.addComponent(new BoxShape())
inviboxS.addComponent(new Transform({
    position: new Vector3(13,7,8),
    scale: new Vector3(1,1,1)
}))
inviboxS.addComponent(inviMat)
inviboxS.getComponent(BoxShape).withCollisions = false


inviboxF1.addComponent(new BoxShape())
inviboxF1.addComponent(new Transform({
    position: new Vector3(9.3,6.5,13.5),
    scale: new Vector3(1,1,1)
}))
inviboxF1.addComponent(inviMat)
inviboxF1.getComponent(BoxShape).withCollisions = true

inviboxF2.addComponent(new BoxShape())
inviboxF2.addComponent(new Transform({
    position: new Vector3(6.25,6.5,13.5),
    scale: new Vector3(1,1,1)
}))
inviboxF2.addComponent(inviMat)
inviboxF2.getComponent(BoxShape).withCollisions = true


inviboxF3.addComponent(new BoxShape())
inviboxF3.addComponent(new Transform({
    position: new Vector3(9.9,6.5,2.6),
    scale: new Vector3(0.5,0.5,0.5)
}))
inviboxF3.addComponent(inviMat)
inviboxF3.getComponent(BoxShape).withCollisions = true

inviboxF4.addComponent(new BoxShape())
inviboxF4.addComponent(new Transform({
    position: new Vector3(6.5,6.5,2.6),
    scale: new Vector3(0.5,0.5,0.5)
}))
inviboxF4.addComponent(inviMat)
inviboxF4.getComponent(BoxShape).withCollisions = true

inviboxF5.addComponent(new BoxShape())
inviboxF5.addComponent(new Transform({
    position: new Vector3(8.7,6.5,2.6),
    scale: new Vector3(0.5,0.5,0.5)
}))
inviboxF5.addComponent(inviMat)
inviboxF5.getComponent(BoxShape).withCollisions = true

inviboxF6.addComponent(new BoxShape())
inviboxF6.addComponent(new Transform({
    position: new Vector3(5.2,6.5,2.6),
    scale: new Vector3(0.5,0.5,0.5)
}))
inviboxF6.addComponent(inviMat)
inviboxF6.getComponent(BoxShape).withCollisions = true

engine.addEntity(spark4)
engine.addEntity(inviboxF1)
engine.addEntity(inviboxF2)
engine.addEntity(inviboxF3)
engine.addEntity(inviboxF4)
engine.addEntity(inviboxF5)
engine.addEntity(inviboxF6)
engine.addEntity(inviboxS)

