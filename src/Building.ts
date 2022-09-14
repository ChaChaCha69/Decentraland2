// const BHM_Building = new Entity('BHM Building')
// const Floor = new Entity()


// BHM_Building.addComponent(new Transform({
//   position: new Vector3(8, 0, 8),
//   rotation: new Quaternion(0, -1, 0),
//   scale: new Vector3(1, 1, 1)}))
// BHM_Building.addComponent(new GLTFShape("model/BHM Building2.glb"))
// BHM_Building.getComponent(GLTFShape).withCollisions = true
// BHM_Building.getComponent(GLTFShape).isPointerBlocker = true
// BHM_Building.getComponent(GLTFShape).visible = true

// Floor.addComponent(new GLTFShape("model/Floor.glb"))
// Floor.addComponent(new Transform({
//   position: new Vector3(0,0,0),
//   scale: new Vector3(1,1,1),
//   rotation: new Quaternion(0, 0, 0, 1)
// }))
// Floor.getComponent(GLTFShape).isPointerBlocker = true
// Floor.getComponent(GLTFShape).withCollisions = true
// Floor.getComponent(GLTFShape).visible = true

// engine.addEntity(Floor)
// engine.addEntity(BHM_Building)


const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("model/FloorBaseTiles_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const bhmBuildingTestVC = new Entity('bhmBuildingTestVC')
engine.addEntity(bhmBuildingTestVC)
bhmBuildingTestVC.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, -1, 0),
  scale: new Vector3(1, 1, 1)
})
bhmBuildingTestVC.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("model/BHM Building_Bt_03.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
bhmBuildingTestVC.addComponentOrReplace(gltfShape2)
