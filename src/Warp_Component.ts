export let invibox1 = new Entity()
export let invibox2 = new Entity()
export let invibox3 = new Entity()

let spark1 = new Entity()
let spark2 = new Entity()
let spark3 = new Entity()

export const inviMat = new Material()
inviMat.albedoColor = new Color4(5,5,5,0)


invibox1.addComponent(new Transform({ position: new Vector3(7.95, 1, 7.7),scale: new Vector3(1,1,1) }))
invibox1.addComponent(new BoxShape())
invibox1.addComponent(inviMat)
invibox1.getComponent(BoxShape).withCollisions = false

invibox2.addComponent(new Transform({ position: new Vector3(7.95, 7, 7.9),scale: new Vector3(1,1,1) }))
invibox2.addComponent(new BoxShape())
invibox2.addComponent(inviMat)
invibox2.getComponent(BoxShape).withCollisions = false

invibox3.addComponent(new Transform({ position: new Vector3(7, 10, 8),scale: new Vector3(1,1,1) }))
invibox3.addComponent(new BoxShape())
invibox3.addComponent(inviMat)
invibox3.getComponent(BoxShape).withCollisions = false

spark1.addComponent(new GLTFShape("model/Spark.glb"))
spark1.addComponent(new Transform(
    {
        position: new Vector3(7.95,0.5,7.9),
        scale: new Vector3(1,1,1)
    }
))

spark2.addComponent(new GLTFShape("model/Spark.glb"))
spark2.addComponent(new Transform(
    {
        position: new Vector3(7.95,5.5,7.7),
        scale: new Vector3(1,1,1)
    }
))

spark3.addComponent(new GLTFShape("model/Spark.glb"))
spark3.addComponent(new Transform(
    {
        position: new Vector3(7.95,9,7.7),
        scale: new Vector3(1,1,1)
    }
))

engine.addEntity(spark1)
engine.addEntity(spark2)
engine.addEntity(spark3)
engine.addEntity(invibox1)
engine.addEntity(invibox2)
engine.addEntity(invibox3)
